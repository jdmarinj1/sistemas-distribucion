(function(root){
  'use strict';
  const finite=v=>{if(Object.values(v).some(x=>!Number.isFinite(x)))throw Error('finite');};
  const positive=(...v)=>{if(v.some(x=>x<=0))throw Error('positive');};
  const api={
    factors(v){finite(v);const {installed,peak,sum,energy,hours}=v;positive(installed,peak,sum,hours);if(energy<0||peak>installed||peak>sum||sum>installed||energy>peak*hours)throw Error('range');return {demand:peak/installed,diversity:sum/peak,coincidence:peak/sum,load:energy/(peak*hours),average:energy/hours};},
    group(v){finite(v);const {n,connected,df,diversity}=v;positive(n,connected,diversity);if(!Number.isInteger(n)||df<0||df>1||diversity<1||diversity>n)throw Error('range');return {installed:n*connected,individual:connected*df,group:n*connected*df/diversity};},
    growth(v){finite(v);positive(v.initial,v.final,v.years);const rate=Math.pow(v.final/v.initial,1/v.years)-1;return {rate:100*rate,doubling:rate>0?Math.log(2)/Math.log1p(rate):null};},
    losses(v){finite(v);positive(v.hours);if(v.peak<0||v.factor<0||v.factor>1||v.price<0)throw Error('range');return {average:v.peak*v.factor,energy:v.peak*v.factor*v.hours,cost:v.peak*v.factor*v.hours*v.price};},
    demand(v){finite(v);positive(v.n,v.unit,v.voltage);if(!Number.isInteger(v.n)||v.extra<0||v.pf<=0||v.pf>1)throw Error('range');let kva=v.n*v.unit+v.extra;return {kva,kw:kva*v.pf,current:kva*1000/(Math.sqrt(3)*v.voltage)};},
    overhead(v){finite(v);positive(v.span,v.weight,v.tension,v.height);if(v.angle<0||v.angle>180)throw Error('range');let sag=v.weight*v.span*v.span/(8*v.tension);return {sag,clearance:v.height-sag,transverse:2*v.tension*Math.sin(v.angle*Math.PI/360)};},
    duct(v){finite(v);positive(v.inside,v.phase,v.neutral);return {occupied:100*(3*v.phase*v.phase+v.neutral*v.neutral)/(v.inside*v.inside),free:100-100*(3*v.phase*v.phase+v.neutral*v.neutral)/(v.inside*v.inside)};},
    secondary(v){finite(v);positive(v.length);if(v.depth<0||v.width<0||v.fall<0)throw Error('range');return {slope:100*v.fall/v.length,depth:v.depth,width:v.width};}
  };
  if(typeof module!=='undefined')module.exports=api;else root.DESIGN=api;
})(typeof window==='undefined'?globalThis:window);
