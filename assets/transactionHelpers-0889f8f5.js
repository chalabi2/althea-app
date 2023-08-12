import{d as y,b as k}from"./index-dacd8221.js";import{B as u,aL as v,aM as w,aI as m,aJ as f,aK as g}from"./index-22579ada.js";function G(e,s,n){function o(r,t){var a;const i=r;return(a=t.validators)==null?void 0:a.find(c=>c.name===i)}return e.map(r=>{const t=s.find(i=>i.delegation.validator_address===r.operator_address);return{validator:r,userDelegations:t,undelagatingInfo:o(r.operator_address,n)}})}const S=e=>{let s=u.from("0");return e.forEach(n=>{n.balance.denom.includes("aalthea")&&(s=s.add(n.balance.amount))}),s};async function B(e){const s=e+"/cosmos/mint/v1beta1/annual_provisions",n=e+"/cosmos/staking/v1beta1/pool",o={method:"GET",headers:{Accept:"application/json"}},r=await fetch(n,o).then(a=>a.json()).then(a=>parseFloat(a.pool.bonded_tokens)).catch(()=>0);return(await fetch(s,o).then(a=>a.json()).then(a=>parseFloat(a.annual_provisions)).catch(()=>0)/r*100).toFixed(2)}async function T(e){const s=`${e}/cosmos/staking/v1beta1/validators`,n={method:"GET",headers:{Accept:"application/json"}};let o=[],r=[];try{(await(await fetch(s,n)).json()).validators.forEach(a=>{const c={operator_address:a.operator_address,moniker:a.moniker};a.jailed?o.push(c):r.push(c)})}catch(t){console.error("Error fetching validators:",t)}return{jailed:o,notJailed:r}}async function M(e){const s=(await T(e)).notJailed,o="althea"+"valcons",r={method:"GET",headers:{Accept:"application/json"}},t=async a=>{var p;const c=`${e}/cosmos/staking/v1beta1/validators/${a}`,l=await fetch(c,r),{validator:d}=await l.json();return(p=d==null?void 0:d.consensus_pubkey)==null?void 0:p.key},i=[];for(const a of s){const c=await t(a.operator_address);if(c){const l=y.sha256(k.fromBase64(c)).slice(0,20);i.push(k.toBech32(o,l))}}return i}const b="application/json";async function O(e,s,n,o,r,t,i){const a=await m(e,o),c={validatorAddress:s,amount:n,denom:"aalthea"},l=f.createTxMsgDelegate(t,a,r,i,c);return await g(l,a,t,o,e)}async function R(e,s,n,o,r,t,i){const a=await m(e,o),c={validatorAddress:s,amount:n,denom:"aalthea"},l=f.createTxMsgUndelegate(t,a,r,i,c);return await g(l,a,t,o,e)}async function V(e,s,n,o,r,t,i,a){const c=await m(e,n),l={validatorSrcAddress:i,validatorDstAddress:a,amount:s,denom:"aalthea"},d=f.createTxMsgBeginRedelegate(r,c,o,t,l);return await g(d,c,r,n,e)}async function C(e,s,n,o,r,t){const i={validatorAddresses:Array.from(t.map(l=>l.validator.operator_address))},a=await m(e,s),c=f.createTxMsgMultipleWithdrawDelegatorReward(o,a,n,r,i);return await g(c,a,o,s,e)}async function F(e,s){const n=await v(s,e),o=e+w.generateEndpointGetDelegations(n);return await fetch(o,{method:"GET",headers:{Accept:b}}).then(t=>t.json()).then(t=>t.delegation_responses).catch(t=>(console.log(t),[]))}async function J(e,s){const n=await v(s,e),o=e+w.generateEndpointGetUndelegations(n);return await fetch(o,{method:"GET",headers:{Accept:b}}).then(t=>t.json()).then(t=>{let i={},a=[],c=u.from("0");return t.unbonding_responses.forEach(l=>{let d={},p=u.from("0");const{entries:A,validator_address:E}=l;d.name=E;let j=[];A.forEach(h=>{let _={};_.complete_time_stamp=h.completion_time,_.value_of_coin=u.from(h.balance),j.push(_),p=p.add(u.from(h.balance)),c=c.add(u.from(h.balance))}),d.lockouts=j,d.validator_unbonding=p,a.push(d)}),i.total_unbonding=c,i.validators=a,i}).catch(t=>(console.log(t),{total_unbonding:u.from("0")}))}async function U(e){const s=e+"/cosmos/staking/v1beta1/validators?pagination.limit=300";return await fetch(s,{method:"GET",headers:{Accept:b}}).then(o=>o.json()).then(o=>o.validators).catch(o=>(console.log(o),[]))}async function $(e,s){const n=await v(s,e),o=e+w.generateEndpointDistributionRewardsByAddress(n);return await fetch(o,{method:"GET",headers:{Accept:b}}).then(t=>t.json()).then(t=>{let i=u.from("0");return t.total.forEach(a=>{a.denom.includes("aalthea")&&(i=u.from(a.amount.split(".")[0]))}),i}).catch(t=>(console.log(t),u.from("0")))}export{O as a,R as b,V as c,T as d,M as e,F as f,G as g,$ as h,J as i,U as j,B as k,S as l,C as t};
