"""Teste de fumaça: abre o site no celular, usa a lojinha (comprar com confirmação, looks, sorteio) e falha se houver erro de JS.
Uso: python3 tests/smoke_ui.py   (precisa de: pip install playwright && playwright install chromium)"""
import functools, http.server, socketserver, threading, os, sys
from playwright.sync_api import sync_playwright
root = os.path.join(os.path.dirname(__file__), "..")
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = socketserver.TCPServer(("127.0.0.1", 0), functools.partial(Q, directory=root))
threading.Thread(target=srv.serve_forever, daemon=True).start()
errs, ok = [], []
def check(name, cond): (ok if cond else errs).append(name if cond else "FALHOU: " + name)
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={"width": 390, "height": 800})
    pg.on("pageerror", lambda e: errs.append("JS: " + str(e)[:160]))
    pg.add_init_script("localStorage.setItem('maratona-moedas','600');localStorage.setItem('maratona-loja-bonus','1')")
    pg.goto(f"http://127.0.0.1:{srv.server_address[1]}/index.html"); pg.wait_for_timeout(2500)
    check("lista de títulos", pg.locator("#list li").count() > 40)
    check("robô 8.0 carregado", pg.evaluate("!!(window.MR_R8 && MR_R8.animacoes.length>=8)"))
    pg.click("#hloja"); pg.wait_for_timeout(600)
    check("lojinha abre", pg.locator("#loja").is_visible())
    pg.click("[data-a=tab][data-t=head]"); pg.wait_for_timeout(200)
    pg.click("[data-a=buy][data-i=halo]"); pg.wait_for_timeout(200)
    check("compra cara pede confirmação", "Confirmar" in pg.locator("[data-a=buy][data-i=halo]").inner_text())
    pg.click("[data-a=buy][data-i=halo]"); pg.wait_for_timeout(500)
    check("compra confirmada", pg.evaluate("JSON.parse(localStorage.getItem('maratona-loja-itens')).halo===1"))
    pg.click("[data-a=lk][data-n='0']"); pg.wait_for_timeout(200)
    check("look salvo", pg.evaluate("JSON.parse(localStorage.getItem('maratona-loja-looks'))[0].head==='halo'"))
    pg.click("[data-a=clr]"); pg.wait_for_timeout(200)
    pg.click("[data-a=lk][data-n='0']"); pg.wait_for_timeout(200)
    check("look aplicado", pg.evaluate("JSON.parse(localStorage.getItem('maratona-loja-eq')).head==='halo'"))
    pg.click("[data-a=dice]"); pg.wait_for_timeout(200)
    pg.keyboard.press("Escape"); pg.wait_for_timeout(300)
    check("Esc fecha a lojinha", not pg.locator("#loja").is_visible())
    b.close()
print("\n".join(ok)); print("\n".join(errs) or "tudo certo")
sys.exit(1 if errs else 0)
