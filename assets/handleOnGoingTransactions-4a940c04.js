import{D as l,ap as N,b3 as b,b4 as E,B as c,u as m,b5 as R,H as A,j as y,aK as T,p as o,ay as g,b6 as h,b0 as L,af as S,aE as x,M as I,aZ as C,y as P}from"./index-349b3f63.js";import{T as v,_ as M,c as O}from"./ongoingTxModal-77162024.js";function W(t,e){const r=l.useRef(t);l.useEffect(()=>{r.current=t},[t]),l.useEffect(()=>{if(e===null)return;const n=setInterval(()=>r.current(),e);return()=>clearInterval(n)},[e])}function U(t,e){if(e===0)return[];const r=n=>Date.now()-n;return t.filter(n=>r(n.submittedAt)>=e)}function j(){const{chainId:t,account:e}=N(),{addNotification:r,notifications:n,removeNotification:a}=b(),{notifications:{checkInterval:s,expirationPeriod:i}}=E(),u=l.useMemo(()=>{var f;return t===void 0||!e?[]:(f=n[t])!==null&&f!==void 0?f:[]},[n,t,e]);return W(()=>{if(!t)return;const f=U(u,i);for(const d of f)a({notificationId:d.id,chainId:t})},s),{notifications:u,addNotification:r,removeNotification:a}}const F="/assets/note-8bd9da34.svg";function G(t,e){return!t||!e?[c.from(1),!0]:t.gte(e)?[t.mul(c.from(10).pow(18)).div(e),!0]:[e.mul(c.from(10).pow(18)).div(t),!1]}function D(t,e,r){return r?t.mul(c.from(10).pow(18)).div(e):t.mul(e).div(c.from(10).pow(18))}function Z(t,e,r){return r?t.mul(e).div(c.from(10).pow(18)):t.mul(c.from(10).pow(18)).div(e)}function K(t,e,r){return m.formatUnits(r.mul(m.parseUnits(R(t.toString()))).add(e.mul(c.from(10).pow(18))).div(r.add(e)).mul(100))}function q(t,e,r,n){const a=Z(e,r,n);return a.gt(t)?t:a}function J(t,e,r,n){const a=D(t,r,n);return a.gt(e)?e:a}function Q(t,e,r,n){return e?1/Number(m.formatUnits(t,18+r-n)):Number(m.formatUnits(t,18+n-r))}function X(t,e){return e.mul(t).div(c.from(10).pow(18))}function z(t,e){if(e<=0||isNaN(e))return c.from(0);const r=m.parseUnits(A(e.toString(),18),18);return t.mul(r).div(m.parseUnits("1",20))}function tt(t){return`${t.stable?"s":"v"}-${t.token1.symbol}/${t.token2.symbol}`}const et=({width:t,height:e,padding:r,token:n})=>((!e||!t)&&(t=20),r||(r=4),y("img",{src:n=="canto"?T:F,width:t,style:{padding:`0 ${r+"px"}`},height:e,alt:"note token"}));async function rt(t,e,r,n,a,s){if(!r)return e.setStatus({error:"No account found"}),!1;const i=s.lte(a),u=[];return i&&u.push({chainId:t,txType:o.DRIP,address:g(t).Reservoir,abi:h,method:"drip",params:[],value:"0"}),u.push({chainId:t,txType:o.CLAIM_REWARDS_LENDING,address:n,abi:L,method:"claimComp",params:[r],value:"0",extraDetails:{symbol:"WCANTO",icon:S.cantoMainnet.CANTO.icon,amount:m.formatUnits(a,18)}}),await e.addTransactionList(u,{title:"Claim Lending Rewards",txListMethod:v.EVM,chainId:t})}async function nt(t,e,r,n,a){if(!t)return e.setStatus({error:"No chainId found"}),!1;const s=n.data.underlying.symbol==="CANTO",i={symbol:n.data.underlying.symbol,icon:n.data.underlying.icon,amount:m.formatUnits(a,n.data.underlying.decimals)},u=[];switch(r){case o.SUPPLY:case o.REPAY:case o.BORROW:case o.WITHDRAW:(r===o.SUPPLY||r===o.REPAY)&&!s&&u.push(M(t,n.data.underlying.address,n.data.address,a,n.allowance,i)),u.push(Y(t,r,n.data.address,s,a,i));break;case o.COLLATERALIZE:case o.DECOLLATERLIZE:u.push(_(t,g(t).Comptroller,n.data.address,r===o.COLLATERALIZE,i));break;default:return!1}return await e.addTransactionList(u,{title:r,txListMethod:v.EVM,chainId:t})}const Y=(t,e,r,n,a,s)=>({chainId:t,txType:e,address:r,abi:x,method:k(e,n),...$(e,n,a),extraDetails:s}),_=(t,e,r,n,a)=>({chainId:t,txType:n?o.COLLATERALIZE:o.DECOLLATERLIZE,address:e,abi:L,method:n?"enterMarkets":"exitMarket",params:n?[[r]]:[r],value:"0",extraDetails:a});function k(t,e){switch(t){case o.SUPPLY:return e?"mint()":"mint(uint256)";case o.REPAY:return e?"repayBorrow()":"repayBorrow(uint256)";case o.BORROW:return"borrow";case o.WITHDRAW:return"redeem";default:return""}}function $(t,e,r){switch(t){case o.SUPPLY:case o.REPAY:return e?{params:[],value:r}:{params:[r],value:"0"};case o.BORROW:case o.WITHDRAW:return{params:[r],value:"0"};default:return{params:[],value:"0"}}}function at(t,e){return t.mul(e).div(c.from(10).pow(18))}function p(t,e,r,n,a){if(r.isZero()||a.isZero())return I;if(n==0)return c.from(0);const s=e.sub(t.mul(100).div(n)).mul(c.from(10).pow(36)).div(r.mul(a));return s.isNegative()?c.from(0):s}function st(t,e,r,n,a,s){return t.isZero()?!1:p(t,e,r,n,s).lt(a)}function H(t,e,r,n,a){const i=e.mul(n).div(c.from(10).pow(18)).mul(r).div(c.from(10).pow(18)),u=t?a.add(i):a.sub(i);return u.gte(0)?u:c.from(0)}function ot(t,e,r,n,a,s){const i=H(t,e,r,n,a);return i.lte(0)?0:C(s,i)}function it(t,e,r,n,a,s){if(s){const i=p(e,r,n,80,a),u=p(e,r,n,100,a),f=t.lte(i),d=t.lte(u);return f?[t,t,!0]:d?[i,t,!1]:[i,u,!1]}else return[t,t,!0]}const ut=(t,e,r)=>{l.useEffect(()=>{let n=e;for(const a of t)a.type=="transactionStarted"&&!n.find(s=>s.id==a.id)?n.push({...a}):(a.type=="transactionSucceed"||a.type=="transactionFailed")&&(n=n.filter(s=>!(s.type=="transactionStarted"&&s.transaction.hash==a.transaction.hash))),r(n);t.map((a,s)=>{var i;if((i=a==null?void 0:a.transactionName)!=null&&i.includes("type")&&a.type=="transactionSucceed"||a.type=="transactionFailed"){const u=a.type!="transactionFailed",f=JSON.parse(a==null?void 0:a.transactionName),d=O(s.toString(),f.type).messages.long,w=`${u?"":"un"}successfully ${d}`;P(w,u,a.id)}})},[t])};export{et as T,Y as _,q as a,D as b,J as c,Z as d,z as e,tt as f,Q as g,K as h,G as i,at as j,ut as k,nt as l,rt as m,F as n,H as o,ot as p,it as q,j as u,X as v,st as w};
