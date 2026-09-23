(function(root){
  'use strict';
  // Faults remain electrically connected: a fault is not an open switch.
  function assess(edges,sources,fault){
    const adj=new Map();const add=n=>{if(!adj.has(n))adj.set(n,[]);};
    edges.forEach(e=>{add(e.a);add(e.b);if(!e.open){adj.get(e.a).push(e.b);adj.get(e.b).push(e.a);}});
    sources.forEach(s=>add(s.node));let seen=new Set(),live={},parallel=false,faultFed=false;
    for(const node of adj.keys()){if(seen.has(node))continue;const component=[],queue=[node];seen.add(node);while(queue.length){let n=queue.pop();component.push(n);for(const v of adj.get(n)){if(!seen.has(v)){seen.add(v);queue.push(v);}}}
      const active=sources.filter(s=>s.on&&component.includes(s.node));
      const faulty=!!fault&&(component.includes(fault.a)||component.includes(fault.b));
      if(active.length>1)parallel=true;if(active.length&&faulty)faultFed=true;
      // A supplied faulted island is treated as tripped, not as healthy load.
      if(active.length===1&&!faulty)component.forEach(n=>live[n]=active[0].f);
    }
    return {live,parallel,faultFed};
  }
  if(typeof module!=='undefined')module.exports={assess};else root.NETWORK={assess};
})(typeof window==='undefined'?globalThis:window);
