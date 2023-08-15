import{B as u,aN as v,aO as y,aK as h,aL as g,aM as f}from"./index-1ca1c5bf.js";import{d as A,b}from"./index-210b90ae.js";function R(a,e,r){function n(c,o){var s;const i=c;return(s=o.validators)==null?void 0:s.find(t=>t.name===i)}return a.map(c=>{const o=e.find(i=>i.delegation.validator_address===c.operator_address);return{validator:c,userDelegations:o,undelagatingInfo:n(c.operator_address,r)}})}const $=a=>{let e=u.from("0");return a.forEach(r=>{r.balance.denom.includes("aalthea")&&(e=e.add(r.balance.amount))}),e};async function O(a){const e=a+"/cosmos/mint/v1beta1/annual_provisions",r=a+"/cosmos/staking/v1beta1/pool",n={method:"GET",headers:{Accept:"application/json"}},c=await fetch(r,n).then(s=>s.json()).then(s=>parseFloat(s.pool.bonded_tokens)).catch(()=>0);return(await fetch(e,n).then(s=>s.json()).then(s=>parseFloat(s.annual_provisions)).catch(()=>0)/c*100).toFixed(2)}async function j(a){const e=`${a}/cosmos/staking/v1beta1/validators`,r={method:"GET",headers:{Accept:"application/json"}};let n=[],c=[];try{(await(await fetch(e,r)).json()).validators.forEach(s=>{const t={operator_address:s.operator_address,moniker:s.description.moniker,commission:s.commission.commission_rates.rate,tokens:s.tokens};s.jailed?n.push(t):c.push(t)})}catch(o){console.error("Error fetching validators:",o)}return{jailed:n,notJailed:c}}async function V(a,e){var r;try{const c="althea"+"valcons",o={method:"GET",headers:{Accept:"application/json"}},i=`${e}/cosmos/staking/v1beta1/validators/${a}`,s=await fetch(i,o),{validator:t}=await s.json(),l=(r=t==null?void 0:t.consensus_pubkey)==null?void 0:r.key;if(l){const d=A.sha256(b.fromBase64(l)).slice(0,20);return b.toBech32(c,d)}return""}catch(n){return console.error("Error in getValconsAddressForValidator:",n),""}}async function x(a){const e=(await j(a)).notJailed,n="althea"+"valcons",c={method:"GET",headers:{Accept:"application/json"}},o=e.map(async t=>{var m;const l=`${a}/cosmos/staking/v1beta1/validators/${t.operator_address}`,d=await fetch(l,c).catch(p=>console.error("Error fetching consensus key:",p));if(d!=null&&d.ok){const{validator:p}=await d.json();return(m=p==null?void 0:p.consensus_pubkey)==null?void 0:m.key}return null});return(await Promise.all(o)).filter(Boolean).map(t=>{const l=A.sha256(b.fromBase64(t)).slice(0,20);return b.toBech32(n,l)})}async function B(a){const e=await x(a),r={method:"GET",headers:{Accept:"application/json"}},n=e.map(async i=>{const s=`${a}/cosmos/slashing/v1beta1/signing_infos/${i}`;return(await fetch(s,r)).json()}),c=await Promise.all(n);let o={};return c.forEach((i,s)=>{const t=e[s];if(i.val_signing_info){const{tombstoned:l,missed_blocks_counter:d}=i.val_signing_info,m=parseInt(d,10);o[t]={tombstoned:l,missedBlocks:m}}else o[t]={tombstoned:null,missedBlocks:null}}),o}async function D(a){const e=(await j(a)).notJailed,r={method:"GET",headers:{Accept:"application/json"}},n=e.map(async o=>{const i=`${a}/cosmos/distribution/v1beta1/validators/${o.operator_address}/slashes`,t=await(await fetch(i,r)).json();return{validator:o.operator_address,slashes:t.slashes&&t.slashes.length>0?t.slashes:[]}});return{slashings:await Promise.all(n)}}async function S(a){try{const{notJailed:e}=await j(a),r={};await Promise.all(e.map(async s=>{const t=await V(s.operator_address,a);r[s.operator_address]=t}));const[n,c]=await Promise.all([B(a),D(a)]),o={};c.slashings.forEach(s=>{o[s.validator]=s.slashes.length});const i=e.map(s=>{const t=r[s.operator_address],l=n[t];return{moniker:s.moniker,operator_address:s.operator_address,tokens:s.tokens,commission:s.commission,valcons_address:t,missedBlocks:(l==null?void 0:l.missedBlocks)||0,tombstoned:(l==null?void 0:l.tombstoned)||!1,slashings:o[s.operator_address]||0,score:0,trueRank:0}});return i.sort((s,t)=>parseFloat(t.tokens)-parseFloat(s.tokens)).forEach((s,t)=>{s.trueRank=t+1}),i}catch(e){return console.error("Error in getValidatorsInfo:",e),[]}}async function F(a){const e=await S(a),r=e.reduce((s,t)=>s+parseFloat(t.commission),0)/e.length;e.forEach(s=>{let t=0;const l=r-parseFloat(s.commission);l<0?t-=Math.abs(l):t+=l,s.missedBlocks<=500?t+=5:t-=s.missedBlocks-500,s.slashings>1?t-=(s.slashings-1)*5:s.slashings===0&&(t+=5),s.score=t});const n=[...e].sort((s,t)=>parseFloat(t.tokens)-parseFloat(s.tokens)).slice(0,10),c=new Set(n.map(s=>s.operator_address));return e.filter(s=>!c.has(s.operator_address)).sort((s,t)=>t.score-s.score).slice(0,10)}const k="application/json";async function J(a,e,r,n,c,o,i){const s=await h(a,n),t={validatorAddress:e,amount:r,denom:"aalthea"},l=g.createTxMsgDelegate(o,s,c,i,t);return await f(l,s,o,n,a)}async function C(a,e,r,n,c,o){const i=await h(a,r),s=await F(r),t=e/s.length,l=s.map(d=>g.createTxMsgDelegate(c,i,n,o,{validatorAddress:d.operator_address,amount:t,denom:"aalthea"}));return console.log(l,i,c,r,a),await f(l,i,c,r,a)}async function U(a,e,r,n,c,o,i){const s=await h(a,n),t={validatorAddress:e,amount:r,denom:"aalthea"},l=g.createTxMsgUndelegate(o,s,c,i,t);return await f(l,s,o,n,a)}async function K(a,e,r,n,c,o,i,s){const t=await h(a,r),l={validatorSrcAddress:i,validatorDstAddress:s,amount:e,denom:"aalthea"},d=g.createTxMsgBeginRedelegate(c,t,n,o,l);return await f(d,t,c,r,a)}async function N(a,e,r,n,c,o){const i={validatorAddresses:Array.from(o.map(l=>l.validator.operator_address))},s=await h(a,e),t=g.createTxMsgMultipleWithdrawDelegatorReward(n,s,r,c,i);return await f(t,s,n,e,a)}async function P(a,e){const r=await v(e,a),n=a+y.generateEndpointGetDelegations(r);return await fetch(n,{method:"GET",headers:{Accept:k}}).then(o=>o.json()).then(o=>o.delegation_responses).catch(o=>(console.log(o),[]))}async function L(a,e){const r=await v(e,a),n=a+y.generateEndpointGetUndelegations(r);return await fetch(n,{method:"GET",headers:{Accept:k}}).then(o=>o.json()).then(o=>{let i={},s=[],t=u.from("0");return o.unbonding_responses.forEach(l=>{let d={},m=u.from("0");const{entries:p,validator_address:T}=l;d.name=T;let E=[];p.forEach(_=>{let w={};w.complete_time_stamp=_.completion_time,w.value_of_coin=u.from(_.balance),E.push(w),m=m.add(u.from(_.balance)),t=t.add(u.from(_.balance))}),d.lockouts=E,d.validator_unbonding=m,s.push(d)}),i.total_unbonding=t,i.validators=s,i}).catch(o=>(console.log(o),{total_unbonding:u.from("0")}))}async function H(a){const e=a+"/cosmos/staking/v1beta1/validators?pagination.limit=300";return await fetch(e,{method:"GET",headers:{Accept:k}}).then(n=>n.json()).then(n=>n.validators).catch(n=>(console.log(n),[]))}async function W(a,e){const r=await v(e,a),n=a+y.generateEndpointDistributionRewardsByAddress(r);return await fetch(n,{method:"GET",headers:{Accept:k}}).then(o=>o.json()).then(o=>{let i=u.from("0");return o.total.forEach(s=>{s.denom.includes("aalthea")&&(i=u.from(s.amount.split(".")[0]))}),i}).catch(o=>(console.log(o),u.from("0")))}export{J as a,U as b,C as c,K as d,R as e,P as f,F as g,W as h,L as i,H as j,O as k,$ as l,N as t};
