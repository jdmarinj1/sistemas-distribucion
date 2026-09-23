(function(root){
'use strict';
function check(v,lo=0,hi=Infinity,strict=false){if(!Number.isFinite(v)||v<lo||v>hi||(strict&&v===lo))throw Error('range');return v;}
const pos=v=>check(v,0,Infinity,true), fp=v=>check(v,0,1,true);
const E={
 load({energy,peak,hours}){check(energy);pos(peak);pos(hours);if(energy>peak*hours)throw Error('range');return {factor:energy/(peak*hours),average:energy/hours};},
 voltage({v,p,q,r,x}){pos(v);check(p,-Infinity);check(q,-Infinity);check(r);check(x);v*=1000;p*=1000;q*=1000;let drop=(r*p+x*q)/v;return {current:Math.hypot(p,q)/(Math.sqrt(3)*v),drop,percent:100*drop/v,voltage:(v-drop)/1000,loss:r*(p*p+q*q)/(v*v)/1000};},
 transformer({s,p,pf,core,copper}){pos(s);check(p);fp(pf);check(core);check(copper);let k=p/(s*pf),loss=core+k*k*copper;return {loading:100*k,loss,efficiency:p+loss?100*p/(p+loss):null};},
 substation({p,pf,n}){check(p,0);fp(pf);pos(n);if(!Number.isInteger(n))throw Error('range');let total=p/pf;return {total,normal:total/n,contingency:n>1?total/(n-1):null};},
 capacitor({q,l,r,v}){check(q);pos(l);check(r);pos(v);let before=r*l*q*q/(3*v*v*1000);return {bank:2*q/3,position:2*l/3,before,after:before/9,saving:before*8/9};},
 secondary({i,l,r,x,pf,v}){check(i);check(l);check(r);check(x);fp(pf);pos(v);let drop=2*i*l*(r*pf+x*Math.sqrt(1-pf*pf));return {drop,percent:100*drop/v,loss:2*i*i*r*l};},
 sag({w,l,h,tension}){pos(w);pos(l);pos(h);pos(tension);let sag=w*l*l/(8*tension);return {sag,clearance:h-sag,ratio:sag/l};},
 reliability({total,d1,u1,d2,u2}){pos(total);if(!Number.isInteger(total))throw Error('range');[d1,d2].forEach(v=>check(v));[u1,u2].forEach(v=>{check(v,0,total);if(!Number.isInteger(v))throw Error('range');});let saidi=(d1*u1+d2*u2)/total,saifi=(u1+u2)/total;return {saidi,saifi,caidi:saifi?saidi/saifi:null};}
};
if(typeof module!=='undefined')module.exports=E;else root.ENGINE=E;
})(typeof window==='undefined'?globalThis:window);
