/* Lojinha do robô: ganha moedas no quiz (+5 por acerto) e compra roupas e acessórios */
(function(){
var KC="maratona-moedas",KO="maratona-loja-itens",KE="maratona-loja-eq",PER=5;
function g(k,f){try{var v=localStorage.getItem(k);return v==null?f:JSON.parse(v);}catch(e){return f;}}
function s(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
var coins=+g(KC,0)||0,own=g(KO,{}),eq=g(KE,{});
/* ---- itens: cada um monta camadas 3D dentro da cabeça (.rh) ou do tronco (.rt) ----
   r = raridade (1 comum, 2 raro, 3 épico, 4 lendário). Classes de animação: ljs brilho, ljg pulso, ljf flutua,
   ljwL/ljwR asas, ljc capa, lje orelha, ljspin giro. Tudo some com "noanim"/"eco" (ver loja.css). */
function L(p,css,zs,shade,cls){zs.forEach(function(z,i){var e=document.createElement("div");e.className="ljl"+(cls?" "+cls:"");e.style.cssText=css+";transform:translateZ("+z+"px)"+(shade?";filter:brightness("+(.72+.34*i/Math.max(1,zs.length-1)).toFixed(2)+")":"");p.appendChild(e);});}
function R(a,b,st){var r=[];for(var z=a;z<=b+.01;z+=st)r.push(+z.toFixed(2));return r;}
/* estrelinha que pisca */
function SP(p,x,y,z,sz,dl){L(p,"left:"+x+"px;top:"+y+"px;width:"+sz+"px;height:"+sz+"px;background:#fff;clip-path:polygon(50% 0,61% 39%,100% 50%,61% 61%,50% 100%,39% 61%,0 50%,39% 39%);animation-delay:"+dl+"s",[z],0,"ljs");}
/* gema facetada */
function GM(p,x,y,z,sz,c1,c2){L(p,"left:"+x+"px;top:"+y+"px;width:"+sz+"px;height:"+sz+"px;background:linear-gradient(135deg,#fff 0,"+c1+" 35%,"+c2+" 100%);clip-path:polygon(50% 0,100% 35%,80% 100%,20% 100%,0 35%);box-shadow:0 0 4px "+c1,[z],0,"ljg");}
var RAR={1:["Comum","#9fb3a6"],2:["Raro","#4fc3f7"],3:["Épico","#c084fc"],4:["Lendário","#ffca28"],5:["Mítico","#ff4081"]};
var IT=[
/* ===== CABEÇA ===== */
{id:"cartola",n:"Cartola de gala",i:"🎩",p:60,r:2,slot:"head",on:"rh",mk:function(p){
 L(p,"left:12px;top:-30px;width:32px;height:31px;background:linear-gradient(90deg,#050505,#2c2c2c 36%,#555 48%,#181818 76%,#050505);border-radius:3px 3px 1px 1px",R(-13,13,4.4),1);
 L(p,"left:12px;top:-9px;width:32px;height:7px;background:linear-gradient(90deg,#7f0f0f,#e53935 45%,#7f0f0f)",R(-13,13,6.5),1);
 L(p,"left:0;top:-5px;width:56px;height:9px;background:linear-gradient(#777,#0a0a0a);border-radius:5px;border:1px solid #888",R(-22,22,5.5),1);
 L(p,"left:25px;top:-9px;width:7px;height:7px;background:linear-gradient(135deg,#fff3b0,#f9a825);border:1px solid #b36b00;border-radius:1px",[14],0,"ljg");
 L(p,"left:16px;top:-27px;width:3px;height:17px;background:linear-gradient(rgba(255,255,255,.6),transparent);border-radius:2px",[14.5],0);
 SP(p,41,-31,15,7,0);}},
{id:"bone",n:"Boné vermelho",i:"🧢",p:30,r:1,slot:"head",on:"rh",mk:function(p){
 L(p,"left:6px;top:-11px;width:44px;height:16px;background:radial-gradient(circle at 35% 25%,#ff7a70,#e53935 45%,#a31515);border-radius:22px 22px 4px 4px",R(-15,15,5),1);
 L(p,"left:11px;top:1px;width:34px;height:5px;background:linear-gradient(#a31515,#6d0d0d);border-radius:0 0 20px 20px;border-bottom:1px solid #4d0909",R(26,38,4),1);
 L(p,"left:24px;top:-14px;width:8px;height:5px;background:#b71c1c;border-radius:50% 50% 0 0",[0],0);
 L(p,"left:21px;top:-6px;width:14px;height:9px;background:#fff;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",[16],0);}},
{id:"gato",n:"Orelhas de gato",i:"🐱",p:40,r:2,slot:"head",on:"rh",mk:function(p){
 ["5px","36px"].forEach(function(x,k){
  L(p,"left:"+x+";top:-16px;width:16px;height:18px;background:linear-gradient(#4a4a4a,#222);clip-path:polygon(0 100%,50% 0,100% 100%);transform-origin:50% 100%",R(-4,4,2),1,"lje");
  L(p,"left:calc("+x+" + 4px);top:-9px;width:8px;height:10px;background:linear-gradient(#ffb3cb,#ff7fa7);clip-path:polygon(0 100%,50% 0,100% 100%);transform-origin:50% 100%",[5],0,"lje");});
 [[10,31],[10,35],[42,31],[42,35]].forEach(function(a,k){L(p,"left:"+(a[0]<28?a[0]-12:a[0]+2)+"px;top:"+a[1]+"px;width:12px;height:1px;background:rgba(255,255,255,.75);rotate:"+(a[0]<28?(k%2?9:-9):(k%2?-9:9))+"deg",[31],0);});}},
{id:"bruxo",n:"Chapéu de bruxo",i:"🧙",p:70,r:3,slot:"head",on:"rh",mk:function(p){
 L(p,"left:0;top:-5px;width:56px;height:8px;background:linear-gradient(#5a3f99,#2a1b52);border-radius:5px",R(-22,22,5.5),1);
 L(p,"left:13px;top:-40px;width:30px;height:37px;background:radial-gradient(circle at 30% 25%,#8a63e0,#4a2f8a 50%,#241346);clip-path:polygon(52% 0,100% 100%,0 100%)",R(-11,11,4.4),1);
 L(p,"left:13px;top:-10px;width:30px;height:6px;background:linear-gradient(90deg,#c79200,#ffd54a 50%,#c79200)",R(-11,11,5.5),1);
 L(p,"left:25px;top:-11px;width:8px;height:8px;background:#ffd54a;border:1px solid #8a5a00;border-radius:1px",[12],0);
 SP(p,22,-26,13,5,.2);SP(p,32,-18,13,4,.9);SP(p,26,-35,13,6,.5);}},
{id:"coroa",n:"Coroa real",i:"👑",p:140,r:4,slot:"head",on:"rh",mk:function(p){
 L(p,"left:9px;top:-20px;width:38px;height:21px;background:linear-gradient(#fff2a8,#ffca28 45%,#c77700);clip-path:polygon(0 100%,0 18%,22% 56%,50% 0,78% 56%,100% 18%,100% 100%)",R(-11,11,5.5),1);
 L(p,"left:9px;top:-4px;width:38px;height:5px;background:linear-gradient(#ffe082,#b36b00)",R(-11,11,5.5),1);
 GM(p,25,-10,12,7,"#ff5252","#8e0000");GM(p,12,-6,12,5,"#40c4ff","#01579b");GM(p,39,-6,12,5,"#69f0ae","#00695c");
 [[9,-20],[27,-23],[45,-20]].forEach(function(a,k){L(p,"left:"+a[0]+"px;top:"+a[1]+"px;width:4px;height:4px;background:radial-gradient(circle at 35% 30%,#fff,#ffd54a);border-radius:50%",[12],0);});
 SP(p,2,-24,13,6,0);SP(p,48,-26,13,6,.7);SP(p,26,-30,13,5,1.2);}},
{id:"moicano",n:"Moicano punk",i:"🤘",p:40,r:2,slot:"head",on:"rh",mk:function(p){
 L(p,"left:20px;top:-18px;width:16px;height:19px;background:linear-gradient(#ff4081,#ffca28 35%,#69f0ae 65%,#00b0ff);clip-path:polygon(0 100%,8% 24%,25% 62%,38% 8%,50% 54%,62% 0,75% 56%,92% 18%,100% 100%)",R(-19,19,2.7),1);}},
{id:"halo",n:"Auréola celestial",i:"😇",p:160,r:4,slot:"head",on:"rh",mk:function(p){
 L(p,"left:8px;top:-22px;width:40px;height:11px;border:3px solid #ffe97a;border-radius:50%;box-shadow:0 0 8px #ffd54a,inset 0 0 6px #fff3b0",[0,2,4],0,"ljf ljg");
 SP(p,4,-24,5,5,.3);SP(p,47,-22,5,5,1);}},
{id:"chifres",n:"Chifres de diabinho",i:"😈",p:90,r:3,slot:"head",on:"rh",mk:function(p){
 [["6px",1],["38px",-1]].forEach(function(a){L(p,"left:"+a[0]+";top:-16px;width:13px;height:19px;background:linear-gradient(#ff5252,#7f0000);clip-path:polygon("+(a[1]>0?"0 100%,10% 30%,90% 0,50% 100%":"100% 100%,90% 30%,10% 0,50% 100%")+")",R(-4,4,2),1);});
 L(p,"left:6px;top:-16px;width:3px;height:3px;background:#ff9e80;border-radius:50%;box-shadow:41px 0 0 #ff9e80",[5],0,"ljg");}},
{id:"fone",n:"Fone gamer",i:"🎧",p:75,r:3,slot:"head",on:"rh",mk:function(p){
 L(p,"left:-3px;top:-8px;width:62px;height:40px;border:4px solid #263238;border-bottom:0;border-radius:31px 31px 0 0;background:transparent",[0,3,6,-3,-6],0);
 [["-8px"],["50px"]].forEach(function(a){L(p,"left:"+a[0]+";top:12px;width:14px;height:18px;background:linear-gradient(135deg,#546e7a,#102027);border-radius:6px;border:1px solid #78909c",R(-6,6,3),1);L(p,"left:"+a[0]+";top:18px;width:6px;height:6px;margin:0 4px;background:#39ff14;border-radius:50%;box-shadow:0 0 6px #39ff14",[8],0,"ljg");});}},
/* ===== ROSTO ===== */
{id:"oculos",n:"Óculos escuros",i:"🕶️",p:35,r:1,slot:"face",on:"rh",mk:function(p){
 ["8px","29px"].forEach(function(x){L(p,"left:"+x+";top:13px;width:19px;height:13px;background:linear-gradient(135deg,#6a6a6a 0,#0a0a0a 38%,#000 70%);border-radius:4px 4px 9px 9px;border:1px solid #9a9a9a",[31,32],0);
  L(p,"left:calc("+x+" + 3px);top:15px;width:7px;height:2px;background:rgba(255,255,255,.7);border-radius:2px;rotate:-20deg",[33],0);});
 L(p,"left:26px;top:16px;width:5px;height:2px;background:#333",[32],0);
 L(p,"left:-3px;top:15px;width:11px;height:2px;background:#222",[28],0);L(p,"left:48px;top:15px;width:11px;height:2px;background:#222",[28],0);}},
{id:"bigode",n:"Bigode de gala",i:"🥸",p:25,r:1,slot:"face",on:"rh",mk:function(p){
 [["16px","1"],["29px","-1"]].forEach(function(a){var s=+a[1];
  L(p,"left:"+a[0]+";top:30px;width:12px;height:6px;background:linear-gradient(#4a2c18,#1d0f07);border-radius:"+(s>0?"80% 20% 60% 40%":"20% 80% 40% 60%")+";rotate:"+(s*-10)+"deg",[30,31],0);
  L(p,"left:calc("+a[0]+" + "+(s>0?-3:11)+"px);top:27px;width:5px;height:5px;border:2px solid #1d0f07;border-"+(s>0?"left":"right")+"-color:transparent;border-bottom-color:transparent;border-radius:50%;rotate:"+(s*35)+"deg",[31],0);});}},
{id:"mascara",n:"Máscara de herói",i:"🎭",p:60,r:2,slot:"face",on:"rh",mk:function(p){
 L(p,"left:4px;top:11px;width:48px;height:16px;background:linear-gradient(#ff5a54,#8e1b1b);clip-path:polygon(0 0,100% 0,100% 58%,88% 100%,64% 62%,50% 72%,36% 62%,12% 100%,0 58%)",[31,32],0);
 [["11px"],["32px"]].forEach(function(a){L(p,"left:"+a[0]+";top:15px;width:13px;height:7px;background:radial-gradient(ellipse,#fff 40%,#cfe9ff);border-radius:50%;box-shadow:0 0 5px #fff",[33],0,"ljg");});}},
{id:"nerd",n:"Óculos de nerd",i:"🤓",p:30,r:1,slot:"face",on:"rh",mk:function(p){
 ["8px","29px"].forEach(function(x){L(p,"left:"+x+";top:12px;width:19px;height:15px;border:2px solid #ff7043;border-radius:50%;background:linear-gradient(135deg,rgba(255,255,255,.28),rgba(255,255,255,.04) 55%)",[31,32],0);});
 L(p,"left:26px;top:18px;width:5px;height:2px;background:#ff7043",[32],0);L(p,"left:25px;top:16px;width:7px;height:5px;background:#eceff1;border-radius:1px;opacity:.9",[33],0);}},
{id:"aviador",n:"Óculos aviador",i:"😎",p:55,r:2,slot:"face",on:"rh",mk:function(p){
 ["7px","29px"].forEach(function(x){L(p,"left:"+x+";top:12px;width:20px;height:16px;background:linear-gradient(160deg,rgba(150,220,170,.85),rgba(10,40,25,.95) 60%);border:2px solid #e6c24a;border-radius:4px 4px 13px 13px",[31,32],0);
  L(p,"left:calc("+x+" + 3px);top:14px;width:6px;height:2px;background:rgba(255,255,255,.75);rotate:-18deg",[33],0);});
 L(p,"left:27px;top:15px;width:4px;height:2px;background:#e6c24a",[32],0);}},
{id:"tapaolho",n:"Tapa-olho pirata",i:"🏴‍☠️",p:45,r:2,slot:"face",on:"rh",mk:function(p){
 L(p,"left:29px;top:12px;width:19px;height:15px;background:radial-gradient(circle at 35% 30%,#444,#000);border-radius:50%;border:1px solid #666",[31,32],0);
 L(p,"left:-3px;top:15px;width:60px;height:2px;background:#111;rotate:-12deg;transform-origin:70% 50%",[29],0);
 L(p,"left:36px;top:17px;width:5px;height:5px;background:#e8e8e8;clip-path:polygon(50% 0,100% 100%,0 100%)",[33],0);}},
{id:"monoculo",n:"Monóculo elegante",i:"🧐",p:50,r:2,slot:"face",on:"rh",mk:function(p){
 L(p,"left:29px;top:11px;width:19px;height:19px;border:2px solid #e6c24a;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.4),rgba(180,230,255,.1))",[31,32],0,"ljg");
 L(p,"left:46px;top:28px;width:1px;height:22px;background:#e6c24a;rotate:-8deg",[30],0);SP(p,31,12,34,5,.4);}},
{id:"cilios",n:"Cílios longos",g:"f",i:"👁️",p:30,r:1,slot:"face",on:"rh",mk:function(p){
 [[7,13,-42],[8,10,-26],[10,8,-8],[45,13,42],[43,10,26],[41,8,8],[10,14,-55],[46,14,55]].forEach(function(a){L(p,"left:"+a[0]+"px;top:"+a[1]+"px;width:8px;height:2px;background:linear-gradient(90deg,#000,#222);border-radius:1px;rotate:"+a[2]+"deg",[32],0);});}},
{id:"batom",n:"Batom brilhante",g:"f",i:"💄",p:25,r:1,slot:"face",on:"rh",mk:function(p){
 L(p,"left:21px;top:34px;width:14px;height:7px;background:radial-gradient(ellipse at 50% 30%,#ff8ab1,#d81b60 70%);border-radius:50% 50% 65% 65%",[31,32],0);
 L(p,"left:26px;top:35px;width:5px;height:2px;background:rgba(255,255,255,.8);border-radius:2px",[33],0);}},
{id:"barba",n:"Barba de lenhador",g:"m",i:"🧔",p:35,r:1,slot:"face",on:"rh",mk:function(p){
 L(p,"left:12px;top:31px;width:32px;height:17px;background:repeating-linear-gradient(100deg,#4a3426 0 3px,#2b1a10 3px 5px);border-radius:3px 3px 16px 16px",[30,31,32],0);}},
/* ===== PESCOÇO ===== */
{id:"gravata",n:"Gravata-borboleta",i:"🎀",p:30,r:1,slot:"neck",on:"rt",mk:function(p){
 ["6px","20px"].forEach(function(x,k){L(p,"left:"+x+";top:-2px;width:10px;height:11px;background:linear-gradient(135deg,#ff6a64,#b71c1c);clip-path:polygon("+(k?"0 50%,100% 0,100% 100%":"100% 50%,0 0,0 100%")+")",[14],0);});
 L(p,"left:15px;top:1px;width:6px;height:6px;background:radial-gradient(circle at 35% 30%,#ff8a85,#7f0f0f);border-radius:50%",[15],0);}},
{id:"cachecol",n:"Cachecol de lã",i:"🧣",p:40,r:1,slot:"neck",on:"rt",mk:function(p){
 L(p,"left:-3px;top:-4px;width:42px;height:8px;background:repeating-linear-gradient(90deg,#2e7d32 0 5px,#c8e6c9 5px 7px);border-radius:5px",R(-11,13,2.4),1);
 L(p,"left:25px;top:2px;width:8px;height:19px;background:repeating-linear-gradient(180deg,#2e7d32 0 5px,#c8e6c9 5px 7px);border-radius:2px 2px 0 0;transform-origin:50% 0",[14],0,"ljc");
 L(p,"left:25px;top:20px;width:8px;height:4px;background:repeating-linear-gradient(90deg,#c8e6c9 0 1px,transparent 1px 2px);transform-origin:50% -18px",[14],0,"ljc");}},
{id:"medalha",n:"Medalha de campeão",i:"🏅",p:50,r:2,slot:"neck",on:"rt",mk:function(p){
 L(p,"left:10px;top:0;width:16px;height:9px;background:linear-gradient(90deg,#e53935 50%,#1e88e5 50%);clip-path:polygon(0 0,100% 0,62% 100%,38% 100%)",[13],0);
 L(p,"left:12px;top:8px;width:12px;height:12px;background:radial-gradient(circle at 35% 30%,#fff7c2,#ffca28 55%,#b36b00);border-radius:50%;border:1px solid #8a5a00",[14],0,"ljg");
 L(p,"left:15px;top:11px;width:6px;height:6px;background:#b36b00;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",[15],0);SP(p,22,8,16,5,.5);}},
{id:"gravatal",n:"Gravata executiva",g:"m",i:"👔",p:40,r:1,slot:"neck",on:"rt",mk:function(p){
 L(p,"left:15px;top:-1px;width:7px;height:6px;background:linear-gradient(#42a5f5,#0d47a1);border-radius:2px",[14],0);
 L(p,"left:14px;top:5px;width:9px;height:18px;background:repeating-linear-gradient(135deg,#1976d2 0 3px,#0d47a1 3px 6px);clip-path:polygon(15% 0,85% 0,100% 82%,50% 100%,0 82%)",[14],0);}},
{id:"colar",n:"Colar de pérolas",g:"f",i:"📿",p:45,r:2,slot:"neck",on:"rt",mk:function(p){
 [[4,2],[8,4.5],[12,6.5],[16,7.5],[20,7.5],[24,6.5],[28,4.5],[32,2]].forEach(function(a){L(p,"left:"+a[0]+"px;top:"+a[1]+"px;width:5px;height:5px;background:radial-gradient(circle at 35% 30%,#fff,#efe6ee 55%,#b9a9b6);border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,.35)",[14],0);});
 GM(p,15,10,15,7,"#f48fb1","#880e4f");}},
{id:"fonepescoco",n:"Fone no pescoço",i:"📻",p:35,r:1,slot:"neck",on:"rt",mk:function(p){
 L(p,"left:-1px;top:-3px;width:38px;height:16px;border:3px solid #37474f;border-top:0;border-radius:0 0 20px 20px",[10,13,16],0);
 [["-5px"],["29px"]].forEach(function(a){L(p,"left:"+a[0]+";top:8px;width:11px;height:13px;background:linear-gradient(135deg,#546e7a,#102027);border-radius:5px;border:1px solid #78909c",[14,16],0);});}},
/* ===== PEITO ===== */
{id:"reator",n:"Reator de energia",i:"🔵",p:110,r:3,slot:"chest",on:"rt",mk:function(p){
 L(p,"left:11px;top:6px;width:14px;height:14px;border-radius:50%;background:radial-gradient(circle,#fff 0 18%,#7df3ff 30%,#0097a7 65%,#004d57);border:2px solid #b0bec5;box-shadow:0 0 10px #4dd0e1,inset 0 0 6px #fff",[14,15],0,"ljg");
 L(p,"left:8px;top:3px;width:20px;height:20px;border-radius:50%;border:2px dashed rgba(125,243,255,.9)",[15],0,"ljspin");}},
{id:"estrela",n:"Estrela de xerife",i:"⭐",p:45,r:1,slot:"chest",on:"rt",mk:function(p){
 L(p,"left:21px;top:5px;width:11px;height:11px;background:linear-gradient(135deg,#fff3b0,#ffca28 50%,#b36b00);clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",[14,14.8],0,"ljg");}},
{id:"armadura",n:"Peitoral de armadura",i:"🦾",p:120,r:3,slot:"chest",on:"rt",mk:function(p){
 L(p,"left:2px;top:0;width:32px;height:25px;background:linear-gradient(135deg,#eceff1 0,#90a4ae 40%,#455a64 100%);clip-path:polygon(0 12%,22% 0,78% 0,100% 12%,92% 100%,8% 100%);border-radius:2px",R(12,16,2),1);
 L(p,"left:16px;top:3px;width:4px;height:21px;background:linear-gradient(#e53935,#7f0f0f)",[17],0);
 L(p,"left:6px;top:12px;width:24px;height:3px;background:linear-gradient(90deg,transparent,#e53935,transparent)",[17],0,"ljg");
 L(p,"left:-4px;top:-4px;width:12px;height:11px;background:linear-gradient(135deg,#cfd8dc,#546e7a);border-radius:50% 50% 30% 30%",[10],0);L(p,"left:28px;top:-4px;width:12px;height:11px;background:linear-gradient(225deg,#cfd8dc,#546e7a);border-radius:50% 50% 30% 30%",[10],0);}},
/* ===== CINTURA ===== */
{id:"cinturao",n:"Cinturão de campeão",g:"m",i:"🥋",p:55,r:2,slot:"waist",on:"rt",mk:function(p){
 L(p,"left:-2px;top:17px;width:40px;height:6px;background:linear-gradient(#ffd54a,#e08600);border-radius:2px;border-top:1px solid #fff3b0",R(-10,12,2.2),1);
 L(p,"left:13px;top:14px;width:10px;height:10px;background:radial-gradient(circle at 35% 30%,#ff8a80,#c62828 60%,#6d0d0d);border:2px solid #ffd54a;border-radius:3px",[13,14],0,"ljg");}},
{id:"tutu",n:"Saia de bailarina",g:"f",i:"🩰",p:75,r:2,slot:"waist",on:"rt",mk:function(p){
 [0,1,2].forEach(function(k){L(p,"left:"+(-12+k*2)+"px;top:"+(14+k*1.5)+"px;width:"+(60-k*4)+"px;height:"+(12-k)+"px;background:radial-gradient(circle at 50% 0,"+["#ffc2da","#ff9ec2","#ec6a99"][k]+",#d84b82);border-radius:8px 8px 50% 50%",R(-11,13,6),1);});
 SP(p,0,24,16,5,.2);SP(p,30,26,16,4,1);}},
/* ===== COSTAS ===== */
{id:"capa",n:"Capa heroica",i:"🦸",p:80,r:2,slot:"body",on:"rt",mk:function(p){
 L(p,"left:-10px;top:-8px;width:56px;height:50px;background:linear-gradient(#ff5a54 0,#c62828 45%,#5f0b0b);border-radius:7px 7px 26px 26px;transform-origin:50% 0",R(-26,-16,2.5),1,"ljc");
 L(p,"left:-10px;top:-8px;width:56px;height:6px;background:linear-gradient(#ffe082,#c77700);border-radius:6px 6px 0 0",[-14],0);
 L(p,"left:15px;top:-10px;width:7px;height:7px;background:radial-gradient(circle at 35% 30%,#fff7c2,#f9a825);border-radius:50%;border:1px solid #8a5a00",[-13],0,"ljg");}},
{id:"asas",n:"Asas de anjo",i:"🪽",p:150,r:4,slot:"body",on:"rt",mk:function(p){
 L(p,"left:-38px;top:-20px;width:42px;height:44px;background:linear-gradient(135deg,#fff 18%,#d4eeff 55%,#8fd0ff);clip-path:polygon(100% 82%,92% 22%,64% 2%,38% 12%,12% 38%,0 70%,24% 62%,34% 88%,60% 78%,76% 100%);transform-origin:100% 82%;filter:drop-shadow(0 0 4px #bfe6ff)",[-16,-14,-12,-10],0,"ljwL");
 L(p,"left:32px;top:-20px;width:42px;height:44px;background:linear-gradient(225deg,#fff 18%,#d4eeff 55%,#8fd0ff);clip-path:polygon(0 82%,8% 22%,36% 2%,62% 12%,88% 38%,100% 70%,76% 62%,66% 88%,40% 78%,24% 100%);transform-origin:0 82%;filter:drop-shadow(0 0 4px #bfe6ff)",[-16,-14,-12,-10],0,"ljwR");
 SP(p,-30,-18,-9,5,.1);SP(p,66,-16,-9,5,.8);}},
/* ===== AURA ===== */
{id:"auraverde",n:"Aura de energia",i:"💚",p:130,r:3,slot:"aura",on:"rt",mk:function(p){
 L(p,"left:-36px;top:-67px;width:108px;height:108px;border-radius:50%;background:radial-gradient(circle,rgba(57,255,20,0) 50%,rgba(57,255,20,.42) 62%,rgba(57,255,20,0) 74%)",[-34],0,"ljg");
 L(p,"left:-28px;top:-59px;width:92px;height:92px;border-radius:50%;border:2px dashed rgba(190,255,170,.85)",[-32],0,"ljspin");
 SP(p,-30,-52,-30,6,0);SP(p,62,-36,-30,5,.6);SP(p,-26,18,-30,5,1.1);SP(p,58,20,-30,6,1.6);}},
{id:"auracosmica",n:"Aura cósmica",i:"🔮",p:220,r:4,slot:"aura",on:"rt",mk:function(p){
 L(p,"left:-40px;top:-71px;width:116px;height:116px;border-radius:50%;background:radial-gradient(circle,rgba(160,80,255,0) 48%,rgba(160,80,255,.5) 60%,rgba(60,200,255,.25) 70%,rgba(60,200,255,0) 78%)",[-36],0,"ljg");
 L(p,"left:-30px;top:-61px;width:96px;height:96px;border-radius:50%;border:2px dotted rgba(220,180,255,.95)",[-34],0,"ljspin");
 L(p,"left:-22px;top:-53px;width:80px;height:80px;border-radius:50%;border:1px solid rgba(120,220,255,.8)",[-33],0,"ljspin2");
 SP(p,-34,-50,-31,6,0);SP(p,66,-40,-31,7,.4);SP(p,-28,20,-31,5,.9);SP(p,60,22,-31,6,1.3);SP(p,16,-70,-31,6,1.8);}},
/* ===== MÃO ===== */
{id:"escudo",n:"Escudo estrelado",i:"🛡️",p:90,r:3,slot:"hand",on:"rt",mk:function(p){
 L(p,"left:-28px;top:-1px;width:30px;height:30px;border-radius:50%;background:radial-gradient(circle,#1565c0 0 30%,#fff 31% 43%,#c62828 44% 66%,#fff 67% 78%,#c62828 79%);border:1px solid #7f0f0f",R(14,17,1.5),1);
 L(p,"left:-19px;top:8px;width:13px;height:13px;background:linear-gradient(#fff,#cfe3ff);clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",[18],0,"ljg");
 SP(p,-24,2,19,5,.5);}},
{id:"martelo",n:"Martelo do trovão",i:"🔨",p:120,r:3,slot:"hand",on:"rt",mk:function(p){
 L(p,"left:46px;top:6px;width:5px;height:34px;background:linear-gradient(90deg,#4a2f18,#8d5a2b 50%,#3b2511);border-radius:2px",R(-3,3,1.5),1);
 L(p,"left:36px;top:-8px;width:25px;height:15px;background:linear-gradient(135deg,#f5f7f8,#90a4ae 45%,#455a64);border-radius:3px;border:1px solid #cfd8dc",R(-5,5,2.5),1);
 L(p,"left:40px;top:-5px;width:3px;height:9px;background:#4dd0e1;box-shadow:0 0 6px #4dd0e1;clip-path:polygon(60% 0,0 55%,40% 55%,20% 100%,100% 40%,55% 40%)",[7],0,"ljg");SP(p,56,-10,8,6,.3);}},
{id:"espada",n:"Espada de energia",i:"⚔️",p:100,r:3,slot:"hand",on:"rt",mk:function(p){
 L(p,"left:46px;top:-30px;width:6px;height:40px;background:linear-gradient(90deg,#4dd0e1,#fff 50%,#4dd0e1);border-radius:3px 3px 1px 1px;box-shadow:0 0 10px #4dd0e1",[14,15],0,"ljg");
 L(p,"left:41px;top:10px;width:16px;height:4px;background:linear-gradient(#ffd54a,#b36b00);border-radius:2px",[14,15],0);
 L(p,"left:46px;top:14px;width:6px;height:11px;background:linear-gradient(90deg,#37474f,#78909c,#37474f);border-radius:2px",[14,15],0);SP(p,50,-32,16,6,.6);}}
,{id:"tiara",n:"Tiara de princesa",g:"f",i:"👸",p:90,r:3,slot:"head",on:"rh",mk:function(p){
 L(p,"left:7px;top:-8px;width:42px;height:11px;border:2px solid #f1f5f8;border-bottom:0;border-radius:21px 21px 0 0;box-shadow:0 0 5px #fff",R(8,24,2.7),0);
 GM(p,24,-17,23,8,"#ff80ab","#c2185b");GM(p,13,-11,22,5,"#b3e5fc","#0288d1");GM(p,38,-11,22,5,"#b3e5fc","#0288d1");SP(p,6,-14,24,5,.2);SP(p,46,-14,24,5,.9);}},
{id:"laco",n:"Laço de cabelo",g:"f",i:"🎀",p:35,r:1,slot:"head",on:"rh",mk:function(p){
 L(p,"left:23px;top:-15px;width:13px;height:15px;background:linear-gradient(135deg,#ff8ab8,#e0307d);clip-path:polygon(100% 50%,0 0,0 100%)",R(1,7,2),1);
 L(p,"left:36px;top:-15px;width:13px;height:15px;background:linear-gradient(225deg,#ff8ab8,#e0307d);clip-path:polygon(0 50%,100% 0,100% 100%)",R(1,7,2),1);
 L(p,"left:33px;top:-10px;width:6px;height:6px;background:radial-gradient(circle at 35% 30%,#ff80ab,#ad1457);border-radius:50%",[8],0);}},
{id:"flor",n:"Flor no cabelo",g:"f",i:"🌸",p:35,r:1,slot:"head",on:"rh",mk:function(p){
 L(p,"left:10px;top:-9px;width:7px;height:7px;background:radial-gradient(circle at 35% 30%,#fff3b0,#ffca28);border-radius:50%;box-shadow:0 -7px 0 0 #ff80ab,7px 0 0 0 #ff80ab,0 7px 0 0 #ff80ab,-7px 0 0 0 #ff80ab,5px -5px 0 0 #ffb3cc,-5px -5px 0 0 #ffb3cc,5px 5px 0 0 #ffb3cc,-5px 5px 0 0 #ffb3cc",[18,19],0);SP(p,4,-14,20,5,.4);}},
{id:"cowboy",n:"Chapéu de cowboy",g:"m",i:"🤠",p:55,r:2,slot:"head",on:"rh",mk:function(p){
 L(p,"left:-9px;top:-5px;width:74px;height:8px;background:linear-gradient(#b9823f,#6d4219);border-radius:4px 4px 30px 30px/4px 4px 8px 8px",R(-22,22,5.5),1);
 L(p,"left:11px;top:-24px;width:34px;height:21px;background:linear-gradient(#c98f4b,#8d5a2b);border-radius:10px 10px 0 0;clip-path:polygon(0 100%,5% 22%,30% 0,50% 22%,70% 0,95% 22%,100% 100%)",R(-12,12,4.8),1);
 L(p,"left:11px;top:-9px;width:34px;height:4px;background:linear-gradient(#5a3a1a,#2a1a0a)",R(-12,12,6),1);
 L(p,"left:25px;top:-10px;width:6px;height:6px;background:radial-gradient(circle at 35% 30%,#fff3b0,#e08600);border-radius:50%",[13],0,"ljg");}},
{id:"obra",n:"Capacete de obra",g:"m",i:"👷",p:40,r:1,slot:"head",on:"rh",mk:function(p){
 L(p,"left:4px;top:-16px;width:48px;height:20px;background:radial-gradient(circle at 35% 25%,#fff59d,#ffd600 45%,#e09f00);border-radius:24px 24px 2px 2px",R(-17,17,4.25),1);
 L(p,"left:23px;top:-20px;width:10px;height:8px;background:linear-gradient(#ffe082,#f9a825);border-radius:3px 3px 0 0",R(-15,15,5),1);
 L(p,"left:7px;top:2px;width:42px;height:4px;background:linear-gradient(#f9a825,#b36b00);border-radius:0 0 4px 4px",R(20,30,5),1);
 L(p,"left:24px;top:-8px;width:8px;height:8px;background:#ff5252;border-radius:50%;box-shadow:0 0 6px #ff5252",[18],0,"ljg");}}
,{id:"natal",n:"Chapéu de Natal",i:"🎅",p:30,r:1,slot:"head",on:"rh",mk:function(p){
 L(p,"left:6px;top:-6px;width:44px;height:9px;background:linear-gradient(#fff,#cfd8dc);border-radius:5px",R(-16,16,4.6),1);
 L(p,"left:10px;top:-28px;width:38px;height:24px;background:linear-gradient(#ff6a5f,#b71c1c);clip-path:polygon(0 100%,26% 30%,86% 0,100% 100%)",R(-12,12,4.8),1);
 L(p,"left:42px;top:-33px;width:12px;height:12px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#dfe8ee)",[0],0,"ljf");
 SP(p,28,-30,13,5,.5);}},
{id:"espacial",n:"Capacete espacial",i:"👨‍🚀",p:100,r:3,slot:"head",on:"rh",mk:function(p){
 L(p,"left:-7px;top:-13px;width:70px;height:60px;border-radius:50% 50% 40% 40%;background:radial-gradient(circle at 30% 20%,rgba(255,255,255,.5),rgba(120,200,255,.14) 42%,rgba(120,200,255,.05) 72%);border:3px solid rgba(215,238,255,.8);box-shadow:0 0 10px rgba(120,200,255,.55),inset 0 0 12px rgba(190,225,255,.45)",[-22,-8,6,20,34],0);
 L(p,"left:-9px;top:40px;width:74px;height:8px;border-radius:5px;background:linear-gradient(#eceff1,#78909c)",R(-22,22,5.5),1);
 L(p,"left:46px;top:-6px;width:5px;height:5px;border-radius:50%;background:#ff5252;box-shadow:0 0 6px #ff5252",[36],0,"ljg");
 SP(p,10,-8,36,5,.2);}},
{id:"destino",n:"Capuz do Doutor Destino",i:"🟢",p:320,r:5,slot:"head",on:"rh",mk:function(p){
 L(p,"left:-4px;top:-15px;width:64px;height:34px;background:radial-gradient(circle at 35% 20%,#4ea860,#1f6b36 55%,#0e3d1e);border-radius:32px 32px 6px 6px",R(-22,22,5.5),1);
 [-8,50].forEach(function(x){L(p,"left:"+x+"px;top:8px;width:14px;height:46px;background:linear-gradient(180deg,#1f6b36,#0b3318);border-radius:6px 6px 14px 14px",R(-14,14,7),1);});
 L(p,"left:-3px;top:-8px;width:62px;height:17px;background:linear-gradient(#35944f,#14502a);border-radius:30px 30px 0 0;border-bottom:2px solid #ffd54a",[27,28],0);
 L(p,"left:23px;top:-11px;width:10px;height:10px;background:radial-gradient(circle at 35% 30%,#fff3b0,#e08600);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)",[30],0,"ljg");
 SP(p,2,-16,30,5,.3);SP(p,48,-14,30,5,1);}},
{id:"oculos3d",n:"Óculos 3D de cinema",i:"🥽",p:30,r:1,slot:"face",on:"rh",mk:function(p){
 L(p,"left:6px;top:13px;width:20px;height:13px;background:linear-gradient(135deg,rgba(255,110,110,.85),rgba(190,30,30,.85));border-radius:3px;border:2px solid #f5f5f5",[31,32],0);
 L(p,"left:30px;top:13px;width:20px;height:13px;background:linear-gradient(135deg,rgba(110,230,255,.85),rgba(20,130,170,.85));border-radius:3px;border:2px solid #f5f5f5",[31,32],0);
 L(p,"left:26px;top:17px;width:4px;height:3px;background:#f5f5f5",[32],0);
 L(p,"left:-3px;top:16px;width:10px;height:2px;background:#f5f5f5",[28],0);L(p,"left:49px;top:16px;width:10px;height:2px;background:#f5f5f5",[28],0);}},
{id:"corado",n:"Bochechas coradas",i:"😊",p:20,r:1,slot:"face",on:"rh",mk:function(p){
 [6,40].forEach(function(x){L(p,"left:"+x+"px;top:27px;width:11px;height:7px;background:radial-gradient(ellipse,rgba(255,105,150,.9),rgba(255,105,150,0) 72%);border-radius:50%",[31,32],0,"ljg");});}},
{id:"corrente",n:"Corrente de ouro",i:"⛓️",p:55,r:2,slot:"neck",on:"rt",mk:function(p){
 [[2,2],[6,4.5],[10,6.5],[14,7.5],[18,8],[22,7.5],[26,6.5],[30,4.5],[34,2]].forEach(function(a){L(p,"left:"+a[0]+"px;top:"+a[1]+"px;width:5px;height:4px;border:1.5px solid #ffd54a;border-radius:50%;box-shadow:0 0 3px #b36b00",[14],0);});
 L(p,"left:14px;top:11px;width:9px;height:9px;background:linear-gradient(135deg,#fff3b0,#ffb300 55%,#b36b00);border-radius:50%;border:1px solid #8a5a00",[15],0,"ljg");}},
{id:"joiamente",n:"Joia da Mente",i:"💛",p:190,r:4,slot:"chest",on:"rt",mk:function(p){
 L(p,"left:12px;top:4px;width:13px;height:16px;background:linear-gradient(135deg,#fff 0,#ffe45e 30%,#ffb300 70%,#b36b00);clip-path:polygon(50% 0,100% 28%,100% 72%,50% 100%,0 72%,0 28%);filter:drop-shadow(0 0 5px #ffd54a)",[14,15],0,"ljg");
 L(p,"left:9px;top:1px;width:19px;height:22px;border-radius:50%;border:1.5px dashed rgba(255,230,120,.85)",[15],0,"ljspin");
 SP(p,2,2,15,5,.2);SP(p,30,12,15,4,.9);}},
{id:"cintoutil",n:"Cinto de utilidades",i:"🧰",p:40,r:1,slot:"waist",on:"rt",mk:function(p){
 L(p,"left:-2px;top:17px;width:40px;height:5px;background:linear-gradient(#5d4037,#2e1b14);border-radius:2px",R(-10,12,2.2),1);
 L(p,"left:2px;top:15px;width:7px;height:9px;background:linear-gradient(#ffd54a,#b36b00);border-radius:2px",[13],0);
 L(p,"left:27px;top:15px;width:7px;height:9px;background:linear-gradient(#ffd54a,#b36b00);border-radius:2px",[13],0);
 L(p,"left:14px;top:15px;width:9px;height:9px;background:radial-gradient(circle at 35% 30%,#fff3b0,#e08600);border:1.5px solid #8a5a00;border-radius:2px",[14],0,"ljg");}},
{id:"jetpack",n:"Mochila foguete",i:"🚀",p:110,r:3,slot:"body",on:"rt",mk:function(p){
 [-6,24].forEach(function(x){L(p,"left:"+x+"px;top:-4px;width:18px;height:34px;background:linear-gradient(90deg,#b0bec5,#eceff1 40%,#607d8b);border-radius:8px 8px 5px 5px;border:1px solid #455a64",R(-20,-12,2.7),1);
  L(p,"left:"+(x+3)+"px;top:30px;width:12px;height:22px;background:radial-gradient(ellipse at 50% 0,#fff 0,#ffd54a 30%,#ff6d00 62%,transparent 80%);filter:blur(1px)",[-17],0,"ljg ljf");});
 L(p,"left:6px;top:8px;width:24px;height:8px;background:linear-gradient(#ef5350,#b71c1c);border-radius:3px",[-11],0);}},
{id:"manto",n:"Manto da Levitação",i:"🧥",p:170,r:4,slot:"body",on:"rt",mk:function(p){
 L(p,"left:-14px;top:-10px;width:64px;height:60px;background:linear-gradient(#ff6a4d 0,#d32f2f 40%,#7f0f0f);border-radius:8px 8px 30px 30px;transform-origin:50% 0;border-bottom:3px solid #ffca28",R(-28,-16,3),1,"ljc");
 L(p,"left:-14px;top:-10px;width:14px;height:22px;background:linear-gradient(#ffe082,#c77700);border-radius:8px 0 12px 0",[-14],0);
 L(p,"left:36px;top:-10px;width:14px;height:22px;background:linear-gradient(#ffe082,#c77700);border-radius:0 8px 0 12px",[-14],0);
 L(p,"left:12px;top:-12px;width:12px;height:12px;background:radial-gradient(circle at 35% 30%,#fff,#7df3ff 50%,#0097a7);border-radius:50%;border:2px solid #ffd54a",[-13],0,"ljg");
 SP(p,-10,40,-26,5,.4);SP(p,46,36,-26,5,1);}},
{id:"varinha",n:"Varinha estelar",i:"🪄",p:70,r:2,slot:"hand",on:"rt",mk:function(p){
 L(p,"left:48px;top:2px;width:4px;height:30px;background:linear-gradient(90deg,#4a2f18,#a47440 50%,#3b2511);border-radius:2px",R(-1,1,1),1);
 L(p,"left:41px;top:-14px;width:18px;height:18px;background:linear-gradient(135deg,#fff,#ffe45e 45%,#ffb300);clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);filter:drop-shadow(0 0 5px #ffd54a)",[3],0,"ljg");
 SP(p,36,-18,4,5,.2);SP(p,58,-8,4,5,.9);}},
{id:"manopla",n:"Manopla do Infinito",i:"🧤",p:380,r:5,slot:"hand",on:"rt",mk:function(p){
 L(p,"left:-23px;top:2px;width:20px;height:24px;background:linear-gradient(135deg,#ffe082,#ffb300 50%,#b36b00);border-radius:6px 6px 9px 9px;border:1px solid #fff3b0",R(8,12,2),1);
 ["#7b1fa2","#1e88e5","#ffd600","#e53935","#43a047","#ff7043"].forEach(function(col,k){L(p,"left:"+(-21+(k%3)*6)+"px;top:"+(4+Math.floor(k/3)*6)+"px;width:5px;height:5px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,"+col+" 55%);box-shadow:0 0 5px "+col,[13],0,"ljg");});
 L(p,"left:-29px;top:-4px;width:32px;height:36px;border-radius:50%;border:1.5px dashed rgba(255,230,120,.8)",[14],0,"ljspin");SP(p,-30,-2,14,5,.3);SP(p,-2,22,14,5,1);}},
{id:"auradestino",n:"Aura do Doomsday",i:"⚡",p:400,r:5,slot:"aura",on:"rt",mk:function(p){
 L(p,"left:-40px;top:-72px;width:116px;height:116px;border-radius:50%;background:radial-gradient(circle,rgba(0,255,120,0) 48%,rgba(0,255,120,.5) 60%,rgba(255,64,129,.25) 70%,rgba(0,255,120,0) 78%)",[-34],0,"ljg");
 L(p,"left:-32px;top:-64px;width:100px;height:100px;border-radius:50%;border:2px dashed rgba(140,255,190,.9)",[-32],0,"ljspin");
 L(p,"left:-26px;top:-58px;width:88px;height:88px;border-radius:50%;border:2px dotted rgba(255,128,171,.85)",[-31],0,"ljspin2");
 [[-34,-50],[66,-40],[-30,20],[62,24],[18,-76],[18,40]].forEach(function(a,k){L(p,"left:"+a[0]+"px;top:"+a[1]+"px;width:8px;height:18px;background:linear-gradient(#fff,#7dffb0);clip-path:polygon(60% 0,0 55%,40% 55%,20% 100%,100% 40%,55% 40%);filter:drop-shadow(0 0 4px #39ff14);animation-delay:"+(k*.3)+"s",[-30],0,"ljs");});}}
];
var SL=[["head","Cabeça"],["face","Rosto"],["neck","Pescoço"],["chest","Peito"],["waist","Cintura"],["body","Costas"],["hand","Mão"],["aura","Aura"]];
function find(id){return IT.filter(function(x){return x.id===id;})[0];}
/* tr = item sendo "provado" (não comprado) só no prévia da loja */
function apply(d,tr){if(!d)return;[].forEach.call(d.querySelectorAll(".ljl"),function(e){e.remove();});
  IT.forEach(function(it){var on=tr&&tr.slot===it.slot?tr.id===it.id:(eq[it.slot]===it.id&&own[it.id]);if(on){var p=d.querySelector("."+it.on);if(p)it.mk(p);}});}
function applyAll(){[].forEach.call(document.querySelectorAll(".dm"),function(d){apply(d);});}
/* ---- moedas ---- */
function pop(t){var n=document.querySelectorAll(".lj-pop").length,e=document.createElement("div");e.className="lj-pop";e.setAttribute("role","status");e.style.marginTop=Math.min(n,3)*36+"px";e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.remove();},1700);}
function lbl(){var b=document.getElementById("hloja");if(b)b.innerHTML='<span class="hi">'+BAG+'</span><span class="hn">Lojinha</span><span class="hc">🪙 '+coins+'</span>';var c=document.getElementById("ljc");if(c)c.textContent="🪙 "+coins;}
function add(n){coins+=n;s(KC,coins);lbl();pop("+"+n+" 🪙");}
var KG="maratona-loja-ganhos",gan=g(KG,null);
function keysOf(k){try{return Object.keys(JSON.parse(localStorage.getItem(k)||"{}")||{});}catch(e){return [];}}
function party(t){try{if(window.mkHop)window.mkHop();var md=document.documentElement.getAttribute("data-rfala");if(window.MR_SAY&&md!=="mudo")window.MR_SAY(t,2400);}catch(e){}}
window.__lojaParty=party;
function reward(kind,k,v,each,msg){if(!gan)return;try{var cur=Object.keys(JSON.parse(v)||{}),have=gan[kind]||[],nw=cur.filter(function(x){return have.indexOf(x)<0;});
  if(!nw.length)return;gan[kind]=have.concat(nw);s(KG,gan);if(nw.length<=2){add(each*nw.length);party(msg);}}catch(e){}}
try{var _s=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){var old=0;if(k==="maratona-quiz"){try{old=parseInt(this.getItem(k)||"0",10)||0;}catch(e){}}
  var r=_s.call(this,k,v);
  if(k==="maratona-quiz"&&(parseInt(v,10)||0)-old===1){add(PER);missao();try{window.dispatchEvent(new Event("mr-quiz-ok"));}catch(e){}}
  else if(k==="maratona-marvel"){reward("f",k,v,3,"Mais um filme! 🎬 +3 🪙");marco(v);}
  else if(k==="maratona-conq")reward("c",k,v,15,"Conquista nova! 🏆 +15 🪙");
  return r;};}catch(e){}
/* ---- mais jeitos de ganhar moedas: bônus diário com sequência, missão do dia, marcos de filmes, caixa surpresa ---- */
var KD="maratona-loja-dia",KM="maratona-loja-miss",KK="maratona-loja-marco",META=5,MPREMIO=15,BOXP=60,PESO={1:50,2:30,3:14,4:5,5:1};
function hoje(off){var d=new Date();d.setDate(d.getDate()+(off||0));return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
var dia=g(KD,null),miss=g(KM,null),wayOpen=false;
function bonusDiario(){var t=hoje(0);if(dia&&dia.d===t)return;var st=dia&&dia.d===hoje(-1)?(dia.s||0)+1:1,b=Math.min(5+(st-1)*3,20);dia={d:t,s:st};s(KD,dia);coins+=b;s(KC,coins);lbl();pop("🔥 Dia "+st+" seguido: +"+b+" 🪙");}
function missaoHoje(){var t=hoje(0);if(!miss||miss.d!==t){miss={d:t,n:0,ok:0};s(KM,miss);}return miss;}
function missao(){var q=missaoHoje();q.n++;s(KM,q);if(q.n>=META&&!q.ok){q.ok=1;s(KM,q);setTimeout(function(){coins+=MPREMIO;s(KC,coins);lbl();pop("🎯 Missão do dia! +"+MPREMIO+" 🪙");party("Missão cumprida! 🎯");},900);}}
function marco(v){try{var n=Object.keys(JSON.parse(v)||{}).length,mk=Math.floor(n/5)*5,pd=g(KK,null);if(pd==null){s(KK,mk);return;}if(mk>pd){var q=(mk-pd)/5;s(KK,mk);if(q<=2)setTimeout(function(){coins+=10*q;s(KC,coins);lbl();pop("🏁 "+mk+" filmes! +"+10*q+" 🪙");},900);}}catch(e){}}
function caixa(){if(coins<BOXP){pop("Faltam "+(BOXP-coins)+" 🪙");return null;}var pool=IT.filter(function(x){return !own[x.id];});if(!pool.length){pop("Você já tem tudo! 🎉");return null;}
  var tot=0,i;pool.forEach(function(x){tot+=PESO[x.r||1]||1;});var q=Math.random()*tot,it=pool[0];for(i=0;i<pool.length;i++){q-=PESO[pool[i].r||1]||1;if(q<=0){it=pool[i];break;}}
  coins-=BOXP;own[it.id]=1;eq[it.slot]=it.id;tr=null;s(KC,coins);s(KO,own);s(KE,eq);return it;}
/* ---- imagem para compartilhar (desenho 2D do robô vestido) ---- */
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
function pg(c,pts,f){c.beginPath();pts.forEach(function(p,i){i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]);});c.closePath();c.fillStyle=f;c.fill();}
function draw(){var W=720,H=900,cv=document.createElement("canvas");cv.width=W;cv.height=H;var c=cv.getContext("2d");
  var bg=c.createLinearGradient(0,0,0,H);bg.addColorStop(0,"#06120a");bg.addColorStop(1,"#0b2a14");c.fillStyle=bg;c.fillRect(0,0,W,H);
  var gl=c.createRadialGradient(360,560,10,360,560,330);gl.addColorStop(0,"rgba(57,255,20,.28)");gl.addColorStop(1,"rgba(57,255,20,0)");c.fillStyle=gl;c.fillRect(0,0,W,H);
  c.fillStyle="#fff";c.textAlign="center";c.font="800 40px system-ui,sans-serif";c.fillText("Meu robô da Maratona Marvel",360,90);
  c.font="600 26px system-ui,sans-serif";c.fillStyle="#9fe8a6";c.fillText("🪙 "+coins+"  ·  "+ownN()+"/"+IT.length+" acessórios",360,135);
  c.save();c.translate(360,330);var S=5.4;c.scale(S,S);
  var e=function(id){return eq[find(id)&&find(id).slot]===id&&own[id];};
  var G=function(a,b){return a;};
  if(e("auraverde")||e("auracosmica")||e("auradestino")){var cs=e("auracosmica")||e("auradestino");var ag=c.createRadialGradient(0,52,18,0,52,64);ag.addColorStop(0,"rgba(0,0,0,0)");ag.addColorStop(.62,cs?"rgba(160,80,255,.45)":"rgba(57,255,20,.4)");ag.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=ag;c.beginPath();c.arc(0,52,64,0,7);c.fill();c.strokeStyle=cs?"rgba(220,180,255,.9)":"rgba(190,255,170,.85)";c.lineWidth=1;c.setLineDash([3,3]);c.beginPath();c.arc(0,52,50,0,7);c.stroke();c.setLineDash([]);}
  if(e("capa")){rr(c,-27,50,54,40,14);c.fillStyle="#c62828";c.fill();}
  if(e("asas")){[-1,1].forEach(function(s){c.beginPath();c.ellipse(s*36,60,16,22,s*.5,0,7);c.fillStyle="#e3f4ff";c.fill();});}
  if(e("jetpack")){[-1,1].forEach(function(s){rr(c,s>0?16:-26,54,10,24,4);c.fillStyle="#90a4ae";c.fill();c.fillStyle="#ff9800";c.fillRect(s>0?19:-23,78,4,6);});}
  if(e("manto")){rr(c,-31,50,62,44,16);c.fillStyle="#c62828";c.fill();c.fillStyle="#ffca28";c.fillRect(-27,89,54,3);}
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

  var spk=function(x,y,r,col){c.fillStyle=col||"#fff";c.beginPath();for(var k=0;k<8;k++){var rad=k%2?r*.35:r,an=k*Math.PI/4;c.lineTo(x+Math.sin(an)*rad,y-Math.cos(an)*rad);}c.closePath();c.fill();};
  if(e("fone")){c.strokeStyle="#263238";c.lineWidth=4;c.beginPath();c.arc(0,20,31,Math.PI*1.04,Math.PI*1.96);c.stroke();[-1,1].forEach(function(s2){rr(c,s2>0?26:-36,12,10,18,5);c.fillStyle="#37474f";c.fill();c.fillStyle="#39ff14";c.fillRect(s2>0?29:-33,18,4,4);});}
  if(e("halo")){c.strokeStyle="#ffe97a";c.lineWidth=3;c.shadowColor="#ffd54a";c.shadowBlur=14;c.beginPath();c.ellipse(0,-14,20,5.5,0,0,7);c.stroke();c.shadowBlur=0;}
  if(e("chifres")){[-1,1].forEach(function(s2){pg(c,[[s2*18,2],[s2*20,-14],[s2*8,-2]],"#c62828");});}
  if(e("tapaolho")){c.beginPath();c.ellipse(10,21,9,7,0,0,7);c.fillStyle="#0a0a0a";c.fill();c.strokeStyle="#111";c.lineWidth=2;c.beginPath();c.moveTo(-28,14);c.lineTo(28,8);c.stroke();}
  if(e("monoculo")){c.strokeStyle="#e6c24a";c.lineWidth=2;c.beginPath();c.arc(10,21,9,0,7);c.stroke();c.lineWidth=1;c.beginPath();c.moveTo(18,28);c.lineTo(20,52);c.stroke();}
  if(e("fonepescoco")){c.strokeStyle="#37474f";c.lineWidth=3;c.beginPath();c.arc(0,48,17,.1,Math.PI-.1);c.stroke();}
  if(e("reator")){var rg=c.createRadialGradient(0,66,1,0,66,9);rg.addColorStop(0,"#fff");rg.addColorStop(.5,"#4dd0e1");rg.addColorStop(1,"rgba(77,208,225,0)");c.fillStyle=rg;c.beginPath();c.arc(0,66,10,0,7);c.fill();c.strokeStyle="#b0bec5";c.lineWidth=1.5;c.beginPath();c.arc(0,66,6,0,7);c.stroke();}
  if(e("estrela")){pg(c,[[8,60],[10,64],[14,64],[11,67],[12,71],[8,68.5],[4,71],[5,67],[2,64],[6,64]],"#ffca28");}
  if(e("armadura")){pg(c,[[-14,54],[-10,52],[10,52],[14,54],[12,76],[-12,76]],"#90a4ae");c.fillStyle="#e53935";c.fillRect(-1.5,54,3,22);}
  if(e("martelo")){c.fillStyle="#8d5a2b";c.fillRect(37,64,3,24);rr(c,31,58,16,9,2);c.fillStyle="#b0bec5";c.fill();}
  if(e("espada")){c.shadowColor="#4dd0e1";c.shadowBlur=10;c.fillStyle="#bdf6ff";c.fillRect(38,40,4,30);c.shadowBlur=0;c.fillStyle="#ffb300";c.fillRect(34,70,12,3);c.fillStyle="#455a64";c.fillRect(38,73,4,8);}
  if(e("natal")){pg(c,[[-18,-2],[-6,-26],[16,-12],[20,-2]],"#d32f2f");c.fillStyle="#fff";rr(c,-22,-5,44,7,3.5);c.fill();c.beginPath();c.arc(16,-14,4,0,7);c.fill();}
  if(e("espacial")){c.strokeStyle="rgba(200,235,255,.9)";c.lineWidth=2.5;c.fillStyle="rgba(150,210,255,.15)";c.beginPath();c.ellipse(0,20,35,32,0,0,7);c.fill();c.stroke();}
  if(e("destino")){c.fillStyle="#1f6b36";c.beginPath();c.arc(0,10,31,Math.PI,0);c.fill();rr(c,-34,6,11,40,4);c.fill();rr(c,23,6,11,40,4);c.fill();c.fillStyle="#ffd54a";c.fillRect(-28,4,56,2.5);}
  if(e("oculos3d")){[[-19,"rgba(255,90,90,.85)"],[1,"rgba(90,220,255,.85)"]].forEach(function(a){rr(c,a[0],13,18,12,3);c.fillStyle=a[1];c.fill();c.strokeStyle="#fff";c.lineWidth=1.5;c.stroke();});}
  if(e("corado")){[-1,1].forEach(function(s){var g2=c.createRadialGradient(s*17,32,0,s*17,32,7);g2.addColorStop(0,"rgba(255,100,150,.9)");g2.addColorStop(1,"rgba(255,100,150,0)");c.fillStyle=g2;c.beginPath();c.arc(s*17,32,7,0,7);c.fill();});}
  if(e("corrente")){c.strokeStyle="#ffca28";c.lineWidth=2;c.beginPath();c.arc(0,50,15,.1,Math.PI-.1);c.stroke();c.beginPath();c.arc(0,66,3,0,7);c.fillStyle="#ffb300";c.fill();}
  if(e("joiamente")){c.shadowColor="#ffd54a";c.shadowBlur=12;pg(c,[[0,60],[5,63],[5,69],[0,72],[-5,69],[-5,63]],"#ffca28");c.shadowBlur=0;}
  if(e("cintoutil")){c.fillStyle="#4e342e";c.fillRect(-18,70,36,4);c.fillStyle="#ffca28";c.fillRect(-3,69,6,6);}
  if(e("varinha")){c.strokeStyle="#8d5a2b";c.lineWidth=2.5;c.beginPath();c.moveTo(38,84);c.lineTo(44,58);c.stroke();spk(44,52,8,"#ffd54a");}
  if(e("manopla")){rr(c,-50,56,18,20,5);c.fillStyle="#ffb300";c.fill();["#7b1fa2","#1e88e5","#ffd600","#e53935","#43a047","#ff7043"].forEach(function(col,k){c.beginPath();c.arc(-46+(k%3)*5,60+Math.floor(k/3)*5.5,1.7,0,7);c.fillStyle=col;c.fill();});}
  if(own.coroa||own.asas||own.halo||own.auracosmica||own.destino||own.manopla||own.auradestino){[[-48,-10,5],[50,0,4],[-52,70,4],[54,80,5],[0,-34,4]].forEach(function(q,k){spk(q[0],q[1],q[2],k%2?"#ffe97a":"#fff");});}
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
var BAG='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';
var tab="head",tr=null,spin=0,ask=null,KL="maratona-loja-looks",lk=g(KL,[null,null,null]);if(!Array.isArray(lk))lk=[null,null,null];
function ownN(){return IT.filter(function(x){return own[x.id];}).length;}
function render(){
  var mine=ownN(),tot=IT.length,pc=Math.round(mine/tot*100);
  var h='<div class="lh"><span class="lbag">'+BAG+'</span><h2>Lojinha do robô</h2><span class="lc" id="ljc">🪙 '+coins+'</span><button class="lx" type="button" id="ljx" aria-label="Fechar">✕</button></div>';
  var pcR=1;if(tr&&find(tr.id))pcR=find(tr.id).r||1;else IT.forEach(function(x){if(own[x.id]&&eq[x.slot]===x.id)pcR=Math.max(pcR,x.r||1);});
  var pcc=pcR>1?RAR[pcR][1]:"#39ff14";
  h+='<div class="lstick"><div class="lp" id="ljp" style="--pc:'+pcc+'"><button type="button" class="lspin" data-a="spin" aria-label="Girar o robô">🔄</button></div>';
  h+='<div class="ltry" id="ljt"'+(tr?'':' hidden')+'>'+(tr&&find(tr.id)?'👀 Provando <b>'+find(tr.id).n+'</b> <button type="button" data-a="untry">Tirar</button>':'')+'</div>';
  h+='<div class="ltabs" role="tablist" aria-label="Categorias">';
  SL.forEach(function(sl){h+='<button type="button" role="tab" data-a="tab" data-t="'+sl[0]+'" aria-selected="'+(tab===sl[0])+'" class="'+(tab===sl[0]?"on":"")+'">'+sl[1]+' <i>'+IT.filter(function(x){return x.slot===sl[0]&&own[x.id];}).length+'/'+IT.filter(function(x){return x.slot===sl[0];}).length+'</i></button>';});
  h+='<button type="button" role="tab" data-a="tab" data-t="mine" aria-selected="'+(tab==="mine")+'" class="'+(tab==="mine"?"on":"")+'">Meus <i>'+mine+'</i></button></div></div>';
  h+='<div class="lcol"><div class="lbar"><i style="width:'+pc+'%"></i></div><span>Coleção '+mine+'/'+tot+'</span></div>';
  var mq=missaoHoje(),sq=dia?dia.s:1;
  h+='<div class="lchips"><span class="lch">🔥 Dia '+sq+'</span><span class="lch'+(mq.ok?' ok':'')+'">🎯 '+(mq.ok?'Missão feita':'Quiz hoje '+Math.min(mq.n,META)+'/'+META+' (+'+MPREMIO+' 🪙)')+'</span></div>';
  h+='<details class="lway"'+(wayOpen?' open':'')+'><summary>Como ganhar moedas 🪙</summary><ul><li>🧠 +'+PER+' por resposta certa no quiz</li><li>🎬 +3 por filme marcado como visto</li><li>🏁 +10 a cada 5 filmes vistos</li><li>🏆 +15 por conquista nova</li><li>🎯 +'+MPREMIO+' ao acertar '+META+' no quiz no mesmo dia</li><li>🔥 +5 a +20 por dia ao abrir o app (quanto mais dias seguidos, mais moedas)</li></ul></details>';
  h+='<button type="button" class="lbox'+(coins<BOXP?' off':'')+'" data-a="box"><b>🎁 Caixa surpresa</b><span>🪙 '+BOXP+'</span><small>Um item aleatório que você ainda não tem. Pode vir até Mítico!</small></button>';
  h+='<p class="lhint">Toque no cartão para <b>provar</b> antes de comprar.</p>';
  h+='<div class="llooks" role="group" aria-label="Looks salvos">';[0,1,2].forEach(function(i){h+=lk[i]?'<span class="llk"><button type="button" data-a="lk" data-n="'+i+'">🎭 Look '+(i+1)+'</button><button type="button" class="llx" data-a="lkx" data-n="'+i+'" aria-label="Apagar look '+(i+1)+'">✕</button></span>':'<button type="button" class="llk e" data-a="lk" data-n="'+i+'">💾 Salvar look '+(i+1)+'</button>';});h+='<button type="button" class="llk" data-a="dice">🎲 Sortear look</button></div>';
  var list=(tab==="mine"?IT.filter(function(x){return own[x.id];}):IT.filter(function(x){return x.slot===tab;})).slice();
  list.sort(function(a,b){var ea=eq[a.slot]===a.id?0:own[a.id]?1:2,eb=eq[b.slot]===b.id?0:own[b.id]?1:2;return ea-eb||a.r-b.r||a.p-b.p;});
  if(!list.length)h+='<p class="lemp">Você ainda não comprou nada. Escolha uma categoria acima 🛍️</p>';
  h+='<div class="lgrid">';
  list.forEach(function(it){
    var o=own[it.id],e=eq[it.slot]===it.id,t=tr&&tr.id===it.id,rr=RAR[it.r||1];
    var btn=!o?'<button type="button" data-a="buy" data-i="'+it.id+'" style="--pg:'+Math.min(100,Math.round(coins/it.p*100))+'%" class="'+(coins<it.p?"off":ask===it.id?"cf":"")+'">'+(coins<it.p?'Faltam '+(it.p-coins)+' 🪙':ask===it.id?'Confirmar ✓ 🪙 '+it.p:'Comprar 🪙 '+it.p)+'</button>':'<button type="button" data-a="eq" data-i="'+it.id+'" class="'+(e?"on":"")+'">'+(e?"Tirar":"Equipar")+'</button>';
    h+='<div class="lk r'+(it.r||1)+(e?" eq":"")+(t?" try":"")+'" style="--rc:'+rr[1]+'">'
     +'<button type="button" class="lkh" data-a="try" data-i="'+it.id+'" aria-label="Provar '+it.n+'"><span class="lkr">'+rr[0]+'</span><span class="lki" aria-hidden="true">'+it.i+'</span>'+(e?'<small class="lke">✓ Equipado</small>':o?'<small class="lke b">Comprado</small>':'')+'</button>'
     +'<b class="lkn">'+it.n+(it.g==="f"?' <em>♀</em>':it.g==="m"?' <em>♂</em>':'')+'</b>'+btn+'</div>';});
  h+='</div>';
  h+='<div class="lfoot"><button type="button" class="lbt" data-a="share">📸 Compartilhar meu robô</button><button type="button" class="lbt" data-a="clr">Tirar tudo do robô</button></div>';
  m.innerHTML=h;var pv=document.getElementById("ljp"),d=document.querySelector("body>.dm")||document.querySelector(".dm:not(#ljp .dm)");
  if(d&&pv){prev=d.cloneNode(true);prev.removeAttribute("id");prev.setAttribute("style","");prev.classList.remove("flat","q-on","mood","hop");apply(prev,tr);pv.insertBefore(prev,pv.firstChild);prevDrag(prev);}
  var tb=m.querySelector(".ltabs"),on=tb&&tb.querySelector(".on");if(on)tb.scrollLeft=on.offsetLeft-(tb.clientWidth-on.offsetWidth)/2;
}
/* girar o robô do prévia: arrastar ou botão 🔄 */
var spRaf=0;
function setA(v){if(prev){prev.style.setProperty("--dry",v.toFixed(1)+"deg");}}
function prevDrag(p){var sx=0,a=0,dr=false;
  p.addEventListener("pointerdown",function(e){dr=true;spin=0;sx=e.clientX;try{p.setPointerCapture(e.pointerId);}catch(x){}});
  p.addEventListener("pointermove",function(e){if(!dr)return;a=Math.max(-170,Math.min(170,a+(e.clientX-sx)*1.2));sx=e.clientX;setA(a);});
  var up=function(){dr=false;};p.addEventListener("pointerup",up);p.addEventListener("pointercancel",up);
  p.__a=function(v){a=v;};}
function autoSpin(){cancelAnimationFrame(spRaf);if(!spin||!prev)return;var t0=performance.now();
  (function f(t){if(!spin||!prev||!document.body.contains(prev))return;setA(Math.sin((t-t0)/900)*75);spRaf=requestAnimationFrame(f);})(t0);}
function burst(){var lp=document.getElementById("ljp");if(!lp)return;
  for(var i=0;i<26;i++){var e=document.createElement("i"),an=Math.random()*6.283,r=50+Math.random()*80;e.className="ljcf";
    e.style.cssText="--x:"+Math.round(Math.cos(an)*r)+"px;--y:"+Math.round(Math.sin(an)*r-30)+"px;--c:"+["#ffd54a","#39ff14","#4fc3f7","#ff80ab","#c084fc"][i%5]+";animation-delay:"+(Math.random()*.12).toFixed(2)+"s";lp.appendChild(e);}
  setTimeout(function(){[].forEach.call(lp.querySelectorAll(".ljcf"),function(x){x.remove();});},1200);}
function open(){if(!m)build();render();m.hidden=false;var x=document.getElementById("ljx");x&&x.focus();document.documentElement.style.overflow="hidden";}
function close(){tr=null;spin=0;cancelAnimationFrame(spRaf);if(m)m.hidden=true;document.documentElement.style.overflow="";var b=document.getElementById("hloja");b&&b.focus();}
document.addEventListener("click",function(e){var t=e.target;if(!t.closest)return;
  if(t.closest("#hloja")){open();return;}
  if(!m||m.hidden)return;if(t.closest("#ljx")){close();return;}
  var b=t.closest("button[data-a]");if(!b)return;var a=b.getAttribute("data-a"),it=find(b.getAttribute("data-i"));if(a!=="buy")ask=null;
  if(a==="tab"){tab=b.getAttribute("data-t");render();m.scrollTop=0;return;}
  if(a==="try"&&it){tr=(tr&&tr.id===it.id)?null:{id:it.id,slot:it.slot};var y0=m.scrollTop;render();m.scrollTop=y0;if(spin)autoSpin();return;}
  if(a==="untry"){tr=null;var y1=m.scrollTop;render();m.scrollTop=y1;return;}
  if(a==="spin"){spin=spin?0:1;if(spin)autoSpin();else{cancelAnimationFrame(spRaf);setA(0);}return;}
  if(a==="box"){var w=caixa();if(!w)return;party((w.r>=5?"MÍTICO! 🔥 ":w.r===4?"LENDÁRIO! 👑 ":w.r===3?"ÉPICO! 💜 ":"Olha o que veio! 🎁 ")+"✨");pop("🎁 "+w.i+" "+w.n);applyAll();var y3=m.scrollTop;render();m.scrollTop=y3;lbl();burst();if(spin)autoSpin();return;}
  if(a==="buy"&&it){if(coins<it.p){pop("Faltam "+(it.p-coins)+" 🪙");return;}if(it.p>=150&&ask!==it.id){ask=it.id;var yq=m.scrollTop;render();m.scrollTop=yq;return;}ask=null;coins-=it.p;own[it.id]=1;eq[it.slot]=it.id;tr=null;s(KC,coins);s(KO,own);s(KE,eq);party((it.r>=5?"MÍTICO! 🔥 ":it.r===4?"LENDÁRIO! 👑 ":it.r===3?"ÉPICO! 💜 ":"Ficou demais! ")+"✨");applyAll();var y2=m.scrollTop;render();m.scrollTop=y2;lbl();burst();if(spin)autoSpin();return;}
  else if(a==="eq"&&it){if(eq[it.slot]===it.id)delete eq[it.slot];else eq[it.slot]=it.id;s(KE,eq);}
  else if(a==="lk"){var i2=+b.getAttribute("data-n");if(lk[i2]){var L2=lk[i2];eq={};Object.keys(L2).forEach(function(k){if(own[L2[k]])eq[k]=L2[k];});s(KE,eq);pop("🎭 Look "+(i2+1)+" aplicado");}else{if(!Object.keys(eq).length){pop("Equipe algo antes de salvar 🎩");return;}lk[i2]=Object.assign({},eq);s(KL,lk);pop("💾 Look "+(i2+1)+" salvo");}}
  else if(a==="lkx"){lk[+b.getAttribute("data-n")]=null;s(KL,lk);}
  else if(a==="dice"){var ne={};SL.forEach(function(sl){var ps=IT.filter(function(x){return x.slot===sl[0]&&own[x.id];});if(ps.length&&Math.random()<.65)ne[sl[0]]=ps[Math.floor(Math.random()*ps.length)].id;});eq=ne;s(KE,eq);pop("🎲 Look novo!");}
  else if(a==="clr"){eq={};s(KE,eq);}
  else if(a==="share"){share();return;}
  applyAll();var y=m.scrollTop;render();m.scrollTop=y;lbl();});
document.addEventListener("toggle",function(e){var t=e.target;if(t&&t.classList&&t.classList.contains("lway"))wayOpen=t.open;},true);
document.addEventListener("keydown",function(e){if(!m||m.hidden)return;if(e.key==="Escape"){close();return;}if(e.key!=="Tab")return;var f=[].filter.call(m.querySelectorAll("button,summary"),function(x){return !x.disabled&&x.offsetParent!==null;});if(!f.length)return;var a0=f[0],z=f[f.length-1];if(e.shiftKey&&(document.activeElement===a0||!m.contains(document.activeElement))){e.preventDefault();z.focus();}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a0.focus();}});
/* ---- botão na tela inicial ---- */
function btn(){var go=document.getElementById("hgo");if(!go||document.getElementById("hloja"))return;var b=document.createElement("button");b.type="button";b.id="hloja";go.parentNode.insertBefore(b,go.nextSibling);lbl();}
/* backup/restauração do app inclui a lojinha */
window.__lojaExport=function(){return {c:coins,o:own,e:eq,d:dia,q:miss,k:g(KK,null),l:lk};};
window.__lojaImport=function(o){if(!o)return;coins=+o.c||0;own=o.o||{};eq=o.e||{};if(o.d){dia=o.d;s(KD,dia);}if(o.q){miss=o.q;s(KM,miss);}if(o.k!=null)s(KK,o.k);if(Array.isArray(o.l)){lk=o.l;s(KL,lk);}s(KC,coins);s(KO,own);s(KE,eq);applyAll();lbl();};
function init(){if(!gan){gan={f:keysOf("maratona-marvel"),c:keysOf("maratona-conq")};s(KG,gan);}
  var wel=g("maratona-loja-bonus",null)==null;marco(localStorage.getItem("maratona-marvel")||"{}");missaoHoje();setTimeout(bonusDiario,wel?3400:1800);
  if(wel){s("maratona-loja-bonus",1);coins+=30;s(KC,coins);setTimeout(function(){pop("+30 🪙 de boas-vindas");lbl();},1500);}}
function start(){init();btn();applyAll();setTimeout(applyAll,1500);}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
