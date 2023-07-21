import{B as l,bd as v,be as w,ba as p,bb as g,bc as h}from"./index-2bbcbeed.js";function k(a,o,s){function e(i,t){var n;const r=i;return(n=t.validators)==null?void 0:n.find(c=>c.name===r)}return a.map(i=>{const t=o.find(r=>r.delegation.validator_address===i.operator_address);return{validator:i,userDelegations:t,undelagatingInfo:e(i.operator_address,s)}})}const x=a=>{let o=l.from("0");return a.forEach(s=>{s.balance.denom.includes("aalthea")&&(o=o.add(s.balance.amount))}),o};async function D(a){const o=a+"/althea/inflation/v1/epoch_mint_provision",s=a+"/cosmos/staking/v1beta1/pool",e={method:"GET",headers:{Accept:"application/json"}},i=await fetch(s,e).then(n=>n.json()).then(n=>parseFloat(n.pool.bonded_tokens)).catch(()=>0);let r=await fetch(o,e).then(n=>n.json()).then(n=>parseFloat(n.epoch_mint_provision.amount)).catch(()=>0)/i;return r*=365*100,r.toFixed(3)}const f="application/json";async function y(a,o,s,e,i,t,r){const n=await p(a,e),c={validatorAddress:o,amount:s,denom:"aalthea"},d=g.createTxMsgDelegate(t,n,i,r,c);return await h(d,n,t,e,a)}async function S(a,o,s,e,i,t,r){const n=await p(a,e),c={validatorAddress:o,amount:s,denom:"aalthea"},d=g.createTxMsgUndelegate(t,n,i,r,c);return await h(d,n,t,e,a)}async function G(a,o,s,e,i,t,r,n){const c=await p(a,s),d={validatorSrcAddress:r,validatorDstAddress:n,amount:o,denom:"aalthea"},u=g.createTxMsgBeginRedelegate(i,c,e,t,d);return await h(u,c,i,s,a)}async function O(a,o,s,e,i,t){const r={validatorAddresses:Array.from(t.map(d=>d.validator.operator_address))},n=await p(a,o),c=g.createTxMsgMultipleWithdrawDelegatorReward(e,n,s,i,r);return await h(c,n,e,o,a)}async function R(a,o){const s=await v(o,a),e=a+w.generateEndpointGetDelegations(s);return await fetch(e,{method:"GET",headers:{Accept:f}}).then(t=>t.json()).then(t=>t.delegation_responses).catch(t=>(console.log(t),[]))}async function M(a,o){const s=await v(o,a),e=a+w.generateEndpointGetUndelegations(s);return await fetch(e,{method:"GET",headers:{Accept:f}}).then(t=>t.json()).then(t=>{let r={},n=[],c=l.from("0");return t.unbonding_responses.forEach(d=>{let u={},b=l.from("0");const{entries:A,validator_address:T}=d;u.name=T;let j=[];A.forEach(m=>{let _={};_.complete_time_stamp=m.completion_time,_.value_of_coin=l.from(m.balance),j.push(_),b=b.add(l.from(m.balance)),c=c.add(l.from(m.balance))}),u.lockouts=j,u.validator_unbonding=b,n.push(u)}),r.total_unbonding=c,r.validators=n,r}).catch(t=>(console.log(t),{total_unbonding:l.from("0")}))}async function B(a){const o=a+"/cosmos/staking/v1beta1/validators?pagination.limit=300";return await fetch(o,{method:"GET",headers:{Accept:f}}).then(e=>e.json()).then(e=>e.validators).catch(e=>(console.log(e),[]))}async function C(a,o){const s=await v(o,a),e=a+w.generateEndpointDistributionRewardsByAddress(s);return await fetch(e,{method:"GET",headers:{Accept:f}}).then(t=>t.json()).then(t=>{let r=l.from("0");return t.total.forEach(n=>{n.denom.includes("aalthea")&&(r=l.from(n.amount.split(".")[0]))}),r}).catch(t=>(console.log(t),l.from("0")))}export{y as a,S as b,G as c,R as d,C as e,M as f,k as g,B as h,D as i,x as j,O as t};
