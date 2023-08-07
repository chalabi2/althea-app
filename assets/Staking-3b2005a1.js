import{l as P,S as Y,d as W,T as Z,a as J,b as D,c as I}from"./selected-61f4737e.js";import{n as f,D as h,at as pe,a as i,j as t,T as p,au as X,am as ee,B as S,av as te,u,a4 as ae,aw as he,H as w,ax as O,ay as ge,ap as fe,aa as be,ab as xe,as as ye,F as H,U as G,az as re,X as oe,P as Q,Z as ve,m as R,i as v,f as $,a5 as we,z as U,aA as ke,aB as Ne,_ as K,V as Ee,aC as Ce}from"./index-17a3bcd6.js";import{h as Se}from"./moment-9d68d5ae.js";import{t as Ae,a as Te,b as _e,c as De,g as ne,d as Ie,e as je,f as ze,h as Re,i as Le,j as Ve}from"./transactionHelpers-abcc7fd5.js";import{T as ie,u as le,O as Me}from"./ongoingTxModal-ce98d15e.js";import{H as Be}from"./seo-ebc76921.js";const Ue=({totalStaked:e,rewards:a,apr:o,onRewards:c,canClaim:d,onDelegate:r})=>{const{theme:n}=h.useContext(pe);return i(Fe,{children:[i("div",{className:"dual-item",style:{margin:"0"},children:[t("div",{className:"top",children:t(p,{type:"text",size:"text1",children:"total staked"})}),t("div",{className:"bottom",children:t(p,{type:"text",children:e})})]}),t("div",{className:"separator"}),i("div",{className:"dual-item",children:[t("div",{className:"top",children:t(p,{type:"text",size:"text1",children:"apr"})}),t("div",{className:"bottom",children:i(p,{type:"text",children:[o,"%"]})})]}),t("div",{className:"separator"}),i("div",{className:"dual-item",children:[t("div",{className:"top",children:t(p,{type:"text",size:"text1",children:"rewards"})}),t("div",{className:"bottom",children:t(p,{type:"text",children:a})})]}),i("div",{className:"buttons-container",children:[t(X,{type:"outlined",style:{height:"big"},theme:n,disabled:Number(a)==0||!d,onClick:c,children:t(p,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),t(X,{type:"outlined",style:{height:"big"},theme:n,onClick:r,children:t(p,{size:"text2",type:"text",bold:!0,children:"auto stake"})})]})]})},Fe=f.div`
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
`;var A=(e=>(e.DELEGATE="DELEGATE",e.UNDELEGATE="UNDELEGATE",e.REDELEGATE="REDELEGATE",e.CLAIM_REWARDS="CLAIM_REWARDS",e))(A||{});const Pe={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var T=(e=>(e[e.STAKE=0]="STAKE",e[e.AUTO_DELEGATE=1]="AUTO_DELEGATE",e[e.CLAIM_REWARDS=2]="CLAIM_REWARDS",e[e.NONE=3]="NONE",e))(T||{});const q=ee(e=>({currentModal:3,open:a=>e({currentModal:a}),close:()=>e({currentModal:3}),activeValidator:Pe,setActiveValidator:a=>e({activeValidator:a})})),Oe="/althea-app/assets/rightArrow-189f42f9.svg",Ge="/althea-app/assets/arrow-4cafc986.svg",Qe=f.table`
  .jailed {
    color: #ef4444;
    &::after {
      content: url(${Ge});
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
        content: url(${Oe});
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
`,se=e=>{const[a,o]=h.useState(!1);return t("div",{children:i(Qe,{children:[t("thead",{children:t("tr",{children:e.columns.map((c,d)=>t("th",{style:{backgroundColor:a&&d==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(d),o(!0)},children:c},c))})}),t("tbody",{children:e.children})]})})},$e="/althea-app/assets/lock-ee10952d.svg";f.div`
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
`;f.div`
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
`;f.div`
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
`;const We=f.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,He=f.div`
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
`;f(He)`
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
`;f.div`
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
`;function Ke(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const ce=e=>{const[a,o]=h.useState(0),c=q(),d=e.validators.sort((r,n)=>{var g,y;if(e.searched)return P(e.searched,r.validator.description.moniker)>P(e.searched,n.validator.description.moniker)?1:-1;const l=e.sortBy==="userTotal"?(g=r.userDelegations)==null?void 0:g.balance.amount:r.validator.tokens,m=e.sortBy==="userTotal"?(y=n.userDelegations)==null?void 0:y.balance.amount:n.validator.tokens;return S.from(l).gt(S.from(m))?-1:1});return e.validators.length?t(se,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:r=>o(r),columnClicked:a,children:t(te,{children:d.map((r,n)=>{var l,m;return t(qe,{rank:n+1,name:r.validator.description.moniker,totalStake:r.validator.tokens,userStake:((l=r.userDelegations)==null?void 0:l.balance.amount)??"0",commission:Number(r.validator.commission.commission_rates.rate),jailed:r.validator.jailed,onClick:()=>{c.setActiveValidator(r),c.open(T.STAKE)},sortableProps:[1/Number(n),r.validator.description.moniker,Number(u.formatEther(r.validator.tokens)),Number(u.formatEther(((m=r.userDelegations)==null?void 0:m.balance.amount)??"0")),Number(r.validator.commission.commission_rates.rate)]},n)}).sort((r,n)=>{var l,m;return Ke((l=r.props.sortableProps)==null?void 0:l[a],(m=n.props.sortableProps)==null?void 0:m[a])})})}):null},qe=e=>i("tr",{onClick:e.onClick,className:`${e.jailed?"jailed":""}`,style:{borderColor:e.jailed?"#EF4444":"var(--primary-color)"},children:[t("td",{children:e.rank}),i("td",{children:[e.jailed?t(ae,{trigger:t("img",{style:{height:"20px"},src:$e}),on:["hover","focus"],children:t(We,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,e.name]}),i("td",{children:[he(Number(w(u.formatEther(e.totalStake))))," ",t(O,{})]}),i("td",{children:[u.commify(w(u.formatEther(e.userStake))),t(O,{})]}),t("td",{children:ge(e.commission)})]});function Xe(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const Ye=e=>{var d,r;const[a,o]=h.useState(2),c=[];for(const n of e.validators)if((d=n.undelagatingInfo)!=null&&d.lockouts)for(const l of((r=n.undelagatingInfo)==null?void 0:r.lockouts)??[])c.push({name:n.validator.description.moniker,amount:l.value_of_coin,completionDate:l.complete_time_stamp});return e.validators.length?t(se,{columns:["name","undelegation","completion date"],onColumnClicked:n=>o(n),columnClicked:a,children:t(te,{children:c.map((n,l)=>t(Ze,{name:n.name,amount:n.amount,completionDate:Se.utc(n.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[n.name,Number(u.formatEther(n.amount))]},l)).sort((n,l)=>{var m,g;return a==2?-1:Xe((m=n.props.sortableProps)==null?void 0:m[a],(g=l.props.sortableProps)==null?void 0:g[a])})})}):null},Ze=e=>i("tr",{children:[t("td",{children:e.name}),i("td",{children:[u.commify(w(u.formatEther(e.amount)))," ",t(O,{})]}),t("td",{style:{display:"table-cell"},children:e.completionDate})]}),Je=e=>{const{activateBrowserWallet:a}=fe();return t(et,{children:e.connected?i(H,{children:[i("div",{children:[t(Ue,{balance:w(u.formatEther(e.balance)),totalStaked:w(u.formatEther(e.totalStaked)),totalUnbonding:w(u.formatEther(e.totalUnbonding)),onRewards:e.onRewards,rewards:w(u.formatEther(e.totalRewards)),apr:e.apr,canClaim:e.canClaim,onDelegate:e.onDelegate}),t(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.userValidationInfo.length==0,children:"current staking position"}),t(ce,{validators:e.userValidationInfo,sortBy:"userTotal"}),t(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),t(Ye,{validators:e.undelegationValidators}),t("br",{})]}),t("div",{style:{height:"60px"}})]}):t(be,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:xe,onClick:()=>{a(),ye()}})})},et=f.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,de=ee(e=>({inAllValidators:!1,setInAllValidators:a=>e({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{e({searchQuery:a})},validatorSort:1,setValidatorSort:a=>e({validatorSort:a})})),tt=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],at=e=>{const a=de(),[o,c]=h.useState(!1),d=()=>{const r=e.validators.filter(n=>a.validatorSort==1?!n.validator.jailed:a.validatorSort==2?n.validator.jailed:!0);return a.searchQuery===""?r:r.filter(n=>P(a.searchQuery,n.validator.description.moniker.toLowerCase())<6||n.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return h.useEffect(()=>{!o&&a.searchQuery!==""&&(G.events.stakingActions.userSearch(),c(!0))},[a.searchQuery]),i(rt,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:d().length==0?"black":"transparent"},children:[i("div",{className:"sort-search-local",children:[t(Y,{style:{width:"18rem"},children:t(W,{className:"react-select-container",styles:{dropdownIndicator:r=>({...r,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:tt,onChange:r=>{a.setValidatorSort((r==null?void 0:r.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),t(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:r=>a.setSearchQuery(r.target.value),placeholder:"search..."})]}),t("div",{style:{height:"16px"}}),d().length==0?i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[t(oe,{color:"var(--primary-color)",size:"30px"}),t(p,{size:"title2",type:"title",children:"no validators match this search"})]}):i(H,{children:[t(ce,{validators:d(),sortBy:"validatorTotal",searched:a.searchQuery}),t("div",{style:{height:"60px"}})]})]})},rt=f.div`
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
`,ot=f.div`
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
`,nt=f.div`
  background-color: var(--background);
  height: fit-content;
  max-height: 90vh;
  padding-bottom: 40px;
  width: 33rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;

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
`,L={amount:"300000000000000000",denom:"aalthea",gas:"300000"},me={amount:"500000000000000000",denom:"aalthea",gas:"500000"},ue={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},it={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},lt=f.div`
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
`,st=e=>i(lt,{children:[t(oe,{color:"var(--primary-color)",size:"30px"}),t(p,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),t(p,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),t(Q,{className:"btn-group",onClick:()=>e.onUndelegate(),children:"confirm undelegation"}),t(ve,{className:"btn-group",onClick:()=>e.onCancel(),children:"undelegate later"})]});async function F(e,a,o){var r,n,l;if(!o.account)return e.setStatus({error:"No account found"}),!1;if(!o.chainId)return e.setStatus({error:"No chainId found"}),!1;const c=u.formatUnits(o.amount,18),d=a===A.REDELEGATE;return await e.addTransactionList([d?mt(o.chainId,o.account,o.operator.address,((r=o.newOperator)==null?void 0:r.address)??"",o.amount,v(o.chainId),me,$(o.chainId),"",{amount:c,symbol:`from ${(n=o.operator)==null?void 0:n.name} to ${(l=o.newOperator)==null?void 0:l.name}`}):dt(o.chainId,a===A.DELEGATE,o.account,o.operator.address,o.amount,v(o.chainId),L,$(o.chainId),"",{amount:c,symbol:o.operator.name})],{title:a,txListMethod:ie.COSMOS,chainId:o.chainId})}async function ct(e,a,o,c){return o?a?await e.addTransactionList([{chainId:a,txType:R.CLAIM_REWARDS_STAKING,tx:Ae,params:[o,v(a),ue,$(a),"",c]}],{title:"Claim Staking Rewards",txListMethod:ie.COSMOS,chainId:a}):(e.setStatus({error:"No chainId found"}),!1):(e.setStatus({error:"No account found"}),!1)}const dt=(e,a,o,c,d,r,n,l,m,g)=>({chainId:e,txType:a?R.DELEGATE:R.UNDELEGATE,tx:a?Te:_e,params:[o,c,d,r,n,l,m],extraDetails:g}),mt=(e,a,o,c,d,r,n,l,m,g)=>({chainId:e,txType:R.REDELEGATE,tx:De,params:[a,d,r,n,l,m,o,c],extraDetails:g}),ut=({validator:e,allValidators:a,balance:o,account:c,txFeeCheck:d,txStore:r,chainId:n})=>{var k,N,M;const[l,m]=h.useState(""),[g,y]=h.useState(!1),[x,_]=h.useState(),[E,b]=h.useState(!1),C={account:c??"",chainId:n,amount:we(l,18).toString(),newOperator:{address:(x==null?void 0:x.operator_address)??"",name:(x==null?void 0:x.description.moniker)??""},operator:{address:e.validator.operator_address,name:e.validator.description.moniker}},j=()=>F(r,A.DELEGATE,C),V=()=>F(r,A.UNDELEGATE,C),z=()=>F(r,A.REDELEGATE,C);return i(nt,{children:[t(p,{size:"title2",type:"title",className:"title",children:e.validator.description.moniker}),i("div",{className:"desc",children:[t("div",{style:{marginBottom:".5rem"},children:i(p,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[e.validator.description.details.toLowerCase()," "]})}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"delegation"}),i("p",{className:"value",children:[u.formatEther(((k=e.userDelegations)==null?void 0:k.balance.amount)??0)," althea"]})]}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"available balance"}),i("p",{className:"value",children:[w(u.formatEther(o))," althea"]})]}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"commission"}),i("p",{className:"value",children:[(Number(e.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),t("div",{className:"group",children:i(Z,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(J,{className:"tablist",children:[t(D,{className:"tab",selectedClassName:"tab-selected",children:t(p,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),t(D,{className:"tab",selectedClassName:"tab-selected",children:t(p,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),t(D,{className:"tab",selectedClassName:"tab-selected",children:t(p,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),i(I,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[t(U,{placeholder:"enter amount...",value:l,onChange:s=>{m(s.target.value)}}),t("button",{className:"max",onClick:()=>{const s=S.from(L.amount).add(L.gas).add(u.parseEther("1"));o.sub(s).lte(0)?m("0"):m(u.formatEther(o.sub(s)))},children:"max"})]}),i("div",{className:"agreement",children:[t("div",{children:t(ke,{checked:g,onChange:s=>{y(s)}})}),t(p,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),t(Q,{weight:"bold",height:"big",disabled:!g||Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(o))||!d.delegate,className:"btn",onClick:j,children:"delegate"}),!d.delegate&&t(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),i(I,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[t(U,{placeholder:"enter amount...",value:l,onChange:s=>{m(s.target.value)}}),t("button",{className:"max",onClick:()=>{var s;m(u.formatEther(((s=e.userDelegations)==null?void 0:s.balance.amount)??"0"))},children:"max"})]}),t(Ne,{weight:"bold",height:"big",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(((N=e.userDelegations)==null?void 0:N.balance.amount)??"0"))||!d.undelegate,onClick:()=>b(!0),children:"undelegate"}),!d.undelegate&&t(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),E&&t(st,{onUndelegate:V,onCancel:()=>b(!1)})]}),i(I,{className:"tabPanel",children:[t("div",{className:"amount",style:{marginTop:"1rem"},children:t("div",{className:"btn-grp",children:t(pt,{children:t(W,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(s=>s.description.moniker!=e.validator.description.moniker?{value:s,label:s.description.moniker}:{}),onChange:s=>{_(s==null?void 0:s.value)}})})})}),i("div",{className:"amount",children:[t(U,{placeholder:"enter amount...",value:l,onChange:s=>{m(s.target.value)}}),t("button",{className:"max",onClick:()=>{var s;m(u.formatEther(((s=e.userDelegations)==null?void 0:s.balance.amount)??"0"))},children:"max"})]}),t(Q,{height:"big",weight:"bold",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(((M=e.userDelegations)==null?void 0:M.balance.amount)??"0"))||x==null||!d.redelegate,onClick:()=>z(),children:"re-delegate"}),!d.redelegate&&t(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},pt=f.div`
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
`,ht=f(ae)`
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
`,gt=e=>{const a=q(),o=le(),c=K();return h.useEffect(()=>{a.currentModal!=T.NONE&&G.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),i(ht,{open:a.currentModal!=T.NONE,onClose:()=>{a.close(),G.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[t("div",{role:"button",tabIndex:0,onClick:a.close,children:t("img",{src:Ee,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),t(Me,{onClose:a.close}),a.currentModal===T.STAKE&&t(ut,{validator:a.activeValidator,allValidators:e.allValidators,balance:c.balance,account:c.account,txFeeCheck:e.txBalanceChecks,txStore:o,chainId:Number(c.chainId)})]})},ft=()=>{const e=q(),a=K(),o=le(),[c,d]=h.useState([]),[r,n]=h.useState("0"),[l,m]=h.useState([]),[g,y]=h.useState({total_unbonding:S.from("0")}),[x,_]=h.useState(S.from("0"));async function E(){e.open(T.STAKE),ct(o,Number(a.chainId),a.account??"",z)}async function b(){}async function C(){a.account&&(m(await Ie(v(Number(a.chainId)),a.account)),_(await je(v(Number(a.chainId)),a.account)),y(await ze(v(Number(a.chainId)),a.account))),d(await Re(v(Number(a.chainId)))),n(await Le(v(Number(a.chainId))))}h.useEffect(()=>{const s=setInterval(async()=>{await C()},6e3);return()=>clearInterval(s)},[a.account]),h.useEffect(()=>{C()},[a.account]);const j=ne(c,l,g),V=j.filter(s=>!!s.undelagatingInfo),z=j.filter(s=>!!s.userDelegations);function k(s,B){return S.from(s.amount).add(s.gas).add(B??0)}function N(s,B){return s.gt(B)}return{validators:c,delegations:l,undelegations:g,userValidators:z,undelagatingValidators:V,handleClaimRewards:E,autoDelegate:b,rewards:x,stakingApr:r,txFeeCheck:(()=>{const s=a.balance;return{claimRewards:N(s,k(ue)),delegate:N(s,k(L,u.parseEther("1"))),redelegate:N(s,k(it)),undelegate:N(s,k(me))}})()}},Nt=()=>{const e=K(),a=de(),[o,c]=h.useState(!1),{validators:d,delegations:r,undelegations:n,userValidators:l,undelagatingValidators:m,handleClaimRewards:g,autoDelegate:y,rewards:x,stakingApr:_,txFeeCheck:E}=ft();return i(H,{children:[t(Be,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),i(ot,{children:[t(gt,{allValidators:d,txBalanceChecks:E}),i(Z,{className:"tabs",children:[i(J,{className:"tablist",children:[t(D,{className:o?"tab tab-hover":"tab",onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),t(D,{className:o?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:"all validators"}),i("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[t(Y,{style:{width:"10rem"},children:t(W,{className:"react-select-container",styles:{dropdownIndicator:b=>({...b,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:b=>{a.setValidatorSort((b==null?void 0:b.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),t(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:b=>a.setSearchQuery(b.target.value),placeholder:"search..."})]})]}),t(I,{children:t(Je,{onRewards:g,connected:Ce(Number(e.chainId)),account:e.account??"",balance:e.balance,totalStaked:Ve(r),totalUnbonding:n.total_unbonding,totalRewards:x,apr:_,userValidationInfo:l,undelegationValidators:m,canClaim:E.claimRewards,onDelegate:y})}),t(I,{children:t(at,{validators:ne(d,r,n)})})]})]})]})};export{Nt as default};
