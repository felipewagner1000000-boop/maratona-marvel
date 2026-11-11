/* Robô no quiz: fica acordado, mostra plaquinhas e comenta o jogo. Também fica acordado com a trilha tocando. */
(function(){
var d=document.querySelector("body>.dm")||document.querySelector(".dm"),qz=document.getElementById("qz"),body=document.getElementById("qbody");if(!d||!qz||!body)return;
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function say(t,ms){try{if(window.MR_SAY&&document.documentElement.getAttribute("data-rfala")!=="mudo")window.MR_SAY(t,ms||2400);}catch(e){}}
function isOpen(){return !qz.hidden&&getComputedStyle(qz).display!=="none";}
var pl=document.createElement("div"),pr=document.createElement("div");pl.className="pq pqL";pr.className="pq pqR";pl.setAttribute("aria-hidden","true");pr.setAttribute("aria-hidden","true");d.appendChild(pl);d.appendChild(pr);
function sign(el,t,hit){el.textContent=t;if(hit){el.classList.remove("hit");void el.offsetWidth;el.classList.add("hit");}}
var was=false,streak=0,qn=0,last="",okAt=0,tm=0;
window.addEventListener("mr-quiz-ok",function(){okAt=Date.now();});
function state(){var bs=body.querySelectorAll("button.qo");if(!bs.length)return "none";if(body.querySelector("button.qo.bad"))return "bad";if(body.querySelector("button.qo.ok"))return "ok";return "q";}
function check(){
  var o=isOpen();
  if(o!==was){was=o;d.classList.toggle("q-on",o);
    if(o){streak=0;qn=0;last="";sign(pl,"🎬");sign(pr,"?");say("Quiz! Vai fundo, eu torço por você! 📣",2600);}
    else{if(qn>0)say(pick(["Bom jogo! 👏","Voltou! Foi divertido 🎬","Mandou bem no quiz! 🙌"]),2200);}
    return;}
  if(!o)return;
  var st=state();if(st===last)return;var prev=last;last=st;
  if(st==="q"){qn++;sign(pl,"🤔");sign(pr,"#"+qn);
    if(qn===1)say("Pergunta 1! Será que você sabe? 🤔",2400);
    else if(Math.random()<.55)say(pick(["Pergunta "+qn+"! Concentra… 🧠","Essa parece difícil 👀","Vai com calma, pensa bem 🤓","Valendo moedas! 🪙","Tô torcendo! 📣"]),2200);}
  else if(st==="bad"){streak=0;sign(pl,"😅",1);sign(pr,"✖",1);say(pick(["Ops! Essa era difícil 😅","Quase! Na próxima 💪","Aiai… mas a gente aprende 😬"]),2400);}
  else if(st==="ok"){if(Date.now()-okAt<1800){streak++;sign(pl,"✔",1);sign(pr,streak>1?"🔥"+streak:"🎉",1);
      var m=streak===3?"🔥 3 seguidas!":streak===5?"🔥 5 seguidas! Imparável!":streak===10?"🏆 10 seguidas!!!":pick(["Acertou! 🎉","Boa! 💥","Isso aí! 🙌","Mandou bem! ⭐"]);say(m+" +5 🪙",2200);}
    else{streak=0;sign(pl,"⏰",1);sign(pr,"⏰",1);say("⏰ O tempo acabou!",2200);}}
  else if(st==="none"&&prev&&prev!=="none"&&qn>0){sign(pl,"🏁");sign(pr,"🏁");say("Fim! Vamos ver como foi? 🏁",2400);}
}
function sched(){clearTimeout(tm);tm=setTimeout(check,70);}
try{new MutationObserver(sched).observe(qz,{attributes:true,attributeFilter:["hidden","style","class"]});new MutationObserver(sched).observe(body,{childList:true,subtree:true,attributes:true,attributeFilter:["class","disabled"]});}catch(e){}
/* acordado durante o quiz e enquanto a trilha toca */
setInterval(function(){if(document.hidden)return;var ost=window.mrOst&&window.mrOst.playing;if(isOpen()||ost)window.dispatchEvent(new Event("scroll"));},2500);
})();
