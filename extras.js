/* extras: aviso de nova versão, falha ao salvar, lembrete de backup, acessibilidade dos modais */
(function(){
var LS=window.localStorage;
function bar(msg,btn,fn,id){
  if(document.getElementById(id))return;
  var d=document.createElement("div");d.id=id;d.setAttribute("role","status");
  d.style.cssText="position:fixed;left:8px;right:8px;bottom:calc(8px + env(safe-area-inset-bottom,0px));z-index:99999;background:#0b140b;color:#fff;border:1px solid #39ff14;border-radius:10px;padding:10px 12px;display:flex;gap:8px;align-items:center;font:14px/1.3 system-ui,sans-serif";
  var s=document.createElement("span");s.style.flex="1";s.textContent=msg;d.appendChild(s);
  if(btn){var b=document.createElement("button");b.type="button";b.textContent=btn;b.style.cssText="background:#39ff14;color:#000;border:0;border-radius:8px;padding:8px 12px;font-weight:700";b.onclick=function(){d.remove();fn&&fn();};d.appendChild(b);}
  var x=document.createElement("button");x.type="button";x.textContent="✕";x.setAttribute("aria-label","Fechar aviso");x.style.cssText="background:none;color:#fff;border:0;font-size:16px;padding:6px";x.onclick=function(){d.remove();};d.appendChild(x);
  document.body.appendChild(d);
}
/* 3. falha ao salvar: avisa uma vez por sessão (o app continua tratando o erro como antes) */
try{var _s=Storage.prototype.setItem,warned=false;
Storage.prototype.setItem=function(k,v){try{return _s.call(this,k,v);}catch(e){
  if(!warned&&String(k).indexOf("maratona-")===0){warned=true;var go=function(){bar("⚠️ Não consegui salvar seu progresso (armazenamento cheio ou bloqueado). Faça um backup agora.","Ok",null,"ex-save");};
  document.body?go():document.addEventListener("DOMContentLoaded",go);}
  throw e;}};}catch(e){}
/* 3. lembrete de backup a cada 7 dias */
function ls(k,v){try{if(v===undefined)return LS.getItem(k);LS.setItem(k,v);}catch(e){}return null;}
document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("#bg,#bc,#bd");if(b)ls("maratona-ext-bk",String(Date.now()));},true);
window.addEventListener("load",function(){
  var now=Date.now(),D=864e5,first=+ls("maratona-ext-first");if(!first){ls("maratona-ext-first",String(now));return;}
  var last=Math.max(first,+ls("maratona-ext-bk")||0,+ls("maratona-bk-ultimo")||0),shown=+ls("maratona-ext-rem")||0;
  if(now-last>7*D&&now-shown>D){ls("maratona-ext-rem",String(now));setTimeout(function(){bar("💾 Faz mais de 7 dias sem backup do seu progresso.","Fazer backup",function(){var d=document.getElementById("ferr");if(d){d.open=true;var m=document.getElementById("mrmore");if(m)m.open=true;d.scrollIntoView({behavior:"smooth"});}},"ex-bk");},4000);}
});
/* 2. aviso de nova versão */
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol)){
  var reloading=false;navigator.serviceWorker.addEventListener("controllerchange",function(){if(reloading)return;reloading=true;location.reload();});
  navigator.serviceWorker.ready.then(function(reg){
    function show(){/* o aviso visual é o do app.js (#upd); aqui só fica o reload automático quando a nova versão assume */}
    if(reg.waiting&&navigator.serviceWorker.controller)show(reg.waiting);
    reg.addEventListener("updatefound",function(){var w=reg.installing;if(!w)return;w.addEventListener("statechange",function(){if(w.state==="installed"&&navigator.serviceWorker.controller)show(w);});});
    document.addEventListener("visibilitychange",function(){if(!document.hidden)reg.update().catch(function(){});});
  }).catch(function(){});
}
window.mrPosSrc=function(im){if(!im)return "";var s=im.src||"";if(s.indexOf("data:image/gif")===0){var ix=im.getAttribute("data-ix"),u=ix!=null&&window.mrPosterByIdx?window.mrPosterByIdx(+ix,0):"";if(u){im.src=u;return u;}}return s;};
/* pôsteres: só gera o da miniatura quando ela aparece na tela (abertura bem mais rápida) */
(function(){if(!("IntersectionObserver" in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;var im=x.target;io.unobserve(im);
  if(im.getAttribute("data-hq")==="1")return;var ix=im.getAttribute("data-ix"),u=ix!=null&&window.mrPosterByIdx?window.mrPosterByIdx(+ix,0):"";
  if(u)im.src=u;else if((im._try=(im._try||0)+1)<20)setTimeout(function(){io.observe(im);},250);});},{rootMargin:"400px"});
function scan(L){[].forEach.call(L.querySelectorAll("img.pos[data-pi]"),function(im){im.removeAttribute("data-pi");io.observe(im);});}
function start(){var L=document.getElementById("list");if(!L)return;scan(L);new MutationObserver(function(){scan(L);}).observe(L,{childList:true,subtree:true});}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
/* garante que nenhum pôster fique em branco: gera os que faltam, um por vez; o laço só roda enquanto houver pôster em branco */
window.addEventListener("load",function(){setTimeout(function(){var tk=0,SEL='img.pos[src^="data:image/gif"]:not([data-giveup])';
function run(){if(tk)return;tk=setInterval(function(){if(document.hidden)return;
  var im=document.querySelector(SEL);if(!im){clearInterval(tk);tk=0;return;}
  im._g=(im._g||0)+1;if(im._g>40){im.setAttribute("data-giveup","1");return;}window.mrPosSrc(im);},90);}
run();var L=document.getElementById("list");if(L&&window.MutationObserver)new MutationObserver(run).observe(L,{childList:true,subtree:true});
},2500);});
/* 6. modais: Esc fecha, foco entra e volta, Tab fica dentro */
var MODS={sum:"sx",pre:"prx",qz:"qx"},lastFocus={};
function vis(el){return !el.hidden&&getComputedStyle(el).display!=="none";}
function setup(){Object.keys(MODS).forEach(function(id){var m=document.getElementById(id);if(!m)return;
  m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");
  new MutationObserver(function(){
    if(vis(m)){lastFocus[id]=document.activeElement;var f=m.querySelector("button,[href],input,select,textarea");f&&setTimeout(function(){f.focus();},30);}
    else if(lastFocus[id]){try{lastFocus[id].focus();}catch(e){}lastFocus[id]=null;}
  }).observe(m,{attributes:true,attributeFilter:["hidden","style","class"]});});}
document.addEventListener("keydown",function(e){
  var open=Object.keys(MODS).map(function(i){return document.getElementById(i);}).filter(function(m){return m&&vis(m);})[0];
  if(!open)return;
  if(e.key==="Escape"){var c=document.getElementById(MODS[open.id]);c&&c.click();return;}
  if(e.key==="Tab"){var f=[].slice.call(open.querySelectorAll("button,[href],input,select,textarea,[tabindex]:not([tabindex='-1'])")).filter(function(x){return !x.disabled&&x.offsetParent!==null;});
    if(!f.length)return;var a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}
    else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}
});
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setup);else setup();
})();
