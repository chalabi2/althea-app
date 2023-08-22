import{l as Y,S as le,d as Z,T as ee,a as te,b as B,c as R}from"./selected-2754dd42.js";import{ae as se,n as y,D as u,al as Le,a as i,j as e,T as g,am as re,B as L,an as de,u as f,Y as ce,ao as ze,H as M,ap as J,aq as je,ah as Be,a2 as Re,a3 as Ue,ak as Fe,F as H,I as X,ar as me,L as ue,P as W,Q as Pe,m as P,i as C,f as G,as as Oe,Z as he,z as $,at as pe,au as ge,R as ae,av as Ge,aw as Qe,N as oe,J as $e,ax as We}from"./index-51840080.js";import{g as He,t as Ke,a as qe,b as Ye,c as Je,d as Xe,e as Ze,f as fe,h as et,i as tt,j as at,k as rt,l as ot,m as nt}from"./transactionHelpers-15b50d4e.js";import{h as it}from"./moment-7785d891.js";import{T as K,u as be,O as lt}from"./index-6895e521.js";import{H as st}from"./seo-6ea96a7f.js";var z=(t=>(t.DELEGATE="DELEGATE",t.UNDELEGATE="UNDELEGATE",t.REDELEGATE="REDELEGATE",t.CLAIM_REWARDS="CLAIM_REWARDS",t))(z||{});const dt={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},moniker:"",jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var V=(t=>(t[t.STAKE=0]="STAKE",t[t.AUTO_DELEGATE=1]="AUTO_DELEGATE",t[t.CLAIM_REWARDS=2]="CLAIM_REWARDS",t[t.NONE=3]="NONE",t))(V||{});const Q=se(t=>({currentModal:3,open:a=>t({currentModal:a}),close:()=>t({currentModal:3}),activeValidator:dt,activeValidators:[],setActiveValidator:a=>t({activeValidator:a}),setActiveValidators:a=>t({activeValidators:a})}));async function xe(t){const a=await He(),r=a.reduce((o,s)=>o+parseFloat(s.commission),0)/a.length;a.forEach(o=>{let s=0;const h=r-parseFloat(o.commission);h<0?s-=Math.abs(h):s+=h,o.missedBlocks<=100?s+=5:s-=o.missedBlocks-100,o.slashings>1?s-=(o.slashings-1)*5:o.slashings===0&&(s+=5),o.score=s});const d=[...a].sort((o,s)=>parseFloat(s.tokens)-parseFloat(o.tokens)).slice(0,10),c=new Set(d.map(o=>o.operator_address));return a.filter(o=>!c.has(o.operator_address)).sort((o,s)=>s.score-o.score).slice(0,10)}const ct=({totalStaked:t,rewards:a,apr:r,onRewards:d,canClaim:c})=>{const{theme:n}=u.useContext(Le),[l,o]=u.useState([]);Q(b=>b.open);const{setActiveValidators:s,open:h}=Q(),k=async()=>{h(V.AUTO_DELEGATE);const b=await xe();o(b),s(b)};return i(mt,{children:[i("div",{className:"dual-item",style:{margin:"0"},children:[e("div",{className:"top",children:e(g,{type:"text",size:"text1",children:"total staked"})}),e("div",{className:"bottom",children:e(g,{type:"text",children:t})})]}),e("div",{className:"separator"}),i("div",{className:"dual-item",children:[e("div",{className:"top",children:e(g,{type:"text",size:"text1",children:"apr"})}),e("div",{className:"bottom",children:i(g,{type:"text",children:[r,"%"]})})]}),e("div",{className:"separator"}),i("div",{className:"dual-item",children:[e("div",{className:"top",children:e(g,{type:"text",size:"text1",children:"rewards"})}),e("div",{className:"bottom",children:e(g,{type:"text",children:a})})]}),i("div",{className:"buttons-container",children:[e(re,{type:"outlined",style:{height:"big"},theme:n,disabled:Number(a)==0||!c,onClick:d,children:e(g,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),e(re,{type:"outlined",style:{height:"big"},theme:n,onClick:k,children:e(g,{size:"text2",type:"text",bold:!0,children:"multi stake"})})]})]})},mt=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
  padding: 40px 0;

  .separator {
    height: 80px;
    border-left: 1px solid var(--primary-color);
  }
  .dual-item {
    display: flex;
    flex-grow: 1;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 0 20px;
    align-items: flex-start;
    gap: 4px;
    position: relative;
  }
  .top {
    font-size: 14px;
  }
  .bottom {
    p {
      font-size: 40px !important;
    }
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* space between buttons */
    
    /* Add equal width to the buttons */
    & > * {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    gap: 1rem;
    flex-direction: column;

    .separator {
      height: 1px;
      width: 80%;
      border-bottom: 1px solid var(--primary-color);
      opacity: 0.4;
    }
  }
`,ut="/althea-app/assets/rightArrow-189f42f9.svg",ht="/althea-app/assets/arrow-4cafc986.svg",pt=y.table`
  .jailed {
    color: #ef4444;
    &::after {
      content: url(${ht});
    }

    &:hover {
      background-color: #341616;
    }
  }

  & {
    border: none;
    /* border: var(--primary-color) solid 1px; */
    margin: 24px auto;
    width: 1204px;
    color: var(--primary-color);
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
  }
  thead {
    text-transform: lowercase;
    font-size: 14px;
    border-radius: 4px;
    background-color: var(--background-threads);
    display: inline-table;
    width: 100%;
    /* tr {
      border-bottom: var(--background-threads) solid 1px !important;
    } */
    tr {
      font-size: 12px;
      background-color: transparent;
      margin-top: 0;
    }
    th {
      padding: 7px;
    }
  }
  th {
    padding: 8px;
    font-weight: 400;
    line-height: 1rem;
    &:hover {
      background-color: rgba(0, 119, 255, 0.25);
      cursor: pointer;
    }
  }
  td,
  th {
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    /* &:nth-of-type(1),
    :nth-of-type(5),
    :nth-of-type(6) {
      flex: 2;
    } */
  }
  tr {
    display: flex;
    justify-content: space-around;

    font-size: 16px;
    font-weight: 400;
    line-height: 90px;

    animation-fill-mode: forwards;
    background-color: var(--background-threads) ;

    margin-top: 0.5rem;
    @keyframes fader {
      from {
        border-bottom: transparent solid 1px;
      }
      to {
        border-bottom: var(--primary-color) solid 1px;
      }
    }
  }

  tbody {
    display: grid;

    tr {
      border-radius: 4px;
      border-left: 3px solid var(--primary-color);
      border-right: 3px solid var(--primary-color);
      transition: all 0.2s;

      &:hover {
        background-color: rgba(0, 119, 255, 0.25);
        cursor: pointer;
        transform: scale(1.02);
      }
      position: relative;

      &::after {
        content: url(${ut});
        position: absolute;
        right: 6px;
        top: 8px;

        &:hover {
          transform: translateX(10);
        }
      }
    }
  }
  @media (max-width: 1000px) {
    width: 100%;

    th:first-of-type {
      display: none;
    }
    td:first-of-type {
      display: none;
    }

    th:last-of-type {
      display: none;
    }
    td:last-of-type {
      display: none;
    }
  }
`,ye=t=>{const[a,r]=u.useState(!1);return e("div",{children:i(pt,{children:[e("thead",{children:e("tr",{children:t.columns.map((d,c)=>e("th",{style:{backgroundColor:a&&c==t.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{t.onColumnClicked&&t.onColumnClicked(c),r(!0)},children:d},d))})}),e("tbody",{children:t.children})]})})},gt="/althea-app/assets/lock-ee10952d.svg";y.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  .typing {
    color: var(--primary-color);
    margin: 2rem 4rem;
    font-weight: 300;
    letter-spacing: -0.13em;
    height: 400px;
    & span {
      transition-property: all 0.1s ease-in-out;
    }
    margin: 2rem -1rem -4rem -1rem;
    @media (max-width: 1000px) {
      margin: 0;
    }
  }

  .tables-container {
    padding: 40px 0;
  }
  .balance {
    font-weight: 300;
    font-family: "Macan";
    color: var(--primary-color);
    text-shadow: 0px 14px 14px rgba(6, 252, 153, 0.2);
    & span {
      color: var(--primary-color);
    }
  }
  .flex-h {
    display: sticky;
    margin: 0;
    right: 0;
    button {
      margin: 0;
      width: 15rem;
    }
  }
  .Typewriter {
    color: var(--primary-color);
    margin: 2rem 4rem;
    font-weight: 300;
    letter-spacing: -0.13em;
    text-shadow: 0px 4px 4px rgba(6, 252, 153, 0.4);
    font-size: 27px;
    height: 340px;
  }
  /* .fit {
    object-fit: contain;
    height: 500px;
  } */
  .tables {
    display: flex;
    margin: 20px 0;
    width: 100%;
    & > div {
      width: 50%;
      & > p {
        color: var(--primary-color);
        padding: 4px;
      }
    }
  }
  @media (max-width: 1000px) {
    margin: 0;
    padding: 1rem;
    .balance {
      font-size: 30px;
    }
    .tables {
      flex-direction: column;
      div {
        width: 100%;
      }
      table {
        width: 100%;
      }
    }
  }
`;y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  align-items: flex-end;
  .bal-title {
  }
  .middle {
    flex-grow: 1;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .balance {
    font-size: 30px;
    margin-top: 2px;
    line-height: 34px;
    letter-spacing: -0.08em;
  }

  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0;
    margin-top: 2rem;
    justify-content: center;
    gap: 0.3rem;
    & > :nth-of-type(1) {
      order: 2;
      align-self: flex-start;
      justify-content: start;
    }
    & > :nth-of-type(2) {
      order: 1;
    }
    & > :nth-of-type(3) {
      order: 3;
      position: relative;

      top: -4.2rem;
    }
    .balance {
      font-size: 26px;
    }

    .middle {
      width: 100%;
      margin: 0;
    }
  }
`;y.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  max-width: 690px;
  align-items: flex-start;
  margin-top: 0.5rem;
  .tables {
    display: flex;
    z-index: 700;
  }
  .table {
    width: 15rem;
    border: 1px solid var(--primary-color);
    text-align: center;
  }
  .bar {
    /* width: 30rem; */
    width: 100%;
    display: flex;
    background-color: #3a3f3d;
    border-radius: 4px;
    height: 5px;
  }
  .green {
    border: 2px solid var(--primary-color);
    background-color: #6fff8773;
    height: 5px;
    border-radius: 4px;

    width: 0%;
  }
  .red {
    border: 2px solid var(--error-color);
    border-left: 0px;
    background-color: #ff6f6f73;
    border-radius: 4px;

    height: 5px;
  }
  .gray {
    border-left: 0px;
    background-color: #3a3f3d;
    border-radius: 4px;
    height: 5px;
    /* width: 66%; */
  }

  h1 {
    font-weight: 400;
    font-size: 18px;
    padding: 0.3rem;
    background-color: #49ffb611;
    border-bottom: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
  /* .alt {
    text-shadow: 0 0 4px #ff2c2c, 0 0 20px var(--error-color) !important;
    h1 {
      border-bottom: 1px solid var(--error-color);
      background-color: #ff494911;
      color: var(--error-color);
    }
    border: 1px solid var(--error-color) !important;
   
  } */
`;const ft=y.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,bt=y.div`
  display: flex;
  width: 30rem;
  flex-direction: column;
  position: relative;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  .tabs {
    margin: 16px;
  }

  .tablist {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-color);
    padding: 0;
    color: #efefef;
    font-weight: 400;
    .tab {
      flex: 1;
      cursor: pointer;
      padding: 0.5rem;
      text-align: center;
      transition: all 0.2s ease-in-out;
      padding: 20px 0;
      &:hover:not(.selected) {
        background: #a7efd218;
      }
      &:focus {
        outline: none;
      }
    }
  }

  .selected {
    background: rgba(6, 252, 153, 0.15);
    border-radius: 1px;
    color: var(--primary-color);
  }
  button {
    margin-top: 4rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;y(bt)`
  background-color: #040404;
  padding: 2rem;
  height: 60vh;
  max-height: 45.6rem;
  align-items: center;
  justify-content: center;
  h2 {
    font-weight: 300;
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    color: var(--off-white-color);
  }
`;y.div`
  height: 36rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0 40px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    flex-grow: 2;
    height: 100;
  }

  .balances {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: end;
    width: 100%;
  }
  .bal {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .type {
    /* color: #ccc !important; */
    color: #06fc9ab0 !important;
  }
  .value {
    color: var(--primary-color);
  }
  .line {
    border-bottom: 1px solid #222;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid var(--primary-color); */
    height: 60px;
    width: 60px;
    background-color: #222;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;function xt(t,a){return typeof t=="string"?t.localeCompare(a):typeof t=="number"?a-t:typeof t=="boolean"?t===a?0:t?-1:1:0}const ve=t=>{const[a,r]=u.useState(0),d=Q(),c=t.validators.sort((n,l)=>{var h,k;if(t.searched)return Y(t.searched,n.validator.description.moniker)>Y(t.searched,l.validator.description.moniker)?1:-1;const o=t.sortBy==="userTotal"?(h=n.userDelegations)==null?void 0:h.balance.amount:n.validator.tokens,s=t.sortBy==="userTotal"?(k=l.userDelegations)==null?void 0:k.balance.amount:l.validator.tokens;return L.from(o).gt(L.from(s))?-1:1});return t.validators.length?e(ye,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:n=>r(n),columnClicked:a,children:e(de,{children:c.map((n,l)=>{var o,s;return e(yt,{rank:l+1,name:n.validator.description.moniker,totalStake:n.validator.tokens,userStake:((o=n.userDelegations)==null?void 0:o.balance.amount)??"0",commission:Number(n.validator.commission.commission_rates.rate),jailed:n.validator.jailed,onClick:()=>{d.setActiveValidator(n),d.open(V.STAKE)},sortableProps:[1/Number(l),n.validator.description.moniker,Number(f.formatEther(n.validator.tokens)),Number(f.formatEther(((s=n.userDelegations)==null?void 0:s.balance.amount)??"0")),Number(n.validator.commission.commission_rates.rate)]},l)}).sort((n,l)=>{var o,s;return xt((o=n.props.sortableProps)==null?void 0:o[a],(s=l.props.sortableProps)==null?void 0:s[a])})})}):null},yt=t=>i("tr",{onClick:t.onClick,className:`${t.jailed?"jailed":""}`,style:{borderColor:t.jailed?"#EF4444":"var(--primary-color)"},children:[e("td",{children:t.rank}),i("td",{children:[t.jailed?e(ce,{trigger:e("img",{style:{height:"20px"},src:gt}),on:["hover","focus"],children:e(ft,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,t.name]}),i("td",{children:[ze(Number(M(f.formatEther(t.totalStake))))," ",e(J,{})]}),i("td",{children:[f.commify(M(f.formatEther(t.userStake))),e(J,{})]}),e("td",{children:je(t.commission)})]});function vt(t,a){return typeof t=="string"?t.localeCompare(a):typeof t=="number"?a-t:typeof t=="boolean"?t===a?0:t?-1:1:0}const wt=t=>{var c,n;const[a,r]=u.useState(2),d=[];for(const l of t.validators)if((c=l.undelagatingInfo)!=null&&c.lockouts)for(const o of((n=l.undelagatingInfo)==null?void 0:n.lockouts)??[])d.push({name:l.validator.description.moniker,amount:o.value_of_coin,completionDate:o.complete_time_stamp});return t.validators.length?e(ye,{columns:["name","undelegation","completion date"],onColumnClicked:l=>r(l),columnClicked:a,children:e(de,{children:d.map((l,o)=>e(kt,{name:l.name,amount:l.amount,completionDate:it.utc(l.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[l.name,Number(f.formatEther(l.amount))]},o)).sort((l,o)=>{var s,h;return a==2?-1:vt((s=l.props.sortableProps)==null?void 0:s[a],(h=o.props.sortableProps)==null?void 0:h[a])})})}):null},kt=t=>i("tr",{children:[e("td",{children:t.name}),i("td",{children:[f.commify(M(f.formatEther(t.amount)))," ",e(J,{})]}),e("td",{style:{display:"table-cell"},children:t.completionDate})]}),Nt=t=>{const{activateBrowserWallet:a}=Be();return e(Et,{children:t.connected?i(H,{children:[i("div",{children:[e(ct,{balance:M(f.formatEther(t.balance)),totalStaked:M(f.formatEther(t.totalStaked)),totalUnbonding:M(f.formatEther(t.totalUnbonding)),onRewards:t.onRewards,rewards:M(f.formatEther(t.totalRewards)),apr:t.apr,canClaim:t.canClaim}),e(g,{type:"text",size:"title3",color:"primary",align:"left",hidden:t.userValidationInfo.length==0,children:"current staking position"}),e(ve,{validators:t.userValidationInfo,sortBy:"userTotal"}),e(g,{type:"text",size:"title3",color:"primary",align:"left",hidden:t.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),e(wt,{validators:t.undelegationValidators}),e("br",{})]}),e("div",{style:{height:"60px"}})]}):e(Re,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:Ue,onClick:()=>{a(),Fe()}})})},Et=y.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,we=se(t=>({inAllValidators:!1,setInAllValidators:a=>t({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{t({searchQuery:a})},validatorSort:1,setValidatorSort:a=>t({validatorSort:a})})),St=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],Ct=t=>{const a=we(),[r,d]=u.useState(!1),c=()=>{const n=t.validators.filter(l=>a.validatorSort==1?!l.validator.jailed:a.validatorSort==2?l.validator.jailed:!0);return a.searchQuery===""?n:n.filter(l=>Y(a.searchQuery,l.validator.description.moniker.toLowerCase())<6||l.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return u.useEffect(()=>{!r&&a.searchQuery!==""&&(X.events.stakingActions.userSearch(),d(!0))},[a.searchQuery]),i(It,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:c().length==0?"black":"transparent"},children:[i("div",{className:"sort-search-local",children:[e(le,{style:{width:"18rem"},children:e(Z,{className:"react-select-container",styles:{dropdownIndicator:n=>({...n,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:St,onChange:n=>{a.setValidatorSort((n==null?void 0:n.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),e(me,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:n=>a.setSearchQuery(n.target.value),placeholder:"search..."})]}),e("div",{style:{height:"16px"}}),c().length==0?i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[e(ue,{color:"var(--primary-color)",size:"30px"}),e(g,{size:"title2",type:"title",children:"no validators match this search"})]}):i(H,{children:[e(ve,{validators:c(),sortBy:"validatorTotal",searched:a.searchQuery}),e("div",{style:{height:"60px"}})]})]})},It=y.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;

  .sort-search-local {
    display: none;
    justify-content: center;
    gap: 12px;
    margin-top: 1.4rem;
  }

  @media (max-width: 1000px) {
    .sort-search-local {
      display: flex;
      gap: 1rem;
      flex-direction: row-reverse;
    }
  }
`,Tt=y.div`
  display: flex;
  align-self: center;
  height: 100%;
  max-width: 1200px;
  section {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-family: "Macan", cursive;
    font-size: 26px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.07em;
    color: var(--primary-color);
  }

  .tabs {
    width: 100%;
    display: flex;
    min-height: 75vh;
    flex-direction: column;
    justify-content: start;
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    color: var(--primary-color);
    outline: none;
    min-width: 174px;
    border-radius: 0%;
    border: 1px solid transparent;
    padding: 1.8rem 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    &:hover {
      border: none;
      background-color: rgba(0, 119, 255, 0.25);
    }
  }

  .tablist {
    display: flex;
    justify-content: start;
  }
  .react-tabs__tab--selected {
    border: none;
    border-bottom: 4px solid var(--primary-color);
    border-top: 4px solid transparent;
    background-color: rgba(0, 119, 255, 0.25);
    &:hover {
      border-top: 4px solid transparent;
      background-color: rgba(0, 119, 255, 0.25) !important;

      border-bottom: 4px solid var(--primary-color);
    }

    &.tab-hover {
      background-color: transparent;
    }
  }
  .react-tabs__tab--disabled {
  }
  .react-tabs__tab-panel {
    max-width: 1200px;
    width: 100vw;
    flex-grow: 1;
  }

  .react-tabs__tab-panel--selected {
    border-top: 1px solid var(--primary-color);
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 2rem;
    .tab {
      min-width: 50%;
    }
    .tablist {
      justify-content: center;
    }
    .react-tabs__tab-panel {
      width: 100%;
    }
    .sort-search {
      display: none !important;
    }
  }
`,ke=y.div`
  background-color: var(--background);
  height: fit-content;
  max-height: 95vh;
  padding-bottom: 40px;
  width: 33rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;

  .menu-btn {
    margin-left: 5px;
    margin-top: 10px;
  }
  input {
    text-align: right;
  }
  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid #444444;
  }


  .agreement {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 10px;
  }
  .tabPanel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .amount {
    input {
      width: 100%;
      margin: 6px 0;
      text-align: start;
    }
    position: relative;
    .max {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.03em;
      text-transform: lowercase;
      color: var(--primary-color-dark);
      border: 1px solid var(--primary-color-dark);
      opacity: 0.5;
      position: absolute;
      right: 12px;
      border-radius: 4px;
      padding: 4px 8px;
      top: 18px;
      transition: all 0.1s;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        opacity: 1;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
      }
    }
    width: 100%;
  }

  .redelegate {
    width: 100%;
    .btn-grp {
      width: 100%;
      align-items: center;
      display: grid;
      grid-template-columns: 49% 49%;
      gap: 2%;
    }
    background-color: #152920;
    border: 1px solid var(--primary-color);
    padding: 1rem;

    .row {
      display: flex;
      p {
        flex: 1;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
      * {
        flex: 2;
      }

      input {
        border-bottom: 1px solid #1b7244;

        &:focus {
          border-bottom: 1px solid var(--primary-color);
        }
      }
    }
    .btn-grp {
      margin: 0 !important;
      margin-top: 2rem !important;
    }
  }
  .group {
    width: 100%;
  }
  .title {
    width: 90%;
    border-bottom: 1px solid #222;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    min-height: 90px;
  }

  .dual-h-row {
    font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0.4rem 0;
  }

  .type {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 147%;
    letter-spacing: -0.03em;
    text-transform: lowercase;
    color: #0077FF;

    opacity: 0.4;
  }
  .value {
    color: var(--primary-color);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 147%;
    text-align: right;
    letter-spacing: -0.03em;
  }
  .line {
    border-bottom: 1px solid #222;
  }
  .tabs {
    margin-top: 1rem;
  }
  .btn {
    width: 100%;
  }
  .tablist {
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-color);
    padding: 0;
    color: #efefef;
    font-weight: 400;
    .selected {
      background: rgba(0, 119, 255, 0.25);
      border-bottom: 4px solid var(--primary-color);
    }
    .tab {
      height: 50px;
      flex: 1;
      cursor: pointer;
      padding: 0.5rem;
      transition: all 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover:not(.selected) {
        background: rgba(0, 119, 255, 0.1);
      }
      &:focus {
        outline: none;
      }
    }
  }

  .secondaryBalance {
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;
    color: #cdcdcd;
  }

  .btn-grp {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .desc {
    padding: 0 30px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .textField {
    margin: 0.1rem 0;
    padding: 0.4rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    border-bottom: 1px solid var(--primary-color);
  }

  input[type="text"] {
    background-color: black;
    width: 100%;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-left: 4rem;
    &:focus {
      outline: none;
    }
  }
  footer {
    margin: 0 2rem;
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`,U={amount:"300000000000000000",denom:"aalthea",gas:"300000"},Ne={amount:"500000000000000000",denom:"aalthea",gas:"500000"},Ee={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},At={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},_t=y.div`
  /* background: rgba(217, 217, 217, 0.2); */
  background-color: var(--base);
  /* backdrop-filter: blur(35px); */
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 1rem;
  .warning-message {
    max-width: 24rem;
  }
  .btn-group {
    width: 50%;
  }
`,Se=t=>i(_t,{children:[e(ue,{color:"var(--primary-color)",size:"30px"}),e(g,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),e(g,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),e(W,{className:"btn-group",onClick:()=>t.onUndelegate(),children:"confirm undelegation"}),e(Pe,{className:"btn-group",onClick:()=>t.onCancel(),children:"undelegate later"})]});async function Dt(t,a,r){if(!r.account)return console.error("No account provided"),t.setStatus({error:"No account found"}),!1;if(!r.chainId)return console.error("No chainId provided"),t.setStatus({error:"No chainId found"}),!1;const d=r.multipOperator.length,c=L.from(r.amount),n=c.div(d),l=c.sub(n.mul(d)),o=Array(d).fill(n),s=Math.floor(Math.random()*d);o[s]=o[s].add(l);const h=o.map(N=>N.toString()),k=r.multipOperator.map((N,v)=>({type:"delegate",operator:N.address,amount:h[v],symbol:"aalthea"})),b=zt(r.chainId,r.account,r.multipOperator.map(N=>N.address),h,C(r.chainId),U,G(r.chainId),"",{delegateMessages:k});return await t.addTransactionList([b],{title:a,txListMethod:K.COSMOS,chainId:r.chainId})}async function Mt(t,a,r){if(console.log(r),!r.account)return console.error("No account provided"),t.setStatus({error:"No account found"}),!1;if(!r.chainId)return console.error("No chainId provided"),t.setStatus({error:"No chainId found"}),!1;const d=r.validatorAddress,c=r.amount,n=d.map((o,s)=>({type:"cosmos-sdk/MsgUndelegate",value:{amount:c[s],denom:"aalthea",delegator_address:r.account,validator_address:o}})),l=jt(r.chainId,r.account,d,c,C(r.chainId),Oe,G(r.chainId),"",{undelegateMessages:n});return await t.addTransactionList([l],{title:a,txListMethod:K.COSMOS,chainId:r.chainId})}async function q(t,a,r){var n,l,o;if(!r.account)return t.setStatus({error:"No account found"}),!1;if(!r.chainId)return t.setStatus({error:"No chainId found"}),!1;const d=f.formatUnits(r.amount,18),c=a===z.REDELEGATE;return await t.addTransactionList([c?Bt(r.chainId,r.account,r.operator.address,((n=r.newOperator)==null?void 0:n.address)??"",r.amount,C(r.chainId),Ne,G(r.chainId),"",{amount:d,symbol:`from ${(l=r.operator)==null?void 0:l.name} to ${(o=r.newOperator)==null?void 0:o.name}`}):Lt(r.chainId,a===z.DELEGATE,r.account,r.operator.address,r.amount,C(r.chainId),U,G(r.chainId),"",{amount:d,symbol:r.operator.name})],{title:a,txListMethod:K.COSMOS,chainId:r.chainId})}async function Vt(t,a,r,d){return r?a?await t.addTransactionList([{chainId:a,txType:P.CLAIM_REWARDS_STAKING,tx:Ke,params:[r,C(a),Ee,G(a),"",d]}],{title:"Claim Staking Rewards",txListMethod:K.COSMOS,chainId:a}):(t.setStatus({error:"No chainId found"}),!1):(t.setStatus({error:"No account found"}),!1)}const Lt=(t,a,r,d,c,n,l,o,s,h)=>({chainId:t,txType:a?P.DELEGATE:P.UNDELEGATE,tx:a?qe:Ye,params:[r,d,c,n,l,o,s],extraDetails:h}),zt=(t,a,r,d,c,n,l,o,s)=>({chainId:t,txType:P.DELEGATE_MULTIPLE,tx:Je,params:[a,r,d,c,n,l,o,s],extraDetails:s}),jt=(t,a,r,d,c,n,l,o,s)=>({chainId:t,txType:P.UNDELEGATE_MULTIPLE,tx:Xe,params:[a,r,d,c,n,l,o,s],extraDetails:s}),Bt=(t,a,r,d,c,n,l,o,s,h)=>({chainId:t,txType:P.REDELEGATE,tx:Ze,params:[a,c,n,l,o,s,r,d],extraDetails:h}),Rt=({validator:t,allValidators:a,balance:r,account:d,txFeeCheck:c,txStore:n,chainId:l})=>{var T,O,x;const[o,s]=u.useState(""),[h,k]=u.useState(!1),[b,N]=u.useState(),[v,A]=u.useState(!1),E={account:d??"",chainId:l,amount:he(o,18).toString(),multipOperator:[],newOperator:{address:(b==null?void 0:b.operator_address)??"",name:(b==null?void 0:b.description.moniker)??""},operator:{address:t.validator.operator_address,name:t.validator.description.moniker}},I=()=>q(n,z.DELEGATE,E),j=()=>q(n,z.UNDELEGATE,E),_=()=>q(n,z.REDELEGATE,E);return i(ke,{children:[e(g,{size:"title2",type:"title",className:"title",children:t.validator.description.moniker}),i("div",{className:"desc",children:[e("div",{style:{marginBottom:".5rem"},children:i(g,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[t.validator.description.details.toLowerCase()," "]})}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"delegation"}),i("p",{className:"value",children:[f.formatEther(((T=t.userDelegations)==null?void 0:T.balance.amount)??0)," althea"]})]}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"available balance"}),i("p",{className:"value",children:[M(f.formatEther(r))," althea"]})]}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"commission"}),i("p",{className:"value",children:[(Number(t.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),e("div",{className:"group",children:i(ee,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(te,{className:"tablist",children:[e(B,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),e(B,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),e(B,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),i(R,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[e($,{placeholder:"enter amount...",value:o,onChange:m=>{s(m.target.value)}}),e("button",{className:"max",onClick:()=>{const m=L.from(U.amount).add(U.gas).add(f.parseEther("1"));r.sub(m).lte(0)?s("0"):s(f.formatEther(r.sub(m)))},children:"max"})]}),i("div",{className:"agreement",children:[e("div",{children:e(pe,{checked:h,onChange:m=>{k(m)}})}),e(g,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),e(W,{weight:"bold",height:"big",disabled:!h||Number(o)==0||isNaN(Number(o))||Number(o)>Number(f.formatEther(r))||!c.delegate,className:"btn",onClick:I,children:"delegate"}),!c.delegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),i(R,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[e($,{placeholder:"enter amount...",value:o,onChange:m=>{s(m.target.value)}}),e("button",{className:"max",onClick:()=>{var m;s(f.formatEther(((m=t.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),e(ge,{weight:"bold",height:"big",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(f.formatEther(((O=t.userDelegations)==null?void 0:O.balance.amount)??"0"))||!c.undelegate,onClick:()=>A(!0),children:"undelegate"}),!c.undelegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),v&&e(Se,{onUndelegate:j,onCancel:()=>A(!1)})]}),i(R,{className:"tabPanel",children:[e("div",{className:"amount",style:{marginTop:"1rem"},children:e("div",{className:"btn-grp",children:e(Ut,{children:e(Z,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(m=>m.description.moniker!=t.validator.description.moniker?{value:m,label:m.description.moniker}:{}),onChange:m=>{N(m==null?void 0:m.value)}})})})}),i("div",{className:"amount",children:[e($,{placeholder:"enter amount...",value:o,onChange:m=>{s(m.target.value)}}),e("button",{className:"max",onClick:()=>{var m;s(f.formatEther(((m=t.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),e(W,{height:"big",weight:"bold",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(f.formatEther(((x=t.userDelegations)==null?void 0:x.balance.amount)??"0"))||b==null||!c.redelegate,onClick:()=>_(),children:"re-delegate"}),!c.redelegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},Ut=y.div`
  width: 100%;
  .react-select-container {
  }
  .react-select__input-container {
    color: var(--primary-color);
  }

  .react-select__placeholder {
    filter: grayscale(1);
    padding-left: 4px;
    opacity: 0.5;
    color: var(--primary-color);
  }
  .react-select__control {
    background-color: var(--highlights) !important;
    color: var(--primary-color) !important;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: -0.03em;
    height: 56px;

    &:focus,
    &:hover {
      outline: none;
    }
  }

  .react-select__menu {
    backdrop-filter: blur(35px);
    background: var(--base);
    border-radius: 4px;
    /* overflow: visible; */
    color: var(--primary-color) !important;
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__value-container {
    * {
      color: var(--primary-color) !important;
    }
  }
  .react-select__menu-list {
    outline: none;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 0.6rem 0;
    align-items: center;
    color: var(--primary-color) !important;
  }

  .react-select__option {
    width: 94%;
    background-color: transparent !important;
    margin: 0.2rem 1rem;
    padding: 0.8rem 0.6rem;

    &:hover {
      border-radius: 4px;
      background-color: #ffffff1a !important;
    }
  }
`,Ce=()=>{const t=Q(),a=ae(),r=be(),[d,c]=u.useState([]),[n,l]=u.useState("0"),[o,s]=u.useState([]),[h,k]=u.useState({total_unbonding:L.from("0")}),[b,N]=u.useState(L.from("0"));async function v(){t.open(V.STAKE),Vt(r,Number(a.chainId),a.account??"",j)}async function A(){a.account&&(s(await et(C(Number(a.chainId)),a.account)),N(await tt(C(Number(a.chainId)),a.account)),k(await at(C(Number(a.chainId)),a.account))),c(await rt(C(Number(a.chainId)))),l(await ot(C(Number(a.chainId))))}u.useEffect(()=>{const x=setInterval(async()=>{await A()},6e3);return()=>clearInterval(x)},[a.account]),u.useEffect(()=>{A()},[a.account]);const E=fe(d,o,h),I=E.filter(x=>!!x.undelagatingInfo),j=E.filter(x=>!!x.userDelegations);function _(x,m){return L.from(x.amount).add(x.gas).add(m??0)}function T(x,m){return x.gt(m)}return{validators:d,delegations:o,undelegations:h,userValidators:j,undelagatingValidators:I,handleClaimRewards:v,rewards:b,stakingApr:n,txFeeCheck:(()=>{const x=a.balance;return{claimRewards:T(x,_(Ee)),delegate:T(x,_(U,f.parseEther("1"))),redelegate:T(x,_(At)),undelegate:T(x,_(Ne))}})()}},Ft=({balance:t,account:a,txFeeCheck:r,txStore:d,chainId:c})=>{const[n,l]=u.useState(""),[o,s]=u.useState(!0),[h,k]=u.useState(!1),[b,N]=u.useState(!1),[v,A]=u.useState(!1),{userValidators:E}=Ce(),[I,j]=u.useState([]),[_,T]=u.useState(!0);u.useEffect(()=>{E&&E.length>0&&T(!1)},[E]);const O=p=>{const S=I.some(w=>w.address===p.validator.operator_address);j(S?w=>w.filter(F=>F.address!==p.validator.operator_address):w=>{var F;return[...w,{address:p.validator.operator_address,amount:f.formatEther(((F=p.userDelegations)==null?void 0:F.balance.amount)||"0")}]})},x=async()=>{if(!a){console.error("Account is not defined");return}const p=m.map(w=>({address:w.operator_address,name:w.moniker})),S={account:a,chainId:c,amount:he(n,18).toString(),multipOperator:p,operator:p[0]};try{await Dt(d,z.DELEGATE,S)||console.error("Failed to add the staking transaction.")}catch(w){console.error("Error while processing staking transaction:",w)}},[m,Ie]=u.useState([]);u.useEffect(()=>{(async()=>{s(!0);const S=await xe();Ie(S),s(!1)})()},[]);const Te=async()=>{if(!a){console.error("Account is not defined");return}const p=D=>{const Ae=BigInt(1e18),[_e,De=""]=String(D).split("."),Me=BigInt(_e)*Ae,Ve=BigInt(De.padEnd(18,"0"));return Me+Ve},S=I.map(D=>D.address),w=I.map(D=>p(D.amount).toString()),F={account:a,chainId:c,validatorAddress:S,amount:w};try{await Mt(d,z.UNDELEGATE,F)||console.error("Failed to add the undelegation transaction.")}catch(D){console.error("Error while processing undelegation transaction:",D)}};return i(ke,{children:[i(g,{size:"title2",type:"title",className:"title",children:["Multi-Staking",e("div",{className:"menu-btn",children:e(Ge,{src:Qe,width:27,height:27,rotateImage:!0,alt:"menu",onClick:()=>k(!h)})})]}),i("div",{className:"desc",children:[h&&e(Pt,{children:"Multi Staking is a tool used to send your delegation to a group of random and performant validators below the top ten. The list is based off a ranking system that considers missed blocks, slashings, commission, voting power, and governance participation."}),e("div",{className:"group",children:i(ee,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(te,{className:"tablist",children:[e(B,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),e(B,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})})]}),i(R,{className:"tabPanel",children:[o?e(H,{children:i(ie,{children:[e(oe,{size:"md"}),e("span",{children:"Finidng safest validators..."})]})}):e(ne,{children:i("table",{children:[e("thead",{children:i("tr",{children:[e("th",{children:"Validator"}),e("th",{children:"Missed Blocks"}),e("th",{children:"Rank"}),e("th",{children:"Score"})]})}),e("tbody",{children:m.map(p=>i("tr",{children:[e("td",{children:p.moniker}),e("td",{children:p.missedBlocks}),i("td",{children:[p.trueRank,"th"]}),e("td",{children:Number(p.score).toFixed(4)})]},p.operator_address))})]})}),i("div",{className:"amount",children:[e($,{placeholder:"Enter amount to split between validators...",value:n,onChange:p=>{l(p.target.value)}}),e("button",{className:"max",onClick:()=>{const p=L.from(U.amount).add(U.gas).add(f.parseEther("1"));t.sub(p).lte(0)?l("0"):l(f.formatEther(t.sub(p)))},children:"Max"})]}),i("div",{className:"agreement",children:[e("div",{children:e(pe,{checked:b,onChange:p=>{N(p)}})}),e(g,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),e(W,{weight:"bold",height:"big",disabled:!b||!n||!m.length||!r.delegate,className:"btn",onClick:x,children:"Delegate to Multiple Validators"}),!r.delegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"Not enough funds for delegation fee"})]}),i(R,{className:"tabPanel",children:[_?i(ie,{children:[e(oe,{size:"md"}),e("span",{children:"Finding your delegations..."})]}):e(ne,{children:i("table",{children:[e("thead",{children:i("tr",{children:[e("th",{children:"Validator Address"}),e("th",{children:"Amount"})]})}),e("tbody",{children:E.map(p=>{var S;return i("tr",{style:{backgroundColor:I.some(w=>w.address===p.validator.operator_address)?"var(--background-color-start)":"var(--base)"},onClick:()=>O(p),children:[e("td",{children:p.validator.description.moniker}),e("td",{children:f.formatEther(((S=p.userDelegations)==null?void 0:S.balance.amount)||"0")})]},p.validator.operator_address)})})]})}),e(ge,{weight:"bold",height:"big",className:"btn",disabled:I.length<=0||!r.undelegate,onClick:()=>A(!0),children:"undelegate"}),!r.undelegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),v&&e(Se,{onUndelegate:Te,onCancel:()=>A(!1)})]})]})})]})]})},Pt=y.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 100%; 
  margin-left: auto; 
  margin-right: auto;
`,ne=y.div`
  width: 100%; 
  max-height: 30vh; 
  overflow-y: scroll;
  margin-top: 16px;
  

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: IBM Plex Sans; 
    color: var(--primary-color);
  }

  thead {
    position: sticky;
    top: 0;
    background-color: var(--base);
    font-family: IBM Plex Sans; 
    color: var(--primary-color);

    th {
      padding: 10px;
      border-bottom: 1px solid var(--highlights);
      text-align: left;
      font-family: IBM Plex Sans; 
      color: var(--primary-color);
    }

    th:nth-of-type(2) {
      text-align: center; 
    }
  }

  tbody {
    tr.selected {
      background-color: var(--primary-color);
    }
    tr {
      &:nth-of-type(even) {
        background-color: var(--base);
        font-family: IBM Plex Sans; 
        color: var(--primary-color);
      }
    }

    td {
      padding: 10px;
      border-bottom: 1px solid var(--highlights);
      font-family: IBM Plex Sans; 
      color: var(--primary-color);
    }

    td:nth-of-type(2) {
      text-align: center;  
    }
  }
`,ie=y.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
font-family: IBM Plex Sans; 
color: var(--primary-color);
span {
  margin-left: 40px;
`,Ot=y(ce)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background-color: rgba(0, 119, 255, 0.15);
    backdrop-filter: blur(2px);
    z-index: 10;
    animation: fadein 0.2s;
    @keyframes fadein {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
  // use your custom style for ".popup-content"
  &-content {
    position: relative;

    background-color: black;
    border-radius: 4px;
    transition: all 0.2s;
    animation: fadein 0.5s 1;
    @keyframes fadein {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(0px);
      }
    }
  }

  @media (max-width: 1000px) {
    /* &-overlay {
      width: 100%;
    } */
  }
`,Gt=t=>{const a=Q(),r=be(),d=ae();return u.useEffect(()=>{a.currentModal!=V.NONE&&X.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),i(Ot,{open:a.currentModal!=V.NONE,onClose:()=>{a.close(),X.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[e("div",{role:"button",tabIndex:0,onClick:a.close,children:e("img",{src:$e,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),e(lt,{onClose:a.close}),a.currentModal===V.STAKE&&e(Rt,{validator:a.activeValidator,allValidators:t.allValidators,balance:d.balance,account:d.account,txFeeCheck:t.txBalanceChecks,txStore:r,chainId:Number(d.chainId)}),a.currentModal===V.AUTO_DELEGATE&&e(Ft,{allValidators:t.allValidators,balance:d.balance,account:d.account,txFeeCheck:t.txBalanceChecks,txStore:r,chainId:Number(d.chainId)})]})},Yt=()=>{const t=ae(),a=we(),[r,d]=u.useState(!1),{validators:c,delegations:n,undelegations:l,userValidators:o,undelagatingValidators:s,handleClaimRewards:h,rewards:k,stakingApr:b,txFeeCheck:N}=Ce();return i(H,{children:[e(st,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),i(Tt,{children:[e(Gt,{allValidators:c,txBalanceChecks:N}),i(ee,{className:"tabs",children:[i(te,{className:"tablist",children:[e(B,{className:r?"tab tab-hover":"tab",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),e(B,{className:r?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},children:"all validators"}),i("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[e(le,{style:{width:"10rem"},children:e(Z,{className:"react-select-container",styles:{dropdownIndicator:v=>({...v,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:v=>{a.setValidatorSort((v==null?void 0:v.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),e(me,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:v=>a.setSearchQuery(v.target.value),placeholder:"search..."})]})]}),e(R,{children:e(Nt,{onRewards:h,connected:We(Number(t.chainId)),account:t.account??"",balance:t.balance,totalStaked:nt(n),totalUnbonding:l.total_unbonding,totalRewards:k,apr:b,userValidationInfo:o,undelegationValidators:s,canClaim:N.claimRewards})}),e(R,{children:e(Ct,{validators:fe(c,n,l)})})]})]})]})};export{Yt as default};
