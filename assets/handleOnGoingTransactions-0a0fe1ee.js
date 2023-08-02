import{D as p,ap as U,b1 as W,b2 as O,B as f,u as m,b3 as M,H as g,j as i,aV as T,m as d,ay as A,b4 as B,a_ as E,ag as Y,aE as D,M as H,aX as Z,n as x,a4 as P,a as u,T as w,aZ as L,av as N,aK as _,F as q,y as $}from"./index-c5e15b65.js";import{T as R,_ as z,c as V}from"./ongoingTxModal-7dd0b1e5.js";import{T as S}from"./Styled-e982b51a.js";import{d as j}from"./down-f11b2b90.js";function X(t,e){const r=p.useRef(t);p.useEffect(()=>{r.current=t},[t]),p.useEffect(()=>{if(e===null)return;const a=setInterval(()=>r.current(),e);return()=>clearInterval(a)},[e])}function G(t,e){if(e===0)return[];const r=a=>Date.now()-a;return t.filter(a=>r(a.submittedAt)>=e)}function ht(){const{chainId:t,account:e}=U(),{addNotification:r,notifications:a,removeNotification:n}=W(),{notifications:{checkInterval:s,expirationPeriod:l}}=O(),c=p.useMemo(()=>{var o;return t===void 0||!e?[]:(o=a[t])!==null&&o!==void 0?o:[]},[a,t,e]);return X(()=>{if(!t)return;const o=G(c,l);for(const h of o)n({notificationId:h.id,chainId:t})},s),{notifications:c,addNotification:r,removeNotification:n}}const K="/althea-app/assets/note-6c6dc727.svg";function bt(t,e){return!t||!e?[f.from(1),!0]:t.gte(e)?[t.mul(f.from(10).pow(18)).div(e),!0]:[e.mul(f.from(10).pow(18)).div(t),!1]}function J(t,e,r){return r?t.mul(f.from(10).pow(18)).div(e):t.mul(e).div(f.from(10).pow(18))}function Q(t,e,r){return r?t.mul(e).div(f.from(10).pow(18)):t.mul(f.from(10).pow(18)).div(e)}function pt(t,e,r){return m.formatUnits(r.mul(m.parseUnits(M(t.toString()))).add(e.mul(f.from(10).pow(18))).div(r.add(e)).mul(100))}function gt(t,e,r,a){const n=Q(e,r,a);return n.gt(t)?t:n}function yt(t,e,r,a){const n=J(t,r,a);return n.gt(e)?e:n}function xt(t,e,r,a){return e?1/Number(m.formatUnits(t,18+r-a)):Number(m.formatUnits(t,18+a-r))}function wt(t,e){return e.mul(t).div(f.from(10).pow(18))}function Nt(t,e){if(e<=0||isNaN(e))return f.from(0);const r=m.parseUnits(g(e.toString(),18),18);return t.mul(r).div(m.parseUnits("1",20))}function vt(t){return`${t.stable?"s":"v"}-${t.token1.symbol}/${t.token2.symbol}`}const Ct=({width:t,height:e,padding:r,token:a})=>((!e||!t)&&(t=20),r||(r=4),i("img",{src:a=="althea"?T:K,width:t,style:{padding:`0 ${r+"px"}`},height:e,alt:"note token"}));async function Lt(t,e,r,a,n,s){if(!r)return e.setStatus({error:"No account found"}),!1;const l=s.lte(n),c=[];return l&&c.push({chainId:t,txType:d.DRIP,address:A(t).Reservoir,abi:B,method:"drip",params:[],value:"0"}),c.push({chainId:t,txType:d.CLAIM_REWARDS_LENDING,address:a,abi:E,method:"claimComp",params:[r],value:"0",extraDetails:{symbol:"WALTHEA",icon:Y.altheaMainnet.ALTHEA.icon,amount:m.formatUnits(n,18)}}),await e.addTransactionList(c,{title:"Claim Lending Rewards",txListMethod:R.EVM,chainId:t})}async function Tt(t,e,r,a,n){if(!t)return e.setStatus({error:"No chainId found"}),!1;const s=a.data.underlying.symbol==="ALTHEA",l={symbol:a.data.underlying.symbol,icon:a.data.underlying.icon,amount:m.formatUnits(n,a.data.underlying.decimals)},c=[];switch(r){case d.SUPPLY:case d.REPAY:case d.BORROW:case d.WITHDRAW:(r===d.SUPPLY||r===d.REPAY)&&!s&&c.push(z(t,a.data.underlying.address,a.data.address,n,a.allowance,l)),c.push(tt(t,r,a.data.address,s,n,l));break;case d.COLLATERALIZE:case d.DECOLLATERLIZE:c.push(et(t,A(t).Comptroller,a.data.address,r===d.COLLATERALIZE,l));break;default:return!1}return await e.addTransactionList(c,{title:r,txListMethod:R.EVM,chainId:t})}const tt=(t,e,r,a,n,s)=>({chainId:t,txType:e,address:r,abi:D,method:rt(e,a),...at(e,a,n),extraDetails:s}),et=(t,e,r,a,n)=>({chainId:t,txType:a?d.COLLATERALIZE:d.DECOLLATERLIZE,address:e,abi:E,method:a?"enterMarkets":"exitMarket",params:a?[[r]]:[r],value:"0",extraDetails:n});function rt(t,e){switch(t){case d.SUPPLY:return e?"mint()":"mint(uint256)";case d.REPAY:return e?"repayBorrow()":"repayBorrow(uint256)";case d.BORROW:return"borrow";case d.WITHDRAW:return"redeem";default:return""}}function at(t,e,r){switch(t){case d.SUPPLY:case d.REPAY:return e?{params:[],value:r}:{params:[r],value:"0"};case d.BORROW:case d.WITHDRAW:return{params:[r],value:"0"};default:return{params:[],value:"0"}}}function At(t,e){return t.mul(e).div(f.from(10).pow(18))}function v(t,e,r,a,n){if(r.isZero()||n.isZero())return H;if(a==0)return f.from(0);const s=e.sub(t.mul(100).div(a)).mul(f.from(10).pow(36)).div(r.mul(n));return s.isNegative()?f.from(0):s}function Et(t,e,r,a,n,s){return t.isZero()?!1:v(t,e,r,a,s).lt(n)}function ot(t,e,r,a,n){const l=e.mul(a).div(f.from(10).pow(18)).mul(r).div(f.from(10).pow(18)),c=t?n.add(l):n.sub(l);return c.gte(0)?c:f.from(0)}function Pt(t,e,r,a,n,s){const l=ot(t,e,r,a,n);return l.lte(0)?0:Z(s,l)}function Rt(t,e,r,a,n,s){if(s){const l=v(e,r,a,80,n),c=v(e,r,a,100,n),o=t.lte(l),h=t.lte(c);return o?[t,t,!0]:h?[l,t,!1]:[l,c,!1]}else return[t,t,!0]}const k=x.label`
  /* The switch - the box around the slider */
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 52px;
  height: 28px;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: var(--primary-color);
      &:before {
        background-color: black;
        border-radius: 50%;
        bottom: 3px;
      }

      &:hover {
        background-color: #06fc9ad7;
      }
      &:active {
        background-color: #053723;
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px var(--primary-color);
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;

    &:hover {
      background-color: #13c27c3c;
    }
    &:active {
      background-color: #0e47304f;
    }
    border: 1px solid var(--primary-color);

    border-radius: 4px;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 3px;
      background-color: var(--primary-color);
      -webkit-transition: 0.2s;
      transition: 0.2s;
      border-radius: 50%;
    }
  }
`,nt=x(k)`
  input {
    &:checked + .slider {
      background-color: #333;
      &:before {
        background-color: black;
      }

      &:hover {
        background-color: #0f4c34;
      }
      &:active {
        background-color: #053723;
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #333;
    }
  }

  /* The slider */
  .slider {
    background-color: black;

    &:hover {
      background-color: #737373;
    }
    &:active {
      background-color: #909090;
    }
    border: 1px solid #333;
    &:before {
      background-color: #333;
    }
  }
`,it=t=>t.disabled?i(P,{trigger:u(nt,{className:"switch","data-for":"foo",children:[i("input",{type:"checkbox",checked:t.checked}),i("span",{className:"slider"})]}),position:"bottom center",on:["hover","focus"],arrow:!0,arrowStyle:{color:"rgba(217, 217, 217, 0.25)",backdropFilter:"blur(35px)"},children:i(S,{children:u(w,{type:"text",size:"text4",children:["this asset cannot",i("br",{})," be collateralised"]})})}):u(k,{className:"switch",onClick:e=>{e.stopPropagation()},children:[i("input",{type:"checkbox",checked:t.checked,onChange:()=>{t.onChange()}}),i("span",{className:"slider"})]}),C=({top:t,bottom:e})=>u("div",{style:{display:"flex",flexDirection:"column",lineHeight:"1.5rem"},children:[i("p",{children:t}),i("p",{style:{opacity:.5},children:e})]}),st=t=>u("tr",{onClick:t.onClick,children:[u("td",{children:[i("img",{src:t.assetIcon,alt:""})," ",i("span",{children:t.assetName})]}),i("td",{children:t.apy+" %"}),t.borrowing?u(L.Fragment,{children:[i("td",{children:i(C,{top:t.amount,bottom:N+t.amountInNote})}),i("td",{children:t.liquidity.toFixed(0)+" %"})]}):u(L.Fragment,{children:[i("td",{children:t.amount}),t.assetName=="NOTE"?u("td",{children:[" ",i(P,{trigger:i("span",{children:"N/A"}),position:"bottom center",on:["hover","focus"],arrow:!0,arrowStyle:{color:"rgba(217, 217, 217, 0.25)",backdropFilter:"blur(35px)"},children:i(S,{children:u(w,{type:"text",size:"text4",children:["this asset cannot",i("br",{})," be collateralised"]})})})]}):u("td",{children:[N,_(t.liquidity)]})]})]}),lt=t=>u("tr",{onClick:t.onClick,children:[u("td",{children:[i("img",{style:{padding:t.assetName.slice(-2)=="LP"?"0":"0 10px"},src:t.assetIcon,alt:""})," ",i("span",{children:t.assetName})]}),i("td",{children:i(C,{top:t.apy+" %",bottom:t.distAPY+"%"})}),t.supplying?u(q,{children:[u("td",{children:[Number(t.rewards).toFixed(2)," ",i("img",{src:T,alt:"althea",style:{height:"14px",paddingTop:"3px"}})]}),i("td",{children:i(C,{top:t.amount,bottom:N+t.amountInNote})})]}):i("td",{children:t.amount}),i("td",{children:i(it,{checked:t.collateral??!1,disabled:!t.collaterable,onChange:()=>{t.onToggle(!t.collateral)}})})]}),St=t=>u("tr",{onClick:t.onClick,children:[u("td",{children:[i("img",{src:t.icon})," ",i("span",{children:t.name})]}),i("td",{children:t.status}),i("td",{children:t.date.toDateString()})]});x.td`
  display: table-cell !important;
  text-transform: lowercase !important;
  text-align: center !important;
`;const ct=x.table`
  border: none;
  margin: 0 auto;
  color: var(--primary-color);
  width: calc(100% - 10px);
  text-align: center;
  margin-top: 16px;
  border-spacing: 0 8px;
  border-collapse: separate !important;
  thead {
    text-transform: lowercase;
    font-size: 14px;
  }
  td {
    display: table-cell;
  }
  th {
    padding: 8px;
    font-weight: 400;
    line-height: 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  tr {
    font-size: 14px;
    font-weight: 400;
    line-height: 4rem;
    background-color: black;
    transition: all 0.2s ease;
    position: relative;
  }
  td:first-of-type,
  th:first-of-type {
    padding-left: 2rem;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: uppercase;
  }
  th:first-of-type {
    text-transform: lowercase;
    border-left: 4px solid black;
    border-radius: 4px;
  }

  th:last-of-type {
    border-right: 4px solid black;
    border-radius: 4px;
  }
  img {
    height: 30px;
  }
  tbody {
    td:first-of-type {
      border-left: 4px solid var(--primary-color);
      border-radius: 4px;
      height: 90px;
    }
    td:last-of-type {
      border-right: 4px solid var(--primary-color);
      border-radius: 4px;
    }
    tr {
      height: 90px;
      border: 2px solid green;
    }
    tr:hover {
      background-color: #173428;
      cursor: pointer;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;

    td,
    th {
      display: none;
    }

    th:last-of-type {
      display: table-cell;
    }

    td:last-of-type {
      display: table-cell;
    }
  }
`,I=t=>{const[e,r]=p.useState(!1);return u(ct,{children:[i("thead",{children:i("tr",{children:t.columns.map((a,n)=>u("th",{style:{position:"relative"},onClick:()=>{t.onColumnClicked&&t.onColumnClicked(n),r(!0)},children:[a,e&&n==t.columnClicked?i("img",{src:j,width:"10",style:{position:"absolute",right:"10px",top:"2px"}}):""]},a+(Math.random()+1).toString(36).substring(7)))})}),i("tbody",{children:t.children})]})};function F(t,e){return typeof t=="string"?t.localeCompare(e):typeof t=="number"?e-t:typeof t=="boolean"?t===e?0:t?-1:1:0}const kt=({visible:t,supplying:e,userLMTokens:r,onClick:a,onToggle:n})=>{const[s,l]=p.useState(0),c=e?["asset","apr","rewards","balance","collateral"]:["asset","apr","wallet","collateral"];return r.length==0||!t?null:u("div",{className:"left",children:[i(w,{type:"title",size:"title3",align:"left",children:e?"supplying":"supply market"}),i(I,{columns:c,isLending:!0,onColumnClicked:o=>l(o),columnClicked:s,children:r.map(o=>{const h=e?o.supplyBalance:o.balanceOf;return i(lt,{supplying:e,collaterable:!o.collateralFactor.isZero(),onClick:()=>a(o),assetIcon:o.data.underlying.icon,assetName:o.data.underlying.symbol,apy:o.supplyAPY.toFixed(2),distAPY:o.distAPY.toFixed(2),amount:g(m.formatUnits(h,o.data.underlying.decimals)),amountInNote:g(m.formatUnits(o.supplyBalanceinNote)),symbol:o.data.underlying.symbol,collateral:o.collateral,rewards:g(m.formatUnits(o.rewards)),onToggle:()=>n(o),sortableProps:e?[o.data.underlying.symbol,o.distAPY,Number(m.formatEther(o.rewards)),Number(m.formatEther(o.supplyBalanceinNote)),o.collateral]:[o.data.underlying.symbol,o.distAPY,Number(m.formatUnits(o.balanceOf,o.data.decimals)),o.collateral]},o.data.address+"supplying")}).sort((o,h)=>{var b,y;return F((b=o.props.sortableProps)==null?void 0:b[s],(y=h.props.sortableProps)==null?void 0:y[s])})})]})},It=({visible:t,borrowing:e,userLMTokens:r,position:a,onClick:n})=>{const[s,l]=p.useState(0);return r.length==0||!t?null:u("div",{className:"right",children:[i(w,{type:"title",size:"title3",align:"right",children:e?"borrowing":"borrow market"}),i(I,{columns:e?["asset","apr/accrued","balance","% of limit"]:["asset","apr","wallet","liquidity"],isLending:!1,onColumnClicked:o=>l(o),columnClicked:s,children:r.map(o=>{const h=e?o.borrowBalance:o.balanceOf,b=e?o.borrowBalanceinNote.mul(100).div(a.totalBorrowLimit).toNumber():Number(o.liquidity);return i(st,{borrowing:e,onClick:()=>n(o),assetIcon:o.data.underlying.icon,assetName:o.data.underlying.symbol,apy:o.borrowAPY.toFixed(2),amount:g(m.formatUnits(h,o.data.underlying.decimals)),amountInNote:g(m.formatUnits(o.borrowBalanceinNote)),symbol:o.data.underlying.symbol,liquidity:b,sortableProps:[o.data.underlying.symbol,o.borrowAPY,Number(e?m.formatEther(o.borrowBalanceinNote):m.formatUnits(o.balanceOf,o.data.underlying.decimals)),b]},o.data.address+"borrowed")}).sort((o,h)=>{var b,y;return F((b=o.props.sortableProps)==null?void 0:b[s],(y=h.props.sortableProps)==null?void 0:y[s])})})]})},Ft=(t,e,r)=>{p.useEffect(()=>{let a=e;for(const n of t)n.type=="transactionStarted"&&!a.find(s=>s.id==n.id)?a.push({...n}):(n.type=="transactionSucceed"||n.type=="transactionFailed")&&(a=a.filter(s=>!(s.type=="transactionStarted"&&s.transaction.hash==n.transaction.hash))),r(a);t.map((n,s)=>{var l;if((l=n==null?void 0:n.transactionName)!=null&&l.includes("type")&&n.type=="transactionSucceed"||n.type=="transactionFailed"){const c=n.type!="transactionFailed",o=JSON.parse(n==null?void 0:n.transactionName),h=V(s.toString(),o.type).messages.long,b=`${c?"":"un"}successfully ${h}`;$(b,c,n.id)}})},[t])};export{It as B,I as L,kt as S,Ct as T,tt as _,gt as a,J as b,yt as c,Q as d,Nt as e,vt as f,xt as g,pt as h,bt as i,At as j,Ft as k,Tt as l,Lt as m,K as n,ot as o,Pt as p,Rt as q,St as r,F as s,ht as u,wt as v,Et as w};
