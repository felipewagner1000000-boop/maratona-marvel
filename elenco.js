/* Elenco confirmado de Vingadores: Doomsday.
   Para atualizar: edite só a lista abaixo (atualizado, grupos, reportados, ainda). O resto monta a seção sozinho. */
(function () {
  var E = {
    atualizado: "12/11/2026",
    estreia: "17/12/2026 no Brasil",
    grupos: [
      ["🦸 Vingadores e aliados", [
        ["Chris Hemsworth", "Thor"], ["Anthony Mackie", "Sam Wilson / Capitão América"], ["Chris Evans", "Steve Rogers"],
        ["Sebastian Stan", "Bucky Barnes / Soldado Invernal"], ["Paul Rudd", "Scott Lang / Homem-Formiga"], ["Kathryn Newton", "Cassie Lang"],
        ["Letitia Wright", "Shuri / Pantera Negra"], ["Winston Duke", "M'Baku"], ["Danny Ramirez", "Joaquin Torres / Falcão"],
        ["Tom Hiddleston", "Loki"], ["Simu Liu", "Shang-Chi"], ["Tenoch Huerta Mejía", "Namor"]]],
      ["💥 Thunderbolts*", [
        ["Florence Pugh", "Yelena Belova"], ["Wyatt Russell", "John Walker / Agente Americano"], ["David Harbour", "Alexei / Guardião Vermelho"],
        ["Hannah John-Kamen", "Ava Starr / Fantasma"], ["Lewis Pullman", "Bob / Sentinela"]]],
      ["🚀 Quarteto Fantástico", [
        ["Pedro Pascal", "Reed Richards / Sr. Fantástico"], ["Vanessa Kirby", "Sue Storm / Mulher Invisível"],
        ["Joseph Quinn", "Johnny Storm / Tocha Humana"], ["Ebon Moss-Bachrach", "Ben Grimm / Coisa"]]],
      ["🧬 X-Men", [
        ["Patrick Stewart", "Charles Xavier / Professor X"], ["Ian McKellen", "Erik Lehnsherr / Magneto"], ["James Marsden", "Scott Summers / Ciclope"],
        ["Kelsey Grammer", "Hank McCoy / Fera"], ["Alan Cumming", "Kurt Wagner / Noturno"], ["Rebecca Romijn", "Mística"],
        ["Channing Tatum", "Remy LeBeau / Gambit"]]],
      ["🟢 O vilão", [["Robert Downey Jr.", "Doutor Destino"]]]
    ],
    reportados: ["🎞️ Reportados pelas cenas extras de Endgame Encore", [
      ["Mark Ruffalo", "Hulk"], ["Owen Wilson", "Mobius (AVT)"], ["Ke Huy Quan", "O.B. (AVT)"],
      ["Eugene Cordero", "Casey (AVT)"], ["Tara Strong", "voz da Miss Minutes"]]],
    ainda: "Tom Holland, Benedict Cumberbatch, Ryan Reynolds, Hugh Jackman e Jeremy Renner"
  };

  function el(tag, txt, id) {
    var e = document.createElement(tag);
    if (txt != null) e.textContent = txt;
    if (id) e.id = id;
    return e;
  }
  function lista(pares) {
    var ul = el("ul");
    pares.forEach(function (p) {
      var li = el("li"), b = el("b", p[0]), s = el("span", p[1]);
      li.appendChild(b); li.appendChild(s); ul.appendChild(li);
    });
    return ul;
  }
  function montar() {
    var sec = document.getElementById("dcast");
    if (!sec || sec.childNodes.length) return;
    var total = E.grupos.reduce(function (n, g) { return n + g[1].length; }, 0);
    sec.className = "dcast";
    sec.setAttribute("aria-labelledby", "dch");
    sec.appendChild(el("h2", "🎭 Elenco confirmado de Doomsday", "dch"));
    sec.appendChild(el("p", total + " atores com nome confirmado pela Marvel (anúncio oficial, CinemaCon e trailer). Estreia em " + E.estreia + ". Atualizado em " + E.atualizado + ".")).className = "dcn";
    /* pôster com o elenco (arquivo elenco-doomsday.webp); se o arquivo não existir, some sem quebrar nada */
    var a = el("a"), im = el("img");
    a.href = "elenco-doomsday.webp"; a.target = "_blank"; a.rel = "noopener"; a.className = "dpost";
    a.setAttribute("aria-label", "Abrir o pôster do elenco em tamanho grande");
    im.src = "elenco-doomsday.webp"; im.loading = "lazy"; im.decoding = "async"; im.width = 1080; im.height = 2744;
    im.alt = "Pôster com os " + total + " atores confirmados de Vingadores: Doutor Destino e seus papéis, por grupo";
    im.onerror = function () { if (a.parentNode) a.parentNode.removeChild(a); };
    a.appendChild(im); sec.appendChild(a);
    E.grupos.concat([E.reportados]).forEach(function (g) {
      sec.appendChild(el("h3", g[0]));
      sec.appendChild(lista(g[1]));
    });
    sec.appendChild(el("p", "Ainda sem confirmação oficial: " + E.ainda + ". A Marvel costuma guardar surpresas, então a lista pode crescer.")).className = "dcn";
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", montar); else montar();
})();
