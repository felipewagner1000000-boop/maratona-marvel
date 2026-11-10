/* schema-js */
try{
(function(){var APP="10",SCHEMA=1,KEY="maratona-schema",MIG={/* 2:function(){ ...ajustar chaves antigas... } */};window.MARATONA_VERSION=APP;
try{var cur=parseInt(localStorage.getItem(KEY),10)||0;if(cur>SCHEMA)return;
var todo=[],v;for(v=cur+1;v<=SCHEMA;v++)if(MIG[v])todo.push(v);
if(todo.length){var snap={},i,k;for(i=0;i<localStorage.length;i++){k=localStorage.key(i);if(k.indexOf("maratona-")===0&&k!=="maratona-pre-migr")snap[k]=localStorage.getItem(k);}
localStorage.setItem("maratona-pre-migr",JSON.stringify(snap));todo.forEach(function(n){MIG[n]();});}
localStorage.setItem(KEY,String(SCHEMA));}catch(e){}})();
}catch(e){console.error("[schema-js]",e)}
/* inline1 */
try{
function ANIMOFF(){try{return localStorage.getItem("maratona-anim")==="off"}catch(e){return false}}function ECO(){try{var v=localStorage.getItem("maratona-eco");if(v==="1")return true;if(v==="0")return false;}catch(e){}try{var n=navigator,c=n.connection||{};return !!(c.saveData||(n.deviceMemory&&n.deviceMemory<=2)||(n.hardwareConcurrency&&n.hardwareConcurrency<=2));}catch(e){return false;}}window.__eco=ECO();if(ANIMOFF())document.documentElement.classList.add("noanim");if(window.__eco)document.documentElement.classList.add("eco");
}catch(e){console.error("[inline1]",e)}
/* inline2 */
try{

(function(){
var D=[["Homem de Ferro (2008)",126,0,0,"1"],["Homem de Ferro 2 (2010)",124,0,0,"1"],["Thor (2011)",115,0,0,"sim"],["Capitão América: O Primeiro Vingador (2011)",124,0,0,"1"],["Os Vingadores (2012)",143,0,0,"2"],["Homem de Ferro 3 (2013)",130,0,0,"1"],["Thor: O Mundo Sombrio (2013)",112,0,0,"2"],["Capitão América: O Soldado Invernal (2014)",136,0,0,"2"],["Guardiões da Galáxia (2014)",121,0,0,"sim"],["Vingadores: Era de Ultron (2015)",141,0,0,"1"],["Homem-Formiga (2015)",117,0,0,"2"],["Capitão América: Guerra Civil (2016)",147,0,0,"2"],["Doutor Estranho (2016)",115,0,0,"2"],["Guardiões da Galáxia Vol. 2 (2017)",136,0,0,"5"],["Thor: Ragnarok (2017)",130,0,0,"2"],["Pantera Negra (2018)",134,0,0,"2"],["Vingadores: Guerra Infinita (2018)",149,0,0,"1"],["Homem-Formiga e a Vespa (2018)",118,0,0,"2"],["Capitã Marvel (2019)",123,0,0,"2"],["Vingadores: Ultimato (2019)",181,0,0,"não"],["Viúva Negra (2021)",134,0,0,"1"],["Falcão e o Soldado Invernal (série completa)",300,1,1,""],["WandaVision (série completa)",360,1,0,""],["Loki — temporada 1",285,1,0,""],["Shang-Chi e a Lenda dos Dez Anéis (2021)",132,0,0,"2"],["Eternos (2021)",156,0,0,"2"],["Doutor Estranho no Multiverso da Loucura (2022)",126,0,0,"2"],["Thor: Amor e Trovão (2022)",119,0,0,"2"],["Gavião Arqueiro (série completa)",280,1,0,""],["Ms. Marvel (série completa)",235,1,1,""],["Especial de Natal dos Guardiões da Galáxia (2022)",44,0,1,""],["Pantera Negra: Wakanda Para Sempre (2022)",161,0,0,"1"],["Loki — temporada 2",300,1,0,""],["Agatha: Desde Sempre (série completa)",360,1,1,""],["Homem-Formiga e a Vespa: Quantumania (2023)",125,0,0,"2"],["Guardiões da Galáxia Vol. 3 (2023)",150,0,0,"2"],["As Marvels (2023)",105,0,0,"2"],["Deadpool (2016)",108,0,0,"1"],["Deadpool 2 (2018)",119,0,0,"sim"],["Logan (2017)",137,0,0,"não"],["Deadpool & Wolverine (2024)",128,0,0,"sim"],["Capitão América: Admirável Mundo Novo (2025)",118,0,0,"sim"],["Demolidor: Renascido — temporada 1",450,1,1,""],["Thunderbolts* (2025)",127,0,0,"sim"],["Quarteto Fantástico: Primeiros Passos (2025)",115,0,0,"sim"],["X-Men (2000)",104,0,0,"não"],["X-Men 2 (2003)",134,0,0,"não"],["X-Men: O Confronto Final (2006)",104,0,1,"1"]];
var T=D.map(function(d){return d[0];}),M=D.map(function(d){return d[1];}),SE=D.map(function(d){return d[2];}),REC=D.map(function(d){return d[3];}),PC=D.map(function(d){return d[4]||"";});window.mrT=T;window.mrM=M;
var OLD43=["Homem de Ferro (2008)","O Incrível Hulk (2008)","Homem de Ferro 2 (2010)","Thor (2011)","Capitão América: O Primeiro Vingador (2011)","Os Vingadores (2012)","Homem de Ferro 3 (2013)","Thor: O Mundo Sombrio (2013)","Capitão América: O Soldado Invernal (2014)","Guardiões da Galáxia (2014)","Vingadores: Era de Ultron (2015)","Homem-Formiga (2015)","Capitão América: Guerra Civil (2016)","Doutor Estranho (2016)","Guardiões da Galáxia Vol. 2 (2017)","Homem-Aranha: De Volta ao Lar (2017)","Thor: Ragnarok (2017)","Pantera Negra (2018)","Vingadores: Guerra Infinita (2018)","Homem-Formiga e a Vespa (2018)","Capitã Marvel (2019)","Vingadores: Ultimato (2019)","Homem-Aranha: Longe de Casa (2019)","WandaVision (série completa)","Loki — temporada 1","Homem-Aranha: Sem Volta para Casa (2021)","Shang-Chi e a Lenda dos Dez Anéis (2021)","Eternos (2021)","Doutor Estranho no Multiverso da Loucura (2022)","Gavião Arqueiro (série completa)","Pantera Negra: Wakanda Para Sempre (2022)","Loki — temporada 2","Homem-Formiga e a Vespa: Quantumania (2023)","As Marvels (2023)","Deadpool (2016)","Deadpool 2 (2018)","Logan (2017)","Deadpool & Wolverine (2024)","Capitão América: Admirável Mundo Novo (2025)","Thunderbolts* (2025)","Quarteto Fantástico: Primeiros Passos (2025)","X-Men (2000)","X-Men 2 (2003)"];
function toIdx(o){var r={},k,i;for(k in o){if(!o[k])continue;i=/^\d+$/.test(k)?T.indexOf(OLD43[+k]):T.indexOf(k);if(i>-1)r[i]=o[k];}return r;}
function toKey(o){var r={},i;for(i in o)if(o[i])r[T[i]]=o[i];return r;}
function fm(m){var h=Math.floor(m/60),r=m%60;return (h?h+"h":"")+(r?(h?" ":"")+(r<10&&h?"0":"")+r+"min":"");}
function fmt(i){return (SE[i]?"📺 ≈ ":"")+fm(M[i]);}
function pl(i){return !ESS||PATH.indexOf(i)>-1;}
function mins(w){var s=0;for(var i=0;i<T.length;i++)if(!!seen[i]===w&&pl(i))s+=M[i];return s;}
function leftN(){var c=0;for(var i=0;i<T.length;i++)if(!seen[i]&&pl(i))c++;return c;}
var KEY="maratona-marvel",seen={};
var MIS={d:"",base:0,done:[],mx:0},RK=-1,ATK=0;try{MIS=JSON.parse(localStorage.getItem("maratona-missoes")||"")||MIS;}catch(e){}
var RANKS=[[0,"Recruta","🪖"],[400,"Agente","🕶️"],[1200,"Vingador","🛡️"],[2500,"Defensor","⚡"],[4000,"Herói Supremo","🦸"],[6000,"Mestre do Multiverso","🌀"]];
var MD=[{id:"m1",t:"Ver 1 título",g:1,k:"dn"},{id:"m2",t:"Acertar 3 no quiz",g:3,k:"qd"},{id:"m3",t:"Ver 2 títulos",g:2,k:"dn"}];
function saveMis(){try{localStorage.setItem("maratona-missoes",JSON.stringify(MIS));}catch(e){}}
function xpNow(){var c=0,k;for(k in ach)if(ach[k])c++;return total()*100+QZ*20+c*30+(MIS.mx|0);}
function rkIdx(x){var r=0;RANKS.forEach(function(p,i){if(x>=p[0])r=i;});return r;}
function toastX(m){var t=$("toast");t.textContent=m;t.className="show";clearTimeout(tt);tt=setTimeout(function(){t.className="";},3200);sfxAch();buzz([60,40,60]);celebrate(true);}
function misCheck(){var h=hoje(),dn=0,k,c;if(MIS.d!==h){MIS.d=h;MIS.base=QZ;MIS.done=[];saveMis();}
for(k in dts)if(dts[k]===h)dn++;c={dn:dn,qd:QZ-MIS.base};
MD.forEach(function(m){if(MIS.done.indexOf(m.id)<0&&c[m.k]>=m.g){MIS.done.push(m.id);MIS.mx=(MIS.mx|0)+50;saveMis();if(ready)toastX("🎯 Missão cumprida: "+m.t+" (+50 XP)");}});return c;}
function rankCheck(){var i=rkIdx(xpNow());if(RK>=0&&i>RK&&ready)toastX("🎖️ Nova patente: "+RANKS[i][1]+"!");RK=i;}
var PREM=new Date(2026,11,17,0,0,0),PREM_TXT="17/12/2026",ESS=false;try{ESS=localStorage.getItem("maratona-ess")==="1";}catch(e){}
$("hmsg").textContent="Estreia em "+PREM_TXT+" nos cinemas do Brasil";
try{seen=toIdx(JSON.parse(localStorage.getItem(KEY)||"{}")||{});}catch(e){seen={};}
var FCOL={};try{FCOL=JSON.parse(localStorage.getItem("maratona-fases-abertas")||"{}")||{};}catch(e){FCOL={};}
var fav={},nts={},dts={},rate={},ach={},els=[],gEls=[],FL="all",QS="",PD=0,ready=false,tt=0;
try{rate=toIdx(JSON.parse(localStorage.getItem("maratona-notas")||"{}")||{});}catch(e){rate={};}
try{ach=JSON.parse(localStorage.getItem("maratona-conq")||"{}")||{};}catch(e){ach={};}
function ld(k){try{return JSON.parse(localStorage.getItem(k)||"{}")||{};}catch(e){return {};}}
fav=ld("maratona-fav");nts=ld("maratona-notas-txt");dts=ld("maratona-datas");
function saveX(){try{localStorage.setItem("maratona-fav",JSON.stringify(fav));localStorage.setItem("maratona-notas-txt",JSON.stringify(nts));localStorage.setItem("maratona-datas",JSON.stringify(dts));}catch(e){}}
function hoje(){var d=new Date();return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
function streak(){var d={},k,ks,prev=-9,run=0,best=0,t,a,td;for(k in dts)if(dts[k])d[dts[k]]=1;ks=Object.keys(d).sort();ks.forEach(function(x){a=x.split("-");t=Date.UTC(+a[0],+a[1]-1,+a[2])/864e5;run=(t-prev===1)?run+1:1;if(run>best)best=run;prev=t;});a=hoje().split("-");td=Date.UTC(+a[0],+a[1]-1,+a[2])/864e5;return {cur:(ks.length&&td-prev<=1)?run:0,best:best};}
function dbr(v){var a=String(v).split("-");return a.length===3?a[2]+"/"+a[1]+"/"+a[0]:"";}
function saveR(){try{localStorage.setItem("maratona-notas",JSON.stringify(toKey(rate)));}catch(e){}}
function saveA(){try{localStorage.setItem("maratona-conq",JSON.stringify(ach));}catch(e){}}
var G=[{n:"Saga do Infinito",a:0,b:19},{n:"Saga do Multiverso",a:20,b:36},{n:"Deadpool e Wolverine",a:37,b:40},{n:"Fase recente",a:41,b:44},{n:"X-Men clássicos",a:45,b:47}];window.mrG=G;
function $(id){return document.getElementById(id);}
var ul=$("list"),cnt=$("cnt"),pb=$("pb"),rs=$("rs"),rsTimer=0;
var WNOW="",WKEY="maratona-assistindo";try{WNOW=localStorage.getItem(WKEY)||"";}catch(e){}
function nowIdx(){var i;if(!WNOW)return -1;i=T.indexOf(WNOW);return i>-1&&!seen[i]?i:-1;}window.mrNowIdx=nowIdx;
function setNow(i){WNOW=i<0?"":T[i];try{if(WNOW)localStorage.setItem(WKEY,WNOW);else localStorage.removeItem(WKEY);}catch(e){}paintNow();stats();}
function goNow(){var c=$("cont");if(c)c.click();}
function paintMini(){var m=$("mpb"),n=total(),p=Math.round(n/T.length*100),w=nowIdx();if(!m)return;m.querySelector("span").textContent=n+" de "+T.length+" · "+p+"%"+(w>-1?"  ·  ▶ "+T[w]:"");m.querySelector("i").style.width=p+"%";}
(function(){var tp=document.querySelector(".top"),m=$("mpb");if(!tp||!m||!window.MutationObserver)return;function sync(){m.hidden=!tp.classList.contains("hid");}new MutationObserver(sync).observe(tp,{attributes:true,attributeFilter:["class"]});sync();})();
function paintNow(){var w=nowIdx(),i,nb=$("nowbar");paintMini();
for(i=0;i<els.length;i++){if(!els[i])continue;var on=i===w,b=els[i].li.querySelector(".wn");els[i].li.classList.toggle("now",on);if(b){b.classList.toggle("on",on);b.textContent=on?"▶ Assistindo agora":"▶ Estou assistindo";b.setAttribute("aria-pressed",on?"true":"false");}}
if(nb){if(w<0)nb.hidden=true;else{nb.hidden=false;nb.innerHTML="<span>▶ Assistindo agora</span><b></b>";nb.querySelector("b").textContent=T[w];}}}
document.addEventListener("click",function(e){var n=e.target.closest&&e.target.closest("#nowbar");if(n)goNow();});
function save(){try{localStorage.setItem(KEY,JSON.stringify(toKey(seen)));}catch(e){}try{undoHook();}catch(e){}try{if(window.mkHop)window.mkHop();}catch(e){}try{var sv=document.getElementById("svd");if(sv){sv.classList.add("on");clearTimeout(sv._t);sv._t=setTimeout(function(){sv.classList.remove("on");},1400);}}catch(e){}}

var UND={snap:null,busy:false,t:0};
function undoSnap(){var d={},k;for(k in dts)d[k]=dts[k];return {s:toKey(seen),r:toKey(rate),d:d};}
function undoHook(){var cur=undoSnap(),pv=UND.snap,a,k,ch=0,nm="",on=0;UND.snap=cur;window.MR_EV=null;if(!pv||UND.busy||!ready)return;
for(k in cur.s)if(!pv.s[k]){ch++;on=1;nm=k;}for(k in pv.s)if(!cur.s[k]){ch++;on=-1;nm=k;}
if(!ch)return;window.MR_EV={on:on,nm:nm,ch:ch,n:Object.keys(cur.s).length,tot:T.length};var el=document.getElementById("undo");
if(!el){el=document.createElement("div");el.id="undo";el.setAttribute("role","status");el.innerHTML='<span></span><button type="button">Desfazer</button>';document.body.appendChild(el);
var st=document.createElement("style");st.textContent="#undo{position:fixed;left:50%;bottom:calc(76px + env(safe-area-inset-bottom,0px));transform:translate(-50%,30px);opacity:0;pointer-events:none;display:flex;align-items:center;gap:10px;max-width:92vw;background:var(--card);color:var(--ink);border:1px solid var(--ac);border-radius:14px;padding:8px 8px 8px 14px;z-index:91;font-size:.85rem;transition:.25s}#undo.show{transform:translate(-50%,0);opacity:1;pointer-events:auto}#undo span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}#undo button{flex:none;min-height:36px;padding:0 14px;border-radius:10px;border:0;background:var(--ac);color:var(--ak);font:inherit;font-weight:700}";document.head.appendChild(st);
el.querySelector("button").onclick=function(){var q=UND.prev;if(!q)return;UND.busy=true;clearTimeout(UND.t);el.classList.remove("show");
seen=toIdx(q.s);rate=toIdx(q.r);dts=q.d;if(WNOW&&seen[T.indexOf(WNOW)]){}save();saveR();saveX();UND.snap=undoSnap();UND.prev=null;
try{build();}catch(e){}try{paintNow();}catch(e){}try{renderHome();}catch(e){}try{renderForecast();}catch(e){}UND.busy=false;};}
UND.prev=pv;el.firstChild.textContent=(ch>1?ch+" títulos "+(on>0?"marcados":"desmarcados"):(on>0?"Visto: ":"Desmarcado: ")+nm);
el.classList.add("show");clearTimeout(UND.t);UND.t=setTimeout(function(){el.classList.remove("show");UND.prev=null;},6000);}
UND.snap=undoSnap();
function total(){var n=0;for(var k in seen)if(seen[k])n++;return n;}
function mission(n){
var md=$("mdays"),mp=$("mpace"),left=leftN(),now=new Date();
var days=Math.round((PREM-new Date(now.getFullYear(),now.getMonth(),now.getDate()))/864e5);
$("again").hidden=left!==0;
if(left===0){md.textContent=ESS?"Essencial concluído! 🎉":"Missão cumprida! 🎉";mp.textContent="Você está pronto para a estreia em "+PREM_TXT+".";return;}
if(days<=0){md.textContent="Já estreou!";mp.textContent="Faltam "+left+" títulos para zerar a lista.";return;}
md.textContent="Faltam "+days+(days===1?" dia":" dias");
var pace=Math.round(left/Math.max(days/7,1)*10)/10;
mp.textContent="Estreia em "+PREM_TXT+" · "+(ESS?"só o essencial · ":"")+"faltam "+left+" títulos · "+String(pace).replace(".",",")+" por semana";
}
function count(){var n=total();cnt.innerHTML="<b>"+n+"</b> de "+T.length+" assistidos · "+Math.round(n/T.length*100)+"%";paintMini();pb.style.width=(n/T.length*100)+"%";mission(n);stats();return n;}
function build(){
ul.innerHTML="";els=[];gEls=[];
var VG=viewGroups();VG.forEach(function(g,gi){
var h=document.createElement("li");h.className="gh"+(VG.length>1?" mg":"");h.innerHTML='<span class="gn"></span><button type="button" class="gm">marcar todos</button><span class="gc"></span>';h.firstChild.textContent=g.n;(function(g,btn){var tm=0;btn.onclick=function(){var all=g.items.every(function(i){return seen[i];});if(!tm){btn.textContent=all?"desmarcar? toque de novo":"marcar todos? toque de novo";tm=setTimeout(function(){tm=0;btn.textContent="marcar todos";},3000);return;}clearTimeout(tm);tm=0;g.items.forEach(function(i){if(all){delete seen[i];delete rate[i];delete dts[T[i]];}else{if(!seen[i])dts[T[i]]=hoje();seen[i]=true;}});save();saveR();saveX();build();tst(all?"Saga desmarcada":"Saga marcada como vista");};})(g,h.querySelector(".gm"));
ul.appendChild(h);gEls.push({li:h,c:h.lastChild,items:[],n:g.n,raw:false});
if(VG.length>1){var gn=h.firstChild;gn.setAttribute("role","button");gn.tabIndex=0;gn.setAttribute("aria-expanded","true");
(function(gi,g){function tg(){FCOL[g.n]=!gEls[gi].raw;try{localStorage.setItem("maratona-fases-abertas",JSON.stringify(FCOL));}catch(e){}apply();}
h.addEventListener("click",function(e){if(e.target.closest&&e.target.closest(".gm"))return;tg();});
gn.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();tg();}});})(gi,g);}
g.items.forEach(function(i){
var li=document.createElement("li"),b=document.createElement("button");
b.type="button";b.className="row";b.setAttribute("aria-pressed",seen[i]?"true":"false");
b.innerHTML='<span class="box">✓</span><span class="n">'+(ORD==="cron"?g.items.indexOf(i)+1:i+1)+'</span><span class="pw"><img class="pos" alt="" width="40" height="54" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" data-pi="1"></span><span class="t"></span>'+(REC[i]?'<span class="rec">sugestão</span>':'')+'<span class="dur"></span>';
b.querySelector(".t").textContent=T[i];b.querySelector(".dur").textContent=fmt(i);
if(seen[i])li.className="done";
b.addEventListener("click",function(){
seen[i]=!seen[i];if(!seen[i])delete rate[i];if(seen[i]){if(!dts[T[i]])dts[T[i]]=hoje();}else delete dts[T[i]];saveX();if(typeof li.upd==="function")li.upd();
li.className=seen[i]?"done":"";b.setAttribute("aria-pressed",seen[i]?"true":"false");
save();saveR();paintStars(li,i);sfxTick(seen[i]);
if(seen[i]&&WNOW===T[i]){WNOW="";try{localStorage.removeItem(WKEY);}catch(e){}}
var n=count();paintNow();apply();
if(n===T.length&&seen[i]){celebrate();setTimeout(showSum,5500);}
});
li.appendChild(b);
var mt=document.createElement("div");mt.className="meta";
mt.innerHTML='<span class="tg">'+(PC[i]?'<span class="pc">🎞️ '+pcLabel(PC[i])+'</span>':'')+(PATH.indexOf(i)>-1?'<span class="way">🛤️ caminho</span>':'')+(ORD==="cron"?'<span class="lr" title="Ordem de lançamento">🎬 lanç. nº '+(i+1)+'</span>':'')+'<button type="button" class="wn" aria-pressed="false">▶ Estou assistindo</button></span><button type="button" class="fv" aria-label="Favoritar">❤️</button><button type="button" class="ib" aria-label="Resumo">ℹ️</button><button type="button" class="ob" aria-label="Já tinha visto antes" title="Já tinha visto antes">🕘</button>';
li.appendChild(mt);var rc=document.createElement("p");rc.className="rc";rc.hidden=true;rc.textContent=RC[i];li.appendChild(rc);
var nt=document.createElement("div");nt.className="nt";nt.hidden=true;nt.innerHTML='<small></small><textarea maxlength="400" placeholder="Minha anotação sobre este título..." aria-label="Minha anotação"></textarea>';li.appendChild(nt);
var ntd=nt.querySelector("small"),nta=nt.querySelector("textarea");nta.value=nts[T[i]]||"";
li.upd=function(){ntd.textContent=seen[i]&&dts[T[i]]?"Visto em "+dbr(dts[T[i]]):"";ntd.hidden=!ntd.textContent;};li.upd();
nta.addEventListener("input",function(){if(nta.value.trim())nts[T[i]]=nta.value;else delete nts[T[i]];saveX();});
var wb=mt.querySelector(".wn");wb.onclick=function(){if(nowIdx()===i){setNow(-1);sfxTick(false);tst("Tirado de \"assistindo agora\"");}else{setNow(i);sfxTick(true);tst("Marcado: assistindo agora ▶");}};
var fb=mt.querySelector(".fv");fb.className="fv"+(fav[T[i]]?" on":"");fb.setAttribute("aria-pressed",fav[T[i]]?"true":"false");
fb.onclick=function(){if(fav[T[i]])delete fav[T[i]];else fav[T[i]]=1;saveX();fb.className="fv"+(fav[T[i]]?" on":"");fb.setAttribute("aria-pressed",fav[T[i]]?"true":"false");sfxTick(!!fav[T[i]]);if(FL==="fav")apply();};
mt.querySelector(".ib").onclick=function(){rc.hidden=!rc.hidden;nt.hidden=rc.hidden;};
var ob=mt.querySelector(".ob");function obP(){ob.className="ib ob"+(OLDS[T[i]]?" on":"");ob.setAttribute("aria-pressed",OLDS[T[i]]?"true":"false");}obP();
ob.onclick=function(){if(OLDS[T[i]])delete OLDS[T[i]];else OLDS[T[i]]=1;saveOld();obP();sfxTick(!!OLDS[T[i]]);stats();tst(OLDS[T[i]]?"Já via antes: fora do cálculo de ritmo":"Voltou para o cálculo de ritmo");};
var st=document.createElement("div");st.className="stars";
for(var k=1;k<=5;k++)(function(k){var sb=document.createElement("button");sb.type="button";sb.textContent="★";sb.setAttribute("aria-label","Nota "+k);sb.addEventListener("click",function(){rate[i]=rate[i]===k?0:k;saveR();paintStars(li,i);sfxTick(true);stats();});st.appendChild(sb);})(k);
li.appendChild(st);ul.appendChild(li);
els[i]={li:li};gEls[gi].items.push(i);paintStars(li,i);
});
});
count();paintNow();apply();
}
function paintStars(li,i){var st=li.lastChild,bs=st.children;st.hidden=!seen[i];for(var k=0;k<5;k++)bs[k].className=(rate[i]>k)?"on":"";}
function doReset(){
try{var sn={};for(var k=0;k<localStorage.length;k++){var kk=localStorage.key(k);if(kk.indexOf("maratona-")===0&&kk!=="maratona-undo")sn[kk]=localStorage.getItem(kk);}localStorage.setItem("maratona-undo",JSON.stringify(sn));}catch(e){}
seen={};rate={};dts={};OLDS={};saveOld();
try{save();}catch(e){}try{saveR();}catch(e){}try{saveX();}catch(e){}
try{build();}catch(e){}
try{if(window.showUndo)window.showUndo();}catch(e){}
tst("Progresso limpo. Dá para desfazer em Ferramentas > Backup");
}
function rsDialog(){
var old=document.getElementById("rsdlg");if(old)old.remove();
var o=document.createElement("div");o.id="rsdlg";o.setAttribute("role","alertdialog");o.setAttribute("aria-modal","true");
o.innerHTML='<div class="rsb"><div class="rsi">🗑️</div><h3>Limpar todo o progresso?</h3><p>Isso apaga seus <b>vistos, notas e datas</b>. Uma cópia fica guardada e você pode desfazer depois.</p><div class="rsa"><button type="button" class="rsn">Cancelar</button><button type="button" class="rsy">Apagar tudo</button></div></div>';
document.body.appendChild(o);
function close(){o.remove();document.removeEventListener("keydown",kd);}
function kd(e){if(e.key==="Escape")close();}
document.addEventListener("keydown",kd);
o.addEventListener("click",function(e){if(e.target===o)close();});
o.querySelector(".rsn").onclick=function(){close();tst("Nada foi apagado");};
o.querySelector(".rsy").onclick=function(){close();doReset();};
o.querySelector(".rsn").focus();
}
rs.addEventListener("click",function(){
if(!total()){tst("Você ainda não marcou nada");return;}
rsDialog();
});
/* Confete e fogos de artifício */
var fx=$("fx"),cx=fx.getContext("2d"),parts=[],raf=0,endAt=0,nextShot=0;
var COL=["#2fd36b","#7bf0a3","#c9ff9e","#1f9d51","#e6f2e8","#f2e8a0"];
function size(){var r=window.devicePixelRatio||1;fx.width=innerWidth*r;fx.height=innerHeight*r;cx.setTransform(r,0,0,r,0,0);}
function burst(x,y){
var c=COL[Math.floor(Math.random()*COL.length)];
for(var i=0;i<50;i++){var a=Math.PI*2*i/50,s=2+Math.random()*3.5;parts.push({k:"f",x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,c:c});}
}
function confetti(c){
for(var i=0;i<(c||150);i++)parts.push({k:"c",x:Math.random()*innerWidth,y:-20-Math.random()*innerHeight*.5,vx:(Math.random()-.5)*2,vy:2+Math.random()*3,r:Math.random()*6,vr:(Math.random()-.5)*.3,life:1,c:COL[i%COL.length]});
}
function frame(now){
cx.clearRect(0,0,innerWidth,innerHeight);
if(now<endAt&&now>nextShot){burst(innerWidth*(.15+Math.random()*.7),innerHeight*(.12+Math.random()*.35));nextShot=now+450;}
for(var i=parts.length-1;i>=0;i--){
var p=parts[i];
if(p.k==="f"){p.x+=p.vx;p.y+=p.vy;p.vy+=.05;p.vx*=.985;p.life-=.012;cx.globalAlpha=Math.max(p.life,0);cx.fillStyle=p.c;cx.fillRect(p.x,p.y,3,3);}
else{p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;cx.globalAlpha=1;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.fillRect(-4,-2,8,4);cx.restore();}
if(p.life<=0||p.y>innerHeight+30)parts.splice(i,1);
}
cx.globalAlpha=1;
if(parts.length||now<endAt){raf=requestAnimationFrame(frame);}
else{cx.clearRect(0,0,innerWidth,innerHeight);fx.style.display="none";raf=0;}
}
function celebrate(small){
if(ANIMOFF())return; if(!small&&window.__portal)window.__portal();
size();fx.style.display="block";confetti(small?60:150);
var n=performance.now();endAt=n+(small?0:5000);nextShot=n;
if(!raf)raf=requestAnimationFrame(frame);
}
$("again").addEventListener("click",function(){celebrate();});
window.addEventListener("resize",function(){if(raf)size();});
/* Som, conquistas, filtros */
var AC=null,SOM=true;try{SOM=localStorage.getItem("maratona-som")!=="0";}catch(e){}
var VIB=true;try{VIB=localStorage.getItem("maratona-vib")!=="0";}catch(e){}
function buzz(p){try{if(VIB&&navigator.vibrate)return !!navigator.vibrate(p);}catch(e){}return false;}
function actx(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}}if(AC&&AC.state!=="running"){try{AC.resume();}catch(e){}}return AC;}
/* destrava o audio no primeiro toque (celular bloqueia som antes do 1o gesto) e ao voltar para o app */
(function(){var ev=["pointerup","touchend","click","keydown"];function un(){var a=actx();if(!a)return;try{var b=a.createBuffer(1,1,22050),s=a.createBufferSource();s.buffer=b;s.connect(a.destination);s.start(0);}catch(e){}if(a.state==="running")ev.forEach(function(e){document.removeEventListener(e,un,true);});}
ev.forEach(function(e){document.addEventListener(e,un,true);});document.addEventListener("visibilitychange",function(){if(!document.hidden&&AC&&AC.state!=="running"){try{AC.resume();}catch(e){}}});})();
function tone(f,d,ty,v,dl,f2){var a=actx();if(!a||!SOM)return;var o=a.createOscillator(),g=a.createGain(),t=a.currentTime+(dl||0);o.type=ty||"square";o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(v||.08,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d);}
function thunder(){var a=actx();if(!a||!SOM)return;var n=Math.floor(a.sampleRate*1.2),b=a.createBuffer(1,n,a.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2);var s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=b;f.type="lowpass";f.frequency.value=420;g.gain.value=.9;s.connect(f);f.connect(g);g.connect(a.destination);s.start();tone(70,.5,"sine",.25,0,35);}
function sfxTick(on){tone(on?660:440,.09,"square",.06,0,on?990:300);}
function sfxAch(){[523,659,784,1047].forEach(function(f,i){tone(f,.14,"triangle",.09,i*.09);});}
var sm=$("sm");var sfab=$("sfab");function smLabel(){sm.textContent=SOM?"🔊 Som":"🔇 Mudo";if(sfab){sfab.classList.toggle("off",!SOM);sfab.setAttribute("aria-pressed",SOM?"true":"false");sfab.title=SOM?"Efeitos sonoros: ligados":"Efeitos sonoros: desligados";}}if(sfab)sfab.addEventListener("click",function(){sm.click();});smLabel();
var vo=$("vo");function voLabel(){vo.textContent=VIB?"📳 Vibração: ligada":"📴 Vibração: desligada";}voLabel();
vo.addEventListener("click",function(){VIB=!VIB;try{localStorage.setItem("maratona-vib",VIB?"1":"0");}catch(e){}voLabel();$("vs").textContent="";if(VIB)buzz(80);});
sm.addEventListener("click",function(){SOM=!SOM;try{localStorage.setItem("maratona-som",SOM?"1":"0");}catch(e){}smLabel();if(SOM)tone(660,.1,"square",.06);});
var AL=[
{id:"n_meta",e:"🎯",n:"Meta semanal cumprida",ok:function(c){try{return window.mrMetaOk();}catch(e){return false;}}},
{id:"n_pos",e:"🎞️",n:"10 cenas pós-créditos",ok:function(c){try{return window.mrPosN()>=10;}catch(e){return false;}}},
{id:"s_sem",e:"🔥",n:"5 títulos em 7 dias",ok:function(c){try{return window.mrSemN()>=5;}catch(e){return false;}}},
{id:"q_saga",e:"🗺️",n:"70% de acertos em 3 sagas",ok:function(c){try{return window.mrQSOk();}catch(e){return false;}}},
{id:"a1",e:"🎬",n:"Primeiro filme",ok:function(c){return c.n>=1;}},
{id:"a2",e:"🍿",n:"10 títulos",ok:function(c){return c.n>=10;}},
{id:"a3",e:"⚡",n:"Metade da lista",ok:function(c){return c.n>=Math.ceil(T.length/2);}},
{id:"a4",e:"💎",n:"Saga do Infinito",ok:function(c){return c.g[0];}},
{id:"a5",e:"🌀",n:"Saga do Multiverso",ok:function(c){return c.g[1];}},
{id:"a6",e:"⭐",n:"Crítico: 5 notas",ok:function(c){return c.r>=5;}},
{id:"a7",e:"🧬",n:"Mutantes",ok:function(c){return c.g[2]&&c.g[4];}},
{id:"a9",e:"🧠",n:"Quiz: 5 acertos",ok:function(c){return c.q>=5;}},
{id:"a10",e:"🏆",n:"Gênio: 15 acertos",ok:function(c){return c.q>=15;}},
{id:"a12",e:"🎯",n:"Estrategista: 25 acertos",ok:function(c){return c.q>=25;}},
{id:"a13",e:"🌌",n:"Mestre do Multiverso: 30 acertos",ok:function(c){return c.q>=30;}},
{id:"a11",e:"🛤️",n:"Caminho essencial",ok:function(c){return c.p;}},
{id:"a8",e:"👑",n:"Missão cumprida",ok:function(c){return c.n>=T.length;}},
{id:"s3",e:"🔥",n:"3 dias seguidos",ok:function(c){return c.s>=3;}},
{id:"s7",e:"📆",n:"7 dias seguidos",ok:function(c){return c.s>=7;}},
{id:"s14",e:"🌋",n:"14 dias seguidos",ok:function(c){return c.s>=14;}},
{id:"p25",e:"🚀",n:"25% da lista",ok:function(c){return c.n>=Math.ceil(T.length*.25);}},
{id:"p75",e:"🏁",n:"75% da lista",ok:function(c){return c.n>=Math.ceil(T.length*.75);}}
];
[[35,"🔥","Veterano"],[40,"🛡️","Escudo de Vibranium"],[45,"🕷️","Sentido Aranha"],[50,"🥇","Meio Cento"],[55,"⚡","Trovão"],[60,"🧪","Super-Soldado"],[65,"🦾","Armadura Nano"],[70,"🔮","Olho de Agamotto"],[75,"🪐","Guardião da Galáxia"],[80,"🧤","Manopla do Infinito"],[85,"🌠","Cósmico"],[90,"🛸","Celestial"],[95,"💠","Joia da Mente"],[100,"💯","Centenário"],[150,"🏹","Lenda"],[200,"🌟","Imortal"],[250,"🦸","Herói Supremo"],[300,"🌀","Senhor do Multiverso"],[350,"👁️","Onisciente"]].forEach(function(p){AL.push({id:"q"+p[0],e:p[1],n:p[2]+": "+p[0]+" acertos",ok:function(c){return c.q>=p[0];}});});
function unlock(a){
var t=$("toast");t.textContent="🏅 Conquista: "+a.n;t.className="show";clearTimeout(tt);tt=setTimeout(function(){t.className="";},3200);
sfxAch();buzz([60,40,60]);celebrate(true);
}
function achCat(a){var d=a.id.charAt(0);if(d==="q"||a.id==="a9"||a.id==="a10"||a.id==="a12"||a.id==="a13")return 1;if(d==="s")return 2;return 0;}
var ACN=["🎬 Progresso e sagas","🧠 Quiz","🔥 Sequência"];
function renderAch(){var c=0,gs=[[],[],[]],h="",k;AL.forEach(function(a){var on=ach[a.id];if(on)c++;gs[achCat(a)].push('<span class="bd'+(on?" on":"")+'"><i>'+a.e+'</i><small>'+a.n+'</small></span>');});
for(k=0;k<3;k++){var tot=gs[k].length,dn=gs[k].filter(function(x){return x.indexOf('bd on')>-1;}).length;h+='<div class="agh"><span>'+ACN[k]+'</span><small>'+dn+'/'+tot+'</small></div><div class="agrid">'+gs[k].join("")+'</div>';}
$("al").innerHTML=h;$("ac").textContent=c+"/"+AL.length;}
function stats(){
var c={n:total(),g:[],r:0,s:streak().best,q:QZ,p:PATH.every(function(i){return seen[i];})},k;
for(k in rate)if(rate[k]>0)c.r++;
PD=0;
G.forEach(function(g,gi){var d=0,t=g.b-g.a+1;for(var j=g.a;j<=g.b;j++)if(seen[j])d++;c.g[gi]=d===t;if(d===t)PD++;});gEls.forEach(function(g){var d=0;g.items.forEach(function(i){if(seen[i])d++;});var rm=0;g.items.forEach(function(i){if(!seen[i])rm+=M[i]||0;});g.li.style.setProperty("--p",(g.items.length?Math.round(d/g.items.length*100):0)+"%");g.c.textContent=d+"/"+g.items.length+(d===g.items.length?" ✓":(rm?" · faltam "+fm(rm):""));});
$("tm").textContent="⏱️ Assistido: "+(fm(mins(true))||"0min")+" · Falta: "+(fm(mins(false))||"0min")+" · Total ≈ "+fm(mins(true)+mins(false));var sk=streak();$("tm").textContent+=sk.cur>0?" · 🔥 "+sk.cur+(sk.cur===1?" dia seguido":" dias seguidos"):"";
AL.forEach(function(a){if(!ach[a.id]&&a.ok(c)){ach[a.id]=Date.now();saveA();if(ready)unlock(a);}});
renderAch();misCheck();rankCheck();renderNext();renderPlan();renderSession();renderHome();renderForecast();renderPre();
}
function norm(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();}
var FASE=-1;
function apply(){var forced=!!QS||FL!=="all"||FASE>=0,def=-1;
gEls.forEach(function(g,gi){if(def<0&&g.items.some(function(i){return !seen[i];}))def=gi;});if(def<0)def=0;
gEls.forEach(function(g,gi){var any=false,raw=gEls.length>1&&(g.n in FCOL?!!FCOL[g.n]:gi!==def),col=raw&&!forced;g.raw=raw;
g.items.forEach(function(i){var ok=(!QS||norm(T[i]).indexOf(QS)>-1)&&(FL==="all"||(FL==="todo"&&!seen[i])||(FL==="done"&&seen[i])||(FL==="path"&&PATH.indexOf(i)>-1)||(FL==="fav"&&fav[T[i]]))&&(FASE<0||(i>=G[FASE].a&&i<=G[FASE].b));els[i].li.hidden=!ok||col;if(ok)any=true;});
g.li.hidden=!any;g.li.classList.toggle("col",col);if(g.li.firstChild.setAttribute)g.li.firstChild.setAttribute("aria-expanded",col?"false":"true");});}
window.mrOpen=function(li){gEls.forEach(function(g){if(g.items.some(function(i){return els[i]&&els[i].li===li;})&&g.n){FCOL[g.n]=false;try{localStorage.setItem("maratona-fases-abertas",JSON.stringify(FCOL));}catch(e){}}});apply();};
$("q").addEventListener("input",function(){QS=norm(this.value.trim());apply();});
var chips=document.querySelectorAll(".chips button");
for(var ci=0;ci<chips.length;ci++)(function(b){b.addEventListener("click",function(){FL=b.getAttribute("data-f");for(var x=0;x<chips.length;x++)chips[x].className=chips[x]===b?"on":"";apply();});})(chips[ci]);
(function(){var f=$("fase"),i,o;o=document.createElement("option");o.value="-1";o.textContent="Todas as fases";f.appendChild(o);for(i=0;i<G.length;i++){o=document.createElement("option");o.value=i;o.textContent=G[i].n;f.appendChild(o);}
f.addEventListener("change",function(){FASE=parseInt(f.value,10);apply();});
$("cont").addEventListener("click",function(){var wi=window.mrNowIdx?window.mrNowIdx():-1,l=wi>-1?wi:ordList().filter(function(i){return !seen[i];})[0];if(l===undefined){tst("Você já viu tudo! 🎉");l=ordList()[0];if(l===undefined)return;}FASE=-1;f.value="-1";FL="all";QS="";$("q").value="";for(var x=0;x<chips.length;x++)chips[x].className=chips[x].getAttribute("data-f")==="all"?"on":"";apply();var li=els[l].li;window.mrOpen(li);li.scrollIntoView({block:"center",behavior:"smooth"});li.classList.add("goto");setTimeout(function(){li.classList.remove("goto");},2200);});})();/* Ordem, fila, plano, resumo */
function dnum(s){var a=String(s||"").split("-");return a.length===3?Date.UTC(+a[0],+a[1]-1,+a[2])/864e5:NaN;}
function n1(x){return String(Math.round(x*10)/10).replace(".",",");}
function renderForecast(){
var el=$("fc");if(!el)return;
var left=leftN(),rem=mins(false),now=new Date(),b0=new Date(now.getFullYear(),now.getMonth(),now.getDate()),days=Math.round((PREM-b0)/864e5),t0=dnum(hoje()),first=1e9,i,d,c=0,mn=0,W,wk,needT,needH,nd=0,tw=0,hw=0,msg,cls,pos,h;
if(!left||days<=0){el.hidden=true;hfSet("");return;}
el.hidden=false;
for(i=0;i<T.length;i++){if(!seen[i]||OLDS[T[i]])continue;d=dnum(dts[T[i]]);if(d<first)first=d;}
W=first<1e9?Math.min(28,Math.max(7,t0-first+1)):7;
for(i=0;i<T.length;i++){if(!seen[i]||OLDS[T[i]])continue;d=dnum(dts[T[i]]);if(d>=t0-W+1&&d<=t0){c++;mn+=M[i];}}
var dow=(now.getDay()+6)%7,mon=t0-dow,wd=0,wt,wkL=Math.max(1,(PREM-new Date(b0.getFullYear(),b0.getMonth(),b0.getDate()-dow))/6048e5);
for(i=0;i<T.length;i++){if(!seen[i]||OLDS[T[i]])continue;d=dnum(dts[T[i]]);if(d>=mon&&d<=t0)wd++;}
wt=Math.max(1,Math.ceil((left+wd)/wkL));
wk=days/7;needT=left/wk;needH=rem/60/wk;
if(!c){cls="w";msg="📈 Ainda sem ritmo: marque o que você assistir e eu calculo se dá tempo.";}
else{nd=Math.ceil(rem/(mn/W));tw=c/(W/7);hw=mn/60/(W/7);
 var end=new Date(b0.getFullYear(),b0.getMonth(),b0.getDate()+nd),dd=Math.abs(days-nd);
 if(nd>365){cls="b";msg="⏳ No ritmo atual não dá tempo: levaria mais de um ano.";}
 else if(nd<days){cls="g";msg="✅ Dá tempo! No seu ritmo você termina em "+dm(end)+", "+dd+(dd===1?" dia":" dias")+" antes da estreia.";}
 else if(nd===days){cls="w";msg="⚠️ Por pouco: no seu ritmo você termina em "+dm(end)+", no dia da estreia.";}
 else{cls="b";msg="⏳ Não dá tempo no ritmo atual: você termina em "+dm(end)+", "+dd+(dd===1?" dia":" dias")+" depois da estreia.";}}
window.MR_PACE=c?cls:"";pos=c?Math.max(3,Math.min(97,nd/days*100)):0;
h='<p class="fcm '+cls+'"></p><div class="fcg">'+(c?'<div><small>Seu ritmo</small><b>'+n1(tw)+' títulos/sem</b><small>≈ '+n1(hw)+' h/sem</small></div>':'')+'<div><small>Precisa para chegar a tempo</small><b>'+n1(needT)+' títulos/sem</b><small>≈ '+n1(needH)+' h/sem</small></div></div>';
if(c)h+='<div class="fct"><i class="'+cls+'" style="left:'+pos+'%"></i></div><div class="fcl"><span>hoje</span><span>estreia '+dm(PREM)+'</span></div><p class="fcn">'+(needT>tw?'Faltam +'+n1(needT-tw)+' títulos por semana para chegar a tempo.':'Você está '+n1(tw-needT)+' título(s) por semana acima do necessário. 👏')+' Ritmo calculado com os últimos '+W+' dias ('+c+(c===1?' título':' títulos')+')'+(ESS?' · só o essencial':'')+'.</p>';
h+='<div class="fcw"><small>Meta da semana: '+wd+' de '+wt+(wt===1?' título':' títulos')+(wd>=wt?' ✅':'')+'</small><div class="prp"><i style="width:'+Math.min(100,wd/wt*100)+'%"></i></div></div>';
el.innerHTML=h;el.firstChild.textContent=msg;hfSet(msg+" Meta da semana: "+wd+" de "+wt+".");
}
var PREB=["Dos primeiros heróis ao confronto com Thanos pelas Joias do Infinito.","O multiverso se abre: variantes, a TVA e ameaças de outras realidades.","Os mutantes ganham espaço fora dos X-Men.","Novos times e heróis se organizando rumo ao próximo grande evento.","A origem dos mutantes no cinema, antes do MCU."];
function renderPre(){
var box=$("prbody");if(!box||$("pre").hidden)return;
var n=total(),pc=Math.round(n/T.length*100),h='<h2>📖 Resumo pré-Doomsday</h2><p class="prs">Vingadores: Doutor Destino · '+PREM_TXT+'</p><div class="prp"><i style="width:'+pc+'%"></i></div><p class="prc"><b>'+n+'</b> de '+T.length+' capítulos liberados · '+pc+'%</p>';
if(!n)h+='<p class="pre0">Nada liberado ainda. Marque um título como visto e o resumo dele aparece aqui.</p>';
G.forEach(function(g,gi){var done=[],lock=[],i;for(i=g.a;i<=g.b;i++)(seen[i]?done:lock).push(i);
h+='<section class="prg'+(!lock.length?" ok":"")+'"><h3>'+esc(g.n)+' <small>'+done.length+'/'+(g.b-g.a+1)+'</small></h3><p class="prb">'+(PREB[gi]||"")+'</p>';
done.forEach(function(i){h+='<div class="prt"><b>'+esc(T[i])+'</b>'+(rate[i]>0?' <span>'+"★".repeat(rate[i])+'</span>':'')+'<br><small>'+esc(RC[i])+'</small><small class="prw">💡 '+esc(PI[i]||"")+'</small></div>';});
if(lock.length)h+='<details class="prl"><summary>🔒 '+lock.length+(lock.length===1?' bloqueado':' bloqueados')+'</summary>'+lock.map(function(i){return esc(T[i]);}).join('<br>')+'</details>';
h+='</section>';});
if(n===T.length)h+='<p class="pre0">🎉 Tudo liberado. Você está pronto para a estreia!</p>';
box.innerHTML=h;}
$("prb").addEventListener("click",function(){$("pre").hidden=false;renderPre();$("prx").focus();});
$("prx").addEventListener("click",function(){$("pre").hidden=true;});
$("pre").addEventListener("click",function(e){if(e.target===this)this.hidden=true;});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!$("pre").hidden)$("pre").hidden=true;});
var OLDS={};try{OLDS=JSON.parse(localStorage.getItem("maratona-antigos")||"{}")||{};}catch(e){}
function saveOld(){try{localStorage.setItem("maratona-antigos",JSON.stringify(OLDS));}catch(e){}}
function hfSet(s){var hp=$("hpace"),hf=$("hfc");if(!hp)return;if(!hf){hf=document.createElement("div");hf.id="hfc";hf.className=hp.className;hp.parentNode.insertBefore(hf,hp.nextSibling);}hf.hidden=!s;if(s){hf.innerHTML="<small>📈 Previsão de término</small>";hf.appendChild(document.createTextNode(s));}}
var PI=["Nasce Tony Stark e a base de todo o universo.","Mostra a S.H.I.E.L.D. e a Viúva Negra em ação.","Introduz Asgard, Loki e o martelo.","Origem do Capitão e do Tesseract, uma Joia do Infinito.","Reúne o time pela primeira vez contra Loki.","Mostra o trauma de Tony depois de Nova York.","Revela o Éter, outra Joia do Infinito.","Derruba a S.H.I.E.L.D. e traz Bucky de volta.","Abre o espaço cósmico e a Joia do Poder.","Cria o Visão e abre rachaduras no time.","Apresenta o mundo quântico, que volta nas sagas.","Divide os Vingadores e traz Pantera Negra e Peter.","Apresenta a magia, o Olho de Agamotto e o multiverso.","Aprofunda a origem de Peter Quill.","Destrói Asgard e muda Thor.","Apresenta Wakanda e o vibranium.","Thanos coleta as Joias e vence.","Aprofunda o Reino Quântico.","Traz Carol Danvers, uma das mais poderosas.","Fecha a Saga do Infinito.","Conta o passado de Natasha e apresenta Yelena.","Passa o escudo do Capitão para Sam.","Mostra Wanda e o poder do Caos.","Apresenta a TVA e o multiverso.","Apresenta os Dez Anéis e um novo herói.","Revela seres cósmicos que protegem a Terra.","Explora o multiverso e o poder de Wanda.","Mostra Thor depois do Ultimato e o novo Poderoso Thor.","Passa o arco de Clint para Kate Bishop.","Apresenta Kamala Khan e os laços com Carol.","Ajuda a entender a união dos Guardiões.","Wakanda sem T’Challa, com novo Pantera Negra e Namor.","Fecha a história do Loki e da TVA.","Aprofunda a magia depois de WandaVision.","Apresenta Kang, o vilão da saga.","Fecha o ciclo dos Guardiões originais.","Une Carol, Monica e Kamala.","Apresenta o Deadpool de Ryan Reynolds.","Apresenta a X-Force e o Cable.","Mostra o fim do Wolverine de Hugh Jackman.","Traz mutantes de volta ao universo dos cinemas.","Sam Wilson assume como Capitão América.","Traz o Demolidor de volta ao universo.","Reúne anti-heróis num novo time.","Apresenta o Quarteto, ligado ao Doutor Destino nos quadrinhos.","Apresenta os mutantes dos cinemas.","Aprofunda o conflito entre humanos e mutantes.","Fecha a trilogia clássica dos X-Men."];
$("prs").addEventListener("click",function(){var s="📖 Meu resumo pré-Doomsday ("+total()+" de "+T.length+" títulos)\nVingadores: Doutor Destino · "+PREM_TXT+"\n";
G.forEach(function(g){var l=[],i;for(i=g.a;i<=g.b;i++)if(seen[i])l.push("• "+T[i]+": "+RC[i]);if(l.length)s+="\n"+g.n+"\n"+l.join("\n")+"\n";});
try{if(navigator.share){navigator.share({text:s}).catch(function(){});return;}}catch(e){}
try{navigator.clipboard.writeText(s);tst("Resumo copiado! ✅");}catch(e){tst("Não deu para copiar");}});
var ORD="rel",HRS=8;
try{ORD=localStorage.getItem("maratona-ordem")||"rel";HRS=parseInt(localStorage.getItem("maratona-horas")||"8",10)||8;}catch(e){}
var CH=[3, 18, 0, 1, 2, 4, 6, 5, 7, 8, 13, 9, 10, 11, 20, 15, 12, 14, 17, 16, 19, 21, 22, 23, 32, 24, 25, 26, 28, 29, 27, 31, 34, 35, 30, 36, 33, 41, 43, 42, 40, 44],FOX=[45, 46, 47, 37, 39, 38];
function viewGroups(){
if(ORD==="dur"){var al=[],z;for(z=0;z<T.length;z++)al.push(z);al.sort(function(a,b){return M[a]-M[b]||a-b;});return [{n:"Do mais curto ao mais longo",items:al}];}
if(ORD==="cron")return [{n:"Ordem cronológica (MCU)",items:CH},{n:"Fora do MCU principal",items:FOX}];
return G.map(function(g){var a=[];for(var i=g.a;i<=g.b;i++)a.push(i);return {n:g.n,items:a};});
}
function ordList(){var a=[];viewGroups().forEach(function(g){a=a.concat(g.items);});return a;}
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;");}
function pcLabel(p){return /^\d+$/.test(p)?p+(p==="1"?" cena extra":" cenas extras"):(p==="sim"?"tem cena extra":"sem cena extra");}
function renderNext(){
var el=$("next"),o=ordList(),nx=-1,k;
for(k=0;k<o.length;k++)if(!seen[o[k]]){nx=o[k];break;}
var wi=nowIdx();
if(wi>-1){
el.innerHTML='<small>▶ Assistindo agora</small><b></b><span class="nd"></span><div class="na"><button type="button" id="nm">✓ Terminei</button><button type="button" class="ghost" id="ng">Ir até ele</button><button type="button" class="ghost" id="nq">Largar</button></div>';
el.querySelector("b").textContent=T[wi];
el.querySelector(".nd").textContent=fmt(wi)+(PC[wi]?" · 🎞️ "+pcLabel(PC[wi]):"");
el.querySelector("#nm").onclick=function(){els[wi].li.querySelector(".row").click();};
el.querySelector("#ng").onclick=goNow;
el.querySelector("#nq").onclick=function(){setNow(-1);};
return;}
if(nx<0){el.innerHTML="<b>Fila zerada! 🎉</b>";return;}
el.innerHTML='<small>▶ Assista agora</small><b></b><span class="nd"></span><div class="na"><button type="button" id="nw">▶ Começar a assistir</button><button type="button" class="ghost" id="nm">Marcar como visto</button></div>';
el.querySelector("b").textContent=T[nx];
el.querySelector(".nd").textContent=fmt(nx)+(PC[nx]?" · 🎞️ "+pcLabel(PC[nx]):"");
el.querySelector("#nm").onclick=function(){els[nx].li.querySelector(".row").click();};
el.querySelector("#nw").onclick=function(){setNow(nx);sfxTick(true);};
}
function dm(d){return ("0"+d.getDate()).slice(-2)+"/"+("0"+(d.getMonth()+1)).slice(-2);}
function renderPlan(){
var o=ordList().filter(function(i){return !seen[i]&&pl(i);}),cap=HRS*60,wk=[],cur=null,now=new Date();
var b0=new Date(now.getFullYear(),now.getMonth(),now.getDate()),prem=PREM,weeks=Math.max(1,Math.ceil((prem-b0)/6048e5)),h="",msg;
o.forEach(function(i){if(!cur||(cur.m>0&&cur.m+M[i]>cap)){cur={m:0,it:[]};wk.push(cur);}cur.it.push(i);cur.m+=M[i];});
wk.forEach(function(w,k){if(k>=3&&!PLALL)return;var s=new Date(b0.getTime()+k*6048e5),e=new Date(s.getTime()+6*864e5);h+='<div class="wk'+(k>=weeks?" late":"")+'"><b>Semana '+(k+1)+' ('+dm(s)+' a '+dm(e)+')</b> <small>'+fm(w.m)+'</small><br>'+w.it.map(function(i){return esc(T[i]);}).join("<br>")+'</div>';});
if(!o.length)msg="Nada a planejar: você terminou tudo! 🎉";
else if(wk.length<=weeks)msg="Com "+HRS+" h por semana você termina na semana "+wk.length+" e chega a tempo da estreia. ✅";
else msg="Com "+HRS+" h por semana faltariam "+(wk.length-weeks)+" semana(s) depois da estreia. Para chegar a tempo, precisa de ≈ "+Math.ceil(mins(false)/60/weeks)+" h por semana.";
if(wk.length>3)h+='<button type="button" class="plall" id="plall">'+(PLALL?"▲ Mostrar só as 3 primeiras semanas":"▼ Ver todas as semanas ("+wk.length+")")+'</button>';
$("pout").innerHTML='<p class="pm">'+msg+'</p>'+h;
}
var PLALL=false;$("pout").addEventListener("click",function(e){if(e.target.closest&&e.target.closest("#plall")){PLALL=!PLALL;renderPlan();}});
$("hrs").value=HRS;
$("hrs").addEventListener("input",function(){var v=parseInt(this.value,10);if(v>=1&&v<=60){HRS=v;try{localStorage.setItem("maratona-horas",String(v));}catch(e){}renderPlan();}});
var ords=document.querySelectorAll("#ordem button");
function markOrd(){for(var x=0;x<ords.length;x++)ords[x].className=ords[x].getAttribute("data-o")===ORD?"on":"";}
markOrd();
for(var oi=0;oi<ords.length;oi++)(function(b){b.addEventListener("click",function(){ORD=b.getAttribute("data-o");try{localStorage.setItem("maratona-ordem",ORD);}catch(e){}markOrd();build();});})(ords[oi]);
function showSum(){
var n=total(),mn=mins(true),rs=[],sum=0,k,bt=0,best="";
for(k in rate)if(rate[k]>0){rs.push([+k,rate[k]]);sum+=rate[k];}
rs.sort(function(a,b){return b[1]-a[1];});
G.forEach(function(g){var s=0,c=0;for(var i=g.a;i<=g.b;i++)if(rate[i]>0){s+=rate[i];c++;}if(c&&s/c>bt){bt=s/c;best=g.n;}});
var h=mn/60,pf=h<20?"Recruta Esmeralda":h<60?"Herói Esmeralda":h<100?"Vingador Veterano":"Lenda do Multiverso",ac=0;
for(k in ach)if(ach[k])ac++;
var top=rs.slice(0,3).map(function(r){return "★".repeat(r[1])+" "+esc(T[r[0]]);}).join("<br>");
$("sbody").innerHTML='<p><b>Perfil:</b> '+pf+'</p><p><b>Títulos vistos:</b> '+n+' de '+T.length+'</p><p><b>Tempo assistido:</b> '+(fm(mn)||"0min")+'</p><p><b>Nota média:</b> '+(rs.length?(sum/rs.length).toFixed(1).replace(".",",")+" ★ em "+rs.length+" avaliações":"sem notas ainda")+'</p><p><b>Favoritos:</b><br>'+(top||"—")+'</p><p><b>Fase favorita:</b> '+(best||"—")+'</p><p><b>Conquistas:</b> '+ac+' de '+AL.length+'</p>';
$("sum").hidden=false;
}
$("sb").addEventListener("click",showSum);
$("sx").addEventListener("click",function(){$("sum").hidden=true;});
$("sum").addEventListener("click",function(e){if(e.target===this)this.hidden=true;});
/* Quiz, sessão, backup, tema, jogo, compartilhar */
var RC=["Tony Stark constrói a primeira armadura e vira herói.","Tony enfrenta a pressão do governo e um rival.","O deus do trovão é enviado à Terra e aprende humildade.","Steve Rogers vira super-soldado na Segunda Guerra.","Os heróis se unem pela primeira vez contra Loki.","Tony lida com traumas após a invasão a Nova York.","Thor enfrenta elfos sombrios que cobiçam o Éter.","Steve descobre uma ameaça dentro da S.H.I.E.L.D.","Um grupo improvável disputa uma esfera poderosa no espaço.","Os Vingadores enfrentam uma IA criada por Tony e Banner.","Scott Lang aprende a encolher e a roubar por uma causa.","Os heróis se dividem sobre serem controlados pelo governo.","Um cirurgião arrogante descobre o mundo da magia.","Peter Quill conhece o pai e a família dos Guardiões é testada.","Thor luta para escapar de um planeta e salvar Asgard.","T’Challa assume o trono de Wakanda.","Thanos parte para coletar todas as Joias do Infinito.","Scott e Hope procuram alguém perdido no Reino Quântico.","Carol Danvers descobre seus poderes e seu passado.","Os heróis restantes tentam reverter o que Thanos fez.","Natasha encara seu passado e a família que deixou para trás.","Sam e Bucky lidam com o legado do escudo do Capitão.","Wanda e Visão vivem uma sitcom, mas algo está estranho.","Loki é capturado por uma agência que cuida do tempo.","Shang-Chi enfrenta o passado e o pai, líder dos Dez Anéis.","Seres imortais protegem a Terra há milênios.","Estranho protege uma jovem que viaja entre universos.","Thor busca paz, mas enfrenta o Carniceiro dos Deuses.","Clint Barton tenta voltar para casa no Natal, mas é perseguido.","Kamala Khan, fã de heróis, descobre seus poderes.","Os Guardiões procuram um presente especial para o Peter.","Wakanda luta para se proteger depois de perder seu rei.","Loki tenta consertar a máquina do tempo da agência.","Agatha Harkness reúne bruxas para uma trilha misteriosa.","Scott e sua família ficam presos no Reino Quântico.","Os Guardiões se unem para salvar um amigo e enfrentar o passado de Rocket.","Carol, Monica e Kamala trocam de lugar ao usar seus poderes.","Wade Wilson vira um mercenário falastrão em busca de vingança.","Deadpool monta a X-Force para proteger um jovem mutante.","Um Wolverine envelhecido protege uma jovem mutante.","Deadpool e Wolverine formam uma dupla improvável numa missão.","Sam Wilson assume o manto do Capitão América.","Matt Murdock volta a atuar como advogado e como justiceiro.","Anti-heróis são reunidos para uma missão perigosa.","Uma família de heróis defende seu mundo retrô-futurista de Galactus.","Mutantes escolhem entre conviver ou entrar em conflito com os humanos.","Os X-Men enfrentam um ataque ao Instituto.","Uma suposta cura para mutantes divide os heróis."],PATH=[16,19,23,27,31,32,41,43,44,45,46],QZ=0,SES=120,TEMA="esm",ACC="#2fd36b",HOOD="#0c2a18";
try{QZ=parseInt(localStorage.getItem("maratona-quiz")||"0",10)||0;SES=parseInt(localStorage.getItem("maratona-sessao")||"120",10)||120;TEMA=localStorage.getItem("maratona-tema")||"esm";}catch(e){}
var TEMAS={esm:{ac:"#2fd36b",ak:"#04140a",g1:"#0f3a22",g2:"#07140c",bg:"#050805",card:"#0e1510",line:"#1f3326",muted:"#8fa896",ink:"#e6f2e8",m1:"#0c2a18",m2:"#07130c"},ouro:{ac:"#f2b134",ak:"#1c1202",g1:"#3a1a0f",g2:"#140a07",bg:"#080505",card:"#17100e",line:"#3a2620",muted:"#a8968f",ink:"#f2e8e6",m1:"#3a0f14",m2:"#140709"},prata:{ac:"#6db3ff",ak:"#031225",g1:"#0f2a4a",g2:"#070f1a",bg:"#050810",card:"#0d1420",line:"#1f2d44",muted:"#8f9fb4",ink:"#e6eef7",m1:"#0c2040",m2:"#070f1c"},rubi:{ac:"#ff4d5e",ak:"#2a0408",g1:"#3a0f14",g2:"#140709",bg:"#080405",card:"#170e0f",line:"#3a2024",muted:"#a8908f",ink:"#f7e6e8",m1:"#3a0f14",m2:"#140709"},roxo:{ac:"#b57bff",ak:"#12062a",g1:"#2a0f4a",g2:"#0d0714",bg:"#070510",card:"#130d20",line:"#2d1f44",muted:"#9f8fb4",ink:"#efe6f7",m1:"#240c40",m2:"#0e071c"},rosa:{ac:"#ff7ac8",ak:"#2a0518",g1:"#4a0f33",g2:"#14070f",bg:"#080508",card:"#1b0e16",line:"#44203a",muted:"#b48fa5",ink:"#f7e6f0",m1:"#400c2c",m2:"#1c0714"},laranja:{ac:"#ff8a3d",ak:"#240d01",g1:"#4a2a0f",g2:"#140c07",bg:"#080605",card:"#1a130e",line:"#443020",muted:"#b4a08f",ink:"#f7eee6",m1:"#40240c",m2:"#1c1007"},ciano:{ac:"#2fe0d6",ak:"#01201e",g1:"#0f3a3a",g2:"#071414",bg:"#050808",card:"#0e1717",line:"#1f3a3a",muted:"#8fb4b0",ink:"#e6f7f5",m1:"#0c3030",m2:"#071a1a"}};
var TC={},TH=140,TS=1,HXG=55;
function hsl(c){var r=parseInt(c.substr(1,2),16)/255,g=parseInt(c.substr(3,2),16)/255,b=parseInt(c.substr(5,2),16)/255,M=Math.max(r,g,b),m=Math.min(r,g,b),l=(M+m)/2,d=M-m,h=0,s=0;if(d){s=d/(1-Math.abs(2*l-1));h=M===r?((g-b)/d+6)%6:M===g?(b-r)/d+2:(r-g)/d+4;h*=60;}return [h,s,l];}
function rgb(h,s,l){var c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2,v=[[c,x,0],[x,c,0],[0,c,x],[0,x,c],[x,0,c],[c,0,x]][Math.floor(h/60)%6],o="#",i,n;for(i=0;i<3;i++){n=Math.round((v[i]+m)*255);o+=(n<16?"0":"")+n.toString(16);}return o;}
function mkT(ac){var a=hsl(ac),H=a[0],f=Math.min(1,a[1]/.5);return {ac:ac,ak:rgb(H,.8*f,.08),g1:rgb(H,.6*f,.14),g2:rgb(H,.5*f,.06),bg:rgb(H,.3*f,.025),card:rgb(H,.25*f,.065),line:rgb(H,.25*f,.15),muted:rgb(H,.15*f,.62),ink:rgb(H,.35*f,.93),m1:rgb(H,.6*f,.1),m2:rgb(H,.5*f,.055)};}
var NT={lima:["#b6f03c","Lima"],grafite:["#cfd8e3","Grafite"]},nk,CC="",tbx=document.getElementById("temas"),ci;
for(nk in NT){TEMAS[nk]=mkT(NT[nk][0]);(function(k){var b=document.createElement("button");b.type="button";b.setAttribute("data-t",k);b.innerHTML='<span style="color:'+NT[k][0]+'">●</span> '+NT[k][1];tbx.appendChild(b);})(nk);}
try{CC=localStorage.getItem("maratona-cor")||"";}catch(e){}
if(/^#[0-9a-f]{6}$/i.test(CC))TEMAS.custom=mkT(CC);
ci=document.createElement("input");ci.type="color";ci.value=CC||"#ff9f1c";ci.title="Escolha qualquer cor";ci.setAttribute("aria-label","Cor personalizada");ci.style.cssText="width:44px;height:34px;padding:2px;border:1px solid var(--line);border-radius:10px;background:var(--card);cursor:pointer";
ci.addEventListener("input",function(){CC=ci.value;TEMAS.custom=mkT(CC);TEMA="custom";try{localStorage.setItem("maratona-cor",CC);localStorage.setItem("maratona-tema",TEMA);}catch(e){}applyTheme();if(typeof renderHome==="function"&&!HOME.hidden)renderHome();});
tbx.appendChild(ci);
function applyTheme(){var t=TEMAS[TEMA]||TEMAS.esm,_a=hsl(t.ac),r=document.documentElement.style,k,b=document.querySelectorAll("#temas button");TC={};TH=_a[0];TS=Math.min(1,_a[1]/.7);for(k in t)r.setProperty("--"+k,t[k]);r.setProperty("--muted","color-mix(in srgb,"+t.muted+" 72%,#fff)");r.setProperty("--red",t.ac);ACC=t.ac;HOOD=t.m1;for(var i=0;i<b.length;i++)b[i].className=b[i].getAttribute("data-t")===TEMA?"on":"";}
for(var ti=0,tb=document.querySelectorAll("#temas button");ti<tb.length;ti++)(function(b){b.addEventListener("click",function(){TEMA=b.getAttribute("data-t");try{localStorage.setItem("maratona-tema",TEMA);}catch(e){}applyTheme();});})(tb[ti]);
applyTheme();
/* 7 fontes (pilhas de fontes do sistema, funcionam offline) */
var FONTS=[
["padrao","1. Padrão (sistema + Georgia nos títulos)",""],
["inter", "2. Inter (moderna e limpa)", "Inter,system-ui,sans-serif", 1, 400, ""],
["nunito", "3. Nunito (arredondada)", "Nunito,ui-rounded,\"Arial Rounded MT Bold\",sans-serif", 1, 600, ""],
["oswald", "4. Oswald (condensada)", "Oswald,\"Arial Narrow\",Impact,sans-serif", 1.05, 500, ".02em"],
["merriweather", "5. Merriweather (leitura)", "Merriweather,Georgia,serif", 0.95, 400, ""],
["cinzel", "6. Cinzel (épica)", "Cinzel,\"Times New Roman\",serif", 0.92, 600, ".03em"],
["robotomono", "7. Roboto Mono (terminal)", "\"Roboto Mono\",ui-monospace,Menlo,monospace", 0.9, 400, ""]
],FONTE="padrao";
try{FONTE=localStorage.getItem("maratona-fonte")||"padrao";}catch(e){}
(function(){var s=$("fts"),i,o;for(i=0;i<FONTS.length;i++){o=document.createElement("option");o.value=FONTS[i][0];o.textContent=FONTS[i][1];if(FONTS[i][2])o.style.fontFamily=FONTS[i][2];s.appendChild(o);}
s.addEventListener("change",function(){FONTE=s.value;try{localStorage.setItem("maratona-fonte",FONTE);}catch(e){}applyFont();sfxTick(true);});})();
var FURL={"Inter": "Inter:wght@400;600;700", "Poppins": "Poppins:wght@400;600", "Montserrat": "Montserrat:wght@500;700", "Nunito": "Nunito:wght@600;800", "Quicksand": "Quicksand:wght@600;700", "Raleway": "Raleway:wght@500;700", "Rajdhani": "Rajdhani:wght@600;700", "Orbitron": "Orbitron:wght@600;800", "Oswald": "Oswald:wght@500;700", "Bebas Neue": "Bebas+Neue", "Anton": "Anton", "Bangers": "Bangers", "Cinzel": "Cinzel:wght@600;800", "Playfair Display": "Playfair+Display:wght@500;700", "Merriweather": "Merriweather:wght@400;700", "Lora": "Lora:wght@400;700", "Roboto Mono": "Roboto+Mono:wght@400;700", "Special Elite": "Special+Elite", "VT323": "VT323", "Press Start 2P": "Press+Start+2P"},FLD={};function loadFont(css){if(navigator.onLine===false)return;var n=(css||"").split(",")[0].replace(/["']/g,"").trim();if(!FURL[n]||FLD[n])return;FLD[n]=1;var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family="+FURL[n]+"&display=swap";document.head.appendChild(l);}
function applyFont(){
loadFont((FONTS.filter(function(x){return x[0]===FONTE;})[0]||[])[2]);
var f=null,i,r=document.documentElement.style;
for(i=0;i<FONTS.length;i++)if(FONTS[i][0]===FONTE)f=FONTS[i];
if(!f){f=FONTS[0];FONTE="padrao";}
if(f[2]){r.setProperty("--ff",f[2]);r.setProperty("--fh",f[2]);r.setProperty("--fz",f[3]||1);r.setProperty("--fw",f[4]||400);r.setProperty("--fls",f[5]||"normal");}else{["--ff","--fh","--fz","--fw","--fls"].forEach(function(p){r.removeProperty(p);});}
$("fts").value=FONTE;$("fsm").style.fontFamily=f[2]||"";$("fsm").style.fontWeight=f[4]||"";$("fsm").style.letterSpacing=f[5]||"";
$("fnm").textContent="Fonte atual: "+f[1].replace(/^\d+\.\s*/,"")+". As fontes são carregadas da internet na primeira vez; sem conexão, o app usa uma parecida.";
}
applyFont();
function renderSession(){
var o=ordList().filter(function(i){return !seen[i];}),a=SES,l=[],t=0,k;
for(k=0;k<o.length;k++){if(t+M[o[k]]<=a){l.push(o[k]);t+=M[o[k]];}else if(l.length)break;}
if(!l.length){var sm2=o.slice().sort(function(x,y){return M[x]-M[y];})[0];$("sout").innerHTML=o.length?'<p class="pm">Nenhum título cabe em '+fm(a)+'. O menor que falta tem '+fm(M[sm2])+': '+esc(T[sm2])+'.</p>':'<p class="pm">Você já viu tudo! 🎉</p>';return;}
$("sout").innerHTML='<p class="pm">Cabem '+l.length+' título(s), total '+fm(t)+':</p><div class="wk">'+l.map(function(i){return esc(T[i])+' <small>'+fm(M[i])+'</small>';}).join("<br>")+'</div>';
}
$("smin").value=SES;
$("smin").addEventListener("input",function(){var v=parseInt(this.value,10);if(v>=10&&v<=900){SES=v;try{localStorage.setItem("maratona-sessao",String(v));}catch(e){}renderSession();}});
function essLbl(){$("ess").textContent=ESS?"🛤️ Meta: só o essencial (toque para ver tudo)":"📚 Meta: lista completa (toque para só o essencial)";$("ess").setAttribute("aria-pressed",ESS?"true":"false");}
$("ess").addEventListener("click",function(){ESS=!ESS;try{localStorage.setItem("maratona-ess",ESS?"1":"0");}catch(e){}essLbl();count();sfxTick(ESS);});essLbl();
function bkStr(){return JSON.stringify({v:1,seen:toKey(seen),rate:toKey(rate),ach:ach,q:QZ,hrs:HRS,ord:ORD,tema:TEMA,fonte:FONTE,fav:fav,nts:nts,dts:dts,ess:ESS,mis:MIS,old:OLDS,loja:(window.__lojaExport?window.__lojaExport():undefined)});}
function bkRem(){var s=$("bks"),t=0,d,due;try{t=parseInt(localStorage.getItem("maratona-bk-ultimo")||"0",10)||0;}catch(e){}d=t?Math.floor((Date.now()-t)/864e5):-1;due=total()>0&&(d<0||d>=7);s.textContent=due?"💾 Backup do progresso ⚠️":"💾 Backup do progresso";if(due&&!$("bs").textContent)$("bs").textContent=d<0?"Você ainda não fez backup. Baixe um arquivo para não perder seu progresso.":"Último backup há "+d+" dias. Baixe um arquivo novo.";}
function bkMark(){try{localStorage.setItem("maratona-bk-ultimo",String(Date.now()));}catch(e){}bkRem();}
$("bg").addEventListener("click",function(){$("bk").value=bkStr();$("bk").select();$("bs").textContent="Código gerado. Copie e guarde em um lugar seguro.";bkMark();});
$("bd").addEventListener("click",function(){var s=bkStr(),n="maratona-marvel-"+hoje()+".json";$("bk").value=s;try{var b=new Blob([s],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=n;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},500);$("bs").textContent="Arquivo "+n+" baixado. Guarde em um lugar seguro.";bkMark();}catch(e){$("bs").textContent="Não deu para baixar aqui. O código foi gerado acima: copie e guarde.";}});
$("bf").addEventListener("click",function(){$("bfi").click();});
$("bfi").addEventListener("change",function(){var f=this.files&&this.files[0],r;if(!f)return;r=new FileReader();r.onload=function(){$("bk").value=String(r.result);$("br").click();};r.readAsText(f);this.value="";});
$("bc").addEventListener("click",function(){var el=$("bk"),ok=false;el.select();try{ok=document.execCommand("copy");}catch(e){}try{if(navigator.clipboard){navigator.clipboard.writeText(el.value);ok=true;}}catch(e){}$("bs").textContent=ok?"Copiado!":"Selecione o texto e copie manualmente.";if(ok)bkMark();});
$("br").addEventListener("click",function(){
try{
var o=JSON.parse($("bk").value);if(!o||o.v!==1)throw 0;
seen=toIdx(o.seen||{});rate=toIdx(o.rate||{});ach=o.ach||{};QZ=o.q|0;if(o.hrs>0)HRS=o.hrs;if(o.ord)ORD=o.ord;if(TEMAS[o.tema])TEMA=o.tema;if(o.fonte){FONTE=o.fonte;try{localStorage.setItem("maratona-fonte",FONTE);}catch(e){}applyFont();}
fav=o.fav||{};nts=o.nts||{};dts=o.dts||{};if(o.mis){MIS=o.mis;saveMis();}OLDS=o.old||{};saveOld();if(o.loja&&window.__lojaImport)window.__lojaImport(o.loja);ESS=!!o.ess;try{localStorage.setItem("maratona-ess",ESS?"1":"0");}catch(e){}essLbl();save();saveR();saveA();saveX();
try{localStorage.setItem("maratona-quiz",String(QZ));localStorage.setItem("maratona-horas",String(HRS));localStorage.setItem("maratona-ordem",ORD);localStorage.setItem("maratona-tema",TEMA);}catch(e){}
$("hrs").value=HRS;markOrd();applyTheme();build();$("bs").textContent="Progresso restaurado ✅";
}catch(e){$("bs").textContent="Código inválido. Cole o código completo.";}
});
bkRem();
var QN=["Fácil","Médio","Difícil","Mestre"],QO=[3,4,4,5],QP=[5,15,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,150,200,250,300,350],QTM=null;
function qLevel(){return QZ>=25?3:QZ>=15?2:QZ>=5?1:0;}
var QD="auto";try{var qv=localStorage.getItem("maratona-qdif");if(qv==="0"||qv==="1"||qv==="2"||qv==="3")QD=parseInt(qv,10);}catch(e){}
document.addEventListener("DOMContentLoaded",function(){var f=$("acf"),al=$("al");if(!f||!al)return;var s="all";try{s=localStorage.getItem("maratona-acf")||"all";}catch(e){}
function set(v){al.setAttribute("data-f",v);Array.prototype.forEach.call(f.children,function(b){b.classList.toggle("on",b.getAttribute("data-f")===v);});}
set(s);f.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;s=b.getAttribute("data-f");try{localStorage.setItem("maratona-acf",s);}catch(x){}set(s);});});
function qEff(){return QD==="auto"?qLevel():QD;}
function qStats(){var e=$("qzs");if(!e)return;try{var nx=0,pv=0,i,pct;for(i=0;i<QP.length;i++){if(QZ>=QP[i])pv=QP[i];else{nx=QP[i];break;}}
pct=nx?Math.round((QZ-pv)/(nx-pv)*100):100;
e.innerHTML='<div class="qzk"><b>'+QN[qEff()]+'</b><span>nível'+(QD==="auto"?" (auto)":"")+'</span></div><div class="qzk"><b>'+QZ+'</b><span>acertos</span></div><div class="qzn"><div class="qzh"><span>'+(nx?"🏅 Próxima conquista: "+nx+" acertos":"🏆 Todas as conquistas de quiz!")+'</span><span>'+QZ+(nx?"/"+nx:"")+'</span></div><div class="mxb"><i style="width:'+pct+'%"></i></div></div>';}catch(x){}}
document.addEventListener("DOMContentLoaded",function(){var q=$("quizb");if(q)q.addEventListener("toggle",qStats);var x=$("qx");if(x)x.addEventListener("click",function(){setTimeout(qStats,60);});qStats();});

function quizStop(){if(QTM){clearInterval(QTM);QTM=null;}}
var QM=0;try{QM=parseInt(localStorage.getItem("maratona-qmodo")||"0",10)||0;if(QM<0||QM>6)QM=0;}catch(e){}
var QST=0,QBEST=0,QMISS=[],QREV=false,QG=null,QRC=[],QR=Math.random,QSTAT={},QPB=0,QSB=0,QDIA=null,QDS={d:"",n:0},QMN=["🎬 Frase","📅 Ano","🗂️ Saga","⏳ Quem veio antes","⏱️ Duração","🎞️ Cenas extras","🎲 Misto"];
try{QBEST=parseInt(localStorage.getItem("maratona-qrec")||"0",10)||0;QMISS=JSON.parse(localStorage.getItem("maratona-qerros")||"[]")||[];QSTAT=JSON.parse(localStorage.getItem("maratona-qstat")||"{}")||{};QPB=parseInt(localStorage.getItem("maratona-qpb")||"0",10)||0;QSB=parseInt(localStorage.getItem("maratona-qsurv")||"0",10)||0;QDIA=JSON.parse(localStorage.getItem("maratona-qdia")||"null");QDS=JSON.parse(localStorage.getItem("maratona-qdia-seq")||"null")||QDS;}catch(e){}
var QINF=0;try{QINF=parseInt(localStorage.getItem("maratona-qinf")||"0",10)||0;}catch(e){}
function qSave(k,v){try{localStorage.setItem(k,typeof v==="string"?v:JSON.stringify(v));}catch(e){}}
function qSaveM(){try{localStorage.setItem("maratona-qerros",JSON.stringify(QMISS.slice(-40)));localStorage.setItem("maratona-qrec",String(QBEST));}catch(e){}}
function qSeed(s){var h=1779033703^s.length,i,a;for(i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19;}a=h>>>0;return function(){a=a+1831565813|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function qDay(o){var d=new Date();d.setDate(d.getDate()+(o||0));return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
function yr(i){var m=/\((\d{4})\)/.exec(T[i]);return m?+m[1]:0;}
function gOf(i){for(var k=0;k<G.length;k++)if(i>=G[k].a&&i<=G[k].b)return G[k].n;return "";}
function shuf(a){for(var i=a.length-1,j,t;i>0;i--){j=Math.floor(QR()*(i+1));t=a[i];a[i]=a[j];a[j]=t;}return a;}
function qNm(i){return T[i].replace(/\s*\(\d{4}\)\s*/," ").trim();}
function qCe(i){var p=PC[i];return p==="não"?0:/^\d+$/.test(p)?+p:-1;}
function qBtn(t,c,f){var b=document.createElement("button");b.type="button";b.textContent=t;if(c)b.className=c;b.onclick=f;return b;}
function qChips(it,cur,f){var d=document.createElement("div");d.className="qsel";it.forEach(function(x){d.appendChild(qBtn(x[1],cur===x[0]?"on":"",function(){f(x[0]);}));});return d;}
function qLbl(t){var p=document.createElement("p");p.className="qlb";p.textContent=t;return p;}
function qSubj(m){var w=[],i;for(i=0;i<T.length;i++){if(!seen[i])continue;if((m===1||m===3)&&!yr(i))continue;if(m===4&&(SE[i]||!(M[i]>0)))continue;if(m===5&&qCe(i)<0)continue;w.push(i);}return w;}
function qVars(m){return m<3?[0,1]:[0];}
function qKey(x){return x[0]+":"+x[1]+":"+x[2];}
function qChoose(){var g=QG,dly=g.type===2,ms=g.mode===6?[0,1,2,3,4,5]:[g.mode],c=[],i,m,w,f,t;
ms.forEach(function(m){w=qSubj(m);
if(QREV){f=w.filter(function(x){return QMISS.indexOf(x)>-1;});if(f.length)w=f;}
w.forEach(function(q){qVars(m).forEach(function(v){c.push([m,q,v]);});});});
if(!c.length)return null;
f=c.filter(function(x){return !g.used[qKey(x)];});
if(!f.length){g.used={};g.usedT={};g.usedP={};g.round++;g.rnew=1;f=c;}
function rc(x){return dly||QRC.indexOf(qKey(x))<0;}
function nm(x){return g.mode!==6||x[0]!==g.lastM;}
t=f.filter(function(x){return !g.usedT[x[1]]&&rc(x)&&nm(x);});
if(!t.length)t=f.filter(function(x){return !g.usedT[x[1]]&&rc(x);});
if(!t.length)t=f.filter(function(x){return !g.usedT[x[1]];});
if(!t.length)t=f.filter(rc);
if(!t.length)t=f;
return t[Math.floor(QR()*t.length)];}
function qMark(g,k){g.used[k.m+":"+k.q+":"+k.v]=1;g.usedT[k.q]=1;g.lastM=k.m;if(k.pk)g.usedP[k.pk]=1;}
function qInfo(q){return "<b>"+esc(T[q])+"</b> · "+esc(gOf(q))+" · "+fm(M[q])+(SE[q]?" 📺":"");}
function qBuild(m,q,lv,v){
var n=QO[lv],opts=[],corr,txt,info=qInfo(q),i,j,d,y,o,ids,pool,c,st,g0,nm,x,pk="",lb=function(x){return x?String(x):"Nenhuma";};
if(m===0){ids=[q];pool=[];
if(lv>=2){for(i=0;i<T.length;i++)if(i!==q&&Math.abs(i-q)<=6)pool.push(i);shuf(pool);}
while(ids.length<n&&pool.length)ids.push(pool.pop());
while(ids.length<n){o=Math.floor(QR()*T.length);if(ids.indexOf(o)<0)ids.push(o);}
if(v===1){opts=ids.map(function(x){return RC[x];});corr=RC[q];txt="<b>Qual resumo combina com este título?</b><i>"+esc(qNm(q))+"</i>";}
else{opts=ids.map(function(x){return T[x];});corr=T[q];txt="<b>Qual título combina com esta frase?</b><i>"+esc(RC[q])+"</i>";}
shuf(opts);}
else if(m===1&&v===1){y=yr(q);corr=qNm(q);opts=[corr];c=[];
for(i=0;i<T.length;i++)if(i!==q&&yr(i)&&yr(i)!==y)c.push(i);
pool=c.filter(function(x){return lv>=2?Math.abs(yr(x)-y)<=3:true;});if(pool.length<n-1)pool=c;
shuf(pool);while(opts.length<n&&pool.length){nm=qNm(pool.pop());if(opts.indexOf(nm)<0)opts.push(nm);}
shuf(opts);txt="<b>Qual destes saiu em "+y+"?</b>";}
else if(m===1){y=yr(q);corr=String(y);opts=[corr];
st=shuf(lv>=2?[-1,1,-2,2,3,-3]:[-4,4,-3,3,-6,6,-2,2]);
st.forEach(function(x){if(opts.length<n&&y+x<=2027&&y+x>=2005&&opts.indexOf(String(y+x))<0)opts.push(String(y+x));});
for(d=1;opts.length<n&&d<14;d++)[y-d,y+d].forEach(function(v){if(opts.length<n&&v<=2027&&v>=2005&&opts.indexOf(String(v))<0)opts.push(String(v));});
opts.sort();txt="<b>Em que ano saiu</b><i>"+esc(qNm(q))+"</i>";}
else if(m===2&&v===1){g0=gOf(q);corr=qNm(q);opts=[corr];c=[];
for(i=0;i<T.length;i++)if(gOf(i)!==g0)c.push(i);
shuf(c);while(opts.length<n&&c.length){nm=qNm(c.pop());if(opts.indexOf(nm)<0)opts.push(nm);}
shuf(opts);txt="<b>Qual destes é do grupo</b><i>"+esc(g0)+"</i>";}
else if(m===2){corr=gOf(q);opts=[corr];shuf(G.map(function(g){return g.n;})).forEach(function(x){if(opts.length<n&&opts.indexOf(x)<0)opts.push(x);});shuf(opts);txt="<b>De qual grupo é</b><i>"+esc(qNm(q))+"</i>";}
else if(m===5){y=qCe(q);corr=lb(y);opts=[corr];
shuf([0,1,2,3,4]).forEach(function(x){if(opts.length<n&&opts.indexOf(lb(x))<0)opts.push(lb(x));});
opts.sort(function(a,b){return (a==="Nenhuma"?0:+a)-(b==="Nenhuma"?0:+b);});
txt="<b>Quantas cenas extras tem</b><i>"+esc(qNm(q))+"</i>";info=qInfo(q)+" · "+pcLabel(PC[q]);}
else{c=[];
for(i=0;i<T.length;i++){if(i===q)continue;
if(m===3&&yr(i)&&yr(i)!==yr(q))c.push(i);
if(m===4&&!SE[i]&&M[i]>0&&M[i]!==M[q])c.push(i);}
pool=c.filter(function(x){var dd=m===3?Math.abs(yr(x)-yr(q)):Math.abs(M[x]-M[q]);return lv>=2?(m===3?dd<=2:dd<=25):(m===3?dd>=3:dd>=35);});
if(!pool.length)pool=c;
x=pool.filter(function(z){return !QG.usedP[m+":"+Math.min(q,z)+":"+Math.max(q,z)];});if(x.length)pool=x;
j=pool[Math.floor(QR()*pool.length)];pk=m+":"+Math.min(q,j)+":"+Math.max(q,j);
var a=qNm(q),b=qNm(j);if(a===b){a=T[q];b=T[j];}
opts=[a,b];shuf(opts);
if(m===3){corr=yr(q)<yr(j)?a:b;txt="<b>Qual saiu primeiro?</b>";info="<b>"+esc(a)+"</b> ("+yr(q)+") · <b>"+esc(b)+"</b> ("+yr(j)+")";}
else{corr=M[q]>M[j]?a:b;txt="<b>Qual dura mais?</b>";info="<b>"+esc(a)+"</b>: "+fm(M[q])+" · <b>"+esc(b)+"</b>: "+fm(M[j]);}}
return {m:m,q:q,v:v||0,pk:pk,txt:txt,opts:opts,corr:corr,info:info,h:false};}
function quiz(){quizStop();QG=null;$("qz").hidden=false;qHome();}
function qHome(){QR=Math.random;var box=$("qbody"),w=qSubj(0),nx=0,i,t=[],dn=QDIA&&QDIA.d===hoje(),wk=null,pc;
for(i=0;i<QP.length;i++)if(QZ<QP[i]){nx=QP[i];break;}
box.dataset.m="";box.innerHTML='<p class="qtit">🧠 Quiz Marvel</p><p><small>Acertos: '+QZ+' · Recorde de sequência: '+QBEST+(nx?' · Próximo prêmio: '+nx:'')+'</small></p>';
box.appendChild(qLbl("Modo"));
box.appendChild(qChips(QMN.map(function(n,k){return [k,n];}),QM,function(v){QM=v;qSave("maratona-qmodo",String(v));qHome();}));
box.appendChild(qLbl("Dificuldade · agora: "+QN[qEff()]+(qEff()===3?" (20s por pergunta)":"")));
box.appendChild(qChips([["auto","🎚️ Auto"],[0,"Fácil"],[1,"Médio"],[2,"Difícil"],[3,"Mestre"]],QD,function(v){QD=v;qSave("maratona-qdif",String(v));qHome();}));
if(!w.length){box.insertAdjacentHTML("beforeend","<p>Marque pelo menos 1 título como visto para jogar.</p>");return;}
box.appendChild(qBtn("▶ Partida (10 perguntas)"+(QPB?" · melhor: "+QPB+" pts":""),"",function(){qStart(0);}));
box.appendChild(qBtn("♾️ Infinito (sem fim, sem repetir)"+(QINF?" · recorde: "+QINF:""),"mini",function(){qStart(3);}));
box.appendChild(qBtn("❤️ Sobrevivência (3 vidas)"+(QSB?" · recorde: "+QSB:""),"mini",function(){qStart(1);}));
if(dn)box.insertAdjacentHTML("beforeend",'<p class="qinfo">📆 Desafio de hoje: <b>'+QDIA.ok+'/10</b> · '+QDIA.pts+' pts · '+QDS.n+(QDS.n===1?' dia seguido':' dias seguidos')+'. Volte amanhã!</p>');
else box.appendChild(qBtn("📆 Desafio do dia"+(QDS.d===qDay(-1)&&QDS.n?" · 🔥 "+QDS.n+" dias":""),"mini",function(){qStart(2);}));
if(QMISS.length)box.appendChild(qBtn("🔁 Rever o que errei ("+QMISS.length+")","mini",function(){qStart(0,true);}));
for(i=0;i<6;i++)if(QSTAT[i]&&QSTAT[i][1]>0){pc=Math.round(QSTAT[i][0]/QSTAT[i][1]*100);t.push(QMN[i].split(" ").slice(1).join(" ")+" "+pc+"% ("+QSTAT[i][1]+")");if(QSTAT[i][1]>=5&&pc<80&&(!wk||pc<wk[0]))wk=[pc,QMN[i]];}
if(t.length)box.insertAdjacentHTML("beforeend",'<p class="qinfo"><b>Seu desempenho</b><br>'+t.join(" · ")+(wk?'<br>🎯 Ponto fraco: '+wk[1]:'')+'</p>');}
function qStart(type,rev){QREV=!!rev&&QMISS.length>0&&type===0;
QG={type:type,n:0,N:(type===1||type===3)?9999999:QREV?Math.min(10,QMISS.length):10,ok:0,bst:0,pts:0,used:{},usedT:{},usedP:{},round:0,lastM:-1,tot:0,miss:[],lock:false,cur:null,t0:0,lives:3,f5:type===2?0:1,sk:type===2?0:1,lv:0,lv0:qEff(),mode:type===2?6:QM};
QR=type===2?qSeed("dia:"+hoje()):Math.random;qNext();}
function qNext(){var g=QG,box=$("qbody"),lv=qEff(),ms,m=-1,q=-1,i,k,hd,lf,bar,left=20;
if(g.type===1)lv=Math.min(3,lv+Math.floor(g.ok/5));if(g.type===3)lv=Math.min(3,lv+Math.floor(g.ok/6));if(g.type===2)lv=g.lv0;
if(g.type===1?g.lives<=0:g.n>=g.N){qEnd();return;}
g.lock=false;g.lv=lv;var pkc=qChoose();
if(!pkc){qHome();return;}
m=pkc[0];q=pkc[1];
k=qBuild(m,q,lv,pkc[2]);g.cur=k;g.t0=Date.now();
hd=g.type===3?'<span>♾️ #'+(g.n+1)+'</span><span>'+(g.round?'🔁 Rodada '+(g.round+1):'')+'</span><span>✅ '+g.ok+'</span>':g.type===1?'<span>#'+(g.n+1)+(g.round?' · 🔁'+(g.round+1):'')+'</span><span class="qhr">'+"❤️".repeat(g.lives)+"🖤".repeat(3-g.lives)+'</span><span>✅ '+g.ok+'</span>':'<span>'+(g.n+1)+'/'+g.N+'</span><div class="qbar"><i style="width:'+Math.round(g.n/g.N*100)+'%"></i></div><span>✅ '+g.ok+'</span>';
box.dataset.m=m;box.innerHTML='<div class="qhd">'+hd+'</div><p><small>'+(g.type===2?'📆 Desafio do dia · ':'')+QMN[m]+' · '+QN[lv]+(QD==="auto"&&g.type!==1&&g.type!==3?' (auto)':'')+(QREV?' · 🔁 Revisão':'')+(QST?' · 🔥 '+QST:'')+' · '+g.pts+' pts</small></p><p class="qq">'+k.txt+'</p>';
if(g.rnew){g.rnew=0;var rn=document.createElement("p");rn.className="qinfo";rn.textContent="🔁 As perguntas novas com os filmes que você já viu acabaram, então elas vão se repetir. Marque mais filmes como vistos para ter perguntas inéditas.";box.insertBefore(rn,box.querySelector(".qq").nextSibling);}
k.opts.forEach(function(o){var b=qBtn(o,"qo",function(){qAns(o);});b.dataset.v=o;box.appendChild(b);});
if(g.type===3)box.appendChild(qBtn("⏹️ Encerrar e ver resultado","mini",function(){qEnd();}));
if(g.type!==2&&(g.f5>0||g.sk>0)){lf=document.createElement("div");lf.className="qlf";
if(g.f5>0&&k.opts.length>=3){g.b5=qBtn("✂️ 50/50 ("+g.f5+")","",qFifty);lf.appendChild(g.b5);}
if(g.sk>0)lf.appendChild(qBtn("⏭️ Pular ("+g.sk+")","",qSkip));
if(lf.children.length)box.appendChild(lf);}
if(lv===3){var tm=document.createElement("div");tm.className="qtm";tm.innerHTML="<i></i>";box.appendChild(tm);bar=tm.firstChild;
requestAnimationFrame(function(){requestAnimationFrame(function(){bar.style.transition="width 20s linear";bar.style.width="0%";});});
QTM=setInterval(function(){left--;if(left<=0)qAns(null);},1000);}}
function qFifty(){var g=QG,k=g.cur,bs=$("qbody").querySelectorAll("button.qo"),w=[],i;if(g.lock||g.f5<1)return;g.f5--;k.h=true;
for(i=0;i<bs.length;i++)if(bs[i].dataset.v!==k.corr)w.push(bs[i]);
shuf(w).slice(0,Math.floor(bs.length/2)).forEach(function(b){b.disabled=true;b.className="qo dim";});
if(g.b5)g.b5.remove();}
function qSkip(){var g=QG;if(g.lock||g.sk<1)return;g.sk--;quizStop();qMark(g,g.cur);qNext();}
function qPts(g,k){var base=10*(g.lv+1),el=(Date.now()-g.t0)/1000,bonus=Math.max(0,Math.round(10-el)),mult=1+Math.min(QST,10)*.1;return Math.round((base+bonus)*mult*(k.h?.5:1));}
function qAns(v){var g=QG,k,box=$("qbody"),bs,i,b,mi,before=qLevel(),ok,up,fb,pts=0,x,last,gift=0;
if(!g||g.lock)return;g.lock=true;quizStop();k=g.cur;ok=v===k.corr;
qMark(g,k);g.tot++;if(g.type!==2){QRC.push(k.m+":"+k.q+":"+k.v);if(QRC.length>24)QRC.shift();}
QSTAT[k.m]=QSTAT[k.m]||[0,0];QSTAT[k.m][1]++;try{if(window.mrQS)window.mrQS(k.q,ok);}catch(e){}
if(ok){pts=qPts(g,k);g.pts+=pts;QSTAT[k.m][0]++;QZ++;QST++;g.ok++;if(g.type===3&&g.ok%10===0){g.f5++;g.sk++;gift=1;}if(QST>QBEST)QBEST=QST;if(QST>g.bst)g.bst=QST;mi=QMISS.indexOf(k.q);if(mi>-1)QMISS.splice(mi,1);qSave("maratona-quiz",String(QZ));sfxAch();}
else{QST=0;if(QMISS.indexOf(k.q)<0)QMISS.push(k.q);g.miss.push(k.q);if(g.type===1)g.lives--;sfxTick(false);}
qSave("maratona-qstat",QSTAT);qSaveM();
bs=box.querySelectorAll("button.qo");
for(i=0;i<bs.length;i++){b=bs[i];b.disabled=true;b.className=b.dataset.v===k.corr?"qo ok":b.dataset.v===v?"qo bad":"qo dim";}
x=box.querySelector(".qtm");if(x)x.remove();x=box.querySelector(".qlf");if(x)x.remove();
up=ok&&QD==="auto"&&g.type!==1&&g.type!==3&&qLevel()>before;
fb=document.createElement("p");fb.className="qinfo "+(ok?"qgood":v===null?"qtime":"qbadf");
fb.innerHTML=(ok?"✅ <b>Acertou!</b> +"+pts+" pts":v===null?"⏰ <b>Tempo esgotado!</b>":"❌ <b>Errou.</b>")+"<br>"+k.info+(up?"<br>🔥 Você subiu para o nível <b>"+QN[qLevel()]+"</b>!":"")+(QST>=3?"<br>🔥 Sequência: "+QST:"")+(gift?"<br>🎁 +1 50/50 e +1 pular":"");
box.appendChild(fb);
last=g.type===1?g.lives<=0:g.n+1>=g.N;
box.appendChild(qBtn(last?"Ver resultado ➜":"Próxima ➜","qn",function(){g.n++;qNext();}));
stats();}
function qEnd(){quizStop();QR=Math.random;var g=QG,box=$("qbody"),pc=g.type===1?0:Math.round(g.ok/g.N*100),u={},l=[],msg,rec="",h="",st,tx;
if(g.type===1){if(g.ok>QSB){QSB=g.ok;qSave("maratona-qsurv",String(QSB));rec=" 🏅 Novo recorde!";}
h='<p class="qtit">❤️ Sobrevivência</p><p class="qres">'+g.ok+'</p><p class="qc">acertos antes de perder as 3 vidas'+rec+'</p><p class="qc">'+g.pts+' pts · recorde: '+QSB+'</p>';
tx="❤️ Quiz Marvel · Sobrevivência: "+g.ok+" acertos · "+g.pts+" pts";}
else if(g.type===3){var pi=g.tot?Math.round(g.ok/g.tot*100):0;if(g.ok>QINF){QINF=g.ok;qSave("maratona-qinf",String(QINF));rec=" 🏅 Novo recorde!";}
h='<p class="qtit">♾️ Infinito</p><p class="qres">'+g.ok+'</p><p class="qc">acertos em '+g.tot+' perguntas ('+pi+'%)'+rec+'</p><p class="qc">'+g.pts+' pts · melhor sequência: '+g.bst+' · recorde: '+QINF+(g.round?' · '+(g.round+1)+' rodadas':'')+'</p>';
tx="♾️ Quiz Marvel · Infinito: "+g.ok+" acertos em "+g.tot+" · "+g.pts+" pts · 🔥 "+g.bst;}
else{msg=pc>=90?"🏆 Mestre do Multiverso!":pc>=70?"🦸 Herói de verdade!":pc>=50?"🛡️ Bom trabalho, continue treinando.":"📚 Reveja os filmes e tente de novo!";
if(g.type===0&&!QREV&&g.pts>QPB){QPB=g.pts;qSave("maratona-qpb",String(QPB));rec=" 🏅 Novo recorde!";}
if(g.type===2){QDIA={d:hoje(),ok:g.ok,pts:g.pts};qSave("maratona-qdia",QDIA);QDS.n=QDS.d===qDay(-1)?QDS.n+1:1;QDS.d=hoje();qSave("maratona-qdia-seq",QDS);}
h='<p class="qtit">'+(g.type===2?'📆 Desafio do dia':'Fim da partida')+'</p><p class="qres">'+g.ok+'/'+g.N+'</p><p class="qc">'+pc+'% de acertos · melhor sequência: '+g.bst+'</p><p class="qc"><b>'+g.pts+' pts</b>'+rec+'</p><p class="qc">'+msg+'</p>'+(g.type===2?'<p class="qc">🔥 '+QDS.n+(QDS.n===1?' dia seguido':' dias seguidos')+'</p>':'');
tx=(g.type===2?"📆 Desafio do dia":"🧠 Quiz Marvel")+" · "+g.ok+"/"+g.N+" ("+pc+"%) · "+g.pts+" pts · 🔥 "+g.bst;}
box.dataset.m="";box.innerHTML=h;
g.miss.forEach(function(q){if(!u[q]){u[q]=1;l.push(esc(qNm(q)));}});
if(l.length)box.insertAdjacentHTML("beforeend",'<p class="qinfo">Para rever: '+l.slice(0,6).join(", ")+(l.length>6?"…":"")+'</p>');
if(pc>=70||g.ok>=8){sfxAch();try{celebrate(true);}catch(e){}}
if(g.type!==2)box.appendChild(qBtn("🔄 Jogar de novo","",function(){qStart(g.type,QREV);}));
st=qBtn("📤 Compartilhar resultado","mini",function(){var t=tx+"\nMaratona Marvel";try{if(navigator.share){navigator.share({text:t});return;}}catch(e){}try{navigator.clipboard.writeText(t);st.textContent="Copiado! ✅";}catch(e){st.textContent="Não deu para copiar";}});
box.appendChild(st);
if(QMISS.length&&!QREV)box.appendChild(qBtn("🔁 Rever o que errei ("+QMISS.length+")","mini",function(){qStart(0,true);}));
box.appendChild(qBtn("⚙️ Voltar ao início do quiz","mini",function(){QREV=false;qHome();}));}
document.addEventListener("keydown",function(e){var bs,n;if($("qz").hidden||e.ctrlKey||e.metaKey||e.altKey)return;
if(e.key>="1"&&e.key<="9"){bs=$("qbody").querySelectorAll("button.qo");if(bs[+e.key-1]&&!bs[+e.key-1].disabled){bs[+e.key-1].click();e.preventDefault();}}
else if(e.key==="Enter"){n=$("qbody").querySelector("button.qn");if(n){n.click();e.preventDefault();}}});
$("qb").addEventListener("click",function(){QREV=false;quiz();});
$("qx").addEventListener("click",function(){quizStop();$("qz").hidden=true;});
$("qz").addEventListener("click",function(e){if(e.target===this){quizStop();this.hidden=true;}});
function showImg(u){$("sbody").innerHTML='<p>Segure a imagem para salvar ou compartilhar:</p><img alt="Cartão de progresso" style="width:100%;border-radius:12px" src="'+u+'">';}
$("sh").addEventListener("click",function(){
var W=1080,H=1440,c=document.createElement("canvas");c.width=W;c.height=H;
var x=c.getContext("2d"),n=total(),N=T.length,pct=Math.round(n/N*100),cs=getComputedStyle(document.documentElement);
function cv(k,d0){return (cs.getPropertyValue(k)||d0).trim()||d0;}
var ac=cv("--ac","#2fd36b"),g1=cv("--g1","#0f3a22"),bg=cv("--bg","#050805"),ink=cv("--ink","#e6f2e8"),mu=cv("--muted","#8fa896");
var h=mins(true)/60,ca=0,k,i,pf=h<20?"Recruta Esmeralda":h<60?"Herói Esmeralda":h<100?"Vingador Veterano":"Lenda do Multiverso";
for(k in ach)if(ach[k])ca++;
var days=Math.ceil((PREM-new Date())/864e5),AS={};try{AS=JSON.parse(localStorage.getItem("maratona-robo-acc")||"{}")||{};}catch(e){}
var stage=n>=N?4:pct>=75?3:pct>=50?2:pct>=25?1:0,say=["Bora começar! 🚀","Já peguei o ritmo! 🔥","Passou da metade! 💪","Reta final! 🏁","Missão cumprida! 👑"][stage];
function rr(a0,b0,w0,h0,r){x.beginPath();x.moveTo(a0+r,b0);x.arcTo(a0+w0,b0,a0+w0,b0+h0,r);x.arcTo(a0+w0,b0+h0,a0,b0+h0,r);x.arcTo(a0,b0+h0,a0,b0,r);x.arcTo(a0,b0,a0+w0,b0,r);x.closePath();}
var gr=x.createLinearGradient(0,0,0,H);gr.addColorStop(0,g1);gr.addColorStop(1,bg);x.fillStyle=gr;x.fillRect(0,0,W,H);
x.save();x.globalAlpha=.07;x.strokeStyle=ac;x.lineWidth=2;for(k=-H;k<W;k+=70){x.beginPath();x.moveTo(k,H);x.lineTo(k+H,0);x.stroke();}x.restore();
x.strokeStyle=ac;x.lineWidth=8;rr(30,30,W-60,H-60,46);x.stroke();
x.textAlign="center";x.fillStyle=ac;x.font="bold 72px Georgia,serif";x.fillText("MARATONA MARVEL",W/2,128);
x.fillStyle=ink;x.globalAlpha=.8;x.font="34px system-ui,sans-serif";x.fillText("Rumo a Vingadores: Doutor Destino",W/2,182);x.globalAlpha=1;
/* anel de progresso */
var rx=330,ry=650,rad=210;x.lineWidth=46;x.lineCap="round";x.strokeStyle="rgba(255,255,255,.12)";x.beginPath();x.arc(rx,ry,rad,0,7);x.stroke();
if(n>0){x.save();x.strokeStyle=ac;x.shadowColor=ac;x.shadowBlur=26;x.beginPath();x.arc(rx,ry,rad,-Math.PI/2,-Math.PI/2+Math.PI*2*(n/N));x.stroke();x.restore();}
x.fillStyle=ink;x.font="bold 130px system-ui,sans-serif";x.fillText(pct+"%",rx,ry+30);x.font="36px system-ui,sans-serif";x.fillStyle=mu;x.fillText(n+" de "+N+" títulos",rx,ry+90);
/* robô */
function robot(cx,cy,s){var g;x.save();x.translate(cx,cy);x.scale(s,s);x.lineJoin="round";
 if(AS.back==="cape"){g=x.createLinearGradient(0,60,0,310);g.addColorStop(0,"#e3283b");g.addColorStop(1,"#8f1020");x.fillStyle=g;x.beginPath();x.moveTo(-80,70);x.lineTo(80,70);x.lineTo(150,310);x.lineTo(-150,310);x.closePath();x.fill();}
 x.fillStyle="#cfd9df";rr(-148,115,38,110,19);x.fill();rr(110,115,38,110,19);x.fill();
 x.fillStyle="#f2f6f8";x.beginPath();x.arc(-129,238,24,0,7);x.fill();x.beginPath();x.arc(129,238,24,0,7);x.fill();
 g=x.createLinearGradient(-90,95,90,250);g.addColorStop(0,"#f4f8fa");g.addColorStop(1,"#a3b1ba");x.fillStyle=g;rr(-95,95,190,155,56);x.fill();x.lineWidth=4;x.strokeStyle="rgba(255,255,255,.8)";x.stroke();
 x.save();x.shadowColor=ac;x.shadowBlur=36;x.fillStyle=ac;x.beginPath();x.arc(0,172,30,0,7);x.fill();x.restore();x.fillStyle="rgba(255,255,255,.55)";x.beginPath();x.arc(-9,162,9,0,7);x.fill();
 x.strokeStyle="#9aa8b1";x.lineWidth=8;x.lineCap="round";x.beginPath();x.moveTo(0,-112);x.lineTo(0,-158);x.stroke();x.save();x.shadowColor=ac;x.shadowBlur=28;x.fillStyle=ac;x.beginPath();x.arc(0,-170,15,0,7);x.fill();x.restore();
 g=x.createLinearGradient(-120,-110,120,80);g.addColorStop(0,"#fbfdfe");g.addColorStop(1,"#a9b7c0");x.fillStyle=g;rr(-125,-115,250,195,68);x.fill();x.lineWidth=4;x.strokeStyle="rgba(255,255,255,.85)";x.stroke();
 x.fillStyle=ac;rr(-146,-35,24,76,11);x.fill();rr(122,-35,24,76,11);x.fill();
 x.fillStyle="#06150e";rr(-96,-76,192,116,46);x.fill();x.lineWidth=3;x.strokeStyle="rgba(255,255,255,.35)";x.stroke();
 x.save();x.shadowColor=ac;x.shadowBlur=24;x.fillStyle=ac;x.strokeStyle=ac;x.lineWidth=11;x.lineCap="round";
 if(pct>=50){x.beginPath();x.arc(-42,-12,20,Math.PI*1.1,Math.PI*1.9);x.stroke();x.beginPath();x.arc(42,-12,20,Math.PI*1.1,Math.PI*1.9);x.stroke();}
 else{x.beginPath();x.ellipse(-42,-16,14,19,0,0,7);x.fill();x.beginPath();x.ellipse(42,-16,14,19,0,0,7);x.fill();}
 x.restore();
 x.fillStyle="#2c3a33";rr(-30,52,16,9,4);x.fill();rr(-8,52,16,9,4);x.fill();rr(14,52,16,9,4);x.fill();
 if(AS.face==="glasses"){x.fillStyle="#0a0e11";x.strokeStyle="#000";x.lineWidth=6;rr(-98,-58,90,66,24);x.fill();x.stroke();rr(8,-58,90,66,24);x.fill();x.stroke();x.beginPath();x.moveTo(-8,-30);x.lineTo(8,-30);x.stroke();x.fillStyle="rgba(255,255,255,.18)";x.beginPath();x.moveTo(-84,-48);x.lineTo(-52,-48);x.lineTo(-74,-10);x.lineTo(-88,-10);x.closePath();x.fill();}
 if(AS.head==="helm"){g=x.createLinearGradient(0,-160,0,-40);g.addColorStop(0,"#eef3f6");g.addColorStop(1,"#7b8993");x.fillStyle=g;x.beginPath();x.moveTo(-126,-45);x.quadraticCurveTo(-126,-168,0,-168);x.quadraticCurveTo(126,-168,126,-45);x.closePath();x.fill();x.fillStyle=ac;rr(-14,-166,28,120,6);x.fill();x.fillStyle="rgba(0,0,0,.35)";rr(-118,-62,236,16,8);x.fill();}
 else if(AS.head==="tophat"){x.fillStyle="#12171a";rr(-100,-132,200,24,12);x.fill();rr(-62,-232,124,110,10);x.fill();x.fillStyle=ac;x.fillRect(-62,-152,124,18);}
 else if(AS.head==="grad"){x.fillStyle="#1b242c";x.beginPath();x.moveTo(0,-200);x.lineTo(140,-140);x.lineTo(0,-92);x.lineTo(-140,-140);x.closePath();x.fill();x.strokeStyle="#e0b43a";x.lineWidth=6;x.beginPath();x.moveTo(104,-136);x.lineTo(104,-60);x.stroke();x.fillStyle="#e0b43a";x.beginPath();x.arc(104,-54,10,0,7);x.fill();}
 else if(AS.head==="crown"){g=x.createLinearGradient(0,-215,0,-112);g.addColorStop(0,"#ffe58a");g.addColorStop(1,"#c98b17");x.fillStyle=g;x.beginPath();x.moveTo(-90,-112);x.lineTo(-90,-192);x.lineTo(-45,-150);x.lineTo(0,-214);x.lineTo(45,-150);x.lineTo(90,-192);x.lineTo(90,-112);x.closePath();x.fill();x.fillStyle="#e23a4e";x.beginPath();x.arc(0,-135,9,0,7);x.fill();}
 x.restore();}
/* balão do robô */
x.fillStyle="rgba(255,255,255,.12)";x.strokeStyle=ac;x.lineWidth=3;rr(640,330,380,86,30);x.fill();x.stroke();x.beginPath();x.moveTo(790,414);x.lineTo(815,450);x.lineTo(830,414);x.closePath();x.fillStyle="rgba(255,255,255,.12)";x.fill();x.stroke();
x.fillStyle=ink;x.font="bold 34px system-ui,sans-serif";x.fillText(say,830,386);
robot(810,700,1.02);
/* cartões de números */
function box(a0,e,v,l){x.fillStyle="rgba(255,255,255,.07)";rr(a0,930,300,140,28);x.fill();x.strokeStyle="rgba(255,255,255,.18)";x.lineWidth=2;x.stroke();x.fillStyle=ink;x.textAlign="center";x.font="bold 44px system-ui,sans-serif";x.fillText(e+" "+v,a0+150,1000);x.fillStyle=mu;x.font="26px system-ui,sans-serif";x.fillText(l,a0+150,1042);}
box(70,"⏱️",fm(mins(true))||"0min","assistidos");box(390,"🏅",String(ca),"conquistas");
if(days>0)box(710,"📅",days+" dias","para a estreia");else if(days===0)box(710,"📅","Hoje!","estreia de Doutor Destino");else box(710,"🎬","Em cartaz","Doutor Destino");
/* sagas */
x.textAlign="left";for(i=0;i<G.length;i++){var gg=G[i],tt=0,dn=0,yy=1128+i*44,j;for(j=gg.a;j<=gg.b;j++){tt++;if(seen[j])dn++;}
 x.fillStyle=ink;x.font="27px system-ui,sans-serif";x.fillText(gg.n,70,yy+19);x.fillStyle="rgba(255,255,255,.14)";rr(430,yy,470,24,12);x.fill();if(dn>0){x.fillStyle=ac;rr(430,yy,Math.max(24,470*dn/Math.max(1,tt)),24,12);x.fill();}
 x.fillStyle=mu;x.textAlign="right";x.fillText(dn+"/"+tt,1010,yy+19);x.textAlign="left";}
x.textAlign="center";x.fillStyle=ac;x.font="bold 30px system-ui,sans-serif";x.fillText("Perfil: "+pf+" · estreia em 17/12/2026",W/2,1372);
var url=c.toDataURL("image/png");
try{c.toBlob(function(bl){var f=new File([bl],"maratona-marvel.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:"Minha Maratona Marvel"}).catch(function(){showImg(url);});}else showImg(url);});}catch(e){showImg(url);}
});
document.addEventListener("visibilitychange",function(){document.documentElement.classList.toggle("pz",document.hidden);});
/* (pixel art do Thor removida) */
var RM=ANIMOFF();
function H(n){var x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x);}
var PCH={},PHI={};
function poster(i){
var PK=window.__PS>1?PHI:PCH,CK=window.__PS>1?i+"_"+window.__PS:i;if(PK[CK])return PK[CK];
var n=T[i].toLowerCase(),c=document.createElement("canvas"),g,h=0,k,hu,u=6,W=144,HH=192,col,a;
var PS=window.__PS>1?window.__PS:1;c.width=W*PS;c.height=HH*PS;g=c.getContext("2d");if(PS>1)g.scale(PS,PS);
for(k=0;k<n.length;k++)h=(h*31+n.charCodeAt(k))>>>0;hu=h%360;
function orb(x,y,r,c1,c2){var q=g.createRadialGradient(x-r*.35,y-r*.4,r*.1,x,y,r);q.addColorStop(0,c1);q.addColorStop(1,c2);g.fillStyle=q;g.beginPath();g.arc(x,y,r,0,7);g.fill();}
function ring(x,y,r,w,cl){g.strokeStyle=cl;g.lineWidth=w;g.beginPath();g.arc(x,y,r,0,7);g.stroke();}
function poly(p,f){g.beginPath();for(var j=0;j<p.length;j+=2)g[j?"lineTo":"moveTo"](p[j],p[j+1]);g.closePath();g.fillStyle=f;g.fill();}
function lg(y0,y1,s0,s1){var q=g.createLinearGradient(0,y0,0,y1);q.addColorStop(0,s0);q.addColorStop(1,s1);return q;}
function star(cx,cy,R,r,f){var p=[],j,t;for(j=0;j<10;j++){t=-Math.PI/2+j*Math.PI/5;p.push(cx+Math.cos(t)*(j%2?r:R),cy+Math.sin(t)*(j%2?r:R));}poly(p,f);}
g.scale(u,u);
g.fillStyle=lg(0,32,rgb(hu,.6,.22),rgb(hu,.55,.04));g.fillRect(0,0,24,32);
var rg=g.createRadialGradient(12,14,1,12,14,15);rg.addColorStop(0,rgb(hu,.85,.5));rg.addColorStop(1,rgb(hu,.5,.1));g.globalAlpha=.5;g.fillStyle=rg;g.fillRect(0,0,24,32);
g.globalAlpha=.85;g.fillStyle="#e6fbff";for(k=0;k<16;k++){g.beginPath();g.arc((h>>>k)%24,(h>>>(k+3))%17,.1+(k%3)*.07,0,7);g.fill();}g.globalAlpha=1;
g.shadowColor="rgba(0,0,0,.7)";g.shadowBlur=16;g.shadowOffsetY=9;g.lineCap="round";g.lineJoin="round";
var pt=h%4;g.save();g.shadowColor="transparent";g.globalAlpha=.22;g.strokeStyle=rgb(hu,.6,.75);g.fillStyle=rgb(hu,.6,.75);g.lineWidth=.12;
if(pt===0){for(k=0;k<14;k++){a=k*Math.PI/7;g.beginPath();g.moveTo(12,14);g.lineTo(12+Math.cos(a)*20,14+Math.sin(a)*20);g.stroke();}}
else if(pt===1){for(k=-4;k<9;k++){g.beginPath();g.moveTo(k*3,0);g.lineTo(k*3+14,22);g.stroke();}}
else if(pt===2){for(k=1;k<6;k++){g.beginPath();g.arc(12,14,k*3.2,0,7);g.stroke();}}
else{for(k=0;k<40;k++){g.beginPath();g.arc(1+(k%8)*3.2,2+Math.floor(k/8)*3.4,.18,0,7);g.fill();}}
g.restore();
g.save();g.translate(12,14);g.rotate(((h>>>5)%9-4)*.05);var zs=.9+((h>>>9)%5)*.035;g.scale(zs,zs);g.translate(-12,-14);
function glow(c,b){g.shadowOffsetY=0;g.shadowColor=c;g.shadowBlur=b;}
function drop(){g.shadowOffsetY=9;g.shadowColor="rgba(0,0,0,.7)";g.shadowBlur=16;}
function none(){g.shadowColor="transparent";}
function rr(x,y,w,h,r,f){g.beginPath();if(g.roundRect)g.roundRect(x,y,w,h,r);else g.rect(x,y,w,h);g.fillStyle=f;g.fill();}
function halo(c){none();orb(12,14,10.5,c+".38)",c+"0)");drop();}
if(/ferro|iron/.test(n)){halo("rgba(255,200,90,");orb(12,14,8.8,"#ffe08a","#b87a14");ring(12,14,7.7,.45,"#fff2c4");g.strokeStyle="#16384a";g.lineWidth=1.3;for(k=0;k<10;k++){a=k*.6283+.1;g.beginPath();g.arc(12,14,6.2,a,a+.42);g.stroke();}orb(12,14,4.4,"#16384a","#04101a");glow("#6fe3ff",26);orb(12,14,3,"#fff","#37c3ff");none();poly([12,11.7,14.2,15.5,9.8,15.5],"rgba(255,255,255,.92)");}
else if(/capit[aã]o am|america|am[eé]rica|soldado/.test(n)){halo("rgba(80,140,255,");orb(12,14,8.8,"#e8505e","#7a0f18");orb(12,14,7,"#fff","#b9c4cc");orb(12,14,5.3,"#d63a48","#7a0f18");orb(12,14,3.8,"#3b78b8","#12345a");none();star(12,14.1,3.3,1.35,"#fff");ring(12,14,8.7,.3,"rgba(255,255,255,.55)");g.fillStyle="rgba(255,255,255,.16)";g.beginPath();g.ellipse(9.4,10.2,3.2,1.5,-.7,0,7);g.fill();}
else if(/thor|ragnar|trov/.test(n)){halo("rgba(111,227,255,");glow("#6fe3ff",24);poly([17,1.5,11,10,14,10,8.5,20,18.5,8,14.6,8],"#d6f7ff");poly([4.5,3,8,8.5,6.2,9,3,14],"#9fe9ff");drop();g.fillStyle=lg(12.5,24,"#a87646","#4a2c14");g.fillRect(11,12.5,2.2,11);g.strokeStyle="#2a170a";g.lineWidth=.25;for(k=0;k<5;k++){g.beginPath();g.moveTo(11,14.6+k*1.7);g.lineTo(13.2,15.3+k*1.7);g.stroke();}ring(12.1,23.4,.9,.4,"#c9a06a");rr(5.5,5.5,13,7.5,.8,lg(5.5,13,"#f4f8fb","#5d6b77"));none();g.fillStyle="#38444e";g.fillRect(5.5,5.5,1.5,7.5);g.fillRect(17,5.5,1.5,7.5);g.fillStyle="rgba(20,30,40,.5)";g.fillRect(7,8.3,10,.5);g.fillStyle="#fff";g.fillRect(6.4,5.5,11.2,.7);}
else if(/hulk/.test(n)){halo("rgba(125,255,106,");rr(6.6,10,10.8,10.4,3,lg(10,20.4,"#9be88a","#1d6a28"));for(k=0;k<4;k++)orb(8.4+k*2.4,10,1.5,"#b8f5a5","#2c8a38");rr(5.4,14.6,5.4,2.7,1.35,"#79d36e");none();g.strokeStyle="#0f3d16";g.lineWidth=.28;for(k=0;k<3;k++){g.beginPath();g.moveTo(9.6+k*2.4,10.8);g.lineTo(9.6+k*2.4,14);g.stroke();}g.fillStyle="rgba(0,0,0,.22)";g.fillRect(6.6,18.4,10.8,2);drop();rr(7,20.2,10,2,.6,"#6a3d9a");}
else if(/vi[uú]va/.test(n)){halo("rgba(255,60,70,");orb(12,14,8.6,"#2a0f14","#0a0305");ring(12,14,8.6,.4,"#ff4b57");glow("#ff4b57",14);poly([7.2,8,16.8,8,13,14,16.8,20,7.2,20,11,14],lg(8,20,"#ff6a74","#a0121f"));none();g.fillStyle="rgba(255,255,255,.7)";g.fillRect(7.2,8,9.6,.5);g.fillRect(7.2,19.5,9.6,.5);}
else if(/pantera|wakanda/.test(n)){halo("rgba(155,107,255,");glow("#9b6bff",20);poly([6,6.5,9,10,15,10,18,6.5,18.8,14,15.6,20,12,21.8,8.4,20,5.2,14],lg(6,22,"#3a2470","#07030f"));g.strokeStyle="#c9a8ff";g.lineWidth=.35;g.stroke();glow("#e6d4ff",8);poly([8,13,11,14,10,15.2,7.6,14],"#f2e6ff");poly([16,13,13,14,14,15.2,16.4,14],"#f2e6ff");none();poly([10.6,17.6,13.4,17.6,12,19],"#c9a8ff");}
else if(/aranha|spider/.test(n)){halo("rgba(255,70,80,");glow("rgba(200,225,255,.8)",8);g.strokeStyle="rgba(240,248,255,.92)";g.lineWidth=.32;for(k=0;k<12;k++){a=k*Math.PI/6;g.beginPath();g.moveTo(12,14);g.lineTo(12+Math.cos(a)*9.4,14+Math.sin(a)*9.4);g.stroke();}for(k=1;k<4;k++)ring(12,14,k*2.7+.2,.3,"rgba(240,248,255,.92)");drop();orb(12,14,2.6,"#2a2a36","#000");none();poly([11,13.2,13,13.2,12,14.2],"#ff4b57");poly([11,15.2,13,15.2,12,14.2],"#ff4b57");}
else if(/formiga|ant-man|ant man|vespa/.test(n)){halo("rgba(255,70,90,");g.globalAlpha=.5;orb(7.6,13,3.6,"#fff","#8cf");orb(16.4,13,3.6,"#fff","#8cf");g.globalAlpha=1;g.strokeStyle="#5a0a14";g.lineWidth=.35;for(k=0;k<3;k++){g.beginPath();g.moveTo(10.6,13.4+k*1.8);g.lineTo(7.2-k*.4,15.2+k*2);g.moveTo(13.4,13.4+k*1.8);g.lineTo(16.8+k*.4,15.2+k*2);g.stroke();}orb(12,20,3.4,"#ec5260","#7a0f18");orb(12,14.8,2.6,"#ec5260","#7a0f18");orb(12,10.6,2.1,"#ec5260","#7a0f18");g.beginPath();g.moveTo(11.2,9);g.lineTo(9.8,6.8);g.moveTo(12.8,9);g.lineTo(14.2,6.8);g.stroke();}
else if(/guardi/.test(n)){halo("rgba(255,200,90,");g.save();g.translate(12,14);g.rotate(-.45);g.scale(1,.32);ring(0,0,10,.7,"rgba(255,229,138,.8)");g.restore();star(12,14.2,9,3.9,lg(5,23,"#fff0a8","#c8891a"));none();star(12,14.2,5.2,2.3,"rgba(120,70,0,.35)");orb(12,14.2,1.3,"#fff","#ffd36a");}
else if(/estranho|strange|multiverso/.test(n)){halo("rgba(255,155,47,");glow("#ff9b2f",24);ring(12,14,8.4,1.1,"#ffb347");g.setLineDash([1.1,.7]);ring(12,14,6.6,.8,"#ff9b2f");g.setLineDash([]);ring(12,14,4.8,.6,"#ffd08a");poly([12,9.4,16,11.7,16,16.3,12,18.6,8,16.3,8,11.7],"rgba(255,155,47,.18)");g.strokeStyle="#ffd08a";g.lineWidth=.3;g.stroke();for(k=0;k<12;k++){a=k*.5236;g.fillStyle="#ffe2b0";g.beginPath();g.arc(12+Math.cos(a)*8.4,14+Math.sin(a)*8.4,.3+(k%2)*.2,0,7);g.fill();}ring(12,14,1.8,.6,"#ff9b2f");}
else if(/vingadores|avengers/.test(n)){halo("rgba(90,160,255,");orb(12,14,8.8,"#4f8fd0","#12345a");orb(12,14,7.4,"#0c1c2c","#050b12");none();ring(12,14,7.4,.4,"#8fc4ff");g.strokeStyle=lg(7,20,"#ffffff","#9fb3c4");g.lineWidth=1.6;g.lineCap="round";g.beginPath();g.lineWidth=1.9;g.moveTo(7.2,8.2);g.lineTo(12,19.8);g.lineTo(16.8,8.2);g.stroke();none();star(12,10.9,1.3,.55,"#ffd36a");}
else if(/marvel|capit[aã]/.test(n)){halo("rgba(255,200,90,");orb(12,14,8.8,"#2a56a8","#0f2350");none();ring(12,14,8.8,.5,"#e04855");glow("#ffc34a",20);var sp=[];for(k=0;k<16;k++){a=-Math.PI/2+k*Math.PI/8;sp.push(12+Math.cos(a)*(k%2?2.6:7.6),14+Math.sin(a)*(k%2?2.6:7.6));}poly(sp,lg(6,22,"#fff0a8","#e0a020"));none();orb(12,14,1.8,"#fff","#ffd36a");}
else if(/x-men|wolverine|deadpool|logan/.test(n)){halo("rgba(255,200,90,");orb(12,14,8.8,"#2a2a34","#0a0a10");none();ring(12,14,8.8,.5,"#ffd36a");glow("#ffc34a",14);g.strokeStyle=lg(6,22,"#fff0a8","#c8891a");g.lineWidth=2.2;g.beginPath();g.moveTo(7.4,8.4);g.lineTo(16.6,19.6);g.moveTo(16.6,8.4);g.lineTo(7.4,19.6);g.stroke();}
else{if(h%3===0)poly([12,6,19,21,5,21],rgb(hu,.8,.6));else if(h%3===1)poly([12,5,18,14,12,23,6,14],rgb(hu,.8,.6));else orb(12,14,7,rgb(hu,.8,.75),rgb(hu,.7,.3));}
g.restore();g.shadowColor="transparent";g.shadowBlur=0;g.shadowOffsetY=0;
var nd=6+h%7;for(k=0;k<nd;k++){a=k/nd*6.283+(h%10)*.3;g.globalAlpha=.55;g.fillStyle="#e6fbff";g.beginPath();g.arc(12+Math.cos(a)*10.6,14+Math.sin(a)*10.6,.28,0,7);g.fill();}g.globalAlpha=1;
var sq=(/\b(\d)\b/.exec(n)||[])[1],tv=/s[eé]rie|temporada/.test(n);
if(sq||tv){g.fillStyle="rgba(0,0,0,.6)";g.beginPath();g.arc(20,4,2.6,0,7);g.fill();g.strokeStyle="#ffd36a";g.lineWidth=.3;g.stroke();g.fillStyle="#ffd36a";g.font="800 3px system-ui,sans-serif";g.textAlign="center";g.fillText(tv?"TV":sq,20,5.1);}
g.fillStyle=lg(22,32,"rgba(0,0,0,0)","rgba(0,0,0,.88)");g.fillRect(0,22,24,10);
g.setTransform(PS,0,0,PS,0,0);
var nm=T[i].replace(/\s*\((\d{4})\)\s*$/,""),yr=(T[i].match(/\((\d{4})\)\s*$/)||[])[1]||"",ws=nm.toUpperCase().split(" "),ln=[""],L;
var vg2=g.createRadialGradient(W/2,HH*.42,HH*.2,W/2,HH*.45,HH*.78);vg2.addColorStop(0,"rgba(0,0,0,0)");vg2.addColorStop(1,"rgba(0,0,0,.5)");g.fillStyle=vg2;g.fillRect(0,0,W,HH);
g.save();g.globalCompositeOperation="lighter";var flr=g.createLinearGradient(0,0,W,0);flr.addColorStop(0,"rgba(255,255,255,0)");flr.addColorStop(.5,"rgba(200,245,255,.32)");flr.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=flr;g.fillRect(0,HH*.44-.7,W,1.4);
var bkh=g.createRadialGradient(W/2,HH*.44,0,W/2,HH*.44,36);bkh.addColorStop(0,"rgba(255,255,255,.16)");bkh.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=bkh;g.fillRect(0,HH*.44-36,W,72);
for(k=0;k<7;k++){var bx=((h>>>(k*2))%130)+7,by=((h>>>(k+5))%110)+8,br=3+(h>>>k)%6,bg2=g.createRadialGradient(bx,by,0,bx,by,br);bg2.addColorStop(0,"rgba(255,255,255,.14)");bg2.addColorStop(.8,"rgba(255,255,255,.05)");bg2.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=bg2;g.beginPath();g.arc(bx,by,br,0,7);g.fill();}
g.restore();
var pl2=g.createLinearGradient(0,HH*.64,0,HH);pl2.addColorStop(0,"rgba(0,0,0,0)");pl2.addColorStop(.5,"rgba(0,0,0,.55)");pl2.addColorStop(1,"rgba(0,0,0,.88)");g.fillStyle=pl2;g.fillRect(0,HH*.64,W,HH*.36);
if(PS<3){var ab2=g.createLinearGradient(W*.2,0,W*.8,0);ab2.addColorStop(0,"rgba(0,0,0,0)");ab2.addColorStop(.5,rgb(hu,.85,.62));ab2.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=ab2;g.fillRect(W*.2,HH-47,W*.6,1.2);
g.font="700 14px Georgia,serif";g.textAlign="center";try{g.letterSpacing=".5px";}catch(e){}
ws.forEach(function(w){var t=ln[ln.length-1]?ln[ln.length-1]+" "+w:w;if(g.measureText(t).width>W-18&&ln[ln.length-1])ln.push(w);else ln[ln.length-1]=t;});
if(ln.length>2){ln=[ln[0],ln[1]+"…"];}
L=ln.length;var tg2=g.createLinearGradient(0,HH-52,0,HH-14);tg2.addColorStop(0,"#ffffff");tg2.addColorStop(1,"#cfe9d6");
ln.forEach(function(s2,j){var y2=(L===1?162:150)+j*16;g.save();g.shadowColor="rgba(0,0,0,.9)";g.shadowBlur=4;g.shadowOffsetY=1.5;g.lineWidth=2.6;g.strokeStyle="rgba(0,0,0,.55)";g.lineJoin="round";g.strokeText(s2,W/2,y2);g.restore();g.save();g.shadowColor=rgb(hu,.85,.55);g.shadowBlur=6;g.fillStyle=tg2;g.fillText(s2,W/2,y2);g.restore();});
try{g.letterSpacing="2px";}catch(e){}
if(yr){g.font="600 9px system-ui,sans-serif";g.fillStyle="rgba(190,255,215,.85)";g.fillText(yr,W/2,184);}
try{g.letterSpacing="0px";}catch(e){}}
var gl=g.createLinearGradient(0,0,W,HH*.75);gl.addColorStop(0,"rgba(255,255,255,.3)");gl.addColorStop(.45,"rgba(255,255,255,.05)");gl.addColorStop(.46,"rgba(255,255,255,0)");g.fillStyle=gl;g.fillRect(0,0,W,HH);
g.save();for(k=0;k<260;k++){g.fillStyle=k%2?"rgba(255,255,255,.04)":"rgba(0,0,0,.06)";g.fillRect(H(h+k)*W,H(h*3+k*7)*HH,.7,.7);}g.restore();
g.lineWidth=3;g.strokeStyle="rgba(255,255,255,.6)";g.beginPath();g.moveTo(1.5,HH-1.5);g.lineTo(1.5,1.5);g.lineTo(W-1.5,1.5);g.stroke();
g.strokeStyle="rgba(0,0,0,.6)";g.beginPath();g.moveTo(W-1.5,1.5);g.lineTo(W-1.5,HH-1.5);g.lineTo(1.5,HH-1.5);g.stroke();
g.lineWidth=1;g.strokeStyle="rgba(255,255,255,.22)";g.strokeRect(7.5,7.5,W-15,HH-15);
return PK[CK]=c.toDataURL("image/webp",PS>1?.95:.9);
}
window.mrPosterByTitle=function(t,ps){var i=T.indexOf(t);if(i<0)return "";window.__PS=ps||0;var r="";try{r=poster(i);}catch(e){}window.__PS=0;return r;};
function iconInit(){
var c=document.createElement("canvas"),g,y,hf,s=6,u;c.width=c.height=192;g=c.getContext("2d");g.imageSmoothingEnabled=false;
function r(x,yy,w,h,cl){g.fillStyle=cl;g.fillRect(x*s,yy*s,w*s,h*s);}
r(0,0,32,32,"#050805");r(1,1,30,30,"#0b2e19");r(2,2,28,28,"#07140c");
for(y=0;y<32;y++)for(u=0;u<32;u++)if((y*7+u*13)%11===0)r(u,y,1,1,"#2fd36b");
for(y=3;y<30;y++){hf=Math.round(Math.sqrt(1-Math.pow((y-16)/13.5,2))*11);r(16-hf,y,hf*2,1,"#0f3d22");r(16-hf,y,1,1,"#2fd36b");r(15+hf,y,1,1,"#2fd36b");}
r(11,8,10,17,"#b9c4bd");r(11,19,10,6,"#8b9791");r(12,7,8,1,"#b9c4bd");r(15,13,2,6,"#8b9791");r(12,22,8,1,"#4d5a53");
r(11,12,3,2,"#04100a");r(18,12,3,2,"#04100a");r(12,12,2,1,"#c9ff9e");r(19,12,2,1,"#c9ff9e");r(12,13,1,1,"#2fd36b");r(19,13,1,1,"#2fd36b");
r(13,20,6,1,"#4d5a53");r(10,10,1,12,"#04100a");r(21,10,1,12,"#04100a");r(11,9,1,1,"#e8f0f5");
var url="data:image/png;base64,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";[].forEach.call(document.querySelectorAll('link[rel="icon"],link[rel="apple-touch-icon"]'),function(l){l.href=url;});
}
$("vt").addEventListener("click",function(){
var ok=false;
ok=buzz([200,80,200]);
$("vs").textContent=!VIB?"Vibração desligada.":!navigator.vibrate?"Este navegador não suporta vibração.":(ok?"Vibração enviada. Se não sentiu, abra no Chrome.":"Vibração bloqueada aqui. Abra no Chrome.");
});
/* Tela de início */
var HOME=$("home"),HT=null,HR=0,HB=$("hbg"),hx=HB.getContext("2d"),HS=[],HW=0,HH=0,HBOLT=null,HNEXT=0,HFACT=-1;
(function(){var h=HOME.querySelector(".hin");if(h&&!HOME.querySelector(".hscr")){var w=document.createElement("div");w.className="hscr";HOME.insertBefore(w,h);w.appendChild(h);}})();
var FACTS=["Homem de Ferro (2008) foi o primeiro filme do Universo Cinematográfico Marvel.","Os Vingadores (2012) reuniu pela primeira vez vários heróis do MCU no mesmo filme.","Stan Lee fez pontas rápidas em muitos filmes da Marvel. Vale ficar de olho!","Cenas pós-créditos são tradição no MCU desde o primeiro filme, com a aparição de Nick Fury.","Guardiões da Galáxia (2014) ficou famoso pela trilha de músicas antigas tocadas num walkman.","Pantera Negra (2018) foi indicado ao Oscar de Melhor Filme.","O Doutor Destino estreou nos quadrinhos em Quarteto Fantástico #5, em 1962.","O Homem-Aranha estreou nos quadrinhos em 1962, na revista Amazing Fantasy #15.","Vingadores: Guerra Infinita e Ultimato foram dirigidos pelos irmãos Russo, que também dirigem Doutor Destino.","Robert Downey Jr. volta ao MCU para viver o Doutor Destino.","Depois de Doutor Destino, o próximo grande filme da saga é Vingadores: Guerras Secretas, previsto para dezembro de 2027.","Excelsior! O bordão favorito de Stan Lee.","Dica: toque nas estrelas depois de ver um filme para dar sua nota.","Dica: no resumo você pode compartilhar seu progresso como imagem.","Dica: faça um backup do progresso para não perder nada ao trocar de celular.","Dica: no Quiz, escolha a dificuldade que preferir ou deixe no Auto.","Dica: use o Plano semanal para saber quantas horas por semana você precisa assistir.","Dica: a Sessão de hoje monta uma fila de filmes do tamanho do tempo que você tem."];
var TLAB={azul:"Azul Real",lima:"Lima",magenta:"Magenta",coral:"Coral",vinho:"Vinho",cobre:"Cobre",grafite:"Grafite",turquesa:"Turquesa",menta:"Menta",gelo:"Gelo",eletrico:"Azul Elétrico",indigo:"Índigo",ametista:"Ametista",neon:"Rosa Neon",salmao:"Salmão",pessego:"Pêssego",ferrugem:"Ferrugem",bordo:"Bordô",amarelo:"Amarelo",antigo:"Dourado Antigo",oliva:"Oliva",areia:"Areia",custom:"Personalizada",esm:"Esmeralda",ouro:"Ouro",prata:"Prata",rubi:"Rubi",roxo:"Roxo",rosa:"Rosa",laranja:"Laranja",ciano:"Ciano"};
function p2(n){return n<10?"0"+n:String(n);}
function today0(){var n=new Date();return new Date(n.getFullYear(),n.getMonth(),n.getDate());}
function homeTick(){
var ms=PREM-new Date(),t,ids=["d","h","m","s"],v;
if(ms<=0){$("hmsg").textContent="🎬 Já estreou! Bom filme!";v=[0,0,0,0];}
else{t=Math.floor(ms/1000);v=[Math.floor(t/86400),Math.floor(t/3600)%24,Math.floor(t/60)%60,t%60];if($("hmsg").textContent!=="Estreia em 17/12/2026 nos cinemas do Brasil")$("hmsg").textContent="Estreia em 17/12/2026 nos cinemas do Brasil";}
for(var i=0;i<4;i++){var e=$("cd-"+ids[i]),tx=p2(v[i]),u;if(i===3){u=e.firstChild;if(u&&!u.children.length){var hh="",k;for(k=0;k<60;k++)hh+="<i>"+p2(k)+"</i>";u.innerHTML=hh;}if(u)u.style.transform="translate3d(0,calc("+(-v[3]*1.1)+"em - "+(v[3]*3)+"px),0)";}else if(e.textContent!==tx)e.textContent=tx;}
}
function phase(days){
if(PREM-new Date()<=0)return "🎬 Já estreou! Bom filme!";
if(days>60)return "Ainda dá tempo, mas não vacile! 💪";
if(days>30)return "Faltam menos de 60 dias! ⏳";
if(days>14)return "Faltam menos de 30 dias! Hora de acelerar. 🚀";
if(days>7)return "Faltam menos de 15 dias! Reta final. 🔥";
if(days>1)return "Menos de uma semana! Prepare a pipoca. 🍿";
if(days===1)return "É amanhã! 🍿";
return "É HOJE! Boa sessão! 🎬";
}
function renderHome(){
if(!HOME||HOME.hidden)return;
var n=total(),left=leftN(),days=Math.round((PREM-today0())/864e5),i,k,el;
$("hph").textContent=phase(days);
$("hbi").style.width=(n/T.length*100)+"%";
$("hpg").textContent="Você já viu "+n+" de "+T.length+" títulos ("+Math.round(n/T.length*100)+"%)";
$("hprf").style.strokeDashoffset=100-n/T.length*100;$("hprf").style.opacity=n?1:0;$("hprp").textContent=Math.round(n/T.length*100)+"%";$("hpr1").textContent=n+" de "+T.length+" títulos vistos";$("hpr2").textContent=left>0?"Faltam "+left+" para completar a maratona":"Maratona completa! 🎉";
/* próximo filme */
var o=ordList(),nx=-1;for(k=0;k<o.length;k++)if(!seen[o[k]]){nx=o[k];break;}
var wi=nowIdx();if(wi>-1)nx=wi;
el=$("hnx");
if(nx<0)el.innerHTML="<small>▶ Próximo para assistir</small><b>Fila zerada! 🎉</b>";
else{
el.innerHTML='<small>'+(wi>-1?"▶ Assistindo agora":"▶ Próximo para assistir")+'</small><b></b><span class="nd"></span><div class="na"><button type="button">'+(wi>-1?"✓ Terminei":"✓ Marcar como assistido")+'</button></div>';
el.querySelector("b").textContent=T[nx];
el.querySelector(".nd").textContent=fmt(nx)+(PC[nx]?" · 🎞️ "+pcLabel(PC[nx]):"");
el.querySelector("button").onclick=function(){els[nx].li.querySelector(".row").click();var c=$("hnx");c.classList.remove("ok");void c.offsetWidth;c.classList.add("ok");};
}
/* ritmo necessário */
var pc;
if(left===0)pc="Missão cumprida! 🎉 Você está pronto para a estreia.";
else if(PREM-new Date()<=0)pc="A estreia chegou. Faltaram "+left+" títulos.";
else if(days<1)pc="Faltam "+left+" títulos e só resta hoje. Corra! 🏃";
else{
var r=left<=days?(Math.floor(days/left)<=1?"1 filme por dia":"1 filme a cada "+Math.floor(days/left)+" dias"):"≈ "+String(Math.ceil(left/days*10)/10).replace(".",",")+" filmes por dia";
pc="Para chegar a tempo: "+r+" (≈ "+String(Math.round(mins(false)/60/days*10)/10).replace(".",",")+" h por dia)";
}
$("hpace").innerHTML="<small>📆 Ritmo necessário</small>";$("hpace").appendChild(document.createTextNode(pc));
/* quiz e conquistas */
var lv=QD==="auto"?qLevel():QD,un=AL.filter(function(a){return ach[a.id];});
un.sort(function(a,b){return (ach[b.id]-ach[a.id])||(AL.indexOf(b)-AL.indexOf(a));});
el=$("hqa");el.innerHTML="<small>🏅 Quiz e conquistas</small>";
var l1=document.createElement("div");l1.textContent="Quiz: nível "+QN[lv]+(QD==="auto"?" (auto)":"")+" · "+QZ+" acertos";el.appendChild(l1);
var l2=document.createElement("div");l2.textContent="Conquistas: "+un.length+"/"+AL.length;el.appendChild(l2);
var l3=document.createElement("div");
un.slice(0,5).forEach(function(a){var sp=document.createElement("span");sp.className="hbd";sp.textContent=a.e;sp.title=a.n;l3.appendChild(sp);});
el.appendChild(l3);
if(un.length){var l4=document.createElement("div");l4.textContent="Última: "+un[0].e+" "+un[0].n;el.appendChild(l4);}
/* curiosidade */
$("hfact").innerHTML="<small>💡 Você sabia?</small>";$("hfact").appendChild(document.createTextNode(FACTS[HFACT]));
/* melhorias da tela inicial */
bkRem();var hr=new Date().getHours(),SAGC=["#f2c94c","#9b6bff","#ff5a5a","#4fd1c5","#6fa8ff"],sg=$("hseg"),sl=$("hsl"),sk=streak(),dn=0,kk,gi2=-1,due;
$("hk").textContent=(hr<12?"Bom dia":hr<18?"Boa tarde":"Boa noite")+", maratonista · Maratona Marvel";
sg.innerHTML="";sl.innerHTML="";
G.forEach(function(g,gi){var d=0,tt=g.b-g.a+1,dv=document.createElement("div"),iv=document.createElement("i"),lg=document.createElement("span"),ci=document.createElement("i");for(var j=g.a;j<=g.b;j++)if(seen[j])d++;dv.style.flexGrow=tt;iv.style.width=d/tt*100+"%";iv.style.background=SAGC[gi];dv.title=g.n+": "+d+"/"+tt;dv.appendChild(iv);sg.appendChild(dv);ci.style.background=SAGC[gi];lg.appendChild(ci);lg.appendChild(document.createTextNode(g.n.replace(/^Saga d[oa] /,"")+" "+d+"/"+tt));sl.appendChild(lg);if(nx>=g.a&&nx<=g.b)gi2=gi;});
for(kk in dts)if(dts[kk]===hoje())dn++;
$("hstk").textContent=sk.cur>0?"🔥 "+sk.cur+(sk.cur===1?" dia seguido":" dias seguidos"):"🔥 Comece sua sequência hoje";
$("hday").textContent=left>0?"🎯 Hoje: "+dn+"/"+Math.max(1,Math.ceil((left+dn)/Math.max(days,1))):"🎯 Tudo visto!";
if(nx>=0){$("hnx").style.setProperty("--sc",gi2>=0?SAGC[gi2]:"");var sd=$("hnx").querySelector(".nd");if(sd&&gi2>=0)sd.textContent=G[gi2].n+" · "+sd.textContent;}
due=$("bks").textContent.indexOf("⚠️")>-1;$("hbk").hidden=!due;if(due)$("hbk").textContent="⚠️ Faça um backup do seu progresso (toque aqui)";
/* patente, missões, calendário, marcos */
var xp=xpNow(),ri=rkIdx(xp),rk=RANKS[ri],nr=RANKS[ri+1],mc=misCheck(),hc,cl,dd,ky,cn,cc={},p100=n/T.length*100;
$("hrank").innerHTML="<small>🎖️ Patente</small><b>"+rk[2]+" "+rk[1]+" · "+xp+" XP</b><div class='hbar'><i style='width:"+(nr?(xp-rk[0])/(nr[0]-rk[0])*100:100)+"%'></i></div><span class='nd'>"+(nr?"Faltam "+(nr[0]-xp)+" XP para "+nr[1]:"Patente máxima! 🌀")+"</span>";
hc="<small>🎯 Missões do dia (+50 XP cada)</small>";
MD.forEach(function(m){var ok=MIS.done.indexOf(m.id)>-1;hc+="<div class='hmi"+(ok?" ok":"")+"'><span>"+(ok?"✅ ":"⬜ ")+m.t+"</span><span>"+Math.min(mc[m.k],m.g)+"/"+m.g+"</span></div>";});
$("hmis").innerHTML=hc;
for(kk in dts)if(dts[kk])cc[dts[kk]]=(cc[dts[kk]]||0)+1;
cl=$("hcal");cl.innerHTML="";for(dd=27;dd>=0;dd--){var dy=new Date();dy.setDate(dy.getDate()-dd);ky=dy.getFullYear()+"-"+("0"+(dy.getMonth()+1)).slice(-2)+"-"+("0"+dy.getDate()).slice(-2);cn=cc[ky]||0;var ce=document.createElement("i");ce.className=(cn?"c"+Math.min(cn,3):"")+(dd===0?" td":"");ce.title=dbr(ky)+": "+cn+(cn===1?" título":" títulos");cl.appendChild(ce);}
Array.prototype.forEach.call($("hsw").querySelectorAll(".tk"),function(t){t.className="tk"+(p100>=+t.getAttribute("data-p")?" on":"");});
$("hdb").textContent=(days>0&&days<=30&&left>0)?"⏳ Faltam "+days+(days===1?" dia":" dias"):"";
/* troca rápida de cor */
try{hxtra();}catch(e){}return;el=null;
var lb=document.createElement("span");lb.textContent="Cor:";el.appendChild(lb);
for(k in TEMAS)(function(k){var b=document.createElement("button");b.type="button";b.className="hdot"+(TEMA===k?" on":"");b.style.background=TEMAS[k].ac;b.setAttribute("aria-label","Tema "+(TLAB[k]||k));b.title=TLAB[k]||k;
b.onclick=function(){TEMA=k;try{localStorage.setItem("maratona-tema",TEMA);}catch(e){}applyTheme();renderHome();};el.appendChild(b);})(k);
}
/* extras da tela de início: saudação + semana */
function hxtra(){var h=new Date().getHours(),g=$("hgr"),w=$("hwk"),i,d,k,c,n=0,s="",nm=["S","T","Q","Q","S","S","D"],t0=new Date(),dw=(t0.getDay()+6)%7,cnt={},kk;
if(g)g.textContent=(h<5?"🌙 Boa madrugada":h<12?"☀️ Bom dia":h<18?"🌤️ Boa tarde":"🌙 Boa noite")+", herói!";
if(!w)return;for(kk in dts)if(dts[kk])cnt[dts[kk]]=(cnt[dts[kk]]||0)+1;
for(i=0;i<7;i++){d=new Date(t0.getFullYear(),t0.getMonth(),t0.getDate()-dw+i);k=d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);c=cnt[k]||0;n+=c;s+='<i class="'+(c?"on":"")+(i===dw?" td":"")+'"><b>'+nm[i]+'</b>'+(c||"·")+'</i>';}
w.innerHTML='<span>📆 Esta semana: <b>'+n+'</b> '+(n===1?"título":"títulos")+'</span><div>'+s+'</div>';}
/* fundo animado em pixel art */
function hbInit(){
var i,c,nw=Math.max(40,Math.ceil(window.innerWidth*.75)),nh=Math.max(60,Math.ceil(window.innerHeight*.75));if(HW&&Math.abs(nw-HW)<8&&Math.abs(nh-HH)<200)return;HW=nw;HH=nh;HB.width=HW;HB.height=HH;HS=[];c=window.__eco?60:130;
for(i=0;i<c;i++)HS.push([Math.random()*2-1,Math.random()*2-1,Math.random(),Math.random()*6.28]);
}
function hbBolt(){var x=Math.floor(HW*(.15+Math.random()*.7)),y=0,pts=[[x,0]];while(y<HH*.6){y+=5+Math.floor(Math.random()*5);x+=Math.floor(Math.random()*9)-4;pts.push([x,y]);}return {t:performance.now(),p:pts};}
function hbDisc(g,cx,cy,r){var dx,dy;for(dy=-r;dy<=r;dy++)for(dx=-r;dx<=r;dx++)if(dx*dx+dy*dy<=r*r)g.fillRect(cx+dx,cy+dy,1,1);}
var HGC=[[242,201,76],[155,107,255],[255,90,90],[79,209,197],[111,168,255]];
function hbShard(g,x,y,s,a,rgb,al){var V=[[1,0,0],[-1,0,0],[0,1.5,0],[0,-1.5,0],[0,0,1],[0,0,-1]],F=[[0,2,4],[4,2,1],[1,2,5],[5,2,0],[0,4,3],[4,1,3],[1,5,3],[5,0,3]],cy=Math.cos(a),sy=Math.sin(a),cx=Math.cos(a*.7),sx=Math.sin(a*.7),T=V.map(function(p){var X=p[0]*cy+p[2]*sy,Z=-p[0]*sy+p[2]*cy;return [X,p[1]*cx-Z*sx,p[1]*sx+Z*cx];});
F.map(function(f){var A=T[f[0]],B=T[f[1]],C=T[f[2]],nx=(B[1]-A[1])*(C[2]-A[2])-(B[2]-A[2])*(C[1]-A[1]),ny=(B[2]-A[2])*(C[0]-A[0])-(B[0]-A[0])*(C[2]-A[2]),nz=(B[0]-A[0])*(C[1]-A[1])-(B[1]-A[1])*(C[0]-A[0]),l=Math.hypot(nx,ny,nz)||1;if((A[0]+B[0]+C[0])*nx+(A[1]+B[1]+C[1])*ny+(A[2]+B[2]+C[2])*nz<0){nx=-nx;ny=-ny;nz=-nz;}return {p:[A,B,C],z:A[2]+B[2]+C[2],b:Math.max(0,(nx*-.4+ny*-.6+nz*-.7)/l)*.7+.3};}).sort(function(p,q){return q.z-p.z;}).forEach(function(f){g.beginPath();f.p.forEach(function(p,i){if(i)g.lineTo(x+p[0]*s,y+p[1]*s);else g.moveTo(x+p[0]*s,y+p[1]*s);});g.closePath();g.fillStyle="rgb("+Math.round(rgb[0]*f.b)+","+Math.round(rgb[1]*f.b)+","+Math.round(rgb[2]*f.b)+")";g.globalAlpha=al;g.fill();g.globalAlpha=al*.7;g.strokeStyle="rgba(255,255,255,.35)";g.lineWidth=Math.max(.6,s/30);g.stroke();});g.globalAlpha=1;}
var HGLS,HFOG=[6,18,12],HSPR={},HGVS_S="attribute vec4 aS;attribute float aK;uniform float uT;uniform float uK;varying float vA;varying float vK;void main(){float z=fract(aS.z-uT*0.035)*0.95+0.05;float x=aS.x/(z*2.2);float y=0.24-aS.y/(z*2.2);gl_Position=vec4(x,y,0.0,1.0);gl_PointSize=max(0.7,(1.0-z)*2.4+0.6)*uK*1.8;vA=min(1.0,(1.0-z)*1.5+0.12)*(0.6+0.4*sin(uT*1.5+aS.w));vK=aK;}",
HGFS_S="precision mediump float;varying float vA;varying float vK;uniform vec3 uAc;void main(){float d=length(gl_PointCoord-vec2(0.5));float a=(1.0-smoothstep(0.1,0.5,d))*vA;vec3 c=mix(vec3(0.91,0.94,0.96),uAc,vK);gl_FragColor=vec4(c*a,a);}",
HGVS_M="attribute vec3 aP;attribute vec3 aN;uniform vec2 uCen;uniform vec2 uRes;uniform float uS;uniform mat3 uR;varying vec3 vN;void main(){vec3 w=uR*(aP*uS);vec2 px=uCen+w.xy;vN=uR*aN;gl_Position=vec4(px.x/uRes.x*2.0-1.0,1.0-px.y/uRes.y*2.0,clamp(w.z/(uS*3.0),-0.9,0.9),1.0);}",
HGFS_M="precision mediump float;varying vec3 vN;uniform vec3 uC;uniform float uA;uniform float uF;void main(){vec3 n=normalize(vN);float df=max(dot(n,vec3(-0.3904,-0.5855,-0.6831)),0.0)*0.7+0.3;float sp=pow(max(dot(n,vec3(-0.214,-0.3209,-0.9226)),0.0),28.0)*0.25;vec3 c=uC*df+vec3(sp);c=mix(c,vec3(0.024,0.07,0.047),uF);gl_FragColor=vec4(c*uA,uA);}";
function hbSpr(cl,r){var k=cl+r,c=HSPR[k],g,x;if(!c){c=document.createElement("canvas");c.width=c.height=r*2;x=c.getContext("2d");g=x.createRadialGradient(r,r,0,r,r,r);g.addColorStop(0,cl);g.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=g;x.fillRect(0,0,r*2,r*2);HSPR[k]=c;}return c;}
function hbRgb(h){h=(h||"").replace("#","");if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];var n=parseInt(h,16);return h.length!==6||isNaN(n)?[47,211,107]:[n>>16,n>>8&255,n&255];}
function hbSd(i,t,K){var L=i%3,q=(i*83)%100/100,r=[12,9,6][L]*K,sp=[10,7,4][L];return {x:(i%2?HW*(.93+q*.07):HW*(.07-q*.07))+Math.sin(t*.5+i)*4*K,y:HH+r*3-((t*sp*K+i*140*K)%(HH+r*6)),s:r,a:t*(.35+i*.06)+i,rgb:HGC[i%5],al:[.4,.3,.22][L],f:[0,.25,.55][L],L:L};}
function hbMist(g,t,K,qv){var i,m=qv>=1?1:.6;for(i=0;i<3;i++){g.globalAlpha=(.07+.03*Math.sin(t*.3+i*2))*m;g.drawImage(hbSpr(i===1?"#9be7ff":ACC,32),HW*(.2+.3*i)+Math.sin(t*.1+i)*30*K-HW*.4,HH*(.25+.22*i)-HW*.4,HW*.8,HW*.8);}g.globalAlpha=1;}
function hbShoot(g,now,K){var S=window.__ss||(window.__ss={n:now+3000+Math.random()*4000,a:0,x:0,y:0}),p,x,y,k;
if(!S.a&&now>S.n){S.a=now;S.x=HW*(.1+Math.random()*.6);S.y=HH*(.05+Math.random()*.3);S.n=now+7000+Math.random()*9000;}
if(S.a){p=(now-S.a)/750;if(p>=1){S.a=0;return;}x=S.x+p*HW*.3;y=S.y+p*HH*.1;g.strokeStyle="#fff";g.lineWidth=1.6*K;g.lineCap="round";
for(k=0;k<4;k++){g.globalAlpha=(1-p)*.8*(1-k*.22);g.beginPath();g.moveTo(x-k*HW*.025,y-k*HH*.008);g.lineTo(x-(k+1)*HW*.025,y-(k+1)*HH*.008);g.stroke();}g.globalAlpha=1;}}
function hglInit(H){var cv=document.createElement("canvas"),g,ps,pm,ob,o;cv.width=HW;cv.height=HH;g=H.ctx(cv);if(!g)return null;ps=H.prog(g,HGVS_S,HGFS_S);pm=H.prog(g,HGVS_M,HGFS_M);if(!ps||!pm)return null;
ob=H.flat({V:[[1,0,0],[-1,0,0],[0,1.5,0],[0,-1.5,0],[0,0,1],[0,0,-1]],F:[[0,2,4],[4,2,1],[1,2,5],[5,2,0],[0,4,3],[4,1,3],[1,5,3],[5,0,3]]});
o={cv:cv,g:g,H:H,ps:ps,pm:pm,w:HW,h:HH,ob:H.buf(g,ob),on:ob.length/6,sb:null,hs:null,bad:false,pc:0,pf:0,px:new Uint8Array(4),
P:{aS:g.getAttribLocation(ps,"aS"),aK:g.getAttribLocation(ps,"aK"),uT:g.getUniformLocation(ps,"uT"),uK:g.getUniformLocation(ps,"uK"),uAc:g.getUniformLocation(ps,"uAc")},
M:{aP:g.getAttribLocation(pm,"aP"),aN:g.getAttribLocation(pm,"aN"),uCen:g.getUniformLocation(pm,"uCen"),uRes:g.getUniformLocation(pm,"uRes"),uS:g.getUniformLocation(pm,"uS"),uR:g.getUniformLocation(pm,"uR"),uC:g.getUniformLocation(pm,"uC"),uA:g.getUniformLocation(pm,"uA"),uF:g.getUniformLocation(pm,"uF")}};
cv.addEventListener("webglcontextlost",function(e){e.preventDefault();o.bad=true;window.__glok=false;});return o;}
function hbGLget(){if(HGLS!==undefined)return HGLS&&!HGLS.bad?HGLS:null;HGLS=null;var H=window.__glh;if(!H||window.__eco||H.off())return null;try{HGLS=hglInit(H);}catch(e){HGLS=null;}return HGLS;}
function hbGLdraw(o,t,K,qv,n,nn){var g=o.g,H=o.H,P=o.P,M=o.M,i,L,sd,ac=hbRgb(ACC),a=[],first=null;
if(o.w!==HW||o.h!==HH){o.cv.width=HW;o.cv.height=HH;o.w=HW;o.h=HH;}
if(o.hs!==HS){for(i=0;i<HS.length;i++)a.push(HS[i][0],HS[i][1],HS[i][2],HS[i][3],i%5?0:1);o.sb=H.buf(g,a);o.hs=HS;}
g.viewport(0,0,HW,HH);g.clearColor(0,0,0,0);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT);g.enable(g.BLEND);g.blendFunc(g.ONE,g.ONE_MINUS_SRC_ALPHA);g.disable(g.DEPTH_TEST);
g.useProgram(o.ps);g.bindBuffer(g.ARRAY_BUFFER,o.sb);g.enableVertexAttribArray(P.aS);g.vertexAttribPointer(P.aS,4,g.FLOAT,false,20,0);g.enableVertexAttribArray(P.aK);g.vertexAttribPointer(P.aK,1,g.FLOAT,false,20,16);
g.uniform1f(P.uT,t);g.uniform1f(P.uK,K);g.uniform3f(P.uAc,ac[0]/255,ac[1]/255,ac[2]/255);g.drawArrays(g.POINTS,0,nn);g.disableVertexAttribArray(P.aS);g.disableVertexAttribArray(P.aK);
g.useProgram(o.pm);g.bindBuffer(g.ARRAY_BUFFER,o.ob);g.enableVertexAttribArray(M.aP);g.vertexAttribPointer(M.aP,3,g.FLOAT,false,24,0);g.enableVertexAttribArray(M.aN);g.vertexAttribPointer(M.aN,3,g.FLOAT,false,24,12);g.uniform2f(M.uRes,HW,HH);g.enable(g.DEPTH_TEST);g.depthFunc(g.LESS);
for(L=2;L>=0;L--)for(i=0;i<n;i++)if(i%3===L){sd=hbSd(i,t,K);g.clear(g.DEPTH_BUFFER_BIT);g.uniform2f(M.uCen,sd.x,sd.y);g.uniform1f(M.uS,sd.s);g.uniformMatrix3fv(M.uR,false,H.rot(sd.a,sd.a*.7));g.uniform3f(M.uC,sd.rgb[0]/255,sd.rgb[1]/255,sd.rgb[2]/255);g.uniform1f(M.uA,sd.al);g.uniform1f(M.uF,sd.f);g.drawArrays(g.TRIANGLES,0,o.on);if(!first&&sd.x>2&&sd.x<HW-2&&sd.y>2&&sd.y<HH-2)first=sd;}
if(o.pc<3&&first){o.pc++;g.readPixels(Math.round(first.x),Math.round(HH-first.y),1,1,g.RGBA,g.UNSIGNED_BYTE,o.px);if(o.px[3]===0)o.pf++;if(o.pf>=3){o.bad=true;window.__glok=false;}}}
function hb3d(now){var g=hx,t=RM?0:now/1000,K=HW/400,cx=HW/2,cy=HH*.38,i,s,z,r,L,sd,rg,gl,qv=window.__eco?0:(window.__q==null?2:window.__q),n=qv>=2?6:qv===1?4:3,nn=Math.floor(HS.length*(qv>=2?1:qv===1?.6:.35));
hbMist(g,t,K,qv);
gl=hbGLget();
if(gl){try{hbGLdraw(gl,t,K,qv,n,nn);g.drawImage(gl.cv,0,0,HW,HH);}catch(e){gl.bad=true;window.__glok=false;}}
if(!gl||gl.bad){
for(i=0;i<nn;i++){s=HS[i];z=((s[2]-t*.035)%1+1)%1*.95+.05;r=Math.max(.7,(1-z)*2.4+.6)*K;
g.globalAlpha=Math.min(1,(1-z)*1.5+.12)*(RM?.8:.6+.4*Math.sin(t*1.5+s[3]));g.fillStyle=i%5?"#e8f0f5":ACC;g.fillRect(cx+s[0]*HW*.5/(z*2.2)-r/2,cy+s[1]*HH*.5/(z*2.2)-r/2,r,r);}
g.globalAlpha=1;
for(L=2;L>=0;L--){if(L===2&&qv>=1&&g.filter!==undefined)g.filter="blur("+(1.1*K)+"px)";
for(i=0;i<n;i++)if(i%3===L){sd=hbSd(i,t,K);rg=[sd.rgb[0]*(1-sd.f)+HFOG[0]*sd.f,sd.rgb[1]*(1-sd.f)+HFOG[1]*sd.f,sd.rgb[2]*(1-sd.f)+HFOG[2]*sd.f];hbShard(g,sd.x,sd.y,sd.s,sd.a,rg,sd.al);}
if(L===2&&g.filter!==undefined)g.filter="none";}}
if(!RM&&qv>0)hbShoot(g,now,K);}
document.addEventListener("visibilitychange",function(){if(!document.hidden&&!HOME.hidden&&!HR&&!RM)HR=requestAnimationFrame(hbFrame);});
["pointerdown","pointermove","keydown","touchstart","wheel"].forEach(function(e){addEventListener(e,function(){window.__ia=performance.now();},{passive:true});});window.__ia=performance.now();
function hbFrame(now){if(HOME.hidden||document.hidden){HR=0;return;}
var rg=now-(window.__rl||now),qv;window.__rl=now;if(rg>0&&rg<400)window.__rg=(window.__rg||16.7)*.93+rg*.07;
if(window.__q==null)window.__q=window.__eco?0:2;
if(!window.__qs)window.__qs=now;
if(!window.__eco&&window.__q>0&&now-window.__qs>4000&&now-(window.__qt||0)>2500){window.__qt=now;if(window.__rg>26){window.__q--;window.__rg=16.7;}}
qv=window.__eco?0:window.__q;
if(now-(window.__hl||0)<Math.max(qv>=2?33:qv===1?50:90,now-(window.__ia||0)>8000?66:0)){HR=requestAnimationFrame(hbFrame);return;}window.__hl=now;
if(window.__bv!==false)bannerDraw();
var i,s;
if(HOME.hidden){HR=0;return;}
hx.globalAlpha=1;hx.clearRect(0,0,HW,HH);hb3d(now);
if(RM){HR=0;return;}
if(false&&now>HNEXT){HBOLT=hbBolt();HNEXT=now+3500+Math.random()*3500;}
if(HBOLT){
var age=now-HBOLT.t;
if(age<260){
var f=1-age/260,P=HBOLT.p,j,q,a,b2;
hx.globalAlpha=.12*f;hx.fillStyle=ACC;hx.fillRect(0,0,HW,HH);
hx.globalAlpha=f;
hx.beginPath();hx.moveTo(P[0][0],P[0][1]);for(j=1;j<P.length;j++)hx.lineTo(P[j][0],P[j][1]);hx.lineJoin="round";hx.lineWidth=3*HW/400;hx.strokeStyle=ACC;hx.stroke();hx.lineWidth=1.2*HW/400;hx.strokeStyle="#fff";hx.stroke();
}else HBOLT=null;
}
HR=requestAnimationFrame(hbFrame);
}
function homeHide0(){HOME.hidden=true;document.documentElement.classList.remove("hon");clearInterval(HT);if(HR){cancelAnimationFrame(HR);HR=0;}}
var DKB1=0,DKB2=0,TB=false,DKI=false,DKFN=null,DKD=0,DKS=0,DKE=0,DKT0=0,DKSEEN={};
function dkGlyphs(){var s='<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">',r,c,k,x,y,n,a,b;
for(r=0;r<9;r++){for(c=0;c<5;c++){if(Math.random()<.14)continue;x=14+c*16;y=12+r*13;n=2+Math.floor(Math.random()*3);s+='<path d="';
for(k=0;k<n;k++){a=Math.random()*10;b=Math.random()*10;s+=(k?'L':'M')+(x+a).toFixed(1)+' '+(y+b*(k%2?1:.4)).toFixed(1);}
s+='"/>';}}
s+='<circle cx="50" cy="70" r="20" stroke-width="1.4"/><path d="M50 52L67 82H33Z" stroke-width="1.2"/><circle cx="50" cy="71" r="4" fill="currentColor"/></svg>';return s;}
/* tudo (runas, paginas, faiscas) e gerado uma unica vez; depois so se reinicia a animacao */
function dkInit(){
var o=$("dkh"),sl=o.querySelector(".sl"),cv=sl.querySelector(".cv"),stg=o.querySelector(".stage"),i,p,q,h="",an,
em='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="31" stroke-width="2.4"/><circle cx="50" cy="50" r="24" stroke-width="1.2"/><path d="M50 22L74 64H26Z" stroke-width="2"/><path d="M28 50Q50 32 72 50Q50 68 28 50Z" stroke-width="2" fill="#050505"/><circle cx="50" cy="50" r="6" fill="currentColor" stroke="currentColor"/><g stroke-width="2">';
for(i=0;i<12;i++){an=i*Math.PI/6;em+='<path d="M'+(50+34*Math.cos(an)).toFixed(1)+' '+(50+34*Math.sin(an)).toFixed(1)+'L'+(50+44*Math.cos(an)).toFixed(1)+' '+(50+44*Math.sin(an)).toFixed(1)+'"/>';}
em+='</g></svg>';
$("dkcf").innerHTML='<b class="hl"></b>'+em+'<div class="tt">Doutor<br>Destino</div>';
$("dkrp").innerHTML=dkGlyphs();$("dkcb").innerHTML=dkGlyphs();
for(i=0;i<6;i++){p=document.createElement("div");p.className="pf";
p.style.cssText="--z:"+(.3+i*.3).toFixed(1)+"px;--a:"+(-168+i*3)+"deg;--p:"+(1000+i*180)+";--pr:"+(800+(5-i)*120);
p.innerHTML="<i>"+dkGlyphs()+"</i><i>"+dkGlyphs()+"</i>";sl.insertBefore(p,cv);}
for(i=0;i<12;i++){q=1200+Math.round(Math.random()*800);
h+='<i class="em" style="left:'+((Math.random()-.5)*70).toFixed(0)+'px;top:'+(Math.random()*40-10).toFixed(0)+'px;--dx:'+((Math.random()-.5)*130).toFixed(0)+'px;--p:'+q+';--pr:'+(3600-q-1500)+'"></i>';}
for(i=0;i<10;i++){q=1200+Math.round(Math.random()*800);
h+='<i class="rn" style="left:'+((Math.random()-.5)*80).toFixed(0)+'px;top:'+(Math.random()*30-20).toFixed(0)+'px;--dx:'+((Math.random()-.5)*150).toFixed(0)+'px;--dy:-'+(130+Math.random()*130).toFixed(0)+'px;--r:'+((Math.random()-.5)*90).toFixed(0)+'deg;--p:'+q+';--pr:'+(3600-q-1500)+'"><svg viewBox="0 0 16 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M'+(2+Math.random()*12).toFixed(1)+' '+(2+Math.random()*14).toFixed(1)+'L'+(2+Math.random()*12).toFixed(1)+' '+(2+Math.random()*14).toFixed(1)+'L'+(2+Math.random()*12).toFixed(1)+' '+(2+Math.random()*14).toFixed(1)+'"/></svg></i>';}
stg.insertAdjacentHTML("beforeend",h);
o.addEventListener("pointerdown",function(e){e.preventDefault();dkSkip();});
DKI=true;}
function swish(dl){var a=actx();if(!a||!SOM)return;var n=Math.floor(a.sampleRate*.22),b=a.createBuffer(1,n,a.sampleRate),d=b.getChannelData(0),i,s,f,g,t=a.currentTime+(dl||0);for(i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.sin(Math.PI*i/n);s=a.createBufferSource();s.buffer=b;f=a.createBiquadFilter();f.type="bandpass";f.frequency.setValueAtTime(1800,t);f.frequency.exponentialRampToValueAtTime(4200,t+.22);g=a.createGain();g.gain.value=.7;s.connect(f);f.connect(g);g.connect(a.destination);s.start(t);}
function thump(dl,v){var a=actx();if(!a||!SOM)return;v=v||.6;var t=a.currentTime+(dl||0),n=Math.floor(a.sampleRate*.3),b=a.createBuffer(1,n,a.sampleRate),d=b.getChannelData(0),i,s,f,g,o,g2;for(i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2);s=a.createBufferSource();s.buffer=b;f=a.createBiquadFilter();f.type="lowpass";f.frequency.value=900;g=a.createGain();g.gain.value=v;s.connect(f);f.connect(g);g.connect(a.destination);s.start(t);o=a.createOscillator();g2=a.createGain();o.type="sine";o.frequency.setValueAtTime(240,t);o.frequency.exponentialRampToValueAtTime(90,t+.25);g2.gain.setValueAtTime(v*.8,t);g2.gain.exponentialRampToValueAtTime(.0001,t+.28);o.connect(g2);g2.connect(a.destination);o.start(t);o.stop(t+.3);}
/* ===== Sons do livro (sintetizados): folheio de paginas, rangido de couro e baque da capa ===== */
var BKN=null,BKNA=null,BKM=null,BKMA=null,BKB=null;
function bkNoise(a){if(BKN&&BKNA===a)return BKN;var n=Math.floor(a.sampleRate*.5),b=a.createBuffer(1,n,a.sampleRate),d=b.getChannelData(0),i;for(i=0;i<n;i++)d[i]=Math.random()*2-1;BKNA=a;return BKN=b;}
function bkOut(a){if(BKM&&BKMA===a)return BKM;var m=a.createGain(),c=a.createDynamicsCompressor?a.createDynamicsCompressor():null;m.gain.value=1.7;if(c){try{c.threshold.value=-14;c.knee.value=10;c.ratio.value=5;c.attack.value=.003;c.release.value=.2;}catch(e){}m.connect(c);c.connect(a.destination);}else m.connect(a.destination);BKMA=a;return BKM=m;}
function bkBus(a){var g=a.createGain();g.gain.value=1;g.connect(bkOut(a));BKB=g;return g;}
function bkMute(){var b=BKB;BKB=null;if(!b||!BKMA)return;try{b.gain.cancelScheduledValues(BKMA.currentTime);b.gain.setTargetAtTime(0,BKMA.currentTime,.04);}catch(e){}}
function bkSnd(go){if(!SOM)return;var a=actx();if(!a)return;try{if(a.state==="running")go(a);else{var p=a.resume();if(p&&p.then)p.then(function(){if(TB)go(a);}).catch(function(){});else go(a);}}catch(e){}}
/* sincronia: o som acompanha o relogio da animacao do livro (nao o toque), entao nao adianta nem atrasa se o celular engasgar */
var BKTOK=0;
function bkSync(cues,k){var o=$("dkh"),an=null,ls,i,tok=++BKTOK,idx=0,lat=0;
try{ls=o.getAnimations();for(i=0;i<ls.length;i++)if(ls[i].animationName==="dkov"){an=ls[i];break;}}catch(e){}
if(!an)return false;
bkSnd(function(a){var bus=bkBus(a);lat=Math.min(160,(a.outputLatency||a.baseLatency||.04)*1000+10);
(function tick(){if(tok!==BKTOK||!TB)return;var c=an.currentTime,cu;
if(c!==null&&c!==undefined){c=+c;while(idx<cues.length&&c>=cues[idx][0]*k-lat){cu=cues[idx++];if(c-cu[0]*k<320){try{cu[1](a,bus,a.currentTime+.004);}catch(e){}}}}
if(idx<cues.length)requestAnimationFrame(tick);})();});
return true;}
/* amostras de papel (WAV 24 kHz embutido em window.BKSND): decodifica na hora, sem esperar rede */
var BKS=null,BKG={l:.9};
function bkLoad(){if(BKS)return BKS;var D=window.BKSND;if(!D)return null;
try{var dec=function(b){var t=atob(b);if(D.fmt==="mulaw"){var nn=t.length,ff=new Float32Array(nn),ii,u,sg,ex,mg;for(ii=0;ii<nn;ii++){u=~t.charCodeAt(ii)&255;sg=u&128;ex=(u>>4)&7;mg=(((u&15)<<3)+132<<ex)-132;ff[ii]=(sg?-mg:mg)/32768;}return ff;}var n=(t.length-44)>>1,f=new Float32Array(n),i,v;for(i=0;i<n;i++){v=t.charCodeAt(44+2*i)|(t.charCodeAt(45+2*i)<<8);if(v>32767)v-=65536;f[i]=v/32768;}return f;};
BKS={sr:D.sr,lf:D.lf.map(dec)};}catch(e){BKS=null;}return BKS;}
function bkBuf(a,arr){if(arr.__c===a)return arr.__b;var b=a.createBuffer(1,arr.length,BKS.sr);b.copyToChannel(arr,0);arr.__c=a;arr.__b=b;return b;}
function bkSmp(a,o,arr,t,v,rate){var s=a.createBufferSource(),g=a.createGain();s.buffer=bkBuf(a,arr);s.playbackRate.value=rate||1;g.gain.value=v;s.connect(g);g.connect(o);s.start(t);}
/* uma pagina virando: ataque seco (papel pegando ar) + "fffft" de ar + crepitar de fibras + toquinho ao pousar */
function bkPage(a,o,t,v,ld){var d=.2+Math.random()*.08,s=a.createBufferSource(),f=a.createBiquadFilter(),h=a.createBiquadFilter(),g=a.createGain(),i,cs,cf,cg,k,gd,po,pg,tt,sn,sf,sg;
s.buffer=bkNoise(a);f.type="bandpass";f.Q.value=.7;f.frequency.setValueAtTime(1300,t);f.frequency.exponentialRampToValueAtTime(5800,t+d);h.type="highpass";h.frequency.value=800;
g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v*.8,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+d);
s.connect(f);f.connect(h);h.connect(g);g.connect(o);s.start(t,Math.random()*.25,d+.03);
sn=a.createBufferSource();sf=a.createBiquadFilter();sg=a.createGain();sn.buffer=bkNoise(a);sf.type="bandpass";sf.frequency.value=1500;sf.Q.value=1.4;
sg.gain.setValueAtTime(v*.9,t);sg.gain.exponentialRampToValueAtTime(.0001,t+.045);sn.connect(sf);sf.connect(sg);sg.connect(o);sn.start(t,Math.random()*.3,.06);
for(i=0;i<8;i++){cs=a.createBufferSource();cf=a.createBiquadFilter();cg=a.createGain();cs.buffer=bkNoise(a);cf.type="bandpass";cf.frequency.value=2500+Math.random()*4500;cf.Q.value=1.2;
k=t+.02+Math.random()*(d-.05);gd=.005+Math.random()*.014;cg.gain.setValueAtTime(v*(.35+Math.random()*.65),k);cg.gain.exponentialRampToValueAtTime(.0001,k+gd);cs.connect(cf);cf.connect(cg);cg.connect(o);cs.start(k,Math.random()*.3,gd+.01);}
if(ld!==-1){tt=t+(ld||d*.8);po=a.createOscillator();pg=a.createGain();po.type="sine";po.frequency.setValueAtTime(200,tt);po.frequency.exponentialRampToValueAtTime(95,tt+.07);pg.gain.setValueAtTime(v*.4,tt);pg.gain.exponentialRampToValueAtTime(.0001,tt+.09);po.connect(pg);pg.connect(o);po.start(tt);po.stop(tt+.1);}}
/* som das folhas amassando (arquivo enviado): toca uma vez cobrindo a janela do folhear, com fade-in/out */
var BKLI=-1;
function bkLeaf(a,o,t,d,full){var Z=bkLoad(),s,g,m,i,arr,r;if(!Z||!Z.lf||!Z.lf.length){bkRiffle(a,o,t,d,1.2,full);return;}
do{i=Math.floor(Math.random()*Z.lf.length);}while(Z.lf.length>1&&i===BKLI);BKLI=i;arr=Z.lf[i];r=.94+Math.random()*.12;
m=arr.length/Z.sr/r;d=Math.min(d,m);s=a.createBufferSource();g=a.createGain();s.buffer=bkBuf(a,arr);s.playbackRate.value=r;
g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(BKG.l,t+.06);g.gain.setValueAtTime(BKG.l,t+Math.max(.06,d-.3));g.gain.linearRampToValueAtTime(.0001,t+d);
s.connect(g);g.connect(o);s.start(t,0,d*r);}
/* folheio: uma pagina forte seguida de duas pequenas (polegar passando as folhas); ld = quando a folha pousa */
function bkFlip(a,o,t,full,v,ld){bkPage(a,o,t,v,ld);if(full){bkPage(a,o,t+.07,v*.55,-1);bkPage(a,o,t+.13,v*.4,-1);}}
/* folheando: rajada de varias folhas passando rapido sob o polegar ("brrrrt") */
function bkRiffle(a,o,t,d,v,full){var n=Math.max(8,Math.round(d*(full?46:34))),i,k=t,x,st,du,s,f,g,vv;
for(i=0;i<n;i++){x=i/n;st=d/n*(.55+Math.random()*.9);du=.03+Math.random()*.035;vv=v*(.55+Math.random()*.45)*(.55+.45*Math.sin(Math.PI*Math.min(1,x+.08)));
s=a.createBufferSource();f=a.createBiquadFilter();g=a.createGain();s.buffer=bkNoise(a);f.type="bandpass";f.frequency.value=2000+Math.random()*3800;f.Q.value=.8;
g.gain.setValueAtTime(.0001,k);g.gain.exponentialRampToValueAtTime(vv,k+.004);g.gain.exponentialRampToValueAtTime(.0001,k+du);
s.connect(f);f.connect(g);g.connect(o);s.start(k,Math.random()*.3,du+.02);k+=st;}}
/* capa de couro batendo: baque grave + tapa seco */
function bkThud(a,o,t,v){var s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain(),os=a.createOscillator(),og=a.createGain(),s2=a.createBufferSource(),f2=a.createBiquadFilter(),g2=a.createGain();
s.buffer=bkNoise(a);f.type="lowpass";f.frequency.setValueAtTime(900,t);f.frequency.exponentialRampToValueAtTime(180,t+.3);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+.32);s.connect(f);f.connect(g);g.connect(o);s.start(t,0,.35);
os.type="sine";os.frequency.setValueAtTime(150,t);os.frequency.exponentialRampToValueAtTime(42,t+.3);og.gain.setValueAtTime(v*1.2,t);og.gain.exponentialRampToValueAtTime(.0001,t+.38);os.connect(og);og.connect(o);os.start(t);os.stop(t+.42);
s2.buffer=bkNoise(a);f2.type="bandpass";f2.frequency.value=1400;f2.Q.value=1.1;g2.gain.setValueAtTime(v*.55,t);g2.gain.exponentialRampToValueAtTime(.0001,t+.07);s2.connect(f2);f2.connect(g2);g2.connect(o);s2.start(t,.1,.09);}
/* rangido de couro velho do livro se mexendo */
function bkCreak(a,o,t,d,v){var os=a.createOscillator(),f=a.createBiquadFilter(),g=a.createGain(),i;os.type="sawtooth";os.frequency.setValueAtTime(70,t);for(i=1;i<=6;i++)os.frequency.linearRampToValueAtTime(58+Math.random()*75,t+d*i/6);
f.type="bandpass";f.Q.value=6;f.frequency.setValueAtTime(380,t);f.frequency.linearRampToValueAtTime(900,t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+d*.25);g.gain.exponentialRampToValueAtTime(.0001,t+d);os.connect(f);f.connect(g);g.connect(o);os.start(t);os.stop(t+d+.05);}
function dkSw(){if(DKD||!DKFN)return;DKD=1;var f=DKFN;DKFN=null;try{f();}catch(e){}buzz([30,30,60]);}
function dkBk(on){clearTimeout(DKB1);clearTimeout(DKB2);document.body.classList.remove("tbk");}
function dkFin(){dkBk();bkMute();try{if(window.__ostDuck)window.__ostDuck(1);}catch(e){}clearTimeout(DKS);clearTimeout(DKE);var o=$("dkh");o.classList.remove("go","skip","rev");TB=false;DKFN=null;}
function dkSkip(){if(!TB||performance.now()-DKT0<350)return;dkSw();dkBk();bkMute();$("dkh").classList.add("skip");clearTimeout(DKS);clearTimeout(DKE);DKE=setTimeout(dkFin,200);}
/* rev=false: o livro ABRE ao entrar na maratona; rev=true: o livro FECHA ao voltar para o inicio.
   A cena completa so roda na primeira vez de cada sentido; depois vai a versao curta (~1,5 s). Toque pula. */
function trans(fn,rev){
if(TB||RM||window.__eco){fn();return;}
var o=$("dkh"),kk="maratona-livro-"+(rev?"fechar":"abrir"),full=true,k,T,i,S;
try{full=localStorage.getItem(kk)!=="1";if(full)localStorage.setItem(kk,"1");}catch(e){full=!DKSEEN[kk];}
DKSEEN[kk]=1;
k=full?1.3:.85;T=3600*k;S=function(ms){return ms*k/1000;};
TB=true;DKFN=fn;DKD=0;DKT0=performance.now();
if(!DKI)dkInit();
o.style.setProperty("--k",k);o.classList.remove("go","skip");o.classList.toggle("rev",!!rev);void o.offsetWidth;o.classList.add("go");
buzz(full?[40,70,110,60,40]:[40,50,40]);
try{
var cues=[],fb=function(){
if(!rev){
bkSnd(function(a){var o=bkBus(a),b=a.currentTime;bkThud(a,o,b+S(900),.9);bkCreak(a,o,b+S(950),Math.max(.45,.8*k),.2);
bkLeaf(a,o,b+S(1050),S(1650),full);
bkThud(a,o,b+S(2750),1);});
tone(220,Math.max(.5,1.2*k),"sawtooth",.08,S(1870),1200);
}else{
tone(220,Math.max(.4,k),"sawtooth",.07,S(80),120);
bkSnd(function(a){var o=bkBus(a),b=a.currentTime;bkCreak(a,o,b+S(300),Math.max(.4,.7*k),.2);
bkLeaf(a,o,b+S(800),S(1760),full);
bkThud(a,o,b+S(2600),1);bkPage(a,o,b+S(3150),.6);});
}
},ci;
if(!rev){
cues.push([576,function(a,o,t){bkThud(a,o,t,.9);}]);
cues.push([936,function(a,o,t){bkCreak(a,o,t,Math.max(.45,.6*k),.2);}]);
cues.push([1000,function(a,o,t){bkLeaf(a,o,t,S(1650),full);}]);
cues.push([1872,function(){tone(220,Math.max(.5,1.2*k),"sawtooth",.08,0,1200);}]);
cues.push([2736,function(a,o,t){bkThud(a,o,t,1);}]);
}else{
cues.push([80,function(){tone(220,Math.max(.4,k),"sawtooth",.07,0,120);}]);
cues.push([300,function(a,o,t){bkCreak(a,o,t,Math.max(.4,.7*k),.2);}]);
cues.push([800,function(a,o,t){bkLeaf(a,o,t,S(1760),full);}]);
cues.push([2640,function(a,o,t){bkThud(a,o,t,1);}]);
cues.push([3150,function(a,o,t){bkPage(a,o,t,.6,-1);}]);
}
cues.sort(function(x,y){return x[0]-y[0];});
if(!bkSync(cues,k))fb();
if(SOM&&window.__ostDuck)window.__ostDuck(.3);
}catch(x){}
DKB1=setTimeout(function(){document.body.classList.add("tbk");},Math.round(T*.08));DKB2=setTimeout(function(){document.body.classList.remove("tbk");},Math.round(T*.93));
DKS=setTimeout(dkSw,Math.round(T*(rev?.27:.74)));
DKE=setTimeout(dkFin,Math.round(T)+80);}
if(!RM&&!window.__eco)setTimeout(function(){if(!DKI)dkInit();},1200);
function homeHide(){if(HOME.hidden)return;document.documentElement.classList.remove("hon");trans(homeHide0);}
var HRC=0;function hRot(f){HRC++;if(f||HRC%9===0){$("hqa").classList.toggle("on");$("hfact").classList.toggle("on");}}
var BXS={ay:0,vy:0,dr:null,mv:0,moved:false,pulse:0},BSP={},BC=null,BCK="";
var BL=[-.3904,-.5855,-.6831];
function bSpr(cl,r){var k=cl+r,c=BSP[k],g,x;if(!c){c=document.createElement("canvas");c.width=c.height=r*2;x=c.getContext("2d");g=x.createRadialGradient(r,r,0,r,r,r);g.addColorStop(0,cl);g.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=g;x.fillRect(0,0,r*2,r*2);BSP[k]=c;}return c;}
function bRgb(h){h=(h||"").replace("#","");if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];var n=parseInt(h,16);return h.length!==6||isNaN(n)?[47,211,107]:[n>>16,n>>8&255,n&255];}
function bRo(p,y,x){var cy=Math.cos(y),sy=Math.sin(y),cx=Math.cos(x),sx=Math.sin(x),X=p[0]*cy+p[2]*sy,Z=-p[0]*sy+p[2]*cy;return [X,p[1]*cx-Z*sx,p[1]*sx+Z*cx];}
function bPr(p){var s=300/(300+p[2]);return [240+p[0]*s,76+p[1]*s];}
function bBip(n,h){var V=[[0,-h,0],[0,h,0]],F=[],k;for(k=0;k<n;k++)V.push([Math.cos(k/n*6.2832),0,Math.sin(k/n*6.2832)]);for(k=0;k<n;k++)F.push([0,2+k,2+(k+1)%n],[1,2+(k+1)%n,2+k]);return {V:V,F:F};}
function bGem(){var V=[[0,-50,0],[0,50,0]],F=[],k,a1,b1,a2,b2;for(k=0;k<6;k++){V.push([30*Math.cos(k*1.0472),-14,30*Math.sin(k*1.0472)]);V.push([30*Math.cos(k*1.0472+.5236),14,30*Math.sin(k*1.0472+.5236)]);}
for(k=0;k<6;k++){a1=2+k*2;b1=3+k*2;a2=2+((k+1)%6)*2;b2=3+((k+1)%6)*2;F.push([0,a1,a2],[a1,a2,b1],[b1,b2,a2],[1,b2,b1]);}return {V:V,F:F};}
var BGEM=bGem(),BSZ=[10,9,7,9,8,9],BSH=[bBip(4,1),{V:[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]],F:[[0,1,2],[0,3,1],[0,2,3],[1,3,2]]},{V:[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]],F:[[0,2,6],[0,6,4],[1,3,7],[1,7,5],[0,1,5],[0,5,4],[2,3,7],[2,7,6],[0,1,3],[0,3,2],[4,5,7],[4,7,6]]},bBip(6,1.1),bBip(4,1.7),bBip(3,1.4)],BSC=["#f2c94c","#9b6bff","#ff5a5a","#4fd1c5","#6fa8ff","#ff9a3d"];
function bMesh(S,cen,ay,ax,sc){var cy=Math.cos(ay),sy=Math.sin(ay),cx=Math.cos(ax),sx=Math.sin(ax),T=S.V.map(function(p){var X=(p[0]*cy+p[2]*sy)*sc,Z=(-p[0]*sy+p[2]*cy)*sc,Y=p[1]*sc;return [X+cen[0],Y*cx-Z*sx+cen[1],Y*sx+Z*cx+cen[2]];});
return S.F.map(function(f){var A=T[f[0]],B=T[f[1]],C=T[f[2]],ux=B[0]-A[0],uy=B[1]-A[1],uz=B[2]-A[2],vx=C[0]-A[0],vy=C[1]-A[1],vz=C[2]-A[2],nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,l=Math.hypot(nx,ny,nz)||1;
if(nx*((A[0]+B[0]+C[0])/3-cen[0])+ny*((A[1]+B[1]+C[1])/3-cen[1])+nz*((A[2]+B[2]+C[2])/3-cen[2])<0){nx=-nx;ny=-ny;nz=-nz;}
nx/=l;ny/=l;nz/=l;
return {p:[A,B,C],z:(A[2]+B[2]+C[2])/3,b:Math.max(0,nx*BL[0]+ny*BL[1]+nz*BL[2])*.75+.25,s:Math.pow(Math.max(0,nx*-.214+ny*-.3209+nz*-.9226),28),r:Math.pow(1-Math.max(0,-nz),3)};});}
function bMir(fs,yp){return fs.map(function(f){return {p:f.p.map(function(v){return [v[0],yp+(yp-v[1])*.5,v[2]];}),z:f.z,b:f.b,s:f.s,r:f.r};});}
function bDr(c,fs,u,al,refl){fs.slice().sort(function(p,q){return q.z-p.z;}).forEach(function(f){var q=f.p.map(bPr),k=f.b*(refl?.55:1),sp=255*f.s*(refl?.25:.85);
c.beginPath();c.moveTo(q[0][0],q[0][1]);c.lineTo(q[1][0],q[1][1]);c.lineTo(q[2][0],q[2][1]);c.closePath();
c.fillStyle="rgb("+Math.min(255,u[0]*k+sp+u[0]*f.r*.7)+","+Math.min(255,u[1]*k+sp+u[1]*f.r*.7)+","+Math.min(255,u[2]*k+sp+u[2]*f.r*.7)+")";
c.globalAlpha=al;c.fill();if(!refl){c.strokeStyle="rgba(255,255,255,.22)";c.lineWidth=.6;c.stroke();}});c.globalAlpha=1;}
function bStat(b,col,ri){var k=col+"|"+ri+"|"+b.width,x,g,i;if(BC&&BCK===k)return BC;if(!BC)BC=document.createElement("canvas");BC.width=b.width;BC.height=b.height;BCK=k;x=BC.getContext("2d");x.setTransform(b.width/480,0,0,b.width/480,0,0);
x.globalAlpha=Math.min(.6,.2+ri*.05);x.drawImage(bSpr(col,32),120,-44,240,240);
x.save();x.beginPath();x.rect(0,108,480,57);x.clip();x.strokeStyle=col;x.lineWidth=.7;x.globalAlpha=.28;for(i=-9;i<=9;i++){x.beginPath();x.moveTo(240+i*10,108);x.lineTo(240+i*70,165);x.stroke();}x.restore();
x.globalAlpha=.35;x.drawImage(bSpr(col,32),170,56,140,140);
x.globalAlpha=.45;x.drawImage(bSpr("rgba(0,0,0,.95)",32),172,126,136,18);x.globalAlpha=1;return BC;}
window.__glh={
ctx:function(cv){var o={alpha:true,premultipliedAlpha:true,antialias:true,depth:true,preserveDrawingBuffer:false},g=null;try{g=cv.getContext("webgl",o)||cv.getContext("experimental-webgl",o);}catch(e){}return g;},
prog:function(g,vs,fs){var p=g.createProgram(),s,i,src=[vs,fs],ty=[g.VERTEX_SHADER,g.FRAGMENT_SHADER];for(i=0;i<2;i++){s=g.createShader(ty[i]);g.shaderSource(s,src[i]);g.compileShader(s);if(!g.getShaderParameter(s,g.COMPILE_STATUS))return null;g.attachShader(p,s);}g.linkProgram(p);return g.getProgramParameter(p,g.LINK_STATUS)?p:null;},
buf:function(g,a){var b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,new Float32Array(a),g.STATIC_DRAW);return b;},
flat:function(sh){var a=[];sh.F.forEach(function(f){var A=sh.V[f[0]],B=sh.V[f[1]],C=sh.V[f[2]],ux=B[0]-A[0],uy=B[1]-A[1],uz=B[2]-A[2],vx=C[0]-A[0],vy=C[1]-A[1],vz=C[2]-A[2],nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,l=Math.hypot(nx,ny,nz)||1;
if(nx*(A[0]+B[0]+C[0])+ny*(A[1]+B[1]+C[1])+nz*(A[2]+B[2]+C[2])<0){nx=-nx;ny=-ny;nz=-nz;}nx/=l;ny/=l;nz/=l;
[A,B,C].forEach(function(v){a.push(v[0],v[1],v[2],nx,ny,nz);});});return a;},
rot:function(y,x){var cy=Math.cos(y),sy=Math.sin(y),cx=Math.cos(x),sx=Math.sin(x);return new Float32Array([cy,sx*sy,-cx*sy,0,cx,sx,sy,-sx*cy,cx*cy]);},
off:function(){try{return localStorage.getItem("maratona-gl")==="0";}catch(e){return false;}}
};
var BGLS,BGVS="attribute vec3 aP;attribute vec3 aN;uniform mat3 uR;uniform vec3 uT;uniform float uS;uniform float uMir;uniform float uSm;varying float vSm;varying vec3 vN;varying float vSY;varying float vM;void main(){vSm=uSm;vM=uMir;vec3 w=uR*(aP*uS)+uT;vec3 nn=normalize(mix(aN,normalize(aP),uSm));vec3 n=uR*nn;if(uMir>0.5){w.y=58.0+(58.0-w.y)*0.5;n.y=-n.y;}float s=300.0/(300.0+w.z);float py=76.0+w.y*s;vSY=py;vN=n;gl_Position=vec4(w.x*s/240.0,1.0-py/82.5,w.z/300.0,1.0);}",
BGFS="precision mediump float;varying float vSm;varying vec3 vN;varying float vSY;varying float vM;uniform vec3 uC;uniform float uA;uniform float uTm;void main(){vec3 n=normalize(vN);vec3 L=vec3(-0.3904,-0.5855,-0.6831);vec3 H=vec3(-0.214,-0.3209,-0.9226);float df=max(dot(n,L),0.0)*0.75+0.25;float sp=pow(max(dot(n,H),0.0),32.0);float fr=pow(1.0-max(-n.z,0.0),3.0);float up=smoothstep(-0.5,0.9,-n.y);vec3 env=mix(uC*0.2,vec3(0.72,0.9,1.0),up);vec3 c;float fa=1.0;if(vM>0.5){fa=smoothstep(106.0,124.0,vSY)*(1.0-0.75*smoothstep(125.0,165.0,vSY));c=uC*df*0.55+vec3(sp*0.25)+uC*fr*0.7+env*fr*0.25;}else{float sp2=pow(max(dot(n,normalize(vec3(0.5,-0.3,-0.8))),0.0),48.0);c=uC*df+vec3(sp*0.85)+uC*fr*0.7+env*(0.12+fr*0.5)+vec3(sp2*0.5)+(0.5+0.5*cos(6.2832*(n.x*0.6+n.y*0.4+vec3(0.0,0.33,0.67))))*fr*0.38*(1.0-vSm*0.6)+(0.5+0.5*cos(6.2832*(n.x*0.9+n.y*0.6+uTm*0.08+vec3(0.0,0.33,0.67))))*fr*0.28+vec3(pow(max(0.0,sin(n.x*9.0+n.y*7.0+uTm*1.6)*sin(n.y*11.0-n.z*8.0-uTm*1.1)),10.0))*0.7+uC*(0.1+0.1*sin(uTm*2.0+n.y*3.0))+vec3(0.8,1.0,1.0)*(1.0-smoothstep(0.0,0.05,abs(fract(n.x*0.5+n.y*0.3-uTm*0.18)-0.5)))*0.22*(1.0-fr);}c=min(c,vec3(1.0));gl_FragColor=vec4(c*uA*fa,uA*fa);}";
function bglInit(H){var cv=document.createElement("canvas"),g,p,B=[],o;cv.width=960;cv.height=330;g=H.ctx(cv);if(!g)return null;p=H.prog(g,BGVS,BGFS);if(!p)return null;
[BGEM].concat(BSH).forEach(function(sh){var a=H.flat(sh);B.push({b:H.buf(g,a),n:a.length/6});});
o={cv:cv,g:g,p:p,B:B,H:H,pc:0,z:0,bad:false,px:new Uint8Array(4),L:{aP:g.getAttribLocation(p,"aP"),aN:g.getAttribLocation(p,"aN"),uR:g.getUniformLocation(p,"uR"),uT:g.getUniformLocation(p,"uT"),uS:g.getUniformLocation(p,"uS"),uMir:g.getUniformLocation(p,"uMir"),uSm:g.getUniformLocation(p,"uSm"),uC:g.getUniformLocation(p,"uC"),uA:g.getUniformLocation(p,"uA"),uTm:g.getUniformLocation(p,"uTm")}};
cv.addEventListener("webglcontextlost",function(e){e.preventDefault();o.bad=true;window.__glok=false;});return o;}
function bGL(){if(BGLS!==undefined)return BGLS&&!BGLS.bad?BGLS:null;BGLS=null;var H=window.__glh;if(!H||window.__eco||H.off())return null;try{BGLS=bglInit(H);}catch(e){BGLS=null;}window.__glok=!!BGLS;return BGLS;}
function bglDraw(o,ay,ax,sc,u,st,t,q){var g=o.g,L=o.L,H=o.H;window.__bt=t;
function dm(k,R,T,S2,mir,c,al){var m=o.B[k];g.bindBuffer(g.ARRAY_BUFFER,m.b);g.enableVertexAttribArray(L.aP);g.vertexAttribPointer(L.aP,3,g.FLOAT,false,24,0);g.enableVertexAttribArray(L.aN);g.vertexAttribPointer(L.aN,3,g.FLOAT,false,24,12);g.uniformMatrix3fv(L.uR,false,R);g.uniform3f(L.uT,T[0],T[1],T[2]);g.uniform1f(L.uS,S2);g.uniform1f(L.uMir,mir);g.uniform1f(L.uSm,k===0?0:.55);g.uniform3f(L.uC,c[0]/255,c[1]/255,c[2]/255);g.uniform1f(L.uA,al);g.uniform1f(L.uTm,window.__bt||0);g.drawArrays(g.TRIANGLES,0,m.n);}
var cw=o.cv.width,ch=o.cv.height;g.viewport(0,0,cw,ch);g.clearColor(0,0,0,0);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT);g.useProgram(o.p);g.enable(g.BLEND);g.blendFunc(g.ONE,g.ONE_MINUS_SRC_ALPHA);
if(q>=1){g.disable(g.DEPTH_TEST);dm(0,H.rot(ay,ax),[0,0,0],sc,1,u,.3);}
g.enable(g.DEPTH_TEST);g.depthFunc(g.LESS);dm(0,H.rot(ay,ax),[0,0,0],sc,0,u,1);
st.forEach(function(o2){dm(o2.s+1,H.rot(t*2+o2.s+(window.__gsA||0),t*1.3),o2.P,BSZ[o2.s],0,o2.r,1);});
if(o.pc<3){o.pc++;g.readPixels(cw>>1,Math.round(ch*.54),1,1,g.RGBA,g.UNSIGNED_BYTE,o.px);if(o.px[3]===0)o.z++;if(o.z>=3){o.bad=true;window.__glok=false;}}}
function b3d(c,t,col,ri,a,q,anim){
var b=c.canvas,W=480,PL,PS,PX,i,k,it=[],ay,ax,sc,u=bRgb(col),pw,n,f,yy,gf,GL=bGL(),stl=[];
function cg(){c.globalAlpha=Math.min(.6,.18+.1*Math.sin(t*2)+pw*.3);c.drawImage(bSpr("#ffffff",32),206,42,68,68);c.globalAlpha=1;}
if(anim&&BXS.dr===null){BXS.ay+=BXS.vy;BXS.vy*=.95;if(Math.abs(BXS.vy)<.0005)BXS.vy=0;}
pw=BXS.pulse;BXS.pulse=Math.max(0,BXS.pulse-.045);window.__gsA=((window.__gsA||0)+Math.abs(BXS.vy)*2.2+pw*.25)%628.3185;
ay=t*.7+(window.__gtx||0)*.35+BXS.ay+(a<900?6.2832*(1-Math.pow(1-a/900,3)):0);ax=-.28+Math.sin(t*.5)*.1+(window.__gty||0)*.22;sc=(1+.12*pw)*(window.__gzm||1);
c.save();c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,b.width,b.height);c.drawImage(bStat(b,col,ri),0,0);c.restore();
n=q>=2?48:q===1?30:12;
for(i=0;i<n;i++){PL=i%3;PS=1+PL*.45;PX=((i*97+t*(3+PL*7)+BXS.ay*(4+PL*9))%W+W)%W;yy=((i*53)%104)+Math.sin(t*.6+i)*(1+PL);c.globalAlpha=(.2+.55*Math.abs(Math.sin(t*1.3+i)))*(.55+PL*.25);c.fillStyle=i%5?"#e8f0f5":col;c.fillRect(PX,yy,PS,PS);if(PL===2&&q>=1){c.globalAlpha*=.2;c.fillRect(PX-PS*3,yy,PS*4,PS*.8);}}c.globalAlpha=1;
gf=bMesh(BGEM,[0,0,0],ay,ax,sc);
c.save();c.beginPath();c.rect(0,108,W,57);c.clip();c.strokeStyle=col;c.lineWidth=.7;
for(k=0;k<7;k++){f=(k+(t*.5)%1)/7;yy=108+f*f*57;c.globalAlpha=.1+.35*f;c.beginPath();c.moveTo(0,yy);c.lineTo(W,yy);c.stroke();}c.globalAlpha=1;
if(q>=1&&!GL)bDr(c,bMir(gf,58),u,.3,true);
c.restore();
it.push({z:0,d:function(){if(!GL){bDr(c,gf,u,1,false);cg();}}});
BSC.forEach(function(cl,s){var an=t*.9+s*1.0472,bob=Math.sin(t*1.7+s)*6,P=bRo([100*Math.cos(an),bob,100*Math.sin(an)],0,-.42),r=bRgb(cl);
it.push({z:P[2],d:function(){var j,Q,p2;
if(q>=2)for(j=5;j>0;j--){Q=bRo([100*Math.cos(an-j*.1),bob,100*Math.sin(an-j*.1)],0,-.42);p2=bPr(Q);c.globalAlpha=.07*(6-j);c.fillStyle=cl;c.fillRect(p2[0]-1.5,p2[1]-1.5,3,3);}
p2=bPr(P);c.globalAlpha=.6;c.drawImage(bSpr(cl,32),p2[0]-17,p2[1]-17,34,34);c.globalAlpha=1;
if(GL)stl.push({s:s,P:P,r:r});else bDr(c,bMesh(BSH[s],P,t*2+s,t*1.3,BSZ[s]),r,1,false);}});});
it.sort(function(p,q2){return q2.z-p.z;}).forEach(function(o){o.d();});
if(GL){try{var gw=Math.max(960,b.width);if(GL.cv.width!==gw){GL.cv.width=gw;GL.cv.height=Math.round(gw*330/960);}bglDraw(GL,ay,ax,sc,u,stl,t,q);c.save();c.setTransform(1,0,0,1,0,0);c.drawImage(GL.cv,0,0,b.width,b.height);c.restore();cg();}catch(e){GL.bad=true;window.__glok=false;}}
if(pw>0){c.globalAlpha=pw*.6;c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.arc(240,76,30+(1-pw)*90,0,6.2832);c.stroke();c.globalAlpha=1;}
}
(function(){var b=$("hban");if(!b)return;
b.addEventListener("pointerdown",function(e){BXS.dr=e.clientX;BXS.mv=0;BXS.vy=0;BXS.moved=false;try{b.setPointerCapture(e.pointerId);}catch(x){}});
b.addEventListener("pointermove",function(e){if(BXS.dr===null)return;var d=e.clientX-BXS.dr;BXS.dr=e.clientX;BXS.mv+=Math.abs(d);if(BXS.mv>6)BXS.moved=true;BXS.ay+=d*.014;BXS.vy=BXS.vy*.5+d*.007;});
["pointerup","pointercancel"].forEach(function(n){b.addEventListener(n,function(){if(BXS.dr===null)return;BXS.dr=null;if(!BXS.moved)BXS.pulse=1;BXS.vy=Math.max(-.25,Math.min(.25,BXS.vy));});});
b.addEventListener("click",function(e){if(BXS.moved){e.stopImmediatePropagation();BXS.moved=false;}},true);
if(window.IntersectionObserver)new IntersectionObserver(function(en){window.__bv=en[0].isIntersecting;}).observe(b);})();
var BL1,BL2;
function bHiDpi(b){var q=window.__eco?0:(window.__q==null?2:window.__q),d=window.devicePixelRatio||1,S=q<=0?1:Math.min(3,Math.max(q===1?2:1,Math.ceil(d))),w=480*S,h=165*S;if(b.width!==w||b.height!==h){b.width=w;b.height=h;}}
function bBloom(b,q){if(q<1)return;var w=b.width,h=b.height,w1=w>>2,h1=h>>2,w2=Math.max(1,w>>4),h2=Math.max(1,h>>4),x1,x2,c=b.getContext("2d");if(!BL1){BL1=document.createElement("canvas");BL2=document.createElement("canvas");}
if(BL1.width!==w1){BL1.width=w1;BL1.height=h1;BL2.width=w2;BL2.height=h2;}
x1=BL1.getContext("2d");x2=BL2.getContext("2d");x1.setTransform(1,0,0,1,0,0);x1.clearRect(0,0,w1,h1);x1.drawImage(b,0,0,w1,h1);x2.setTransform(1,0,0,1,0,0);x2.clearRect(0,0,w2,h2);x2.drawImage(BL1,0,0,w2,h2);
c.save();c.setTransform(1,0,0,1,0,0);c.globalCompositeOperation="lighter";c.imageSmoothingEnabled=true;try{c.imageSmoothingQuality="high";}catch(e){}c.globalAlpha=q>=2?.42:.28;c.drawImage(BL2,0,0,w,h);if(q>=2){c.globalAlpha=.22;c.drawImage(BL1,0,0,w,h);}c.restore();}
function bannerDraw(){var b=$("hban"),c,ri,col,a,j,i,x,y,nx2,ny2;if(!b||!b.getContext)return;bHiDpi(b);c=b.getContext("2d");c.setTransform(b.width/480,0,0,b.width/480,0,0);
ri=rkIdx(xpNow());col=ACC||"#2fd36b";
a=performance.now()-ATK;var qq=window.__eco?0:(window.__q==null?2:window.__q);b3d(c,RM?.9:performance.now()/1000,col,ri,a,qq,!RM);bBloom(b,qq);c.setTransform(b.width/480,0,0,b.width/480,0,0);
if(a<650){c.fillStyle="rgba(155,231,255,"+(.35*(1-a/650))+")";c.fillRect(0,0,480,165);
for(j=0;j<3;j++){x=150+Math.random()*230;y=0;c.beginPath();c.moveTo(x,y);for(i=1;i<=6;i++){nx2=x+(240-x)*i/6+(Math.random()-.5)*26;ny2=76*i/6;c.lineTo(nx2,ny2);}c.strokeStyle=j?"#9be7ff":"#ffffff";c.lineWidth=j?1:3;c.stroke();}}}
$("hban").addEventListener("click",function(){ATK=performance.now();buzz([60,30,90]);if(!RM)thunder();try{if(!RM)this.animate([{transform:"translateX(0)"},{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"translateX(0)"}],{duration:300});}catch(e){}});
$("hrot").addEventListener("click",function(){hRot(1);});
$("hbk").addEventListener("click",function(){homeHide();var d=document.querySelectorAll("details.plan")[2];if(d){d.open=true;d.scrollIntoView();}});
function homeShow(){trans(homeShow0,true);}
function homeShow0(){
var f;do{f=Math.floor(Math.random()*FACTS.length);}while(f===HFACT&&FACTS.length>1);HFACT=f;
HOME.hidden=false;document.documentElement.classList.add("hon");document.dispatchEvent(new Event("homeshow"));homeTick();renderHome();
clearInterval(HT);HT=setInterval(function(){homeTick();hRot();},1000);
if(window.pxw)pxw();hbInit();HNEXT=performance.now()+1500;if(HR)cancelAnimationFrame(HR);HR=requestAnimationFrame(hbFrame);
}
$("hgo").addEventListener("click",function(){homeHide();window.scrollTo(0,0);});
$("hb").addEventListener("click",homeShow);
window.addEventListener("resize",function(){if(!HOME.hidden)hbInit();});
for(var hi=0,hb2=HOME.querySelectorAll(".hsc button");hi<hb2.length;hi++)(function(b){b.addEventListener("click",function(){
var a=b.getAttribute("data-a"),pl=document.querySelectorAll("details.plan");
homeHide();
if(a==="quiz")$("qb").click();
else if(a==="sum")showSum();
else{var d=pl[a==="plan"?0:1];if(d){$("ferr").open=true;d.open=true;d.scrollIntoView();}}
});})(hb2[hi]);
homeShow0();
build();ready=true;try{iconInit();}catch(e){}

try{(function(){
var box=$("mxs"),rr=$("mxr"),nt=$("mxn"),LK="maratona-lembrete";
function tot(){var d=0,t=0,i;for(i=0;i<T.length;i++){if(!pl(i))continue;t++;if(seen[i])d++;}return {d:d,t:t};}
function sagas(){var o=[];G.forEach(function(g){var d=0,t=0,md=0,mt=0,j;for(j=g.a;j<=g.b;j++){if(!pl(j))continue;t++;mt+=M[j];if(seen[j]){d++;md+=M[j];}}if(t)o.push({n:g.n,d:d,t:t,md:md,mt:mt});});return o;}
function hoje0(){var n=new Date();return new Date(n.getFullYear(),n.getMonth(),n.getDate());}
function ritmo(){var t0=dnum(hoje()),m7=0,m28=0,i,d,rem=mins(false),days=Math.round((PREM-hoje0())/864e5);
for(i=0;i<T.length;i++){if(!seen[i]||OLDS[T[i]]||!pl(i))continue;d=dnum(dts[T[i]]);if(d>t0-7&&d<=t0)m7+=M[i];if(d>t0-28&&d<=t0)m28+=M[i];}
return {rem:rem,days:days,r7:m7/60,r28:m28/60/4,need:rem/60/(Math.max(days,1)/7)};}
function hojeN(){var n=0,i;for(i=0;i<T.length;i++)if(seen[i]&&dts[T[i]]===hoje())n++;return n;}
function render(){
var s=sagas(),h="";s.forEach(function(g){h+='<div class="mxg"><div class="mxh"><b>'+esc(g.n)+'</b><span>'+g.d+'/'+g.t+' · '+fm(g.md)+' de '+fm(g.mt)+'</span></div><div class="mxb"><i style="width:'+Math.round(g.d/g.t*100)+'%"></i></div></div>';});
box.innerHTML=h;
var r=ritmo(),x,mx,t=hojeN();
if(!r.rem)x="🎉 Tudo assistido!";else if(r.days<=0)x="🎬 Já estreou! Faltam "+fm(r.rem)+" para terminar.";
else{mx=Math.max(r.need,r.r7,r.r28,.1);
x="<b>Ritmo (h/semana)</b>"+[["Necessário",r.need,0],["Últimos 7 dias",r.r7,1],["Média 28 dias",r.r28,1]].map(function(a){return '<div class="mxg"><div class="mxh"><span>'+a[0]+'</span><b>'+a[1].toFixed(1).replace(".",",")+'h</b></div><div class="mxb"><i class="'+(a[2]?"":"n")+'" style="width:'+Math.min(100,a[1]/mx*100)+'%"></i></div></div>';}).join("")+
'<div>'+(r.r7>=r.need?"✅ Seu ritmo da semana cobre o necessário.":"⚠️ Faltam "+(r.need-r.r7).toFixed(1).replace(".",",")+"h/semana para dar tempo.")+'</div>';}
x+='<div style="margin-top:8px">'+(t?"✅ Hoje você já viu "+t+(t===1?" título.":" títulos."):"🎬 Hoje ainda não teve maratona.")+'</div>';
rr.innerHTML=x;}
var pend=0;function sched(){if(pend||!$("mx").open)return;pend=setTimeout(function(){pend=0;try{render();}catch(e){}},150);}
$("mx").addEventListener("toggle",function(){if(this.open)render();});
document.addEventListener("click",sched);document.addEventListener("change",sched);

// imagem de progresso
function rr2(x,a,b,w,h,r,c){x.fillStyle=c;x.beginPath();if(x.roundRect)x.roundRect(a,b,w,h,r);else x.rect(a,b,w,h);x.fill();}
function cv(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim();}
function cardFx(x,c,W,H,ac){var s1=document.createElement("canvas"),s2=document.createElement("canvas"),a,g;s1.width=W>>2;s1.height=H>>2;s2.width=W>>4;s2.height=H>>4;a=s1.getContext("2d");a.drawImage(c,0,0,s1.width,s1.height);s2.getContext("2d").drawImage(s1,0,0,s2.width,s2.height);
x.save();x.globalCompositeOperation="lighter";x.imageSmoothingEnabled=true;x.globalAlpha=.4;x.drawImage(s2,0,0,W,H);x.globalAlpha=.18;x.drawImage(s1,0,0,W,H);x.restore();
g=x.createRadialGradient(W/2,H*.45,H*.35,W/2,H*.45,H*.82);g.addColorStop(0,"rgba(0,0,0,0)");g.addColorStop(1,"rgba(0,0,0,.55)");x.fillStyle=g;x.fillRect(0,0,W,H);
g=x.createLinearGradient(0,0,W,H);g.addColorStop(.42,"rgba(255,255,255,0)");g.addColorStop(.5,"rgba(255,255,255,.05)");g.addColorStop(.58,"rgba(255,255,255,0)");x.fillStyle=g;x.fillRect(0,0,W,H);}
function card(){var W=1080,H=1350,c=document.createElement("canvas");c.width=W;c.height=H;var x=c.getContext("2d"),ac=cv("--ac")||"#2fd36b",bg=cv("--bg")||"#050805",ink=cv("--ink")||"#e6f2e8",mu=cv("--muted")||"#8fa896",ln=cv("--line")||"#1f3326",o=tot(),s=sagas(),r=ritmo(),sk=streak(),y,i;
x.fillStyle=bg;x.fillRect(0,0,W,H);var g=x.createRadialGradient(W/2,0,40,W/2,0,950);g.addColorStop(0,cv("--g1")||ac);g.addColorStop(1,bg);x.fillStyle=g;x.fillRect(0,0,W,H);
x.textAlign="center";x.fillStyle=ac;x.font="700 52px Georgia,serif";x.fillText("MARATONA MARVEL",W/2,120);
x.fillStyle=ink;x.font="800 270px system-ui,sans-serif";x.fillText(o.d,W/2,400);
x.fillStyle=mu;x.font="500 44px system-ui,sans-serif";x.fillText("de "+o.t+" títulos assistidos",W/2,470);
rr2(x,90,510,900,30,15,ln);rr2(x,90,510,Math.max(30,900*o.d/Math.max(1,o.t)),30,15,ac);
x.textAlign="left";y=610;
for(i=0;i<s.length&&i<5;i++){x.fillStyle=ink;x.font="600 36px system-ui,sans-serif";x.fillText(s[i].n,90,y);x.textAlign="right";x.fillStyle=mu;x.fillText(s[i].d+"/"+s[i].t,990,y);x.textAlign="left";rr2(x,90,y+16,900,16,8,ln);rr2(x,90,y+16,Math.max(16,900*s[i].d/s[i].t),16,8,ac);y+=88;}
x.textAlign="center";x.fillStyle=ink;x.font="600 40px system-ui,sans-serif";
x.fillText("⏱️ "+(fm(mins(true))||"0min")+" assistidos"+(sk.cur>0?"  ·  🔥 "+sk.cur+" dias seguidos":""),W/2,1130);
x.fillStyle=ac;x.font="700 44px system-ui,sans-serif";x.fillText(r.days>0?"Faltam "+r.days+" dias para Vingadores: Doutor Destino":"Vingadores: Doutor Destino já estreou!",W/2,1215);
x.fillStyle=mu;x.font="500 32px system-ui,sans-serif";x.fillText("Estreia em "+PREM_TXT,W/2,1270);try{cardFx(x,c,W,H,ac);}catch(e){}return c;}
$("mxsh").addEventListener("click",function(){try{card().toBlob(function(b){if(!b)return;var f=new File([b],"maratona-marvel.png",{type:"image/png"});
if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:"Minha Maratona Marvel"}).catch(function(){});}
else{var u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="maratona-marvel.png";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u);},4000);nt.textContent="Imagem salva nos downloads.";}},"image/png");}catch(e){nt.textContent="Não foi possível gerar a imagem.";}});

// lembrete (.ics diário até a estreia)
function p2(v){return ("0"+v).slice(-2);}
try{var sv=localStorage.getItem(LK);if(sv)$("mxt").value=sv;}catch(e){}
$("mxcal").addEventListener("click",function(){var tv=($("mxt").value||"20:00").split(":"),hh=+tv[0],mm=+tv[1],n=new Date(),em=Math.min(1439,hh*60+mm+30),
d0=n.getFullYear()+p2(n.getMonth()+1)+p2(n.getDate()),
u=PREM.getFullYear()+p2(PREM.getMonth()+1)+p2(PREM.getDate()),
L=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Maratona Marvel//PT","BEGIN:VEVENT","UID:maratona-marvel-lembrete@local","DTSTAMP:"+d0+"T000000","DTSTART:"+d0+"T"+p2(hh)+p2(mm)+"00","DTEND:"+d0+"T"+p2(Math.floor(em/60))+p2(em%60)+"00","RRULE:FREQ=DAILY;UNTIL="+u+"T235959","SUMMARY:🎬 Hora da Maratona Marvel","DESCRIPTION:Assista e marque no app o que viu hoje.","BEGIN:VALARM","TRIGGER:PT0M","ACTION:DISPLAY","DESCRIPTION:Maratona Marvel","END:VALARM","END:VEVENT","END:VCALENDAR"];
try{localStorage.setItem(LK,$("mxt").value);}catch(e){}
var b=new Blob([L.join("\r\n")],{type:"text/calendar"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="lembrete-maratona.ics";document.body.appendChild(a);a.click();a.remove();nt.textContent="Abra o arquivo para adicionar o lembrete diário ao calendário (vale até a estreia).";});

// 2: PWA + offline
try{var ic=document.querySelector('link[rel="icon"]'),mf={name:"Maratona Marvel",short_name:"Maratona",display:"standalone",background_color:"#050805",theme_color:"#050805",lang:"pt-BR",icons:[{src:"data:image/png;base64,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",sizes:"512x512",type:"image/png",purpose:"any maskable"},{src:"data:image/png;base64,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",sizes:"192x192",type:"image/png",purpose:"any"}]},ml=document.createElement("link");ml.rel="manifest";ml.href="data:application/manifest+json;charset=utf-8,"+encodeURIComponent(JSON.stringify(mf));if(!document.querySelector('link[rel="manifest"]'))document.head.appendChild(ml);}catch(e){}
var dp=null;window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();dp=e;});
$("mxin").addEventListener("click",function(){
if(dp){var p=dp;dp=null;try{p.prompt();if(p.userChoice)p.userChoice.then(function(r){nt.textContent=r&&r.outcome==="accepted"?"App instalado! Procure o ícone na tela inicial.":"Instalação cancelada. Toque de novo para tentar.";});}catch(e){}return;}
var sa=(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone;
if(sa){nt.textContent="O app já está instalado e aberto como app.";return;}
var pr=location.protocol,ios=/iphone|ipad|ipod/i.test(navigator.userAgent),m;
if(pr!=="https:"&&location.hostname!=="localhost"){m="A instalação automática só funciona com o app hospedado em um endereço https (não vale arquivo aberto do celular). Hospede o arquivo (ex.: GitHub Pages ou Netlify) e abra pelo link. Por enquanto, use o menu do navegador → Adicionar à tela inicial.";}
else if(ios){m="No iPhone: toque em Compartilhar (quadrado com seta) → Adicionar à Tela de Início.";}
else{m="O navegador ainda não liberou a instalação. Use o menu ⋮ → Instalar app (ou Adicionar à tela inicial) e tente de novo em instantes.";}
nt.textContent=m;try{toastX&&0;}catch(e){}
});
nt.textContent="Para instalar: menu do navegador → Adicionar à tela inicial. Funciona sem internet.";
function net(){var off=navigator.onLine===false;$("mxo").hidden=!off;}
window.addEventListener("offline",net);window.addEventListener("online",function(){net();try{applyFont();}catch(e){}});net();

// 5: acessibilidade
var NM={fv:"Favoritar",ib:"Informações e notas"};
function lab(r){var q=(r.querySelectorAll?r:document).querySelectorAll("button:not([aria-label]),summary:not([aria-label]),select:not([aria-label]),input:not([aria-label]):not([type=hidden])");
for(var i=0;i<q.length;i++){var e=q[i];if(e.title){e.setAttribute("aria-label",e.title);continue;}
if(/[A-Za-zÀ-ÿ0-9]{2,}/.test(e.textContent||"")||(e.labels&&e.labels.length)||e.closest("label"))continue;
var k=e.className&&NM[String(e.className).split(" ")[0]];e.setAttribute("aria-label",k||e.getAttribute("data-a")||e.id||"Botão");}}
lab(document);var lt=0;new MutationObserver(function(){if(lt)return;lt=setTimeout(function(){lt=0;lab(document);},300);}).observe(document.body,{childList:true,subtree:true});
try{new MutationObserver(function(){$("pb").parentNode.setAttribute("aria-valuenow",Math.round(parseFloat($("pb").style.width)||0));}).observe($("pb"),{attributes:true,attributeFilter:["style"]});}catch(e){}
// contraste do texto cinza
function rgbOf(v){var p=document.createElement("i");p.style.cssText="position:absolute;visibility:hidden;color:"+v;document.body.appendChild(p);var m=getComputedStyle(p).color.match(/[\d.]+/g).slice(0,3).map(Number);p.remove();return m;}
function L(c){var a=c.map(function(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);});return .2126*a[0]+.7152*a[1]+.0722*a[2];}
function cr(a,b){var x=L(a),y=L(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
var fl=0;function fixM(){if(fl)return;fl=1;try{var m=rgbOf("var(--muted)"),bgs=[rgbOf("var(--bg)"),rgbOf("var(--card)")],k=0,c=m;
function ok(c){return bgs.every(function(b){return cr(c,b)>=4.5;});}
while(!ok(c)&&k<1){k+=.06;c=m.map(function(v){return Math.round(v+(255-v)*k);});}
if(c!==m)document.documentElement.style.setProperty("--muted","rgb("+c.join(",")+")");}catch(e){}fl=0;}
fixM();new MutationObserver(fixM).observe(document.documentElement,{attributes:true,attributeFilter:["style","data-theme","class"]});
})();}catch(e){}

try{(function(){
var CH=["Capitão América: O Primeiro Vingador (2011)","Capitã Marvel (2019)","Homem de Ferro (2008)","Homem de Ferro 2 (2010)","Thor (2011)","Os Vingadores (2012)","Thor: O Mundo Sombrio (2013)","Homem de Ferro 3 (2013)","Capitão América: O Soldado Invernal (2014)","Guardiões da Galáxia (2014)","Guardiões da Galáxia Vol. 2 (2017)","Vingadores: Era de Ultron (2015)","Homem-Formiga (2015)","Capitão América: Guerra Civil (2016)","Viúva Negra (2021)","Pantera Negra (2018)","Doutor Estranho (2016)","Thor: Ragnarok (2017)","Homem-Formiga e a Vespa (2018)","Vingadores: Guerra Infinita (2018)","Vingadores: Ultimato (2019)","Falcão e o Soldado Invernal (série completa)","WandaVision (série completa)","Loki — temporada 1","Loki — temporada 2","Shang-Chi e a Lenda dos Dez Anéis (2021)","Eternos (2021)","Doutor Estranho no Multiverso da Loucura (2022)","Gavião Arqueiro (série completa)","Ms. Marvel (série completa)","Thor: Amor e Trovão (2022)","Pantera Negra: Wakanda Para Sempre (2022)","Homem-Formiga e a Vespa: Quantumania (2023)","Guardiões da Galáxia Vol. 3 (2023)","Especial de Natal dos Guardiões da Galáxia (2022)","As Marvels (2023)","Agatha: Desde Sempre (série completa)","Capitão América: Admirável Mundo Novo (2025)","Thunderbolts* (2025)","Demolidor: Renascido — temporada 1","Deadpool & Wolverine (2024)","Quarteto Fantástico: Primeiros Passos (2025)","X-Men (2000)","X-Men 2 (2003)","X-Men: O Confronto Final (2006)","Deadpool (2016)","Logan (2017)","Deadpool 2 (2018)"];
var box=$("mxcl"),det=$("mxch"),pe=0;
function ord(){var o=[],i,k;CH.forEach(function(n){k=T.indexOf(n);if(k>-1)o.push(k);});for(i=0;i<T.length;i++)if(o.indexOf(i)<0)o.push(i);return o;}
function tg(i){if(seen[i]){delete seen[i];delete rate[i];delete dts[T[i]];}else{dts[T[i]]=hoje();seen[i]=true;}save();saveR();saveX();build();}
var GS=[["Capitão América: O Primeiro Vingador (2011)","⚡ Saga do Infinito"],["Falcão e o Soldado Invernal (série completa)","🌌 Multiverso · Fase 4"],["Homem-Formiga e a Vespa: Quantumania (2023)","🌌 Multiverso · Fases 5 e 6"],["X-Men (2000)","🧬 Fora do MCU principal"]],CO={};
function draw(){var o=ord(),nx=-1,gr=[],gi=0,n=0,k,go;o.forEach(function(i){if(nx<0&&!seen[i])nx=i;for(k=0;k<GS.length;k++)if(GS[k][0]===T[i]){gi=k;break;}if(!gr[gi])gr[gi]={n:GS[gi][1],it:[]};gr[gi].it.push(i);});
gr=gr.filter(Boolean);box.innerHTML="";
if(nx>=0){go=document.createElement("button");go.type="button";go.className="mxgo";go.textContent="👉 Ir para o próximo: "+T[nx];go.onclick=function(ev){ev.stopPropagation();gr.forEach(function(g){if(g.it.indexOf(nx)>-1)CO[g.n]=false;});draw();var el=box.querySelector(".mxc.nx");if(el)el.scrollIntoView({block:"center",behavior:"smooth"});};box.appendChild(go);}
gr.forEach(function(g){var d=0,col,hd=document.createElement("button"),bd=document.createElement("div");g.it.forEach(function(i){if(seen[i])d++;});
col=g.n in CO?CO[g.n]:g.it.indexOf(nx)<0;
hd.type="button";hd.className="mxgh"+(col?" col":"");hd.setAttribute("aria-expanded",col?"false":"true");hd.style.setProperty("--p",Math.round(d/g.it.length*100)+"%");
hd.innerHTML="<i></i><span></span><small></small>";hd.children[1].textContent=g.n;hd.lastChild.textContent=d+"/"+g.it.length+(d===g.it.length?" ✓":"");
bd.className="mxgb";bd.hidden=col;
hd.onclick=function(ev){ev.stopPropagation();CO[g.n]=!col;draw();};
box.appendChild(hd);
g.it.forEach(function(i){var b=document.createElement("button");b.type="button";b.className="mxc"+(seen[i]?" d":"")+(i===nx?" nx":"");b.setAttribute("aria-pressed",seen[i]?"true":"false");
b.innerHTML="<b></b><span></span><small></small>";n++;b.firstChild.textContent=n+".";b.children[1].textContent=(i===nx?"👉 ":"")+T[i];b.lastChild.textContent=(seen[i]?"✅ ":"")+fm(M[i]);b.onclick=function(){tg(i);draw();};bd.appendChild(b);});
box.appendChild(bd);});}
function sc(){if(pe||!det.open)return;pe=setTimeout(function(){pe=0;try{draw();}catch(e){}},150);}
det.addEventListener("toggle",function(){if(this.open)draw();});document.addEventListener("click",sc);
})();}catch(e){}
try{(function(){
var gx=$("mxg"),det=$("mx"),pe=0;
function sg(){var o=[];G.forEach(function(g){var d=0,n=0,j;for(j=g.a;j<=g.b;j++){if(!pl(j))continue;n++;if(seen[j])d++;}if(n)o.push({n:g.n,d:d,t:n});});return o;}
var LS="",VIEW="acc",KV=null;try{VIEW=localStorage.getItem("maratona-graf")==="day"?"day":"acc";}catch(e){}
function calm(){var h=document.documentElement.classList;try{return h.contains("noanim")||h.contains("eco")||!!window.__eco||matchMedia("(prefers-reduced-motion:reduce)").matches;}catch(e){return false;}}
function md(v){var d=new Date(v*864e5);return ("0"+d.getUTCDate()).slice(-2)+"/"+("0"+(d.getUTCMonth()+1)).slice(-2);}
function fd(v){return md(v)+"/"+new Date(v*864e5).getUTCFullYear();}
function pt(n){return String(Math.round(n*10)/10).replace(".",",");}
function cu(el,to,suf,ms){if(!el)return;if(calm()||!window.requestAnimationFrame){el.textContent=to+suf;return;}var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/ms),e=k>=1?1:(1-Math.pow(2,-10*k))/(1-Math.pow(2,-10));el.textContent=Math.round(to*e)+suf;if(k<1)requestAnimationFrame(f);})(t0);}
function f1(v){return v.toFixed(1);}
/* curva suave que nunca "passa por cima" dos pontos (monotona) + amostras para achar o Y de qualquer X */
function mono(P){var n=P.length,d="M"+f1(P[0][0])+","+f1(P[0][1]),S=[[P[0][0],P[0][1]]],dx=[],m=[],t=[],i,q,h,x0,y0,x1,y1,a,b,u,w;
if(n<2)return {d:d,s:S};
for(i=0;i<n-1;i++){dx[i]=P[i+1][0]-P[i][0];m[i]=(P[i+1][1]-P[i][1])/(dx[i]||1e-9);}
t[0]=m[0];t[n-1]=m[n-2];for(i=1;i<n-1;i++){t[i]=m[i-1]*m[i]<=0?0:3*(dx[i-1]+dx[i])/((2*dx[i]+dx[i-1])/m[i-1]+(dx[i]+2*dx[i-1])/m[i]);}
for(i=0;i<n-1;i++){h=dx[i]/3;x0=P[i][0];y0=P[i][1];x1=P[i+1][0];y1=P[i+1][1];a=y0+t[i]*h;b=y1-t[i+1]*h;
d+="C"+f1(x0+h)+","+f1(a)+","+f1(x1-h)+","+f1(b)+","+f1(x1)+","+f1(y1);
for(q=1;q<=10;q++){u=q/10;w=1-u;S.push([w*w*w*x0+3*w*w*u*(x0+h)+3*w*u*u*(x1-h)+u*u*u*x1,w*w*w*y0+3*w*w*u*a+3*w*u*u*b+u*u*u*y1]);}}
return {d:d,s:S};}
function sy(S,x){var q;if(x<=S[0][0])return S[0][1];for(q=1;q<S.length;q++)if(x<=S[q][0]){var a=S[q-1],b=S[q];return a[1]+(b[1]-a[1])*(x-a[0])/Math.max(1e-9,b[0]-a[0]);}return S[S.length-1][1];}
function draw(){
var m={},nm={},i,d,N=0,c=0,ks,t0=dnum(hoje()),nw=new Date(),rem=Math.round((PREM-new Date(nw.getFullYear(),nw.getMonth(),nw.getDate()))/864e5),day=VIEW==="day";
for(i=0;i<T.length;i++){if(!pl(i))continue;N++;if(!seen[i]||OLDS[T[i]]||!dts[T[i]])continue;d=dnum(dts[T[i]]);m[d]=(m[d]||0)+1;(nm[d]=nm[d]||[]).push(T[i]);}
ks=Object.keys(m).map(Number).sort(function(a,b){return a-b;});
var n28=0,best=0,cs=0;ks.forEach(function(k){cs+=m[k];if(m[k]>best)best=m[k];if(k>t0-28&&k<=t0)n28+=m[k];});c=cs;
var xa=Math.min(ks.length?ks[0]:t0,t0-28)-1.5,xb=day?t0+1.5:t0+Math.max(rem,7);
var sig=[VIEW,N,ks.map(function(k){return k+":"+m[k];}).join(","),t0,xb,xa,rem].join("|");
if(sig===LS&&gx.firstChild)return;LS=sig;
var W=320,H=176,L=30,R=12,Tp=18,B=26,j,pct=N?Math.round(c/N*100):0,pace=n28/28,wk=pace*7,left=N-c,
 YM=day?Math.max(3,best):N;
function X(v){return L+(v-xa)/(xb-xa)*(W-L-R);}function Y(v){return H-B-v/Math.max(YM,1)*(H-B-Tp);}
var pv=[[xa,0]],run=0;ks.forEach(function(k){run+=m[k];pv.push([k,run]);});if(pv[pv.length-1][0]<t0)pv.push([t0,c]);
var cv=day?null:mono(pv.map(function(q){return [X(q[0]),Y(q[1])];})),line=cv?cv.d:"",
 area=cv?line+"L"+f1(X(pv[pv.length-1][0]))+","+f1(Y(0))+"L"+f1(X(xa))+","+f1(Y(0))+"Z":"",
 proj=!day&&rem>0&&c<N,hx=X(t0),hy=Y(c),tf=pace>0&&left>0?t0+left/pace:null,WARM="#ffb347";
/* ---- camada A: placa 3D, grade, eixos ---- */
var A='<defs><linearGradient id="c3ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--ac)" stop-opacity=".55"/><stop offset="1" stop-color="var(--ac)" stop-opacity=".02"/></linearGradient><linearGradient id="c3bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--ac)" stop-opacity=".98"/><stop offset="1" stop-color="var(--ac)" stop-opacity=".3"/></linearGradient><linearGradient id="c3pl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--ac)" stop-opacity=".18"/><stop offset=".55" stop-color="var(--card)" stop-opacity=".92"/><stop offset="1" stop-color="var(--ac)" stop-opacity=".1"/></linearGradient><linearGradient id="c3bv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>'+
'<rect x="1" y="7" width="'+(W-2)+'" height="'+H+'" rx="13" fill="#000" opacity=".6"/><rect x="0.5" y="0.5" width="'+(W-1)+'" height="'+(H-1)+'" rx="12" fill="url(#c3pl)" stroke="var(--ac)" stroke-opacity=".4"/><path d="M12 1.5H'+(W-12)+'" stroke="#fff" stroke-opacity=".28" stroke-width="1" stroke-linecap="round"/>';
var yt=day?[].concat(Array.apply(null,Array(YM+1)).map(function(_,q){return q;})).filter(function(q){return YM<=5||q%Math.ceil(YM/4)===0||q===YM;}):[0,.25,.5,.75,1].map(function(f){return Math.round(N*f);});
yt.forEach(function(v,q){var y=f1(Y(v)),top=!day&&v===N;A+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+y+'" y2="'+y+'" stroke="'+(top?"var(--ac)":"var(--line)")+'" stroke-width="'+(top?".7":".5")+'"'+(top?' stroke-dasharray="2 3" opacity=".7"':' opacity=".9"')+'/><text x="'+(L-5)+'" y="'+(+y+3)+'" text-anchor="end" font-size="8" fill="var(--muted)">'+v+'</text>';});
for(j=0;j<=4;j++){var vv=xa+(xb-xa)*j/4,xx=f1(X(vv));A+='<line x1="'+xx+'" x2="'+xx+'" y1="'+f1(Y(YM))+'" y2="'+f1(Y(0))+'" stroke="var(--line)" stroke-width=".4" stroke-dasharray="1 3" opacity=".8"/><text x="'+xx+'" y="'+(H-9)+'" text-anchor="'+(j===0?"start":j===4?"end":"middle")+'" font-size="8" fill="var(--muted)">'+(j===4&&!day?"estreia "+md(vv):md(vv))+'</text>';}
A+='<line x1="'+L+'" x2="'+(W-R)+'" y1="'+f1(Y(0))+'" y2="'+f1(Y(0))+'" stroke="var(--ac)" stroke-opacity=".65" stroke-width="1"/>';
/* ---- camada B ---- */
var Bz='',Cz='',q;
if(!day){
 ks.forEach(function(k,q){var h=m[k]/best*(Y(0)-Y(N))*.3;Bz+='<rect class="c3b" x="'+f1(X(k)-2.4)+'" y="'+f1(Y(0)-h)+'" width="4.8" height="'+f1(h)+'" rx="1.6" fill="url(#c3bg)" style="animation-delay:'+(.25+q*.04).toFixed(2)+'s"/>';});
 Bz+='<path class="c3ar" d="'+area+'" fill="url(#c3ag)"/><path class="c3rb" d="'+line+'" transform="translate(0,5)" fill="none" stroke="var(--ac)" stroke-opacity=".28" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>';
 Cz='<path class="c3ln" pathLength="1" d="'+line+'" fill="none" stroke="var(--ac)" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>';
 ks.forEach(function(k,q){Cz+='<circle class="c3v" cx="'+f1(X(k))+'" cy="'+f1(Y(pv[q+1][1]))+'" r="1.9" fill="var(--card)" stroke="var(--ac)" stroke-width="1.2" style="animation-delay:'+(.5+q*.05).toFixed(2)+'s"/>';});
 /* marcos 25/50/75/100% */
 [25,50,75,100].forEach(function(p,q){var need=Math.ceil(N*p/100),r=0,k2=null,i2;for(i2=0;i2<ks.length;i2++){r+=m[ks[i2]];if(r>=need){k2=ks[i2];break;}}if(k2===null)return;var mx=X(k2),my=Y(r);Cz+='<g class="c3ms" style="animation-delay:'+(1.1+q*.12).toFixed(2)+'s"><line x1="'+f1(mx)+'" x2="'+f1(mx)+'" y1="'+f1(my-3)+'" y2="'+f1(my-11)+'" stroke="var(--ac)" stroke-width=".8"/><rect x="'+f1(mx-9)+'" y="'+f1(my-21)+'" width="18" height="10" rx="5" fill="var(--ac)"/><text x="'+f1(mx)+'" y="'+f1(my-13.6)+'" text-anchor="middle" font-size="6.6" font-weight="800" fill="var(--ak,#000)">'+p+'%</text></g>';});
 if(proj)Cz+='<line class="c3pj" x1="'+f1(hx)+'" y1="'+f1(hy)+'" x2="'+f1(X(xb))+'" y2="'+f1(Y(N))+'" stroke="var(--ac)" stroke-dasharray="4 3" stroke-width="1.5" stroke-linecap="round"/><circle class="c3tg" cx="'+f1(X(xb))+'" cy="'+f1(Y(N))+'" r="3.2" fill="none" stroke="var(--ac)" stroke-width="1.4"/>';
 if(tf!==null){var xe=Math.min(tf,xb),ye=c+pace*(xe-t0);Cz+='<line class="c3fc" x1="'+f1(hx)+'" y1="'+f1(hy)+'" x2="'+f1(X(xe))+'" y2="'+f1(Y(ye))+'" stroke="'+WARM+'" stroke-dasharray="1 3.4" stroke-width="2" stroke-linecap="round"/><circle class="c3tg" cx="'+f1(X(xe))+'" cy="'+f1(Y(ye))+'" r="3" fill="'+WARM+'" stroke="var(--card)" stroke-width="1"/>';}
 var lx=Math.max(L+36,hx);Cz+='<circle class="c3rg" cx="'+f1(hx)+'" cy="'+f1(hy)+'" r="3.6" fill="none" stroke="var(--ac)" stroke-width="1.4"/><circle class="c3dt" cx="'+f1(hx)+'" cy="'+f1(hy)+'" r="3.8" fill="var(--ac)" stroke="var(--card)" stroke-width="1.2"/><g class="c3lb"><rect x="'+f1(lx-40)+'" y="'+f1(Math.max(2,hy-22))+'" width="34" height="13" rx="6.5" fill="var(--card)" stroke="var(--ac)" stroke-opacity=".7" stroke-width=".8"/><text x="'+f1(lx-23)+'" y="'+f1(Math.max(2,hy-22)+9.4)+'" text-anchor="middle" font-size="8" font-weight="700" fill="var(--ac)">hoje · '+c+'</text></g>';
 if(!calm()&&ks.length>1)Cz+='<circle r="2.4" fill="#fff" opacity="0"><animateMotion dur="7s" begin="1.7s" repeatCount="indefinite" path="'+line+'" keyPoints="0;1;1" keyTimes="0;.35;1" calcMode="linear"/><animate attributeName="opacity" values="0;.95;.95;0;0" keyTimes="0;.04;.33;.36;1" dur="7s" begin="1.7s" repeatCount="indefinite"/></circle>';
}else{
 var bw=Math.max(3,Math.min(15,(W-L-R)/(xb-xa)*.62)),dp=bw*.38;
 ks.forEach(function(k,q){var h=m[k]/YM*(H-B-Tp),x=X(k)-bw/2,y=Y(0)-h,dl=(.2+q*.045).toFixed(2);
  Bz+='<g class="c3b c3bx" style="animation-delay:'+dl+'s"><polygon points="'+f1(x+bw)+','+f1(y)+' '+f1(x+bw+dp)+','+f1(y-dp)+' '+f1(x+bw+dp)+','+f1(y-dp+h)+' '+f1(x+bw)+','+f1(y+h)+'" fill="var(--ac)" opacity=".42"/><polygon points="'+f1(x)+','+f1(y)+' '+f1(x+dp)+','+f1(y-dp)+' '+f1(x+bw+dp)+','+f1(y-dp)+' '+f1(x+bw)+','+f1(y)+'" fill="#fff" opacity=".4"/><rect x="'+f1(x)+'" y="'+f1(y)+'" width="'+f1(bw)+'" height="'+f1(h)+'" rx="1" fill="url(#c3bg)"/><rect x="'+f1(x)+'" y="'+f1(y)+'" width="'+f1(bw)+'" height="'+f1(Math.min(h,6))+'" rx="1" fill="url(#c3bv)"/></g>';
  Cz+='<text class="c3nm" x="'+f1(x+bw/2+dp/2)+'" y="'+f1(y-dp-2)+'" text-anchor="middle" font-size="8" font-weight="700" fill="var(--ink)" style="animation-delay:'+(.9+q*.04).toFixed(2)+'s">'+m[k]+'</text>';});
 if(pace>0)Cz+='<line class="c3pj" x1="'+L+'" x2="'+(W-R)+'" y1="'+f1(Y(pace))+'" y2="'+f1(Y(pace))+'" stroke="'+WARM+'" stroke-dasharray="3 3" stroke-width="1.3" stroke-linecap="round"/><text class="c3lb c3tx" x="'+(W-R-2)+'" y="'+f1(Y(pace)-3)+'" text-anchor="end" font-size="7.5" font-weight="700" fill="'+WARM+'">média '+pt(pace)+'/dia</text>';
 if(rem>0&&left>0){var nd=left/rem;Cz+='<line class="c3pj" x1="'+L+'" x2="'+(W-R)+'" y1="'+f1(Y(nd))+'" y2="'+f1(Y(nd))+'" stroke="var(--ac)" stroke-dasharray="5 3" stroke-width="1.3" stroke-linecap="round"/><text class="c3lb c3tx" x="'+(L+3)+'" y="'+f1(Y(nd)-3)+'" font-size="7.5" font-weight="700" fill="var(--ac)">precisa '+pt(nd)+'/dia</text>';}
 Cz+='<line x1="'+f1(X(t0))+'" x2="'+f1(X(t0))+'" y1="'+f1(Y(YM))+'" y2="'+f1(Y(0))+'" stroke="var(--ac)" stroke-opacity=".5" stroke-width=".8" stroke-dasharray="2 2"/>';
}
Cz+='<line id="c3g" class="c3g" x1="0" x2="0" y1="'+Tp+'" y2="'+f1(Y(0))+'" stroke="var(--ink)" stroke-opacity=".55" stroke-width=".8" stroke-dasharray="2 2"/><circle id="c3gd" class="c3g" r="4" fill="var(--ink)" stroke="var(--ac)" stroke-width="1.6"/>';
function svg(cl,body){return '<svg class="c3l '+cl+'" viewBox="0 0 '+W+' '+H+'" aria-hidden="true" focusable="false">'+body+'</svg>';}
var RG=sg().map(function(g,q){var p=g.d/g.t,C=2*Math.PI*18;return '<div><svg viewBox="0 0 44 44" role="img" aria-label="'+esc(g.n)+': '+g.d+' de '+g.t+'"><circle cx="22" cy="22" r="18" fill="none" stroke="var(--line)" stroke-width="5"/><circle class="rg" style="animation-delay:'+(.2+q*.12).toFixed(2)+'s" cx="22" cy="22" r="18" fill="none" stroke="var(--ac)" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+(C*p).toFixed(1)+' '+C.toFixed(1)+'" transform="rotate(-90 22 22)"/><text x="22" y="25" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">'+Math.round(p*100)+'%</text></svg><span>'+esc(g.n.replace(/^Saga d[oa] /,""))+'</span></div>';}).join("");
/* texto de previsao */
var ins;
if(left===0)ins="🎉 Maratona completa! Você zerou a lista.";
else if(tf===null)ins="Marque o que você assistir (com a data) e eu calculo o seu ritmo e a previsão de término.";
else{var df=Math.round(t0+rem-tf);ins="No seu ritmo (<b>"+pt(wk)+" títulos/semana</b>, média de 28 dias) você termina em <b>"+fd(Math.ceil(tf))+"</b>"+(rem>0?(df>=0?" — <b class=\"ok\">"+df+(df===1?" dia":" dias")+" antes da estreia</b> ✅":" — <b class=\"bad\">"+(-df)+(df===-1?" dia":" dias")+" depois da estreia</b> ⚠️"):".");}
gx.innerHTML='<b>Progresso ao longo do tempo</b>'+
'<div class="c3tb" role="group" aria-label="Tipo de gráfico"><button type="button" data-v="acc" class="'+(day?"":"on")+'" aria-pressed="'+(day?"false":"true")+'">📈 Acumulado</button><button type="button" data-v="day" class="'+(day?"on":"")+'" aria-pressed="'+(day?"true":"false")+'">📊 Por dia</button></div>'+
'<div class="c3h"><div><b id="c3n1">0</b><span>de '+N+' vistos</span></div><div><b id="c3n2">0%</b><span>concluído</span></div><div><b>'+(pace>0?pt(wk):"—")+'</b><span>títulos/sem</span></div><div><b>'+(best||"—")+'</b><span>melhor dia</span></div></div>'+
'<div class="c3w" id="c3w" tabindex="0" role="img" aria-label="Gráfico 3D '+(day?"de títulos por dia":"de progresso")+': '+c+' de '+N+' títulos vistos ('+pct+'%). Use as setas para percorrer os dias."><div class="c3f"><div class="c3s" id="c3s">'+svg("c3a",A)+svg("c3b2",Bz)+svg("c3c",Cz)+'<div class="c3t" id="c3t" hidden aria-live="polite"></div></div></div></div>'+
'<div class="c3k">'+(day?'<span><i class="k3"></i>títulos por dia</span><span><i class="k4"></i>sua média</span><span><i class="k2"></i>precisa por dia</span>':'<span><i class="k1"></i>progresso</span><span><i class="k2"></i>ritmo necessário</span><span><i class="k4"></i>ritmo atual</span><span><i class="k3"></i>por dia</span>')+'</div><p class="c3in" aria-live="polite">'+ins+'</p><small>Passe o dedo, o mouse ou as setas sobre o gráfico para ver cada dia.</small>'+
'<b style="display:block;margin-top:10px">Por saga</b><div class="mxdn">'+RG+'</div>';
cu($("c3n1"),c,"",1000);cu($("c3n2"),pct,"%",1000);
/* inclinacao 3D, brilho que segue o dedo e leitura de cada dia */
var w=$("c3w"),s3=$("c3s"),tp=$("c3t"),gl=$("c3g"),gd=$("c3gd");
function stair(v){var a=0,q;for(q=0;q<ks.length;q++)if(ks[q]<=v)a+=m[ks[q]];return a;}
function at(v){v=Math.max(xa,Math.min(xb,v));var dd=Math.floor(v+1e-6),o={};
 if(day){dd=Math.round(v);o.px=X(dd);o.val=m[dd]||0;o.py=Y(o.val);o.d=dd;o.fut=false;}
 else{o.fut=v>t0+.5;o.d=dd;o.px=X(v);o.val=o.fut?Math.round(c+(N-c)*(v-t0)/Math.max(xb-t0,1)):stair(dd);o.py=o.fut?Y(c+(N-c)*(v-t0)/Math.max(xb-t0,1)):sy(cv.s,o.px);}
 o.v=v;return o;}
function show(v){var o=at(v),nmz=nm[o.d],b,s,q,t="";
 gl.setAttribute("x1",f1(o.px));gl.setAttribute("x2",f1(o.px));gd.setAttribute("cx",f1(o.px));gd.setAttribute("cy",f1(o.py));w.classList.add("sc");
 tp.hidden=false;tp.style.left=Math.max(22,Math.min(78,o.px/W*100)).toFixed(1)+"%";tp.style.top=(o.py/H*100).toFixed(1)+"%";tp.textContent="";
 b=document.createElement("b");b.textContent=md(o.d)+" · "+(o.fut?"meta "+o.val:o.val+(o.val===1?" título":" títulos")+(day?"":" no total"));tp.appendChild(b);
 if(nmz&&nmz.length&&!o.fut){s=document.createElement("small");s.textContent=(day?"":"Nesse dia: ")+nmz.slice(0,3).join(", ")+(nmz.length>3?" +"+(nmz.length-3):"");tp.appendChild(s);}
 KV=o.v;}
function lv(){w.classList.remove("sc");tp.hidden=true;s3.style.removeProperty("--rx");s3.style.removeProperty("--ry");}
function mv(e){var r=w.getBoundingClientRect(),fx=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),fy=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));
 s3.style.setProperty("--sx",(fx*100).toFixed(0)+"%");s3.style.setProperty("--sy",(fy*100).toFixed(0)+"%");
 if(!calm()){s3.style.setProperty("--rx",(18-fy*16).toFixed(1)+"deg");s3.style.setProperty("--ry",((fx-.5)*22).toFixed(1)+"deg");}
 show(xa+(fx*W-L)/(W-L-R)*(xb-xa));}
w.addEventListener("pointermove",mv);w.addEventListener("pointerdown",mv);w.addEventListener("pointerleave",lv);w.addEventListener("pointercancel",lv);w.addEventListener("pointerup",function(e){if(e.pointerType!=="mouse")setTimeout(lv,1100);});
w.addEventListener("keydown",function(e){var k=e.key,v=KV===null?t0:KV;if(k==="ArrowLeft")v-=1;else if(k==="ArrowRight")v+=1;else if(k==="PageDown")v-=7;else if(k==="PageUp")v+=7;else if(k==="Home")v=xa;else if(k==="End")v=xb;else return;e.preventDefault();show(Math.max(xa,Math.min(xb,v)));});
w.addEventListener("focus",function(){show(KV===null?t0:KV);});w.addEventListener("blur",lv);}
gx.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("[data-v]");if(!b)return;var v=b.getAttribute("data-v")==="day"?"day":"acc";if(v===VIEW)return;VIEW=v;KV=null;try{localStorage.setItem("maratona-graf",v);}catch(x){}LS="";try{draw();}catch(x){}try{sfxTick(true);}catch(x){}});
function sc(){if(pe||!det.open)return;pe=setTimeout(function(){pe=0;try{draw();}catch(e){}},200);}
det.addEventListener("toggle",function(){if(this.open){LS="";KV=null;try{draw();}catch(e){}}});document.addEventListener("click",sc);
})();}catch(e){}
})();

}catch(e){console.error("[inline2]",e)}
/* inline3 */
try{

(function(){var s=document.getElementById("d3");if(!s)return;var w=s.querySelector(".d3w"),sw=document.getElementById("d3sw"),o=document.getElementById("d3o"),p=document.getElementById("d3p"),i,h="",n=14,m=0,tm;
for(i=0;i<n;i++){var k=i/(n-1);h+='<div class="d3l" style="transform:translateZ('+(i*3-20)+'px);color:color-mix(in srgb,var(--ac) '+Math.round(28+k*72)+'%,#000)'+(i==n-1?';text-shadow:0 0 22px var(--ac),0 0 4px #fff':'')+'">D</div>';}
sw.insertAdjacentHTML("beforeend",h);
h="";for(i=0;i<14;i++)h+='<i style="transform:rotateY('+(i*360/14)+'deg) translateZ('+(100+(i%3)*22)+'px) translateY('+(((i*37)%90)-45)+'px) rotateZ('+(i*25)+'deg)"></i>';o.innerHTML=h;
function tilt(e){var r=s.getBoundingClientRect();w.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*50+"deg");w.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*40+"deg");}
s.addEventListener("pointermove",tilt);s.addEventListener("pointerleave",function(){w.style.setProperty("--ry","0deg");w.style.setProperty("--rx","0deg");});
var T=["⚡ O Destino se aproxima…","🟢 Doom observa tudo de Latvéria.","🔱 Os Vingadores precisam de você: termine a maratona!","💥 Nem o trovão detém Victor Von Doom."];
function hit(){s.classList.remove("hit");void s.offsetWidth;s.classList.add("hit");p.textContent=T[m++%T.length];try{if(navigator.vibrate)navigator.vibrate([30,40,60]);}catch(e){}clearTimeout(tm);tm=setTimeout(function(){s.classList.remove("hit");},1400);}
s.addEventListener("click",hit);s.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();hit();}});
if("IntersectionObserver"in window)new IntersectionObserver(function(a){s.classList.toggle("off",!a[0].isIntersecting);}).observe(s);
})();

}catch(e){console.error("[inline3]",e)}
/* inline4 */
try{

(function(){var $=function(i){return document.getElementById(i);},ul=$("list");if(!ul)return;var RM=ANIMOFF(),AC,t0=Date.now();
function on(k){try{return localStorage.getItem(k)!=="0";}catch(e){return true;}}
function vb(p){try{if(on("maratona-vib")&&navigator.vibrate)navigator.vibrate(p);}catch(e){}}
function th(){if(!on("maratona-som"))return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();var a=AC,n=a.sampleRate,b=a.createBuffer(1,n,n),d=b.getChannelData(0),i,s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain(),o=a.createOscillator(),g2=a.createGain(),t=a.currentTime;if(a.state==="suspended")a.resume();for(i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2);s.buffer=b;f.type="lowpass";f.frequency.value=420;g.gain.value=.8;s.connect(f);f.connect(g);g.connect(a.destination);s.start();o.frequency.setValueAtTime(70,t);o.frequency.exponentialRampToValueAtTime(35,t+.5);g2.gain.setValueAtTime(.25,t);g2.gain.exponentialRampToValueAtTime(.001,t+.6);o.connect(g2);g2.connect(a.destination);o.start();o.stop(t+.7);}catch(e){}}
var lt=$("lt"),lp=lt.firstChild;
function bolt(){th();vb([40,30,90]);if(RM)return;var x=30+Math.random()*40,y=0,p=[x+",0"];while(y<100){y+=9+Math.random()*9;x+=(Math.random()-.5)*16;p.push(x.toFixed(1)+","+Math.min(y,100).toFixed(1));}lp.setAttribute("points",p.join(" "));lt.classList.remove("on");void lt.getBoundingClientRect();lt.classList.add("on");}
var cm=$("c3"),cc=$("c3c"),ci=$("c3i");
var RN=["🔒 Bloqueado","Comum","Raro","Épico","Lendário"],RC=["#667","#9aa8a0","#4aa3ff","#b46bff","#ffc83d"];window.mrr={rr:rr,RN:RN,RC:RC,card:card,base:function(li){return bt(li);}};var TR=[["Falcão",2],["Ultimato",4],["Guerra Infinita",4],["Os Vingadores (2012)",4],["Homem de Ferro (2008)",4],["Logan",4],["Deadpool & Wolverine",4],["Soldado Invernal",3],["Guardiões da Galáxia (2014)",3],["Vol. 3",3],["Primeiro Vingador",3],["Guerra Civil",3],["Doutor Estranho (2016)",3],["Ragnarok",3],["Pantera Negra (2018)",3],["Loki — temporada 1",3],["WandaVision",3],["Deadpool (2016)",3],["Thunderbolts",3],["X-Men 2",3],["Especial de Natal",1],["Confronto Final",1],["Vol. 2",2],["Wakanda",2],["Multiverso",2],["Deadpool 2",2],["Homem de Ferro 2",2],["Homem de Ferro 3",2],["Thor (2011)",2],["Era de Ultron",2],["Capitã Marvel",2],["Viúva Negra",2],["Shang-Chi",2],["Gavião",2],["Agatha",2],["Demolidor",2],["Quarteto",2],["X-Men (2000)",2],["Loki — temporada 2",2]];function bt(li){var e=li.querySelector(".t"),t=e?e.textContent:"",i;for(i=0;i<TR.length;i++)if(t.indexOf(TR[i][0])>-1)return TR[i][1];return 1;}function rr(li){if(!li.classList.contains("done"))return 0;var n=li.querySelectorAll(".stars button.on").length;return Math.min(4,bt(li)+(n>4?1:0));}function card(li){var b=li.querySelector(".row"),q=rr(li),v=li.querySelector(".nt small"),z=$("c3b");ci.classList.remove("fl");cc.style.setProperty("--rc",RC[q]);$("c3f").innerHTML='<img alt=""'+(q?"":' class="lk"')+' src="'+b.querySelector(".pos").src+'">'+(q?"":'<span class="lkt">🔒</span>')+'<i class="sh"></i><i class="cdf"></i><i class="cdt"></i>';z.innerHTML='<b>#'+b.querySelector(".n").textContent+'</b><h4></h4><span>'+b.querySelector(".dur").textContent+'</span><em>'+(q?"✅ Já vi":"⏳ Falta ver")+'</em><strong style="color:'+RC[q]+'">'+RN[q]+'</strong><small></small><i class="sh"></i>';z.querySelector("h4").textContent=b.querySelector(".t").textContent;z.querySelector("small").textContent=v?v.textContent:"";var sy=li.querySelector(".rc");if(sy&&sy.textContent){var sp=document.createElement("p");sp.className="mxsyn";sp.textContent=sy.textContent;z.insertBefore(sp,z.querySelector("small"));}cm.hidden=false;}
cm.addEventListener("pointermove",function(e){var r=cc.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;cc.style.setProperty("--ty",(x-.5)*36+"deg");cc.style.setProperty("--tx",(.5-y)*28+"deg");cc.style.setProperty("--mx",x*100+"%");cc.style.setProperty("--my",y*100+"%");});
ci.addEventListener("click",function(){ci.classList.toggle("fl");});
cm.addEventListener("click",function(e){if(e.target===cm||e.target.id==="c3x")cm.hidden=true;});
document.addEventListener("keydown",function(e){if(e.key==="Escape")cm.hidden=true;});
ul.addEventListener("click",function(e){var p=e.target.closest&&e.target.closest(".pos");if(p){e.stopPropagation();e.preventDefault();card(p.closest("li"));}},true);
var tg=$("tlg"),tp=$("tlp"),ry=0,dr=null,mv=0,vis=false,raf=0,sel=0;
function rows(){var o=[],gi=-1,gn="";Array.prototype.forEach.call(ul.children,function(li){if(li.classList.contains("gh")){gi++;gn=li.querySelector(".gn").textContent;return;}var n=li.querySelector(".n");if(n)o.push({n:+n.textContent,li:li,g:gi,gn:gn});});return o.sort(function(a,b){return a.n-b.n;});}
function nxN(){var nb=$("next"),b=nb&&nb.querySelector("b"),t=b&&$("nm")?b.textContent:null,r=rows(),i,e;if(nb&&/Fila zerada/.test(nb.textContent))return 0;if(t)for(i=0;i<r.length;i++){e=r[i].li.querySelector(".t");if(e&&e.textContent===t)return r[i].n;}for(i=0;i<r.length;i++)if(!r[i].li.classList.contains("done"))return r[i].n;return 0;}
function sy(){var r=rows(),d=0,m={},nx=nxN();r.forEach(function(o){if(m[o.n]=o.li.classList.contains("done"))d++;});Array.prototype.forEach.call(tg.children,function(e){e.classList.toggle("d",!!m[e.dataset.n]);e.classList.toggle("nx",+e.dataset.n===nx);});if(!sel)tp.textContent="✅ "+d+" de "+r.length+(nx?" · ⭐ próximo #"+nx:"")+" · toque num ponto";}
function mk(){var r=rows(),N=r.length,R,h="",k=$("tlk"),gs={};if(!N)return;R=Math.max(90,N*20/6.283);k.innerHTML="";var nb0=document.createElement("button");nb0.type="button";nb0.style.setProperty("--pc","#fff");nb0.textContent="⭐ Próximo";nb0.onclick=function(){var n=nxN(),rr0=rows(),j;for(j=0;j<rr0.length;j++)if(rr0[j].n===n){tgt=-j*360/rr0.length;kick();pick(n);return;}};k.appendChild(nb0);r.forEach(function(o,i){var c="hsl("+((o.g*53+140)%360)+",75%,55%)";if(!gs[o.g]){gs[o.g]=1;var bt=document.createElement("button"),a=i*360/N;bt.type="button";bt.style.setProperty("--pc",c);bt.textContent=o.gn||"Todos";bt.onclick=function(){tgt=-a;kick();};k.appendChild(bt);}h+='<b data-n="'+o.n+'" style="--pc:'+c+';transform:rotateY('+(i*360/N)+'deg) translateZ('+R+'px) translateY('+((N>1?i/(N-1)-.5:0)*70)+'px)">'+o.n+'</b>';});tg.innerHTML=h;sy();setTimeout(sy,200);}
var tgt=null;window.__tlGo=function(i){var N=tg.children.length;if(N){tgt=-i*360/N;kick();}};$("tl3").addEventListener("pointerdown",function(){tgt=null;});var vel=0,lm=0,EC=!!window.__eco,lu=0,snapped=true,lf=-1,lvb=0;
function vb(){var n=performance.now();if(n-lvb<70)return;lvb=n;try{if(navigator.vibrate&&localStorage.getItem("maratona-vib")!=="0")navigator.vibrate(7);}catch(e){}}
var dfT=0,dfL=-999;
function dof(r,st,now){if(!st||now-dfT<70||Math.abs(r-dfL)<.4||RM||EC)return;dfT=now;dfL=r;var ch=tg.children,i,z,a;for(i=0;i<ch.length;i++){a=(i*st+r)*Math.PI/180;z=(Math.cos(a)+1)/2;ch[i].style.opacity=(.3+.7*Math.pow(z,.7)).toFixed(2);}}
function kick(){if(vis&&!raf)loop();}
function loop(){if(!vis){raf=0;return;}var busy=true,act=false,N=tg.children.length,st=N?360/N:0,now=performance.now(),d,fi;
if(tgt!==null){d=((tgt-ry)%360+540)%360-180;ry+=d*.12;act=true;lu=now;if(Math.abs(d)<.5){ry+=d*.88;tgt=null;}}
else if(dr===null){
if(!RM&&!EC&&Math.abs(vel)>.05){ry+=vel;vel*=.94;act=true;lu=now;snapped=false;}
else{vel=0;if(!snapped&&st){tgt=Math.round(ry/st)*st;snapped=true;}else if(RM||EC)busy=false;else if(now-lu>=4500)ry-=.18;}}
if(st){fi=((Math.round(-ry/st)%N)+N)%N;if(fi!==lf){if(lf>-1&&(act||dr!==null))vb();lf=fi;}}
tg.style.transform="rotateX(-12deg) rotateY("+ry+"deg)";dof(ry,st,now);raf=busy?requestAnimationFrame(loop):0;}
var s=$("tl3");
s.addEventListener("pointerdown",function(e){dr=e.clientX;mv=0;vel=0;lu=performance.now();snapped=false;kick();});
s.addEventListener("pointermove",function(e){if(dr===null)return;var d=e.clientX-dr;dr=e.clientX;mv+=Math.abs(d);ry+=d*.6;vel=vel*.5+d*.3;lm=performance.now();kick();});
["pointerup","pointercancel","pointerleave"].forEach(function(k){s.addEventListener(k,function(){if(dr===null)return;dr=null;if(performance.now()-lm>90)vel=0;vel=Math.max(-6,Math.min(6,vel));kick();});});
function pick(n,open){var o=rows().filter(function(x){return x.n==n;})[0];if(!o)return;sel=o.n;tp.textContent="#"+o.n+" "+o.li.querySelector(".t").textContent+" · "+(o.li.classList.contains("done")?"✅":"⏳")+" toque aqui para ir";if(open)card(o.li);}
tg.addEventListener("click",function(e){var b=e.target.closest("b");if(!b||mv>6)return;pick(b.dataset.n,true);});
tp.addEventListener("click",function(){if(!sel)return;var o=rows().filter(function(x){return x.n==sel;})[0];if(o){window.mrOpen&&window.mrOpen(o.li);o.li.scrollIntoView({behavior:RM?"auto":"smooth",block:"center"});}});
if("IntersectionObserver"in window)new IntersectionObserver(function(a){vis=a[0].isIntersecting;if(vis&&!raf)loop();}).observe(s);else{vis=true;loop();}
var dt;new MutationObserver(function(){clearTimeout(dt);dt=setTimeout(mk,60);}).observe(ul,{childList:true});
ul.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest(".row");if(!b)return;var li=b.parentNode;sel=0;if(li.classList.contains("done"))bolt();sy();setTimeout(sy,150);});
mk();setTimeout(sy,300);
var al=$("al"),md=$("md3");function names(){var o={};Array.prototype.forEach.call(al.querySelectorAll(".bd.on"),function(b){o[b.querySelector("small").textContent]=b;});return o;}
var pv=names();
new MutationObserver(function(){var c=names(),k,nw=null;for(k in c)if(!pv[k])nw=c[k];pv=c;if(!nw||Date.now()-t0<1500)return;md.innerHTML='<div class="coin"><span></span></div><p></p>';md.querySelector("span").textContent=nw.querySelector("i").textContent;md.lastChild.textContent=nw.querySelector("small").textContent;md.classList.remove("on");void md.getBoundingClientRect();md.classList.add("on");}).observe(al,{childList:true,subtree:true});
})();

}catch(e){console.error("[inline4]",e)}
/* inline5 */
try{

(function(){var $=function(i){return document.getElementById(i);},ul=$("list");function on(k){try{return localStorage.getItem(k)!=="0";}catch(e){return true;}}
var s=$("d3"),h=$("hph");
if(s&&h){var c=s.cloneNode(true),w,p,m=0,tm,T=["⚡ O Destino se aproxima…","🟢 Doom observa tudo de Latvéria.","🔱 Termine a maratona antes do Destino!","💥 Nem o trovão detém Victor Von Doom."];
Array.prototype.forEach.call(c.querySelectorAll("[id]"),function(e){e.removeAttribute("id");});c.removeAttribute("id");c.classList.remove("hit","off");c.classList.add("hm");c.querySelector("h3").textContent="⚡ Doomsday";w=c.querySelector(".d3w");p=c.querySelector("p");p.textContent="Toque no D";h.parentNode.insertBefore(c,h);
c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();w.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*50+"deg");w.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*40+"deg");});
c.addEventListener("pointerleave",function(){w.style.setProperty("--ry","0deg");w.style.setProperty("--rx","0deg");});
c.addEventListener("click",function(){c.classList.remove("hit");void c.offsetWidth;c.classList.add("hit");p.textContent=T[m++%T.length];try{if(on("maratona-vib")&&navigator.vibrate)navigator.vibrate([30,40,60]);}catch(e){}clearTimeout(tm);tm=setTimeout(function(){c.classList.remove("hit");},1400);});
if("IntersectionObserver"in window)new IntersectionObserver(function(a){c.classList.toggle("off",!a[0].isIntersecting);}).observe(c);}
var m2=window.mrr,ach=document.querySelector(".ach");
if(m2&&ach){var b=document.createElement("button");b.type="button";b.className="mini";b.textContent="🃏 Álbum de cartões";ach.appendChild(b);var a=document.createElement("div");a.className="c3 alb";a.hidden=true;document.body.appendChild(a);
b.onclick=function(){var r=[],g="",q,z=[0,0,0,0,0];Array.prototype.forEach.call(ul.querySelectorAll("li:not(.gh)"),function(li){var n=li.querySelector(".n");if(n)r.push({n:+n.textContent,li:li});});r.sort(function(x,y){return x.n-y.n;});
r.forEach(function(o,i){q=m2.rr(o.li);z[q]++;g+='<button type="button" class="at'+(q?"":" lk")+'" data-i="'+i+'" style="--rc:'+m2.RC[q]+'"><img alt="" src="'+o.li.querySelector(".pos").src+'"></button>';});
a.innerHTML='<button type="button" class="ax" aria-label="Fechar">✕</button><h2>🃏 Álbum</h2><p>'+(r.length-z[0])+" de "+r.length+" desbloqueados · Raros "+z[2]+" · Épicos "+z[3]+" · Lendários "+z[4]+'</p><div class="ag">'+g+"</div>";
a.querySelector(".ag").onclick=function(e){var t=e.target.closest(".at");if(t)m2.card(r[+t.dataset.i].li);};a.querySelector(".ax").onclick=function(){a.hidden=true;};a.hidden=false;};}
var bk=$("bks"),bx=bk&&bk.parentNode.querySelector(".pl"),K="maratona-bk-auto",fired=false,ab;
function au(){return on(K);}
if(bx){ab=document.createElement("button");ab.type="button";ab.className="mini";var lb=function(){ab.textContent="🔁 Backup automático semanal: "+(au()?"ligado":"desligado");};lb();ab.onclick=function(){try{localStorage.setItem(K,au()?"0":"1");}catch(e){}lb();};bx.appendChild(ab);}
document.addEventListener("click",function(){if(fired||!au())return;var t=0;try{t=parseInt(localStorage.getItem("maratona-bk-ultimo")||"0",10)||0;}catch(e){}if(t&&Date.now()-t<6048e5)return;if(!document.querySelectorAll("#list li.done").length)return;var bd=$("bd");if(!bd)return;fired=true;setTimeout(function(){bd.click();try{localStorage.setItem("maratona-bk-ultimo",String(Date.now()));}catch(e){}var o=$("toast");o.textContent="💾 Backup semanal baixado";o.className="show";setTimeout(function(){o.className="";},3000);},500);},true);
})();
(function(){var b=document.getElementById("an"),o=ANIMOFF();document.getElementById("ans").textContent=o?"desligadas":"ligadas";b.addEventListener("click",function(){try{localStorage.setItem("maratona-anim",o?"on":"off");}catch(e){}location.reload();});})(); (function(){var b=document.getElementById("eco"),o=!!window.__eco;document.getElementById("ecos").textContent=o?"ligado":"desligado";b.setAttribute("aria-pressed",o?"true":"false");b.addEventListener("click",function(){try{localStorage.setItem("maratona-eco",o?"0":"1");}catch(e){}location.reload();});})();
(function(){var b=document.getElementById("gl"),off=false;try{off=localStorage.getItem("maratona-gl")==="0";}catch(e){}function lb(){var t=document.getElementById("gls");if(t)t.textContent=off?"desligado (modo compatível)":window.__eco?"desligado (economia)":window.__glok===false?"indisponível, usando 2D":"ligado (WebGL)";}lb();setTimeout(lb,2500);setTimeout(lb,8000);if(b)b.addEventListener("click",function(){try{localStorage.setItem("maratona-gl",off?"1":"0");}catch(e){}location.reload();});})();
var $=window.$||function(i){return document.getElementById(i);};
function tst(m){var o=$("toast");o.textContent=m;o.className="show";setTimeout(function(){o.className="";},3000);}
window.addEventListener("offline",function(){tst("📴 Sem internet: tudo continua funcionando");});
window.addEventListener("online",function(){tst("🌐 Internet de volta");});
window.showUndo=function(){var u=$("und");if(u)try{u.hidden=!localStorage.getItem("maratona-undo");}catch(e){}};showUndo();$("und").addEventListener("click",function(){try{var sn=JSON.parse(localStorage.getItem("maratona-undo")||"{}");for(var k in sn)localStorage.setItem(k,sn[k]);localStorage.removeItem("maratona-undo");}catch(e){}location.reload();});

}catch(e){console.error("[inline5]",e)}
/* x3js */
try{
(function(){var D=document,H=D.documentElement,B=D.body,$=function(i){return D.getElementById(i);};
var mq=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)");
function off(){return H.classList.contains("noanim")||H.classList.contains("eco")||(mq&&mq.matches);}
function col(){return (getComputedStyle(B).getPropertyValue("--ac")||"#2fd36b").trim()||"#2fd36b";}
(function(){try{
function clamp(v){return Math.max(-1,Math.min(1,v));}
var ul=$("list");
/* ---------- 1. Profundidade: tilt + brilho + giroscópio ---------- */
var TL=[],gx=0,gy=0,vgx=0,vgy=0,tx=0,ty=0,raf=0,gOn=false,base=null;
function setT(it,x,y){
 if(off()){it.tg.style.transform="";it.tg.style.rotate="";return;}
 if(it.rot){var a=Math.hypot(x,y)*it.m;it.tg.style.rotate=a<.02?"none":(-y).toFixed(3)+" "+x.toFixed(3)+" 0 "+a.toFixed(2)+"deg";}
 else it.tg.style.transform="perspective(900px) rotateX("+(-y*it.m).toFixed(2)+"deg) rotateY("+(x*it.m).toFixed(2)+"deg)"+(it.s?" scale("+it.s+")":"");
}
function reg(el,m,o){
 if(!el)return;o=o||{};var it={el:el,tg:el,m:m,act:false,v:true,rot:!!o.rot,s:o.s};TL.push(it);
 el.classList.add("x3t");
 if(o.glare){var g=D.createElement("i");g.className="x3g";el.appendChild(g);}
 if("IntersectionObserver" in window)new IntersectionObserver(function(a){it.v=a[0].isIntersecting;}).observe(el);
 el.addEventListener("pointermove",function(e){
  if(off()||e.pointerType==="touch")return;
  var r=el.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*2,y=((e.clientY-r.top)/r.height-.5)*2;
  it.act=true;el.classList.add("x3on");el.style.setProperty("--px",((x+1)*50)+"%");el.style.setProperty("--py",((y+1)*50)+"%");setT(it,clamp(x),clamp(y));
 });
 function out(){it.act=false;el.classList.remove("x3on");setT(it,gx*.4,gy*.4);}
 el.addEventListener("pointerleave",out);el.addEventListener("pointercancel",out);
}
var DW=[];
function step(){
 raf=0;vgx=(vgx+(tx-gx)*.16)*.74;vgy=(vgy+(ty-gy)*.16)*.74;gx+=vgx;gy+=vgy;
 if(!off()){
  TL.forEach(function(it){if(!it.act&&it.v)setT(it,gx*.4,gy*.4);});
  var mi=D.querySelector(".mission");if(mi){mi.style.setProperty("--gx",gx.toFixed(3));mi.style.setProperty("--gy",gy.toFixed(3));}
  DW.forEach(function(d){if(d.v&&!d.s.matches(":hover")){d.w.style.setProperty("--ry",(gx*26)+"deg");d.w.style.setProperty("--rx",(-gy*20)+"deg");}});
  (window.__x3h||[]).forEach(function(f){f(gx,gy);});
  var cm=$("c3"),cc=$("c3c");
  if(gOn&&cm&&!cm.hidden&&cc){cc.style.setProperty("--ty",(gx*24)+"deg");cc.style.setProperty("--tx",(-gy*18)+"deg");cc.style.setProperty("--mx",(50+gx*45)+"%");cc.style.setProperty("--my",(50+gy*45)+"%");}
 }
 if(Math.abs(tx-gx)>.002||Math.abs(ty-gy)>.002||Math.abs(vgx)>.0008||Math.abs(vgy)>.0008)raf=requestAnimationFrame(step);
}
function kick(){if(!raf)raf=requestAnimationFrame(step);}
addEventListener("pointermove",function(e){if(e.pointerType!=="mouse")return;tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2;kick();},{passive:true});
function onOri(e){if(e.beta==null)return;gOn=true;var g=e.gamma||0;if(!base)base={b:e.beta,g:g};base.b+=(e.beta-base.b)*.01;base.g+=(g-base.g)*.01;ty=clamp((e.beta-base.b)/22);tx=clamp((g-base.g)/22);kick();}
function gyro(){
 try{
  if(!window.DeviceOrientationEvent)return;
  if(typeof DeviceOrientationEvent.requestPermission==="function")DeviceOrientationEvent.requestPermission().then(function(r){if(r==="granted")addEventListener("deviceorientation",onOri);}).catch(function(){});
  else addEventListener("deviceorientation",onOri);
 }catch(e){}
}
if(!window.__eco)D.addEventListener("touchend",gyro,{once:true,capture:true});
reg(D.querySelector(".mission"),5,{glare:true});
reg($("hban"),9,{rot:true});
/* Doomsday: sombra de chão + onda de choque e faíscas em 3D */
[].forEach.call(D.querySelectorAll(".d3"),function(s){
 var sw=s.querySelector(".d3sw"),w=s.querySelector(".d3w");if(!sw||!w)return;
 var f=D.createElement("div");f.className="d3fl";s.insertBefore(f,s.querySelector("p"));
 var d={s:s,w:w,v:true};DW.push(d);
 if(s.classList.contains("hm")){var it0=0,wake=function(){s.classList.remove("idle");clearTimeout(it0);it0=setTimeout(function(){s.classList.add("idle");},35000);};["pointerdown","click"].forEach(function(e){s.addEventListener(e,wake,{passive:true});});document.addEventListener("homeshow",wake);wake();}
 if("IntersectionObserver" in window)new IntersectionObserver(function(a){d.v=a[0].isIntersecting;}).observe(s);
 s.addEventListener("click",function(){
  if(off()||!sw.animate)return;var k,r,p;
  for(k=0;k<3;k++){r=D.createElement("div");r.className="d3shock";sw.appendChild(r);(function(r,k){var a=r.animate([{transform:"rotateX(75deg) scale(.2)",opacity:1},{transform:"rotateX(75deg) scale(3.4)",opacity:0}],{duration:1100,delay:k*140,easing:"cubic-bezier(.1,.7,.3,1)",fill:"both"});a.onfinish=function(){r.remove();};})(r,k);}
  for(k=0;k<24;k++){p=D.createElement("i");p.className="d3sp";sw.appendChild(p);(function(p){var an=Math.random()*6.283,dz=(Math.random()-.5)*2,dd=90+Math.random()*130,a=p.animate([{transform:"translate3d(0,0,0) scale(1)",opacity:1},{transform:"translate3d("+Math.cos(an)*dd+"px,"+Math.sin(an)*dd*.7+"px,"+dz*dd*.6+"px) scale(.2)",opacity:0}],{duration:700+Math.random()*600,easing:"cubic-bezier(.1,.8,.3,1)",fill:"both"});a.onfinish=function(){p.remove();};})(p);}
 });
});
/* ---------- partículas (usadas pelo check e pela barra) ---------- */
function burst(x,y,n,dist){
 if(off()||!D.body.animate)return;var c=col(),k,p,an,dd;
 for(k=0;k<n;k++){p=D.createElement("i");
  p.style.cssText="position:fixed;left:"+x+"px;top:"+y+"px;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;pointer-events:none;z-index:90;background:"+(k%3?c:"#fff")+";box-shadow:0 0 8px "+c;
  B.appendChild(p);an=Math.random()*6.283;dd=dist*(.5+Math.random()*.7);
  (function(p,an,dd){var a=p.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:"translate("+Math.cos(an)*dd+"px,"+(Math.sin(an)*dd-10)+"px) scale(.2)",opacity:0}],{duration:600+Math.random()*500,easing:"cubic-bezier(.1,.8,.3,1)"});a.onfinish=function(){p.remove();};})(p,an,dd);
 }
}
function stamp(r){
 if(off()||!D.body.animate)return;var e=D.createElement("i");e.className="x3stamp";e.textContent="✓";e.style.left=(r.left+r.width/2-23)+"px";e.style.top=(r.top+r.height/2-23)+"px";B.appendChild(e);
 var a=e.animate([{transform:"scale(3) rotate(-30deg)",opacity:0},{transform:"scale(1) rotate(-10deg)",opacity:1,offset:.3},{transform:"scale(1.08) rotate(-10deg)",opacity:1,offset:.45},{transform:"scale(2.2) rotate(-10deg)",opacity:0}],{duration:820,easing:"cubic-bezier(.34,1.56,.64,1)"});
 a.onfinish=function(){e.remove();};
 try{if(navigator.vibrate)navigator.vibrate(14);}catch(x){}
}
/* ---------- 2. Marcar título como visto ---------- */
if(ul){
 var press=null;
 ul.addEventListener("pointerdown",function(e){var b=e.target.closest&&e.target.closest(".row");if(!b||off())return;var r=b.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*2,y=((e.clientY-r.top)/r.height-.5)*2;b.style.transform="perspective(600px) rotateX("+(-y*7).toFixed(2)+"deg) rotateY("+(x*7).toFixed(2)+"deg) scale(.985)";press=b;},true);
 function rel(){if(press){press.style.transform="";press=null;}}
 D.addEventListener("pointerup",rel);D.addEventListener("pointercancel",rel);D.addEventListener("scroll",rel,{passive:true});
 ul.addEventListener("click",function(e){
  var b=e.target.closest&&e.target.closest(".row");if(!b||off()||!b.animate)return;
  var li=b.parentNode;if(!li.classList.contains("done"))return;
  var bx=b.querySelector(".box"),c=col(),r;
  if(bx){bx.animate([{transform:"perspective(220px) rotateY(0) scale(1)"},{transform:"perspective(220px) rotateY(180deg) scale(1.6)",offset:.5},{transform:"perspective(220px) rotateY(360deg) scale(1)"}],{duration:560,easing:"cubic-bezier(.3,.8,.3,1)"});r=bx.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,26,95);stamp(r);}
  b.animate([{boxShadow:"0 0 0 0 "+c},{boxShadow:"0 0 26px 4px "+c,offset:.35},{boxShadow:"0 0 0 0 transparent"}],{duration:750});
  var po=b.querySelector(".pos");if(po)po.animate([{transform:"perspective(200px) rotateY(0) scale(1)"},{transform:"perspective(200px) rotateY(360deg) scale(1.25)",offset:.55},{transform:"perspective(200px) rotateY(360deg) scale(1)"}],{duration:650,easing:"cubic-bezier(.22,1,.36,1)"});
  ["cnt","mdays"].forEach(function(id){var el=$(id);if(el&&el.animate)el.animate([{transform:"scale(1)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:420,easing:"cubic-bezier(.22,1,.36,1)"});});
 });
 /* ---------- 3. Entrada dos pôsteres ---------- */
 if("IntersectionObserver" in window){
  var queue=[],qt=0;
  var io=new IntersectionObserver(function(es){
   es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);queue.push(e.target);}});
   clearTimeout(qt);qt=setTimeout(flush,0);
  },{threshold:.05});
  function flush(){
   var q=queue;queue=[];if(off())return;
   q.sort(function(a,b){return a.getBoundingClientRect().top-b.getBoundingClientRect().top;});
   q.slice(0,14).forEach(function(li,i){
    var po=li.querySelector(".pos"),d=i*55;if(!li.animate)return;
    li.animate([{opacity:0,transform:"perspective(700px) rotateX(-38deg) translateY(22px) scale(.97)"},{opacity:1,transform:"none"}],{duration:520,delay:d,easing:"cubic-bezier(.2,.85,.25,1)",fill:"backwards"});
    if(po)po.animate([{opacity:0,transform:"perspective(300px) rotateY(-100deg) translateX(-16px) scale(.6)"},{opacity:1,transform:"perspective(300px) rotateY(0) translateX(0) scale(1)"}],{duration:620,delay:d+90,easing:"cubic-bezier(.2,1.25,.3,1)",fill:"backwards"});
   });
  }
  function watch(){[].forEach.call(ul.children,function(li){if(!li.classList.contains("gh")&&!li._x3){li._x3=1;io.observe(li);}});}
  watch();new MutationObserver(watch).observe(ul,{childList:true});
 }
}
/* ---------- 4. Linha do tempo cósmica ---------- */
var tg=$("tlg"),tw=tg&&tg.parentNode,t3=$("tl3");
if(tw&&t3){
 var st=D.createElement("div");st.className="tls";t3.insertBefore(st,t3.firstChild);
 var rg=["r0","r1","r2"].map(function(c){var r=D.createElement("div");r.className="tlr "+c;tw.insertBefore(r,tg);return r;});
 var cr=D.createElement("div");cr.className="tlc";tw.insertBefore(cr,tg);
 function rad(){var N=tg.children.length||53,R=Math.max(90,N*20/6.283)+8;rg.forEach(function(r){r.style.left=(-R)+"px";r.style.top=(-R)+"px";r.style.width=(2*R)+"px";r.style.height=(2*R)+"px";});}
 rad();new MutationObserver(rad).observe(tg,{childList:true});
 var tv=false,tr=0,LT1="",FC1=null;
 function tick(){
  tr=0;if(!tv||off())return;if(tg.style.transform===LT1&&tg.firstChild===FC1){tr=requestAnimationFrame(tick);return;}LT1=tg.style.transform;FC1=tg.firstChild;
  var m=/rotateY\((-?[\d.e+-]+)deg\)/.exec(tg.style.transform||""),ry=m?+m[1]:0,ch=tg.children,N=ch.length,i,z;
  st.style.backgroundPosition=(-ry*1.6)+"px 0";
  for(i=0;i<N;i++){z=Math.cos((i*360/N+ry)*Math.PI/180);ch[i].style.opacity=(.28+.72*(z+1)/2).toFixed(2);}
  tr=requestAnimationFrame(tick);
 }
 if("IntersectionObserver" in window)new IntersectionObserver(function(a){tv=a[0].isIntersecting;if(tv&&!tr)tr=requestAnimationFrame(tick);}).observe(t3);
}
/* ---------- 5. Barra de progresso ---------- */
var pb=$("pb"),bar=pb&&pb.parentNode;
if(bar){
 var hd=D.createElement("div");hd.className="x3h";bar.appendChild(hd);
 var ks=[25,50,75].map(function(p){var k=D.createElement("u");k.className="x3k";k.style.left=p+"%";bar.appendChild(k);return k;});
 var last=parseFloat(pb.style.width)||0;
 function upd(first){
  var p=parseFloat(pb.style.width)||0;hd.style.left=p+"%";hd.style.opacity=p>0&&p<100?"1":"0";
  ks.forEach(function(k,i){k.classList.toggle("on",p>=(i+1)*25);});
  if(!first&&!off()&&p>last){
   if(bar.animate)bar.animate([{transform:"scaleY(1)"},{transform:"scaleY(2)"},{transform:"scaleY(1)"}],{duration:380,easing:"cubic-bezier(.22,1,.36,1)"});
   var hit=[25,50,75,100].filter(function(t){return last<t&&p>=t;}).pop();
   if(hit){
    var r=bar.getBoundingClientRect(),x=r.left+r.width*Math.min(p,100)/100,y=r.top+r.height/2;
    burst(x,y,hit===100?44:28,hit===100?150:100);
    var lb=D.createElement("b");lb.textContent=hit+"% ✨";lb.style.cssText="position:fixed;left:"+x+"px;top:"+(y-14)+"px;transform:translateX(-50%);z-index:91;pointer-events:none;color:#fff;font-weight:700;text-shadow:0 0 10px "+col()+",0 2px 6px #000";
    B.appendChild(lb);if(lb.animate){var a=lb.animate([{opacity:0,transform:"translate(-50%,8px) scale(.6)"},{opacity:1,transform:"translate(-50%,-6px) scale(1.2)",offset:.25},{opacity:0,transform:"translate(-50%,-34px) scale(1)"}],{duration:1500,easing:"cubic-bezier(.22,1,.36,1)"});a.onfinish=function(){lb.remove();};}else lb.remove();
   }
  }
  last=p;
 }
 upd(true);new MutationObserver(function(){upd(false);}).observe(pb,{attributes:true,attributeFilter:["style"]});
}
}catch(err){if(window.console)console.warn("x3",err);}})();
(function(){try{
/* ---------- cartão holográfico: raridade a partir da cor ---------- */
var cc=$("c3c"),RCS={"#667":0,"#9aa8a0":1,"#4aa3ff":2,"#b46bff":3,"#ffc83d":4};
if(cc){
 var mo=new MutationObserver(function(){var c=(cc.style.getPropertyValue("--rc")||"").trim().toLowerCase();var r=RCS[c];cc.dataset.r=r==null?"0":r;
  var cm=$("c3");if(cm&&c)cm.style.setProperty("--rc2",c);});
 mo.observe(cc,{attributes:true,attributeFilter:["style"]});
}
/* ---------- medalhas: giro ao tocar ---------- */
var al=$("al");
if(al)al.addEventListener("click",function(e){
 var b=e.target.closest&&e.target.closest(".bd"),i=b&&b.querySelector("i");if(!i||off()||!i.animate)return;
 i.animate([{transform:"rotateY(0) scale(1)"},{transform:"rotateY(540deg) scale(1.35)",offset:.6},{transform:"rotateY(720deg) scale(1)"}],{duration:900,easing:"cubic-bezier(.3,.8,.3,1)"});
});
/* ---------- cena: parallax, névoa, relâmpago, vinheta ---------- */
var art=D.querySelector(".art"),cv=$("pix");
if(art&&cv){
 var vg=D.createElement("div"),mi=D.createElement("div"),fl=D.createElement("div");
 vg.className="x3v";mi.className="x3m";fl.className="x3f";
 art.insertBefore(vg,cv.nextSibling);art.insertBefore(mi,vg.nextSibling);art.insertBefore(fl,mi.nextSibling);
 (window.__x3h=window.__x3h||[]).push(function(gx,gy){
  if(off()){cv.style.translate="";mi.style.translate="";return;}
  cv.style.translate=(gx*-9)+"px "+(gy*-6)+"px";mi.style.translate=(gx*16)+"px "+(gy*8)+"px";
 });
 var av=true,lt=0;
 if("IntersectionObserver" in window)new IntersectionObserver(function(a){av=a[0].isIntersecting;}).observe(art);
 (function next(){lt=setTimeout(function(){
  if(av&&!off()&&fl.animate&&!D.hidden){
   fl.style.setProperty("--lx",(25+Math.random()*60)+"%");
   fl.animate([{opacity:0},{opacity:.85,offset:.08},{opacity:.1,offset:.2},{opacity:.6,offset:.3},{opacity:0}],{duration:520,easing:"cubic-bezier(.22,1,.36,1)"});
   cv.animate([{filter:"brightness(1)"},{filter:"brightness(1.7)",offset:.08},{filter:"brightness(1.05)",offset:.2},{filter:"brightness(1.4)",offset:.3},{filter:"brightness(1)"}],{duration:520,easing:"cubic-bezier(.22,1,.36,1)"});
  }
  next();},4500+Math.random()*6000);})();
}
/* ---------- linha do tempo: câmera + cor da saga ---------- */
var tg=$("tlg"),t3=$("tl3"),ul=$("list");
if(tg&&t3){
 var lastF=null;
 function front(){
  var m=/rotateY\((-?[\d.e+-]+)deg\)/.exec(tg.style.transform||""),ry=m?+m[1]:0,ch=tg.children,N=ch.length,i,z,bz=-2,bi=-1;
  for(i=0;i<N;i++){z=Math.cos((i*360/N+ry)*Math.PI/180);if(z>bz){bz=z;bi=i;}}
  return bi>-1?ch[bi]:null;
 }
 var run=0,vis=false,LT2="",FC2=null;
 function loop(){
  run=0;if(!vis||off())return;if(tg.style.transform===LT2&&tg.firstChild===FC2){run=requestAnimationFrame(loop);return;}LT2=tg.style.transform;FC2=tg.firstChild;
  var f=front();
  if(f&&f!==lastF){if(lastF)lastF.classList.remove("x3q");f.classList.add("x3q");lastF=f;var c=f.style.getPropertyValue("--pc");if(c)t3.style.setProperty("--rc2",c);}
  run=requestAnimationFrame(loop);
 }
 if("IntersectionObserver" in window)new IntersectionObserver(function(a){vis=a[0].isIntersecting;if(vis&&!run)run=requestAnimationFrame(loop);}).observe(t3);
 if(ul)ul.addEventListener("click",function(e){
  var b=e.target.closest&&e.target.closest(".row");if(!b||off()||!window.__tlGo)return;
  var n=b.querySelector(".n");if(!n)return;
  var i=Array.prototype.findIndex.call(tg.children,function(x){return x.dataset.n===n.textContent;});
  if(i>-1)window.__tlGo(i);
 });
}
/* ---------- transição de tema ---------- */
var tm=$("temas");
if(tm)tm.addEventListener("click",function(e){
 var b=e.target.closest&&e.target.closest("button");if(!b||off()||!D.body.animate)return;
 var x=e.clientX,y=e.clientY;
 requestAnimationFrame(function(){requestAnimationFrame(function(){
  var c=col(),d=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))*2;
  var o=D.createElement("div");o.style.cssText="position:fixed;left:"+x+"px;top:"+y+"px;width:"+d+"px;height:"+d+"px;margin:"+(-d/2)+"px 0 0 "+(-d/2)+"px;border-radius:50%;pointer-events:none;z-index:95;background:radial-gradient(circle,transparent 55%,"+c+" 62%,transparent 70%);mix-blend-mode:screen";
  B.appendChild(o);
  var a=o.animate([{transform:"scale(.02)",opacity:.9},{transform:"scale(1)",opacity:0}],{duration:900,easing:"cubic-bezier(.2,.7,.3,1)"});a.onfinish=function(){o.remove();};
  H.classList.add("x3tr");setTimeout(function(){H.classList.remove("x3tr");},750);
 });});
});
}catch(err){if(window.console)console.warn("x3b",err);}})();
(function(){try{
function burst(x,y,n,dist,c){
 if(off()||!B.animate)return;c=c||col();var k,p,an,dd;
 for(k=0;k<n;k++){p=D.createElement("i");
  p.style.cssText="position:fixed;left:"+x+"px;top:"+y+"px;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;pointer-events:none;z-index:96;background:"+(k%3?c:"#fff")+";box-shadow:0 0 8px "+c;
  B.appendChild(p);an=Math.random()*6.283;dd=dist*(.5+Math.random()*.7);
  (function(p,an,dd){var a=p.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:"translate("+Math.cos(an)*dd+"px,"+(Math.sin(an)*dd-10)+"px) scale(.2)",opacity:0}],{duration:600+Math.random()*500,easing:"cubic-bezier(.1,.8,.3,1)"});a.onfinish=function(){p.remove();};})(p,an,dd);
 }
}
function watch(el,fn,o){if(!el)return;var t=0;new MutationObserver(function(){if(t)return;t=requestAnimationFrame(function(){t=0;fn();});}).observe(el,o||{childList:true});}
var ul=$("list"),home=$("home");
/* ---------- 1. Tela de início ---------- */
if(home){
 var sl=D.createElement("div");sl.className="x3s";sl.innerHTML="<i class='a'></i><i class='b'></i><i class='c'></i>";
 var bg=$("hbg");home.insertBefore(sl,bg?bg.nextSibling:home.firstChild);
 var ls=sl.children;
 (window.__x3h=window.__x3h||[]).push(function(gx,gy){
  if(off()){for(var i=0;i<3;i++)ls[i].style.translate="";return;}
  for(var i=0;i<3;i++)ls[i].style.translate=(gx*(8+i*14))+"px "+(gy*(6+i*10))+"px";
 });
 var hin=home.querySelector(".hin");
 if(hin)[].forEach.call(hin.children,function(c,i){c.style.setProperty("--i",Math.min(i,12));});
 ["cd-d","cd-h","cd-m","cd-s"].forEach(function(id){
  var b=$(id);if(!b||id==="cd-s")return;
  var lastT=b.textContent;new MutationObserver(function(){var t=b.textContent;if(t===lastT)return;lastT=t;if(off()||!b.animate)return;b.animate([{transform:"perspective(200px) rotateX(-60deg)",opacity:.55},{transform:"none",opacity:1}],{duration:280,easing:"cubic-bezier(.2,.9,.3,1)"});}).observe(b,{childList:true,characterData:true,subtree:true});
 });
}
/* ---------- 2. Patente: brasão 3D + anel de XP ---------- */
var hr=$("hrank"),NM=["Recruta","Agente","Vingador","Defensor","Herói Supremo","Mestre do Multiverso"],CL=["#9aa8a0","#4aa3ff","#2fd36b","#b46bff","#ffc83d","#ff5ea8"],prevR=-1,C=2*Math.PI*34;
function rank(){
 if(!hr)return;if(hr.firstChild&&hr.firstChild.classList&&hr.firstChild.classList.contains("x3rk"))return;
 var b=hr.querySelector("b"),bi=hr.querySelector(".hbar i");if(!b||!bi)return;
 var tx=b.textContent,em=tx.split(" ")[0],idx=-1,i,pct=parseFloat(bi.style.width)||0;
 for(i=0;i<NM.length;i++)if(tx.indexOf(NM[i])>-1)idx=i;
 var t=D.createElement("div");t.className="x3rt";while(hr.firstChild)t.appendChild(hr.firstChild);
 var bd=D.createElement("div");bd.className="x3rk";if(idx>-1)bd.style.setProperty("--rk",CL[idx]);
 bd.innerHTML='<svg viewBox="0 0 78 78" aria-hidden="true"><circle class="bg" cx="39" cy="39" r="34"/><circle class="fg" cx="39" cy="39" r="34" stroke-dasharray="'+C.toFixed(2)+'" stroke-dashoffset="'+C.toFixed(2)+'"/></svg><div class="co" aria-hidden="true"></div>';
 bd.querySelector(".co").textContent=em;
 hr.classList.add("x3rkw");hr.appendChild(bd);hr.appendChild(t);
 requestAnimationFrame(function(){requestAnimationFrame(function(){var f=bd.querySelector(".fg");if(f)f.style.strokeDashoffset=(C*(1-Math.min(pct,100)/100)).toFixed(2);});});
 if(prevR>-1&&idx>prevR&&!off()){bd.classList.add("up");setTimeout(function(){bd.classList.remove("up");},1600);var r=bd.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,40,120,CL[idx]);}
 if(idx>-1)prevR=idx;
}
if(hr){rank();watch(hr,rank);}
/* ---------- 3. Quiz: resultado animado ---------- */
var qb=$("qbody");
if(qb)watch(qb,function(){
 if(off())return;var ps=qb.querySelectorAll("p"),r=null,i;
 for(i=0;i<ps.length;i++)if(/Acertou|Era:/.test(ps[i].textContent))r=ps[i];
 if(!r||r._x3)return;r._x3=1;
 if(/Acertou/.test(r.textContent)){
  if(r.animate)r.animate([{transform:"perspective(300px) scale(.4) rotateX(-60deg)",opacity:0},{transform:"scale(1.25)",opacity:1,offset:.5},{transform:"none"}],{duration:520,easing:"cubic-bezier(.2,1.2,.3,1)"});
  var b=r.getBoundingClientRect();burst(b.left+b.width/2,b.top+b.height/2,26,90);
 }else{var bx=qb.closest(".sbox");if(bx&&bx.animate)bx.animate([{translate:"0"},{translate:"-9px"},{translate:"8px"},{translate:"-5px"},{translate:"3px"},{translate:"0"}],{duration:420});}
});
/* ---------- 4. Estrelas de nota ---------- */
if(ul)ul.addEventListener("click",function(e){
 if(off())return;
 var sb=e.target.closest&&e.target.closest(".stars button");
 if(sb){var st=sb.parentNode;setTimeout(function(){
  [].filter.call(st.children,function(x){return x.classList.contains("on");}).forEach(function(x,k){if(x.animate)x.animate([{transform:"perspective(120px) rotateY(0) scale(1)"},{transform:"perspective(120px) rotateY(360deg) scale(1.5)",offset:.55},{transform:"perspective(120px) rotateY(360deg) scale(1)"}],{duration:520,delay:k*70,easing:"cubic-bezier(.22,1,.36,1)"});});
 },0);return;}
 var rw=e.target.closest&&e.target.closest(".row");
 if(rw){var li=rw.parentNode;if(!li.classList.contains("done"))return;var s2=li.querySelector(".stars");
  if(s2)[].forEach.call(s2.children,function(x,k){if(x.animate)x.animate([{opacity:0,transform:"perspective(200px) translateZ(-140px) rotateX(70deg)"},{opacity:1,transform:"none"}],{duration:480,delay:120+k*65,easing:"cubic-bezier(.2,1.3,.3,1)",fill:"backwards"});});}
});
/* ---------- 5. Missões (carimbo) e sequência (chama) ---------- */
var hm=$("hmis"),seenM={},firstM=true;
function mis(){
 [].forEach.call(hm.querySelectorAll(".hmi.ok"),function(r){var k=(r.firstChild&&r.firstChild.textContent)||"";if(firstM||seenM[k])r.classList.add("x3old");seenM[k]=1;});
 firstM=false;
}
if(hm){mis();watch(hm,mis);}
var sk=$("hstk");
function fire(){
 if(!sk||sk.querySelector(".x3fire")||sk.textContent.indexOf("🔥")<0)return;
 var parts=sk.textContent.split("🔥"),f=D.createDocumentFragment();
 parts.forEach(function(p,i){if(i>0){var s=D.createElement("span");s.className="x3fire";s.textContent="🔥";f.appendChild(s);}if(p)f.appendChild(D.createTextNode(p));});
 sk.textContent="";sk.appendChild(f);
}
if(sk){fire();watch(sk,fire,{childList:true,characterData:true,subtree:true});}
/* ---------- 6. Parede de pôsteres ---------- */
if(ul&&ul.parentNode){
 var wb=D.createElement("button");wb.type="button";wb.id="x3wb";wb.className="mini";wb.setAttribute("aria-pressed","false");wb.textContent="🖼️ Parede de pôsteres";
 var wl=D.createElement("div");wl.id="x3wall";wl.hidden=true;
 ul.parentNode.insertBefore(wb,ul);ul.parentNode.insertBefore(wl,ul);
 var wOn=false,wt=0;
 function wall(anim){
  var lis=[],gh=null;[].forEach.call(ul.children,function(li){if(li.classList.contains("gh")){gh=li;return;}if(!li.querySelector(".pos"))return;if(!li.hidden||(gh&&gh.classList.contains("col")))lis.push(li);});
  lis.sort(function(a,b){return +a.querySelector(".n").textContent-+b.querySelector(".n").textContent;});
  wl.textContent="";
  lis.forEach(function(li,i){
   var q=0;try{q=window.mrr?window.mrr.rr(li):(li.classList.contains("done")?1:0);}catch(e){}
   var cl=(window.mrr&&window.mrr.RC&&window.mrr.RC[q])||"#667",t=D.createElement("button"),im=D.createElement("img"),n=D.createElement("b"),g=D.createElement("i");
   t.type="button";t.className="x3tile "+(li.classList.contains("done")?"dn":"nd");t.style.setProperty("--tc",cl);
   var ti=li.querySelector(".t");t.setAttribute("aria-label",(ti?ti.textContent:"Título")+(li.classList.contains("done")?" (visto)":""));
   im.alt="";im.src=li.querySelector(".pos").src;n.textContent=li.querySelector(".n").textContent;g.className="x3g";
   t.appendChild(im);t.appendChild(n);t.appendChild(g);
   t.addEventListener("click",function(){if(window.mrr&&window.mrr.card)window.mrr.card(li);});
   wl.appendChild(t);
   if(anim&&!off()&&t.animate)t.animate([{opacity:0,transform:"perspective(700px) rotateY(-95deg) translateY(30px) scale(.7)"},{opacity:1,transform:"none"}],{duration:560,delay:Math.min(i,40)*28,easing:"cubic-bezier(.2,1.2,.3,1)",fill:"backwards"});
  });
 }
 function setW(v){wOn=v;wb.setAttribute("aria-pressed",String(v));wb.textContent=v?"📋 Voltar para a lista":"🖼️ Parede de pôsteres";wl.hidden=!v;ul.style.display=v?"none":"";if(v)wall(true);}
 wb.addEventListener("click",function(){setW(!wOn);});
 new MutationObserver(function(){if(!wOn)return;clearTimeout(wt);wt=setTimeout(function(){wall(false);},120);}).observe(ul,{childList:true,subtree:true,attributes:true,attributeFilter:["class","hidden"]});
 wl.addEventListener("pointermove",function(e){
  if(off()||e.pointerType==="touch")return;var t=e.target.closest&&e.target.closest(".x3tile");if(!t)return;
  var r=t.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*2,y=((e.clientY-r.top)/r.height-.5)*2;
  t.classList.add("x3on");t.style.setProperty("--px",((x+1)*50)+"%");t.style.setProperty("--py",((y+1)*50)+"%");
  t.style.transform="perspective(600px) rotateX("+(-y*14).toFixed(1)+"deg) rotateY("+(x*14).toFixed(1)+"deg) translateZ(18px) scale(1.06)";
 });
 wl.addEventListener("pointerout",function(e){var t=e.target.closest&&e.target.closest(".x3tile");if(t&&!t.contains(e.relatedTarget)){t.classList.remove("x3on");t.style.transform="";}});
}
/* ---------- 7. Anel de progresso por saga ---------- */
var SC=2*Math.PI*12;
function rings(){
 if(!ul)return;
 [].forEach.call(ul.querySelectorAll("li.gh"),function(h){
  var gc=h.querySelector(".gc"),m=gc&&/(\d+)\/(\d+)/.exec(gc.textContent);if(!m)return;
  var d=+m[1],t=+m[2],p=t?d/t:0,r=h.querySelector(".x3sr"),f;
  if(!r){r=D.createElement("span");r.className="x3sr";r.setAttribute("aria-hidden","true");
   r.innerHTML='<svg viewBox="0 0 30 30"><circle class="bg" cx="15" cy="15" r="12"/><circle class="fg" cx="15" cy="15" r="12" stroke-dasharray="'+SC.toFixed(2)+'" stroke-dashoffset="'+SC.toFixed(2)+'"/></svg>';
   h.insertBefore(r,h.firstChild);}
  f=r.querySelector(".fg");
  requestAnimationFrame(function(){f.style.strokeDashoffset=(SC*(1-p)).toFixed(2);});
  var full=t>0&&d===t,was=h.dataset.full==="1";
  h.classList.toggle("x3full",full);
  if(full&&!was&&h.dataset.init==="1"){var b=r.getBoundingClientRect();burst(b.left+b.width/2,b.top+b.height/2,30,80,"#ffc83d");}
  h.dataset.full=full?"1":"0";h.dataset.init="1";
 });
}
if(ul){rings();watch(ul,rings,{childList:true,subtree:true,characterData:true});}
}catch(err){if(window.console)console.warn("x3c",err);}})();
/* ---------- extras 3D + leitor de tela ---------- */
(function(){try{
var ul=$("list"),sr=D.createElement("div"),tz=$("toast");sr.id="srl";sr.className="srx";sr.setAttribute("role","status");sr.setAttribute("aria-live","polite");B.appendChild(sr);
if(tz)new MutationObserver(function(){var t=tz.textContent;if(!t)return;sr.textContent="";setTimeout(function(){sr.textContent=t;},60);}).observe(tz,{childList:true,characterData:true,subtree:true});
["cnt","next"].forEach(function(i){var e=$(i);if(e)e.setAttribute("aria-live","polite");});
function calm(){return off()||ANIMOFF();}
ul.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("button.row");if(!b||b.getAttribute("aria-pressed")!=="true"||calm())return;var li=b.parentNode,st=D.createElement("span");st.className="vst";st.setAttribute("aria-hidden","true");st.textContent="VISTO";li.style.position="relative";li.appendChild(st);setTimeout(function(){st.remove();},1400);
li.animate([{transform:"perspective(700px) rotateX(0)"},{transform:"perspective(700px) rotateX(-9deg) translateY(4px)"},{transform:"none"}],{duration:420,delay:380,easing:"cubic-bezier(.22,1,.36,1)"});
ul.animate([{translate:"0 0"},{translate:"0 3px"},{translate:"0 -2px"},{translate:"0 0"}],{duration:260,delay:380});});
function shine(){var sw=$("d3sw");if(!sw||!sw.querySelector(".d3l"))return false;if(!sw.querySelector(".d3s"))sw.insertAdjacentHTML("beforeend",'<div class="d3l d3s" style="transform:translateZ(27px)" aria-hidden="true">D</div>');return true;}
if(!shine()){var sw0=$("d3sw");if(sw0){var mo=new MutationObserver(function(){if(shine())mo.disconnect();});mo.observe(sw0,{childList:true});}}
var tlg=$("tlg"),tl3=$("tl3"),cam=0;
function nxt(){if(!tlg)return;var f=null,c=tlg.children,i,e;for(i=0;i<c.length;i++)if(!f&&c[i].className.indexOf("d")<0)f=c[i];for(i=0;i<c.length;i++){e=c[i];var on=e===f;if(e.classList.contains("nx")!==on)e.classList.toggle("nx",on);}}
if(tlg){new MutationObserver(nxt).observe(tlg,{childList:true,subtree:true,attributes:true,attributeFilter:["class"]});nxt();}
function cm(){cam=0;if(!tlg||!tl3)return;if(calm()){tlg.style.translate="";return;}var r=tl3.getBoundingClientRect(),h=innerHeight,p=Math.max(0,Math.min(1,(h-r.top)/(h+r.height)));tlg.style.translate="0 0 "+Math.round(-70+p*110)+"px";}
addEventListener("scroll",function(){if(!cam)cam=requestAnimationFrame(cm);},{passive:true});cm();
function portal(){var p=D.createElement("div"),h="<b></b>",i;p.className="ptl";p.setAttribute("aria-hidden","true");for(i=0;i<7;i++)h+='<i style="--k:'+i+'"></i>';p.innerHTML=h;B.appendChild(p);setTimeout(function(){p.remove();},2900);}
window.__portal=function(){if(!calm())portal();};
var dmE=D.querySelector(".dm");function pulse(){window.__mkp=performance.now()/1000;if(dmE){dmE.classList.add("dmf");setTimeout(function(){dmE.classList.remove("dmf");},500);}}
if(dmE)dmE.addEventListener("click",function(){pulse();try{if(navigator.vibrate)navigator.vibrate(30);}catch(e){}});
ul.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("button.row");if(b&&b.getAttribute("aria-pressed")==="true")pulse();});
}catch(e){}})();
})();
(function(){var tp=document.querySelector(".top"),ly=window.scrollY||0;if(!tp)return;
window.addEventListener("scroll",function(){var y=window.scrollY||0,d=y-ly;if(document.activeElement&&document.activeElement.id==="q"){tp.classList.remove("hid");ly=y;return;}
if(y>320&&d>8){tp.classList.add("hid");ly=y;}else if(d<-8||y<=320){tp.classList.remove("hid");ly=y;}},{passive:true});})();

}catch(e){console.error("[x3js]",e)}
/* qzicons-js */
try{
(function(){try{
var B=document.getElementById("qbody");if(!B)return;
var A=function(n,d){return [n,d];};
var M={
"🧠":A("brain",'<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9.6 9.6a2.4 2.4 0 0 1 4.8 0c0 1.5-2.4 1.9-2.4 3.4"/><circle cx="12" cy="16.4" r=".6" fill="currentColor"/>'),
"🎬":A("quote",'<path d="M4 5h16v11H10l-4 4v-4H4z"/><path d="M8 9h8M8 12.2h5"/>'),
"📅":A("cal",'<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 10h16M8 3v4M16 3v4"/>'),
"🗂":A("layers",'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 16.5l9 5 9-5" opacity=".55"/>'),
"⏳":A("hour",'<path d="M7 3h10M7 21h10"/><path d="M8 3v3.5a4 4 0 0 0 1.2 2.8L12 12l-2.8 2.7A4 4 0 0 0 8 17.5V21"/><path d="M16 3v3.5a4 4 0 0 1-1.2 2.8L12 12l2.8 2.7A4 4 0 0 1 16 17.5V21"/>'),
"⏱":A("stop",'<circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9.5M9.5 2.5h5M12 2.5V6"/>'),
"🎞":A("film",'<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7.5 4v16M16.5 4v16M3 9h4.5M3 15h4.5M16.5 9H21M16.5 15H21"/>'),
"🎲":A("dice",'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="8.8" cy="8.8" r="1.1" fill="currentColor"/><circle cx="15.2" cy="8.8" r="1.1" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/><circle cx="8.8" cy="15.2" r="1.1" fill="currentColor"/><circle cx="15.2" cy="15.2" r="1.1" fill="currentColor"/>'),
"🎚":A("sliders",'<path d="M4 8h9M19 8h1M4 16h1M11 16h9"/><circle cx="16" cy="8" r="2.4"/><circle cx="8" cy="16" r="2.4"/>'),
"▶":A("play",'<path d="M8 5.5l11 6.5-11 6.5z" fill="currentColor"/>'),
"♾":A("inf",'<path d="M12 12c-2-2.6-3.6-4-5.5-4a4 4 0 0 0 0 8c1.9 0 3.5-1.4 5.5-4zm0 0c2 2.6 3.6 4 5.5 4a4 4 0 0 0 0-8c-1.9 0-3.5 1.4-5.5 4z"/>'),
"❤":A("heart",'<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z" fill="currentColor"/>'),
"🖤":A("hearto",'<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>'),
"📆":A("calc",'<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 10h16M8 3v4M16 3v4M9 15l2.2 2.2L15.5 13"/>'),
"🔁":A("redo",'<path d="M20 11a8 8 0 0 0-14.2-4L4 9"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14.2 4L20 15"/><path d="M20 20v-5h-5"/>'),
"🔄":A("redo2",'<path d="M20 11a8 8 0 0 0-14.2-4L4 9"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14.2 4L20 15"/><path d="M20 20v-5h-5"/>'),
"📤":A("share",'<path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 12.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6.5"/>'),
"⚙":A("back",'<path d="M15 5l-7 7 7 7"/>'),
"⏹":A("sq",'<rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor"/>'),
"✂":A("half",'<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor"/>'),
"⏭":A("skip",'<path d="M5 5.5l9 6.5-9 6.5z" fill="currentColor"/><path d="M18.5 5v14"/>'),
"✅":A("ok",'<circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.7 2.7L16.2 9.5"/>'),
"❌":A("no",'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>'),
"⏰":A("clock",'<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4.2l2.6 1.6M5 4.5L3 6.5M19 4.5l2 2"/>'),
"🔥":A("flame",'<path d="M12 3c.8 3.6 5 5 5 10a5 5 0 0 1-10 0c0-1.8.8-3 2-4.2 0 1.8.8 2.8 2 2.8-.6-3 .2-5.2 1-8.6z" fill="currentColor"/>'),
"🎁":A("gift",'<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M3 9h18v3H3zM12 9v11M12 9c-1.5-4-5.5-4-5.5-1.5S10 9 12 9zm0 0c1.5-4 5.5-4 5.5-1.5S14 9 12 9z"/>'),
"🏆":A("trophy",'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5v1.5A3 3 0 0 0 8 10.5M16 6h3v1.5a3 3 0 0 1-3 3M12 13v4M8.5 20h7M10 17h4"/>'),
"🦸":A("hero",'<path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6z"/><path d="M12 8.2l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z" fill="currentColor" stroke="none"/>'),
"🛡":A("shield",'<path d="M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>'),
"📚":A("book",'<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3M9 7h6M9 10.5h4"/>'),
"🏅":A("medal",'<circle cx="12" cy="15" r="5.5"/><path d="M8.5 3l3.5 6 3.5-6M10 15l1.5 1.5L14.5 13"/>'),
"🎯":A("target",'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>'),
"📺":A("tv",'<rect x="3" y="6" width="18" height="12" rx="2.5"/><path d="M9 21h6M8 3l4 3 4-3"/>')
};
var ks=Object.keys(M),re=new RegExp("("+ks.join("|")+")\\uFE0F?","g"),t0=new RegExp("("+ks.join("|")+")");
function mk(k){var e=M[k],s=document.createElement("span");s.className="qi i-"+e[0];s.setAttribute("aria-hidden","true");s.innerHTML='<svg viewBox="0 0 24 24" focusable="false">'+e[1]+'</svg>';return s;}
function run(){
 var w=document.createTreeWalker(B,NodeFilter.SHOW_TEXT,null),n,L=[];
 while((n=w.nextNode())){if(!t0.test(n.data))continue;if(n.parentNode.closest&&n.parentNode.closest("button.qo"))continue;L.push(n);}
 L.forEach(function(n){var parts=n.data.split(re),f=document.createDocumentFragment(),i;
  for(i=0;i<parts.length;i++){if(i%2){f.appendChild(mk(parts[i]));}else if(parts[i]){f.appendChild(document.createTextNode(parts[i]));}}
  n.parentNode.replaceChild(f,n);});
}
window.__qzMk=mk;var q=0;function sch(){if(q)return;q=requestAnimationFrame(function(){q=0;try{run();}catch(e){}});}
new MutationObserver(sch).observe(B,{childList:true,subtree:true});
run();
}catch(e){if(window.console)console.warn("qzicons",e);}})();
}catch(e){console.error("[qzicons-js]",e)}
/* qzvis-js */
try{
(function(){try{
var B=document.getElementById("qbody");if(!B)return;
function ic(k){return window.__qzMk?window.__qzMk(k):document.createTextNode("");}
function stats(){var sm=B.querySelector(":scope>p>small");if(!sm||!sm.parentNode.dataset||sm.parentNode.dataset.qv)return;
 var m=/Acertos:\s*(\d+).*?sequência:\s*(\d+)(?:.*?prêmio:\s*(\d+))?/.exec(sm.textContent);if(!m)return;
 var d=document.createElement("div");d.className="qstats";
 [["🎯",m[1],"Acertos"],["🔥",m[2],"Melhor sequência"]].concat(m[3]?[["🏆",m[3],"Próximo prêmio"]]:[]).forEach(function(x){
  var c=document.createElement("div"),b=document.createElement("b"),s=document.createElement("span");b.textContent=x[1];s.textContent=x[2];
  c.appendChild(ic(x[0]));c.appendChild(b);c.appendChild(s);d.appendChild(c);});
 sm.parentNode.replaceWith(d);}
function res(){var r=B.querySelector(".qres");if(!r||r.dataset.qv)return;
 var m=/^(\d+)\/(\d+)$/.exec(r.textContent.trim());if(!m)return;r.dataset.qv="1";
 var a=+m[1],n=+m[2],pc=n?a/n:0,C=2*Math.PI*52,col=pc>=.7?"var(--ac)":pc>=.5?"#ffc83d":"#ff6a62",i,e=pc>=.9?3:pc>=.7?2:pc>=.4?1:0,h="";
 r.classList.add("qring");
 r.innerHTML='<svg viewBox="0 0 120 120" aria-hidden="true"><circle class="bg" cx="60" cy="60" r="52"/><circle class="fg" cx="60" cy="60" r="52" style="stroke:'+col+';color:'+col+';stroke-dasharray:'+C.toFixed(1)+';stroke-dashoffset:'+C.toFixed(1)+'"/></svg><span>'+a+'/'+n+'</span>';
 requestAnimationFrame(function(){requestAnimationFrame(function(){var f=r.querySelector(".fg");if(f)f.style.strokeDashoffset=(C*(1-pc)).toFixed(1);});});
 for(i=0;i<3;i++)h+='<svg viewBox="0 0 24 24"'+(i<e?' class="on"':'')+'><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';
 var st=document.createElement("p");st.className="qstars";st.setAttribute("aria-label",e+" de 3 estrelas");st.innerHTML=h;r.parentNode.insertBefore(st,r.nextSibling);}
function sels(){var l=B.querySelectorAll(":scope>.qsel");if(l[0]&&!l[0].classList.contains("qmodes"))l[0].classList.add("qmodes");if(l[1]&&!l[1].classList.contains("qdif"))l[1].classList.add("qdif");}
var q=0;function sch(){if(q)return;q=requestAnimationFrame(function(){q=0;try{sels();stats();res();}catch(e){}});}
new MutationObserver(sch).observe(B,{childList:true,subtree:true});sch();
}catch(e){if(window.console)console.warn("qzvis",e);}})();
}catch(e){console.error("[qzvis-js]",e)}
/* v6js */
try{

(function(){try{
var tg=document.getElementById("tlg");if(!tg)return;
var busy=0;
function tag(){busy=0;var ul=document.getElementById("list");if(!ul)return;var m={};
Array.prototype.forEach.call(ul.querySelectorAll("li"),function(li){var n=li.querySelector(".n"),t=li.querySelector(".t");if(n&&t)m[n.textContent]=t.textContent;});
Array.prototype.forEach.call(tg.children,function(b){var t=m[b.dataset.n];if(t&&b.getAttribute("data-t")!==t)b.setAttribute("data-t",t);});if(typeof lab==="function")lab();}
function q(){if(!busy)busy=setTimeout(tag,80);}
new MutationObserver(q).observe(tg,{childList:true});
var ul=document.getElementById("list");if(ul)new MutationObserver(q).observe(ul,{childList:true});
tag();setTimeout(tag,400);setTimeout(tag,1500);
/* nos de frente para a camera (sem achatar nas laterais) */
var lb=document.createElement("div");lb.className="tlf";lb.setAttribute("aria-hidden","true");var tl0=document.getElementById("tl3");if(tl0)tl0.appendChild(lb);
function lab(){var f=tg.querySelector(".x3q");if(!f){return;}var t=f.getAttribute("data-t")||"";if(lb.textContent!==t)lb.textContent=t;var c=f.style.getPropertyValue("--pc");if(c)lb.style.setProperty("--lc",c);}
var root=document.documentElement,tl=document.getElementById("tl3"),on=false,last="",lastN=0,rf=0;
function ss(a,b,x){x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x);}
function bb(){rf=0;if(!on)return;
 var tr=tg.style.transform||"",ch=tg.children,N=ch.length;
 if(tr!==last||N!==lastN){last=tr;lastN=N;
  var m=/rotateY\((-?[\d.e+-]+)deg\)/.exec(tr),ry=m?+m[1]:0,i,b,base,a,th,f;
  for(i=0;i<N;i++){b=ch[i];base=b.getAttribute("data-base");
   if(!base||b.style.transform.indexOf("rotateX(12deg)")<0&&b.style.transform.indexOf(base)!==0){base=b.style.transform.replace(/\s*rotateY\([^)]*\)\s*rotateX\(12deg\)\s*$/,"");b.setAttribute("data-base",base);}
   a=parseFloat(base.slice(8))||0;th=((a+ry)%360+540)%360-180;
   f=1;
   b.style.transform=base+" rotateY("+(-th*f-0)+"deg) rotateX(12deg)";
  }
  lab();
 }
 rf=requestAnimationFrame(bb);}
if("IntersectionObserver"in window&&tl)new IntersectionObserver(function(e){on=e[0].isIntersecting&&!root.classList.contains("noanim")&&!root.classList.contains("eco");if(on&&!rf)rf=requestAnimationFrame(bb);}).observe(tl);
}catch(e){}})();

}catch(e){console.error("[v6js]",e)}
/* inline10 */
try{
(function(){var b=document.getElementById("ost"),s=document.getElementById("osts"),v=document.getElementById("ostv"),m=document.getElementById("ostm"),nm=document.getElementById("ostn"),nx=document.getElementById("ostx"),ab=document.getElementById("osta"),IDS=["ostdata","ostdata2","ostdata3","ostdata4","ostdata5","ostdata6"],NM=["Trilha original","Love Me Tender — Elvis Presley","In the Closet — Michael Jackson","You — Lloyd, Lil Wayne","Pon de Replay — Rihanna","Maniac — Michael Sembello"],AU=[],cur=0,auto=false,ft=0,back=false,played=false,lastPos=0,ART=null;
var TT=NM.map(function(n){var p=n.split(" — ");return {t:p[0],a:p[1]||"Maratona Marvel"};});
function A(){return AU[cur];}
window.__ostDuck=function(g){var x=AU[cur];if(x&&!x.paused&&!ft){try{x.volume=Math.max(0,Math.min(1,vol()*g));}catch(e){}}};
function vol(){return Math.max(0,Math.min(1,(parseInt(v.value,10)||0)/100));}
/* capa gerada na hora (tela de bloqueio) */
function art(){if(ART)return ART;try{var c=document.createElement("canvas");c.width=c.height=256;var x=c.getContext("2d"),g=x.createLinearGradient(0,0,256,256),ac=(getComputedStyle(document.documentElement).getPropertyValue("--ac")||"#3ddc84").trim()||"#3ddc84";g.addColorStop(0,"#0b1510");g.addColorStop(1,"#050805");x.fillStyle=g;x.fillRect(0,0,256,256);x.strokeStyle=ac;x.lineWidth=6;x.globalAlpha=.9;x.strokeRect(10,10,236,236);x.globalAlpha=1;x.fillStyle=ac;x.shadowColor=ac;x.shadowBlur=24;x.font="bold 150px serif";x.textAlign="center";x.textBaseline="middle";x.fillText("♪",128,134);ART=[{src:c.toDataURL("image/png"),sizes:"256x256",type:"image/png"}];}catch(e){ART=[];}return ART;}
var MS=navigator.mediaSession;
function msMeta(){if(!MS||typeof MediaMetadata==="undefined")return;try{MS.metadata=new MediaMetadata({title:TT[cur].t,artist:TT[cur].a,album:"Maratona Marvel",artwork:art()});}catch(e){}}
function msPos(){var x=A();if(MS&&MS.setPositionState&&x&&isFinite(x.duration)&&x.duration>0){try{MS.setPositionState({duration:x.duration,playbackRate:1,position:Math.min(x.currentTime||0,x.duration)});}catch(e){}}}
function emit(){try{window.dispatchEvent(new Event("mrost"));}catch(e){}}
function lbl(){var x=A(),on=x&&!x.paused;s.textContent=on?"tocando":"desligada";b.setAttribute("aria-pressed",on?"true":"false");nm.textContent="♪ "+NM[cur]+(on?"":" (pausada)");m.value=String(cur);ab.setAttribute("aria-pressed",auto?"true":"false");ab.textContent="🔁 Alternar músicas automaticamente: "+(auto?"ligado":"desligado");msMeta();if(MS)try{MS.playbackState=on?"playing":"paused";}catch(e){}emit();}
function fade(a,to,ms,cb){clearInterval(ft);var f=a.volume,st=Date.now();ft=setInterval(function(){var k=Math.min(1,(Date.now()-st)/ms),g=to==="v"?vol():to;a.volume=Math.max(0,Math.min(1,f+(g-f)*k));if(k>=1){clearInterval(ft);ft=0;if(cb)cb();}},40);}
function mk(i){if(AU[i])return AU[i];var el=document.getElementById(IDS[i]),d=el?el.textContent.trim():"",bin,n,u,k,a;if(d){bin=atob(d);n=bin.length;u=new Uint8Array(n);for(k=0;k<n;k++)u[k]=bin.charCodeAt(k);a=new Audio(URL.createObjectURL(new Blob([u],{type:"audio/mp4"})));el.textContent="";}else{a=new Audio();a.preload="none";a.src="ost-"+(i+1)+".m4a";a.addEventListener("error",function(){if(AU[cur]===a){s.textContent="música não encontrada (envie os arquivos ost-1.m4a a ost-6.m4a)";}});}a.loop=!auto;a.volume=vol();a.addEventListener("play",function(){played=true;lbl();});a.addEventListener("pause",lbl);a.addEventListener("loadedmetadata",function(){if(AU[cur]===a){msPos();emit();}});a.addEventListener("timeupdate",function(){var t=Date.now();if(AU[cur]===a&&t-lastPos>1000){lastPos=t;msPos();}});a.addEventListener("ended",function(){if(auto)sw((cur+1)%IDS.length,true);});return AU[i]=a;}
function go(x,fi){x.loop=!auto;if(fi)x.volume=0;var p=x.play();if(p&&p.catch)p.catch(function(){s.textContent="não foi possível tocar";});if(fi)fade(x,"v",800);}
function stop(x,cb){fade(x,0,400,function(){x.pause();x.currentTime=0;x.volume=vol();if(cb)cb();});}
function sw(i,play){var old=A();cur=i;try{localStorage.setItem("maratona-ost-faixa",String(i));}catch(e){}if(old&&!old.paused&&old!==AU[i]){stop(old,function(){if(play)go(mk(i),true);lbl();});}else{if(play)go(mk(i),true);}lbl();}
function prev(){var x=A();if(x&&x.currentTime>3){x.currentTime=0;return;}var on=x&&!x.paused;sw((cur-1+IDS.length)%IDS.length,on);}
try{var sv=localStorage.getItem("maratona-ost-vol");if(sv!==null)v.value=sv;var sf=localStorage.getItem("maratona-ost-faixa");if(sf!==null&&+sf>=0&&+sf<IDS.length)cur=+sf;auto=localStorage.getItem("maratona-ost-auto")==="1";}catch(e){}
lbl();
b.addEventListener("click",function(){var x=mk(cur);if(x.paused)go(x,true);else{fade(x,0,400,function(){x.pause();x.volume=vol();});}});
m.addEventListener("change",function(){var on=A()&&!A().paused;sw(+m.value,on);});
nx.addEventListener("click",function(){var on=A()&&!A().paused;sw((cur+1)%IDS.length,on);});
ab.addEventListener("click",function(){auto=!auto;try{localStorage.setItem("maratona-ost-auto",auto?"1":"0");}catch(e){}AU.forEach(function(a){if(a)a.loop=!auto;});lbl();});
v.addEventListener("input",function(){var x=A();if(x&&!ft)x.volume=vol();try{localStorage.setItem("maratona-ost-vol",v.value);}catch(e){}emit();});
document.addEventListener("visibilitychange",function(){var x=A();if(document.hidden){if(x&&!x.paused){back=true;clearInterval(ft);ft=0;x.pause();}}else if(back){back=false;if(x)go(x,true);}});
/* controles da tela de bloqueio / fones */
if(MS){var H=function(n,f){try{MS.setActionHandler(n,f);}catch(e){}};
H("play",function(){var x=mk(cur);if(x.paused)go(x,true);});
H("pause",function(){var x=A();if(x&&!x.paused)b.click();});
H("previoustrack",prev);H("nexttrack",function(){nx.click();});
H("seekto",function(d){var x=A();if(x&&d&&d.seekTime!=null)x.currentTime=d.seekTime;});
H("seekbackward",function(d){var x=A();if(x)x.currentTime=Math.max(0,x.currentTime-((d&&d.seekOffset)||10));});
H("seekforward",function(d){var x=A();if(x)x.currentTime=Math.min(x.duration||1e9,x.currentTime+((d&&d.seekOffset)||10));});}
/* API para o mini player */
window.mrOst={tracks:TT,get cur(){return cur;},get playing(){var x=A();return !!x&&!x.paused;},get played(){return played;},get auto(){return auto;},
toggle:function(){b.click();},next:function(){nx.click();},prev:prev,pause:function(){var x=A();if(x&&!x.paused)b.click();},
goto:function(i){var on=A()&&!A().paused;sw(i,on);},
seek:function(f){var x=A();if(x&&isFinite(x.duration))x.currentTime=Math.max(0,Math.min(1,f))*x.duration;},
pos:function(){var x=A();return {t:(x&&x.currentTime)||0,d:(x&&isFinite(x.duration))?x.duration:0};},
vol:function(n){if(n===undefined)return parseInt(v.value,10)||0;v.value=String(Math.max(0,Math.min(100,Math.round(n))));v.dispatchEvent(new Event("input"));},
setAuto:function(){ab.click();}};
/* prepara a faixa atual em segundo plano (toque instantâneo); pula no modo Economia */
if(!window.__eco){setTimeout(function(){(window.requestIdleCallback||function(f){setTimeout(f,300);})(function(){try{mk(cur);}catch(e){}});},4000);}
})();

}catch(e){console.error("[inline10]",e)}
/* inline11 */
try{

(function(){var T0=function(){return document.documentElement.classList.contains("eco")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches);};
document.addEventListener("pointermove",function(e){if(e.pointerType!=="mouse"||T0())return;var w=e.target.closest&&e.target.closest("li .pw");if(!w)return;var r=w.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;w.style.transition="transform .06s linear";w.style.transform="perspective(240px) rotateY("+(-14+x*32)+"deg) rotateX("+(-y*26)+"deg) scale(1.12)";},true);
document.addEventListener("pointerout",function(e){var w=e.target.closest&&e.target.closest("li .pw");if(w&&!w.contains(e.relatedTarget)){w.style.transition="transform .25s";w.style.transform="";}},true);})();

}catch(e){console.error("[inline11]",e)}
/* inline12 */
try{

(function(){
var gv=0;(window.__x3h=window.__x3h||[]).push(function(a,b){var s=document.documentElement.style,x=Math.round(a*100),y=Math.round(b*100);if(x===gv.x&&y===gv.y)return;gv={x:x,y:y};s.setProperty("--gx",(x/100).toFixed(2));s.setProperty("--gy",(y/100).toFixed(2));});
document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("li .row");if(!b)return;var li=b.parentNode,was=li.classList.contains("done");setTimeout(function(){if(!was&&li.classList.contains("done")){var w=li.querySelector(".pw");if(w){w.classList.remove("stp");void w.offsetWidth;w.classList.add("stp");try{navigator.vibrate&&navigator.vibrate(18);}catch(x){}}}},40);},true);
var IC={"🎵": "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm11-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "⏭": "M5 4l10 8-10 8zM19 5v14", "💾": "M5 3h11l3 3v15H5zM8 3v6h7V3M8 21v-7h8v7", "📊": "M4 20V10M10 20V4M16 20v-8M22 20H2", "🧭": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM16 8l-2 6-6 2 2-6z", "⏰": "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 8v4l3 2", "📅": "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4", "🖼": "M3 4h18v16H3zM3 16l5-5 4 4 3-3 6 6M9 9h.01", "📲": "M7 2h10v20H7zM12 8v6M9 12l3 3 3-3", "🔁": "M4 11V9a3 3 0 0 1 3-3h11M15 3l3 3-3 3M20 13v2a3 3 0 0 1-3 3H6M9 21l-3-3 3-3", "✅": "M4 12l5 5L20 6", "🎬": "M3 8h18v12H3zM3 8l3-5h4L7 8M11 8l3-5h4l-3 5", "🔥": "M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-4 3-7 1 2 2 2 3-5z", "⚠": "M12 3l10 18H2zM12 10v5M12 18v.5"},RX=new RegExp("("+Object.keys(IC).join("|")+")\\uFE0F?","g"),SEL="summary,button.mini,#ost,#osta,#ostx,.bkb button",busy=0,RT=new RegExp(RX.source);
function svg(k){var s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("class","ic");s.setAttribute("aria-hidden","true");s.setAttribute("fill","none");s.setAttribute("stroke","currentColor");s.setAttribute("stroke-width","2");s.setAttribute("stroke-linecap","round");s.setAttribute("stroke-linejoin","round");var p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",IC[k]);s.appendChild(p);return s;}
function icons(){var els=document.querySelectorAll(SEL),i,j,n,m,f,last,tx;for(i=0;i<els.length;i++){var ns=[].filter.call(els[i].childNodes,function(c){return c.nodeType===3&&RT.test(c.nodeValue);});
ns.forEach(function(nd){tx=nd.nodeValue;f=document.createDocumentFragment();last=0;RX.lastIndex=0;while((m=RX.exec(tx))){if(m.index>last)f.appendChild(document.createTextNode(tx.slice(last,m.index)));f.appendChild(svg(m[1]));last=m.index+m[0].length;}if(last<tx.length)f.appendChild(document.createTextNode(tx.slice(last)));nd.parentNode.replaceChild(f,nd);});}RX.lastIndex=0;}
function sch(){if(busy)return;busy=setTimeout(function(){busy=0;try{icons();}catch(e){}},200);}
icons();new MutationObserver(sch).observe(document.body,{childList:true,subtree:true,characterData:true});
function off(){return window.__eco||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches);}
document.addEventListener("click",function(e){var s=e.target.closest&&e.target.closest("summary");if(!s)return;var d=s.parentNode;if(!d||d.tagName!=="DETAILS"||!d.open||off()||!d.animate||d.__cl)return;
e.preventDefault();d.__cl=1;var h0=d.offsetHeight,h1=s.offsetHeight;d.style.overflow="hidden";var a=d.animate([{height:h0+"px"},{height:h1+"px"}],{duration:230,easing:"ease-in"});a.onfinish=a.oncancel=function(){d.open=false;d.style.overflow="";d.__cl=0;};},true);
document.addEventListener("toggle",function(e){var d=e.target;if(!d||d.tagName!=="DETAILS"||!d.open||off()||!d.animate)return;
var s=d.querySelector("summary"),h1=d.offsetHeight,h0=s?s.offsetHeight:0,ch=[];d.style.overflow="hidden";var a=d.animate([{height:h0+"px"},{height:h1+"px"}],{duration:300,easing:"cubic-bezier(.2,.8,.2,1)"});a.onfinish=a.oncancel=function(){d.style.overflow="";};
[].slice.call(d.children).forEach(function(c){if(c===s)return;if(c.children&&c.children.length>1&&c.children.length<30)[].forEach.call(c.children,function(x){ch.push(x);});else ch.push(c);});
ch.slice(0,14).forEach(function(c,i){c.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"none"}],{duration:320,delay:60+i*40,easing:"cubic-bezier(.22,1,.36,1)",fill:"backwards"});});},true);
})();

}catch(e){console.error("[inline12]",e)}
/* inline13 */
try{
(function(){var b=document.getElementById("btt");if(!b)return;function chk(){var y=window.pageYOffset||document.documentElement.scrollTop||0;b.classList.toggle("on",y>700);}
window.addEventListener("scroll",chk,{passive:true});chk();b.addEventListener("click",function(){var r=false;try{r=localStorage.getItem("maratona-anim")==="off";}catch(e){}window.scrollTo({top:0,behavior:r?"auto":"smooth"});});})();
}catch(e){console.error("[inline13]",e)}
/* inline14 */
try{
(function(){var d=document.querySelector(".dm"),tm=0;if(!d)return;window.mkHop=function(){d.classList.remove("hop");void d.offsetWidth;d.classList.add("hop");clearTimeout(tm);tm=setTimeout(function(){d.classList.remove("hop");},1700);};d.addEventListener("click",function(){window.mkHop();});})();
}catch(e){console.error("[inline14]",e)}
/* inline15 */
try{
(function(){var m=document.querySelector(".mission"),d=document.querySelector(".dm");if(!m||!d)return;
var rm=false,fast=false;try{rm=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;fast=localStorage.getItem("maratona-anim")==="off";}catch(e){}
function copy(){["--gx","--gy"].forEach(function(k){var v=m.style.getPropertyValue(k);if(v)d.style.setProperty(k,v);});}
try{new MutationObserver(copy).observe(m,{attributes:true,attributeFilter:["style"]});}catch(e){}
var o=0,vo=0,last=0,raf=0,wasFloat=false,trT=0,K=150,C=15,W=84;
function cl(v,a,b){return v<a?a:v>b?b:v;}
function spark(x,y){var n=document.querySelectorAll(".trs").length;if(n>14)return;var s=document.createElement("s");s.className="trs";s.style.left=(x+(Math.random()*30-15)).toFixed(0)+"px";s.style.top=(y+(Math.random()*10-5)).toFixed(0)+"px";s.addEventListener("animationend",function(){s.remove();});document.body.appendChild(s);}
function frame(ts){raf=0;var dt=cl((ts-last)/1000||.016,.004,.033);last=ts;
var r=m.getBoundingClientRect();d.style.visibility=r.height?"visible":"hidden";
var natY=r.top+8,natX=r.right-8-W,tgt=rm?0:Math.max(0,78-natY);
if(fast||rm){o=tgt;vo=0;}else{var sub=3,i,h=dt/sub,ac;for(i=0;i<sub;i++){ac=-K*(o-tgt)-C*vo;vo+=ac*h;o+=vo*h;}}
var f=cl(o/70,0,1),cw=document.documentElement.clientWidth,fx=cw-W-26,x=natX+(fx-natX)*f,y=natY+o,sp=Math.abs(vo),vn=cl(vo/900,-1,1);
var sy=1+Math.min(.12,sp/9000),sx=1-Math.min(.08,sp/12000),s=1-.28*f,fly=(o>10?.5:0)+Math.min(.5,sp/1400);
var st=d.style;st.setProperty("--tx",x.toFixed(1)+"px");st.setProperty("--ty",y.toFixed(1)+"px");st.setProperty("--s",s.toFixed(3));st.setProperty("--sx",sx.toFixed(3));st.setProperty("--sy",sy.toFixed(3));st.setProperty("--lean",cl(vo*.004,-9,9).toFixed(2));st.setProperty("--vyn",vn.toFixed(3));st.setProperty("--fly",fly.toFixed(2));
d.classList.toggle("fl",o>24);
if(!fast&&!rm&&sp>420&&ts-trT>70){trT=ts;spark(x+W*.5*s+W*(1-s)*.5,y+86*s);}
if(o>30)wasFloat=true;
if(wasFloat&&o<2&&Math.abs(vo)<10){wasFloat=false;if(window.mkHop)window.mkHop();}
if(Math.abs(o-tgt)>.12||sp>.6)raf=requestAnimationFrame(frame);else{o=tgt;vo=0;st.setProperty("--vyn","0");st.setProperty("--lean","0");st.setProperty("--sx","1");st.setProperty("--sy","1");st.setProperty("--fly",o>10?".5":"0");}}
function kick(){if(!raf){last=performance.now();raf=requestAnimationFrame(frame);}}
var lastAct=performance.now(),lastWave=0,wv=0;
function act(){var sl=d.classList.contains("sleep");lastAct=performance.now();d.classList.remove("peek","sleep","wave");if(sl&&window.mkHop)setTimeout(window.mkHop,80);}
window.addEventListener("scroll",function(){act();kick();},{passive:true});window.addEventListener("resize",kick);window.addEventListener("orientationchange",kick);
d.addEventListener("click",act);
(function loop(){kick();var now=performance.now(),idle=now-lastAct,c=d.classList;
if(c.contains("fl")){if(idle>1400)c.add("peek");if(idle>6000)c.add("sleep");c.remove("wave");}
else{c.remove("peek","sleep");if(!fast&&!rm&&idle>4000&&now-lastWave>9000){lastWave=now;c.add("wave");clearTimeout(wv);wv=setTimeout(function(){c.remove("wave");},1900);}}
setTimeout(loop,400);})();
})();
}catch(e){console.error("[inline15]",e)}
/* mr-shortcuts */
try{
(function(){var a="";try{a=new URLSearchParams(location.search).get("acao")||"";}catch(e){}if(!a)return;
function go(n){if(n>40)return;var h=document.getElementById("hgo"),q=document.getElementById("qb");if(!q||!h||!window.mrNowIdx){setTimeout(function(){go(n+1);},150);return;}
setTimeout(function(){if(a==="quiz"){h.click();q.click();}else if(a==="proximo"){var b=document.querySelector("#hnx button");if(b)b.click();}try{history.replaceState(null,"",location.pathname);}catch(e){}},500);}
window.addEventListener("load",function(){go(0);});})();
}catch(e){console.error("[mr-shortcuts]",e)}
/* mr-card3d-js */
try{
(function(){var m=document.getElementById("c3"),cc=document.getElementById("c3c"),ci=document.getElementById("c3i"),ff=document.getElementById("c3f"),bk=document.getElementById("c3b");if(!m||!cc||!ff||!bk)return;
var ws=cc.parentNode,raf=0,lp=0,lg=0,sp=0,ht=0;
function noa(){var c=document.documentElement.classList;return c.contains("noanim")||c.contains("eco")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches);}
function dress(){if(m.hidden||ff.querySelector(".cdn"))return;var h4=bk.querySelector("h4"),ti=h4?h4.textContent:"",im=ff.querySelector("img"),u,nb=bk.querySelector("b"),du=bk.querySelector("span"),st=bk.querySelector("strong"),rc=cc.style.getPropertyValue("--rc")||"";
if(im&&window.mrPosterByTitle){u=window.mrPosterByTitle(ti,3);if(u)im.src=u;}
ff.insertAdjacentHTML("beforeend",'<i class="cdb"></i><i class="cdr"></i><div class="cdn"><b></b><small></small></div>');
ff.querySelector(".cdb").textContent=nb?nb.textContent:"";ff.querySelector(".cdr").textContent=st?st.textContent.replace("🔒 ",""):"";ff.querySelector(".cdn b").textContent=ti;ff.querySelector(".cdn small").textContent=du?du.textContent:"";}
function spark(){var r=+cc.getAttribute("data-r")||0,e=document.createElement("i"),c=cc.style.getPropertyValue("--rc")||"var(--ac)";if(r<1)return;e.className="cdp";e.style.cssText="left:"+(Math.random()*100).toFixed(0)+"%;top:"+(55+Math.random()*45).toFixed(0)+"%;--dx:"+((Math.random()-.5)*60).toFixed(0)+"px;--s:"+(3+Math.random()*4).toFixed(1)+"px;background:"+c+";box-shadow:0 0 8px "+c;ws.appendChild(e);setTimeout(function(){if(e.parentNode)e.parentNode.removeChild(e);},2300);}
function setV(ty,tx,mx,my){cc.style.setProperty("--ty",ty.toFixed(1)+"deg");cc.style.setProperty("--tx",tx.toFixed(1)+"deg");cc.style.setProperty("--mx",mx.toFixed(0)+"%");cc.style.setProperty("--my",my.toFixed(0)+"%");}
function frame(ts){raf=requestAnimationFrame(frame);if(m.hidden)return;var t=ts/1000,r=cc.getAttribute("data-r")||"0";if(ws.getAttribute("data-r")!==r)ws.setAttribute("data-r",r);if(noa())return;
if(ts-lp>1400&&ts-lg>500)setV(Math.sin(t*.9)*16,Math.cos(t*.7)*9,50+Math.sin(t*.9)*34,50+Math.cos(t*.7)*30);
var iv=+r>=4?170:+r>=3?270:+r>=1?430:1e9;if(ts-sp>iv){sp=ts;spark();}}
function start(){if(!raf)raf=requestAnimationFrame(frame);}function stop(){if(raf){cancelAnimationFrame(raf);raf=0;}}
try{new MutationObserver(function(){if(m.hidden)stop();else{dress();start();}}).observe(m,{attributes:true,attributeFilter:["hidden"]});new MutationObserver(dress).observe(ff,{childList:true});}catch(e){}
["pointermove","touchmove"].forEach(function(n){m.addEventListener(n,function(){lp=performance.now();},true);});
window.addEventListener("deviceorientation",function(e){if(m.hidden||noa()||e.gamma==null||e.beta==null)return;var n=performance.now();if(n-lp<1400)return;lg=n;var ty=Math.max(-28,Math.min(28,e.gamma*.9)),tx=Math.max(-22,Math.min(22,(50-e.beta)*.5));setV(ty,tx,50+ty*1.6,50-tx*1.8);});
ci.addEventListener("click",function(){ws.classList.remove("hop");void ws.offsetWidth;ws.classList.add("hop");clearTimeout(ht);ht=setTimeout(function(){ws.classList.remove("hop");},950);});
if(!m.hidden){dress();start();}})();
}catch(e){console.error("[mr-card3d-js]",e)}
/* mr-mood */
try{
(function(){var d=document.querySelector(".dm");if(!d)return;
var st=document.createElement("style");st.textContent="#mxb{position:fixed;left:8px;top:0;max-width:min(240px,calc(100vw - 16px));text-align:center;font:700 .74rem/1.25 system-ui,sans-serif;padding:6px 11px;border-radius:14px;background:var(--card);color:var(--ink);border:1px solid var(--ac);opacity:0;transition:opacity .3s;pointer-events:none;z-index:96}#mxb.on{opacity:1}.dm.mg .rb{animation:mgs 1.7s var(--e-io)!important}.dm.mw .rb{animation:mws 1.4s var(--e-io)!important}.dm.mb .rb{animation:mbs 1.3s var(--e-io)!important}@keyframes mgs{0%{rotate:y 0deg;translate:0 0}40%{translate:0 -16px}100%{rotate:y 360deg;translate:0 0}}@keyframes mws{0%,100%{rotate:z 0deg}25%{rotate:z -9deg}75%{rotate:z 9deg}}@keyframes mbs{0%,100%{translate:0 0}15%,55%{translate:-5px 0}35%,75%{translate:5px 0}90%{translate:0 4px}}"
+".rhb{display:none;position:absolute;left:-1px;top:-7px;width:58px;height:32px;box-sizing:border-box;border:4px solid var(--ac);border-bottom:0;border-radius:30px 30px 0 0;box-shadow:0 0 8px var(--ac);pointer-events:none}.dm.hp .rhb,.dm.hpo .rhb{display:block}.dm.hp .rhb{animation:hpi .4s cubic-bezier(.3,1.5,.5,1)}.dm.hpo .rhb{animation:hpo .35s ease-in forwards}@keyframes hpi{from{translate:0 -22px;opacity:0}to{translate:0 0;opacity:1}}@keyframes hpo{to{translate:0 -22px;opacity:0}}"
+".dm.hp .re,.dm.hpo .re{width:12px;height:20px;top:12px;background:linear-gradient(90deg,var(--ac),color-mix(in srgb,var(--ac) 55%,#000));box-shadow:0 0 9px var(--ac)}.dm.hp .re.l,.dm.hpo .re.l{left:-10px}.dm.hp .re.r,.dm.hpo .re.r{right:-10px}.dm.hp.bang .rh{transform-origin:50% 100%;animation:hbg .56s var(--e-io) infinite}.dm.hp.bang .ra{animation:abg .56s var(--e-io) infinite}@keyframes hbg{0%,100%{rotate:x -5deg}45%{rotate:x 20deg}}@keyframes abg{0%,100%{rotate:z -8deg}50%{rotate:z 10deg}}"
+".dm .mxn{position:absolute;left:var(--nx,40px);top:6px;font:700 1rem/1 system-ui,sans-serif;color:var(--ac);text-shadow:0 0 6px var(--ac);pointer-events:none;z-index:5;animation:mxn 1.7s var(--e-out) forwards}@keyframes mxn{from{opacity:0;translate:0 0}15%{opacity:1}to{opacity:0;translate:var(--nd,10px) -46px;rotate:z var(--nr,15deg)}}html.noanim .dm .rb,html.noanim .dm .rh,html.noanim .dm .ra{animation:none!important}@media (prefers-reduced-motion:reduce){.dm .rh,.dm .ra{animation:none!important}.dm .mxn{display:none}}";document.head.appendChild(st);
var bb=document.createElement("div");bb.id="mxb";bb.setAttribute("role","status");document.body.appendChild(bb);var pt=0;function place(){var r=d.getBoundingClientRect(),cw=document.documentElement.clientWidth,w=bb.offsetWidth,h=bb.offsetHeight,x=Math.max(8,Math.min(cw-w-8,r.right-w-4)),y=r.top-h-6;if(y<8)y=r.bottom+6;bb.style.left=x+"px";bb.style.top=y+"px";}try{new MutationObserver(function(){if(d.classList.contains("mood")){bb.classList.add("on");place();clearInterval(pt);pt=setInterval(place,100);}else{bb.classList.remove("on");clearInterval(pt);}}).observe(d,{attributes:true,attributeFilter:["class"]});}catch(e){}
var noa=function(){return document.documentElement.classList.contains("noanim")};
/* mensagens ao marcar */
var tm=[],old=window.mkHop;
function short(n){n=String(n||"").replace(/\s*\(.*\)\s*$/,"");return n.length>20?n.slice(0,19)+"…":n;}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function paceMsg(){var p=window.MR_PACE;return p==="g"?"Adiantado! 🚀":p==="w"?"No limite 😅":p==="b"?"Bora, atrasou! 😰":"";}
function build(e){var m=[],t=short(e.nm),left=e.tot-e.n;
if(e.on<0){m.push("Voltou pra fila 🤔");if(t)m.push(t+" ainda falta");return m;}
if(e.ch>1){m.push("Combo! +"+e.ch+" de uma vez 🔥");m.push("Faltam "+left+" 🎬");return m;}
if(left<=0){m.push("MARATONA COMPLETA! 🏆");m.push("Doutor Destino te espera! 💥");return m;}
if(e.n===1){m.push("Primeiro título! 🚀");m.push("A jornada começou");return m;}
if(e.n*2>=e.tot&&(e.n-1)*2<e.tot){m.push("Metade do caminho! 🎯");m.push("Faltam "+left);return m;}
var q=window.MR_QUIP?window.MR_QUIP(e):"";m.push(q||pick(["Boa! "+t+" ✓","Mais um pra conta 😎","Mandou bem! 👏","Visto: "+t+" 🎬","Um a menos! 💪"]));
if(e.n%10===0)m.push(e.n+" títulos vistos! 🎉");else m.push(pick(["Faltam "+left+" 🎬","Já são "+e.n+" vistos","Próximo, Mestre! 🍿"]));
var p=paceMsg();if(p)m.push(p);return m;}
function show(list,mode){tm.forEach(clearTimeout);tm=[];var c=d.classList,i=0;c.remove("mg","mw","mb");
function nx(){if(i>=list.length){c.remove("mood","mg","mw","mb");return;}bb.textContent=list[i];c.add("mood");
if(i===0&&!noa()&&!d.classList.contains("sleep")){var p=window.MR_PACE;c.add(mode>0?(p==="b"?"mb":p==="w"?"mw":"mg"):"mw");tm.push(setTimeout(function(){c.remove("mg","mw","mb");},1800));}
i++;tm.push(setTimeout(function(){c.remove("mood");tm.push(setTimeout(nx,260));},2300));}nx();}
window.MR_SAY=function(t,ms){tm.forEach(clearTimeout);tm=[];bb.textContent=t;d.classList.add("mood");tm.push(setTimeout(function(){d.classList.remove("mood");},ms||2200));};window.mkHop=function(){if(old)old();tm.forEach(clearTimeout);tm=[];setTimeout(function(){var e=window.MR_EV;if(!e||d.classList.contains("sleep"))return;window.MR_EV=null;show(build(e),e.on);},420);};
/* fone de ouvido com a trilha */
var P=[],hpT=0,nT=0,on=false;
function note(){if(!on||noa()||document.hidden)return;var n=document.createElement("span");n.className="mxn";n.textContent=pick(["♪","♫","♬"]);n.style.setProperty("--nx",(8+Math.random()*60)+"px");n.style.setProperty("--nd",(Math.random()*40-20)+"px");n.style.setProperty("--nr",(Math.random()*40-20)+"deg");d.appendChild(n);setTimeout(function(){if(n.parentNode)n.parentNode.removeChild(n);},1800);}
function hpOn(){if(on)return;on=true;clearTimeout(hpT);var c=d.classList;c.remove("hpo");c.add("hp");if(!noa())c.add("bang");clearInterval(nT);nT=setInterval(note,950);note();
bb.textContent="🎧 Que som!";c.add("mood");clearTimeout(hpT);hpT=setTimeout(function(){c.remove("mood");},1800);}
function hpOff(){if(!on)return;on=false;clearInterval(nT);var c=d.classList;c.remove("bang","hp");c.add("hpo");bb.textContent="Música pausada 😌";c.add("mood");clearTimeout(hpT);hpT=setTimeout(function(){c.remove("hpo","mood");},1800);}
function upd(){clearTimeout(upd.t);upd.t=setTimeout(function(){if(P.length)hpOn();else hpOff();},250);}
function hook(a){if(a._mh)return;a._mh=1;a.addEventListener("playing",function(){if(P.indexOf(a)<0)P.push(a);upd();});["pause","ended","emptied"].forEach(function(n){a.addEventListener(n,function(){var i=P.indexOf(a);if(i>-1)P.splice(i,1);upd();});});}
var op=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){try{if(this.tagName==="AUDIO"||this instanceof Audio)hook(this);}catch(e){}return op.apply(this,arguments);};
document.addEventListener("visibilitychange",function(){if(document.hidden)clearInterval(nT);else if(on){clearInterval(nT);nT=setInterval(note,950);}});
})();
}catch(e){console.error("[mr-mood]",e)}
/* mr-pose */
try{
(function(){var d=document.querySelector(".dm");if(!d)return;
var st=document.createElement("style");st.textContent=".dm{touch-action:manipulation;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.blh{position:absolute;top:13px;width:9px;height:5px;border-radius:50%;background:#ff7aa8;box-shadow:0 0 6px #ff7aa8;opacity:0;transition:opacity .3s;pointer-events:none}.blh.l{left:2px}.blh.r{right:2px}"
+".dm.pz .rb,.dm.pz .rh,.dm.pz .rv b,.dm.pz .rv span,.dm.pz .rh1,.dm.pz .rh2,.dm.pz .ra{animation-fill-mode:none}"
+".dm.pz-shy .blh,.dm.pz-love .blh,.dm.pz-pet .blh{opacity:.9}.dm.pz-shy .rh{animation:pzshy 2.8s var(--e-io)!important}.dm.pz-shy .rv b{animation:pzsq 2.8s var(--e-out)!important}.dm.pz-shy .rh1{animation:pzhl 2.8s var(--e-io)!important}.dm.pz-shy .rh2{animation:pzhr 2.8s var(--e-io)!important}"
+".dm.pz-sur .rb{animation:pzsur 1.3s var(--e-out)!important}.dm.pz-sur .rv b{animation:pzbig 1.3s var(--e-out)!important}.dm.pz-sur .ra{animation:pzan .18s linear 6!important}"
+".dm.pz-wink .rv b:first-child{animation:pzwk 1.6s var(--e-out)!important}"
+".dm.pz-love .rv b{background:radial-gradient(circle at 35% 30%,#fff 0 12%,#ff6f9c 45%,#c2185b)!important;box-shadow:0 0 8px #ff5a8a!important;animation:pzlv .5s var(--e-io) infinite alternate!important}.dm.pz-love .rb{animation:pzdn 1.4s var(--e-io) 2!important}"
+".dm.pz-pet .rb{animation:pzpur .14s linear infinite alternate!important}.dm.pz-pet .rh{animation:pzpt 1.4s var(--e-io) infinite alternate!important}.dm.pz-pet .rv b{animation:pzsq 3s var(--e-out) infinite!important}"
+".dm.pz-tick .rb{animation:pztk .12s linear infinite alternate!important}.dm.pz-tick .rv b{animation:pzsq 2.4s var(--e-out)!important}"
+".dm.pz-dan .rb{animation:pzdn .95s var(--e-io) 3!important}.dm.pz-thk .rh{animation:pzth 2.5s var(--e-io)!important}.dm.pz-thk .rv span{animation:pzey 2.5s var(--e-io)!important}.dm.pz-look .rh{animation:pzlk 3.1s var(--e-io)!important}"
+"@keyframes pzshy{0%,100%{rotate:z 0deg;translate:0 0}25%,75%{rotate:z -13deg;translate:-3px 4px}}@keyframes pzhl{0%,100%{translate:0 0}25%,75%{translate:10px -32px}}@keyframes pzhr{0%,100%{translate:0 0}25%,75%{translate:-10px -32px}}@keyframes pzsq{0%,100%{scale:1 1}25%,75%{scale:1.1 .3}}"
+"@keyframes pzsur{0%{translate:0 0}25%{translate:0 -18px}55%{translate:0 0}70%{translate:0 -5px}100%{translate:0 0}}@keyframes pzbig{0%,100%{scale:1}20%,70%{scale:1.5 1.5}}@keyframes pzan{0%,100%{rotate:z -22deg}50%{rotate:z 22deg}}@keyframes pzwk{0%,100%{scale:1 1}30%,70%{scale:1 .08}}@keyframes pzlv{from{scale:1}to{scale:1.25}}"
+"@keyframes pzpur{from{rotate:z -1.6deg}to{rotate:z 1.6deg}}@keyframes pzpt{from{rotate:z -9deg}to{rotate:z 9deg}}@keyframes pztk{from{translate:-3px 0;rotate:z -4deg}to{translate:3px -2px;rotate:z 4deg}}@keyframes pzdn{0%,100%{translate:0 0;rotate:z 0deg}25%{translate:-7px -4px;rotate:z -9deg}75%{translate:7px -4px;rotate:z 9deg}}"
+"@keyframes pzth{0%,100%{rotate:z 0deg}25%,80%{rotate:z 14deg}}@keyframes pzey{0%,100%{translate:0 0}25%,80%{translate:4px -3px}}@keyframes pzlk{0%,100%{rotate:y 0deg}25%{rotate:y -28deg}60%{rotate:y 28deg}}";document.head.appendChild(st);
var noa=function(){var c=document.documentElement.classList;return c.contains("noanim")||c.contains("eco")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches);};
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function say(t,ms){if(t&&window.MR_SAY)window.MR_SAY(t,ms);}
function fx(sym,col){if(noa())return;var n=document.createElement("span");n.className="mxn";n.textContent=sym;n.style.color=col;n.style.textShadow="0 0 6px "+col;n.style.setProperty("--nx",(8+Math.random()*60)+"px");n.style.setProperty("--nd",(Math.random()*30-15)+"px");d.appendChild(n);setTimeout(function(){if(n.parentNode)n.parentNode.removeChild(n);},1800);}
var P={shy:[2900,["Ai, que vergonha 🙈","Para, eu coro! 😳","Assim eu fico sem graça…"]],sur:[1400,["Opa! Me assustou 😮","Eita! 😲"]],wink:[1700,["😉","Tô de olho nos seus filmes 😎"]],love:[2900,["Tô apaixonado pela maratona 😍","Você é demais! 💚"]],dan:[2900,["Bora dançar! 💃","Ritmo! 🎶"]],thk:[2600,["Hmm… qual será o próximo? 🤔","Será que dá tempo? 🤔"]],tick:[2500,["Hahaha! Para! 😂","Cócegas! 🤣"]],look:[3200,null]};
var cur="",pt=0,bag=[];
function clr(){var c=d.classList;["pz","pz-shy","pz-sur","pz-wink","pz-love","pz-pet","pz-tick","pz-dan","pz-thk","pz-look"].forEach(function(k){c.remove(k);});}
function play(k){var p=P[k];clearTimeout(pt);clr();void d.offsetWidth;d.classList.add("pz","pz-"+k);cur=k;if(p[1])say(pick(p[1]),Math.min(p[0],2600));
if(k==="love"){fx("♥","#ff5a8a");setTimeout(function(){fx("♥","#ff5a8a");},500);setTimeout(function(){fx("♥","#ff5a8a");},1000);}if(k==="dan"){fx("♪","var(--ac)");setTimeout(function(){fx("♫","var(--ac)");},700);}
pt=setTimeout(function(){clr();cur="";},p[0]);}
function next(){if(!bag.length)bag=["shy","sur","wink","love","dan","thk","hop"].sort(function(){return Math.random()-.5;});return bag.pop();}
/* toques e carinho (segurar) */
var taps=[],hold=0,pet=false,hi=0;
function petOn(){pet=true;clearTimeout(pt);clr();d.classList.add("pz","pz-pet");say("Hmm, que gostoso… 🥰",2400);fx("♥","#ff5a8a");clearInterval(hi);hi=setInterval(function(){fx("♥","#ff5a8a");},650);}
function petOff(){clearTimeout(hold);if(!pet)return;pet=false;clearInterval(hi);clr();say("Ronron… 💚",2000);}
d.addEventListener("pointerdown",function(){if(noa())return;clearTimeout(hold);hold=setTimeout(petOn,450);},true);
["pointerup","pointercancel","pointerleave"].forEach(function(n){d.addEventListener(n,function(){clearTimeout(hold);if(pet)setTimeout(petOff,30);},true);});
d.addEventListener("contextmenu",function(e){e.preventDefault();});
var lastPet=0;d.addEventListener("pointerup",function(){if(pet)lastPet=performance.now();},true);
d.addEventListener("click",function(e){if(performance.now()-lastPet<400){e.stopImmediatePropagation();return;}if(noa())return;var n=performance.now(),k;taps=taps.filter(function(t){return n-t<2500;});taps.push(n);
k=taps.length>=4?"tick":next();if(k==="hop")return;window.MR_NOHOP=n;play(k);},true);
var h=window.mkHop;window.mkHop=function(){if(performance.now()-(window.MR_NOHOP||0)<120)return;if(h)h();};
/* sozinho, quando parado em cima */
setInterval(function(){var c=d.classList;if(noa()||document.hidden||c.contains("fl")||c.contains("sleep")||c.contains("peek")||c.contains("mood")||c.contains("pz")||c.contains("hop"))return;if(Math.random()<.45)play(pick(["look","look","wink","thk","shy"]));},9000);
})();
}catch(e){console.error("[mr-pose]",e)}
/* mr-sleep */
try{
(function(){var d=document.querySelector(".dm");if(!d)return;
var st=document.createElement("style");st.textContent=".dm .pil{position:absolute;left:16px;top:60px;width:56px;height:24px;box-sizing:border-box;border-radius:11px 13px 11px 13px;background:linear-gradient(150deg,color-mix(in srgb,var(--ac) 16%,#fff),color-mix(in srgb,var(--ac) 38%,#8d9dbd));border:1px solid rgba(255,255,255,.5);box-shadow:0 4px 9px rgba(0,0,0,.5),inset 0 -3px 0 rgba(0,0,0,.12);rotate:-3deg;opacity:0;translate:0 -46px;scale:.6;transform:translateZ(-6px);transition:opacity .35s,translate .65s cubic-bezier(.3,1.4,.5,1),scale .5s;pointer-events:none}.dm .pil::before{content:\"\";position:absolute;inset:3px;border:1.5px dashed rgba(0,0,0,.16);border-radius:9px}"
+".dm.sleep .pil{opacity:1;translate:0 0;scale:1}.dm.sleep .rb{transform-origin:50% 42%;rotate:z 80deg;translate:0 10px;transition:rotate .9s var(--e-out) .55s,translate .9s var(--e-out) .55s}.dm.sleep .rh{rotate:z -9deg}.dm.sleep.hp.bang .rh,.dm.sleep .ra{animation:none!important}.dm.wk .rb{transition:rotate .5s var(--e-out),translate .5s var(--e-out)}.dm.sleep .rh1,.dm.sleep .rh2{translate:0 -4px}";document.head.appendChild(st);
var p=document.createElement("div");p.className="pil";p.setAttribute("aria-hidden","true");d.insertBefore(p,d.firstChild);
var was=false,tw=0;try{new MutationObserver(function(){var sl=d.classList.contains("sleep");if(was&&!sl){d.classList.add("wk");clearTimeout(tw);tw=setTimeout(function(){d.classList.remove("wk");},800);}was=sl;}).observe(d,{attributes:true,attributeFilter:["class"]});}catch(e){}
})();
}catch(e){console.error("[mr-sleep]",e)}
/* mr-update */
try{
(function(){if(!("serviceWorker"in navigator)||!/^https?:$/.test(location.protocol))return;var shown=false,had=!!navigator.serviceWorker.controller;
function show(w){if(shown)return;shown=true;var e=document.createElement("div");e.id="upd";e.setAttribute("role","status");e.innerHTML='<span>Nova versão disponível</span><button type="button">Atualizar</button>';
var s=document.createElement("style");s.textContent="#upd{position:fixed;left:50%;top:calc(10px + env(safe-area-inset-top,0px));transform:translateX(-50%);display:flex;align-items:center;gap:10px;background:var(--card);color:var(--ink);border:1px solid var(--ac);border-radius:14px;padding:8px 8px 8px 14px;z-index:95;font-size:.85rem;max-width:92vw}#upd button{min-height:36px;padding:0 14px;border-radius:10px;border:0;background:var(--ac);color:var(--ak);font:inherit;font-weight:700}";document.head.appendChild(s);document.body.appendChild(e);
e.querySelector("button").onclick=function(){if(w){try{w.postMessage({type:"SKIP_WAITING"});}catch(x){}}setTimeout(function(){location.reload();},700);};}
navigator.serviceWorker.getRegistration().then(function(r){if(!r)return;if(r.waiting&&had)show(r.waiting);r.addEventListener("updatefound",function(){var n=r.installing;if(!n)return;n.addEventListener("statechange",function(){if(n.state==="installed"&&navigator.serviceWorker.controller)show(r.waiting||n);});});try{r.update();}catch(e){}});
document.addEventListener("visibilitychange",function(){if(!document.hidden)navigator.serviceWorker.getRegistration().then(function(r){if(r)try{r.update();}catch(e){}});});
navigator.serviceWorker.addEventListener("controllerchange",function(){if(had)show(null);});})();
}catch(e){console.error("[mr-update]",e)}
/* sw-js */
try{
(function(){var v=document.getElementById("appv");if(v)v.textContent=window.MARATONA_VERSION||"";
if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol)){window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){});});}})();
}catch(e){console.error("[sw-js]",e)}
/* mr-card4js */
try{
(function(){try{
var D=document,ul=D.getElementById("list"),cc=D.getElementById("c3c"),f=D.getElementById("c3f"),b=D.getElementById("c3b"),M=window.mrr;
if(!ul||!M||!cc||!f)return;var RC=M.RC,RN=M.RN,H=D.documentElement;
function off(){return H.classList.contains("eco")||H.classList.contains("noanim");}
function dec(li){var q=M.rr(li),pw=li.querySelector(".pw");
 if(li.dataset.r!==String(q)){li.dataset.r=q;li.style.setProperty("--rc",RC[q]);}
 if(pw&&!pw.querySelector(".x4s")){var s=D.createElement("i"),g=D.createElement("i");s.className="x4s";g.className="x4g";s.setAttribute("aria-hidden","true");g.setAttribute("aria-hidden","true");pw.appendChild(s);pw.appendChild(g);}
 if(io&&!li._x4){li._x4=1;io.observe(li);}}
var io=null;if("IntersectionObserver" in window)io=new IntersectionObserver(function(a){a.forEach(function(e){if(e.isIntersecting)e.target.dataset.v="1";else delete e.target.dataset.v;});},{rootMargin:"60px"});
var raf=0;function all(){raf=0;[].forEach.call(ul.children,function(li){if(!li.classList.contains("gh"))dec(li);});}
function sch(){if(!raf)raf=requestAnimationFrame(all);}
new MutationObserver(sch).observe(ul,{childList:true,subtree:true,attributes:true,attributeFilter:["class"]});all();
function rt(){var c=(cc.style.getPropertyValue("--rc")||"").trim().toLowerCase(),k=-1,i;for(i=0;i<RC.length;i++)if(RC[i].toLowerCase()===c)k=i;return k<0?0:k;}
function burst(c){var r=cc.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,k,p,a,d;
 for(k=0;k<22;k++){p=D.createElement("i");p.className="x4b";p.style.cssText="left:"+x+"px;top:"+y+"px;background:"+(k%3?c:"#fff")+";box-shadow:0 0 8px "+c;D.body.appendChild(p);a=Math.random()*6.283;d=90+Math.random()*130;
  (function(p,a,d){if(!p.animate){p.remove();return;}var an=p.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:"translate("+Math.cos(a)*d+"px,"+Math.sin(a)*d+"px) scale(.1)",opacity:0}],{duration:700+Math.random()*500,easing:"cubic-bezier(.1,.8,.3,1)"});an.onfinish=function(){p.remove();};})(p,a,d);}}
function deco(){if(f.querySelector(".x4h"))return;var q=rt(),h=D.createElement("i"),k,p,li=null,h4=b&&b.querySelector("h4");
 h.className="x4h";f.appendChild(h);
 if(q>0){var rb=D.createElement("span");rb.className="x4rb";rb.textContent=(q>3?"★ ":"")+RN[q].toUpperCase();f.appendChild(rb);}
 if(q>2){var sp=D.createElement("div");sp.className="x4sp";for(k=0;k<9;k++){p=D.createElement("i");p.style.cssText="left:"+(8+Math.random()*84)+"%;top:"+(8+Math.random()*84)+"%;animation-delay:"+(Math.random()*2.4).toFixed(2)+"s";sp.appendChild(p);}f.appendChild(sp);}
 if(h4)[].some.call(ul.querySelectorAll("li:not(.gh) .t"),function(t){if(t.textContent===h4.textContent){li=t.closest("li");return true;}});
 if(li&&b&&!b.querySelector(".x4w")){var n=li.querySelectorAll(".stars button.on").length,w=D.createElement("div"),st=D.createElement("b"),tx=D.createElement("span"),sm=b.querySelector("small");
  w.className="x4w";st.textContent=new Array(n+1).join("★")+new Array(6-n).join("☆");
  tx.textContent=q?("Base "+RN[M.base(li)]+(n>4?" · +1 pela nota 5★":" · dê 5★ para subir um nível")):"Marque como visto para revelar";
  w.appendChild(st);w.appendChild(tx);b.insertBefore(w,sm||null);}
 if(q>2&&!off())burst(RC[q]);}
new MutationObserver(deco).observe(f,{childList:true});
}catch(e){if(window.console)console.warn("x4",e);}})();
}catch(e){console.error("[mr-card4js]",e)}
/* mr-gfx2 */
try{
(function(){try{
var D=document,H=D.documentElement,B=D.body,$=function(i){return D.getElementById(i);};
var mq=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)");
function off(){return H.classList.contains("noanim")||H.classList.contains("eco")||window.__eco||(mq&&mq.matches);}
function acc(){var v=(getComputedStyle(B).getPropertyValue("--ac")||"#2fd36b").trim(),m=/^#?([0-9a-f]{6})$/i.exec(v),n;if(m){n=parseInt(m[1],16);return [(n>>16)/255,((n>>8)&255)/255,(n&255)/255];}return [.18,.83,.42];}
/* ---- 1. Nebulosa WebGL no fundo da tela inicial ---- */
var home=$("home");
if(home&&!off()){try{
 var cv=D.createElement("canvas");cv.id="hneb";cv.setAttribute("aria-hidden","true");cv.width=128;cv.height=220;home.insertBefore(cv,home.firstChild);
 var g=cv.getContext("webgl",{alpha:true,premultipliedAlpha:true,antialias:false,depth:false,preserveDrawingBuffer:false});
 if(g){
  var vs="attribute vec2 p;varying vec2 u;void main(){u=p*.5+.5;gl_Position=vec4(p,0.,1.);}",
  fs="precision mediump float;varying vec2 u;uniform float t;uniform vec3 c;float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}void main(){vec2 p=u*vec2(2.2,3.6);float q=fbm(p+vec2(t*.03,t*.02));float r=fbm(p*1.4+q*2.+vec2(-t*.025,t*.035));float m=smoothstep(.35,.85,r)*(.35+.65*u.y);vec3 col=mix(c*.35,c*1.2+vec3(.08,.1,.14),r)*m;gl_FragColor=vec4(col*.8,m*.8);}";
  var mk=function(ty,src){var s2=g.createShader(ty);g.shaderSource(s2,src);g.compileShader(s2);return s2;};
  var pr=g.createProgram();g.attachShader(pr,mk(g.VERTEX_SHADER,vs));g.attachShader(pr,mk(g.FRAGMENT_SHADER,fs));g.linkProgram(pr);
  if(g.getProgramParameter(pr,g.LINK_STATUS)){
   g.useProgram(pr);var bf=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,bf);g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),g.STATIC_DRAW);
   var lp=g.getAttribLocation(pr,"p");g.enableVertexAttribArray(lp);g.vertexAttribPointer(lp,2,g.FLOAT,false,0,0);
   var ut=g.getUniformLocation(pr,"t"),uc=g.getUniformLocation(pr,"c"),raf=0,last=0;
   var frame=function(now){raf=0;if(home.hidden||D.hidden||off()){return;}
    if(now-last>=(window.__q===0?120:window.__q===1?70:50)){last=now;var c=acc();g.viewport(0,0,128,220);g.clearColor(0,0,0,0);g.clear(g.COLOR_BUFFER_BIT);g.uniform1f(ut,now/1000);g.uniform3f(uc,c[0],c[1],c[2]);g.drawArrays(g.TRIANGLE_STRIP,0,4);}
    raf=requestAnimationFrame(frame);};
   var go=function(){if(!raf&&!home.hidden)raf=requestAnimationFrame(frame);};
   D.addEventListener("homeshow",go);D.addEventListener("visibilitychange",go);go();
   cv.addEventListener("webglcontextlost",function(e){e.preventDefault();cv.remove();});
  }
 }
}catch(e){}}
/* ---- 2. Glare holografico + sombra dinamica nos posteres ---- */
var ul=$("list");
if(ul){
 var cur=null;
 var mv=function(e){if(off()||e.pointerType==="touch")return;var pw=e.target.closest&&e.target.closest(".pw");if(cur&&cur!==pw){cur.classList.remove("holo");}
  if(!pw){cur=null;return;}
  if(getComputedStyle(pw).position==="static")pw.style.position="relative";
  var r=pw.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  pw.style.setProperty("--hx",(x*100)+"%");pw.style.setProperty("--hy",(y*100)+"%");pw.style.setProperty("--sx",(5-(x-.5)*12).toFixed(1));pw.style.setProperty("--sy",(7-(y-.5)*12).toFixed(1));pw.classList.add("holo");cur=pw;};
 ul.addEventListener("pointermove",mv,{passive:true});
 ul.addEventListener("pointerleave",function(){if(cur){cur.classList.remove("holo");cur=null;}});
}
/* ---- 3. Giroscopio/mouse na joia + pinca para zoom ---- */
(window.__x3h=window.__x3h||[]).push(function(x,y){window.__gtx=x;window.__gty=y;});
var hb=$("hban");
if(hb){
 var P={},d0=0,zt=0;
 var dist=function(){var k=Object.keys(P);if(k.length<2)return 0;var a=P[k[0]],b=P[k[1]];return Math.hypot(a.x-b.x,a.y-b.y);};
 hb.addEventListener("pointerdown",function(e){P[e.pointerId]={x:e.clientX,y:e.clientY};if(Object.keys(P).length===2){d0=dist();clearInterval(zt);}},true);
 hb.addEventListener("pointermove",function(e){if(!P[e.pointerId])return;P[e.pointerId]={x:e.clientX,y:e.clientY};if(Object.keys(P).length===2&&d0>10){window.__gzm=Math.max(.7,Math.min(1.7,dist()/d0));}},true);
 var up=function(e){delete P[e.pointerId];if(Object.keys(P).length<2&&window.__gzm&&window.__gzm!==1){clearInterval(zt);zt=setInterval(function(){window.__gzm+=(1-window.__gzm)*.12;if(Math.abs(window.__gzm-1)<.01){window.__gzm=1;clearInterval(zt);}},30);}};
 ["pointerup","pointercancel"].forEach(function(n){hb.addEventListener(n,up,true);});
}
/* ---- 4. Conquista de rank: confete + joia pulsando ---- */
function confetti(){if(off()||!B.animate)return;var cs=["#2fd36b","#ffd166","#7bdff2","#ff6b9d","#b388ff","#fff"],k,e,x,dr;
 for(k=0;k<46;k++){e=D.createElement("i");e.className="mrcf";x=Math.random()*innerWidth;e.style.left=x+"px";e.style.background=cs[k%cs.length];B.appendChild(e);dr=(Math.random()-.5)*160;
  (function(e,dr){var a=e.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:"translate("+dr+"px,"+(innerHeight*(.55+Math.random()*.5))+"px) rotate("+(Math.random()*900-450)+"deg)",opacity:.9,offset:.8},{transform:"translate("+dr*1.2+"px,"+innerHeight+"px) rotate(720deg)",opacity:0}],{duration:1600+Math.random()*1400,delay:Math.random()*350,easing:"cubic-bezier(.22,1,.36,1)"});a.onfinish=function(){e.remove();};})(e,dr);}}
var prev=-1;
function chk(){try{if(typeof rkIdx!=="function"||typeof xpNow!=="function"||typeof RANKS==="undefined")return;var i=rkIdx(xpNow());
 if(prev>=0&&i>prev){confetti();try{if(hb)hb.dispatchEvent(new MouseEvent("click"));}catch(e){}
  var t=D.createElement("div");t.className="mrtoast";t.textContent=RANKS[i][2]+" Novo rank: "+RANKS[i][1];B.appendChild(t);if(t.animate&&!off()){var a=t.animate([{opacity:0,transform:"translateY(-14px) scale(.8)"},{opacity:1,transform:"none",offset:.15},{opacity:1,offset:.85},{opacity:0}],{duration:3200,easing:"cubic-bezier(.34,1.56,.64,1)"});a.onfinish=function(){t.remove();};}else setTimeout(function(){t.remove();},3200);
  try{if(navigator.vibrate)navigator.vibrate([40,30,80]);}catch(e){}}
 prev=i;}catch(e){}}
chk();setInterval(chk,1500);
window.__mrRankTest=function(){confetti();};
/* ---- 5. FLIP: poster voa ate o card 3D ---- */
if(ul){ul.addEventListener("click",function(e){var p=e.target.closest&&e.target.closest(".pos");if(!p||off())return;
 var r0=p.getBoundingClientRect();
 setTimeout(function(){var c=$("c3c"),m=$("c3");if(!c||!m||m.hidden||!c.animate)return;var r1=c.getBoundingClientRect();if(!r1.width||!r0.width)return;
  var dx=r0.left+r0.width/2-(r1.left+r1.width/2),dy=r0.top+r0.height/2-(r1.top+r1.height/2),sc=Math.max(.12,r0.width/r1.width);
  c.animate([{translate:dx+"px "+dy+"px",scale:String(sc),opacity:.3},{translate:"0px 0px",scale:"1",opacity:1}],{duration:520,easing:"cubic-bezier(.34,1.3,.5,1)"});},0);},false);}
}catch(e){if(window.console)console.warn("gfx2",e);}})();
}catch(e){console.error("[mr-gfx2]",e)}
/* mr-d3gl */
try{
(function(){try{
var D=document,H=D.documentElement,B=D.body;
var mq=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)");
function off(){return H.classList.contains("noanim")||H.classList.contains("eco")||window.__eco||(mq&&mq.matches);}
function qual(){return window.__eco?0:(window.__q==null?2:window.__q);}
var stl=D.createElement("style");stl.textContent=".d3.gl .d3w,.d3.gl .d3fl{display:none}.d3.gl{border-color:transparent!important;background:none!important;box-shadow:none!important;overflow:visible!important;touch-action:pan-y}.d3.gl.hit::after{display:none}.d3 canvas.d3c{position:absolute;left:-12px;top:-36px;width:calc(100% + 24px);height:calc(100% + 60px);z-index:1;pointer-events:none}";D.head.appendChild(stl);
/* ---------- matrizes 3x3 (linha-major) ---------- */
function Rx(a){var c=Math.cos(a),s=Math.sin(a);return [1,0,0,0,c,-s,0,s,c];}
function Ry(a){var c=Math.cos(a),s=Math.sin(a);return [c,0,s,0,1,0,-s,0,c];}
function Rz(a){var c=Math.cos(a),s=Math.sin(a);return [c,-s,0,s,c,0,0,0,1];}
function mul(A,Bm){var o=[],i,j,k,s;for(i=0;i<3;i++)for(j=0;j<3;j++){s=0;for(k=0;k<3;k++)s+=A[i*3+k]*Bm[k*3+j];o.push(s);}return o;}
function mv(R,v){return [R[0]*v[0]+R[1]*v[1]+R[2]*v[2],R[3]*v[0]+R[4]*v[1]+R[5]*v[2],R[6]*v[0]+R[7]*v[1]+R[8]*v[2]];}
function up(R){return new Float32Array([R[0],R[3],R[6],R[1],R[4],R[7],R[2],R[5],R[8]]);}
/* ---------- geometria: D extrudado com chanfro ---------- */
function buildD(){
 var V=[],x0=-54,xs=2,rx=52,Hh=70,t=26,d=16,b=5,M=26,N=M+3;
 function loop(kind,ds){var ox,hh,rr,pts=[],a,j;
  if(kind==="o"){ox=x0+ds;hh=Hh-ds;rr=rx-ds;}else{ox=x0+t-ds;hh=Hh-t+ds;rr=rx-t+ds;}
  pts.push([ox,-hh]);for(j=0;j<=M;j++){a=-Math.PI/2+Math.PI*j/M;pts.push([xs+rr*Math.cos(a),hh*Math.sin(a)]);}pts.push([ox,hh]);return pts;}
 function tri(a,b2,c,h){var ux=b2[0]-a[0],uy=b2[1]-a[1],uz=b2[2]-a[2],vx=c[0]-a[0],vy=c[1]-a[1],vz=c[2]-a[2],nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,l;
  if(nx*h[0]+ny*h[1]+nz*h[2]<0){nx=-nx;ny=-ny;nz=-nz;var tmp=b2;b2=c;c=tmp;}
  l=Math.hypot(nx,ny,nz)||1;nx/=l;ny/=l;nz/=l;
  [a,b2,c].forEach(function(p){V.push(p[0],p[1],-p[2],nx,ny,-nz);});}
 function strip(LA,za,LB,zb,hf){var k,k2,p0,p1,p2,p3,cx,cy,h;
  for(k=0;k<N;k++){k2=(k+1)%N;p0=[LA[k][0],LA[k][1],za];p1=[LA[k2][0],LA[k2][1],za];p2=[LB[k2][0],LB[k2][1],zb];p3=[LB[k][0],LB[k][1],zb];
   cx=(p0[0]+p1[0]+p2[0]+p3[0])/4;cy=(p0[1]+p1[1]+p2[1]+p3[1])/4;h=hf(cx,cy);tri(p0,p1,p2,h);tri(p0,p2,p3,h);}}
 var O0=loop("o",0),Ob=loop("o",b),I0=loop("i",0),Ib=loop("i",b);
 var oh=function(z){return function(x,y){return [x,y,z];};},ih=function(z){return function(x,y){return [-x,-y,z];};};
 strip(Ob,d,Ib,d,function(){return [0,0,1];});
 strip(Ob,d,O0,d-b,oh(40));strip(Ib,d,I0,d-b,ih(40));
 strip(O0,d-b,O0,-(d-b),oh(0));strip(I0,d-b,I0,-(d-b),ih(0));
 strip(O0,-(d-b),Ob,-d,oh(-40));strip(I0,-(d-b),Ib,-d,ih(-40));
 strip(Ob,-d,Ib,-d,function(){return [0,0,-1];});
 return new Float32Array(V);}
function buildTorus(R,r,seg,tub){var V=[],i,j,u,v,P=[];
 function pt(i,j){u=i/seg*6.2832;v=j/tub*6.2832;var cu=Math.cos(u),su=Math.sin(u),cv=Math.cos(v),sv=Math.sin(v);return [(R+r*cv)*cu,r*sv,(R+r*cv)*su,cv*cu,sv,cv*su];}
 for(i=0;i<seg;i++)for(j=0;j<tub;j++){var a=pt(i,j),b2=pt(i+1,j),c=pt(i+1,j+1),d2=pt(i,j+1);[a,b2,c,a,c,d2].forEach(function(p){V.push(p[0],p[1],p[2],p[3],p[4],p[5]);});}
 return new Float32Array(V);}
function buildOct(){var P=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],F=[[0,2,4],[4,2,1],[1,2,5],[5,2,0],[4,3,0],[1,3,4],[5,3,1],[0,3,5]],V=[];
 F.forEach(function(f){var A=P[f[0]],B2=P[f[1]],C=P[f[2]],ux=B2[0]-A[0],uy=B2[1]-A[1],uz=B2[2]-A[2],vx=C[0]-A[0],vy=C[1]-A[1],vz=C[2]-A[2],nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,l=Math.hypot(nx,ny,nz),cx=A[0]+B2[0]+C[0],cy=A[1]+B2[1]+C[1],cz=A[2]+B2[2]+C[2];
  if(nx*cx+ny*cy+nz*cz<0){nx=-nx;ny=-ny;nz=-nz;}nx/=l;ny/=l;nz/=l;[A,B2,C].forEach(function(p){V.push(p[0],p[1],p[2],nx,ny,nz);});});
 return new Float32Array(V);}
var GD=buildD(),GT1=buildTorus(95,1.6,72,8),GT2=buildTorus(76,1.2,64,8),GT3=buildTorus(122,1.1,80,8),GO=buildOct();
var VS="attribute vec3 aP;attribute vec3 aN;uniform mat3 uR;uniform vec3 uT;uniform float uS,uMir,uFloor,uOff;uniform vec2 uV;varying vec3 vN,vNl,vP;varying float vM,vH;void main(){vM=uMir;vP=aP;vNl=aN;vec3 w=uR*(aP*uS)+uT;vec3 n=uR*aN;vH=0.0;if(uMir>0.5){w.y=2.0*uFloor-w.y;n.y=-n.y;vH=w.y-uFloor;}float s=520.0/(520.0+w.z);vec2 sp=vec2(w.x*s/uV.x,-(w.y*s)/uV.y+uOff);vN=n;gl_Position=vec4(sp,w.z/520.0,1.0);}";
var FS="precision mediump float;varying vec3 vN,vNl,vP;varying float vM,vH;uniform vec3 uC;uniform float uA,uEm,uTm,uK;void main(){vec3 n=normalize(vN);vec3 L=vec3(-0.3904,-0.5855,-0.6831);vec3 Hh=vec3(-0.214,-0.3209,-0.9226);float df=max(dot(n,L),0.0)*0.75+0.25;float sp=pow(max(dot(n,Hh),0.0),32.0);float fr=pow(1.0-max(-n.z,0.0),3.0);float up=smoothstep(-0.5,0.9,-n.y);vec3 env=mix(uC*0.2,vec3(0.72,0.9,1.0),up);vec3 c;"
+"if(uEm>0.8){c=uC*(0.55+0.9*fr)+vec3(sp*0.6)+env*0.2;}else if(uEm>0.2){c=uC*(df*1.15+0.2)+vec3(sp*0.3)+uC*fr*0.6;}else{float sp2=pow(max(dot(n,normalize(vec3(0.5,-0.3,-0.8))),0.0),48.0);float az=abs(vNl.z);float ch=smoothstep(0.3,0.55,az)*(1.0-smoothstep(0.82,0.97,az));float face=smoothstep(0.9,0.98,az);float x=fract((vP.x+vP.y*0.6)/190.0-uTm*0.2);float band=1.0-smoothstep(0.0,0.06,abs(x-0.5));"
+"c=uC*df*(0.8+0.3*face)+vec3(sp*0.85)+uC*fr*0.7+env*(0.12+fr*0.5)+vec3(sp2*0.5)+(0.5+0.5*cos(6.2832*(n.x*0.6+n.y*0.4+vec3(0.0,0.33,0.67))))*fr*0.5+(0.5+0.5*cos(6.2832*(n.x*0.9+n.y*0.6+uTm*0.08+vec3(0.0,0.33,0.67))))*fr*0.3+vec3(pow(max(0.0,sin(n.x*9.0+n.y*7.0+uTm*1.6)*sin(n.y*11.0-n.z*8.0-uTm*1.1)),10.0))*0.7+uC*(0.1+0.1*sin(uTm*2.0+n.y*3.0))+(uC*0.9+vec3(0.15))*ch*1.0+vec3(0.9,1.0,1.0)*band*face*0.3;c*=1.0-vP.y*0.0016;}"
+"float fa=1.0;if(vM>0.5){fa=(1.0-smoothstep(0.0,uK*70.0,vH))*0.45;c*=0.8;}c=min(c,vec3(1.0));gl_FragColor=vec4(c*uA*fa,uA*fa);}";
var CC=null;
function rgbOf(s){try{if(!CC){CC=D.createElement("canvas");CC.width=CC.height=1;}var x=CC.getContext("2d",{willReadFrequently:true});x.clearRect(0,0,1,1);x.fillStyle="#2fd36b";x.fillStyle=s;x.fillRect(0,0,1,1);var d=x.getImageData(0,0,1,1).data;return [d[0],d[1],d[2]];}catch(e){return [47,211,107];}}
var STC=["#a64dff","#3aa0ff","#ff4d5a","#ffa530","#ffe14d","#4dff9a"].map(rgbOf);
/* ---------- instancia ---------- */
function mount(el){
 if(el.__d3gl||off())return;
 var gcv=D.createElement("canvas"),g=null;
 try{g=gcv.getContext("webgl",{alpha:true,premultipliedAlpha:true,antialias:true,depth:true,preserveDrawingBuffer:false});}catch(e){}
 if(!g)return;
 function sh(ty,src){var s=g.createShader(ty);g.shaderSource(s,src);g.compileShader(s);return s;}
 var pr=g.createProgram();g.attachShader(pr,sh(g.VERTEX_SHADER,VS));g.attachShader(pr,sh(g.FRAGMENT_SHADER,FS));g.linkProgram(pr);
 if(!g.getProgramParameter(pr,g.LINK_STATUS))return;
 g.useProgram(pr);
 var L={};["uR","uT","uS","uMir","uFloor","uOff","uV","uC","uA","uEm","uK"].forEach(function(n){L[n]=g.getUniformLocation(pr,n);});L.uTime=g.getUniformLocation(pr,"uTm");
  var aP=g.getAttribLocation(pr,"aP"),aN=g.getAttribLocation(pr,"aN");
 function buf(a){var b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,a,g.STATIC_DRAW);return {b:b,n:a.length/6};}
 var bD=buf(GD),b1=buf(GT1),b2=buf(GT2),b3=buf(GT3),bO=buf(GO);
 var c2=D.createElement("canvas");c2.className="d3c";c2.setAttribute("aria-hidden","true");el.insertBefore(c2,el.firstChild);
 var x2=c2.getContext("2d");
 var S={cw:0,ch:0,dpr:1,uy:0,up:0,vy:0,drag:null,moved:false,pulse:0,spin:0,hx:0,hy:0,thx:0,thy:0,sp:[],sk:[],bolt:null,last:0,vis:false,raf:0,ia:performance.now(),acc:[47,211,107],accT:0,trail:[[],[],[],[],[],[]],BL1:null,BL2:null};
 function fit(){var w=el.clientWidth+24,h=el.clientHeight+60,d=Math.min(2,window.devicePixelRatio||1);if(qual()<=0)d=1;if(w<=24||h<=60)return false;S.eh=h-60;S.f=(36+.4*S.eh)/h;
  if(w!==S.cw||h!==S.ch||d!==S.dpr){S.cw=w;S.ch=h;S.dpr=d;c2.width=Math.round(w*d);c2.height=Math.round(h*d);gcv.width=c2.width;gcv.height=c2.height;}return true;}
 function dm(bf,R,T,sc,mir,col,al,em){g.bindBuffer(g.ARRAY_BUFFER,bf.b);g.enableVertexAttribArray(aP);g.vertexAttribPointer(aP,3,g.FLOAT,false,24,0);g.enableVertexAttribArray(aN);g.vertexAttribPointer(aN,3,g.FLOAT,false,24,12);
  g.uniformMatrix3fv(L.uR,false,up(R));g.uniform3f(L.uT,T[0],T[1],T[2]);g.uniform1f(L.uS,sc);g.uniform1f(L.uMir,mir);g.uniform3f(L.uC,col[0]/255,col[1]/255,col[2]/255);g.uniform1f(L.uA,al);g.uniform1f(L.uEm,em);g.drawArrays(g.TRIANGLES,0,bf.n);}
 function proj(p,k){var s=520/(520+p[2]);return [S.cw/2+p[0]*s,S.ch*S.f+p[1]*s,s];}
 function bloom(q){if(q<1)return;var w=c2.width,h=c2.height,w1=w>>2,h1=h>>2,w2=Math.max(1,w>>4),h2=Math.max(1,h>>4);
  if(!S.BL1){S.BL1=D.createElement("canvas");S.BL2=D.createElement("canvas");}
  if(S.BL1.width!==w1){S.BL1.width=w1;S.BL1.height=h1;S.BL2.width=w2;S.BL2.height=h2;}
  var a=S.BL1.getContext("2d"),b=S.BL2.getContext("2d");a.setTransform(1,0,0,1,0,0);a.clearRect(0,0,w1,h1);a.drawImage(c2,0,0,w1,h1);b.setTransform(1,0,0,1,0,0);b.clearRect(0,0,w2,h2);b.drawImage(S.BL1,0,0,w2,h2);
  x2.save();x2.setTransform(1,0,0,1,0,0);x2.globalCompositeOperation="lighter";x2.imageSmoothingEnabled=true;try{x2.imageSmoothingQuality="high";}catch(e){}x2.globalAlpha=q>=2?.5:.32;x2.drawImage(S.BL2,0,0,w,h);if(q>=2){x2.globalAlpha=.26;x2.drawImage(S.BL1,0,0,w,h);}x2.restore();}
 function hit(){S.pulse=1;S.spin+=.9;var k,an,sp,o=proj([0,0,0]);
  for(k=0;k<44;k++){an=Math.random()*6.2832;sp=2+Math.random()*6;S.sk.push({x:o[0],y:o[1],vx:Math.cos(an)*sp,vy:Math.sin(an)*sp*.8-1.4,l:1,d:.6+Math.random()*.9,w:Math.random()<.3});}
  S.sp.push({t:0},{t:-.14},{t:-.28});S.bolt={t:performance.now(),p:[0,1,2].map(function(){var P=[[o[0]+(Math.random()-.5)*20,o[1]-20]],i,a=Math.random()*6.2832,x=P[0][0],y=P[0][1];for(i=1;i<=6;i++){x+=Math.cos(a)*S.cw*.07+(Math.random()-.5)*16;y+=Math.sin(a)*S.cw*.07+(Math.random()-.5)*16;P.push([x,y]);}return P;})};}
 el.addEventListener("click",function(e){if(S.moved){return;}hit();},false);
 el.addEventListener("click",function(e){if(S.moved){e.stopImmediatePropagation();S.moved=false;}},true);
 el.addEventListener("pointerdown",function(e){if(e.button>0)return;S.drag=e.clientX;S.dy=e.clientY;S.mv=0;S.moved=false;S.vy=0;S.ia=performance.now();kick();},{passive:true});
 el.addEventListener("pointermove",function(e){S.ia=performance.now();var r=el.getBoundingClientRect();
  if(S.drag!==null){var d=e.clientX-S.drag,dy=e.clientY-S.dy;S.drag=e.clientX;S.dy=e.clientY;S.mv+=Math.abs(d)+Math.abs(dy);if(S.mv>6){S.moved=true;try{el.setPointerCapture(e.pointerId);}catch(x){}}if(S.moved){S.uy+=d*.014;S.vy=S.vy*.5+d*.007;S.up=Math.max(-.6,Math.min(.6,S.up+dy*.006));}}
  else if(e.pointerType==="mouse"){S.thx=((e.clientX-r.left)/r.width-.5)*.5;S.thy=((e.clientY-r.top)/r.height-.5)*.35;}kick();},{passive:true});
 function rel(){if(S.drag===null)return;S.drag=null;S.vy=Math.max(-.25,Math.min(.25,S.vy));if(S.moved)setTimeout(function(){S.moved=false;},30);kick();}
 ["pointerup","pointercancel"].forEach(function(n){el.addEventListener(n,rel);});
 el.addEventListener("pointerleave",function(){S.thx=0;S.thy=0;});
 el.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" ")hit();});
 if("IntersectionObserver" in window)new IntersectionObserver(function(a){S.vis=a[0].isIntersecting;if(S.vis)kick();}).observe(el);else S.vis=true;
 D.addEventListener("visibilitychange",function(){kick();});
 g.canvas.addEventListener("webglcontextlost",function(e){e.preventDefault();el.classList.remove("gl");S.dead=true;});
 function kick(){if(!S.raf&&!S.dead)S.raf=requestAnimationFrame(frame);}
 function frame(now){
  S.raf=0;if(S.dead||D.hidden||!S.vis)return;
  if(off()){el.classList.remove("gl");return;}
  var q=qual(),idle=now-Math.max(S.ia,window.__ia||0)>8000,iv=Math.max(q>=2?16:q===1?33:66,idle?50:0);
  if(now-S.last<iv){S.raf=requestAnimationFrame(frame);return;}
  var dt=Math.min(.1,(now-(S.last||now))/1000)||.033;S.last=now;
  if(!fit()){S.raf=requestAnimationFrame(frame);return;}
  var cw=S.cw,ch=S.ch,k=S.eh/280,t=now/1000,d=S.dpr,i,j,c,o;
  if(now-S.accT>600){S.accT=now;S.acc=rgbOf((getComputedStyle(B).getPropertyValue("--ac")||"#2fd36b").trim()||"#2fd36b");}
  var ac=S.acc,acs="rgb("+ac[0]+","+ac[1]+","+ac[2]+")";
  /* dinamica */
  if(S.drag===null){S.uy+=S.vy;S.vy*=.95;if(Math.abs(S.vy)<.0006)S.vy=0;S.up*=.95;}
  S.hx+=(S.thx-S.hx)*.1;S.hy+=(S.thy-S.hy)*.1;S.pulse=Math.max(0,S.pulse-dt*1.6);S.spin*=Math.pow(.2,dt);
  var sway=Math.sin(t*.55)*.62,pitch=-.1+Math.sin(t*.4)*.06+S.up+S.hy+(window.__gty||0)*.2,
   Rs=mul(Ry(S.uy+S.hx+(window.__gtx||0)*.25),Rx(pitch)),Rd=mul(Rs,Ry(sway)),sc=k*(1+.1*S.pulse);
  var floor=86*k;
  /* GL */
  g.viewport(0,0,gcv.width,gcv.height);g.clearColor(0,0,0,0);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT);
  g.useProgram(pr);g.enable(g.BLEND);g.blendFunc(g.ONE,g.ONE_MINUS_SRC_ALPHA);
  g.uniform2f(L.uV,cw/2,ch/2);g.uniform1f(L.uOff,1-2*S.f);g.uniform1f(L.uFloor,floor);g.uniform1f(L.uK,k);g.uniform1f(L.uTime,t);
  var Z=[0,0,0];
  if(q>=1){g.disable(g.DEPTH_TEST);dm(bD,Rd,Z,sc,1,ac,1,0);}
  g.enable(g.DEPTH_TEST);g.depthFunc(g.LESS);
  dm(bD,Rd,Z,sc,0,ac,1,0);
  var ra=t*.6+S.spin*2;
  dm(b1,mul(Rs,mul(Rx(.35),Ry(ra))),Z,k,0,ac,.9,1);
  dm(b2,mul(Rs,mul(Rz(1.2),Ry(-ra*1.5))),Z,k,0,ac,.8,1);
  if(q>=1)dm(b3,mul(Rs,mul(Rx(-.6),mul(Rz(.5),Ry(ra*.5)))),Z,k,0,ac,.55,1);
  var stp=[];
  for(i=0;i<6;i++){var an=t*.8+i*1.0472+S.spin*1.5,bob=Math.sin(t*1.7+i)*7,P0=[112*Math.cos(an),bob-8,112*Math.sin(an)],P=mv(Rs,[P0[0]*k,P0[1]*k,P0[2]*k]);
   dm(bO,mul(Ry(t*2+i+S.spin*3),Rx(t*1.3+i)),P,(7+(i%3)*1.5)*k,0,STC[i],1,.5);stp.push(P);
   var pp=proj(P),tr=S.trail[i];tr.push(pp);if(tr.length>7)tr.shift();}
  /* 2D */
  x2.setTransform(d,0,0,d,0,0);x2.clearRect(0,0,cw,ch);
  o=proj([0,0,0]);
  var sc2=x2.createRadialGradient(o[0],o[1]+20*k,20*k,o[0],o[1]+20*k,215*k);sc2.addColorStop(0,"rgba(4,9,6,.82)");sc2.addColorStop(.55,"rgba(4,9,6,.5)");sc2.addColorStop(1,"rgba(4,9,6,0)");x2.fillStyle=sc2;x2.fillRect(0,0,cw,ch);var gl=x2.createRadialGradient(o[0],o[1],4*k,o[0],o[1],150*k);gl.addColorStop(0,"rgba("+ac[0]+","+ac[1]+","+ac[2]+","+(.30+.1*Math.sin(t*2)+S.pulse*.35)+")");gl.addColorStop(1,"rgba("+ac[0]+","+ac[1]+","+ac[2]+",0)");x2.fillStyle=gl;x2.fillRect(0,0,cw,ch);
  /* chao em perspectiva */
  var fy=o[1]+floor,hg=x2.createLinearGradient(0,0,cw,0),vg=x2.createLinearGradient(0,fy,0,ch),rg="rgba("+ac[0]+","+ac[1]+","+ac[2]+",";hg.addColorStop(0,rg+"0)");hg.addColorStop(.2,rg+"1)");hg.addColorStop(.8,rg+"1)");hg.addColorStop(1,rg+"0)");vg.addColorStop(0,rg+".32)");vg.addColorStop(1,rg+"0)");
  x2.save();x2.beginPath();x2.rect(0,fy,cw,ch-fy);x2.clip();x2.lineWidth=.7;x2.strokeStyle=hg;
  for(i=0;i<8;i++){var f=(i+(t*.4)%1)/8,yy=fy+f*f*(ch-fy);x2.globalAlpha=.4*Math.sin(Math.PI*Math.min(1,f*.96));x2.beginPath();x2.moveTo(0,yy);x2.lineTo(cw,yy);x2.stroke();}
  x2.globalAlpha=1;x2.strokeStyle=vg;for(i=-9;i<=9;i++){x2.beginPath();x2.moveTo(cw/2+i*cw*.03,fy);x2.lineTo(cw/2+i*cw*.12,ch);x2.stroke();}x2.restore();x2.globalAlpha=1;
  /* particulas em camadas */
  var n=q>=2?36:q===1?22:10;x2.fillStyle="#e8f0f5";
  for(i=0;i<n;i++){var L2=i%3,px=(((i*97)+t*(3+L2*6)+S.uy*(10+L2*10))%cw+cw)%cw,py=((i*53)%Math.floor(fy))+Math.sin(t*.6+i)*(1+L2);x2.globalAlpha=(.15+.5*Math.abs(Math.sin(t*1.3+i)))*(.5+L2*.25);x2.fillStyle=i%5?"#e8f0f5":acs;x2.fillRect(px,py,1+L2*.5,1+L2*.5);}
  x2.globalAlpha=1;
  /* onda de choque no chao */
  x2.save();x2.lineWidth=2;
  for(i=S.sp.length-1;i>=0;i--){var sw=S.sp[i];sw.t+=dt;if(sw.t<0)continue;if(sw.t>1.1){S.sp.splice(i,1);continue;}var u=sw.t/1.1,rr=(20+u*200)*k;x2.globalAlpha=(1-u)*.8;x2.strokeStyle=i%2?"#fff":acs;x2.beginPath();x2.ellipse(o[0],fy,rr,rr*.2,0,0,6.2832);x2.stroke();}
  x2.restore();x2.globalAlpha=1;
  /* trilhas das pedras (atras do GL) */
  for(i=0;i<6;i++){var tr2=S.trail[i];for(j=0;j<tr2.length;j++){x2.globalAlpha=.05*j;x2.fillStyle="rgb("+STC[i][0]+","+STC[i][1]+","+STC[i][2]+")";x2.fillRect(tr2[j][0]-1.5,tr2[j][1]-1.5,3,3);}}
  x2.globalAlpha=1;
  x2.drawImage(gcv,0,0,cw,ch);
  bloom(q);
  /* faiscas */
  x2.setTransform(d,0,0,d,0,0);
  for(i=S.sk.length-1;i>=0;i--){var s2=S.sk[i];s2.l-=dt/s2.d;if(s2.l<=0){S.sk.splice(i,1);continue;}s2.x+=s2.vx;s2.y+=s2.vy;s2.vy+=.14;s2.vx*=.985;x2.globalAlpha=s2.l;x2.fillStyle=s2.w?"#fff":acs;x2.shadowColor=acs;x2.shadowBlur=q>=1?6:0;x2.fillRect(s2.x-1.5,s2.y-1.5,3,3);}
  x2.shadowBlur=0;x2.globalAlpha=1;
  /* raios */
  if(S.bolt){var age=now-S.bolt.t;if(age<280){var fb=1-age/280;x2.globalAlpha=.16*fb;x2.fillStyle=acs;x2.fillRect(0,0,cw,ch);x2.globalAlpha=fb;x2.lineJoin="round";
    S.bolt.p.forEach(function(P,jj){x2.beginPath();x2.moveTo(P[0][0],P[0][1]);for(var m=1;m<P.length;m++)x2.lineTo(P[m][0],P[m][1]);x2.lineWidth=jj?1.2:3;x2.strokeStyle=jj?"#fff":acs;x2.stroke();});x2.globalAlpha=1;}else S.bolt=null;}
  S.raf=requestAnimationFrame(frame);
 }
 el.__d3gl=S;el.classList.add("gl");kick();
}
function all(){[].forEach.call(D.querySelectorAll(".d3"),mount);}
all();D.addEventListener("homeshow",all);
}catch(e){if(window.console)console.warn("d3gl",e);}})();
}catch(e){console.error("[mr-d3gl]",e)}
/* mr-wp3d */
try{
(function(){try{
var D=document,H=D.documentElement,B=D.body,mq=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)");
var st=D.createElement("style");st.textContent="#wp3d{position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none}html.wp3on body::before{display:none}";D.head.appendChild(st);
var cv=D.createElement("canvas");cv.id="wp3d";cv.setAttribute("aria-hidden","true");B.insertBefore(cv,B.firstChild);
var x=cv.getContext("2d"),W=0,Hh=0,dp=1,last=0,ac=[47,211,107],accT=-1e4,CC=D.createElement("canvas"),i,j,px=0,py=0,tx=0,ty=0,SP={},shoot=null,nextSh=3;CC.width=CC.height=1;
addEventListener("pointermove",function(e){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;},{passive:true});
function off(){return H.classList.contains("noanim")||H.classList.contains("eco")||window.__eco||(mq&&mq.matches);}
function rgb(s){try{var c=CC.getContext("2d",{willReadFrequently:true});c.clearRect(0,0,1,1);c.fillStyle="#2fd36b";c.fillStyle=s;c.fillRect(0,0,1,1);var q=c.getImageData(0,0,1,1).data;return [q[0],q[1],q[2]];}catch(e){return [47,211,107];}}
function rnd(a,b){return a+Math.random()*(b-a);}
function spr(c,sz){var k=c+sz,s=SP[k];if(!s){s=D.createElement("canvas");s.width=s.height=sz;var g=s.getContext("2d"),r=g.createRadialGradient(sz/2,sz/2,0,sz/2,sz/2,sz/2),a=c.replace("rgb(","rgba(");r.addColorStop(0,"#fff");r.addColorStop(.16,c);r.addColorStop(.45,a.replace(")",",.28)"));r.addColorStop(1,a.replace(")",",0)"));g.fillStyle=r;g.fillRect(0,0,sz,sz);SP[k]=s;}return s;}
var P=[[1,0,0],[-1,0,0],[0,1.5,0],[0,-1.5,0],[0,0,1],[0,0,-1]],F=[[0,2,4],[4,2,1],[1,2,5],[5,2,0],[4,3,0],[1,3,4],[5,3,1],[0,3,5]];
var CR=[],ST=[],EM=[];
for(i=0;i<9;i++)CR.push({x:rnd(-1,1),y:rnd(-.8,.8),z:rnd(120,800),s:rnd(26,62),a:rnd(0,6),b:rnd(0,6),va:rnd(.15,.5)*(i%2?1:-1),vb:rnd(.1,.4),ph:rnd(0,6)});
for(i=0;i<110;i++)ST.push({x:rnd(-1,1),y:rnd(-1,1),z:rnd(40,900)});
for(i=0;i<46;i++)EM.push({x:Math.random(),y:Math.random(),v:rnd(.012,.05),p:rnd(0,6),s:rnd(.8,2.4)});
function fit(){var w=innerWidth,h=innerHeight,q=window.__eco?0:(window.__q==null?2:window.__q);dp=q<=0?1:Math.min(2,devicePixelRatio||1);if(w!==W||h!==Hh||cv.width!==Math.round(w*dp)){W=w;Hh=h;cv.width=Math.round(w*dp);cv.height=Math.round(h*dp);}return q;}
function rot(p,a,b){var ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b),X=p[0]*ca+p[2]*sa,Z=-p[0]*sa+p[2]*ca,Y=p[1]*cb-Z*sb;return [X,Y,p[1]*sb+Z*cb];}
function emblem(t,q,cs,ra,cx,W,Hh){
 var S=Math.min(1.25*W,640),u=S/400,ey=(Hh-S)*.4+S/2,ay=Math.sin(t*.3)*.75+t*.06+px*.7,ax=.3+Math.sin(t*.23)*.22+py*.5,N=q>=2?72:48,pu=1+.12*Math.sin(t*2),i,k,wh="rgb(255,255,255)";
 function G(p){var v=rot(p,ay,ax),f=900/(900+v[2]);return [cx+v[0]*u*f,ey+v[1]*u*f,f];}
 function dd(f){return Math.max(0,Math.min(1,(f-.8)/.45));}
 x.save();x.globalCompositeOperation="lighter";x.lineCap="round";x.lineJoin="round";
 var g=x.createRadialGradient(cx,ey,0,cx,ey,S*.45);g.addColorStop(0,ra+(.36*pu)+")");g.addColorStop(.5,ra+".08)");g.addColorStop(1,ra+"0)");x.fillStyle=g;x.fillRect(0,0,W,Hh);
 if(q>=1)for(k=0;k<10;k++){var a=k*.6283+t*.05;x.fillStyle=ra+".04)";x.beginPath();x.moveTo(cx,ey);x.lineTo(cx+Math.cos(a-.07)*S,ey+Math.sin(a-.07)*S);x.lineTo(cx+Math.cos(a+.07)*S,ey+Math.sin(a+.07)*S);x.fill();}
 x.strokeStyle=cs;x.shadowColor=cs;x.shadowBlur=q>=1?10:0;
 function ring(r,a,b,al,lw){var pts=[],an,d;for(i=0;i<=N;i++){an=i/N*6.2832;pts.push(G(rot([r*Math.cos(an),r*Math.sin(an),0],a,b)));}
  for(i=0;i<N;i++){d=dd((pts[i][2]+pts[i+1][2])/2);x.globalAlpha=al*(.22+.78*d);x.lineWidth=lw*(.7+.6*d);x.beginPath();x.moveTo(pts[i][0],pts[i][1]);x.lineTo(pts[i+1][0],pts[i+1][1]);x.stroke();}}
 ring(180,0,0,.7,2.4);ring(188,0,0,.25,1);ring(180,t*.5,0,.45,1.7);ring(160,0,t*.4,.42,1.5);ring(120,t*.3,t*.35,.32,1.2);
 for(k=0;k<72;k++){var an=k/72*6.2832+t*.08,l=k%6?4:10,p1=G([196*Math.cos(an),196*Math.sin(an),0]),p2=G([(196+l)*Math.cos(an),(196+l)*Math.sin(an),0]);x.globalAlpha=.1+.4*dd(p1[2]);x.lineWidth=k%6?.8:1.6;x.beginPath();x.moveTo(p1[0],p1[1]);x.lineTo(p2[0],p2[1]);x.stroke();}
 for(k=0;k<40;k++){var a0=k/40*6.2832+t*.35,zz=Math.sin(t+k)*14,A=[],p;for(j=0;j<5;j++)A.push(G([140*Math.cos(a0+j*.025),140*Math.sin(a0+j*.025),zz]));x.globalAlpha=.25+.5*dd(A[2][2]);x.lineWidth=2.4;x.beginPath();A.forEach(function(p,n){n?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]);});x.stroke();}
 function prism(h,w,z,al,fl,sp){var F0=[[0,-h,z],[w,0,z],[0,h,z],[-w,0,z]],V=F0.map(G).concat(F0.map(function(p){return G([p[0],p[1],-z]);})),fs=[[0,1,2,3],[4,5,6,7]],n;
  for(n=0;n<4;n++)fs.push([n,(n+1)%4,4+(n+1)%4,4+n]);
  fs.map(function(f,m){return {f:f,m:m,d:(V[f[0]][2]+V[f[1]][2]+V[f[2]][2]+V[f[3]][2])/4};}).sort(function(a,b){return a.d-b.d;}).forEach(function(o){
   var lit=o.m<2?.25:.15+.85*Math.max(0,Math.sin(t*sp+o.m*1.57)),f=o.f;x.beginPath();x.moveTo(V[f[0]][0],V[f[0]][1]);for(n=1;n<4;n++)x.lineTo(V[f[n]][0],V[f[n]][1]);x.closePath();
   x.globalAlpha=1;x.fillStyle=ra+(fl*lit)+")";x.fill();x.globalAlpha=al*(.4+.6*dd(o.d));x.lineWidth=1.6;x.stroke();});}
 prism(160,140,36,.7,.2,.9);prism(110,90,14,.8,.3,-1.3);
 x.globalAlpha=.4;x.lineWidth=2;var b1=G([0,-230,0]),b2=G([0,230,0]);x.beginPath();x.moveTo(b1[0],b1[1]);x.lineTo(b2[0],b2[1]);x.stroke();
 var cv2=P.map(function(p){var v=rot([p[0]*34*pu,p[1]*34*pu,p[2]*34*pu],t*.9,t*.6);return G(v);});
 F.forEach(function(f,m){var A=cv2[f[0]],B2=cv2[f[1]],C=cv2[f[2]],lit=.3+.7*Math.max(0,Math.sin(t*1.4+m*.8));x.beginPath();x.moveTo(A[0],A[1]);x.lineTo(B2[0],B2[1]);x.lineTo(C[0],C[1]);x.closePath();x.globalAlpha=1;x.fillStyle=ra+(.42*lit)+")";x.fill();x.globalAlpha=.9;x.strokeStyle="#e8fff4";x.lineWidth=1;x.stroke();});
 x.strokeStyle=cs;x.globalAlpha=1;x.drawImage(spr(wh,128),cx-45*u,ey-45*u,90*u,90*u);
 var OB=[[180,0,0,.9],[180,t*.5,0,-1.2],[160,0,t*.4,1.5],[120,t*.3,t*.35,-1.9]];
 OB.forEach(function(o,n){for(j=0;j<9;j++){var ag=o[3]*t-j*.07*(o[3]>0?1:-1),p=G(rot([o[0]*Math.cos(ag),o[0]*Math.sin(ag),0],o[1],o[2])),sz=(j?30-j*2.5:64)*u*.8;x.globalAlpha=(1-j/9)*.9*(.4+.6*dd(p[2]));x.drawImage(spr(j?cs:wh,64),p[0]-sz/2,p[1]-sz/2,sz,sz);}});
 x.restore();x.globalAlpha=1;}
function frame(now){
 requestAnimationFrame(frame);
 var hm=D.getElementById("home");
 if(off()){H.classList.remove("wp3on");x.clearRect(0,0,cv.width,cv.height);return;}
 if(D.hidden||(hm&&!hm.hidden))return;
 H.classList.add("wp3on");
 var q=fit(),iv=q>=2?20:q===1?36:60;if(now-last<iv)return;var dt=Math.min(.08,(now-(last||now))/1000);last=now;var t=now/1000;
 px+=(tx-px)*.06;py+=(ty-py)*.06;
 if(now-accT>800){accT=now;ac=rgb((getComputedStyle(B).getPropertyValue("--ac")||"#2fd36b").trim()||"#2fd36b");}
 var cs="rgb("+ac[0]+","+ac[1]+","+ac[2]+")",ra="rgba("+ac[0]+","+ac[1]+","+ac[2]+",",cx=W/2,cy=Hh*.46,F0=Math.min(W,Hh)*.9,gx=(window.__gtx||0)*.12+px*.5,gy=(window.__gty||0)*.1+py*.4;
 x.setTransform(dp,0,0,dp,0,0);x.clearRect(0,0,W,Hh);x.globalAlpha=1;
 for(i=0;i<3;i++){var nx=cx+Math.cos(t*.12+i*2.1)*W*.35,ny=Hh*(.3+.2*i)+Math.sin(t*.1+i)*Hh*.08,g=x.createRadialGradient(nx,ny,0,nx,ny,Math.max(W,Hh)*.5),nc=i==1?"rgba(90,130,255,":ra;g.addColorStop(0,nc+(.15-i*.025)+")");g.addColorStop(1,nc+"0)");x.fillStyle=g;x.fillRect(0,0,W,Hh);}
 emblem(t,q,cs,ra,cx,W,Hh);
 var hz=Hh*.74,hg=x.createLinearGradient(0,0,W,0);hg.addColorStop(0,ra+"0)");hg.addColorStop(.5,ra+".7)");hg.addColorStop(1,ra+"0)");x.fillStyle=hg;x.fillRect(0,hz-1,W,2);
 x.save();x.beginPath();x.rect(0,hz,W,Hh-hz);x.clip();x.lineWidth=.8;x.strokeStyle=cs;
 for(i=0;i<12;i++){var f=(i+(t*.25)%1)/12,yy=hz+f*f*(Hh-hz);x.globalAlpha=.34*Math.sin(Math.PI*Math.min(1,f*.97));x.beginPath();x.moveTo(0,yy);x.lineTo(W,yy);x.stroke();}
 x.globalAlpha=.16;for(i=-12;i<=12;i++){x.beginPath();x.moveTo(cx+i*W*.02,hz);x.lineTo(cx+i*W*.2,Hh);x.stroke();}x.restore();x.globalAlpha=1;
 var ns=q>=2?110:q===1?70:36;x.lineCap="round";
 for(i=0;i<ns;i++){var s=ST[i],z0=s.z;s.z-=dt*(55+(i%4)*25);if(s.z<30){s.x=rnd(-1,1);s.y=rnd(-1,1);s.z=900;continue;}
  var k0=F0/(F0*.35+z0),k1=F0/(F0*.35+s.z),X1=cx+s.x*W*.9*k1+gx*60,Y1=cy+s.y*Hh*.9*k1+gy*60,X0=cx+s.x*W*.9*k0+gx*60,Y0=cy+s.y*Hh*.9*k0+gy*60;
  x.globalAlpha=Math.min(1,(900-s.z)/500)*.8;x.strokeStyle=i%6?"#dff3ff":cs;x.lineWidth=.6+k1*.5;x.beginPath();x.moveTo(X0,Y0);x.lineTo(X1,Y1);x.stroke();}
 x.globalAlpha=1;
 if(q>=1){x.globalCompositeOperation="lighter";for(i=0;i<(q>=2?46:24);i++){var e=EM[i];e.y-=e.v*dt;if(e.y<-.05){e.y=1.05;e.x=Math.random();}var sz=e.s*7;x.globalAlpha=.25+.5*Math.abs(Math.sin(t*1.5+e.p));x.drawImage(spr(i%4?cs:"rgb(255,255,255)",32),e.x*W+Math.sin(t*.6+e.p)*14-sz/2,e.y*Hh-sz/2,sz,sz);}x.globalCompositeOperation="source-over";x.globalAlpha=1;}
 var L=[-.45,-.6,-.65],nc2=q>=2?9:q===1?6:4,lst=[];
 for(i=0;i<nc2;i++){var c=CR[i],z=c.z+Math.sin(t*.3+c.ph)*40,k=F0/(F0*.35+z),ox=c.x*W*.55+Math.sin(t*.25+c.ph)*18,oy=c.y*Hh*.5+Math.cos(t*.2+c.ph)*14;lst.push({c:c,z:z,k:k,px:cx+ox*k*1.6+gx*100*k,py:cy+oy*k*1.6+gy*100*k});}
 lst.sort(function(a,b){return b.z-a.z;});
 lst.forEach(function(o){var c=o.c,r=c.s*o.k*1.5,V=P.map(function(p){var v=rot(p,c.a+t*c.va,c.b+t*c.vb);return [o.px+v[0]*r,o.py+v[1]*r,v[2]];}),fog=Math.max(.25,1-o.z/1000);
  x.save();x.globalCompositeOperation="lighter";x.globalAlpha=.5*fog;x.drawImage(spr(cs,128),o.px-r*2.4,o.py-r*2.4,r*4.8,r*4.8);x.globalCompositeOperation="source-over";
  x.globalAlpha=fog;x.shadowColor=cs;x.shadowBlur=q>=1?14*o.k:0;x.lineJoin="round";
  F.map(function(f){var a=V[f[0]],b=V[f[1]],cc=V[f[2]],nz=(b[0]-a[0])*(cc[1]-a[1])-(b[1]-a[1])*(cc[0]-a[0]),z2=(a[2]+b[2]+cc[2])/3;return {f:f,z:z2,sh:Math.max(0,Math.min(1,.5+(nz>0?1:-1)*.3+Math.sin(z2*2+t*1.2+c.ph)*.25))};}).sort(function(a,b){return b.z-a.z;}).forEach(function(fc){
   var A=V[fc.f[0]],Bv=V[fc.f[1]],C=V[fc.f[2]];x.beginPath();x.moveTo(A[0],A[1]);x.lineTo(Bv[0],Bv[1]);x.lineTo(C[0],C[1]);x.closePath();
   x.fillStyle=ra+(.06+fc.sh*.3)+")";x.fill();if(fc.sh>.72){x.fillStyle="rgba(255,255,255,"+(fc.sh-.62)*.35+")";x.fill();}x.strokeStyle=fc.sh>.6?"rgba(235,255,250,"+(.35+fc.sh*.45)+")":ra+".6)";x.lineWidth=1;x.stroke();});
  x.restore();});
 x.globalAlpha=1;
 if(!shoot&&t>nextSh){shoot={x:rnd(.4,1)*W,y:rnd(0,.25)*Hh,l:0};}
 if(shoot){shoot.l+=dt*1.3;var hx=shoot.x-shoot.l*W*.7,hy=shoot.y+shoot.l*Hh*.3,tl=Math.max(0,shoot.l-.18),tx2=shoot.x-tl*W*.7,ty2=shoot.y+tl*Hh*.3,sg=x.createLinearGradient(tx2,ty2,hx,hy);sg.addColorStop(0,"rgba(255,255,255,0)");sg.addColorStop(1,"rgba(255,255,255,.9)");x.strokeStyle=sg;x.lineWidth=2;x.beginPath();x.moveTo(tx2,ty2);x.lineTo(hx,hy);x.stroke();if(shoot.l>1.2){shoot=null;nextSh=t+rnd(5,10);}}
}
requestAnimationFrame(frame);
}catch(e){if(window.console)console.warn("wp3d",e);}})();
}catch(e){console.error("[mr-wp3d]",e)}
/* mr-hm3d */
try{
(function(){try{
var D=document,H=D.documentElement,home=D.getElementById("home");if(!home)return;
var mq=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)");
var st=D.createElement("style");st.textContent=".home #hm3d{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}";D.head.appendChild(st);
var cv=D.createElement("canvas");cv.id="hm3d";cv.setAttribute("aria-hidden","true");var bg=D.getElementById("hbg");home.insertBefore(cv,bg?bg.nextSibling:home.firstChild);
var x=cv.getContext("2d"),W=0,Hh=0,dp=1,last=0,ac=[47,211,107],accT=-1e4,CC=D.createElement("canvas"),SP={},px=0,py=0,tx=0,ty=0,bolt=null,nb=2,i,j,k;CC.width=CC.height=1;
addEventListener("pointermove",function(e){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;},{passive:true});
function off(){return H.classList.contains("noanim")||H.classList.contains("eco")||window.__eco||(mq&&mq.matches);}
function rgb(s){try{var c=CC.getContext("2d",{willReadFrequently:true});c.clearRect(0,0,1,1);c.fillStyle="#2fd36b";c.fillStyle=s;c.fillRect(0,0,1,1);var q=c.getImageData(0,0,1,1).data;return [q[0],q[1],q[2]];}catch(e){return [47,211,107];}}
function rnd(a,b){return a+Math.random()*(b-a);}
function spr(c,sz){var kk=c+sz,s=SP[kk];if(!s){s=D.createElement("canvas");s.width=s.height=sz;var g=s.getContext("2d"),r=g.createRadialGradient(sz/2,sz/2,0,sz/2,sz/2,sz/2),a=c.replace("rgb(","rgba(");r.addColorStop(0,"#fff");r.addColorStop(.16,c);r.addColorStop(.45,a.replace(")",",.28)"));r.addColorStop(1,a.replace(")",",0)"));g.fillStyle=r;g.fillRect(0,0,sz,sz);SP[kk]=s;}return s;}
function rot(p,a,b){var ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b),X=p[0]*ca+p[2]*sa,Z=-p[0]*sa+p[2]*ca,Y=p[1]*cb-Z*sb;return [X,Y,p[1]*sb+Z*cb];}
var STC=["#a64dff","#3aa0ff","#ff4d5a","#ffa530","#ffe14d","#4dff9a"].map(function(c){return "rgb("+rgb(c).join(",")+")";});
function fit(){var w=innerWidth,h=innerHeight,q=window.__eco?0:(window.__q==null?2:window.__q);dp=q<=0?1:Math.min(2,devicePixelRatio||1);if(w!==W||h!==Hh||cv.width!==Math.round(w*dp)){W=w;Hh=h;cv.width=Math.round(w*dp);cv.height=Math.round(h*dp);}return q;}
function frame(now){
 requestAnimationFrame(frame);
 if(off()){if(W)x.clearRect(0,0,cv.width,cv.height);return;}
 if(D.hidden||home.hidden)return;
 var q=fit(),iv=q>=2?22:q===1?38:60;if(now-last<iv)return;last=now;var t=now/1000;
 px+=(tx-px)*.06;py+=(ty-py)*.06;
 if(now-accT>800){accT=now;ac=rgb((getComputedStyle(D.body).getPropertyValue("--ac")||"#2fd36b").trim()||"#2fd36b");}
 var acs=ac.join(","),cs="rgb("+acs+")",ra="rgba("+acs+",";
 x.setTransform(dp,0,0,dp,0,0);x.clearRect(0,0,W,Hh);x.globalCompositeOperation="lighter";x.lineCap="round";x.lineJoin="round";
 /* aurora */
 for(k=0;k<3;k++){var by=Hh*(.14+.09*k),am=Hh*(.035+.01*k),th=Hh*.17,col=k==1?"90,130,255":acs,g=x.createLinearGradient(0,by-am,0,by+th);g.addColorStop(0,"rgba("+col+",0)");g.addColorStop(.35,"rgba("+col+","+(.17-k*.03)+")");g.addColorStop(1,"rgba("+col+",0)");x.fillStyle=g;x.beginPath();
  for(i=0;i<=24;i++){var xx=i/24*W,yy=by+Math.sin(i*.5+t*(.5+k*.2)+k*2)*am+Math.sin(i*.23-t*.3)*am*.6;i?x.lineTo(xx,yy):x.moveTo(xx,yy);}x.lineTo(W,by+th);x.lineTo(0,by+th);x.closePath();x.fill();}
 /* tunel hexagonal em espiral */
 var cx=W/2+px*W*.12,cy=Hh*.4+py*Hh*.08,R=Math.max(W,Hh)*.75,nr=q>=2?16:q===1?11:7,z,r,a;
 x.shadowColor=cs;x.shadowBlur=q>=1?8:0;x.lineWidth=1.2;
 for(i=0;i<nr;i++){z=(i/nr+t*.07)%1;r=R*Math.pow(z,2.2)+4;x.strokeStyle=ra+(Math.sin(Math.PI*z)*.5)+")";x.beginPath();for(j=0;j<=6;j++){a=z*2.4+t*.25+j*1.0472;j?x.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.82):x.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.82);}x.stroke();}
 x.strokeStyle=ra+".1)";for(j=0;j<6;j++){x.beginPath();for(i=0;i<=20;i++){z=i/20;r=R*Math.pow(z,2.2)+4;a=z*2.4+t*.25+j*1.0472;i?x.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.82):x.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.82);}x.stroke();}
 /* planeta wireframe girando */
 var PR=W*.62,pcx=W/2+px*12,pcy=Hh+PR*.3,ay=t*.12,ax=.5,pg=x.createRadialGradient(pcx,pcy,PR*.8,pcx,pcy,PR*1.12);pg.addColorStop(0,ra+"0)");pg.addColorStop(.62,ra+".2)");pg.addColorStop(1,ra+"0)");x.shadowBlur=0;x.fillStyle=pg;x.fillRect(0,0,W,Hh);
 function poly(P,al){var n,A,B,d;x.strokeStyle=cs;for(var pass=0;pass<2;pass++){x.globalAlpha=pass?al:al*.12;x.beginPath();for(n=0;n<P.length-1;n++){A=P[n];B=P[n+1];d=(A[2]+B[2])<0;if(d===!!pass){x.moveTo(A[0],A[1]);x.lineTo(B[0],B[1]);}}x.stroke();}}
 function pt(p){var v=rot(p,ay,ax);return [pcx+v[0],pcy+v[1],v[2]];}
 x.lineWidth=1.1;
 for(k=-3;k<=3;k++){var ph=k*.4,rr=PR*Math.cos(ph),P=[];for(i=0;i<=40;i++){a=i/40*6.2832;P.push(pt([rr*Math.cos(a),-PR*Math.sin(ph),rr*Math.sin(a)]));}poly(P,.4);}
 for(k=0;k<12;k++){var th2=k*.5236,P2=[];for(i=0;i<=24;i++){a=-1.5708+i/24*3.1416;P2.push(pt([PR*Math.cos(a)*Math.cos(th2),-PR*Math.sin(a),PR*Math.cos(a)*Math.sin(th2)]));}poly(P2,.34);}
 x.globalAlpha=1;
 /* pedras orbitando + raios */
 var ocx=W/2+px*20,ocy=Hh*.3+py*10,orx=W*.46,ory=W*.1,O=[],an,s;
 for(k=0;k<6;k++){an=t*.5+k*1.0472;O.push({k:k,x:ocx+Math.cos(an)*orx,y:ocy+Math.sin(an)*ory+Math.sin(t*.7+k)*6,s:Math.sin(an),an:an});}
 O.sort(function(A,B){return A.s-B.s;});
 O.forEach(function(o){var sz=(30+14*o.s)*(W/400);
  for(j=5;j>0;j--){var a2=o.an-j*.07;x.globalAlpha=.08*(6-j);x.drawImage(spr(STC[o.k],32),ocx+Math.cos(a2)*orx-5,ocy+Math.sin(a2)*ory-5,10,10);}
  x.globalAlpha=.55+.3*o.s;x.drawImage(spr(STC[o.k],64),o.x-sz/2,o.y-sz/2,sz,sz);x.globalAlpha=.9;x.drawImage(spr("rgb(255,255,255)",32),o.x-sz*.14,o.y-sz*.14,sz*.28,sz*.28);});
 x.globalAlpha=1;
 if(!bolt&&t>nb){var A=O[(Math.random()*6)|0],B=O[(Math.random()*6)|0];if(A!==B)bolt={A:A,B:B,t0:t};nb=t+rnd(2.5,5);}
 if(bolt){var age=t-bolt.t0;if(age<.24){var f=1-age/.24;x.shadowColor=cs;x.shadowBlur=10;[3,1.2].forEach(function(lw,n){x.lineWidth=lw;x.strokeStyle=n?"#fff":cs;x.globalAlpha=f;x.beginPath();x.moveTo(bolt.A.x,bolt.A.y);for(i=1;i<6;i++){x.lineTo(bolt.A.x+(bolt.B.x-bolt.A.x)*i/6+(n?0:(Math.sin(i*7+t*90)*9)),bolt.A.y+(bolt.B.y-bolt.A.y)*i/6+(n?0:(Math.cos(i*5+t*80)*9)));}x.lineTo(bolt.B.x,bolt.B.y);x.stroke();});x.shadowBlur=0;}else bolt=null;}
 x.globalAlpha=1;x.globalCompositeOperation="source-over";
}
requestAnimationFrame(frame);
}catch(e){if(window.console)console.warn("hm3d",e);}})();
}catch(e){console.error("[mr-hm3d]",e)}
/* mr-book3d */
try{
(function(){try{
var D=document,H=D.documentElement,dk=D.getElementById("dkh");if(!dk)return;
var mk=dk.querySelector(".mk");if(!mk)return;
var cv=D.createElement("canvas");cv.className="bkfx";cv.setAttribute("aria-hidden","true");mk.appendChild(cv);
var x=cv.getContext("2d"),run=false,W=0,Hh=0,dp=1,ac=[47,211,107],SP={},FL=[],PA=[],SK=[],burstT=0,burstOk=false,CC=D.createElement("canvas"),i,k;CC.width=CC.height=1;
function off(){return H.classList.contains("noanim")||H.classList.contains("eco")||window.__eco||(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);}
function rgb(s){try{var c=CC.getContext("2d",{willReadFrequently:true});c.clearRect(0,0,1,1);c.fillStyle="#2fd36b";c.fillStyle=s;c.fillRect(0,0,1,1);var q=c.getImageData(0,0,1,1).data;return [q[0],q[1],q[2]];}catch(e){return [47,211,107];}}
function spr(c,sz){var kk=c+sz,s=SP[kk];if(!s){s=D.createElement("canvas");s.width=s.height=sz;var g=s.getContext("2d"),r=g.createRadialGradient(sz/2,sz/2,0,sz/2,sz/2,sz/2),a=c.replace("rgb(","rgba(");r.addColorStop(0,"#fff");r.addColorStop(.16,c);r.addColorStop(.45,a.replace(")",",.28)"));r.addColorStop(1,a.replace(")",",0)"));g.fillStyle=r;g.fillRect(0,0,sz,sz);SP[kk]=s;}return s;}
function start(){if(run)return;ac=rgb((getComputedStyle(D.body).getPropertyValue("--ac")||"#2fd36b").trim()||"#2fd36b");run=true;burstOk=false;burstT=0;SK=[];FL=[];PA=[];
 for(i=0;i<7;i++)FL.push({o:i/7,a:Math.random()*6.28,r:Math.random()});for(i=0;i<64;i++)PA.push({p:i/64,w:Math.random()});requestAnimationFrame(loop);}
function stop(){run=false;x.clearRect(0,0,cv.width,cv.height);}
new MutationObserver(function(){if(dk.classList.contains("go")&&!dk.classList.contains("skip")&&!off())start();else if(run)stop();}).observe(dk,{attributes:true,attributeFilter:["class"]});
function loop(now){
 if(!run)return;if(!dk.classList.contains("go")||dk.classList.contains("skip")){stop();return;}requestAnimationFrame(loop);
 var an=dk.getAnimations?dk.getAnimations({subtree:false})[0]:null,u=.5,rev=dk.classList.contains("rev");
 if(an&&an.effect){var dur=an.effect.getTiming().duration||1;u=Math.max(0,Math.min(1,(an.currentTime||0)/dur));}
 var w0=dk.clientWidth,h0=dk.clientHeight,q=window.__eco?0:(window.__q==null?2:window.__q);dp=q<=0?1:Math.min(2,devicePixelRatio||1);
 if(w0!==W||h0!==Hh||cv.width!==Math.round(w0*dp)){W=w0;Hh=h0;cv.width=Math.round(W*dp);cv.height=Math.round(Hh*dp);}
 var cs="rgb("+ac.join(",")+")",ra="rgba("+ac.join(",")+",",cx=W/2,cy=Hh/2,w=Math.min(.46*W,230),e=Math.pow(Math.sin(Math.PI*u),.8),t=now/1000,dir=rev?-1:1,j,s,z,a,sz;
 x.setTransform(dp,0,0,dp,0,0);x.clearRect(0,0,W,Hh);x.globalCompositeOperation="lighter";x.lineCap="round";
 /* circulo de runas no chao */
 x.save();x.translate(cx,cy+w*.76);x.scale(1,.26);x.strokeStyle=cs;x.shadowColor=cs;x.shadowBlur=q>=1?10:0;
 x.globalAlpha=.55*e;x.lineWidth=2.5;x.beginPath();x.arc(0,0,w*1.15,0,6.2832);x.stroke();
 x.setLineDash([w*.05,w*.07]);x.lineDashOffset=-t*30*dir;x.globalAlpha=.45*e;x.beginPath();x.arc(0,0,w*.92,0,6.2832);x.stroke();x.setLineDash([]);
 for(k=0;k<24;k++){a=k/24*6.2832+t*.4*dir;x.globalAlpha=.5*e*(k%3?.5:1);x.lineWidth=k%3?1.5:3;x.beginPath();x.moveTo(Math.cos(a)*w*1.2,Math.sin(a)*w*1.2);x.lineTo(Math.cos(a)*w*(k%3?1.28:1.36),Math.sin(a)*w*(k%3?1.28:1.36));x.stroke();}
 x.restore();x.globalAlpha=1;
 /* helice de particulas */
 var np=q>=2?64:q===1?40:20;
 for(i=0;i<np;i++){var P=PA[i];a=t*1.6*dir+P.p*18;var r=w*(.7+.3*Math.sin(P.p*9+t))*(.55+.9*e);z=Math.sin(a);sz=(11+8*z)*(w/230);
  x.globalAlpha=e*(.3+.45*(z+1)/2);x.drawImage(spr(i%5?cs:"rgb(255,255,255)",32),cx+Math.cos(a)*r-sz/2,cy+w*(.95-P.p*1.9)+z*r*.18-sz/2,sz,sz);}
 x.globalAlpha=1;
 /* folhas voando em 3D */
 var nf=q>=1?7:3;
 for(i=0;i<nf;i++){var F=FL[i],tf=(u*1.5+F.o)%1;if(rev)tf=1-tf;a=F.a+u*6*dir;var rr=w*(.2+1.1*tf),fl=Math.cos(u*13+F.o*6.28),al=e*Math.sin(Math.PI*tf)*.8;
  x.save();x.translate(cx+Math.cos(a)*rr,cy-w*.15-tf*w*1.1+Math.sin(a)*rr*.25);x.rotate(.5*Math.sin(u*5+F.o*7));x.scale(Math.max(.08,Math.abs(fl)),1);x.globalAlpha=al;x.fillStyle=ra+".22)";x.strokeStyle="rgba(235,255,245,.9)";x.lineWidth=1.2;x.shadowColor=cs;x.shadowBlur=q>=1?8:0;
  x.beginPath();x.rect(-w*.2,-w*.28,w*.4,w*.56);x.fill();x.stroke();x.globalAlpha=al*.7;x.strokeStyle=cs;x.beginPath();for(j=0;j<4;j++){x.moveTo(-w*.13,-w*.15+j*w*.1);x.lineTo(w*.13,-w*.15+j*w*.1);}x.stroke();x.restore();}
 x.globalAlpha=1;
 /* explosao de luz ao abrir */
 if(!burstOk&&u>=.36){burstOk=true;burstT=now;for(i=0;i<(q>=2?70:36);i++){a=Math.random()*6.2832;s=2+Math.random()*7;SK.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s-1.5,l:1,d:.5+Math.random()*.9});}}
 if(burstT){var ag=(now-burstT)/750;if(ag<1){var L=Math.max(W,Hh),f=1-ag;x.fillStyle=ra+(.22*f)+")";for(k=0;k<14;k++){a=k*.4488+.3+t*.1;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(a-.035)*L*ag*1.1,cy+Math.sin(a-.035)*L*ag*1.1);x.lineTo(cx+Math.cos(a+.035)*L*ag*1.1,cy+Math.sin(a+.035)*L*ag*1.1);x.fill();}
  x.strokeStyle="#fff";x.globalAlpha=f*.8;x.lineWidth=3*f+1;x.beginPath();x.arc(cx,cy,ag*L*.45,0,6.2832);x.stroke();x.globalAlpha=1;}else burstT=0;}
 for(i=SK.length-1;i>=0;i--){var p=SK[i];p.l-=.016/p.d;if(p.l<=0){SK.splice(i,1);continue;}p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.vx*=.985;x.globalAlpha=p.l;sz=10*p.l+3;x.drawImage(spr(i%3?cs:"rgb(255,255,255)",32),p.x-sz/2,p.y-sz/2,sz,sz);}
 x.globalAlpha=1;x.globalCompositeOperation="source-over";
}
}catch(e){if(window.console)console.warn("book3d",e);}})();
}catch(e){console.error("[mr-book3d]",e)}
/* mr-book3d-b */
try{
(function(){try{
var D=document,H=D.documentElement,dk=D.getElementById("dkh");if(!dk)return;
var mk=dk.querySelector(".mk"),stg=dk.querySelector(".stage"),cf=D.getElementById("dkcf");if(!mk||!stg)return;
var PT=["M17 26V16Q17 13.5 19.5 13.5H30M21 22V19Q21 17.5 22.5 17.5H26","M89 26V16Q89 13.5 86.5 13.5H76M85 22V19Q85 17.5 83.5 17.5H80","M17 114V124Q17 126.5 19.5 126.5H30M21 118V121Q21 122.5 22.5 122.5H26","M89 114V124Q89 126.5 86.5 126.5H76M85 118V121Q85 122.5 83.5 122.5H80","M28 92H49M57 92H78","M53 89.5L55.5 92L53 94.5L50.5 92Z"];
function fil(){if(!cf||cf.querySelector(".fil"))return;cf.insertAdjacentHTML("beforeend",'<svg class="fil" viewBox="0 0 100 140" aria-hidden="true">'+PT.map(function(d){return '<path pathLength="100" d="'+d+'"/>';}).join("")+'</svg>');}
fil();
var bc=D.createElement("canvas"),fc=D.createElement("canvas");bc.className=fc.className="bkfx";bc.setAttribute("aria-hidden","true");fc.setAttribute("aria-hidden","true");mk.insertBefore(bc,stg);mk.appendChild(fc);
var xb=bc.getContext("2d"),xf=fc.getContext("2d"),run=false,W=0,Hh=0,dp=1,ac=[47,211,107],SP={},RS=[],bT=0,bOk=false,CC=D.createElement("canvas"),i,k;CC.width=CC.height=1;
function off(){return H.classList.contains("noanim")||H.classList.contains("eco")||window.__eco||(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);}
function rgb(s){try{var c=CC.getContext("2d",{willReadFrequently:true});c.clearRect(0,0,1,1);c.fillStyle="#2fd36b";c.fillStyle=s;c.fillRect(0,0,1,1);var q=c.getImageData(0,0,1,1).data;return [q[0],q[1],q[2]];}catch(e){return [47,211,107];}}
function spr(c,sz){var kk=c+sz,s=SP[kk];if(!s){s=D.createElement("canvas");s.width=s.height=sz;var g=s.getContext("2d"),r=g.createRadialGradient(sz/2,sz/2,0,sz/2,sz/2,sz/2),a=c.replace("rgb(","rgba(");r.addColorStop(0,"#fff");r.addColorStop(.2,c);r.addColorStop(.5,a.replace(")",",.25)"));r.addColorStop(1,a.replace(")",",0)"));g.fillStyle=r;g.fillRect(0,0,sz,sz);SP[kk]=s;}return s;}
function mkRunes(cs){RS=[];var n,c,g,sd,m,y;for(n=0;n<8;n++){c=D.createElement("canvas");c.width=c.height=48;g=c.getContext("2d");g.strokeStyle="#fff";g.shadowColor=cs;g.shadowBlur=7;g.lineWidth=3;g.lineCap="round";sd=n*7.3+1;g.beginPath();g.moveTo(24,8);g.lineTo(24,40);for(m=0;m<3;m++){y=12+((sd*(m+2)*13)%22);var d=(((sd+m)*17)%2)?1:-1,l=7+((sd*(m+3))%7);g.moveTo(24,y);g.lineTo(24+d*l,y+((sd*5+m*3)%2?-8:8));}g.stroke();RS.push(c);}}
function start(){if(run)return;fil();ac=rgb((getComputedStyle(D.body).getPropertyValue("--ac")||"#2fd36b").trim()||"#2fd36b");mkRunes("rgb("+ac.join(",")+")");run=true;bOk=false;bT=0;requestAnimationFrame(loop);}
function stop(){run=false;xb.clearRect(0,0,bc.width,bc.height);xf.clearRect(0,0,fc.width,fc.height);}
new MutationObserver(function(){if(dk.classList.contains("go")&&!dk.classList.contains("skip")&&!off())start();else if(run)stop();}).observe(dk,{attributes:true,attributeFilter:["class"]});
function loop(now){
 if(!run)return;if(!dk.classList.contains("go")||dk.classList.contains("skip")){stop();return;}requestAnimationFrame(loop);
 var an=dk.getAnimations?dk.getAnimations({subtree:false})[0]:null,u=.5,rev=dk.classList.contains("rev");
 if(an&&an.effect){var dur=an.effect.getTiming().duration||1;u=Math.max(0,Math.min(1,(an.currentTime||0)/dur));}
 var w0=dk.clientWidth,h0=dk.clientHeight,q=window.__eco?0:(window.__q==null?2:window.__q);dp=q<=0?1:Math.min(2,devicePixelRatio||1);
 if(w0!==W||h0!==Hh||bc.width!==Math.round(w0*dp)){W=w0;Hh=h0;[bc,fc].forEach(function(c){c.width=Math.round(W*dp);c.height=Math.round(Hh*dp);});}
 var cs="rgb("+ac.join(",")+")",ra="rgba("+ac.join(",")+",",cx=W/2,cy=Hh/2,w=Math.min(.46*W,230),e=Math.pow(Math.sin(Math.PI*u),.8),t=now/1000,dir=rev?-1:1,a,z,sz;
 [xb,xf].forEach(function(x){x.setTransform(dp,0,0,dp,0,0);x.clearRect(0,0,W,Hh);x.globalCompositeOperation="lighter";x.lineCap="round";x.lineJoin="round";});
 /* cone de luz vindo de cima */
 var g=xb.createLinearGradient(0,0,0,cy+w*.8);g.addColorStop(0,ra+"0)");g.addColorStop(.6,ra+(.18*e)+")");g.addColorStop(1,ra+"0)");xb.fillStyle=g;xb.beginPath();xb.moveTo(cx-w*.12,0);xb.lineTo(cx+w*.12,0);xb.lineTo(cx+w*1.0,cy+w*.8);xb.lineTo(cx-w*1.0,cy+w*.8);xb.closePath();xb.fill();
 /* selo magico grande no chao */
 xb.save();xb.translate(cx,cy+w*.76);xb.scale(1,.26);xb.strokeStyle=cs;xb.shadowColor=cs;xb.shadowBlur=q>=1?10:0;xb.lineWidth=2;xb.globalAlpha=.5*e;xb.beginPath();xb.arc(0,0,w*1.55,0,6.2832);xb.stroke();
 for(k=0;k<2;k++){var ds=k?-1:1;xb.globalAlpha=.55*e;xb.beginPath();for(i=0;i<=3;i++){a=t*.3*ds*dir+i*2.0944+k*1.0472;i?xb.lineTo(Math.cos(a)*w*1.5,Math.sin(a)*w*1.5):xb.moveTo(Math.cos(a)*w*1.5,Math.sin(a)*w*1.5);}xb.stroke();}
 xb.restore();xb.globalAlpha=1;
 /* runas orbitando o livro (atras e na frente) */
 var R=w*1.35,nr=q>=1?10:6;
 for(i=0;i<nr;i++){a=t*.55*dir+i*(6.2832/nr);z=Math.sin(a);sz=(30+12*z)*(w/230);var X=cx+Math.cos(a)*R,Y=cy+w*.1+z*R*.3,cx2=z<0?xb:xf;cx2.globalAlpha=e*(.4+.5*(z+1)/2);cx2.drawImage(RS[i%8],X-sz/2,Y-sz/2,sz,sz);cx2.globalAlpha=e*.25;cx2.drawImage(spr(cs,64),X-sz,Y-sz,sz*2,sz*2);}
 /* flare anamorfico ao abrir */
 if(!bOk&&u>=.36){bOk=true;bT=now;}
 if(bT){var ag=(now-bT)/650;if(ag<1){var f=1-ag;xf.save();xf.translate(cx,cy);xf.globalAlpha=f*.9;xf.scale(1,.05);xf.drawImage(spr("rgb(255,255,255)",128),-W*.75,-W*.75,W*1.5,W*1.5);xf.restore();xf.save();xf.translate(cx,cy);xf.globalAlpha=f*.5;xf.scale(.04,1);xf.drawImage(spr(cs,128),-Hh*.6,-Hh*.6,Hh*1.2,Hh*1.2);xf.restore();}else bT=0;}
 [xb,xf].forEach(function(x){x.globalAlpha=1;x.globalCompositeOperation="source-over";});
}
}catch(e){if(window.console)console.warn("book3d-b",e);}})();
}catch(e){console.error("[mr-book3d-b]",e)}
/* mr-hb-js */
try{
(function(){var b=document.getElementById("hb");if(!b||b.querySelector(".hbi"))return;b.innerHTML='<span class="hbi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg></span><span class="hbt">Tela de início</span>';})();
}catch(e){console.error("[mr-hb-js]",e)}
/* mr-unify-js */
try{
(function(){
var EM=/^\s*(\p{Extended_Pictographic}️?(?:‍\p{Extended_Pictographic}️?)*)\s*/u;
var CH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
var SEL='main summary,#cont,.again,main .mini,main .vib button,#nw,#nm',n=0;
function ok(el){return !el.closest("#list")&&el.id!=="hb"&&!el.closest("header.ph");}
function proc(el){
  if(el.classList.contains("hbp")&&el.querySelector(":scope>.hbt"))return;
  var kids=[].slice.call(el.childNodes),i=0,f=kids[0],icon=null,rest;
  while(f&&f.nodeType===3&&!f.nodeValue.trim()){f=kids[++i];}
  if(f&&f.nodeType===1&&(f.classList.contains("qi")||(f.tagName&&f.tagName.toLowerCase()==="svg"&&f.classList.contains("ic")))){icon=document.createElement("span");icon.className="hbi";icon.appendChild(f);rest=kids.slice(i+1);}
  else if(f&&f.nodeType===3){var m=EM.exec(f.nodeValue);if(m){icon=document.createElement("span");icon.className="hbi";icon.textContent=m[1];f.nodeValue=f.nodeValue.slice(m[0].length);}rest=kids.slice(i);}
  else rest=kids.slice(i);
  var t=document.createElement("span");t.className="hbt";
  rest.forEach(function(x){t.appendChild(x);});
  el.textContent="";
  if(icon)el.appendChild(icon);el.appendChild(t);
  if(el.tagName==="SUMMARY"){var c=document.createElement("span");c.className="hbc";c.setAttribute("aria-hidden","true");c.innerHTML=CH;el.appendChild(c);}
  el.classList.add("hbp");el.classList.toggle("noi",!icon);
  if(el.tagName==="SUMMARY"){var d=el.parentNode,p=d&&d.parentNode&&d.parentNode.closest&&d.parentNode.closest("details");el.classList.toggle("sm",!!p||d.classList.contains("mm"));}
  else if(el.matches(".vib button,#nw,#nm"))el.classList.add("sm");
  if(el.id==="cont"||el.id==="nw"||el.classList.contains("again"))el.classList.add("pri");
  el.style.setProperty("--d",((n++%7)*.7).toFixed(1)+"s");
}
function run(){try{[].forEach.call(document.querySelectorAll(SEL),function(e){if(ok(e))proc(e);});}catch(e){}}
var tm=0;function sch(){clearTimeout(tm);tm=setTimeout(run,260);}
new MutationObserver(sch).observe(document.body,{childList:true,subtree:true,characterData:true});
setTimeout(run,450);setTimeout(run,1500);
})();

}catch(e){console.error("[mr-unify-js]",e)}
/* mr-robot2-js */
try{
(function(){
/* Os olhos e a cabeça seguem o dedo/mouse com suavidade */
var d=document.querySelector("body>.dm")||document.querySelector(".dm");if(!d)return;
var tx=0,ty=0,cx=0,cy=0,raf=0,idle=0,last=0;
function off(){var c=document.documentElement.classList;return c.contains("noanim")||c.contains("eco")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches)||d.classList.contains("sleep");}
function aim(x,y){var r=d.getBoundingClientRect(),dx=x-(r.left+r.width/2),dy=y-(r.top+r.height*.4),k=Math.max(1,Math.hypot(dx,dy)/160);tx=Math.max(-1,Math.min(1,dx/160/k*Math.min(k,1.8)));ty=Math.max(-1,Math.min(1,dy/160/k*Math.min(k,1.8)));last=performance.now();kick();}
function frame(){raf=0;var s=off();if(s){tx=ty=0;}
 var n=performance.now();if(n-last>2600){tx=ty=0;}
 cx+=(tx-cx)*.14;cy+=(ty-cy)*.14;
 d.style.setProperty("--lx",cx.toFixed(3));d.style.setProperty("--ly",cy.toFixed(3));
 if(Math.abs(tx-cx)>.004||Math.abs(ty-cy)>.004)raf=requestAnimationFrame(frame);}
function kick(){if(!raf)raf=requestAnimationFrame(frame);}
window.addEventListener("pointermove",function(e){if(off())return;aim(e.clientX,e.clientY);},{passive:true});
window.addEventListener("pointerdown",function(e){if(off())return;aim(e.clientX,e.clientY);},{passive:true});
/* de vez em quando, dá uma olhadela curiosa para os lados */
function glance(){if(!off()&&performance.now()-last>4000){var a=(Math.random()<.5?-1:1);tx=a*(.5+Math.random()*.5);ty=(Math.random()-.5)*.8;last=performance.now()-1800;kick();setTimeout(function(){tx=-a*.4;kick();},700);}
 setTimeout(glance,6000+Math.random()*7000);}
setTimeout(glance,5000);
})();

}catch(e){console.error("[mr-robot2-js]",e)}
/* mr-robot3-js */
try{
(function(){
/* Braços articulados: cinemática de 2 ossos, o cotovelo reage ao movimento das mãos */
var d=document.querySelector("body>.dm")||document.querySelector(".dm"),rb=d&&d.querySelector(".rb"),rt=rb&&rb.querySelector(".rt"),h1=rb&&rb.querySelector(".rh1"),h2=rb&&rb.querySelector(".rh2");
if(!rb||!rt||!h1||!h2||rb.querySelector(".rarm"))return;
function seg(c){var s=document.createElement("u");s.className="rseg "+c;s.innerHTML="<i></i><i></i><i></i>";return s;}
function arm(side){var a=document.createElement("div");a.className="rarm "+side;var u=seg("ua"),f=seg("fa"),e=document.createElement("u");e.className="rel";a.appendChild(u);a.appendChild(f);a.appendChild(e);rb.insertBefore(a,h1);return {u:u,f:f,e:e,side:side==="l"?-1:1,k:""};}
var A=[arm("l"),arm("r")];
["l","r"].forEach(function(s){var v=document.createElement("u");v.className="rvt "+s;rt.appendChild(v);});
var nz=document.createElement("u");nz.className="rnz";rb.appendChild(nz);
function hp(h){var t=getComputedStyle(h).translate,x=0,y=0;if(t&&t!=="none"){t=t.split(" ");x=parseFloat(t[0])||0;y=parseFloat(t[1])||0;}return [h.offsetLeft+h.offsetWidth/2+x,h.offsetTop+h.offsetHeight/2+y];}
function put(el,x,y,len,ang){el.style.transform="translate("+x.toFixed(2)+"px,"+y.toFixed(2)+"px) rotate("+ang.toFixed(2)+"deg)";el.style.height=len.toFixed(2)+"px";}
function upd(a,S,H){
 var dx=H[0]-S[0],dy=H[1]-S[1],dist=Math.hypot(dx,dy)||1,L=Math.max(9.5,dist/2*1.03),hh=Math.sqrt(Math.max(0,L*L-dist*dist/4)),nx=-dy/dist,ny=dx/dist;
 if(nx*a.side*.6+ny*.8<0){nx=-nx;ny=-ny;}
 var E=[S[0]+dx/2+nx*hh,S[1]+dy/2+ny*hh],ux=E[0]-S[0],uy=E[1]-S[1],fx=H[0]-E[0],fy=H[1]-E[1];
 var k=[S[0].toFixed(1),H[0].toFixed(1),H[1].toFixed(1),S[1].toFixed(1)].join();if(k===a.k)return;a.k=k;
 put(a.u,S[0],S[1],Math.hypot(ux,uy)+1,Math.atan2(-ux,uy)*180/Math.PI);
 put(a.f,E[0],E[1],Math.hypot(fx,fy)+3,Math.atan2(-fx,fy)*180/Math.PI);
 a.e.style.transform="translate("+E[0].toFixed(2)+"px,"+E[1].toFixed(2)+"px)";
}
function step(){
 var l=rt.offsetLeft,t=rt.offsetTop,w=rt.offsetWidth;
 upd(A[0],[l-1,t+8],hp(h1));upd(A[1],[l+w+1,t+8],hp(h2));
}
var raf=0,iv=0;
function loop(){raf=0;if(document.hidden)return;try{step();}catch(e){}raf=requestAnimationFrame(loop);}
function calm(){var c=document.documentElement.classList;return c.contains("eco")||c.contains("noanim")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches);}
function go(){if(raf||iv)return;if(calm()){iv=setInterval(function(){try{step();}catch(e){}},250);step();}else raf=requestAnimationFrame(loop);}
document.addEventListener("visibilitychange",function(){if(!document.hidden){if(iv){clearInterval(iv);iv=0;}go();}});
step();go();
})();

}catch(e){console.error("[mr-robot3-js]",e)}
/* mr-mp-js */
try{
(function(){
var O=window.mrOst;if(!O)return;
function ic(p){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+p+'</svg>';}
var I={prev:ic('<path d="M6 5h2v14H6zM20 5v14L9.5 12z"/>'),next:ic('<path d="M16 5h2v14h-2zM4 5v14l10.5-7z"/>'),play:ic('<path d="M7 4.5v15l13-7.5z"/>'),pause:ic('<path d="M6 4h4.5v16H6zM13.5 4H18v16h-4.5z"/>'),vol:ic('<path d="M4 9.5v5h3.5l5 4v-13l-5 4zM15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 9.5v5h3.5l5 4v-13l-5 4z"/>'),mute:ic('<path d="M4 9.5v5h3.5l5 4v-13l-5 4z"/><path d="M16 9.5l5 5m0-5l-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>')};
var h=document.createElement("div");h.id="mp";h.className="mp";h.hidden=true;h.setAttribute("role","region");h.setAttribute("aria-label","Player de música");
h.innerHTML='<div class="mp-prog" id="mpprog" aria-hidden="true"><i></i></div>'
+'<div class="mp-row"><button type="button" class="mp-art" id="mpx" aria-label="Abrir controles do player" aria-expanded="false"><span class="mp-eq"><b></b><b></b><b></b><b></b></span></button>'
+'<button type="button" class="mp-meta" id="mpm" aria-label="Abrir controles do player"><strong id="mpt"></strong><small id="mpa"></small></button>'
+'<button type="button" class="mp-b" id="mpv" aria-label="Faixa anterior">'+I.prev+'</button>'
+'<button type="button" class="mp-b mp-play" id="mpp" aria-label="Tocar ou pausar"><span class="i-play">'+I.play+'</span><span class="i-pause">'+I.pause+'</span></button>'
+'<button type="button" class="mp-b" id="mpn" aria-label="Próxima faixa">'+I.next+'</button></div>'
+'<div class="mp-more"><div class="mp-mi">'
+'<div class="mp-seek"><span id="mpc">0:00</span><input type="range" id="mps" min="0" max="1000" value="0" aria-label="Posição da música"><span id="mpd">0:00</span></div>'
+'<div class="mp-vol"><button type="button" class="mp-b" id="mpmu" aria-label="Silenciar"></button><input type="range" id="mpvol" min="0" max="100" value="60" aria-label="Volume"></div>'
+'<button type="button" class="mp-auto" id="mpau" aria-pressed="false">🔁 Alternar músicas automaticamente<span class="sw"></span></button>'
+'<div class="mp-list" id="mpl"></div>'
+'<button type="button" class="mp-close" id="mpcl">Fechar player</button></div></div>';
document.body.appendChild(h);
function $(i){return document.getElementById(i);}
var root=document.documentElement,lastVol=60,drag=false,iv=0,tr=[],dis=false;
var L=$("mpl");O.tracks.forEach(function(t,i){var b=document.createElement("button");b.type="button";b.innerHTML='<b>'+(i+1)+'</b><span></span><small></small>';b.children[1].textContent=t.t;b.children[2].textContent=t.a;b.addEventListener("click",function(){O.goto(i);if(!O.playing)O.toggle();});L.appendChild(b);tr.push(b);});
function fm(s){s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+":"+("0"+(s%60)).slice(-2);}
function rng(el){var p=(+el.value-+el.min)/((+el.max)-(+el.min))*100;el.style.setProperty("--v",p+"%");}
function show(){if(!h.hidden)return;h.hidden=false;h.classList.add("in");root.classList.add("mp-on");setTimeout(function(){h.classList.remove("in");},500);}
function hide(){h.hidden=true;h.classList.remove("open");$("mpx").setAttribute("aria-expanded","false");root.classList.remove("mp-on");}
function prog(){if(h.hidden)return;var p=O.pos(),f=p.d?p.t/p.d:0;h.querySelector(".mp-prog i").style.width=(f*100).toFixed(2)+"%";if(!drag){$("mps").value=Math.round(f*1000);rng($("mps"));}$("mpc").textContent=fm(p.t);$("mpd").textContent=fm(p.d);}
function upd(){var t=O.tracks[O.cur];$("mpt").textContent=t.t;$("mpa").textContent=t.a;h.classList.toggle("on",O.playing);$("mpp").setAttribute("aria-label",O.playing?"Pausar":"Tocar");
tr.forEach(function(b,i){b.classList.toggle("cur",i===O.cur);});
var vv=O.vol();$("mpvol").value=vv;rng($("mpvol"));$("mpmu").innerHTML=vv?I.vol:I.mute;$("mpmu").setAttribute("aria-label",vv?"Silenciar":"Reativar o som");if(vv)lastVol=vv;
$("mpau").setAttribute("aria-pressed",O.auto?"true":"false");
if(O.playing)dis=false;if(O.played&&!dis)show();
clearInterval(iv);iv=0;if(O.playing&&!h.hidden)iv=setInterval(prog,300);prog();}
window.addEventListener("mrost",upd);
$("mpp").addEventListener("click",O.toggle);$("mpn").addEventListener("click",O.next);$("mpv").addEventListener("click",O.prev);
function tog(){var o=!h.classList.contains("open");h.classList.toggle("open",o);$("mpx").setAttribute("aria-expanded",o?"true":"false");}
$("mpx").addEventListener("click",tog);$("mpm").addEventListener("click",tog);
$("mpcl").addEventListener("click",function(){dis=true;O.pause();hide();});
$("mpprog").addEventListener("click",function(e){var r=this.getBoundingClientRect();O.seek((e.clientX-r.left)/r.width);prog();});
var S=$("mps");S.addEventListener("input",function(){drag=true;rng(S);var p=O.pos();$("mpc").textContent=fm(S.value/1000*p.d);});
S.addEventListener("change",function(){O.seek(S.value/1000);drag=false;prog();});
$("mpvol").addEventListener("input",function(){O.vol(+this.value);});
$("mpmu").addEventListener("click",function(){O.vol(O.vol()?0:(lastVol||60));});
$("mpau").addEventListener("click",O.setAuto);
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&h.classList.contains("open"))tog();});
upd();
})();

}catch(e){console.error("[mr-mp-js]",e)}
/* mr-perf-js */
try{
(function(){
function ls(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function ask(){if(document.getElementById("ecoask"))return;try{localStorage.setItem("maratona-eco-ask","1");}catch(e){}
var d=document.createElement("div");d.id="ecoask";d.className="ecoask";d.setAttribute("role","alertdialog");d.setAttribute("aria-label","Modo Economia");
d.innerHTML='<strong>Está pesado por aí?</strong><br>Este aparelho parece estar com dificuldade para rodar as animações 3D. O modo Economia deixa o app mais leve e rápido.<div><button type="button" class="no">Agora não</button><button type="button" class="go">Ativar Economia</button></div>';
document.body.appendChild(d);
d.querySelector(".no").addEventListener("click",function(){d.remove();});
d.querySelector(".go").addEventListener("click",function(){try{localStorage.setItem("maratona-eco","1");}catch(e){}location.reload();});
setTimeout(function(){if(d.parentNode)d.remove();},20000);}
window.__mrEcoAsk=ask;
var c=document.documentElement.classList;
if(window.__eco||ls("maratona-eco")!==null||ls("maratona-eco-ask")||c.contains("noanim")||navigator.webdriver)return;
var ds=[],last=0,t0=0,done=false;
function tick(n){if(done)return;if(document.hidden){last=0;t0=0;ds=[];requestAnimationFrame(tick);return;}
if(last)ds.push(n-last);last=n;if(!t0)t0=n;
if(n-t0<6000){requestAnimationFrame(tick);return;}
done=true;ds.sort(function(a,b){return a-b;});var med=ds[ds.length>>1];if(ds.length>50&&med>42)ask();}
setTimeout(function(){requestAnimationFrame(tick);},9000);
})();

}catch(e){console.error("[mr-perf-js]",e)}
/* mr-robot4-js */
try{
(function(){
var d=document.querySelector("body>.dm")||document.querySelector(".dm");if(!d)return;
var root=document.documentElement;
function calm(){var c=root.classList;return c.contains("noanim")||c.contains("eco")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches);}
function say(t,ms){if(window.MR_SAY)window.MR_SAY(t,ms);}
/* 1) No ritmo da música (andamento medido em cada faixa; "k" = força do pulso) */
var BT=[{b:64.9,o:.070,k:.55},null,{b:111.66,o:.453,k:1},{b:98,o:.337,k:1},{b:99,o:.313,k:1},{b:79.5,o:.093,k:1}],raf=0;
function playing(){var O=window.mrOst;return !!(O&&O.playing&&!document.hidden&&!calm()&&!d.classList.contains("sleep"));}
function loop(){raf=0;var O=window.mrOst;
 if(!playing()){d.classList.remove("beat");d.style.removeProperty("--bt");return;}
 d.classList.add("beat");var p=O.pos(),t=BT[O.cur],v=0;
 if(t&&p.d){var ph=(((p.t-t.o)*t.b/60)%1+1)%1;v=Math.pow(1-ph,3)*t.k;}
 else if(p.d){v=.22+.2*Math.sin(p.t*Math.PI/2);}
 d.style.setProperty("--bt",v.toFixed(3));raf=requestAnimationFrame(loop);}
function kick(){if(!raf)raf=requestAnimationFrame(loop);}
window.addEventListener("mrost",kick);document.addEventListener("visibilitychange",kick);
/* 2) Comemora quando uma saga fica completa */
var ready=false,done=[];setTimeout(function(){ready=true;scan(true);},3500);
function scan(init){var gh=document.querySelectorAll("#list li.gh"),nw=[],all=gh.length>0;
 [].forEach.call(gh,function(g,i){var c=g.querySelector(".gc"),ok=!!c&&/✓/.test(c.textContent);if(!ok)all=false;if(ok&&done[i]===false&&!init){var n=g.querySelector(".gn");nw.push((n&&n.textContent||"").trim());}done[i]=ok;});
 if(!init&&nw.length)cel(nw,all);}
function star(){if(calm())return;var n=document.createElement("span");n.className="mxs";n.textContent=["★","✦","✧"][Math.floor(Math.random()*3)];n.style.setProperty("--nx",(4+Math.random()*70)+"px");n.style.setProperty("--nd",(Math.random()*50-25)+"px");n.style.setProperty("--nr",(Math.random()*60-30)+"deg");d.appendChild(n);setTimeout(function(){if(n.parentNode)n.parentNode.removeChild(n);},1900);}
function cel(names,all){var c=d.classList;if(c.contains("sleep"))c.remove("sleep");
 if(!calm()){c.remove("pz","rcel");void d.offsetWidth;c.add("rcel");for(var i=0;i<9;i++)setTimeout(star,i*210);setTimeout(function(){c.remove("rcel");},2200);}
 if(!all)setTimeout(function(){say(names.length>1?"🏆 "+names.length+" sagas completas de uma vez!":"🏆 Saga completa: "+names[0]+"!",3200);},500);}
try{var ul=document.getElementById("list"),t=0;if(ul)new MutationObserver(function(){clearTimeout(t);t=setTimeout(function(){if(ready)scan(false);},120);}).observe(ul,{childList:true,characterData:true,subtree:true});}catch(e){}
/* 3) Madrugada: o robô fica sonolento e boceja */
var told=false;
function night(){var h=new Date().getHours(),n=h>=23||h<5,c=d.classList;c.toggle("rnight",n);
 if(n&&!told&&!calm()){told=true;setTimeout(function(){c.add("ryawn");say("🥱 Já é tarde… que tal dormir e continuar amanhã?",3600);setTimeout(function(){c.remove("ryawn");},2600);},7000);}}
night();setInterval(night,60000);
window.__mrRobot={cel:cel,night:night,scan:scan,done:done};
})();

}catch(e){console.error("[mr-robot4-js]",e)}
/* mr-poster2-js */
try{
(function(){var w=document.getElementById("x3wall");if(!w)return;
function idx(){var k=w.children,i;for(i=0;i<k.length;i++)if(k[i].style&&k[i].style.getPropertyValue("--i")!==String(Math.min(i,40)))k[i].style.setProperty("--i",Math.min(i,40));}
try{new MutationObserver(function(){idx();}).observe(w,{childList:true});}catch(e){}idx();})();

}catch(e){console.error("[mr-poster2-js]",e)}
/* mr-fin7-js */
try{
(function(){function fix(){var b=document.getElementById('vt');if(!b||b.querySelector('.hbi'))return;var t=b.querySelector('.hbt');if(!t)return;t.textContent=t.textContent.replace(/\s*📳\s*/,'').trim();var i=document.createElement('span');i.className='hbi';i.textContent='📳';b.classList.remove('noi');b.insertBefore(i,b.firstChild)}
fix();new MutationObserver(fix).observe(document.body,{childList:true,subtree:true});})();

}catch(e){console.error("[mr-fin7-js]",e)}
/* mr-bk2-js */
try{
(function(){
var $=function(i){return document.getElementById(i);};
var PFX="maratona-",SNAP="maratona-bk-snaps",LAST="maratona-bk-ultimo",FLASH="maratona-bk-flash";
var SKIP={"maratona-eco":1,"maratona-eco-ask":1,"maratona-anim":1,"maratona-gl":1,"maratona-pre-migr":1,"maratona-undo":1,"maratona-bk-ultimo":1,"maratona-bk-auto":1,"maratona-bk-snaps":1,"maratona-bk-flash":1,"maratona-schema":1};
var host=$("bs");if(!host||!$("bd"))return;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function tst(m){var o=$("toast");if(!o)return;o.textContent=m;o.className="show";setTimeout(function(){o.className="";},3200);}
function keys(){var r=[],i,k;try{for(i=0;i<localStorage.length;i++){k=localStorage.key(i);if(k&&k.indexOf(PFX)===0&&!SKIP[k])r.push(k);}}catch(e){}return r.sort();}
function collect(){var d={};keys().forEach(function(k){try{d[k]=localStorage.getItem(k);}catch(e){}});return d;}
function hash(s){var h1=0xdeadbeef,h2=0x41c6ce57,i,c;for(i=0;i<s.length;i++){c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677);}h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return(4294967296*(2097151&h2)+(h1>>>0)).toString(36);}
function pj(s){try{return JSON.parse(s);}catch(e){return null;}}
function cnt(o){var n=0,k;if(o&&typeof o==="object")for(k in o)if(o[k])n++;return n;}
function summ(d){var s=pj(d["maratona-marvel"]),nt=pj(d["maratona-notas"]),fv=pj(d["maratona-fav"]),tx=pj(d["maratona-notas-txt"]),q=parseInt(d["maratona-quiz"]||"0",10)||0,cq=pj(d["maratona-conq"]);return{seen:cnt(s),rate:cnt(nt),fav:cnt(fv),txt:cnt(tx),quiz:q,ach:cnt(cq)};}
function line(m){return m.seen+" filmes vistos · "+m.rate+" notas · "+m.fav+" favoritos · "+m.txt+" anotações · "+m.quiz+" pts no quiz";}
function fmt(t){try{return new Date(t).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"});}catch(e){return String(t);}}
function pack(){var d=collect();var p=JSON.stringify(d);return JSON.stringify({v:2,app:"maratona-marvel",at:new Date().toISOString(),n:Object.keys(d).length,sum:summ(d),ck:hash(p),data:d});}
function parse(txt){var o;try{o=JSON.parse(txt);}catch(e){return{err:"Texto não reconhecido. Cole o código completo."};}
if(!o||typeof o!=="object")return{err:"Texto não reconhecido."};
if(o.v===2){if(!o.data||typeof o.data!=="object")return{err:"Backup incompleto."};
var okk=hash(JSON.stringify(o.data))===o.ck;return{v2:o,ok:okk};}
return{v1:o};}
/* snapshots */
function snaps(){var a=pj((function(){try{return localStorage.getItem(SNAP);}catch(e){return null;}})());return Array.isArray(a)?a:[];}
function putSnaps(a){var i;for(i=0;i<8;i++){try{localStorage.setItem(SNAP,JSON.stringify(a));return true;}catch(e){var ix=-1,k;for(k=0;k<a.length;k++)if(a[k].why==="auto"){ix=k;break;}if(ix<0)ix=0;if(a.length<=1)return false;a.splice(ix,1);}}return false;}
function snap(why){var d=collect(),a=snaps(),p=JSON.stringify(d),s=summ(d);if(!Object.keys(d).length)return;if(a.length&&a[a.length-1].h===hash(p)&&why==="auto")return;
a.push({t:Date.now(),why:why,h:hash(p),sum:s,data:d});var au=a.filter(function(x){return x.why==="auto";});while(au.length>5){a.splice(a.indexOf(au.shift()),1);}while(a.length>8)a.shift();putSnaps(a);paintSnaps();}
var lastAuto=0;
function tick(force){var now=Date.now();if(!force&&now-lastAuto<6e5)return;var d=collect();if(!summ(d).seen&&!summ(d).rate)return;lastAuto=now;snap("auto");}
setTimeout(function(){tick(true);},4000);setInterval(function(){tick(false);},6e4);
document.addEventListener("visibilitychange",function(){if(document.hidden)tick(false);});
/* aplicar */
function apply(d,mode){snap("antes de restaurar");var cur=keys(),k;
if(mode==="merge"){var base=collect();Object.keys(d).forEach(function(k){if(SKIP[k])return;var a=base[k],b=d[k],A,B,m;if(a==null){set(k,b);return;}if(a===b)return;A=pj(a);B=pj(b);
if(A&&B&&typeof A==="object"&&typeof B==="object"){if(Array.isArray(A)&&Array.isArray(B)){m=A.slice();B.forEach(function(x){if(JSON.stringify(m).indexOf(JSON.stringify(x))<0)m.push(x);});}else if(!Array.isArray(A)&&!Array.isArray(B)){m={};Object.keys(B).forEach(function(x){m[x]=B[x];});Object.keys(A).forEach(function(x){if(A[x]||!(x in m))m[x]=A[x];});}else return;set(k,JSON.stringify(m));}
else if(/^\d+$/.test(a)&&/^\d+$/.test(b)){set(k,String(Math.max(+a,+b)));}});}
else{cur.forEach(function(k){if(!(k in d))try{localStorage.removeItem(k);}catch(e){}});Object.keys(d).forEach(function(k){if(!SKIP[k])set(k,d[k]);});}
set(FLASH,mode==="merge"?"Backup mesclado ✅":"Backup restaurado ✅");location.reload();}
function set(k,v){try{localStorage.setItem(k,v);}catch(e){}}
/* UI */
var box=document.createElement("div");box.id="bk2";
box.innerHTML='<p class="b2s" id="b2st"></p><div class="b2r"><button type="button" id="b2sh">📤 Compartilhar</button><button type="button" id="b2vs">🕘 Versões salvas</button></div><div id="b2pv" hidden></div><div class="b2l" id="b2ls" hidden></div>';
host.parentNode.appendChild(box);
function lastTxt(){var t=0;try{t=parseInt(localStorage.getItem(LAST)||"0",10)||0;}catch(e){}return t?"Último backup: <b>"+fmt(t)+"</b>":"Você ainda <b>não baixou</b> nenhum backup.";}
var persisted=null;
function paintStatus(){var a=snaps();$("b2st").innerHTML=lastTxt()+"<br>Cópias automáticas neste aparelho: <b>"+a.length+"</b>"+(persisted===true?" · 🔒 armazenamento protegido":persisted===false?" · ⚠️ o navegador pode apagar os dados se faltar espaço; baixe um arquivo":"")+"<br><small>O backup inclui progresso, notas, favoritos, anotações, quiz, conquistas, missões e preferências.</small>";}
try{if(navigator.storage&&navigator.storage.persisted){navigator.storage.persisted().then(function(p){if(p){persisted=true;paintStatus();}else if(navigator.storage.persist){navigator.storage.persist().then(function(g){persisted=!!g;paintStatus();});}});}}catch(e){}
function paintSnaps(){paintStatus();var l=$("b2ls");if(!l||l.hidden)return;var a=snaps().slice().reverse();l.innerHTML=a.length?a.map(function(x,i){return'<div class="b2i"><div><b>'+fmt(x.t)+'</b> · '+(x.why==="auto"?"automática":esc(x.why))+'<small>'+line(x.sum)+'</small></div><button type="button" data-i="'+(a.length-1-i)+'">Ver</button></div>';}).join(""):'<p class="b2s">Ainda não há cópias. Elas são criadas sozinhas quando você usa o app.</p>';}
$("b2vs").onclick=function(){var l=$("b2ls");l.hidden=!l.hidden;paintSnaps();};
$("b2ls").onclick=function(e){var b=e.target.closest("button[data-i]");if(!b)return;var x=snaps()[+b.dataset.i];if(x)preview({v:2,data:x.data,at:new Date(x.t).toISOString(),sum:x.sum},true,"Cópia de "+fmt(x.t));};
function preview(o,ok,title){var cur=summ(collect()),m=o.sum||summ(o.data),pv=$("b2pv");
var rows=[["Filmes vistos",cur.seen,m.seen],["Notas",cur.rate,m.rate],["Favoritos",cur.fav,m.fav],["Anotações",cur.txt,m.txt],["Pontos no quiz",cur.quiz,m.quiz],["Conquistas",cur.ach,m.ach]];
pv.className="b2pv";pv.hidden=false;
pv.innerHTML='<h4>'+esc(title||"Backup de "+fmt(o.at))+'</h4><div class="b2cmp"><span></span><span>Agora</span><span>Backup</span>'+rows.map(function(r){return"<span>"+r[0]+"</span><span>"+r[1]+"</span><span>"+r[2]+"</span>";}).join("")+'</div>'+(ok?'':'<div class="b2warn">⚠️ Este arquivo parece alterado ou corrompido (verificação falhou). Restaure só se confiar nele.</div>')+'<div class="b2r"><button type="button" class="b2p" data-m="replace">Substituir tudo</button><button type="button" data-m="merge">Mesclar (manter o melhor dos dois)</button><button type="button" class="b2d" data-m="no">Cancelar</button></div><small>Uma cópia do seu progresso atual é guardada antes de qualquer mudança. Dá para voltar em “Versões salvas”.</small>';
pv.onclick=function(e){var b=e.target.closest("button[data-m]");if(!b)return;if(b.dataset.m==="no"){pv.hidden=true;return;}apply(o.data,b.dataset.m);};
pv.scrollIntoView&&pv.scrollIntoView({block:"nearest",behavior:"smooth"});}
/* interceptar botões */
function done(msg){try{localStorage.setItem(LAST,String(Date.now()));}catch(e){}var s=$("bks");if(s)s.textContent="💾 Backup do progresso";var h=$("hbk");if(h)h.hidden=true;$("bs").textContent=msg;paintStatus();}
function name(){var d=new Date(),p=function(n){return("0"+n).slice(-2);};return"maratona-marvel-"+d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate())+"-"+p(d.getHours())+p(d.getMinutes())+".json";}
function file(){var s=pack();return{s:s,n:name(),b:new Blob([s],{type:"application/json"})};}
document.addEventListener("click",function(e){var t=e.target.closest&&e.target.closest("#bg,#bd,#br,#bc,#b2sh");if(!t)return;
if(t.id==="bg"){e.stopImmediatePropagation();e.preventDefault();var s=pack();$("bk").value=s;$("bk").select();done("Código gerado. Copie e guarde em um lugar seguro.");}
else if(t.id==="bd"){e.stopImmediatePropagation();e.preventDefault();var f=file();$("bk").value=f.s;try{var a=document.createElement("a");a.href=URL.createObjectURL(f.b);a.download=f.n;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},800);done("Arquivo "+f.n+" baixado. Guarde em um lugar seguro (Drive, e-mail, WhatsApp).");}catch(x){$("bs").textContent="Não deu para baixar aqui. O código foi gerado acima: copie e guarde.";}}
else if(t.id==="bc"){if(!$("bk").value.trim()||!/"v":2/.test($("bk").value.slice(0,40))&&!$("bk").value.trim())$("bk").value=pack();}
else if(t.id==="b2sh"){e.preventDefault();var g=file(),F;try{F=new File([g.b],g.n,{type:"application/json"});}catch(x){F=null;}
if(F&&navigator.canShare&&navigator.canShare({files:[F]})){navigator.share({files:[F],title:"Backup Maratona Marvel"}).then(function(){done("Backup compartilhado ✅");}).catch(function(){});}
else if(navigator.share){navigator.share({title:"Backup Maratona Marvel",text:g.s}).then(function(){done("Backup compartilhado ✅");}).catch(function(){});}
else{$("bd").click();}}
else if(t.id==="br"){var p=parse($("bk").value);if(p.err){e.stopImmediatePropagation();e.preventDefault();$("bs").textContent=p.err;return;}
if(p.v2){e.stopImmediatePropagation();e.preventDefault();preview(p.v2,p.ok);$("bs").textContent="Confira o resumo abaixo e escolha como restaurar.";}
else{snap("antes de restaurar (código antigo)");}}
},true);
/* arrastar e soltar */
var pl=host.parentNode;["dragover","dragenter"].forEach(function(ev){pl.addEventListener(ev,function(e){e.preventDefault();box.classList.add("drag");});});
["dragleave","drop"].forEach(function(ev){pl.addEventListener(ev,function(){box.classList.remove("drag");});});
pl.addEventListener("drop",function(e){e.preventDefault();var f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(!f)return;var r=new FileReader();r.onload=function(){$("bk").value=String(r.result);$("br").click();};r.readAsText(f);});
/* aviso pós-restauração */
try{var fl=localStorage.getItem(FLASH);if(fl){localStorage.removeItem(FLASH);setTimeout(function(){tst(fl+" · desfazer em Backup > Versões salvas");},900);}}catch(e){}
paintStatus();
window.mrBackup={pack:pack,collect:collect,snap:snap,snaps:snaps,parse:parse,apply:apply,summ:summ};
})();

}catch(e){console.error("[mr-bk2-js]",e)}
/* mr-hq-js */
try{
(function(){var L=document.getElementById("list");if(!L||!window.mrPosterByTitle)return;
var q=[],busy=0,ric=window.requestIdleCallback||function(f){return setTimeout(function(){f({timeRemaining:function(){return 12;}});},40);};
function scan(){if(window.__eco)return;[].forEach.call(L.querySelectorAll("img.pos:not([data-hq])"),function(im){im.setAttribute("data-hq","0");q.push(im);});if(q.length&&!busy){busy=1;ric(run);}}
function run(d){var t0=Date.now();while(q.length&&(Date.now()-t0<14)){var im=q.shift(),li=im.closest("li"),t=li&&li.querySelector(".t");if(!t||!im.isConnected)continue;try{var u=window.mrPosterByTitle(t.textContent.trim(),2);if(u){im.src=u;im.setAttribute("data-hq","1");}}catch(e){}}
if(q.length)ric(run);else busy=0;}
new MutationObserver(function(){clearTimeout(scan.t);scan.t=setTimeout(scan,200);}).observe(L,{childList:true,subtree:true});
setTimeout(scan,1500);})();

}catch(e){console.error("[mr-hq-js]",e)}
/* inline41 */
try{
(function(){var L=[].slice.call(document.querySelectorAll("details.plan,details.plan2")).filter(function(d){return !d.parentElement.closest("details");});
L.forEach(function(d){d.addEventListener("toggle",function(){if(!d.open)return;L.forEach(function(o){if(o!==d&&o.open)o.open=false;});
setTimeout(function(){try{d.scrollIntoView({behavior:window.__eco?"auto":"smooth",block:"start"});}catch(e){}},80);});});})();
}catch(e){console.error("[inline41]",e)}
/* mr-robot5-js */
try{
(function(){
var d=document.querySelector("body>.dm")||document.querySelector(".dm"),rb=d&&d.querySelector(".rb"),rh=rb&&rb.querySelector(".rh"),rt=rb&&rb.querySelector(".rt");
if(!d||!rb||!rh||!rt||rh.querySelector(".rcap"))return;
/* extrusão mais fina: fatias intermediárias deixam a cabeça e o corpo lisos ao girar */
function fine(box){var a=[].filter.call(box.children,function(n){return n.tagName==="I"&&n.style.getPropertyValue("--z");}),k,n,z,b;
 for(k=0;k<a.length-1;k++){z=(parseFloat(a[k].style.getPropertyValue("--z"))+parseFloat(a[k+1].style.getPropertyValue("--z")))/2;b=(parseFloat(a[k].style.getPropertyValue("--b"))+parseFloat(a[k+1].style.getPropertyValue("--b")))/2;
  n=document.createElement("i");n.style.cssText="--z:"+z+"px;--b:"+b.toFixed(3);box.insertBefore(n,a[k+1]);}}
fine(rh);fine(rt);
rh.insertAdjacentHTML("beforeend",'<div class="rcap"><s></s><u></u><b></b></div><s class="rsb"></s>');
rb.insertAdjacentHTML("beforeend",'<div class="rbk"></div>');
d.insertAdjacentHTML("beforeend",'<div class="rzz"><b>Z</b><b>z</b><b>z</b></div>');
/* fala ao dormir e ao acordar */
var was=d.classList.contains("sleep"),pk=function(a){return a[Math.floor(Math.random()*a.length)];};
try{new MutationObserver(function(){var s=d.classList.contains("sleep");if(s===was)return;was=s;
 if(window.MR_SAY){if(s)window.MR_SAY("Boa noite… zzz 😴",1800);else window.MR_SAY(pk(["Hmm? Cochilei 🥱","Já acordei! ☀️","Quase dormi de vez 😅"]),1900);}
}).observe(d,{attributes:true,attributeFilter:["class"]});}catch(e){}
})();

}catch(e){console.error("[mr-robot5-js]",e)}
/* mr-org-js */
try{
(function(){
/* Se algo (atalhos da tela inicial, conquistas…) abrir um recurso que agora fica dentro de "Mais recursos",
   abre o grupo junto e rola até o item. */
var G=document.getElementById("mrmore");if(!G||!window.MutationObserver)return;
new MutationObserver(function(ms){ms.forEach(function(m){var t=m.target;
 if(t===G||!t.open||!G.contains(t))return;
 if(!G.open){G.open=true;setTimeout(function(){var o=G.querySelectorAll("details[open]"),x=o[o.length-1]||G;try{window.scrollTo({top:x.getBoundingClientRect().top+window.pageYOffset-175});}catch(e){}},450);}
});}).observe(G,{attributes:true,attributeFilter:["open"],subtree:true});
})();
}catch(e){console.error("[mr-org-js]",e)}
/* mr-robot-core */
try{
(function(){
var d=document.querySelector("body>.dm")||document.querySelector(".dm");if(!d)return;
var root=document.documentElement,home=document.getElementById("home"),bb=document.getElementById("mxb");
function $(i){return document.getElementById(i);}
function rm(){var c=root.classList;return c.contains("noanim")||c.contains("eco")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches);}
function homeOpen(){return !!home&&!home.hidden;}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function txt(i){var e=$(i);return e?(e.textContent||"").trim():"";}
function cl(v,a,b){return v<a?a:v>b?b:v;}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){}return null;}
/* 1) preferências: quanto ele fala e se faz sons */
var sess=false;function em(){return (sess&&mode==="falante")?"calmo":mode;}
var KF="maratona-robo-fala",KS="maratona-robo-som",mode=ls(KF),sndPref=ls(KS)!=="0";
if(mode!=="calmo"&&mode!=="mudo")mode="falante";
root.setAttribute("data-rfala",mode);
/* 2) sons do robô (só depois do primeiro toque e só se o som do site estiver ligado) */
var AC=null;
function unlock(){try{if(!AC)AC=new (window.AudioContext||window.webkitAudioContext)();if(AC.state!=="running")AC.resume();}catch(e){}}
["pointerdown","touchend","keydown"].forEach(function(n){document.addEventListener(n,unlock,{capture:true,passive:true});});
function sndOn(){return sndPref&&ls("maratona-som")!=="0";}
function tone(f,du,ty,v,dl,f2){if(!sndOn()||!AC||AC.state!=="running")return;try{var o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+(dl||0);o.type=ty||"square";o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+du);g.gain.setValueAtTime(v||.03,t);g.gain.exponentialRampToValueAtTime(.0001,t+du);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+du+.02);}catch(e){}}
var SFX={talk:function(n){for(var i=0;i<n;i++)tone(380+Math.random()*520,.05,"square",.028,i*.075);},
 cheer:function(){[523,659,784,1047].forEach(function(f,i){tone(f,.14,"triangle",.05,i*.09);});},
 wake:function(){tone(330,.12,"sine",.05,0,440);tone(494,.18,"sine",.05,.12,740);},
 sleep:function(){tone(440,.5,"sine",.04,0,196);},
 dizzy:function(){for(var i=0;i<6;i++)tone(300+(i%2)*160,.09,"sine",.04,i*.1);},
 shake:function(){tone(120,.35,"sawtooth",.04,0,60);},
 ok:function(){tone(660,.08,"square",.04,0,880);}};
/* 3) textos: padronizar, não repetir, respeitar o modo (Falante, Calmo, Mudo) */
var recent=[],lastAt=0,keys={},act=Date.now(),tapped=false,taps=[],lastTap=0,IMP=false,FORCE=false;
function norm(t){t=String(t||"").replace(/\.{3}/g,"…").replace(/\s+/g," ").trim();return t?t.charAt(0).toUpperCase()+t.slice(1):t;}
function dup(t){var n=Date.now(),i;recent=recent.filter(function(r){return n-r.at<120000;});for(i=0;i<recent.length;i++)if(recent[i].t===t&&n-recent[i].at<90000)return true;return false;}
function mark(t){recent.push({t:t,at:Date.now()});if(recent.length>14)recent.shift();}
var oSay=window.MR_SAY;
if(typeof oSay==="function")window.MR_SAY=function(t,ms){
 if(homeOpen()||em()==="mudo")return;
 var dots=/^[·\s]*$/.test(t||""),n=dots?t:norm(t);
 if(!dots){if(em()==="calmo"&&!IMP&&Date.now()-lastTap>1500)return;if(!FORCE&&dup(n))return;mark(n);}
 return oSay.call(this,n,ms);};
function speak(t,ms,o){IMP=!!o.imp;FORCE=!!(o.pri||o.imp);try{if(window.MR_SAY)window.MR_SAY(t,ms);}finally{IMP=false;FORCE=false;}}
var oHop=window.mkHop;window.mkHop=function(){if(homeOpen())window.MR_EV=null;if(oHop)return oHop.apply(this,arguments);};
var _ev=window.MR_EV;try{Object.defineProperty(window,"MR_EV",{configurable:true,get:function(){return _ev;},set:function(v){_ev=(v&&homeOpen())?null:v;}});}catch(e){}
document.addEventListener("homeshow",function(){_ev=null;if(bb)bb.classList.remove("on");d.classList.remove("mood","mg","mw","mb");});
/* 4) peças do robô: chapéu (festa, Natal e coroa) e brilhinho de progresso */
var rh=d.querySelector(".rh");
if(rh&&!rh.querySelector(".r6hat")){var hh=document.createElement("u");hh.className="r6hat";hh.setAttribute("aria-hidden","true");hh.innerHTML='<i class="hb"></i><i class="hr"></i><i class="hp"></i>';rh.appendChild(hh);}
var sp=document.createElement("i");sp.className="r6sp";sp.setAttribute("aria-hidden","true");sp.textContent="✦";d.appendChild(sp);
if(new Date().getMonth()===11)d.classList.add("xmas");
/* 5) olhos: emoção conforme a fala; piscar natural */
var EM=["eh","ew","et"];
function emo(t){if(/😰|😅|😬|atras|limite/i.test(t))return"ew";if(/🤔|\?|Hmm|Voltou/.test(t))return"et";if(/🥱|😴/.test(t))return"";if(/😎|👏|💪|🎉|🏆|🚀|😍|🥰|💚|🔥|🎬|😉|🍿|💃|🎶|🎧|😌|✓|!/.test(t))return"eh";return"";}
function setEmo(){var c=d.classList;EM.forEach(function(k){c.remove(k);});if(!c.contains("mood")||homeOpen()||!bb)return;var k=emo(bb.textContent||"");if(k)c.add(k);}
var lastBlip=0;
function onBubble(){setEmo();if(!bb||mode==="mudo"||homeOpen())return;var t=bb.textContent||"";if(/^[·\s]*$/.test(t)||/^zzz/i.test(t))return;var n=Date.now();if(n-lastBlip<300)return;lastBlip=n;SFX.talk(cl(Math.round(t.length/6),3,7));}
if(bb){try{new MutationObserver(onBubble).observe(bb,{childList:true,characterData:true,subtree:true});}catch(e){}
 try{new MutationObserver(function(){var r=d.getBoundingClientRect(),b=bb.getBoundingClientRect(),v=b.top>r.top?"below":"above";if(bb.dataset.pos!==v)bb.dataset.pos=v;}).observe(bb,{attributes:true,attributeFilter:["style"]});}catch(e){}}
function blink(){d.style.setProperty("--bl",".06");setTimeout(function(){d.style.setProperty("--bl","1");},95);}
(function loop(){setTimeout(function(){if(!document.hidden&&!homeOpen()&&!rm()&&!d.classList.contains("sleep")){blink();if(Math.random()<.2)setTimeout(blink,260);}loop();},1800+Math.random()*4200);})();
/* 6) molas: antena, orelhas e cabeça balançam quando ele se move */
var A={x:0,v:0},H={x:0,v:0},last=null,lt=0,raf=0,still=0,w={};
function num(k){var v=parseFloat(d.style.getPropertyValue(k));return isNaN(v)?0:v;}
function spr(o,t,k,c,dt){var a=k*(t-o.x)-c*o.v;o.v+=a*dt;o.x+=o.v*dt;}
function wr(k,v,e){if(w[k]===undefined||Math.abs(v-w[k])>e){w[k]=v;d.style.setProperty(k,v.toFixed(2));}}
function frame(ts){raf=0;if(document.hidden||homeOpen()||rm())return;
 var dt=cl((ts-lt)/1000||.016,.004,.033);lt=ts;var x=num("--tx"),y=num("--ty"),vx=0,vy=0;
 if(last){vx=(x-last[0])/dt;vy=(y-last[1])/dt;}last=[x,y];
 spr(A,cl(vy*.016+vx*.02,-34,34),170,8.5,dt);spr(H,cl(-vy*.0045,-4.5,4.5),200,12,dt);
 wr("--ant",A.x,.05);wr("--ear",A.x*.7,.05);wr("--hl",H.x,.02);
 var mv=Math.abs(vy)>4||Math.abs(vx)>4||Math.abs(A.x)>.06||Math.abs(A.v)>.4||Math.abs(H.x)>.03;
 if(mv)still=0;else still++;
 if(still<20)raf=requestAnimationFrame(frame);else{A.x=A.v=H.x=H.v=0;wr("--ant",0,0);wr("--ear",0,0);wr("--hl",0,0);last=null;}}
function kick(){if(!raf&&!rm()){lt=performance.now();raf=requestAnimationFrame(frame);}}
["scroll","touchmove","wheel","resize"].forEach(function(n){window.addEventListener(n,kick,{passive:true});});
/* 7) gestos (um só sorteio de descanso + reações) */
var GD={"r5-nod":1300,"r5-no":1400,"r5-scan":2700,"r5-stretch":2700,"r5-hum":3300,"r7-shrug":1700,"r7-clap":1600},gn=Object.keys(GD),gbag=[],gcur="",gct=0;
var RE=/(^|\s)(fl|sleep|peek|mood|pz|pz-\S+|hop|wave|rcel|hp|ryawn|r5-\S+|r6-\S+|r7-\S+)(?=\s|$)/;
function busy(){return RE.test(d.className);}
function note(){var n=document.createElement("span");n.className="mxn";n.textContent=pick(["♪","♫","♬"]);n.style.setProperty("--nx",(8+Math.random()*60)+"px");n.style.setProperty("--nd",(Math.random()*40-20)+"px");n.style.setProperty("--nr",(Math.random()*40-20)+"deg");d.appendChild(n);setTimeout(function(){if(n.parentNode)n.parentNode.removeChild(n);},1800);}
function stopIdle(){clearTimeout(gct);if(gcur){d.classList.remove(gcur);gcur="";}}
function gest(k,ms,idle){var c=d.classList;if(rm()||c.contains("sleep"))return;
 if(idle){stopIdle();gcur=k;}c.add(k);if(k==="r5-hum"){note();setTimeout(note,900);setTimeout(note,1800);}
 var t=setTimeout(function(){c.remove(k);if(gcur===k)gcur="";},ms||GD[k]||1500);if(idle)gct=t;}
function cls(k,ms){var c=d.classList;if(rm()||c.contains("sleep"))return;c.add(k);setTimeout(function(){c.remove(k);},ms);}
function nextG(){if(!gbag.length)gbag=gn.slice().sort(function(){return Math.random()-.5;});return gbag.pop();}
setInterval(function(){if(rm()||document.hidden||homeOpen()||busy()||gcur||sess)return;if(Math.random()<.5)gest(nextG(),0,true);},6500);
/* 8) confete, estrelas e comemoração */
function confetti(n){if(rm())return;var r=d.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height*.35,cols=["#ff5a8a","#ffd54a","#4cd6ff","#7cff7a","#c47aff","#ff9a3c"],i,e;if(document.querySelectorAll(".r6cf").length>30)return;
 for(i=0;i<(n||16);i++){e=document.createElement("i");e.className="r6cf";e.style.left=(cx+Math.random()*30-15).toFixed(0)+"px";e.style.top=cy.toFixed(0)+"px";e.style.background=pick(cols);e.style.setProperty("--dx",(Math.random()*170-85).toFixed(0)+"px");e.style.setProperty("--uy",(-40-Math.random()*60).toFixed(0)+"px");e.style.setProperty("--dy",(70+Math.random()*110).toFixed(0)+"px");e.style.setProperty("--r",(Math.random()*720-360).toFixed(0)+"deg");e.style.animationDelay=(Math.random()*.15).toFixed(2)+"s";e.addEventListener("animationend",function(){if(this.parentNode)this.parentNode.removeChild(this);});document.body.appendChild(e);}}
function star(c){if(rm())return;var n=document.createElement("span");n.className="mxs";n.textContent=pick(["★","✦","✧"]);if(c)n.style.color=c;n.style.setProperty("--nx",(4+Math.random()*70)+"px");n.style.setProperty("--nd",(Math.random()*50-25)+"px");n.style.setProperty("--nr",(Math.random()*60-30)+"deg");d.appendChild(n);setTimeout(function(){if(n.parentNode)n.parentNode.removeChild(n);},1900);}
function cheer(ms){var c=d.classList;SFX.cheer();if(rm())return;c.remove("sleep","pz");void d.offsetWidth;c.add("rcel","party");confetti(18);for(var i=0;i<7;i++)setTimeout(star,i*230);setTimeout(function(){c.remove("rcel");},2200);setTimeout(function(){c.remove("party");},ms||5200);}
/* 9) falar: ritmo, repetição e modo */
function say(t,o){o=o||{};var n=Date.now(),c=d.classList;
 if(!t||homeOpen()||document.hidden||c.contains("sleep")||!window.MR_SAY||em()==="mudo")return false;
 if(em()==="calmo"&&!o.imp)return false;
 var free=o.pri||o.imp,gap=em()==="calmo"?9000:3500;
 if(!free&&(c.contains("mood")||n-lastAt<gap))return false;
 if(free&&n-lastAt<1100)return false;
 if(o.key&&keys[o.key]&&n-keys[o.key]<(o.cd||20000))return false;
 var nt=norm(t);if(!free&&dup(nt))return false;
 lastAt=n;if(o.key)keys[o.key]=n;
 var ms=Math.min(4600,Math.max(2300,1500+nt.length*55));
 if(!free&&!rm()){speak("· · ·",520,{});setTimeout(function(){if(homeOpen()||mode==="mudo")return;speak(nt,ms,o);if(o.g)gest(o.g);},540);}
 else{speak(nt,ms,o);if(o.g)gest(o.g);}
 return true;}
["pointerdown","keydown","scroll","touchstart"].forEach(function(n){window.addEventListener(n,function(){act=Date.now();},{passive:true,capture:true});});
/* 10) reações por título e saga (usado pela fala de "marcado") */
function fold(s){s=String(s||"").toLowerCase();try{s=s.normalize("NFD").replace(/[\u0300-\u036f]/g,"");}catch(e){}return s;}
var QR=[[/guerra infinita/,["Thanos chegou… 🟣","Que filme pesado, hein? 😮"]],[/ultimato/,["Que despedida épica! 😭","O ápice da saga 💥"]],[/era de ultron/,["Ultron entrou em cena 🤖","Ultron contra todos 💥"]],
 [/guerra civil/,["Time Cap ou Time Stark? 🤔","Briga de família 💥"]],[/soldado invernal/,["O Soldado Invernal em ação ❄️","Cap e Bucky 🛡️"]],[/vingadores/,["Vingadores, reunir! 🔱","O time mais poderoso da Terra 🌍"]],
 [/homem de ferro/,["Tony Stark mandando ver ⚙️","Tecnologia de ponta 🔴"]],[/hulk/,["Hulk esmaga! 💚","Hulk gostou desse 💚"]],[/capitao america/,["Cap tá orgulhoso 🛡️","Escudo erguido! 🛡️"]],[/capita marvel/,["Carol voando alto 🌟","Energia cósmica ✨"]],
 [/thor/,["Trovão! ⚡","Asgard aprovou 🔨","Thor chegou com estilo ⚡"]],[/guardioes/,["Guardiões em ação! 🎵","Bora dançar com o Groot 🌱"]],[/homem[- ]aranha/,["Seu amigão da vizinhança 🕷️","Teia lançada! 🕸️"]],
 [/doutor estranho/,["Magia e multiverso 🌀","O Mago Supremo arrasou ✨"]],[/pantera negra/,["Wakanda para sempre! 💜","Tecnologia e tradição 💜"]],[/homem[- ]formiga|vespa/,["Pequeno, mas poderoso 🐜","Quântico demais 🌀"]],
 [/viuva negra/,["Natasha merece palmas 👏","Espiã de primeira 🕷️"]],[/eternos/,["Cósmico demais ✨","Eternos em ação 🌌"]],[/shang/,["Artes marciais e dragões 🐉"]],[/loki/,["Loki aprontando de novo 🐍"]],[/wanda|feiticeira/,["Wanda mexendo com a realidade 🔴"]],
 [/deadpool/,["Esse é de rir alto 😂","Quebrando a quarta parede 🔴"]],[/wolverine|logan|x-men|x men/,["Mutantes em cena 🧬","Garras de fora! 🐾"]],[/ms\.? marvel|miss marvel/,["Kamala arrasa! 💥"]],[/gaviao arqueiro|hawkeye/,["Mira certeira 🏹"]],
 [/cavaleiro da lua|moon knight/,["Lua cheia, mistério total 🌙"]],[/mulher[- ]hulk|she-hulk/,["Mulher-Hulk entrando na corte ⚖️"]],[/invasao secreta/,["Quem será um skrull? 👀"]],[/\bwhat if\b/,["E se…? 🤔"]]];
var lastQ="";
window.MR_QUIP=function(e){try{if(!e||e.on<=0||e.ch!==1)return"";var f=fold(e.nm),i,c=[];
 for(i=0;i<QR.length;i++)if(QR[i][0].test(f)){c=QR[i][1];break;}
 if(c.length){if(Math.random()>.8)return"";}
 else{var y=/\((\d{4})\)/.exec(String(e.nm||""));y=y?+y[1]:0;if(Math.random()>.4)return"";c=!y?[]:y<=2019?["Mais uma joia da Saga do Infinito 💎","Peça por peça, chegando lá 🧩"]:y<=2023?["O multiverso se abrindo 🌀","Saga do Multiverso avançando 🌌"]:["Fase recente, bora! 🚀"];}
 c=c.filter(function(x){return x!==lastQ;});if(!c.length)return"";lastQ=pick(c);return lastQ;}catch(x){return"";}};
/* 11) humor do robô conforme o progresso */
var STG=-1;
function hum(){var m=/(\d+)\s*de\s*(\d+)/.exec(txt("cnt"));if(!m||!+m[2])return;var n=+m[1],t=+m[2],r=n/t,s=n>=t?4:r>=.75?3:r>=.5?2:r>=.25?1:0;
 d.setAttribute("data-hum",s);
 if(STG>=0&&s>STG&&performance.now()>5000&&!homeOpen()){if(s===1)setTimeout(function(){say("25% da maratona! O ritmo pegou 🔥",{pri:true,imp:true,key:"stg",cd:5000});confetti(8);},5200);else if(s===3)setTimeout(function(){say("75%! Reta final, bora 🏁",{pri:true,imp:true,key:"stg",cd:5000});confetti(10);},5200);}
 STG=s;}
var ce=$("cnt");if(ce){try{new MutationObserver(hum).observe(ce,{childList:true,characterData:true,subtree:true});}catch(e){}}
hum();window.addEventListener("load",function(){setTimeout(hum,600);});
/* 12) reações a cliques, filtros, ajustes e ferramentas */
var TAB={"Progresso":["Aqui está o seu progresso 📈","Vamos ver como você está indo? 📊"],"Cronologia":["Hora de viajar na história 🧭","Ordem dos acontecimentos, bem organizadinha 🗺️"],"Conquistas":["Suas conquistas! 🏆","Quantas medalhas você já tem? 🏅"],"Quiz":["Hora do quiz! Bora testar? 🧠","Será que você sabe tudo? 🤔"],"Ferramentas":["Caixa de ferramentas aberta 🛠️","Plano, sessão e backup por aqui 💾"],"Linha do tempo 3D":["Viajando pela linha do tempo 🌌","Segura aí, vamos atravessar o multiverso! 🌀"],"Personalização":["Hora de deixar tudo com a sua cara 🎨","Mudando o visual? Gosto! ✨"]};
var FL={all:"Lista completa de volta 📋",todo:"Só o que falta ver! 🎯",done:"Os que você já viu ✅",path:"O caminho essencial 🛤️",fav:"Seus favoritos ❤️",on:"Só as conquistadas 🏅",off:"As que ainda faltam 🔒"};
var OR={rel:"Por data de lançamento 🎬",cron:"Na ordem da história 🧭",dur:"Do mais curto ao mais longo ⏱️"};
var TH=["Que cor linda! 🎨","Gostei dessa! ✨","Fica bem no tema 😎","Combinou! 💚"];
var STAR={5:"Cinco estrelas! 🤩 Esse é dos bons",4:"Quatro estrelas, ótimo! ⭐",3:"Três… mais ou menos 😐",2:"Duas estrelas, não curtiu tanto 😕",1:"Só uma estrela? Ixi 😬"};
var BK={bg:"Código de backup gerado 💾",bc:"Copiado! 📋",bd:"Baixando o seu backup ⬇️",bf:"Escolha o arquivo do backup 📂",br:"Restaurando… 🔄"};
var FALAMSG={falante:"Voltei a falar! 💬",calmo:"Vou falar só o importante 🌿",mudo:"Tá bom, fico quietinho 🤫"};
function ui(){var bs=document.querySelectorAll("#rfala button"),i,on;for(i=0;i<bs.length;i++){on=bs[i].getAttribute("data-f")===mode;bs[i].classList.toggle("on",on);bs[i].setAttribute("aria-pressed",on?"true":"false");}
 var n=$("rfn");if(n)n.textContent=mode==="falante"?"Ele comenta o que você faz e dá dicas de vez em quando.":mode==="calmo"?"Ele só avisa o importante: conquistas, cartas raras e lembretes.":"Ele fica em silêncio: só gestos e animações.";
 var sb=$("rsom"),ss=$("rsoms");if(sb){sb.classList.toggle("on",sndPref);sb.setAttribute("aria-pressed",sndPref?"true":"false");}if(ss)ss.textContent=sndPref?"ligados":"desligados";}
function setMode(m){if(m===mode)return;mode=m;ls(KF,m);ui();var msg=FALAMSG[m];
 if(m==="mudo"){if(typeof oSay==="function"&&!homeOpen())oSay(msg,2200);setTimeout(function(){if(mode==="mudo")root.setAttribute("data-rfala","mudo");},2400);}
 else{root.setAttribute("data-rfala",m);if(typeof oSay==="function"&&!homeOpen())oSay(msg,2200);}}
ui();
document.addEventListener("click",function(e){var t=e.target;if(!t||!t.closest||homeOpen())return;var b=t.closest("button,summary");if(!b)return;var id=b.id||"";
 try{
 if(b.closest("#rfala")){setMode(b.getAttribute("data-f"));return;}
 if(b.closest("#racc")){var aid=b.getAttribute("data-acc"),ac0=accOf(aid);if(!ac0)return;if(!isUn(aid)){accNote("Desbloqueie com a conquista: "+(CN[ac0.a]||ac0.a));return;}AS[ac0.slot]=(AS[ac0.slot]===aid)?"":aid;saveAcc();applyAcc();buildAcc();accNote(AS[ac0.slot]===aid?ac0.e+" "+ac0.n+" equipado":"Tirei: "+ac0.n.toLowerCase());if(AS[ac0.slot]===aid)say("Ficou bom? 😎",{key:"accq",cd:6000,g:"r5-nod"});return;}
 if(id==="rsom"){sndPref=!sndPref;ls(KS,sndPref?"1":"0");ui();if(sndPref){unlock();setTimeout(SFX.ok,80);}return;}
 if(b.closest(".mtabs")){var m=TAB[(b.textContent||"").replace(/^[^A-Za-zÀ-ú]+/,"").trim()];if(m)say(pick(m),{key:"tab",cd:2500,g:"r5-nod"});return;}
 if(b.closest("#acf")){say(FL[b.getAttribute("data-f")],{key:"flt",cd:4000});return;}
 if(b.closest(".top .chips")){say(FL[b.getAttribute("data-f")],{key:"flt",cd:4000,g:"r5-scan"});return;}
 if(b.closest("#ordem")){say(OR[b.getAttribute("data-o")],{key:"ord",cd:4000});return;}
 if(b.closest("#temas")){say(pick(TH),{key:"th",cd:6000,g:"r5-nod"});return;}
 if(b.classList.contains("fv")){setTimeout(function(){say(b.classList.contains("on")?pick(["Favorito! ❤️","Esse vai pro coração 💚"]):"Tirei dos favoritos 💔",{key:"fav",cd:3000});},40);return;}
 if(b.closest(".stars")){setTimeout(function(){var bs=b.parentNode.children,k=0,i;for(i=0;i<bs.length;i++)if(bs[i].classList.contains("on"))k=i+1;if(k)say(STAR[k],{key:"star",cd:2500,g:k>=4?"r5-nod":k<=2?"r5-no":null});},40);return;}
 if(id==="cont"){say(pick(["Bora continuar! ▶️","De onde você parou… vamos! 🍿"]),{key:"cont",cd:8000});return;}
 if(id==="rs"){say("Limpar tudo?! 😱",{key:"rs",cd:8000,g:"r5-no"});return;}
 if(BK[id]){say(BK[id],{key:"bk",cd:2500});return;}
 if(id==="sh"||id==="mxsh"||id==="prs"){say("Compartilha com a galera! 📤",{key:"shr",cd:8000});return;}
 if(id==="sb"){say("Aqui está o seu resumo! 📊",{key:"sb",cd:8000});return;}
 if(id==="prb"){say("Revisão pré-Doomsday, bora! 📖",{key:"prb",cd:8000});return;}
 if(id==="mxcal"){say("Lembrete no calendário, boa ideia! 📅",{key:"cal",cd:8000});return;}
 if(id==="mxin"){say("Instalar como app? Boa! 📲",{key:"ins",cd:8000});return;}
 if(id==="btt"){say("Subindo! 🚀",{key:"btt",cd:6000});return;}
 if(id==="an"||id==="eco"||id==="gl"||id==="sm"){setTimeout(function(){var v=id==="an"?"Animações: "+txt("ans"):id==="eco"?"Economia: "+txt("ecos"):id==="gl"?"Gráficos 3D: "+txt("gls"):/Mudo/.test(b.textContent)?"Som desligado 🤫":"Som ligado! 🔊";say(v,{key:"set",cd:2500});},60);return;}
 if(id==="ostx"){say("Próxima música! 🎶",{key:"nx",cd:5000,g:"r5-hum"});return;}
 }catch(x){}
},true);
document.addEventListener("change",function(e){var t=e.target;if(!t||homeOpen())return;try{if(t.id==="fase")say("Mudando de fase 🔭",{key:"fase",cd:5000});else if(t.id==="fts")say("Letra nova! ✍️",{key:"fts",cd:5000});else if(t.id==="ostm")say("Trocando a trilha 🎵",{key:"ostm",cd:5000});}catch(x){}},true);
document.addEventListener("focusin",function(e){var t=e.target;if(!t||homeOpen())return;try{if(t.tagName==="TEXTAREA"&&t.closest&&t.closest(".nt"))say("Anota aí! ✍️",{key:"note",cd:60000});else if(t.id==="q")say("Qual título você procura? 🔎",{key:"srch",cd:45000,g:"r5-scan"});}catch(x){}},true);
var qt=0,qi=$("q");
if(qi)qi.addEventListener("input",function(){clearTimeout(qt);qt=setTimeout(function(){var v=(qi.value||"").trim();if(!v)return;var n=document.querySelectorAll("#list li:not([hidden]):not(.gh)").length;say(n?pick(["Achei "+n+"! 🔎","Olha só o que encontrei 👀"]):"Não achei esse título 🤷",{key:"srchr",cd:6000,g:n?null:"r5-no"});},800);});
/* 13) avisos do site: conquistas, assistindo, limpar… */
var tEl=$("toast"),tSig="",tAt=0;
function onToast(){if(!tEl||!/show/.test(tEl.className))return;var t=(tEl.textContent||"").trim(),n=Date.now();if(!t||(t===tSig&&n-tAt<2500))return;tSig=t;tAt=n;var m;
 if((m=/^🏅 Conquista: (.+)/.exec(t))){setTimeout(function(){say("Conquista nova: "+m[1]+"! 🏅",{pri:true,imp:true,key:"ach",cd:1500});cheer(5200);},350);setTimeout(checkAcc,900);}
 else if(/assistindo agora ▶/.test(t))say(pick(["Boa sessão! 🍿","Bom filme! Eu cuido da pipoca 🍿"]),{key:"wn",cd:4000,g:"r5-nod"});
 else if(/Tirado de/.test(t))say("Sem problema, escolhe outro 😉",{key:"wn",cd:4000});
 else if(/Progresso limpo/.test(t)){say("Tudo zerado… recomeçamos? 😢",{pri:true,imp:true,key:"clr",cd:4000});cls("mb",1400);}
 else if(/restaurado/.test(t)){say("Progresso de volta! 🎉",{pri:true,imp:true,key:"rst",cd:4000});confetti(10);}
 else if(/Já via antes/.test(t))say("Beleza, esse não entra no ritmo 👍",{key:"old",cd:4000});
 else if(/Voltou para o cálculo/.test(t))say("De volta ao cálculo 📐",{key:"old",cd:4000});}
if(tEl)try{new MutationObserver(onToast).observe(tEl,{attributes:true,attributeFilter:["class"],childList:true,characterData:true,subtree:true});}catch(e){}
/* 14) quiz, janelas e cartas */
var qb=$("qbody"),qsig="",qstreak=0,qt2=0,qz=$("qz"),sm=$("sum"),pre=$("pre"),c3=$("c3");
function quizCheck(){if(!qb||homeOpen())return;var ok=qb.querySelector(".qo.ok");if(!ok)return;var bad=qb.querySelector(".qo.bad"),q=qb.querySelector(".qq"),sig=(q?q.textContent:"")+"|"+ok.textContent;if(sig===qsig)return;qsig=sig;
 if(bad){qstreak=0;say(pick(["Ops, quase! 😅","Errou, mas aprende no caminho 💪","Essa era difícil 🤔"]),{pri:true,key:"qa"});cls("mw",1400);}
 else{qstreak++;var m=qstreak===3?"Três seguidas! 🔥":qstreak===5?"Cinco seguidas! 🚀":qstreak===8?"Imbatível! 👑":pick(["Acertou! 🎉","Isso aí! 🧠","Mandou bem! 👏","Certo! 😎"]);say(m,{pri:true,key:"qa"});if(qstreak>=3&&qstreak%2===1)cheer(3500);else gest("r5-nod");}}
if(qb)try{new MutationObserver(function(){clearTimeout(qt2);qt2=setTimeout(quizCheck,40);}).observe(qb,{attributes:true,attributeFilter:["class"],subtree:true,childList:true});}catch(e){}
function shown(el,fn){if(!el)return;var was=!el.hidden;try{new MutationObserver(function(){var now=!el.hidden;if(now&&!was)fn();was=now;}).observe(el,{attributes:true,attributeFilter:["hidden"]});}catch(e){}}
shown(qz,function(){qstreak=0;qsig="";say("Boa sorte no quiz! 🍀",{pri:true,key:"qz",cd:6000});});
shown(sm,function(){say("Olha o seu resumo! 📊",{key:"sm",cd:8000});});
shown(pre,function(){say("Tudo o que importa pra estreia 📖",{key:"pre",cd:8000});});
shown(c3,function(){setTimeout(function(){var ff=$("c3f");if(!ff)return;var lk=ff.querySelector("img.lk"),r=ff.querySelector(".cdr"),rt=(r?r.textContent:"").toLowerCase();
 if(lk){say("Essa carta está bloqueada 🔒 Assista pra liberar!",{pri:true,key:"card",cd:2000});return;}
 if(/lend/.test(rt)){say("Carta LENDÁRIA!! 🌟",{pri:true,imp:true,key:"card",cd:2000});cheer(5200);}
 else if(/[eé]pic/.test(rt)){say("Carta épica! 💜",{pri:true,imp:true,key:"card",cd:2000});confetti(10);gest("r5-nod");}
 else if(/rar/.test(rt)){say("Carta rara! 💙",{pri:true,imp:true,key:"card",cd:2000});gest("r5-nod");}
 else say("Carta comum, mas tem valor 😄",{key:"card",cd:2000});},520);});
/* 15) rolagem */
var sy=window.pageYOffset||0,st=performance.now(),fastN=0;
window.addEventListener("scroll",function(){var y=window.pageYOffset||0,n=performance.now(),v=Math.abs(y-sy)/Math.max(1,n-st)*1000;sy=y;st=n;
 if(v>4200){fastN++;if(fastN>6){fastN=0;say(pick(["Calma! Fiquei tonto 🌀","Uau, quanta pressa! 💨"]),{key:"fast",cd:50000,g:"r5-no"});}}else if(v<800)fastN=0;
 var de=document.documentElement;if(y+innerHeight>=de.scrollHeight-60&&de.scrollHeight>innerHeight*2)say("Chegou ao fim da lista! 🏁",{key:"end",cd:90000,g:"r5-stretch"});},{passive:true});
/* 16) toques no robô: tontura */
d.addEventListener("pointerdown",function(){tapped=true;var n=Date.now();lastTap=n;taps=taps.filter(function(t){return n-t<5000;});taps.push(n);
 if(taps.length>=9&&!d.classList.contains("r6-diz")&&!rm()){taps=[];d.classList.remove("pz");d.classList.add("r6-diz");SFX.dizzy();for(var i=0;i<6;i++)setTimeout(function(){star("#ffd54a");},i*350);if(!homeOpen()&&mode!=="mudo"&&typeof oSay==="function")oSay("Tô tonto… 😵‍💫",2600);setTimeout(function(){d.classList.remove("r6-diz");},2900);}},true);
/* 17) o mundo real: celular sacudido, bateria, rede, tela girada, volta à aba */
var shk=0,shT=0;
window.addEventListener("devicemotion",function(e){var a=e.accelerationIncludingGravity;if(!a||homeOpen())return;var m=Math.hypot(a.x||0,a.y||0,a.z||0);if(Math.abs(m-9.8)>16){var n=Date.now();if(n-shk<800&&n-shT>9000){shT=n;d.classList.add("r6-shake");SFX.shake();setTimeout(function(){d.classList.remove("r6-shake");},1500);if(mode!=="mudo"&&!document.hidden&&typeof oSay==="function")oSay(pick(["Terremoto! 😱","Aaaa! Quem balançou? 🫨"]),2200);}shk=n;}},{passive:true});
try{if(navigator.getBattery)navigator.getBattery().then(function(b){var warned=false;function ck(){if(!b.charging&&b.level<=.2&&!warned){warned=true;say("Seu celular tá com pouca bateria 🔋",{pri:true,imp:true,key:"bat",cd:600000});}if(b.charging)warned=false;}b.addEventListener("levelchange",ck);b.addEventListener("chargingchange",function(){ck();if(b.charging)say("Carregando… que delícia 🔌",{key:"chg",cd:120000});});setTimeout(ck,4000);});}catch(e){}
window.addEventListener("offline",function(){say("Sem internet… mas eu continuo aqui 📡",{pri:true,imp:true,key:"net",cd:30000});});
window.addEventListener("online",function(){say("Internet de volta! 🌐",{pri:true,imp:true,key:"net2",cd:30000});});
try{var mq=matchMedia("(orientation:landscape)");(mq.addEventListener?mq.addEventListener.bind(mq,"change"):mq.addListener.bind(mq))(function(){say("Tela girou! 🔄",{key:"ori",cd:15000});cls("mg",1800);});}catch(e){}
var hid=0;
document.addEventListener("visibilitychange",function(){if(document.hidden)hid=Date.now();else if(hid&&Date.now()-hid>40000){hid=0;setTimeout(function(){if(say("Voltou! Senti sua falta 👋",{pri:true,key:"back",cd:60000})&&!rm()){d.classList.add("wave");setTimeout(function(){d.classList.remove("wave");},1900);}},500);}});
/* 18) classe do robô: sons de dormir e acordar, gestos interrompidos, emoção limpa */
var wasSl=d.classList.contains("sleep");
try{new MutationObserver(function(){var c=d.classList,s=c.contains("sleep");
 if(s&&!wasSl)SFX.sleep();else if(!s&&wasSl)SFX.wake();wasSl=s;
 if(gcur&&busy())stopIdle();
 if(!c.contains("mood")&&(c.contains("eh")||c.contains("ew")||c.contains("et")))EM.forEach(function(k){c.remove(k);});}).observe(d,{attributes:true,attributeFilter:["class"]});}catch(e){}
/* 19) ao sair da tela de início: aceno, bom dia e contagem */
function days(){return Math.ceil((new Date(2026,11,17)-new Date())/864e5);}
var was=root.classList.contains("hon");
try{new MutationObserver(function(){var h=root.classList.contains("hon");
 if(was&&!h){if(!rm())setTimeout(function(){if(homeOpen()||busy())return;var c=d.classList;c.add("wave");setTimeout(function(){c.remove("wave");},1900);},650);
  setTimeout(function(){var hr=new Date().getHours(),g=hr<5?"Boa madrugada! 🌙":hr<12?"Bom dia! ☀️":hr<18?"Boa tarde! 🌤️":"Boa noite! 🌙";say(g,{pri:true,imp:true,key:"greet",cd:60000});var D=days();if(D>0)setTimeout(function(){say(D===1?"Falta 1 dia pra Doutor Destino! 🤯":"Faltam "+D+" dias pra Doutor Destino! 🗓️",{pri:true,key:"dd",cd:90000});},3600);else if(D===0)setTimeout(function(){say("É HOJE! Doutor Destino! 💥",{pri:true,key:"dd",cd:90000});},3600);},900);}
 was=h;}).observe(root,{attributes:true,attributeFilter:["class"]});}catch(e){}
/* 20) conversa de fundo quando você está mexendo no site */
var bag=[],lastBreak=Date.now(),HL=[["Tudo começa com um filme só 🎬","Bora começar essa jornada? 🚀"],["Já pegou o ritmo! 🔥","Mais de um quarto do caminho 💪"],["Passou da metade! Segue firme 💪","Metade feita, metade pela frente ⚡"],["Tá na reta final! 🏁","Quase lá, Mestre 🔱"],["Você é uma lenda! 👑","Maratona completa, bora pro cinema 🍿"]];
function pool(){var a=[],m,nx=document.querySelector("#next b"),D=days(),sg=parseInt(d.getAttribute("data-hum"),10);
 if(nx&&nx.textContent.trim())a.push("O próximo da fila é "+nx.textContent.trim()+" 🍿");
 if((m=/(\d+)\s*de\s*(\d+)/.exec(txt("cnt")))){var f=m[2]-m[1];if(f>0)a.push("Já são "+m[1]+" de "+m[2]+"! Faltam "+f+" 🎬");else a.push("Você viu tudo! Que orgulho 🥹");}
 if(D>0)a.push("Faltam "+D+" dias pra Doutor Destino 🗓️");
 if(sg>=0&&HL[sg])a=a.concat(HL[sg]);
 a.push("Dica: segura em mim pra ganhar um carinho 🥰","Dica: toca em mim várias vezes e veja o que acontece 😉","Dica: dá pra trocar a cor do tema em Personalização 🎨","Dica: faça backup do progresso em Ferramentas 💾","Dica: o quiz rende XP e conquistas 🧠","Sabia? Eu durmo se você ficar parado 😴","Já olhou a linha do tempo 3D? 🌌","Dica: dê notas aos filmes que você viu ⭐","Dica: em Personalização você escolhe o quanto eu falo 🤖");
 return a;}
function nextLine(){if(!bag.length)bag=pool().sort(function(){return Math.random()-.5;});return bag.pop();}
setInterval(function(){var n=Date.now();if(homeOpen()||document.hidden||n-act>25000||n-lastAt<38000)return;if(Math.random()<.55)say(nextLine(),{key:"chat",cd:35000});
 if(n-lastBreak>45*60000){lastBreak=n;say("Já faz um tempão aqui! Que tal uma pausa? ☕",{pri:true,imp:true,key:"brk",cd:600000,g:"r5-stretch"});}},9000);
setTimeout(function(){if(!tapped&&!homeOpen())say("Psiu! Toca em mim 👆",{key:"hint",cd:600000});},30000);

/* 21) acessórios liberados por conquistas */
var ACC=[{id:"glasses",slot:"face",e:"🕶️",n:"Óculos escuros",a:"a1"},{id:"cape",slot:"back",e:"🦸",n:"Capa",a:"a4"},{id:"helm",slot:"head",e:"⛑️",n:"Capacete",a:"a5"},{id:"tophat",slot:"head",e:"🎩",n:"Cartola",a:"a6"},{id:"grad",slot:"head",e:"🎓",n:"Capelo",a:"a9"},{id:"crown",slot:"head",e:"👑",n:"Coroa",a:"a8"}],
 CN={a1:"🎬 Primeiro filme",a4:"💎 Saga do Infinito",a5:"🌀 Saga do Multiverso",a6:"⭐ Crítico: 5 notas",a9:"🧠 Quiz: 5 acertos",a8:"👑 Missão cumprida"},KA="maratona-robo-acc",AS={},accKnown=[];
function loadAch(){var o={};try{o=JSON.parse(ls("maratona-conq")||"{}")||{};}catch(e){}return o;}
function unlockedIds(){var a=loadAch(),r=[],i;for(i=0;i<ACC.length;i++)if(a[ACC[i].a])r.push(ACC[i].id);return r;}
function isUn(id){return unlockedIds().indexOf(id)>-1;}
function accOf(id){for(var i=0;i<ACC.length;i++)if(ACC[i].id===id)return ACC[i];return null;}
function saveAcc(){ls(KA,JSON.stringify(AS));}
function applyAcc(){d.setAttribute("data-acch",AS.head||"");d.setAttribute("data-accf",AS.face||"");d.setAttribute("data-accb",AS.back||"");}
function accNote(t){var n=$("racn");if(n)n.textContent=t||"";}
function buildAcc(){var box=$("racc");if(!box)return;box.innerHTML="";ACC.forEach(function(a){var un=isUn(a.id),b=document.createElement("button"),on=AS[a.slot]===a.id;b.type="button";b.setAttribute("data-acc",a.id);b.textContent=(un?a.e:"🔒")+" "+a.n;b.setAttribute("aria-disabled",un?"false":"true");b.classList.toggle("on",on);b.setAttribute("aria-pressed",on?"true":"false");box.appendChild(b);});}
function checkAcc(){var now=unlockedIds(),nw=now.filter(function(id){return accKnown.indexOf(id)<0;});accKnown=now;if(!nw.length)return;nw.forEach(function(id){var a=accOf(id);if(!AS[a.slot])AS[a.slot]=id;});saveAcc();applyAcc();buildAcc();var a0=accOf(nw[0]);setTimeout(function(){say("Ganhei um acessório novo: "+a0.n+"! 🎁",{pri:true,imp:true,key:"accn",cd:1500});},3800);}
(function(){var raw=ls(KA),u=unlockedIds();if(raw){try{AS=JSON.parse(raw)||{};}catch(e){AS={};}}else{["crown","helm","tophat","grad"].some(function(id){if(u.indexOf(id)>-1){AS.head=id;return true;}return false;});if(u.indexOf("glasses")>-1)AS.face="glasses";if(u.indexOf("cape")>-1)AS.back="cape";saveAcc();}
 ["head","face","back"].forEach(function(sl){if(AS[sl]&&u.indexOf(AS[sl])<0)AS[sl]="";});accKnown=u;applyAcc();buildAcc();})();
function mkU(par,cls,html){var u=document.createElement("u");u.className=cls;u.setAttribute("aria-hidden","true");if(html)u.innerHTML=html;par.appendChild(u);}
var rb0=d.querySelector(".rb");
if(rh){mkU(rh,"r6acc r6gl","<i></i><i></i>");mkU(rh,"r6acc r6s3d","<i></i><i></i>");mkU(rh,"r6acc r6hd r6hd-helm");mkU(rh,"r6acc r6hd r6hd-top");mkU(rh,"r6acc r6hd r6hd-grad");}
if(rb0)mkU(rb0,"r6acc r6cape");
var pop=document.createElement("i");pop.className="r6pop";pop.setAttribute("aria-hidden","true");d.appendChild(pop);
var robd=$("rob");if(robd)robd.addEventListener("toggle",function(){if(robd.open){accKnown=unlockedIds();buildAcc();}});
/* 22) modo sessão: óculos 3D e pipoca; ele fica quieto até o filme acabar */
var RT={"Homem de Ferro (2008)":126,"Homem de Ferro 2 (2010)":124,"Thor (2011)":115,"Capitão América: O Primeiro Vingador (2011)":124,"Os Vingadores (2012)":143,"Homem de Ferro 3 (2013)":130,"Thor: O Mundo Sombrio (2013)":112,"Capitão América: O Soldado Invernal (2014)":136,"Guardiões da Galáxia (2014)":121,"Vingadores: Era de Ultron (2015)":141,"Homem-Formiga (2015)":117,"Capitão América: Guerra Civil (2016)":147,"Doutor Estranho (2016)":115,"Guardiões da Galáxia Vol. 2 (2017)":136,"Thor: Ragnarok (2017)":130,"Pantera Negra (2018)":134,"Vingadores: Guerra Infinita (2018)":149,"Homem-Formiga e a Vespa (2018)":118,"Capitã Marvel (2019)":123,"Vingadores: Ultimato (2019)":181,"Viúva Negra (2021)":134,"Falcão e o Soldado Invernal (série completa)":300,"WandaVision (série completa)":360,"Loki — temporada 1":285,"Shang-Chi e a Lenda dos Dez Anéis (2021)":132,"Eternos (2021)":156,"Doutor Estranho no Multiverso da Loucura (2022)":126,"Thor: Amor e Trovão (2022)":119,"Gavião Arqueiro (série completa)":280,"Ms. Marvel (série completa)":235,"Especial de Natal dos Guardiões da Galáxia (2022)":44,"Pantera Negra: Wakanda Para Sempre (2022)":161,"Loki — temporada 2":300,"Agatha: Desde Sempre (série completa)":360,"Homem-Formiga e a Vespa: Quantumania (2023)":125,"Guardiões da Galáxia Vol. 3 (2023)":150,"As Marvels (2023)":105,"Deadpool (2016)":108,"Deadpool 2 (2018)":119,"Logan (2017)":137,"Deadpool & Wolverine (2024)":128,"Capitão América: Admirável Mundo Novo (2025)":118,"Demolidor: Renascido — temporada 1":450,"Thunderbolts* (2025)":127,"Quarteto Fantástico: Primeiros Passos (2025)":115,"X-Men (2000)":104,"X-Men 2 (2003)":134,"X-Men: O Confronto Final (2006)":104},KSS="maratona-robo-sessao",sessT="",sessS=0,sessRem=false;
function nowTitle(){return (window.mrNowIdx&&window.mrNowIdx()>-1)?(ls("maratona-assistindo")||""):"";}
function sayLater(t,o,tries){if(d.classList.contains("mood")&&tries>0){setTimeout(function(){sayLater(t,o,tries-1);},1600);return;}say(t,o);}
function sessCheck(){var t=nowTitle(),old=null,done=false,sv,mn;
 if(t&&!sess){sess=true;sessT=t;sessRem=false;try{old=JSON.parse(ls(KSS)||"null");}catch(e){}
  if(old&&old.t===t&&Date.now()-old.s<6*3600000){sessS=old.s;}else{sessS=Date.now();ls(KSS,JSON.stringify({t:t,s:sessS}));if(!homeOpen())sayLater("Sessão iniciada! Óculos 3D e pipoca 🍿",{pri:true,imp:true,key:"sess",cd:5000},3);}
  d.setAttribute("data-sess","1");}
 else if(!t&&sess){try{sv=JSON.parse(ls("maratona-marvel")||"{}");done=!!sv[sessT];}catch(e){}
  sess=false;d.removeAttribute("data-sess");try{localStorage.removeItem(KSS);}catch(e){}sessT="";
  setTimeout(function(){sayLater(done?pick(["Acabou! O que achou? Dá uma nota ⭐","Sessão completa! Valeu a pipoca 🍿"]):"Sessão encerrada 😌",{pri:true,imp:true,key:"sessend",cd:5000},4);if(done)confetti(10);},done?3800:1200);}
 else if(sess&&!sessRem){mn=RT[sessT]||120;if(Date.now()-sessS>(mn+5)*60000){sessRem=true;say("Acabou o filme? Marca como visto ✅ e dá uma nota ⭐",{pri:true,imp:true,key:"sessrem",cd:600000});}}}
setInterval(sessCheck,2500);setTimeout(sessCheck,1500);
})();

}catch(e){console.error("[mr-robot-core]",e)}
/* extras */
try{
/* Extras: abas fixas, acordeão, "o que assistir agora", pós-créditos, notificação diária, ajustes rápidos */
(function(){
function $(i){return document.getElementById(i);}
function J(k,d){try{return JSON.parse(localStorage.getItem(k))||d;}catch(e){return d;}}
function S(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function mins(t){var m=/(\d+)\s*h/.exec(t),n=/(\d+)\s*min/.exec(t);return (m?+m[1]*60:0)+(n?+n[1]:0);}
function open(id){var d=$(id);if(!d)return;var p=d.parentNode;while(p&&p!==document.body){if(p.tagName==="DETAILS")p.open=true;p=p.parentNode;}d.open=true;setTimeout(function(){d.scrollIntoView({block:"start"});},60);}
/* acordeão: abrir uma seção fecha as irmãs (fora da tela de início) */
document.addEventListener("toggle",function(e){var d=e.target;if(!d||d.tagName!=="DETAILS"||!d.open||d.closest("#home")||d.className.indexOf("plan")<0)return;
Array.prototype.forEach.call(d.parentNode.children,function(s){if(s!==d&&s.tagName==="DETAILS"&&s.open&&s.className.indexOf("plan")>-1)s.open=false;});},true);
/* folha (sheet) */
var sh=document.createElement("div");sh.id="mrsheet";sh.hidden=true;sh.setAttribute("role","dialog");document.body.appendChild(sh);
function sheet(h){sh.innerHTML='<div class="mrs"><button type="button" class="mrx" aria-label="Fechar">✕</button>'+h+'</div>';sh.hidden=false;}
sh.addEventListener("click",function(e){if(e.target===sh||e.target.className==="mrx")sh.hidden=true;});
function row(){return Array.prototype.slice.call(document.querySelectorAll("#list li button.row"));}
function pick(m){var r=row().filter(function(b){return b.getAttribute("aria-pressed")!=="true";});
if(!r.length){sheet("<h3>🎉 Nada faltando aqui</h3><p>Todos os títulos visíveis já foram vistos.</p>");return;}
var ok=r.filter(function(b){return mins(b.querySelector(".dur").textContent)<=m;}),b=ok[0];
if(!b){b=r.slice().sort(function(a,c){return mins(a.querySelector(".dur").textContent)-mins(c.querySelector(".dur").textContent);})[0];}
var t=b.querySelector(".t").textContent,d=b.querySelector(".dur").textContent;
sheet("<h3>🎯 "+(ok[0]?"Cabe em "+m+" min":"Nada cabe em "+m+" min — o mais curto:")+"</h3><p class='mrt'></p><p>"+d+"</p><div class='mrb'><button type='button' id='mrgo'>Ir para o título</button><button type='button' id='mrok'>✓ Marcar como visto</button></div>");
sh.querySelector(".mrt").textContent=t;
$("mrgo").onclick=function(){sh.hidden=true;b.scrollIntoView({block:"center"});};
$("mrok").onclick=function(){b.click();sh.hidden=true;};}
function agora(){sheet("<h3>🎯 O que assistir agora?</h3><p>Quanto tempo você tem?</p><div class='mrb'>"+[30,60,90,120,180].map(function(m){return "<button type='button' data-m='"+m+"'>"+(m<60?m+" min":m/60+" h")+"</button>";}).join("")+"</div>");
Array.prototype.forEach.call(sh.querySelectorAll("[data-m]"),function(b){b.onclick=function(){pick(+b.dataset.m);};});}
function rapido(){var ids=[["an","✨ Animações"],["eco","🔋 Economia"],["sm","🔊 Som"],["vo","📳 Vibração"],["ost","🎵 Trilha"]];
sheet("<h3>⚙️ Ajustes rápidos</h3><div class='mrb'>"+ids.map(function(x){var e=$(x[0]);return e?"<button type='button' data-i='"+x[0]+"'>"+e.textContent.replace(/\s+/g," ").trim()+"</button>":"";}).join("")+"</div><div class='mrb'><button type='button' id='mrmais'>Mais ajustes…</button></div>");
Array.prototype.forEach.call(sh.querySelectorAll("[data-i]"),function(b){b.onclick=function(){var e=$(b.dataset.i);e.click();setTimeout(function(){b.textContent=e.textContent.replace(/\s+/g," ").trim();},120);};});
$("mrmais").onclick=function(){sh.hidden=true;open("cena");};}
/* abas fixas */
var nav=document.createElement("nav");nav.id="mrtabs";nav.setAttribute("aria-label","Navegação");
nav.innerHTML='<button data-t="l">🎬<span>Lista</span></button><button data-t="a">🎯<span>Agora</span></button><button data-t="q">🧠<span>Quiz</span></button><button data-t="x">📊<span>Extras</span></button><button data-t="c">⚙️<span>Ajustes</span></button>';
document.body.appendChild(nav);
nav.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var t=b.dataset.t;
if(t==="l"){var f=document.querySelector(".top");(f||$("list")).scrollIntoView({block:"start"});}
else if(t==="a")agora();else if(t==="q")open("quizb");else if(t==="x")open("mx");else rapido();});
var hm=$("home");function vis(){if(!hm)return;var s=getComputedStyle(hm);nav.hidden=!(s.display==="none"||s.visibility==="hidden"||hm.hidden||s.opacity==="0"||s.pointerEvents==="none");}
if(hm&&window.MutationObserver){new MutationObserver(vis).observe(hm,{attributes:true});}vis();setInterval(vis,1500);
/* cena pós-créditos por título */
var POS=J("maratona-pos",{});
function dress(){Array.prototype.forEach.call(document.querySelectorAll("#list li:not([data-pc])"),function(li){var b=li.querySelector("button.row");if(!b||li.classList.contains("gh"))return;li.dataset.pc="1";
var t=b.querySelector(".t").textContent,x=document.createElement("button");x.type="button";x.className="pcs";
function paint(){x.textContent=POS[t]?"🎞️ Vi a cena pós-créditos":"🎞️ Cena pós-créditos?";x.setAttribute("aria-pressed",POS[t]?"true":"false");}
x.onclick=function(){if(POS[t])delete POS[t];else POS[t]=1;S("maratona-pos",POS);paint();};paint();li.insertBefore(x,li.lastChild);});}
var ul=$("list");if(ul&&window.MutationObserver){new MutationObserver(function(){dress();}).observe(ul,{childList:true});}dress();
/* notificação diária (funciona com o app aberto ou recém-aberto) */
var mx=$("mx"),nb=document.createElement("button");nb.type="button";nb.className="mini";nb.id="mrnot";
function npaint(){nb.textContent=J("maratona-notif",0)?"🔔 Notificação diária: ligada":"🔔 Notificação diária: desligada";}
if(mx&&"Notification"in window){mx.insertBefore(nb,$("mxcal"));npaint();
nb.onclick=function(){if(J("maratona-notif",0)){S("maratona-notif",0);npaint();return;}Notification.requestPermission().then(function(p){if(p==="granted"){S("maratona-notif",1);npaint();check();}});};}
function check(){if(!J("maratona-notif",0)||Notification.permission!=="granted")return;var t=($("mxt")||{}).value||"20:00",n=new Date(),h=n.toISOString().slice(0,10)+"|"+n.getDate(),k=n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate(),hh=("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2);
if(hh<t||J("maratona-notif-dia","")===k)return;S("maratona-notif-dia",k);var left=row().filter(function(b){return b.getAttribute("aria-pressed")!=="true";}).length;
var m="Hora da maratona! "+(left?"Faltam "+left+" títulos.":"Você zerou a lista!"),o={body:m,icon:"icon-192.png",tag:"mm-diario"};
if(navigator.serviceWorker&&navigator.serviceWorker.ready)navigator.serviceWorker.ready.then(function(r){r.showNotification("Maratona Marvel",o);}).catch(function(){try{new Notification("Maratona Marvel",o);}catch(e){}});else try{new Notification("Maratona Marvel",o);}catch(e){}}
setInterval(check,30000);document.addEventListener("visibilitychange",function(){if(!document.hidden)check();});
})();

}catch(e){console.error("[extras]",e)}
/* extras2 */
try{
/* Extras 2: quiz por saga/recordes, resumo semanal e metas, onde parei, contador de pós-créditos */
(function(){
function $(i){return document.getElementById(i);}
function J(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v;}catch(e){return d;}}
function S(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function N(k){try{return parseInt(localStorage.getItem(k)||"0",10)||0;}catch(e){return 0;}}
function fm(m){var h=Math.floor(m/60),r=m%60;return h?h+"h"+(r?" "+r+"min":""):r+"min";}
function ds(d){return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
function sagaOf(i){var G=window.mrG||[],j;for(j=0;j<G.length;j++)if(i>=G[j].a&&i<=G[j].b)return G[j].n;return null;}
/* 1. quiz por saga */
window.mrQS=function(q,ok){if(typeof q!=="number")return;var n=sagaOf(q);if(!n)return;var o=J("maratona-qsaga",{});o[n]=o[n]||[0,0];o[n][1]++;if(ok)o[n][0]++;S("maratona-qsaga",o);};
window.mrQSOk=function(){var o=J("maratona-qsaga",{}),k,c=0;for(k in o)if(o[k][1]>=5&&o[k][0]/o[k][1]>=.7)c++;return c>=3;};
var qc=document.querySelector("#quizb .qzc"),qp=document.createElement("div");qp.id="mrqp";
function qpaint(){var o=J("maratona-qsaga",{}),h="<h4>🏅 Recordes e estatísticas</h4><ul class='mrl'><li>🔥 Maior sequência de acertos: <b>"+N("maratona-qrec")+"</b></li><li>🎯 Melhor partida: <b>"+N("maratona-qpb")+" pts</b></li><li>❤️ Recorde de sobrevivência: <b>"+N("maratona-qsurv")+"</b></li><li>✅ Total de acertos: <b>"+N("maratona-quiz")+"</b></li></ul>",k,ks=Object.keys(o),w=null;
h+="<h4>🗂️ Acertos por saga</h4>";
if(!ks.length)h+="<p class='pm'>Responda perguntas para ver seu desempenho por saga (conta a partir desta versão).</p>";
else{ks.forEach(function(n){var p=Math.round(o[n][0]/o[n][1]*100);if(o[n][1]>=5&&(!w||p<w[0]))w=[p,n];h+="<div class='mrg'><span>"+n+"</span><i style='--p:"+p+"%'></i><b>"+p+"% <small>("+o[n][1]+")</small></b></div>";});
if(w&&w[0]<80)h+="<p class='pm'>🎯 Para treinar: <b>"+w[1]+"</b> ("+w[0]+"%). Use “Rever o que errei” no quiz.</p>";}
qp.innerHTML=h;}
if(qc){qc.appendChild(qp);qpaint();var qb=$("quizb");qb.addEventListener("toggle",qpaint);qb.addEventListener("click",function(){setTimeout(qpaint,400);});}
/* 2. resumo semanal e metas */
function week(off){var d=new Date(),t=d.getDay()||7,a=new Date(d.getFullYear(),d.getMonth(),d.getDate()-(t-1)-7*off),b=new Date(a.getFullYear(),a.getMonth(),a.getDate()+6);return [ds(a),ds(b)];}
function tally(w){var D=J("maratona-datas",{}),T=window.mrT||[],M=window.mrM||[],n=0,m=0,k,i;for(k in D){if(D[k]>=w[0]&&D[k]<=w[1]){n++;i=T.indexOf(k);if(i>-1)m+=M[i];}}return [n,m];}
window.mrSemN=function(){var D=J("maratona-datas",{}),v=[],k,best=0;for(k in D)if(D[k])v.push(D[k]);v.sort();v.forEach(function(x,i){var a=x.split("-"),t=Date.UTC(+a[0],+a[1]-1,+a[2]),c=0,j;for(j=i;j<v.length;j++){var b=v[j].split("-");if(Date.UTC(+b[0],+b[1]-1,+b[2])-t<=6*864e5)c++;}if(c>best)best=c;});return best;};
window.mrMetaOk=function(){return (J("maratona-meta-hist",[])||[]).length>0;};
var mx=$("mx"),mp=document.createElement("div");mp.id="mrsem";
function spaint(){var w0=week(0),w1=week(1),a=tally(w0),b=tally(w1),meta=J("maratona-meta",2),pc=Math.min(100,Math.round(a[0]/meta*100)),dif=a[0]-b[0];
mp.innerHTML="<h4>📆 Resumo da semana (seg–dom)</h4><p><b>"+a[0]+"</b> título"+(a[0]===1?"":"s")+" · <b>"+fm(a[1])+"</b> assistidos"+(b[0]||a[0]?" <small>("+(dif>0?"+"+dif:dif)+" vs. semana passada)</small>":"")+"</p><div class='mrg'><span>🎯 Meta: <input id='mrmeta' type='number' min='1' max='20' value='"+meta+"' aria-label='Meta de títulos por semana'> por semana</span><i style='--p:"+pc+"%'></i><b>"+Math.min(a[0],99)+"/"+meta+"</b></div>";
var inp=$("mrmeta");if(inp)inp.onchange=function(){S("maratona-meta",Math.max(1,Math.min(20,+inp.value||2)));spaint();};
var h=J("maratona-meta-hist",[]);if(a[0]>=meta&&h.indexOf(w0[0])<0){h.push(w0[0]);S("maratona-meta-hist",h);var t=$("toast");if(t){t.textContent="🎯 Meta da semana cumprida!";t.className="show";setTimeout(function(){t.className="";},3200);}}}
if(mx){mx.insertBefore(mp,mx.firstElementChild.nextSibling);spaint();mx.addEventListener("toggle",spaint);}
/* 3. onde parei (séries) + contador de pós-créditos */
var OND=J("maratona-onde",{});
function dress2(){Array.prototype.forEach.call(document.querySelectorAll("#list li:not([data-on])"),function(li){var b=li.querySelector("button.row");if(!b||li.classList.contains("gh"))return;li.dataset.on="1";var d=b.querySelector(".dur");if(!d||d.textContent.indexOf("📺")<0)return;
var t=b.querySelector(".t").textContent,x=document.createElement("button");x.type="button";x.className="pcs ond";function p(){x.textContent=OND[t]?"📺 Parei em "+OND[t]:"📺 Onde parei?";}p();
x.onclick=function(){var m=/T(\d+)\s*E(\d+)/.exec(OND[t]||"")||[0,"1","1"],sh=$("mrsheet");if(!sh)return;sh.innerHTML="<div class='mrs'><button type='button' class='mrx' aria-label='Fechar'>✕</button><h3>📺 Onde parei</h3><p class='mrt'></p><div class='mrb'><label>Temporada <input id='mrt1' type='number' min='1' value='"+m[1]+"'></label><label>Episódio <input id='mrt2' type='number' min='1' value='"+m[2]+"'></label></div><div class='mrb'><button type='button' id='mrsv'>Salvar</button><button type='button' id='mrcl'>Limpar</button></div></div>";sh.hidden=false;sh.querySelector(".mrt").textContent=t;
$("mrsv").onclick=function(){OND[t]="T"+(+$("mrt1").value||1)+" E"+(+$("mrt2").value||1);S("maratona-onde",OND);p();sh.hidden=true;};$("mrcl").onclick=function(){delete OND[t];S("maratona-onde",OND);p();sh.hidden=true;};};
b.parentNode.insertBefore(x,b.nextSibling);});}
var ul=$("list");if(ul&&window.MutationObserver){new MutationObserver(function(){dress2();}).observe(ul,{childList:true});}dress2();
var bar=document.querySelector(".top .bar"),pcc=document.createElement("div");pcc.id="mrpcc";
function cpaint(){var POS=J("maratona-pos",{}),seen=0,x=0;Array.prototype.forEach.call(document.querySelectorAll("#list li button.row"),function(b){if(b.getAttribute("aria-pressed")==="true"){seen++;if(POS[b.querySelector(".t").textContent])x++;}});
pcc.textContent="🎞️ Pós-créditos: "+x+" de "+seen+" títulos vistos"+(seen>=5&&x===seen?" 🏅 Colecionador!":"");}
window.mrPosN=function(){return Object.keys(J("maratona-pos",{})).length;};
if(bar){bar.parentNode.insertBefore(pcc,bar.nextSibling);cpaint();document.addEventListener("click",function(){setTimeout(function(){cpaint();spaint();},400);});if(ul&&window.MutationObserver)new MutationObserver(cpaint).observe(ul,{attributes:true,subtree:true,attributeFilter:["aria-pressed"]});}
})();

}catch(e){console.error("[extras2] "+(e&&e.stack))}
/* extras3 */
try{
/* Extras 3: letra, Top 10, gráfico de ritmo, transferência por QR/link */
(function(){
function $(i){return document.getElementById(i);}
function J(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v;}catch(e){return d;}}
function S(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function ds(d){return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
function fm(m){var h=Math.floor(m/60),r=m%60;return h?h+"h"+(r?" "+r+"min":""):r+"min";}
function sheet(h){var sh=$("mrsheet");if(!sh)return null;sh.innerHTML='<div class="mrs"><button type="button" class="mrx" aria-label="Fechar">✕</button>'+h+'</div>';sh.hidden=false;return sh;}
/* tamanho da letra */
var FS=J("maratona-fs",0),root=document.documentElement;
function fsApply(){root.classList.remove("fs1","fs2");if(FS)root.classList.add("fs"+FS);Array.prototype.forEach.call(document.querySelectorAll("#mrfs button"),function(b){b.setAttribute("aria-pressed",String(+b.dataset.s===FS));});}
var art=document.querySelector("#cena .art");
if(art){var dt=document.createElement("details");dt.className="plan";dt.innerHTML='<summary>🔠 Tamanho da letra</summary><div class="mrb" id="mrfs"><button type="button" data-s="0">A Normal</button><button type="button" data-s="1">A+ Grande</button><button type="button" data-s="2">A++ Muito grande</button></div>';art.insertBefore(dt,art.firstChild);
dt.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;FS=+b.dataset.s;S("maratona-fs",FS);fsApply();});}
fsApply();
/* Top 10 */
var mx=$("mx"),tp=document.createElement("div"),ch=document.createElement("div");tp.id="mrtop";ch.id="mrch";
function top10(){var R=J("maratona-notas",{}),T=window.mrT||[],a=[],k;for(k in R)if(R[k]>0)a.push([k,R[k],T.indexOf(k)]);a.sort(function(x,y){return y[1]-x[1]||x[2]-y[2];});return a.slice(0,10);}
function tpaint(){var a=top10();tp.innerHTML="<h4>⭐ Meu Top 10</h4>";if(!a.length){tp.insertAdjacentHTML("beforeend","<p class='pm'>Avalie títulos vistos com as estrelas para montar seu Top 10.</p>");return;}
var ol=document.createElement("ol");ol.className="mrl";a.forEach(function(x){var li=document.createElement("li");li.textContent=x[0]+" — "+"★".repeat(x[1]);ol.appendChild(li);});tp.appendChild(ol);
var b=document.createElement("button");b.type="button";b.className="mini";b.textContent="🖼️ Compartilhar Top 10 (imagem)";b.onclick=function(){share(a);};tp.appendChild(b);}
function share(a){var c=document.createElement("canvas");c.width=1080;c.height=1350;var x=c.getContext("2d"),cs=getComputedStyle(root),ac=(cs.getPropertyValue("--ac")||"").trim()||"#3ddc84";
x.fillStyle="#0b0f0c";x.fillRect(0,0,1080,1350);x.fillStyle=ac;x.fillRect(0,0,1080,10);x.fillStyle="#fff";x.font="700 64px sans-serif";x.fillText("Meu Top 10 Marvel",60,130);
a.forEach(function(r,i){var y=250+i*105;x.fillStyle=ac;x.font="700 48px sans-serif";x.fillText(String(i+1),60,y);x.fillStyle="#fff";x.font="600 38px sans-serif";var t=r[0];while(x.measureText(t).width>760&&t.length>4)t=t.slice(0,-2);if(t!==r[0])t+="…";x.fillText(t,140,y-6);x.fillStyle=ac;x.font="32px sans-serif";x.fillText("★".repeat(r[1])+"☆".repeat(5-r[1]),140,y+32);});
x.fillStyle="#9aa";x.font="30px sans-serif";x.fillText("Maratona Marvel",60,1300);
c.toBlob(function(bl){if(!bl)return;var f;try{f=new File([bl],"top10-marvel.png",{type:"image/png"});}catch(e){f=null;}
if(f&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:"Meu Top 10 Marvel"}).catch(function(){});}
else{var u=URL.createObjectURL(bl),l=document.createElement("a");l.href=u;l.download="top10-marvel.png";document.body.appendChild(l);l.click();l.remove();setTimeout(function(){URL.revokeObjectURL(u);},4000);}},"image/png");}
/* gráfico de ritmo */
function wk(off){var d=new Date(),t=d.getDay()||7,a=new Date(d.getFullYear(),d.getMonth(),d.getDate()-(t-1)-7*off),b=new Date(a.getFullYear(),a.getMonth(),a.getDate()+6);return [ds(a),ds(b)];}
function cpaint(){var T=window.mrT||[],M=window.mrM||[],D=J("maratona-datas",{}),meta=J("maratona-meta",2),W=[],i,k,mxv=meta;
for(i=7;i>=0;i--){var w=wk(i),n=0,m=0;for(k in D)if(D[k]>=w[0]&&D[k]<=w[1]){n++;var t=T.indexOf(k);if(t>-1)m+=M[t];}W.push({l:w[0].slice(8)+"/"+w[0].slice(5,7),n:n,m:m});if(n>mxv)mxv=n;}
var bw=30,g=8,h0=100,s='<svg viewBox="0 0 340 150" role="img" aria-label="Títulos por semana nas últimas 8 semanas" style="width:100%;max-width:420px">';
W.forEach(function(x,j){var bh=Math.round(x.n/mxv*h0),px=10+j*(bw+g);s+='<rect x="'+px+'" y="'+(110-bh)+'" width="'+bw+'" height="'+Math.max(bh,2)+'" rx="4" fill="var(--ac,#3c3)" opacity="'+(j===7?1:.6)+'"/><text x="'+(px+bw/2)+'" y="'+(104-bh)+'" text-anchor="middle" font-size="11" fill="currentColor">'+x.n+'</text><text x="'+(px+bw/2)+'" y="126" text-anchor="middle" font-size="9" fill="currentColor">'+x.l+'</text><text x="'+(px+bw/2)+'" y="139" text-anchor="middle" font-size="8" fill="currentColor" opacity=".75">'+Math.round(x.m/60)+'h</text>';});
var my=110-Math.round(meta/mxv*h0);s+='<line x1="6" x2="334" y1="'+my+'" y2="'+my+'" stroke="currentColor" stroke-dasharray="4 4" opacity=".7"/><text x="334" y="'+(my-3)+'" text-anchor="end" font-size="9" fill="currentColor">meta '+meta+'</text></svg>';
var tot=W.reduce(function(a,x){return a+x.n;},0),av=(tot/8).toFixed(1),l=W[7].n,p=W[6].n,tr=l>p?"📈 acelerando":l<p?"📉 desacelerando":"➡️ no mesmo ritmo";
ch.innerHTML="<h4>📊 Ritmo por semana</h4>"+s+"<p class='pm'>Média de "+av+" títulos/semana nas últimas 8 · "+tr+" (barra de cima: títulos; abaixo: data e horas)</p>";}
function all(){tpaint();cpaint();}
if(mx){var ref=$("mrsem")||mx.firstElementChild;mx.insertBefore(ch,ref.nextSibling);mx.insertBefore(tp,ch.nextSibling);all();mx.addEventListener("toggle",all);document.addEventListener("click",function(){setTimeout(all,450);});}
/* transferência por QR/link */
function b64(u8){var s="",i;for(i=0;i<u8.length;i++)s+=String.fromCharCode(u8[i]);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");}
function unb64(s){s=s.replace(/-/g,"+").replace(/_/g,"/");while(s.length%4)s+="=";var b=atob(s),u=new Uint8Array(b.length),i;for(i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u;}
async function pipe(u8,C){var s=new C("deflate-raw"),w=s.writable.getWriter();w.write(u8);w.close();return new Uint8Array(await new Response(s.readable).arrayBuffer());}
async function pack(){$("bg").click();var u=new TextEncoder().encode($("bk").value),z=window.CompressionStream?"z":"r";if(z==="z")u=await pipe(u,CompressionStream);return location.origin+location.pathname+"#t="+z+b64(u);}
async function unpack(c){var u=unb64(c.slice(1));if(c.charAt(0)==="z")u=await pipe(u,DecompressionStream);return new TextDecoder().decode(u);}
function qr(link,box){try{var q=qrcode(0,"L");q.addData(link);q.make();var n=q.getModuleCount(),sz=4,c=document.createElement("canvas"),x;c.width=c.height=(n+8)*sz;x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,c.width,c.height);x.fillStyle="#000";for(var r=0;r<n;r++)for(var k=0;k<n;k++)if(q.isDark(r,k))x.fillRect((k+4)*sz,(r+4)*sz,sz,sz);c.style.cssText="width:100%;max-width:300px;image-rendering:pixelated;border-radius:8px";c.setAttribute("aria-label","QR code do progresso");box.appendChild(c);return true;}catch(e){return false;}}
var bg=$("bg"),bar=bg&&bg.parentNode;
if(bar){var tb=document.createElement("button");tb.type="button";tb.id="mrtr";tb.textContent="📲 Transferir (QR/link)";bar.appendChild(tb);
tb.onclick=async function(){var sh=sheet("<h3>📲 Transferir progresso</h3><p>Gerando…</p>");if(!sh)return;var link;try{link=await pack();}catch(e){sh.querySelector("p").textContent="Não foi possível gerar o link neste aparelho. Use o backup por arquivo.";return;}
sh.querySelector("p").innerHTML="No outro aparelho, escaneie o QR com a câmera (ou abra o link). Ele vai pedir para restaurar. <b>Isso contém seu progresso: não compartilhe publicamente.</b>";var box=document.createElement("div");box.className="mrb";sh.querySelector(".mrs").appendChild(box);
var ok=link.length<=2900&&typeof qrcode==="function"&&qr(link,box);if(!ok){var m=document.createElement("p");m.className="pm";m.textContent="Seu progresso é grande demais para um QR; use o link ou o backup por arquivo.";sh.querySelector(".mrs").appendChild(m);}
var b2=document.createElement("div");b2.className="mrb";b2.innerHTML="<button type='button' id='mrcp'>Copiar link</button><button type='button' id='mrsl'>Compartilhar link</button>";sh.querySelector(".mrs").appendChild(b2);
$("mrcp").onclick=function(){try{navigator.clipboard.writeText(link).then(function(){$("mrcp").textContent="Copiado ✓";});}catch(e){}};$("mrsl").onclick=function(){if(navigator.share)navigator.share({title:"Maratona Marvel",url:link}).catch(function(){});else $("mrcp").click();};};}
if(location.hash.indexOf("#t=")===0){var code=location.hash.slice(3);setTimeout(async function(){var txt;try{txt=await unpack(code);JSON.parse(txt);}catch(e){try{history.replaceState(null,"",location.pathname+location.search);}catch(e){}sheet("<h3>Link inválido</h3><p>Não consegui ler o progresso deste link.</p>");return;}
var sh=sheet("<h3>📲 Progresso recebido</h3><p>Restaurar aqui? Isso <b>substitui</b> o progresso deste aparelho.</p><div class='mrb'><button type='button' id='mrrs'>Restaurar</button><button type='button' id='mrno'>Cancelar</button></div>");
try{history.replaceState(null,"",location.pathname+location.search);}catch(e){}$("mrno").onclick=function(){sh.hidden=true;};$("mrrs").onclick=function(){$("bk").value=txt;$("br").click();sh.hidden=true;};},1200);}
})();

}catch(e){console.error("[extras3] "+(e&&e.stack))}