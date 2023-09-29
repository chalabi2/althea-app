import{l as J,S as se,d as ee,T as te,a as ae,b as R,c as U}from"./selected-ee8f521a.js";import{ae as de,n as y,D as u,al as Be,a as i,j as e,T as g,am as oe,B as z,an as ce,u as f,Y as me,ao as Re,H as M,ap as X,aq as Ue,ah as Fe,a2 as Pe,a3 as Oe,ak as Ge,F as q,I as Z,ar as ue,L as he,P as H,Q as Qe,m as P,i as A,f as G,as as $e,Z as pe,z as W,at as ge,au as fe,R as re,av as We,aw as He,N as ne,J as qe,ax as Ke}from"./index-8a1a5930.js";import{g as Ye,t as Je,a as Xe,b as Ze,c as et,d as tt,e as at,f as be,h as rt,i as ot,j as nt,k as it,l as lt,m as st}from"./transactionHelpers-74f0ec3f.js";import{h as dt}from"./moment-7785d891.js";import{T as K,u as xe,O as ct}from"./index-371d1843.js";import{H as mt}from"./seo-7e61bfab.js";var j=(t=>(t.DELEGATE="DELEGATE",t.UNDELEGATE="UNDELEGATE",t.REDELEGATE="REDELEGATE",t.CLAIM_REWARDS="CLAIM_REWARDS",t))(j||{});const ut={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},moniker:"",jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var L=(t=>(t[t.STAKE=0]="STAKE",t[t.AUTO_DELEGATE=1]="AUTO_DELEGATE",t[t.CLAIM_REWARDS=2]="CLAIM_REWARDS",t[t.NONE=3]="NONE",t))(L||{});const Q=de(t=>({currentModal:3,open:a=>t({currentModal:a}),close:()=>t({currentModal:3}),activeValidator:ut,activeValidators:[],setActiveValidator:a=>t({activeValidator:a}),setActiveValidators:a=>t({activeValidators:a})}));async function ye(t){const a=await Ye(),r=a.reduce((o,s)=>o+parseFloat(s.commission),0)/a.length;a.forEach(o=>{let s=0;const p=r-parseFloat(o.commission);p<0?s-=Math.abs(p):s+=p,o.missedBlocks<=100?s+=5:s-=o.missedBlocks-100,o.slashings>1?s-=(o.slashings-1)*5:o.slashings===0&&(s+=5),o.score=s});const d=[...a].sort((o,s)=>parseFloat(s.tokens)-parseFloat(o.tokens)).slice(0,10),c=new Set(d.map(o=>o.operator_address));return a.filter(o=>!c.has(o.operator_address)).sort((o,s)=>s.score-o.score).slice(0,10)}const ht=({totalStaked:t,rewards:a,apr:r,onRewards:d,canClaim:c})=>{const{theme:n}=u.useContext(Be),[l,o]=u.useState([]);Q(b=>b.open);const{setActiveValidators:s,open:p}=Q(),k=async()=>{p(L.AUTO_DELEGATE);const b=await ye();o(b),s(b)};return i(pt,{children:[i("div",{className:"dual-item",style:{margin:"0"},children:[e("div",{className:"top",children:e(g,{type:"text",size:"text1",children:"total staked"})}),e("div",{className:"bottom",children:e(g,{type:"text",children:t})})]}),e("div",{className:"separator"}),i("div",{className:"dual-item",children:[e("div",{className:"top",children:e(g,{type:"text",size:"text1",children:"apr"})}),e("div",{className:"bottom",children:i(g,{type:"text",children:[r,"%"]})})]}),e("div",{className:"separator"}),i("div",{className:"dual-item",children:[e("div",{className:"top",children:e(g,{type:"text",size:"text1",children:"rewards"})}),e("div",{className:"bottom",children:e(g,{type:"text",children:a})})]}),i("div",{className:"buttons-container",children:[e(oe,{type:"outlined",style:{height:"big"},theme:n,disabled:Number(a)==0||!c,onClick:d,children:e(g,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),e(oe,{type:"outlined",style:{height:"big"},theme:n,onClick:k,children:e(g,{size:"text2",type:"text",bold:!0,children:"multi stake"})})]})]})},pt=y.div`
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
`,gt="/althea-app/assets/rightArrow-189f42f9.svg",ft="/althea-app/assets/arrow-4cafc986.svg",bt=y.table`
  .jailed {
    color: #ef4444;
    &::after {
      content: url(${ft});
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
        content: url(${gt});
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
`,ve=t=>{const[a,r]=u.useState(!1);return e("div",{children:i(bt,{children:[e("thead",{children:e("tr",{children:t.columns.map((d,c)=>e("th",{style:{backgroundColor:a&&c==t.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{t.onColumnClicked&&t.onColumnClicked(c),r(!0)},children:d},d))})}),e("tbody",{children:t.children})]})})},xt="/althea-app/assets/lock-ee10952d.svg";y.div`
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
`;const yt=y.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,vt=y.div`
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
`;y(vt)`
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
`;function wt(t,a){return typeof t=="string"?t.localeCompare(a):typeof t=="number"?a-t:typeof t=="boolean"?t===a?0:t?-1:1:0}const we=t=>{const[a,r]=u.useState(0),d=Q(),c=t.validators.sort((n,l)=>{var p,k;if(t.searched)return J(t.searched,n.validator.description.moniker)>J(t.searched,l.validator.description.moniker)?1:-1;const o=t.sortBy==="userTotal"?(p=n.userDelegations)==null?void 0:p.balance.amount:n.validator.tokens,s=t.sortBy==="userTotal"?(k=l.userDelegations)==null?void 0:k.balance.amount:l.validator.tokens;return z.from(o).gt(z.from(s))?-1:1});return t.validators.length?e(ve,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:n=>r(n),columnClicked:a,children:e(ce,{children:c.map((n,l)=>{var o,s;return e(kt,{rank:l+1,name:n.validator.description.moniker,totalStake:n.validator.tokens,userStake:((o=n.userDelegations)==null?void 0:o.balance.amount)??"0",commission:Number(n.validator.commission.commission_rates.rate),jailed:n.validator.jailed,onClick:()=>{d.setActiveValidator(n),d.open(L.STAKE)},sortableProps:[1/Number(l),n.validator.description.moniker,Number(f.formatEther(n.validator.tokens)),Number(f.formatEther(((s=n.userDelegations)==null?void 0:s.balance.amount)??"0")),Number(n.validator.commission.commission_rates.rate)]},l)}).sort((n,l)=>{var o,s;return wt((o=n.props.sortableProps)==null?void 0:o[a],(s=l.props.sortableProps)==null?void 0:s[a])})})}):null},kt=t=>i("tr",{onClick:t.onClick,className:`${t.jailed?"jailed":""}`,style:{borderColor:t.jailed?"#EF4444":"var(--primary-color)"},children:[e("td",{children:t.rank}),i("td",{children:[t.jailed?e(me,{trigger:e("img",{style:{height:"20px"},src:xt}),on:["hover","focus"],children:e(yt,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,t.name]}),i("td",{children:[Re(Number(M(f.formatEther(t.totalStake))))," ",e(X,{})]}),i("td",{children:[f.commify(M(f.formatEther(t.userStake))),e(X,{})]}),e("td",{children:Ue(t.commission)})]});function Nt(t,a){return typeof t=="string"?t.localeCompare(a):typeof t=="number"?a-t:typeof t=="boolean"?t===a?0:t?-1:1:0}const Et=t=>{var c,n;const[a,r]=u.useState(2),d=[];for(const l of t.validators)if((c=l.undelagatingInfo)!=null&&c.lockouts)for(const o of((n=l.undelagatingInfo)==null?void 0:n.lockouts)??[])d.push({name:l.validator.description.moniker,amount:o.value_of_coin,completionDate:o.complete_time_stamp});return t.validators.length?e(ve,{columns:["name","undelegation","completion date"],onColumnClicked:l=>r(l),columnClicked:a,children:e(ce,{children:d.map((l,o)=>e(St,{name:l.name,amount:l.amount,completionDate:dt.utc(l.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[l.name,Number(f.formatEther(l.amount))]},o)).sort((l,o)=>{var s,p;return a==2?-1:Nt((s=l.props.sortableProps)==null?void 0:s[a],(p=o.props.sortableProps)==null?void 0:p[a])})})}):null},St=t=>i("tr",{children:[e("td",{children:t.name}),i("td",{children:[f.commify(M(f.formatEther(t.amount)))," ",e(X,{})]}),e("td",{style:{display:"table-cell"},children:t.completionDate})]}),Ct=t=>{const{activateBrowserWallet:a}=Fe();return e(Tt,{children:t.connected?i(q,{children:[i("div",{children:[e(ht,{balance:M(f.formatEther(t.balance)),totalStaked:M(f.formatEther(t.totalStaked)),totalUnbonding:M(f.formatEther(t.totalUnbonding)),onRewards:t.onRewards,rewards:M(f.formatEther(t.totalRewards)),apr:t.apr,canClaim:t.canClaim}),e(g,{type:"text",size:"title3",color:"primary",align:"left",hidden:t.userValidationInfo.length==0,children:"current staking position"}),e(we,{validators:t.userValidationInfo,sortBy:"userTotal"}),e(g,{type:"text",size:"title3",color:"primary",align:"left",hidden:t.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),e(Et,{validators:t.undelegationValidators}),e("br",{})]}),e("div",{style:{height:"60px"}})]}):e(Pe,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:Oe,onClick:()=>{a(),Ge()}})})},Tt=y.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,ke=de(t=>({inAllValidators:!1,setInAllValidators:a=>t({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{t({searchQuery:a})},validatorSort:1,setValidatorSort:a=>t({validatorSort:a})})),At=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],It=t=>{const a=ke(),[r,d]=u.useState(!1),c=()=>{const n=t.validators.filter(l=>a.validatorSort==1?!l.validator.jailed:a.validatorSort==2?l.validator.jailed:!0);return a.searchQuery===""?n:n.filter(l=>J(a.searchQuery,l.validator.description.moniker.toLowerCase())<6||l.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return u.useEffect(()=>{!r&&a.searchQuery!==""&&(Z.events.stakingActions.userSearch(),d(!0))},[a.searchQuery]),i(_t,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:c().length==0?"black":"transparent"},children:[i("div",{className:"sort-search-local",children:[e(se,{style:{width:"18rem"},children:e(ee,{className:"react-select-container",styles:{dropdownIndicator:n=>({...n,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:At,onChange:n=>{a.setValidatorSort((n==null?void 0:n.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),e(ue,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:n=>a.setSearchQuery(n.target.value),placeholder:"search..."})]}),e("div",{style:{height:"16px"}}),c().length==0?i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[e(he,{color:"var(--primary-color)",size:"30px"}),e(g,{size:"title2",type:"title",children:"no validators match this search"})]}):i(q,{children:[e(we,{validators:c(),sortBy:"validatorTotal",searched:a.searchQuery}),e("div",{style:{height:"60px"}})]})]})},_t=y.div`
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
`,Dt=y.div`
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
`,Ne=y.div`
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
`,F={amount:"300000000000000000",denom:"aalthea",gas:"300000"},Ee={amount:"500000000000000000",denom:"aalthea",gas:"500000"},Se={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},Vt={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},Mt=y.div`
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
`,Ce=t=>i(Mt,{children:[e(he,{color:"var(--primary-color)",size:"30px"}),e(g,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),e(g,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),e(H,{className:"btn-group",onClick:()=>t.onUndelegate(),children:"confirm undelegation"}),e(Qe,{className:"btn-group",onClick:()=>t.onCancel(),children:"undelegate later"})]});async function Lt(t,a,r){if(!r.account)return console.error("No account provided"),t.setStatus({error:"No account found"}),!1;if(!r.chainId)return console.error("No chainId provided"),t.setStatus({error:"No chainId found"}),!1;const d=r.multipOperator.length,c=z.from(r.amount),n=c.div(d),l=c.sub(n.mul(d)),o=Array(d).fill(n),s=Math.floor(Math.random()*d);o[s]=o[s].add(l);const p=o.map(N=>N.toString()),k=r.multipOperator.map((N,w)=>({type:"delegate",operator:N.address,amount:p[w],symbol:"aalthea"})),b=Rt(r.chainId,r.account,r.multipOperator.map(N=>N.address),p,A(r.chainId),F,G(r.chainId),"",{delegateMessages:k});return await t.addTransactionList([b],{title:a,txListMethod:K.COSMOS,chainId:r.chainId})}async function zt(t,a,r){if(!r.account)return console.error("No account provided"),t.setStatus({error:"No account found"}),!1;if(!r.chainId)return console.error("No chainId provided"),t.setStatus({error:"No chainId found"}),!1;const d=r.validatorAddress,c=r.amount,n=d.map((o,s)=>({type:"cosmos-sdk/MsgUndelegate",value:{amount:c[s],denom:"aalthea",delegator_address:r.account,validator_address:o}})),l=Ut(r.chainId,r.account,d,c,A(r.chainId),$e,G(r.chainId),"",{undelegateMessages:n});return await t.addTransactionList([l],{title:a,txListMethod:K.COSMOS,chainId:r.chainId})}async function Y(t,a,r){var n,l,o;if(!r.account)return t.setStatus({error:"No account found"}),!1;if(!r.chainId)return t.setStatus({error:"No chainId found"}),!1;const d=f.formatUnits(r.amount,18),c=a===j.REDELEGATE;return await t.addTransactionList([c?Ft(r.chainId,r.account,r.operator.address,((n=r.newOperator)==null?void 0:n.address)??"",r.amount,A(r.chainId),Ee,G(r.chainId),"",{amount:d,symbol:`from ${(l=r.operator)==null?void 0:l.name} to ${(o=r.newOperator)==null?void 0:o.name}`}):Bt(r.chainId,a===j.DELEGATE,r.account,r.operator.address,r.amount,A(r.chainId),F,G(r.chainId),"",{amount:d,symbol:r.operator.name})],{title:a,txListMethod:K.COSMOS,chainId:r.chainId})}async function jt(t,a,r,d){return r?a?await t.addTransactionList([{chainId:a,txType:P.CLAIM_REWARDS_STAKING,tx:Je,params:[r,A(a),Se,G(a),"",d]}],{title:"Claim Staking Rewards",txListMethod:K.COSMOS,chainId:a}):(t.setStatus({error:"No chainId found"}),!1):(t.setStatus({error:"No account found"}),!1)}const Bt=(t,a,r,d,c,n,l,o,s,p)=>({chainId:t,txType:a?P.DELEGATE:P.UNDELEGATE,tx:a?Xe:Ze,params:[r,d,c,n,l,o,s],extraDetails:p}),Rt=(t,a,r,d,c,n,l,o,s)=>({chainId:t,txType:P.DELEGATE_MULTIPLE,tx:et,params:[a,r,d,c,n,l,o,s],extraDetails:s}),Ut=(t,a,r,d,c,n,l,o,s)=>({chainId:t,txType:P.UNDELEGATE_MULTIPLE,tx:tt,params:[a,r,d,c,n,l,o,s],extraDetails:s}),Ft=(t,a,r,d,c,n,l,o,s,p)=>({chainId:t,txType:P.REDELEGATE,tx:at,params:[a,c,n,l,o,s,r,d],extraDetails:p}),Pt=({validator:t,allValidators:a,balance:r,account:d,txFeeCheck:c,txStore:n,chainId:l})=>{var T,O,v;const[o,s]=u.useState(""),[p,k]=u.useState(!1),[b,N]=u.useState(),[w,_]=u.useState(!1),C={account:d??"",chainId:l,amount:pe(o,18).toString(),multipOperator:[],newOperator:{address:(b==null?void 0:b.operator_address)??"",name:(b==null?void 0:b.description.moniker)??""},operator:{address:t.validator.operator_address,name:t.validator.description.moniker}},I=()=>Y(n,j.DELEGATE,C),B=()=>Y(n,j.UNDELEGATE,C),S=()=>Y(n,j.REDELEGATE,C);return i(Ne,{children:[e(g,{size:"title2",type:"title",className:"title",children:t.validator.description.moniker}),i("div",{className:"desc",children:[e("div",{style:{marginBottom:".5rem"},children:i(g,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[t.validator.description.details.toLowerCase()," "]})}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"delegation"}),i("p",{className:"value",children:[f.formatEther(((T=t.userDelegations)==null?void 0:T.balance.amount)??0)," althea"]})]}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"available balance"}),i("p",{className:"value",children:[M(f.formatEther(r))," althea"]})]}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"commission"}),i("p",{className:"value",children:[(Number(t.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),e("div",{className:"group",children:i(te,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(ae,{className:"tablist",children:[e(R,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),e(R,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),e(R,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),i(U,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[e(W,{placeholder:"enter amount...",value:o,onChange:h=>{s(h.target.value)}}),e("button",{className:"max",onClick:()=>{const h=z.from(F.amount).add(F.gas).add(f.parseEther("1"));r.sub(h).lte(0)?s("0"):s(f.formatEther(r.sub(h)))},children:"max"})]}),i("div",{className:"agreement",children:[e("div",{children:e(ge,{checked:p,onChange:h=>{k(h)}})}),e(g,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),e(H,{weight:"bold",height:"big",disabled:!p||Number(o)==0||isNaN(Number(o))||Number(o)>Number(f.formatEther(r))||!c.delegate,className:"btn",onClick:I,children:"delegate"}),!c.delegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),i(U,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[e(W,{placeholder:"enter amount...",value:o,onChange:h=>{s(h.target.value)}}),e("button",{className:"max",onClick:()=>{var h;s(f.formatEther(((h=t.userDelegations)==null?void 0:h.balance.amount)??"0"))},children:"max"})]}),e(fe,{weight:"bold",height:"big",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(f.formatEther(((O=t.userDelegations)==null?void 0:O.balance.amount)??"0"))||!c.undelegate,onClick:()=>_(!0),children:"undelegate"}),!c.undelegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),w&&e(Ce,{onUndelegate:B,onCancel:()=>_(!1)})]}),i(U,{className:"tabPanel",children:[e("div",{className:"amount",style:{marginTop:"1rem"},children:e("div",{className:"btn-grp",children:e(Ot,{children:e(ee,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(h=>h.description.moniker!=t.validator.description.moniker?{value:h,label:h.description.moniker}:{}),onChange:h=>{N(h==null?void 0:h.value)}})})})}),i("div",{className:"amount",children:[e(W,{placeholder:"enter amount...",value:o,onChange:h=>{s(h.target.value)}}),e("button",{className:"max",onClick:()=>{var h;s(f.formatEther(((h=t.userDelegations)==null?void 0:h.balance.amount)??"0"))},children:"max"})]}),e(H,{height:"big",weight:"bold",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(f.formatEther(((v=t.userDelegations)==null?void 0:v.balance.amount)??"0"))||b==null||!c.redelegate,onClick:()=>S(),children:"re-delegate"}),!c.redelegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},Ot=y.div`
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
`,Te=()=>{const t=Q(),a=re(),r=xe(),[d,c]=u.useState([]),[n,l]=u.useState("0"),[o,s]=u.useState([]),[p,k]=u.useState({total_unbonding:z.from("0")}),[b,N]=u.useState(z.from("0"));async function w(){t.open(L.STAKE),jt(r,Number(a.chainId),a.account??"",B)}async function _(){a.account&&(s(await rt(A(Number(a.chainId)),a.account)),N(await ot(A(Number(a.chainId)),a.account)),k(await nt(A(Number(a.chainId)),a.account))),c(await it(A(Number(a.chainId)))),l(await lt(A(Number(a.chainId))))}u.useEffect(()=>{const v=setInterval(async()=>{await _()},6e3);return()=>clearInterval(v)},[a.account]),u.useEffect(()=>{_()},[a.account]);const C=be(d,o,p),I=C.filter(v=>!!v.undelagatingInfo),B=C.filter(v=>!!v.userDelegations);function S(v,h){return z.from(v.amount).add(v.gas).add(h??0)}function T(v,h){return v.gt(h)}return{validators:d,delegations:o,undelegations:p,userValidators:B,undelagatingValidators:I,handleClaimRewards:w,rewards:b,stakingApr:n,txFeeCheck:(()=>{const v=a.balance;return{claimRewards:T(v,S(Se)),delegate:T(v,S(F,f.parseEther("1"))),redelegate:T(v,S(Vt)),undelegate:T(v,S(Ee))}})()}};function Gt(t,a){if(t===a)return!0;if(t==null||a==null||t.length!==a.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==a[r])return!1;return!0}const Qt=({balance:t,account:a,txFeeCheck:r,txStore:d,chainId:c})=>{const[n,l]=u.useState(""),[o,s]=u.useState(!0),[p,k]=u.useState(!1),[b,N]=u.useState(!1),[w,_]=u.useState(!1),{userValidators:C}=Te(),[I,B]=u.useState([]),[S,T]=u.useState([]),[O,v]=u.useState(!0);u.useEffect(()=>{C&&C.length>0&&v(!1)},[C]);const h=m=>{const E=I.some(x=>x.address===m.validator.operator_address);B(E?x=>x.filter(D=>D.address!==m.validator.operator_address):x=>{var D;return[...x,{address:m.validator.operator_address,amount:f.formatEther(((D=m.userDelegations)==null?void 0:D.balance.amount)||"0")}]})},Ae=m=>{const E=S.some(x=>x.operator_address===m.operator_address);T(E?x=>x.filter(D=>D.operator_address!==m.operator_address):x=>[...x,{operator_address:m.operator_address,moniker:m.moniker}])},Ie=async()=>{if(!a){console.error("Account is not defined");return}const m=S.map(x=>({address:x.operator_address,name:x.moniker})),E={account:a,chainId:c,amount:pe(n,18).toString(),multipOperator:m,operator:m[0]};try{await Lt(d,j.DELEGATE,E)||console.error("Failed to add the staking transaction.")}catch(x){console.error("Error while processing staking transaction:",x)}},[$,_e]=u.useState([]);u.useEffect(()=>{(async()=>{s(!0);const E=await ye();_e(E),s(!1)})()},[]);const De=async()=>{if(!a){console.error("Account is not defined");return}const m=V=>{const Ve=BigInt(1e18),[Me,Le=""]=String(V).split("."),ze=BigInt(Me)*Ve,je=BigInt(Le.padEnd(18,"0"));return ze+je},E=I.map(V=>V.address),x=I.map(V=>m(V.amount).toString()),D={account:a,chainId:c,validatorAddress:E,amount:x};try{await zt(d,j.UNDELEGATE,D)||console.error("Failed to add the undelegation transaction.")}catch(V){console.error("Error while processing undelegation transaction:",V)}};return i(Ne,{children:[i(g,{size:"title2",type:"title",className:"title",children:["Multi-Staking",e("div",{className:"menu-btn",children:e(We,{src:He,width:27,height:27,rotateImage:!0,alt:"menu",onClick:()=>k(!p)})})]}),i("div",{className:"desc",children:[p&&e($t,{children:"Multi Staking is a tool used to delegate to and withdraw from a group of the most performant validators below the top ten. The list is based off a ranking system that considers missed blocks, slashings, commission, voting power, and governance participation."}),e("div",{className:"group",children:i(te,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(ae,{className:"tablist",children:[e(R,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),e(R,{className:"tab",selectedClassName:"tab-selected",children:e(g,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})})]}),i(U,{className:"tabPanel",children:[o?e(q,{children:i(le,{children:[e(ne,{size:"md"}),e("span",{children:"Finidng safest validators..."})]})}):e(ie,{children:i("table",{children:[e("thead",{children:i("tr",{children:[e("th",{children:"Validator"}),e("th",{children:"Missed Blocks"}),e("th",{children:"Rank"}),e("th",{children:"Score"})]})}),e("tbody",{children:$.map(m=>i("tr",{style:{cursor:"pointer",backgroundColor:S.some(E=>E.operator_address===m.operator_address)?"var(--background-color-start)":"var(--base)"},onClick:()=>Ae(m),children:[e("td",{children:m.moniker}),e("td",{children:m.missedBlocks}),i("td",{children:[m.trueRank,"th"]}),e("td",{children:Number(m.score).toFixed(4)})]},m.operator_address))})]})}),i(Ht,{children:[e("div",{}),e(Wt,{onClick:()=>T($),disabled:Gt(S,$),children:"Select All"})]}),i("div",{className:"amount",children:[e(W,{placeholder:"Enter amount to split between validators...",value:n,onChange:m=>{l(m.target.value)}}),e("button",{className:"max",onClick:()=>{const m=z.from(F.amount).add(F.gas).add(f.parseEther("1"));t.sub(m).lte(0)?l("0"):l(f.formatEther(t.sub(m)))},children:"Max"})]}),i("div",{className:"agreement",children:[e("div",{children:e(ge,{checked:b,onChange:m=>{N(m)}})}),e(g,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),e(H,{weight:"bold",height:"big",disabled:!b||!n||!$.length||!r.delegate||!S.length,className:"btn",onClick:Ie,children:"Delegate to Multiple Validators"}),!r.delegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"Not enough funds for delegation fee"})]}),i(U,{className:"tabPanel",children:[O?i(le,{children:[e(ne,{size:"md"}),e("span",{children:"Finding your delegations..."})]}):e(ie,{children:i("table",{children:[e("thead",{children:i("tr",{children:[e("th",{children:"Validator Address"}),e("th",{children:"Amount"})]})}),e("tbody",{children:C.map(m=>{var E;return i("tr",{style:{cursor:"pointer",backgroundColor:I.some(x=>x.address===m.validator.operator_address)?"var(--background-color-start)":"var(--base)"},onClick:()=>h(m),children:[e("td",{children:m.validator.description.moniker}),e("td",{children:f.formatEther(((E=m.userDelegations)==null?void 0:E.balance.amount)||"0")})]},m.validator.operator_address)})})]})}),e(fe,{weight:"bold",height:"big",className:"btn",disabled:I.length<=0||!r.undelegate,onClick:()=>_(!0),children:"undelegate"}),!r.undelegate&&e(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),w&&e(Ce,{onUndelegate:De,onCancel:()=>_(!1)})]})]})})]})]})},$t=y.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 100%; 
  margin-left: auto; 
  margin-right: auto;
`,ie=y.div`
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
`,le=y.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
font-family: IBM Plex Sans; 
color: var(--primary-color);
span {
  margin-left: 40px;
`,Wt=y.button`
  font-family: "IBM Plex Sans";
  background-color: var(--primary-color);
  border: none;
  color: var(--base); 
  margin-top: -10px;
  margin-bottom: -14px;
  padding: 1px 1px;
  width: 19%;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--button-highlight);
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--background-color-start);
    color: grey;
  }

`,Ht=y.div`
  display: flex;
  justify-content: space-between; 
`,qt=y(me)`
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
`,Kt=t=>{const a=Q(),r=xe(),d=re();return u.useEffect(()=>{a.currentModal!=L.NONE&&Z.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),i(qt,{open:a.currentModal!=L.NONE,onClose:()=>{a.close(),Z.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[e("div",{role:"button",tabIndex:0,onClick:a.close,children:e("img",{src:qe,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),e(ct,{onClose:a.close}),a.currentModal===L.STAKE&&e(Pt,{validator:a.activeValidator,allValidators:t.allValidators,balance:d.balance,account:d.account,txFeeCheck:t.txBalanceChecks,txStore:r,chainId:Number(d.chainId)}),a.currentModal===L.AUTO_DELEGATE&&e(Qt,{allValidators:t.allValidators,balance:d.balance,account:d.account,txFeeCheck:t.txBalanceChecks,txStore:r,chainId:Number(d.chainId)})]})},aa=()=>{const t=re(),a=ke(),[r,d]=u.useState(!1),{validators:c,delegations:n,undelegations:l,userValidators:o,undelagatingValidators:s,handleClaimRewards:p,rewards:k,stakingApr:b,txFeeCheck:N}=Te();return i(q,{children:[e(mt,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),i(Dt,{children:[e(Kt,{allValidators:c,txBalanceChecks:N}),i(te,{className:"tabs",children:[i(ae,{className:"tablist",children:[e(R,{className:r?"tab tab-hover":"tab",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),e(R,{className:r?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},children:"all validators"}),i("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[e(se,{style:{width:"10rem"},children:e(ee,{className:"react-select-container",styles:{dropdownIndicator:w=>({...w,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:w=>{a.setValidatorSort((w==null?void 0:w.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),e(ue,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:w=>a.setSearchQuery(w.target.value),placeholder:"search..."})]})]}),e(U,{children:e(Ct,{onRewards:p,connected:Ke(Number(t.chainId)),account:t.account??"",balance:t.balance,totalStaked:st(n),totalUnbonding:l.total_unbonding,totalRewards:k,apr:b,userValidationInfo:o,undelegationValidators:s,canClaim:N.claimRewards})}),e(U,{children:e(It,{validators:be(c,n,l)})})]})]})]})};export{aa as default};
