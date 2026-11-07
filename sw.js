/* Service worker da Maratona Marvel.
   Para forçar atualização nos aparelhos, mude VERSION. */
const VERSION = "v9";
const CACHE = "maratona-" + VERSION;
const FONTES = "maratona-fontes";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith("maratona-") && k !== CACHE && k !== FONTES).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Responde do cache na hora e atualiza em segundo plano.
function velhoEAtualiza(req, nome) {
  return caches.open(nome).then((c) =>
    c.match(req, { ignoreSearch: true }).then((hit) => {
      const rede = fetch(req).then((r) => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || rede;
    })
  );
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(velhoEAtualiza(req, FONTES));
    return;
  }
  if (url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(velhoEAtualiza(req, CACHE).then((r) => r || caches.match("index.html")));
    return;
  }
  e.respondWith(velhoEAtualiza(req, CACHE));
});
