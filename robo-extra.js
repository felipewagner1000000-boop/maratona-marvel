/* Robô 8.0: mais animações 3D e mais falas. Usa window.MR_SAY (do app) e as classes r8-* do robo-extra.css.
   Para acrescentar falas, edite as listas em FALAS. Para ajustar a frequência, veja FREQ. */
(function () {
  var d = document.querySelector("body>.dm") || document.querySelector(".dm");
  if (!d || !window.MR_SAY) return;
  var H = document.documentElement;

  var FALAS = {
    ocioso: ["Tô de olho nessa maratona 👀", "Já tomou água hoje? 💧", "Bora marcar mais um? 🎬", "Pipoca pronta? 🍿", "Segura e arrasta em mim pra me girar 🔄", "Dá pra trocar minha roupa na lojinha 🛍️", "Ei! Tô aqui, viu? 🤖", "Eu sou 3D, tá ligado? 😎", "Modo foco ativado 🎯", "Cada filme conta! 💪", "Doutor Destino vem aí… 🟢", "Bip bop… calculando o próximo filme 🧮", "Se der sono, respira e continua 😴", "Maratona boa é maratona em dia 💚", "Me toca que eu faço gracinha ✨"],
    curiosidade: ["Homem de Ferro (2008) abriu o Universo Marvel no cinema 🎞️", "Stan Lee fazia pontinhas em vários filmes. Procura ele! 🕵️", "Tradição Marvel: tem cena extra depois dos créditos 🎬", "Não sai da sala antes dos créditos acabarem 🍿", "Cada saga tem seu clima. Qual é a sua favorita? 🤔"],
    madrugada: ["Madrugada… jura que ainda tá acordado? 🌙", "Os heróis também dormem, sabia? 😴"],
    manha: ["Bom dia! Café e Marvel? ☕", "Manhã boa pra adiantar a maratona 🌅"],
    tarde: ["Boa tarde! Que tal um filme agora? 🎬", "Tarde de maratona, adoro 😎"],
    noite: ["Boa noite, herói! 🌃", "Noite perfeita pra um filmão 🍿"],
    toque: ["Oi! 👋", "Cócegas! 😂", "Hihi, para! 🤭", "Tá bom, tá bom! 🙃", "Quer me deixar tonto? 😵‍💫", "Assim eu fico com vergonha 😳"],
    fim: ["Fim da lista! Lá embaixo tem o elenco 🎭", "Chegou ao final! Respira 😮‍💨"],
    topo: ["De volta ao começo ⬆️", "Voltamos pro topo! 🚀"],
    rapido: ["Uau, que rolagem! 🌀", "Calma, que eu fico zonzo! 😵"],
    volta: ["Voltou! 🎉", "Senti sua falta! 🥹", "Que bom te ver de novo 💚"],
    offline: ["Sem internet? Eu continuo aqui 📴"],
    online: ["Internet de volta! 🌐"],
    bateria: ["Bateria baixa… carrega o celular 🔋"],
    busca: ["Procurando algum título? 🔎"],
    tema: ["Que cor linda! 🎨", "Gostei dessa! 😍"],
    todo: ["Só o que falta… foco! 🎯"], done: ["Olha tudo que você já viu! 👏"],
    path: ["O caminho até o Doutor Destino 🛤️"], fav: ["Seus favoritos ❤️"],
    cron: ["Ordem cronológica: viajando na história ⏳"], dur: ["Os mais curtos primeiro. Esperto! ⚡"]
  };
  var FREQ = { falante: [35, 70], calmo: [100, 170] }; // segundos entre falas espontâneas
  var ANIMS = { spin: 1600, flip: 1450, jump: 1400, dance: 3300, look: 2700, bow: 1900, curious: 2300, pulse: 2800 };
  var BUSY = /(^|\s)(sleep|hop|wave|wk|party|rcel|ryawn|peek|beat|pz-\w+|r[567]-\w+|r8-\w+|rot|q-on)(\s|$)/;

  function modo() { return H.getAttribute("data-rfala") || "falante"; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  var bag = {};
  function fala(k) { // sorteia sem repetir até esgotar a lista
    var l = FALAS[k]; if (!l) return "";
    if (!bag[k] || !bag[k].length) bag[k] = l.slice().sort(function () { return Math.random() - .5; });
    return bag[k].pop();
  }
  function livre() {
    var home = document.getElementById("home"), lj = document.getElementById("loja"), qz = document.getElementById("qz");
    return !document.hidden && !(home && !home.hidden) && !(lj && !lj.hidden) && !(qz && !qz.hidden) && modo() !== "mudo";
  }
  var ultima = 0;
  function say(k, forcar) {
    if (!livre()) return;
    var t = Date.now();
    if (!forcar && t - ultima < 6000) return;
    if (modo() === "calmo" && !forcar && Math.random() > .35) return;
    ultima = t;
    try { window.MR_SAY(fala(k), 2800); } catch (e) {}
  }
  function pode() {
    var c = H.classList;
    return !document.hidden && !c.contains("noanim") && !c.contains("eco") && !window.__mrScr && !BUSY.test(d.className) &&
      !(window.matchMedia && matchMedia("(prefers-reduced-motion:reduce)").matches);
  }
  var fim = 0;
  function anim(nome) {
    if (!ANIMS[nome] || !pode()) return false;
    var c = "r8-" + nome; d.classList.add(c);
    clearTimeout(fim); fim = setTimeout(function () { d.classList.remove(c); }, ANIMS[nome]);
    return true;
  }

  /* espontâneo: de tempos em tempos faz uma animação, às vezes falando */
  function agenda() {
    var f = FREQ[modo()] || FREQ.falante, s = f[0] + Math.random() * (f[1] - f[0]);
    setTimeout(function () {
      if (livre()) {
        var n = pick(["spin", "flip", "jump", "dance", "look", "bow", "curious", "pulse"]);
        if (anim(n)) {
          var h = new Date().getHours(), r = Math.random();
          if (r < .5) say(r < .15 ? "curiosidade" : (h < 5 ? "madrugada" : h < 12 ? "manha" : h < 18 ? "tarde" : "noite"));
          else if (r < .8) say("ocioso");
        } else if (Math.random() < .5) say("ocioso");
      }
      agenda();
    }, s * 1000);
  }
  agenda();

  /* toques no robô */
  var toques = 0, tt = 0;
  d.addEventListener("click", function () {
    toques++; clearTimeout(tt); tt = setTimeout(function () { toques = 0; }, 2500);
    if (toques === 3 || toques === 6) { say("toque", true); }
    if (toques === 4) anim("dance"); if (toques === 8) anim("flip"); if (toques === 12) { anim("spin"); say("toque", true); }
  });

  /* rolagem: rápida, fim e topo */
  var y0 = window.scrollY, t0 = Date.now(), vr = 0;
  window.addEventListener("scroll", function () {
    var t = Date.now(), y = window.scrollY, dt = t - t0;
    if (dt < 120) return;
    var v = Math.abs(y - y0) / dt; y0 = y; t0 = t;
    vr = v > 3 ? vr + 1 : 0;
    if (vr >= 3) { vr = 0; say("rapido"); }
    var max = document.documentElement.scrollHeight - innerHeight;
    if (y > 400 && y >= max - 8) { say("fim"); setTimeout(function () { anim("bow"); }, 400); }
    else if (y < 20 && dt > 120 && Math.abs(v) > 0) { if (Date.now() - ultima > 20000) say("topo"); }
  }, { passive: true });

  /* volta à aba depois de um tempo, internet, bateria */
  var saiu = 0;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { saiu = Date.now(); return; }
    if (saiu && Date.now() - saiu > 60000) { setTimeout(function () { say("volta", true); anim("jump"); }, 600); }
  });
  window.addEventListener("offline", function () { say("offline", true); });
  window.addEventListener("online", function () { say("online", true); });
  try { navigator.getBattery && navigator.getBattery().then(function (b) { var avisou = false; function ck() { if (!avisou && !b.charging && b.level <= .2) { avisou = true; say("bateria", true); } } b.addEventListener("levelchange", ck); }); } catch (e) {}

  /* reações a filtros, busca e tema */
  document.addEventListener("click", function (e) {
    var t = e.target; if (!t || !t.closest) return;
    var f = t.closest(".chips button[data-f]"), o = t.closest("#ordem button[data-o]"), th = t.closest("#temas button");
    if (f && !f.closest(".acf")) { var k = f.getAttribute("data-f"); if (FALAS[k]) { say(k, true); anim(k === "done" ? "jump" : "curious"); } }
    else if (o) { var ko = o.getAttribute("data-o"); if (FALAS[ko]) { say(ko, true); anim("look"); } }
    else if (th) { say("tema", true); anim("dance"); }
  });
  var q = document.getElementById("q");
  if (q) q.addEventListener("focus", function () { say("busca", true); anim("curious"); });

  window.MR_R8 = { anim: anim, say: say, animacoes: Object.keys(ANIMS) };
})();
