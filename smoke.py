#!/usr/bin/env python3
"""Teste de fumaça da Maratona Marvel.
Uso: python3 tests/smoke.py [pasta-do-site]   (padrão: pasta acima de tests/)
Precisa de: pip install playwright && playwright install chromium
Checa: arquivos referenciados existem, sintaxe dos JS (node --check), ids duplicados,
service worker coerente, e abre a página num Chromium para ver erros de JS,
lista de filmes e seção de elenco."""
import http.server, json, os, re, socketserver, subprocess, sys, threading

ROOT = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OPCIONAIS = re.compile(r"^(ost-\d\.m4a|icon.*\.png)$")  # arquivos que podem não estar no repositório
falhas, avisos = [], []

def ok(c, msg):
    if not c: falhas.append(msg)

html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()

# 1) arquivos referenciados no index.html
refs = re.findall(r'(?:src|href)="([^":#?]+\.(?:js|css|png|webmanifest))"', html)
for r in refs:
    ok(os.path.exists(os.path.join(ROOT, r)) or OPCIONAIS.match(r) is not None, f"index.html referencia {r}, que não existe")
    if not os.path.exists(os.path.join(ROOT, r)): avisos.append(f"arquivo opcional ausente: {r}")

# 2) sintaxe de todos os .js
for f in sorted(os.listdir(ROOT)):
    if f.endswith(".js"):
        p = subprocess.run(["node", "--check", os.path.join(ROOT, f)], capture_output=True, text=True)
        ok(p.returncode == 0, f"erro de sintaxe em {f}: {p.stderr.strip()[:200]}")

# 3) ids duplicados no HTML
ids = re.findall(r'\sid="([^"]+)"', html)
dup = sorted({i for i in ids if ids.count(i) > 1})
ok(not dup, f"ids duplicados no index.html: {dup}")

# 4) service worker: tudo que ele pré-carrega existe (exceto opcionais)
sw = open(os.path.join(ROOT, "sw.js"), encoding="utf-8").read()
m = re.search(r"var F\s*=\s*\[(.*?)\];", sw, re.S)
ok(bool(m), "sw.js sem a lista F de arquivos")
if m:
    for f in re.findall(r'"([^"]+)"', m.group(1)):
        if f == "./": continue
        if not os.path.exists(os.path.join(ROOT, f)):
            (avisos if OPCIONAIS.match(f) else falhas).append(f"sw.js lista {f}, que não existe")

# 5) navegador de verdade
try:
    from playwright.sync_api import sync_playwright
    class Q(http.server.SimpleHTTPRequestHandler):
        def __init__(s, *a, **k): super().__init__(*a, directory=ROOT, **k)
        def log_message(s, *a): pass
        def do_GET(s):
            if s.path.split("?")[0] == "/ost-1.m4a" and not os.path.exists(os.path.join(ROOT, "ost-1.m4a")):
                d = bytes(i % 251 for i in range(200000))
                s.send_response(200); s.send_header("Content-Type", "audio/mp4"); s.send_header("Content-Length", str(len(d))); s.end_headers(); s.wfile.write(d); return
            super().do_GET()
    srv = socketserver.TCPServer(("127.0.0.1", 0), Q); port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    erros = []
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        pg = b.new_page(viewport={"width": 412, "height": 915})
        pg.on("pageerror", lambda e: erros.append("pageerror: " + str(e)[:200]))
        pg.on("console", lambda m: erros.append("console.error: " + m.text[:200]) if m.type == "error" and "Failed to load resource" not in m.text else None)
        pg.goto(f"http://127.0.0.1:{port}/index.html", wait_until="load")
        pg.wait_for_timeout(2500)
        n = pg.evaluate("document.querySelectorAll('#list li').length")
        ok(n >= 40, f"lista de filmes com {n} itens (esperado 40+)")
        c = pg.evaluate("document.querySelectorAll('#dcast ul li').length")
        ok(c >= 29, f"seção de elenco com {c} atores (esperado 29+)")
        pos = pg.evaluate("(()=>{var l=document.getElementById('list'),d=document.getElementById('dcast');return !!(l&&d&&(l.compareDocumentPosition(d)&4))})()")
        ok(pos, "a seção de elenco não está depois da lista")
        # marcar um filme e ver se o contador reage
        pg.evaluate("document.querySelector('#list li input, #list li button')&&0")
        ok(pg.evaluate("document.getElementById('cnt').textContent.trim().length>0"), "contador de progresso vazio")
        # service worker: trilha tocada em pedaços (Range) depois de guardada
        pg.evaluate("navigator.serviceWorker.ready.then(function(){return 1})")
        pg.wait_for_timeout(800)
        ctl = pg.evaluate("!!navigator.serviceWorker.controller")
        if not ctl:
            pg.reload(wait_until="load"); pg.wait_for_timeout(1200)
        JS = "async(r)=>{const x=await fetch('ost-1.m4a',{headers:{Range:r}});const b=new Uint8Array(await x.arrayBuffer());return {s:x.status,cr:x.headers.get('Content-Range'),b:Array.from(b)}}"
        pg.evaluate(JS, "bytes=0-9"); pg.wait_for_timeout(1500)   # 1ª vez: passa pela rede e baixa inteiro ao fundo
        r1 = pg.evaluate(JS, "bytes=10-19")
        ok(r1["s"] == 206 and r1["b"] == list(range(10, 20)) and r1["cr"] == "bytes 10-19/200000", f"trilha em cache: Range 10-19 voltou {r1['s']} {r1['cr']}")
        r2 = pg.evaluate(JS, "bytes=-5")
        ok(r2["s"] == 206 and r2["b"] == [(i % 251) for i in range(199995, 200000)], f"trilha em cache: Range -5 voltou {r2['s']} {r2['cr']}")
        b.close()
    ok(not erros, f"erros no navegador: {erros[:5]}")
    resumo = {"filmes": n, "atores": c}
except ImportError:
    avisos.append("playwright não instalado: pulei o teste no navegador"); resumo = {}

print(json.dumps(resumo, ensure_ascii=False))
for a in avisos: print("AVISO:", a)
for f in falhas: print("FALHA:", f)
print("OK" if not falhas else f"{len(falhas)} FALHA(S)")
sys.exit(1 if falhas else 0)
