/* Lojinha do robô: ganha moedas no quiz (+5 por acerto) e compra roupas e acessórios */
(function(){
var KC="maratona-moedas",KO="maratona-loja-itens",KE="maratona-loja-eq",PER=5;
function g(k,f){try{var v=localStorage.getItem(k);return v==null?f:JSON.parse(v);}catch(e){return f;}}
function s(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
var coins=+g(KC,0)||0,own=g(KO,{}),eq=g(KE,{});
/* ---- itens: cada um monta camadas 3D dentro da cabeça (.rh) ou do tronco (.rt) ---- */
function L(p,css,zs,shade){zs.forEach(function(z,i){var e=document.createElement("div");e.className="ljl";e.style.cssText=css+";transform:translateZ("+z+"px)"+(shade?";filter:brightness("+(.7+.3*i/Math.max(1,zs.length-1)).toFixed(2)+")":"");p.appendChild(e);});}
function R(a,b,st){var r=[];for(var z=a;z<=b;z+=st)r.push(z);return r;}
var IT=[
{id:"cartola",n:"Cartola",i:"🎩",p:40,slot:"head",on:"rh",mk:function(p){L(p,"left:13px;top:-26px;width:30px;height:27px;background:linear-gradient(90deg,#0c0c0c,#2a2a2a 50%,#0c0c0c);border-radius:3px 3px 0 0;border-bottom:5px solid #c62828",R(-12,12,3),1);L(p,"left:2px;top:-4px;width:52px;height:7px;background:linear-gradient(#555,#0a0a0a);border-radius:4px;border:1px solid #666",R(-20,20,4),1);}},
{id:"bone",n:"Boné vermelho",i:"🧢",p:25,slot:"head",on:"rh",mk:function(p){L(p,"left:6px;top:-9px;width:44px;height:14px;background:linear-gradient(#e53935,#b71c1c);border-radius:22px 22px 4px 4px",R(-14,14,3),1);L(p,"left:11px;top:1px;width:34px;height:4px;background:#8e1b1b;border-radius:0 0 18px 18px",R(26,36,2),0);}},
{id:"gato",n:"Orelhas de gato",i:"🐱",p:35,slot:"head",on:"rh",mk:function(p){["6px","36px"].forEach(function(x){L(p,"left:"+x+";top:-13px;width:15px;height:15px;background:#3a3a3a;clip-path:polygon(0 100%,50% 0,100% 100%)",R(-4,4,2),1);L(p,"left:calc("+x+" + 4px);top:-7px;width:7px;height:8px;background:#ff8fb1;clip-path:polygon(0 100%,50% 0,100% 100%)",[5],0);});}},
{id:"oculos",n:"Óculos escuros",i:"🕶️",p:30,slot:"face",on:"rh",mk:function(p){["9px","29px"].forEach(function(x){L(p,"left:"+x+";top:14px;width:18px;height:12px;background:linear-gradient(135deg,#444 0,#050505 45%);border-radius:4px 4px 8px 8px;border:1px solid #777",[31,32],0);});L(p,"left:26px;top:17px;width:4px;height:2px;background:#222",[32],0);}},
{id:"bigode",n:"Bigode",i:"🥸",p:20,slot:"face",on:"rh",mk:function(p){[["17px","-14deg"],["28px","14deg"]].forEach(function(a){L(p,"left:"+a[0]+";top:30px;width:11px;height:5px;background:#2b1a10;border-radius:50%;rotate:"+a[1],[30,31],0);});}},
{id:"capa",n:"Capa heroica",i:"🦸",p:60,slot:"body",on:"rt",mk:function(p){L(p,"left:-9px;top:-6px;width:54px;height:42px;background:linear-gradient(#e53935,#7f0f0f);border-radius:6px 6px 22px 22px",[-22,-20,-18],1);}},
{id:"gravata",n:"Gravata-borboleta",i:"🎀",p:25,slot:"neck",on:"rt",mk:function(p){["8px","20px"].forEach(function(x,k){L(p,"left:"+x+";top:-1px;width:9px;height:9px;background:#e53935;clip-path:polygon("+(k?"0 50%,100% 0,100% 100%":"100% 50%,0 0,0 100%")+")",[14],0);});L(p,"left:16px;top:2px;width:4px;height:4px;background:#8e1b1b;border-radius:50%",[15],0);}},
{id:"cachecol",n:"Cachecol verde",i:"🧣",p:30,slot:"neck",on:"rt",mk:function(p){L(p,"left:-2px;top:-3px;width:40px;height:7px;background:repeating-linear-gradient(90deg,#2e7d32 0 5px,#c8e6c9 5px 7px);border-radius:4px",R(-10,12,2),1);L(p,"left:25px;top:2px;width:7px;height:16px;background:repeating-linear-gradient(180deg,#2e7d32 0 5px,#c8e6c9 5px 7px);border-radius:2px",[13],0);}}
];
var SL=[["head","Cabeça"],["face","Rosto"],["neck","Pescoço"],["body","Corpo"]];
function find(id){return IT.filter(function(x){return x.id===id;})[0];}
function apply(d){if(!d)return;[].forEach.call(d.querySelectorAll(".ljl"),function(e){e.remove();});
  IT.forEach(function(it){if(eq[it.slot]===it.id&&own[it.id]){var p=d.querySelector("."+it.on);if(p)it.mk(p);}});}
function applyAll(){[].forEach.call(document.querySelectorAll(".dm"),apply);}
/* ---- moedas ---- */
function pop(t){var e=document.createElement("div");e.className="lj-pop";e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.remove();},1700);}
function lbl(){var b=document.getElementById("hloja");if(b)b.textContent="🛍️ Lojinha · 🪙 "+coins;var c=document.getElementById("ljc");if(c)c.textContent="🪙 "+coins;}
function add(n){coins+=n;s(KC,coins);lbl();pop("+"+n+" 🪙");}
try{var _s=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){var old=0;if(k==="maratona-quiz"){try{old=parseInt(this.getItem(k)||"0",10)||0;}catch(e){}}
  var r=_s.call(this,k,v);if(k==="maratona-quiz"&&(parseInt(v,10)||0)-old===1)add(PER);return r;};}catch(e){}
/* ---- tela da lojinha ---- */
var m=null,prev=null;
function build(){
  m=document.createElement("div");m.id="loja";m.hidden=true;m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");m.setAttribute("aria-label","Lojinha do robô");
  document.body.appendChild(m);
}
function render(){
  var h='<div class="lh"><h2>🛍️ Lojinha do robô</h2><span class="lc" id="ljc">🪙 '+coins+'</span><button class="lx" type="button" id="ljx" aria-label="Fechar">✕</button></div><div class="lp" id="ljp"></div><p style="margin:0;opacity:.75;font-size:.85rem">Ganhe 🪙 '+PER+' a cada resposta certa no quiz.</p>';
  SL.forEach(function(sl){h+='<h3>'+sl[1]+'</h3>';IT.filter(function(x){return x.slot===sl[0];}).forEach(function(it){
    var o=own[it.id],e=eq[it.slot]===it.id,btn=!o?'<button type="button" data-a="buy" data-i="'+it.id+'" class="'+(coins<it.p?"off":"")+'">Comprar 🪙 '+it.p+'</button>':'<button type="button" data-a="eq" data-i="'+it.id+'" class="'+(e?"on":"")+'">'+(e?"Tirar":"Equipar")+'</button>';
    h+='<div class="li"><span class="ic" aria-hidden="true">'+it.i+'</span><span class="nm">'+it.n+'</span>'+btn+'</div>';});});
  h+='<button type="button" class="lt" data-a="clr">Tirar tudo do robô</button>';
  m.innerHTML=h;var pv=document.getElementById("ljp"),d=document.querySelector("body>.dm")||document.querySelector(".dm:not(#ljp .dm)");
  if(d&&pv){prev=d.cloneNode(true);prev.removeAttribute("id");prev.setAttribute("style","");apply(prev);pv.appendChild(prev);}
}
function open(){if(!m)build();render();m.hidden=false;var x=document.getElementById("ljx");x&&x.focus();document.documentElement.style.overflow="hidden";}
function close(){if(m)m.hidden=true;document.documentElement.style.overflow="";var b=document.getElementById("hloja");b&&b.focus();}
document.addEventListener("click",function(e){var t=e.target;if(!t.closest)return;
  if(t.closest("#hloja")){open();return;}
  if(!m||m.hidden)return;if(t.closest("#ljx")){close();return;}
  var b=t.closest("button[data-a]");if(!b)return;var a=b.getAttribute("data-a"),it=find(b.getAttribute("data-i"));
  if(a==="buy"&&it){if(coins<it.p){pop("Faltam "+(it.p-coins)+" 🪙");return;}coins-=it.p;own[it.id]=1;eq[it.slot]=it.id;s(KC,coins);s(KO,own);s(KE,eq);}
  else if(a==="eq"&&it){if(eq[it.slot]===it.id)delete eq[it.slot];else eq[it.slot]=it.id;s(KE,eq);}
  else if(a==="clr"){eq={};s(KE,eq);}
  applyAll();var y=m.scrollTop;render();m.scrollTop=y;lbl();});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&m&&!m.hidden)close();});
/* ---- botão na tela inicial ---- */
function btn(){var go=document.getElementById("hgo");if(!go||document.getElementById("hloja"))return;var b=document.createElement("button");b.type="button";b.id="hloja";go.parentNode.insertBefore(b,go.nextSibling);lbl();}
/* backup/restauração do app inclui a lojinha */
window.__lojaExport=function(){return {c:coins,o:own,e:eq};};
window.__lojaImport=function(o){if(!o)return;coins=+o.c||0;own=o.o||{};eq=o.e||{};s(KC,coins);s(KO,own);s(KE,eq);applyAll();lbl();};
function start(){btn();applyAll();setTimeout(applyAll,1500);}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
