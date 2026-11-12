/* Service worker da Maratona Marvel: cache dos arquivos do app, funciona offline */
var C="maratona-v202611122200"+"202611121120";var F=["./","index.html","style.css","app.js","data.js","qr.js","extras.js","robot3d.js","robot3d.css","loja.js","loja.css","quizbot.js","icon.png","icon-192.png","icon-512.png","icon-maskable-512.png","manifest.webmanifest"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.map(function(u){return c.add(new Request(u,{cache:"reload"})).catch(function(){});}));}));});
self.addEventListener("message",function(e){if(e.data&&e.data.type==="SKIP_WAITING")self.skipWaiting();});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C&&n.indexOf("maratona-")===0;}).map(function(n){return caches.delete(n);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.open(C).then(function(c){return c.match(r,{ignoreSearch:true}).then(function(hit){var net=fetch(r).then(function(res){if(res&&res.ok)c.put(r,res.clone());return res;}).catch(function(){return hit||c.match("index.html");});return hit||net;});}));});
self.addEventListener("notificationclick",function(e){e.notification.close();e.waitUntil(self.clients.matchAll({type:"window"}).then(function(l){return l.length?l[0].focus():self.clients.openWindow("./");}));});
