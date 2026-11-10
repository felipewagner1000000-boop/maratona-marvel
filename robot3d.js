/* Robô 3D: arraste para girar; volta suavemente ao centro */
(function(){
var d=document.querySelector(".dm");if(!d)return;
/* mais fatias = volume liso, sem listras */
[".rh",".rt"].forEach(function(s){var r=d.querySelector(s);if(!r)return;var it=[].slice.call(r.children).filter(function(n){return n.tagName==="I"&&n.style.getPropertyValue("--z");});
for(var k=0;k<it.length-1;k++){var z0=parseFloat(it[k].style.getPropertyValue("--z")),z1=parseFloat(it[k+1].style.getPropertyValue("--z")),b0=parseFloat(it[k].style.getPropertyValue("--b")),b1=parseFloat(it[k+1].style.getPropertyValue("--b"));
for(var m=1;m<4;m++){var f=m/4,n=it[k].cloneNode(false);n.style.cssText="--z:"+(z0+(z1-z0)*f).toFixed(2)+"px;--b:"+(b0+(b1-b0)*f).toFixed(3);r.insertBefore(n,it[k+1]);}}});
var hist=[],dzT=0,a=0,t=0,sx=0,st=0,drag=false,moved=false,raf=0,tilt=0,base=null;
function set(){d.style.setProperty("--dry",a.toFixed(1)+"deg");}
function tg(){return drag?t:tilt;}
function loop(){var g=tg();a+=(g-a)*.16;if(Math.abs(a-g)<.3){a=g;set();raf=0;return;}set();raf=requestAnimationFrame(loop);}
function go(){if(!raf)raf=requestAnimationFrame(loop);}
d.addEventListener("pointerdown",function(e){drag=true;moved=false;sx=e.clientX;st=t;try{d.setPointerCapture(e.pointerId);}catch(x){}});
d.addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-sx;if(Math.abs(dx)>6)moved=true;if(!moved)return;d.classList.add("rot");var nt=Math.max(-75,Math.min(75,st+dx*1.1)),nw=Date.now();hist.push([nw,Math.abs(nt-t)]);t=nt;
  while(hist.length&&nw-hist[0][0]>2000)hist.shift();
  var sum=0;for(var i=0;i<hist.length;i++)sum+=hist[i][1];
  var rcl=document.documentElement.classList;
  if(sum>650&&nw-dzT>10000&&!d.classList.contains("r6-diz")&&!rcl.contains("noanim")&&!rcl.contains("eco")){dzT=nw;hist=[];d.classList.add("r6-diz");setTimeout(function(){d.classList.remove("r6-diz");},2900);}
  go();});
function up(){drag=false;d.classList.remove("rot");t=0;go();}
/* inclinar o celular gira o robô (Android: sem pedir permissão) */
var rc=document.documentElement.classList;
window.addEventListener("deviceorientation",function(e){if(drag||document.hidden||rc.contains("noanim")||rc.contains("eco")||(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches))return;var g=e.gamma;if(g==null)return;if(base===null)base=g;base+=(g-base)*.02;tilt=Math.max(-40,Math.min(40,(g-base)*1.3));go();},{passive:true});
d.addEventListener("pointerup",up);d.addEventListener("pointercancel",up);
d.addEventListener("click",function(e){if(moved){e.stopImmediatePropagation();e.preventDefault();moved=false;}},true);
window.__robot3d={set:function(v){t=v;a=v;set();}};
})();
