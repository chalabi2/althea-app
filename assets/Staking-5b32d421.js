import{l as Q,S as J,d as H,T as X,a as Z,b as M,c as j}from"./selected-acff63fe.js";import{ae as ee,n as x,D as h,al as ge,a as l,j as t,T as g,am as Y,B as A,an as te,u as p,Y as ae,ao as fe,H as C,ap as $,aq as be,ah as xe,a2 as ye,a3 as ve,ak as we,F as P,I as W,ar as re,L as oe,P as F,Q as ke,m as L,i as S,f as O,Z as ne,z as B,as as Ne,at as Ee,au as Se,av as Ce,N as Te,R as K,J as Ae,aw as Ie}from"./index-6a32c621.js";import{g as _e,t as De,a as Ve,b as Me,c as je,d as Le,e as ie,f as ze,h as Re,i as Be,j as Fe,k as Oe,l as Pe}from"./transactionHelpers-affd6726.js";import{h as Ue}from"./moment-7785d891.js";import{T as q,u as le,O as Ge}from"./index-e1b652de.js";import{H as Qe}from"./seo-25fd4aea.js";var _=(e=>(e.DELEGATE="DELEGATE",e.UNDELEGATE="UNDELEGATE",e.REDELEGATE="REDELEGATE",e.CLAIM_REWARDS="CLAIM_REWARDS",e))(_||{});const $e={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},moniker:"",jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var T=(e=>(e[e.STAKE=0]="STAKE",e[e.AUTO_DELEGATE=1]="AUTO_DELEGATE",e[e.CLAIM_REWARDS=2]="CLAIM_REWARDS",e[e.NONE=3]="NONE",e))(T||{});const z=ee(e=>({currentModal:3,open:a=>e({currentModal:a}),close:()=>e({currentModal:3}),activeValidator:$e,activeValidators:[],setActiveValidator:a=>e({activeValidator:a}),setActiveValidators:a=>e({activeValidators:a})}));async function se(e){const a=await _e(),r=a.reduce((o,s)=>o+parseFloat(s.commission),0)/a.length;a.forEach(o=>{let s=0;const m=r-parseFloat(o.commission);m<0?s-=Math.abs(m):s+=m,o.missedBlocks<=100?s+=5:s-=o.missedBlocks-100,o.slashings>1?s-=(o.slashings-1)*5:o.slashings===0&&(s+=5),o.score=s});const c=[...a].sort((o,s)=>parseFloat(s.tokens)-parseFloat(o.tokens)).slice(0,10),d=new Set(c.map(o=>o.operator_address));return a.filter(o=>!d.has(o.operator_address)).sort((o,s)=>s.score-o.score).slice(0,10)}const We=({totalStaked:e,rewards:a,apr:r,onRewards:c,canClaim:d})=>{const{theme:n}=h.useContext(ge),[i,o]=h.useState([]);z(f=>f.open);const{setActiveValidators:s,open:m}=z(),k=async()=>{m(T.AUTO_DELEGATE);const f=await se();o(f),s(f)};return l(He,{children:[l("div",{className:"dual-item",style:{margin:"0"},children:[t("div",{className:"top",children:t(g,{type:"text",size:"text1",children:"total staked"})}),t("div",{className:"bottom",children:t(g,{type:"text",children:e})})]}),t("div",{className:"separator"}),l("div",{className:"dual-item",children:[t("div",{className:"top",children:t(g,{type:"text",size:"text1",children:"apr"})}),t("div",{className:"bottom",children:l(g,{type:"text",children:[r,"%"]})})]}),t("div",{className:"separator"}),l("div",{className:"dual-item",children:[t("div",{className:"top",children:t(g,{type:"text",size:"text1",children:"rewards"})}),t("div",{className:"bottom",children:t(g,{type:"text",children:a})})]}),l("div",{className:"buttons-container",children:[t(Y,{type:"outlined",style:{height:"big"},theme:n,disabled:Number(a)==0||!d,onClick:c,children:t(g,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),t(Y,{type:"outlined",style:{height:"big"},theme:n,onClick:k,children:t(g,{size:"text2",type:"text",bold:!0,children:"multi stake"})})]})]})},He=x.div`
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
`,Ke="/althea-app/assets/rightArrow-189f42f9.svg",qe="/althea-app/assets/arrow-4cafc986.svg",Ye=x.table`
  .jailed {
    color: #ef4444;
    &::after {
      content: url(${qe});
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
        content: url(${Ke});
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
`,ce=e=>{const[a,r]=h.useState(!1);return t("div",{children:l(Ye,{children:[t("thead",{children:t("tr",{children:e.columns.map((c,d)=>t("th",{style:{backgroundColor:a&&d==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(d),r(!0)},children:c},c))})}),t("tbody",{children:e.children})]})})},Je="/althea-app/assets/lock-ee10952d.svg";x.div`
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
`;x.div`
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
`;x.div`
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
`;const Xe=x.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,Ze=x.div`
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
`;x(Ze)`
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
`;x.div`
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
`;function et(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const de=e=>{const[a,r]=h.useState(0),c=z(),d=e.validators.sort((n,i)=>{var m,k;if(e.searched)return Q(e.searched,n.validator.description.moniker)>Q(e.searched,i.validator.description.moniker)?1:-1;const o=e.sortBy==="userTotal"?(m=n.userDelegations)==null?void 0:m.balance.amount:n.validator.tokens,s=e.sortBy==="userTotal"?(k=i.userDelegations)==null?void 0:k.balance.amount:i.validator.tokens;return A.from(o).gt(A.from(s))?-1:1});return e.validators.length?t(ce,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:n=>r(n),columnClicked:a,children:t(te,{children:d.map((n,i)=>{var o,s;return t(tt,{rank:i+1,name:n.validator.description.moniker,totalStake:n.validator.tokens,userStake:((o=n.userDelegations)==null?void 0:o.balance.amount)??"0",commission:Number(n.validator.commission.commission_rates.rate),jailed:n.validator.jailed,onClick:()=>{c.setActiveValidator(n),c.open(T.STAKE)},sortableProps:[1/Number(i),n.validator.description.moniker,Number(p.formatEther(n.validator.tokens)),Number(p.formatEther(((s=n.userDelegations)==null?void 0:s.balance.amount)??"0")),Number(n.validator.commission.commission_rates.rate)]},i)}).sort((n,i)=>{var o,s;return et((o=n.props.sortableProps)==null?void 0:o[a],(s=i.props.sortableProps)==null?void 0:s[a])})})}):null},tt=e=>l("tr",{onClick:e.onClick,className:`${e.jailed?"jailed":""}`,style:{borderColor:e.jailed?"#EF4444":"var(--primary-color)"},children:[t("td",{children:e.rank}),l("td",{children:[e.jailed?t(ae,{trigger:t("img",{style:{height:"20px"},src:Je}),on:["hover","focus"],children:t(Xe,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,e.name]}),l("td",{children:[fe(Number(C(p.formatEther(e.totalStake))))," ",t($,{})]}),l("td",{children:[p.commify(C(p.formatEther(e.userStake))),t($,{})]}),t("td",{children:be(e.commission)})]});function at(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const rt=e=>{var d,n;const[a,r]=h.useState(2),c=[];for(const i of e.validators)if((d=i.undelagatingInfo)!=null&&d.lockouts)for(const o of((n=i.undelagatingInfo)==null?void 0:n.lockouts)??[])c.push({name:i.validator.description.moniker,amount:o.value_of_coin,completionDate:o.complete_time_stamp});return e.validators.length?t(ce,{columns:["name","undelegation","completion date"],onColumnClicked:i=>r(i),columnClicked:a,children:t(te,{children:c.map((i,o)=>t(ot,{name:i.name,amount:i.amount,completionDate:Ue.utc(i.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[i.name,Number(p.formatEther(i.amount))]},o)).sort((i,o)=>{var s,m;return a==2?-1:at((s=i.props.sortableProps)==null?void 0:s[a],(m=o.props.sortableProps)==null?void 0:m[a])})})}):null},ot=e=>l("tr",{children:[t("td",{children:e.name}),l("td",{children:[p.commify(C(p.formatEther(e.amount)))," ",t($,{})]}),t("td",{style:{display:"table-cell"},children:e.completionDate})]}),nt=e=>{const{activateBrowserWallet:a}=xe();return t(it,{children:e.connected?l(P,{children:[l("div",{children:[t(We,{balance:C(p.formatEther(e.balance)),totalStaked:C(p.formatEther(e.totalStaked)),totalUnbonding:C(p.formatEther(e.totalUnbonding)),onRewards:e.onRewards,rewards:C(p.formatEther(e.totalRewards)),apr:e.apr,canClaim:e.canClaim}),t(g,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.userValidationInfo.length==0,children:"current staking position"}),t(de,{validators:e.userValidationInfo,sortBy:"userTotal"}),t(g,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),t(rt,{validators:e.undelegationValidators}),t("br",{})]}),t("div",{style:{height:"60px"}})]}):t(ye,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:ve,onClick:()=>{a(),we()}})})},it=x.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,me=ee(e=>({inAllValidators:!1,setInAllValidators:a=>e({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{e({searchQuery:a})},validatorSort:1,setValidatorSort:a=>e({validatorSort:a})})),lt=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],st=e=>{const a=me(),[r,c]=h.useState(!1),d=()=>{const n=e.validators.filter(i=>a.validatorSort==1?!i.validator.jailed:a.validatorSort==2?i.validator.jailed:!0);return a.searchQuery===""?n:n.filter(i=>Q(a.searchQuery,i.validator.description.moniker.toLowerCase())<6||i.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return h.useEffect(()=>{!r&&a.searchQuery!==""&&(W.events.stakingActions.userSearch(),c(!0))},[a.searchQuery]),l(ct,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:d().length==0?"black":"transparent"},children:[l("div",{className:"sort-search-local",children:[t(J,{style:{width:"18rem"},children:t(H,{className:"react-select-container",styles:{dropdownIndicator:n=>({...n,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:lt,onChange:n=>{a.setValidatorSort((n==null?void 0:n.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),t(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:n=>a.setSearchQuery(n.target.value),placeholder:"search..."})]}),t("div",{style:{height:"16px"}}),d().length==0?l("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[t(oe,{color:"var(--primary-color)",size:"30px"}),t(g,{size:"title2",type:"title",children:"no validators match this search"})]}):l(P,{children:[t(de,{validators:d(),sortBy:"validatorTotal",searched:a.searchQuery}),t("div",{style:{height:"60px"}})]})]})},ct=x.div`
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
`,dt=x.div`
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
`,ue=x.div`
  background-color: var(--background);
  height: fit-content;
  max-height: 90vh;
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
`,D={amount:"300000000000000000",denom:"aalthea",gas:"300000"},pe={amount:"500000000000000000",denom:"aalthea",gas:"500000"},he={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},mt={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},ut=x.div`
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
`,pt=e=>l(ut,{children:[t(oe,{color:"var(--primary-color)",size:"30px"}),t(g,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),t(g,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),t(F,{className:"btn-group",onClick:()=>e.onUndelegate(),children:"confirm undelegation"}),t(ke,{className:"btn-group",onClick:()=>e.onCancel(),children:"undelegate later"})]});async function ht(e,a,r){if(!r.account)return console.error("No account provided"),e.setStatus({error:"No account found"}),!1;if(!r.chainId)return console.error("No chainId provided"),e.setStatus({error:"No chainId found"}),!1;const c=r.multipOperator.length,d=A.from(r.amount),n=d.div(c),i=d.sub(n.mul(c)),o=Array(c).fill(n),s=Math.floor(Math.random()*c);o[s]=o[s].add(i);const m=o.map(v=>v.toString()),k=r.multipOperator.map((v,w)=>({type:"delegate",operator:v.address,amount:m[w],symbol:"aalthea"})),f=bt(r.chainId,r.account,r.multipOperator.map(v=>v.address),m,S(r.chainId),D,O(r.chainId),"",{delegateMessages:k});return await e.addTransactionList([f],{title:a,txListMethod:q.COSMOS,chainId:r.chainId})}async function G(e,a,r){var n,i,o;if(!r.account)return e.setStatus({error:"No account found"}),!1;if(!r.chainId)return e.setStatus({error:"No chainId found"}),!1;const c=p.formatUnits(r.amount,18),d=a===_.REDELEGATE;return await e.addTransactionList([d?xt(r.chainId,r.account,r.operator.address,((n=r.newOperator)==null?void 0:n.address)??"",r.amount,S(r.chainId),pe,O(r.chainId),"",{amount:c,symbol:`from ${(i=r.operator)==null?void 0:i.name} to ${(o=r.newOperator)==null?void 0:o.name}`}):ft(r.chainId,a===_.DELEGATE,r.account,r.operator.address,r.amount,S(r.chainId),D,O(r.chainId),"",{amount:c,symbol:r.operator.name})],{title:a,txListMethod:q.COSMOS,chainId:r.chainId})}async function gt(e,a,r,c){return r?a?await e.addTransactionList([{chainId:a,txType:L.CLAIM_REWARDS_STAKING,tx:De,params:[r,S(a),he,O(a),"",c]}],{title:"Claim Staking Rewards",txListMethod:q.COSMOS,chainId:a}):(e.setStatus({error:"No chainId found"}),!1):(e.setStatus({error:"No account found"}),!1)}const ft=(e,a,r,c,d,n,i,o,s,m)=>({chainId:e,txType:a?L.DELEGATE:L.UNDELEGATE,tx:a?Ve:Me,params:[r,c,d,n,i,o,s],extraDetails:m}),bt=(e,a,r,c,d,n,i,o,s)=>({chainId:e,txType:L.DELEGATE_MULTIPLE,tx:je,params:[a,r,c,d,n,i,o,s],extraDetails:s}),xt=(e,a,r,c,d,n,i,o,s,m)=>({chainId:e,txType:L.REDELEGATE,tx:Le,params:[a,d,n,i,o,s,r,c],extraDetails:m}),yt=({validator:e,allValidators:a,balance:r,account:c,txFeeCheck:d,txStore:n,chainId:i})=>{var I,U,y;const[o,s]=h.useState(""),[m,k]=h.useState(!1),[f,v]=h.useState(),[w,b]=h.useState(!1),N={account:c??"",chainId:i,amount:ne(o,18).toString(),multipOperator:[],newOperator:{address:(f==null?void 0:f.operator_address)??"",name:(f==null?void 0:f.description.moniker)??""},operator:{address:e.validator.operator_address,name:e.validator.description.moniker}},E=()=>G(n,_.DELEGATE,N),R=()=>G(n,_.UNDELEGATE,N),V=()=>G(n,_.REDELEGATE,N);return l(ue,{children:[t(g,{size:"title2",type:"title",className:"title",children:e.validator.description.moniker}),l("div",{className:"desc",children:[t("div",{style:{marginBottom:".5rem"},children:l(g,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[e.validator.description.details.toLowerCase()," "]})}),l("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"delegation"}),l("p",{className:"value",children:[p.formatEther(((I=e.userDelegations)==null?void 0:I.balance.amount)??0)," althea"]})]}),l("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"available balance"}),l("p",{className:"value",children:[C(p.formatEther(r))," althea"]})]}),l("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"commission"}),l("p",{className:"value",children:[(Number(e.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),t("div",{className:"group",children:l(X,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[l(Z,{className:"tablist",children:[t(M,{className:"tab",selectedClassName:"tab-selected",children:t(g,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),t(M,{className:"tab",selectedClassName:"tab-selected",children:t(g,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),t(M,{className:"tab",selectedClassName:"tab-selected",children:t(g,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),l(j,{className:"tabPanel",children:[l("div",{className:"amount",style:{marginTop:"1rem"},children:[t(B,{placeholder:"enter amount...",value:o,onChange:u=>{s(u.target.value)}}),t("button",{className:"max",onClick:()=>{const u=A.from(D.amount).add(D.gas).add(p.parseEther("1"));r.sub(u).lte(0)?s("0"):s(p.formatEther(r.sub(u)))},children:"max"})]}),l("div",{className:"agreement",children:[t("div",{children:t(Ne,{checked:m,onChange:u=>{k(u)}})}),t(g,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),t(F,{weight:"bold",height:"big",disabled:!m||Number(o)==0||isNaN(Number(o))||Number(o)>Number(p.formatEther(r))||!d.delegate,className:"btn",onClick:E,children:"delegate"}),!d.delegate&&t(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),l(j,{className:"tabPanel",children:[l("div",{className:"amount",style:{marginTop:"1rem"},children:[t(B,{placeholder:"enter amount...",value:o,onChange:u=>{s(u.target.value)}}),t("button",{className:"max",onClick:()=>{var u;s(p.formatEther(((u=e.userDelegations)==null?void 0:u.balance.amount)??"0"))},children:"max"})]}),t(Ee,{weight:"bold",height:"big",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(p.formatEther(((U=e.userDelegations)==null?void 0:U.balance.amount)??"0"))||!d.undelegate,onClick:()=>b(!0),children:"undelegate"}),!d.undelegate&&t(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),w&&t(pt,{onUndelegate:R,onCancel:()=>b(!1)})]}),l(j,{className:"tabPanel",children:[t("div",{className:"amount",style:{marginTop:"1rem"},children:t("div",{className:"btn-grp",children:t(vt,{children:t(H,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(u=>u.description.moniker!=e.validator.description.moniker?{value:u,label:u.description.moniker}:{}),onChange:u=>{v(u==null?void 0:u.value)}})})})}),l("div",{className:"amount",children:[t(B,{placeholder:"enter amount...",value:o,onChange:u=>{s(u.target.value)}}),t("button",{className:"max",onClick:()=>{var u;s(p.formatEther(((u=e.userDelegations)==null?void 0:u.balance.amount)??"0"))},children:"max"})]}),t(F,{height:"big",weight:"bold",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(p.formatEther(((y=e.userDelegations)==null?void 0:y.balance.amount)??"0"))||f==null||!d.redelegate,onClick:()=>V(),children:"re-delegate"}),!d.redelegate&&t(g,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},vt=x.div`
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
`,wt=({balance:e,account:a,txFeeCheck:r,txStore:c,chainId:d})=>{const[n,i]=h.useState(""),[o,s]=h.useState(!0),[m,k]=h.useState(!1),f=async()=>{if(!a){console.error("Account is not defined");return}const b=v.map(E=>({address:E.operator_address,name:E.moniker})),N={account:a,chainId:d,amount:ne(n,18).toString(),multipOperator:b,operator:b[0]};try{await ht(c,_.DELEGATE,N)?console.log("Staking transaction added successfully."):console.error("Failed to add the staking transaction.")}catch(E){console.error("Error while processing staking transaction:",E)}},[v,w]=h.useState([]);return h.useEffect(()=>{(async()=>{s(!0);const N=await se();w(N),s(!1)})()},[]),l(ue,{children:[l(g,{size:"title2",type:"title",className:"title",children:["Multi-Staking",t("div",{className:"menu-btn",children:t(Se,{src:Ce,width:27,height:27,rotateImage:!0,alt:"menu",onClick:()=>k(!m)})})]}),m&&t(kt,{children:"Multi Staking is a tool used to send your delegation to a group of random and performant validators below the top ten. The list is based off a ranking system that considers missed blocks, slashings, commission, voting power, and governance participation."}),l("div",{className:"desc",children:[l("div",{className:"amount",children:[t(B,{placeholder:"Enter amount to split between validators...",value:n,onChange:b=>{i(b.target.value)}}),t("button",{className:"max",onClick:()=>{const b=A.from(D.amount).add(D.gas).add(p.parseEther("1"));e.sub(b).lte(0)?i("0"):i(p.formatEther(e.sub(b)))},children:"Max"})]}),t("div",{className:"validators-list",children:o?t(P,{children:l(Et,{children:[t(Te,{size:"md"}),t("span",{children:"Finidng safest validators..."})]})}):t(Nt,{children:l("table",{children:[t("thead",{children:l("tr",{children:[t("th",{children:"Validator"}),t("th",{children:"Missed Blocks"}),t("th",{children:"Rank"}),t("th",{children:"Score"})]})}),t("tbody",{children:v.map(b=>l("tr",{children:[t("td",{children:b.moniker}),t("td",{children:b.missedBlocks}),l("td",{children:[b.trueRank,"th"]}),t("td",{children:Number(b.score).toFixed(4)})]},b.operator_address))})]})})}),t(F,{weight:"bold",height:"big",disabled:!n||!v.length||!r.delegate,className:"btn",onClick:f,children:"Delegate to Multiple Validators"}),!r.delegate&&t(g,{type:"text",size:"text3",style:{color:"red"},children:"Not enough funds for delegation fee"})]})]})},kt=x.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 90%; 
  margin-left: auto; 
  margin-right: auto;
`,Nt=x.div`
  width: 100%; 
  max-height: 45vh; 
  overflow-y: scroll;

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
`,Et=x.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
font-family: IBM Plex Sans; 
color: var(--primary-color);
span {
  margin-left: 40px;
`,St=x(ae)`
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
`,Ct=e=>{const a=z(),r=le(),c=K();return h.useEffect(()=>{a.currentModal!=T.NONE&&W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),l(St,{open:a.currentModal!=T.NONE,onClose:()=>{a.close(),W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[t("div",{role:"button",tabIndex:0,onClick:a.close,children:t("img",{src:Ae,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),t(Ge,{onClose:a.close}),a.currentModal===T.STAKE&&t(yt,{validator:a.activeValidator,allValidators:e.allValidators,balance:c.balance,account:c.account,txFeeCheck:e.txBalanceChecks,txStore:r,chainId:Number(c.chainId)}),a.currentModal===T.AUTO_DELEGATE&&t(wt,{allValidators:e.allValidators,balance:c.balance,account:c.account,txFeeCheck:e.txBalanceChecks,txStore:r,chainId:Number(c.chainId)})]})},Tt=()=>{const e=z(),a=K(),r=le(),[c,d]=h.useState([]),[n,i]=h.useState("0"),[o,s]=h.useState([]),[m,k]=h.useState({total_unbonding:A.from("0")}),[f,v]=h.useState(A.from("0"));async function w(){e.open(T.STAKE),gt(r,Number(a.chainId),a.account??"",R)}async function b(){a.account&&(s(await ze(S(Number(a.chainId)),a.account)),v(await Re(S(Number(a.chainId)),a.account)),k(await Be(S(Number(a.chainId)),a.account))),d(await Fe(S(Number(a.chainId)))),i(await Oe(S(Number(a.chainId))))}h.useEffect(()=>{const y=setInterval(async()=>{await b()},6e3);return()=>clearInterval(y)},[a.account]),h.useEffect(()=>{b()},[a.account]);const N=ie(c,o,m),E=N.filter(y=>!!y.undelagatingInfo),R=N.filter(y=>!!y.userDelegations);function V(y,u){return A.from(y.amount).add(y.gas).add(u??0)}function I(y,u){return y.gt(u)}return{validators:c,delegations:o,undelegations:m,userValidators:R,undelagatingValidators:E,handleClaimRewards:w,rewards:f,stakingApr:n,txFeeCheck:(()=>{const y=a.balance;return{claimRewards:I(y,V(he)),delegate:I(y,V(D,p.parseEther("1"))),redelegate:I(y,V(mt)),undelegate:I(y,V(pe))}})()}},jt=()=>{const e=K(),a=me(),[r,c]=h.useState(!1),{validators:d,delegations:n,undelegations:i,userValidators:o,undelagatingValidators:s,handleClaimRewards:m,rewards:k,stakingApr:f,txFeeCheck:v}=Tt();return l(P,{children:[t(Qe,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),l(dt,{children:[t(Ct,{allValidators:d,txBalanceChecks:v}),l(X,{className:"tabs",children:[l(Z,{className:"tablist",children:[t(M,{className:r?"tab tab-hover":"tab",onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),t(M,{className:r?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:"all validators"}),l("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[t(J,{style:{width:"10rem"},children:t(H,{className:"react-select-container",styles:{dropdownIndicator:w=>({...w,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:w=>{a.setValidatorSort((w==null?void 0:w.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),t(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:w=>a.setSearchQuery(w.target.value),placeholder:"search..."})]})]}),t(j,{children:t(nt,{onRewards:m,connected:Ie(Number(e.chainId)),account:e.account??"",balance:e.balance,totalStaked:Pe(n),totalUnbonding:i.total_unbonding,totalRewards:k,apr:f,userValidationInfo:o,undelegationValidators:s,canClaim:v.claimRewards})}),t(j,{children:t(st,{validators:ie(d,n,i)})})]})]})]})};export{jt as default};
