/* Service worker da Maratona Marvel.
   - arquivos do app: cache na instalação, funciona offline (versão em C: mude ao publicar)
   - trilha sonora (ost-1..6.m4a): baixa inteira em segundo plano na 1ª vez que toca e depois toca offline
   - fontes do Google escolhidas nas configurações: guardadas ao usar a 1ª vez e funcionam offline
   Os caches "mm-trilha" e "mm-fontes" não são apagados a cada versão, para não baixar de novo. */
var C = "maratona-v202611132100";
var F = ["./", "index.html", "style.min.css", "app.min.js", "data.js", "qr.js", "extras.min.js", "elenco.js", "elenco-doomsday.webp",
  "robot3d.min.js", "robot3d.min.css", "loja.min.js", "loja.min.css", "quizbot.min.js",
  "icon.png", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "manifest.webmanifest"];
var TRILHA = "mm-trilha", FONTES = "mm-fontes";
var RE_OST = /\/ost-\d\.m4a$/;

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(C).then(function (c) {
    return Promise.all(F.map(function (u) { return c.add(new Request(u, { cache: "reload" })).catch(function () {}); }));
  }));
});
self.addEventListener("message", function (e) { if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.filter(function (n) { return n !== C && n.indexOf("maratona-") === 0; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

/* o <audio> pede o arquivo em pedaços (Range): devolve o pedaço certo a partir do arquivo inteiro guardado */
function pedaco(res, req) {
  var m = /bytes=(\d*)-(\d*)/.exec(req.headers.get("range") || "");
  if (!m) return res;
  return res.blob().then(function (b) {
    var n = b.size, s, e;
    if (m[1] === "") { s = Math.max(0, n - +m[2]); e = n - 1; }
    else { s = +m[1]; e = m[2] === "" ? n - 1 : Math.min(+m[2], n - 1); }
    if (s >= n) return new Response("", { status: 416, headers: { "Content-Range": "bytes */" + n } });
    return new Response(b.slice(s, e + 1), { status: 206, statusText: "Partial Content", headers: {
      "Content-Type": res.headers.get("Content-Type") || "audio/mp4", "Content-Range": "bytes " + s + "-" + e + "/" + n,
      "Content-Length": String(e - s + 1), "Accept-Ranges": "bytes" } });
  });
}
function trilha(e, r) {
  var url = r.url.split("?")[0];
  e.respondWith(caches.open(TRILHA).then(function (c) {
    return c.match(url).then(function (hit) {
      if (hit) return pedaco(hit, r);
      /* 1ª vez: toca direto da rede e baixa o arquivo inteiro em segundo plano (se a conexão não for de economia de dados) */
      var cn = self.navigator && self.navigator.connection;
      if (!(cn && cn.saveData)) e.waitUntil(fetch(url).then(function (res) { if (res && res.ok && res.status === 200) return c.put(url, res); }).catch(function () {}));
      return fetch(r);
    });
  }));
}
function fonte(e, r) {
  e.respondWith(caches.open(FONTES).then(function (c) {
    return c.match(r).then(function (hit) {
      var net = fetch(r).then(function (res) { if (res && (res.ok || res.type === "opaque")) c.put(r, res.clone()); return res; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
}

self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET") return;
  var u = new URL(r.url);
  if (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com") return fonte(e, r);
  if (u.origin !== location.origin) return;
  if (RE_OST.test(u.pathname)) return trilha(e, r);
  e.respondWith(caches.open(C).then(function (c) {
    return c.match(r, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(r).then(function (res) { if (res && res.ok) c.put(r, res.clone()); return res; })
        .catch(function () { return hit || c.match("index.html"); });
      return hit || net;
    });
  }));
});
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then(function (l) { return l.length ? l[0].focus() : self.clients.openWindow("./"); }));
});
