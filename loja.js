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
,{id:"bruxo",n:"Chapéu de bruxo",i:"🧙",p:45,slot:"head",on:"rh",mk:function(p){L(p,"left:2px;top:-4px;width:52px;height:6px;background:#3b2a63;border-radius:4px",R(-20,20,4),1);L(p,"left:14px;top:-34px;width:28px;height:32px;background:linear-gradient(#5e3fa3,#2d1d52);clip-path:polygon(50% 0,100% 100%,0 100%)",R(-10,10,3),1);L(p,"left:14px;top:-9px;width:28px;height:5px;background:#ffd54a",[10],0);}}
,{id:"coroa",n:"Coroa dourada",i:"👑",p:80,slot:"head",on:"rh",mk:function(p){L(p,"left:10px;top:-17px;width:36px;height:18px;background:linear-gradient(#ffe082,#f9a825);clip-path:polygon(0 100%,0 20%,22% 55%,50% 0,78% 55%,100% 20%,100% 100%)",R(-10,10,3),1);L(p,"left:26px;top:-9px;width:5px;height:5px;background:#e53935;border-radius:50%",[11],0);}}
,{id:"moicano",n:"Moicano punk",i:"🤘",p:30,slot:"head",on:"rh",mk:function(p){L(p,"left:22px;top:-13px;width:12px;height:14px;background:linear-gradient(#69f0ae,#00c853);clip-path:polygon(0 100%,10% 20%,35% 60%,50% 0,65% 60%,90% 20%,100% 100%)",R(-18,18,3),1);}}
,{id:"mascara",n:"Máscara de herói",i:"🎭",p:45,slot:"face",on:"rh",mk:function(p){L(p,"left:5px;top:12px;width:46px;height:14px;background:linear-gradient(#e53935,#8e1b1b);border-radius:6px 6px 14px 14px;clip-path:polygon(0 0,100% 0,100% 55%,86% 100%,64% 60%,50% 70%,36% 60%,14% 100%,0 55%)",[31,32],0);["12px","32px"].forEach(function(x){L(p,"left:"+x+";top:16px;width:12px;height:6px;background:#fff;border-radius:50%;opacity:.9",[33],0);});}}
,{id:"nerd",n:"Óculos de nerd",i:"🤓",p:25,slot:"face",on:"rh",mk:function(p){["9px","29px"].forEach(function(x){L(p,"left:"+x+";top:13px;width:18px;height:14px;border:2px solid #ff7043;border-radius:50%;background:rgba(255,255,255,.08)",[31,32],0);});L(p,"left:26px;top:19px;width:4px;height:2px;background:#ff7043",[32],0);}}
,{id:"medalha",n:"Medalha dourada",i:"🏅",p:35,slot:"neck",on:"rt",mk:function(p){L(p,"left:11px;top:2px;width:14px;height:6px;background:linear-gradient(90deg,#e53935 50%,#1e88e5 50%);clip-path:polygon(0 0,100% 0,60% 100%,40% 100%)",[13],0);L(p,"left:13px;top:8px;width:10px;height:10px;background:radial-gradient(circle at 35% 30%,#fff3b0,#f9a825 70%);border-radius:50%;border:1px solid #b36b00",[14],0);}}
,{id:"asas",n:"Asas de anjo",i:"🪽",p:70,slot:"body",on:"rt",mk:function(p){[["-30px","-1"],["32px","1"]].forEach(function(a){L(p,"left:"+a[0]+";top:-14px;width:34px;height:36px;background:linear-gradient(135deg,#fff,#b3e5fc);border-radius:"+(a[1]==="-1"?"90% 10% 60% 10%":"10% 90% 10% 60%")+";transform-origin:50% 100%",[-14,-12,-10],1);});}}
,{id:"escudo",n:"Escudo estrelado",i:"🛡️",p:55,slot:"hand",on:"rt",mk:function(p){L(p,"left:-34px;top:2px;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle,#1565c0 0 32%,#fff 33% 45%,#c62828 46% 70%,#fff 71% 82%,#c62828 83%)",[14,15],0);L(p,"left:-27px;top:9px;width:12px;height:12px;background:#fff;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",[16],0);}}
,{id:"tiara",n:"Tiara de princesa",g:"f",i:"👸",p:50,slot:"head",on:"rh",mk:function(p){L(p,"left:8px;top:-7px;width:40px;height:10px;border:2px solid #e3e9ed;border-bottom:0;border-radius:20px 20px 0 0",R(10,22,3),0);L(p,"left:25px;top:-13px;width:6px;height:7px;background:#ff4081;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)",[22,23],0);[["14px","-10px"],["37px","-10px"]].forEach(function(a){L(p,"left:"+a[0]+";top:"+a[1]+";width:4px;height:4px;background:#b3e5fc;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)",[22],0);});}}
,{id:"laco",n:"Laço de cabelo",g:"f",i:"🎀",p:30,slot:"head",on:"rh",mk:function(p){L(p,"left:26px;top:-13px;width:11px;height:13px;background:#ff5fa2;clip-path:polygon(100% 50%,0 0,0 100%)",[2,4,6],1);L(p,"left:37px;top:-13px;width:11px;height:13px;background:#ff5fa2;clip-path:polygon(0 50%,100% 0,100% 100%)",[2,4,6],1);L(p,"left:35px;top:-9px;width:4px;height:5px;background:#d81b60;border-radius:2px",[7],0);}}
,{id:"flor",n:"Flor no cabelo",g:"f",i:"🌸",p:30,slot:"head",on:"rh",mk:function(p){L(p,"left:12px;top:-6px;width:5px;height:5px;background:#ffd54a;border-radius:50%;box-shadow:0 -5px 0 1px #ff80ab,5px 0 0 1px #ff80ab,0 5px 0 1px #ff80ab,-5px 0 0 1px #ff80ab",[18,19],0);}}
,{id:"cilios",n:"Cílios longos",g:"f",i:"👁️",p:25,slot:"face",on:"rh",mk:function(p){[[7,13,-38],[9,10,-22],[11,8,-6],[45,13,38],[43,10,22],[41,8,6]].forEach(function(a){L(p,"left:"+a[0]+"px;top:"+a[1]+"px;width:6px;height:2px;background:#111;border-radius:1px;rotate:"+a[2]+"deg",[32],0);});}}
,{id:"batom",n:"Batom",g:"f",i:"💄",p:20,slot:"face",on:"rh",mk:function(p){L(p,"left:22px;top:34px;width:12px;height:6px;background:linear-gradient(#f06292,#c2185b);border-radius:50% 50% 60% 60%",[31,32],0);}}
,{id:"colar",n:"Colar de pérolas",g:"f",i:"📿",p:35,slot:"neck",on:"rt",mk:function(p){[[6,3],[10,5],[14,6.5],[18,7],[22,6.5],[26,5],[30,3]].forEach(function(a){L(p,"left:"+a[0]+"px;top:"+a[1]+"px;width:4px;height:4px;background:radial-gradient(circle at 35% 30%,#fff,#e8dfe6 60%,#b9aab5);border-radius:50%",[14],0);});}}
,{id:"tutu",n:"Saia de bailarina",g:"f",i:"🩰",p:55,slot:"waist",on:"rt",mk:function(p){L(p,"left:-9px;top:13px;width:54px;height:13px;background:radial-gradient(circle at 50% 0,#ff9ec2,#ec6a99);border-radius:8px 8px 50% 50%",R(-9,11,4),1);}}
,{id:"cowboy",n:"Chapéu de cowboy",g:"m",i:"🤠",p:40,slot:"head",on:"rh",mk:function(p){L(p,"left:-7px;top:-4px;width:70px;height:6px;background:#8d5a2b;border-radius:3px",R(-22,22,4),1);L(p,"left:12px;top:-21px;width:32px;height:18px;background:linear-gradient(#b87a3f,#8d5a2b);border-radius:9px 9px 0 0",R(-12,12,3),1);L(p,"left:12px;top:-7px;width:32px;height:3px;background:#3e2a14",[13],0);}}
,{id:"obra",n:"Capacete de obra",g:"m",i:"👷",p:35,slot:"head",on:"rh",mk:function(p){L(p,"left:5px;top:-14px;width:46px;height:18px;background:linear-gradient(#ffee58,#f9a825);border-radius:23px 23px 2px 2px",R(-16,16,3),1);L(p,"left:23px;top:-18px;width:10px;height:6px;background:#fbc02d;border-radius:3px 3px 0 0",R(-14,14,4),1);L(p,"left:8px;top:2px;width:40px;height:3px;background:#f9a825",R(20,28,2),0);}}
,{id:"barba",n:"Barba",g:"m",i:"🧔",p:30,slot:"face",on:"rh",mk:function(p){L(p,"left:14px;top:33px;width:28px;height:13px;background:linear-gradient(#4a3426,#2b1a10);border-radius:2px 2px 14px 14px",[30,31,32],0);}}
,{id:"aviador",n:"Óculos aviador",g:"m",i:"😎",p:35,slot:"face",on:"rh",mk:function(p){["8px","29px"].forEach(function(x){L(p,"left:"+x+";top:12px;width:19px;height:15px;background:linear-gradient(135deg,rgba(80,120,90,.85),rgba(10,30,20,.95));border:2px solid #d4af37;border-radius:4px 4px 12px 12px",[31,32],0);});L(p,"left:26px;top:16px;width:4px;height:2px;background:#d4af37",[32],0);}}
,{id:"gravatal",n:"Gravata longa",g:"m",i:"👔",p:30,slot:"neck",on:"rt",mk:function(p){L(p,"left:16px;top:0px;width:5px;height:4px;background:#1565c0;border-radius:1px",[14],0);L(p,"left:15px;top:4px;width:7px;height:15px;background:linear-gradient(#1976d2,#0d47a1);clip-path:polygon(15% 0,85% 0,100% 80%,50% 100%,0 80%)",[14],0);}}
,{id:"cinturao",n:"Cinturão de herói",g:"m",i:"🥋",p:40,slot:"waist",on:"rt",mk:function(p){L(p,"left:-1px;top:15px;width:38px;height:5px;background:linear-gradient(#ffca28,#ff8f00);border-radius:2px",R(-10,12,2),1);L(p,"left:14px;top:13.5px;width:9px;height:8px;background:#e53935;border:1px solid #ffd54a;border-radius:2px",[13,14],0);}}
];
var SL=[["head","Cabeça"],["face","Rosto"],["neck","Pescoço"],["waist","Cintura"],["body","Costas"],["hand","Mão"]];
function find(id){return IT.filter(function(x){return x.id===id;})[0];}
function apply(d){if(!d)return;[].forEach.call(d.querySelectorAll(".ljl"),function(e){e.remove();});
  IT.forEach(function(it){if(eq[it.slot]===it.id&&own[it.id]){var p=d.querySelector("."+it.on);if(p)it.mk(p);}});}
function applyAll(){[].forEach.call(document.querySelectorAll(".dm"),apply);}
/* ---- moedas ---- */
function pop(t){var e=document.createElement("div");e.className="lj-pop";e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.remove();},1700);}
function lbl(){var b=document.getElementById("hloja");if(b)b.textContent="🛍️ Lojinha · 🪙 "+coins;var c=document.getElementById("ljc");if(c)c.textContent="🪙 "+coins;}
function add(n){coins+=n;s(KC,coins);lbl();pop("+"+n+" 🪙");}
var KG="maratona-loja-ganhos",gan=g(KG,null);
function keysOf(k){try{return Object.keys(JSON.parse(localStorage.getItem(k)||"{}")||{});}catch(e){return [];}}
function party(t){try{if(window.mkHop)window.mkHop();var md=document.documentElement.getAttribute("data-rfala");if(window.MR_SAY&&md!=="mudo")window.MR_SAY(t,2400);}catch(e){}}
window.__lojaParty=party;
function reward(kind,k,v,each,msg){if(!gan)return;try{var cur=Object.keys(JSON.parse(v)||{}),have=gan[kind]||[],nw=cur.filter(function(x){return have.indexOf(x)<0;});
  if(!nw.length)return;gan[kind]=have.concat(nw);s(KG,gan);if(nw.length<=2){add(each*nw.length);party(msg);}}catch(e){}}
try{var _s=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){var old=0;if(k==="maratona-quiz"){try{old=parseInt(this.getItem(k)||"0",10)||0;}catch(e){}}
  var r=_s.call(this,k,v);
  if(k==="maratona-quiz"&&(parseInt(v,10)||0)-old===1){add(PER);try{window.dispatchEvent(new Event("mr-quiz-ok"));}catch(e){}}
  else if(k==="maratona-marvel")reward("f",k,v,3,"Mais um filme! 🎬 +3 🪙");
  else if(k==="maratona-conq")reward("c",k,v,15,"Conquista nova! 🏆 +15 🪙");
  return r;};}catch(e){}
/* ---- imagem para compartilhar (desenho 2D do robô vestido) ---- */
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
function pg(c,pts,f){c.beginPath();pts.forEach(function(p,i){i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]);});c.closePath();c.fillStyle=f;c.fill();}
function draw(){var W=720,H=900,cv=document.createElement("canvas");cv.width=W;cv.height=H;var c=cv.getContext("2d");
  var bg=c.createLinearGradient(0,0,0,H);bg.addColorStop(0,"#06120a");bg.addColorStop(1,"#0b2a14");c.fillStyle=bg;c.fillRect(0,0,W,H);
  var gl=c.createRadialGradient(360,560,10,360,560,330);gl.addColorStop(0,"rgba(57,255,20,.28)");gl.addColorStop(1,"rgba(57,255,20,0)");c.fillStyle=gl;c.fillRect(0,0,W,H);
  c.fillStyle="#fff";c.textAlign="center";c.font="800 40px system-ui,sans-serif";c.fillText("Meu robô da Maratona Marvel",360,90);
  c.font="600 26px system-ui,sans-serif";c.fillStyle="#9fe8a6";c.fillText("🪙 "+coins+"  ·  "+Object.keys(own).length+" peças",360,135);
  c.save();c.translate(360,330);var S=5.4;c.scale(S,S);
  var e=function(id){return eq[find(id)&&find(id).slot]===id&&own[id];};
  var G=function(a,b){return a;};
  if(e("capa")){rr(c,-27,50,54,40,14);c.fillStyle="#c62828";c.fill();}
  if(e("asas")){[-1,1].forEach(function(s){c.beginPath();c.ellipse(s*36,60,16,22,s*.5,0,7);c.fillStyle="#e3f4ff";c.fill();});}
  rr(c,-18,52,36,26,12);var tg=c.createLinearGradient(0,52,0,78);tg.addColorStop(0,"#eceff1");tg.addColorStop(1,"#90a4ae");c.fillStyle=tg;c.fill();
  c.beginPath();c.arc(0,65,6,0,7);c.fillStyle="#39ff14";c.fill();
  [-30,30].forEach(function(x){c.beginPath();c.arc(x,66,7,0,7);c.fillStyle="#cfd8dc";c.fill();c.beginPath();c.arc(x,66,3,0,7);c.fillStyle="#39ff14";c.fill();});
  c.strokeStyle="#b0bec5";c.lineWidth=2;c.beginPath();c.moveTo(0,0);c.lineTo(0,-12);c.stroke();c.beginPath();c.arc(0,-13,3,0,7);c.fillStyle="#39ff14";c.fill();
  rr(c,-28,0,56,44,14);var hg=c.createLinearGradient(0,0,0,44);hg.addColorStop(0,"#fafafa");hg.addColorStop(1,"#9ea7ad");c.fillStyle=hg;c.fill();
  rr(c,-22,8,44,26,9);c.fillStyle="#06210f";c.fill();
  [-9,9].forEach(function(x){c.beginPath();c.ellipse(x,21,4.5,6,0,0,7);c.fillStyle="#7dff6a";c.fill();});
  c.fillStyle="#222";[-6,0,6].forEach(function(x){c.beginPath();c.arc(x,39,1.4,0,7);c.fill();});
  if(e("cartola")){c.fillStyle="#111";c.fillRect(-15,-27,30,27);c.fillStyle="#c62828";c.fillRect(-15,-6,30,4);rr(c,-27,-4,54,6,3);c.fillStyle="#1d1d1d";c.fill();}
  if(e("bone")){c.beginPath();c.arc(0,0,23,Math.PI,0);c.fillStyle="#d32f2f";c.fill();rr(c,-4,-4,34,5,2.5);c.fillStyle="#8e1b1b";c.fill();}
  if(e("gato")){[-1,1].forEach(function(s){pg(c,[[s*22,2],[s*20,-15],[s*8,0]],"#3a3a3a");pg(c,[[s*18,0],[s*17,-8],[s*11,0]],"#ff8fb1");});}
  if(e("bruxo")){rr(c,-26,-4,52,6,3);c.fillStyle="#3b2a63";c.fill();pg(c,[[-14,-4],[0,-38],[14,-4]],"#4b3290");c.fillStyle="#ffd54a";c.fillRect(-14,-9,28,4);}
  if(e("coroa")){pg(c,[[-18,2],[-18,-14],[-9,-6],[0,-18],[9,-6],[18,-14],[18,2]],"#f9a825");c.beginPath();c.arc(0,-6,2.4,0,7);c.fillStyle="#e53935";c.fill();}
  if(e("moicano")){pg(c,[[-6,2],[-5,-12],[-2,-6],[0,-16],[2,-6],[5,-12],[6,2]],"#00c853");}
  if(e("oculos")){[-1,1].forEach(function(s){rr(c,s>0?1:-19,13,18,12,5);c.fillStyle="#050505";c.fill();c.strokeStyle="#777";c.lineWidth=1;c.stroke();});c.fillStyle="#222";c.fillRect(-2,17,4,2);}
  if(e("nerd")){c.strokeStyle="#ff7043";c.lineWidth=2;[-10,10].forEach(function(x){c.beginPath();c.arc(x,21,8,0,7);c.stroke();});c.beginPath();c.moveTo(-3,21);c.lineTo(3,21);c.stroke();}
  if(e("mascara")){pg(c,[[-24,12],[24,12],[24,24],[18,28],[0,25],[-18,28],[-24,24]],"#d32f2f");c.fillStyle="#fff";[-9,9].forEach(function(x){c.beginPath();c.ellipse(x,20,5,3,0,0,7);c.fill();});}
  if(e("bigode")){c.fillStyle="#2b1a10";[-1,1].forEach(function(s){c.beginPath();c.ellipse(s*6,32,6,2.6,s*.25,0,7);c.fill();});}
  if(e("gravata")){pg(c,[[0,56],[-10,50],[-10,62]],"#e53935");pg(c,[[0,56],[10,50],[10,62]],"#e53935");c.beginPath();c.arc(0,56,2.4,0,7);c.fillStyle="#8e1b1b";c.fill();}
  if(e("cachecol")){rr(c,-20,48,40,7,3.5);c.fillStyle="#2e7d32";c.fill();c.fillStyle="#c8e6c9";for(var q=-18;q<18;q+=7)c.fillRect(q,48,2,7);rr(c,6,52,7,18,2);c.fillStyle="#2e7d32";c.fill();}
  if(e("medalha")){pg(c,[[-4,52],[4,52],[2,62],[-2,62]],"#1e88e5");c.beginPath();c.arc(0,66,6,0,7);c.fillStyle="#f9a825";c.fill();}
  if(e("escudo")){[13,10,6,3].forEach(function(r,i){c.beginPath();c.arc(-40,66,r,0,7);c.fillStyle=["#c62828","#fff","#c62828","#1565c0"][i];c.fill();});}
  if(e("tiara")){c.strokeStyle="#e3e9ed";c.lineWidth=2;c.beginPath();c.arc(0,4,19,Math.PI*1.08,Math.PI*1.92);c.stroke();pg(c,[[0,-17],[3,-13],[0,-9],[-3,-13]],"#ff4081");}
  if(e("laco")){pg(c,[[7,-5],[-2,-12],[-2,2]],"#ff5fa2");pg(c,[[7,-5],[16,-12],[16,2]],"#ff5fa2");c.beginPath();c.arc(7,-5,2.6,0,7);c.fillStyle="#d81b60";c.fill();}
  if(e("flor")){[[0,-5],[5,0],[0,5],[-5,0]].forEach(function(q){c.beginPath();c.arc(-14+q[0],-2+q[1],3.2,0,7);c.fillStyle="#ff80ab";c.fill();});c.beginPath();c.arc(-14,-2,2.6,0,7);c.fillStyle="#ffd54a";c.fill();}
  if(e("cilios")){c.strokeStyle="#111";c.lineWidth=1.3;[-1,1].forEach(function(s){for(var k=0;k<3;k++){c.beginPath();c.moveTo(s*(14+k*2.2),12+k*1.2);c.lineTo(s*(19+k*2.6),7+k*.2);c.stroke();}});}
  if(e("batom")){c.beginPath();c.ellipse(0,37,6,3,0,0,7);c.fillStyle="#e91e63";c.fill();}
  if(e("colar")){c.fillStyle="#f3ecf1";[-12,-8,-4,0,4,8,12].forEach(function(x){c.beginPath();c.arc(x,53+Math.abs(x)*-.08+ (6-Math.abs(x))*.3,2.1,0,7);c.fill();});}
  if(e("tutu")){c.beginPath();c.ellipse(0,76,27,8,0,0,7);c.fillStyle="#ec6a99";c.fill();}
  if(e("cowboy")){c.beginPath();c.ellipse(0,-2,34,4,0,0,7);c.fillStyle="#8d5a2b";c.fill();rr(c,-16,-20,32,18,8);c.fillStyle="#a06a36";c.fill();c.fillStyle="#3e2a14";c.fillRect(-16,-6,32,3);}
  if(e("obra")){c.beginPath();c.arc(0,2,23,Math.PI,0);c.fillStyle="#fbc02d";c.fill();c.fillStyle="#f9a825";c.fillRect(-23,1,46,3);}
  if(e("barba")){rr(c,-14,33,28,13,6);c.fillStyle="#3a2518";c.fill();}
  if(e("aviador")){c.strokeStyle="#d4af37";c.lineWidth=2;[-1,1].forEach(function(s){rr(c,s>0?2:-21,13,19,15,6);c.fillStyle="rgba(20,50,35,.9)";c.fill();c.stroke();});}
  if(e("gravatal")){pg(c,[[0,53],[-3,52],[-3.5,70],[0,74],[3.5,70],[3,52]],"#1565c0");}
  if(e("cinturao")){c.fillStyle="#ffb300";c.fillRect(-18,70,36,5);c.fillStyle="#e53935";c.fillRect(-4,69,8,7);}
  c.restore();
  c.font="600 24px system-ui,sans-serif";c.fillStyle="#9fe8a6";c.textAlign="center";c.fillText("Vingadores: Doutor Destino · 17 de dezembro",360,H-60);
  return cv;}
function share(){var cv=draw();cv.toBlob(function(b){if(!b)return;var f;try{f=new File([b],"meu-robo-marvel.png",{type:"image/png"});}catch(e){f=null;}
  if(f&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:"Meu robô da Maratona Marvel"}).catch(function(){});}
  else{var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="meu-robo-marvel.png";document.body.appendChild(a);a.click();a.remove();pop("Imagem salva 📸");}},"image/png");}
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
    h+='<div class="li"><span class="ic" aria-hidden="true">'+it.i+'</span><span class="nm">'+it.n+(it.g==="f"?' <small style="opacity:.7">♀</small>':it.g==="m"?' <small style="opacity:.7">♂</small>':'')+'</span>'+btn+'</div>';});});
  h+='<button type="button" class="lt" data-a="share">📸 Compartilhar meu robô</button><button type="button" class="lt" data-a="clr">Tirar tudo do robô</button>';
  m.innerHTML=h;var pv=document.getElementById("ljp"),d=document.querySelector("body>.dm")||document.querySelector(".dm:not(#ljp .dm)");
  if(d&&pv){prev=d.cloneNode(true);prev.removeAttribute("id");prev.setAttribute("style","");apply(prev);pv.appendChild(prev);}
}
function open(){if(!m)build();render();m.hidden=false;var x=document.getElementById("ljx");x&&x.focus();document.documentElement.style.overflow="hidden";}
function close(){if(m)m.hidden=true;document.documentElement.style.overflow="";var b=document.getElementById("hloja");b&&b.focus();}
document.addEventListener("click",function(e){var t=e.target;if(!t.closest)return;
  if(t.closest("#hloja")){open();return;}
  if(!m||m.hidden)return;if(t.closest("#ljx")){close();return;}
  var b=t.closest("button[data-a]");if(!b)return;var a=b.getAttribute("data-a"),it=find(b.getAttribute("data-i"));
  if(a==="buy"&&it){if(coins<it.p){pop("Faltam "+(it.p-coins)+" 🪙");return;}coins-=it.p;own[it.id]=1;eq[it.slot]=it.id;s(KC,coins);s(KO,own);s(KE,eq);party("Ficou demais! ✨");}
  else if(a==="eq"&&it){if(eq[it.slot]===it.id)delete eq[it.slot];else eq[it.slot]=it.id;s(KE,eq);}
  else if(a==="clr"){eq={};s(KE,eq);}
  else if(a==="share"){share();return;}
  applyAll();var y=m.scrollTop;render();m.scrollTop=y;lbl();});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&m&&!m.hidden)close();});
/* ---- botão na tela inicial ---- */
function btn(){var go=document.getElementById("hgo");if(!go||document.getElementById("hloja"))return;var b=document.createElement("button");b.type="button";b.id="hloja";go.parentNode.insertBefore(b,go.nextSibling);lbl();}
/* backup/restauração do app inclui a lojinha */
window.__lojaExport=function(){return {c:coins,o:own,e:eq};};
window.__lojaImport=function(o){if(!o)return;coins=+o.c||0;own=o.o||{};eq=o.e||{};s(KC,coins);s(KO,own);s(KE,eq);applyAll();lbl();};
function init(){if(!gan){gan={f:keysOf("maratona-marvel"),c:keysOf("maratona-conq")};s(KG,gan);}
  if(g("maratona-loja-bonus",null)==null){s("maratona-loja-bonus",1);coins+=30;s(KC,coins);setTimeout(function(){pop("+30 🪙 de boas-vindas");lbl();},1500);}}
function start(){init();btn();applyAll();setTimeout(applyAll,1500);}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
