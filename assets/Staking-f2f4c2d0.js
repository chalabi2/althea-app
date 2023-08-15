import{l as $,S as X,d as H,T as J,a as Z,b as z,c as L}from"./selected-0592e6e0.js";import{ah as ee,n as b,D as h,ao as ge,a as i,j as t,T as p,ap as Y,B as T,aq as te,u,$ as ae,ar as fe,H as S,as as Q,at as be,ak as xe,a5 as ye,a6 as ve,an as we,F as U,L as W,au as re,R as oe,P as O,U as ke,m as V,i as E,f as P,av as Ne,a0 as ne,z as B,aw as Ee,ax as Se,ay as Ce,az as Te,S as Ae,V as K,N as Ie,aA as _e}from"./index-00c57a60.js";import{g as ie,t as De,a as je,b as ze,c as Le,d as Ve,e as le,f as Me,h as Re,i as Be,j as Oe,k as Pe,l as Ue}from"./transactionHelpers-17244c17.js";import{h as Fe}from"./moment-9d68d5ae.js";import{T as q,u as se,O as Ge}from"./index-bdc09e66.js";import{H as $e}from"./seo-1601b216.js";var I=(e=>(e.DELEGATE="DELEGATE",e.UNDELEGATE="UNDELEGATE",e.REDELEGATE="REDELEGATE",e.CLAIM_REWARDS="CLAIM_REWARDS",e))(I||{});const Qe={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},moniker:"",jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var C=(e=>(e[e.STAKE=0]="STAKE",e[e.AUTO_DELEGATE=1]="AUTO_DELEGATE",e[e.CLAIM_REWARDS=2]="CLAIM_REWARDS",e[e.NONE=3]="NONE",e))(C||{});const M=ee(e=>({currentModal:3,open:a=>e({currentModal:a}),close:()=>e({currentModal:3}),activeValidator:Qe,activeValidators:[],setActiveValidator:a=>e({activeValidator:a}),setActiveValidators:a=>e({activeValidators:a})})),We=({totalStaked:e,rewards:a,apr:r,onRewards:s,canClaim:d})=>{const{theme:o}=h.useContext(ge),[n,l]=h.useState([]);M(x=>x.open);const{setActiveValidators:c,open:g}=M(),w=async()=>{const x=await ie();l(x),c(x),g(C.AUTO_DELEGATE)};return i(He,{children:[i("div",{className:"dual-item",style:{margin:"0"},children:[t("div",{className:"top",children:t(p,{type:"text",size:"text1",children:"total staked"})}),t("div",{className:"bottom",children:t(p,{type:"text",children:e})})]}),t("div",{className:"separator"}),i("div",{className:"dual-item",children:[t("div",{className:"top",children:t(p,{type:"text",size:"text1",children:"apr"})}),t("div",{className:"bottom",children:i(p,{type:"text",children:[r,"%"]})})]}),t("div",{className:"separator"}),i("div",{className:"dual-item",children:[t("div",{className:"top",children:t(p,{type:"text",size:"text1",children:"rewards"})}),t("div",{className:"bottom",children:t(p,{type:"text",children:a})})]}),i("div",{className:"buttons-container",children:[t(Y,{type:"outlined",style:{height:"big"},theme:o,disabled:Number(a)==0||!d,onClick:s,children:t(p,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),t(Y,{type:"outlined",style:{height:"big"},theme:o,onClick:w,children:t(p,{size:"text2",type:"text",bold:!0,children:"multi stake"})})]})]})},He=b.div`
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
`,Ke="/althea-app/assets/rightArrow-189f42f9.svg",qe="/althea-app/assets/arrow-4cafc986.svg",Ye=b.table`
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
`,de=e=>{const[a,r]=h.useState(!1);return t("div",{children:i(Ye,{children:[t("thead",{children:t("tr",{children:e.columns.map((s,d)=>t("th",{style:{backgroundColor:a&&d==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(d),r(!0)},children:s},s))})}),t("tbody",{children:e.children})]})})},Xe="/althea-app/assets/lock-ee10952d.svg";b.div`
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
`;b.div`
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
`;b.div`
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
`;const Je=b.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,Ze=b.div`
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
`;b(Ze)`
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
`;b.div`
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
`;function et(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const ce=e=>{const[a,r]=h.useState(0),s=M(),d=e.validators.sort((o,n)=>{var g,w;if(e.searched)return $(e.searched,o.validator.description.moniker)>$(e.searched,n.validator.description.moniker)?1:-1;const l=e.sortBy==="userTotal"?(g=o.userDelegations)==null?void 0:g.balance.amount:o.validator.tokens,c=e.sortBy==="userTotal"?(w=n.userDelegations)==null?void 0:w.balance.amount:n.validator.tokens;return T.from(l).gt(T.from(c))?-1:1});return e.validators.length?t(de,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:o=>r(o),columnClicked:a,children:t(te,{children:d.map((o,n)=>{var l,c;return t(tt,{rank:n+1,name:o.validator.description.moniker,totalStake:o.validator.tokens,userStake:((l=o.userDelegations)==null?void 0:l.balance.amount)??"0",commission:Number(o.validator.commission.commission_rates.rate),jailed:o.validator.jailed,onClick:()=>{s.setActiveValidator(o),s.open(C.STAKE)},sortableProps:[1/Number(n),o.validator.description.moniker,Number(u.formatEther(o.validator.tokens)),Number(u.formatEther(((c=o.userDelegations)==null?void 0:c.balance.amount)??"0")),Number(o.validator.commission.commission_rates.rate)]},n)}).sort((o,n)=>{var l,c;return et((l=o.props.sortableProps)==null?void 0:l[a],(c=n.props.sortableProps)==null?void 0:c[a])})})}):null},tt=e=>i("tr",{onClick:e.onClick,className:`${e.jailed?"jailed":""}`,style:{borderColor:e.jailed?"#EF4444":"var(--primary-color)"},children:[t("td",{children:e.rank}),i("td",{children:[e.jailed?t(ae,{trigger:t("img",{style:{height:"20px"},src:Xe}),on:["hover","focus"],children:t(Je,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,e.name]}),i("td",{children:[fe(Number(S(u.formatEther(e.totalStake))))," ",t(Q,{})]}),i("td",{children:[u.commify(S(u.formatEther(e.userStake))),t(Q,{})]}),t("td",{children:be(e.commission)})]});function at(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const rt=e=>{var d,o;const[a,r]=h.useState(2),s=[];for(const n of e.validators)if((d=n.undelagatingInfo)!=null&&d.lockouts)for(const l of((o=n.undelagatingInfo)==null?void 0:o.lockouts)??[])s.push({name:n.validator.description.moniker,amount:l.value_of_coin,completionDate:l.complete_time_stamp});return e.validators.length?t(de,{columns:["name","undelegation","completion date"],onColumnClicked:n=>r(n),columnClicked:a,children:t(te,{children:s.map((n,l)=>t(ot,{name:n.name,amount:n.amount,completionDate:Fe.utc(n.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[n.name,Number(u.formatEther(n.amount))]},l)).sort((n,l)=>{var c,g;return a==2?-1:at((c=n.props.sortableProps)==null?void 0:c[a],(g=l.props.sortableProps)==null?void 0:g[a])})})}):null},ot=e=>i("tr",{children:[t("td",{children:e.name}),i("td",{children:[u.commify(S(u.formatEther(e.amount)))," ",t(Q,{})]}),t("td",{style:{display:"table-cell"},children:e.completionDate})]}),nt=e=>{const{activateBrowserWallet:a}=xe();return t(it,{children:e.connected?i(U,{children:[i("div",{children:[t(We,{balance:S(u.formatEther(e.balance)),totalStaked:S(u.formatEther(e.totalStaked)),totalUnbonding:S(u.formatEther(e.totalUnbonding)),onRewards:e.onRewards,rewards:S(u.formatEther(e.totalRewards)),apr:e.apr,canClaim:e.canClaim}),t(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.userValidationInfo.length==0,children:"current staking position"}),t(ce,{validators:e.userValidationInfo,sortBy:"userTotal"}),t(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),t(rt,{validators:e.undelegationValidators}),t("br",{})]}),t("div",{style:{height:"60px"}})]}):t(ye,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:ve,onClick:()=>{a(),we()}})})},it=b.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,me=ee(e=>({inAllValidators:!1,setInAllValidators:a=>e({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{e({searchQuery:a})},validatorSort:1,setValidatorSort:a=>e({validatorSort:a})})),lt=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],st=e=>{const a=me(),[r,s]=h.useState(!1),d=()=>{const o=e.validators.filter(n=>a.validatorSort==1?!n.validator.jailed:a.validatorSort==2?n.validator.jailed:!0);return a.searchQuery===""?o:o.filter(n=>$(a.searchQuery,n.validator.description.moniker.toLowerCase())<6||n.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return h.useEffect(()=>{!r&&a.searchQuery!==""&&(W.events.stakingActions.userSearch(),s(!0))},[a.searchQuery]),i(dt,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:d().length==0?"black":"transparent"},children:[i("div",{className:"sort-search-local",children:[t(X,{style:{width:"18rem"},children:t(H,{className:"react-select-container",styles:{dropdownIndicator:o=>({...o,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:lt,onChange:o=>{a.setValidatorSort((o==null?void 0:o.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),t(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:o=>a.setSearchQuery(o.target.value),placeholder:"search..."})]}),t("div",{style:{height:"16px"}}),d().length==0?i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[t(oe,{color:"var(--primary-color)",size:"30px"}),t(p,{size:"title2",type:"title",children:"no validators match this search"})]}):i(U,{children:[t(ce,{validators:d(),sortBy:"validatorTotal",searched:a.searchQuery}),t("div",{style:{height:"60px"}})]})]})},dt=b.div`
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
`,ct=b.div`
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
`,ue=b.div`
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
`,_={amount:"300000000000000000",denom:"aalthea",gas:"300000"},he={amount:"500000000000000000",denom:"aalthea",gas:"500000"},pe={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},mt={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},ut=b.div`
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
`,ht=e=>i(ut,{children:[t(oe,{color:"var(--primary-color)",size:"30px"}),t(p,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),t(p,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),t(O,{className:"btn-group",onClick:()=>e.onUndelegate(),children:"confirm undelegation"}),t(ke,{className:"btn-group",onClick:()=>e.onCancel(),children:"undelegate later"})]});async function pt(e,a,r){if(!r.account)return e.setStatus({error:"No account found"}),!1;if(!r.chainId)return e.setStatus({error:"No chainId found"}),!1;const s=r.multipOperator.length,o=T.from(r.amount).div(s),n=Ne(o,18);return await e.addTransactionList([bt(r.chainId,r.account,r.multipOperator.map(l=>l.address),n,E(r.chainId),_,P(r.chainId),"",{amount:n,symbol:r.multipOperator.map(l=>l.name).join(", ")})],{title:a,txListMethod:q.COSMOS,chainId:r.chainId})}async function G(e,a,r){var o,n,l;if(!r.account)return e.setStatus({error:"No account found"}),!1;if(!r.chainId)return e.setStatus({error:"No chainId found"}),!1;const s=u.formatUnits(r.amount,18),d=a===I.REDELEGATE;return await e.addTransactionList([d?xt(r.chainId,r.account,r.operator.address,((o=r.newOperator)==null?void 0:o.address)??"",r.amount,E(r.chainId),he,P(r.chainId),"",{amount:s,symbol:`from ${(n=r.operator)==null?void 0:n.name} to ${(l=r.newOperator)==null?void 0:l.name}`}):ft(r.chainId,a===I.DELEGATE,r.account,r.operator.address,r.amount,E(r.chainId),_,P(r.chainId),"",{amount:s,symbol:r.operator.name})],{title:a,txListMethod:q.COSMOS,chainId:r.chainId})}async function gt(e,a,r,s){return r?a?await e.addTransactionList([{chainId:a,txType:V.CLAIM_REWARDS_STAKING,tx:De,params:[r,E(a),pe,P(a),"",s]}],{title:"Claim Staking Rewards",txListMethod:q.COSMOS,chainId:a}):(e.setStatus({error:"No chainId found"}),!1):(e.setStatus({error:"No account found"}),!1)}const ft=(e,a,r,s,d,o,n,l,c,g)=>({chainId:e,txType:a?V.DELEGATE:V.UNDELEGATE,tx:a?je:ze,params:[r,s,d,o,n,l,c],extraDetails:g}),bt=(e,a,r,s,d,o,n,l,c)=>({chainId:e,txType:V.DELEGATE_MULTIPLE,tx:Le,params:[a,r,s,d,o,n,l],extraDetails:c}),xt=(e,a,r,s,d,o,n,l,c,g)=>({chainId:e,txType:V.REDELEGATE,tx:Ve,params:[a,d,o,n,l,c,r,s],extraDetails:g}),yt=({validator:e,allValidators:a,balance:r,account:s,txFeeCheck:d,txStore:o,chainId:n})=>{var A,F,y;const[l,c]=h.useState(""),[g,w]=h.useState(!1),[x,k]=h.useState(),[v,f]=h.useState(!1),N={account:s??"",chainId:n,amount:ne(l,18).toString(),multipOperator:[],newOperator:{address:(x==null?void 0:x.operator_address)??"",name:(x==null?void 0:x.description.moniker)??""},operator:{address:e.validator.operator_address,name:e.validator.description.moniker}},D=()=>G(o,I.DELEGATE,N),R=()=>G(o,I.UNDELEGATE,N),j=()=>G(o,I.REDELEGATE,N);return i(ue,{children:[t(p,{size:"title2",type:"title",className:"title",children:e.validator.description.moniker}),i("div",{className:"desc",children:[t("div",{style:{marginBottom:".5rem"},children:i(p,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[e.validator.description.details.toLowerCase()," "]})}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"delegation"}),i("p",{className:"value",children:[u.formatEther(((A=e.userDelegations)==null?void 0:A.balance.amount)??0)," althea"]})]}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"available balance"}),i("p",{className:"value",children:[S(u.formatEther(r))," althea"]})]}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"commission"}),i("p",{className:"value",children:[(Number(e.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),t("div",{className:"group",children:i(J,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(Z,{className:"tablist",children:[t(z,{className:"tab",selectedClassName:"tab-selected",children:t(p,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),t(z,{className:"tab",selectedClassName:"tab-selected",children:t(p,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),t(z,{className:"tab",selectedClassName:"tab-selected",children:t(p,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),i(L,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[t(B,{placeholder:"enter amount...",value:l,onChange:m=>{c(m.target.value)}}),t("button",{className:"max",onClick:()=>{const m=T.from(_.amount).add(_.gas).add(u.parseEther("1"));r.sub(m).lte(0)?c("0"):c(u.formatEther(r.sub(m)))},children:"max"})]}),i("div",{className:"agreement",children:[t("div",{children:t(Ee,{checked:g,onChange:m=>{w(m)}})}),t(p,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),t(O,{weight:"bold",height:"big",disabled:!g||Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(r))||!d.delegate,className:"btn",onClick:D,children:"delegate"}),!d.delegate&&t(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),i(L,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[t(B,{placeholder:"enter amount...",value:l,onChange:m=>{c(m.target.value)}}),t("button",{className:"max",onClick:()=>{var m;c(u.formatEther(((m=e.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),t(Se,{weight:"bold",height:"big",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(((F=e.userDelegations)==null?void 0:F.balance.amount)??"0"))||!d.undelegate,onClick:()=>f(!0),children:"undelegate"}),!d.undelegate&&t(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),v&&t(ht,{onUndelegate:R,onCancel:()=>f(!1)})]}),i(L,{className:"tabPanel",children:[t("div",{className:"amount",style:{marginTop:"1rem"},children:t("div",{className:"btn-grp",children:t(vt,{children:t(H,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(m=>m.description.moniker!=e.validator.description.moniker?{value:m,label:m.description.moniker}:{}),onChange:m=>{k(m==null?void 0:m.value)}})})})}),i("div",{className:"amount",children:[t(B,{placeholder:"enter amount...",value:l,onChange:m=>{c(m.target.value)}}),t("button",{className:"max",onClick:()=>{var m;c(u.formatEther(((m=e.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),t(O,{height:"big",weight:"bold",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(((y=e.userDelegations)==null?void 0:y.balance.amount)??"0"))||x==null||!d.redelegate,onClick:()=>j(),children:"re-delegate"}),!d.redelegate&&t(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},vt=b.div`
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
`,wt=({balance:e,account:a,txFeeCheck:r,txStore:s,chainId:d})=>{const[o,n]=h.useState(""),[l,c]=h.useState(!0),[g,w]=h.useState(!1),x=()=>{if(!a){console.error("Account is not defined");return}const f=k.map(D=>({address:D.operator_address,name:D.moniker})),N={account:a,chainId:d,amount:ne(o,18).toString(),multipOperator:f,operator:f[0]};pt(s,I.DELEGATE,N)},[k,v]=h.useState([]);return h.useEffect(()=>{(async()=>{c(!0);const N=await ie();v(N),c(!1)})()},[]),i(ue,{children:[i(p,{size:"title2",type:"title",className:"title",children:["Multi-Staking",t(Ce,{src:Te,width:27,height:27,rotateImage:!0,alt:"menu",onClick:()=>w(!g)})]}),g&&t(kt,{children:"Multi Staking is a tool used to send your delegation to a group of random and performant validators below the top ten. The list is based off a ranking system that considers missed blocks, slashings, commission, voting power, and governance participation."}),i("div",{className:"desc",children:[i("div",{className:"amount",children:[t(B,{placeholder:"Enter amount to split between validators...",value:o,onChange:f=>{n(f.target.value)}}),t("button",{className:"max",onClick:()=>{const f=T.from(_.amount).add(_.gas).add(u.parseEther("1"));e.sub(f).lte(0)?n("0"):n(u.formatEther(e.sub(f)))},children:"Max"})]}),t("div",{className:"validators-list",children:l?t(U,{children:i(Et,{children:[t(Ae,{size:"md"}),t("span",{children:"Finidng safest validators..."})]})}):t(Nt,{children:i("table",{children:[t("thead",{children:i("tr",{children:[t("th",{children:"Validator"}),t("th",{children:"Missed Blocks"}),t("th",{children:"Rank"}),t("th",{children:"Score"})]})}),t("tbody",{children:k.map(f=>i("tr",{children:[t("td",{children:f.moniker}),t("td",{children:f.missedBlocks}),i("td",{children:[f.trueRank,"th"]}),t("td",{children:Number(f.score).toFixed(4)})]},f.operator_address))})]})})}),t(O,{weight:"bold",height:"big",disabled:!o||!k.length||!r.delegate,className:"btn",onClick:x,children:"Delegate to Multiple Validators"}),!r.delegate&&t(p,{type:"text",size:"text3",style:{color:"red"},children:"Not enough funds for delegation fee"})]})]})},kt=b.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 90%; // This limits the width to 90% of its parent (the modal). Adjust as needed.
  margin-left: auto; // These two lines center the Description box in the modal.
  margin-right: auto;
`,Nt=b.div`
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
`,Et=b.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
font-family: IBM Plex Sans; 
color: var(--primary-color);
`,St=b(ae)`
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
`,Ct=e=>{const a=M(),r=se(),s=K();return h.useEffect(()=>{a.currentModal!=C.NONE&&W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),i(St,{open:a.currentModal!=C.NONE,onClose:()=>{a.close(),W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[t("div",{role:"button",tabIndex:0,onClick:a.close,children:t("img",{src:Ie,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),t(Ge,{onClose:a.close}),a.currentModal===C.STAKE&&t(yt,{validator:a.activeValidator,allValidators:e.allValidators,balance:s.balance,account:s.account,txFeeCheck:e.txBalanceChecks,txStore:r,chainId:Number(s.chainId)}),a.currentModal===C.AUTO_DELEGATE&&t(wt,{allValidators:e.allValidators,balance:s.balance,account:s.account,txFeeCheck:e.txBalanceChecks,txStore:r,chainId:Number(s.chainId)})]})},Tt=()=>{const e=M(),a=K(),r=se(),[s,d]=h.useState([]),[o,n]=h.useState("0"),[l,c]=h.useState([]),[g,w]=h.useState({total_unbonding:T.from("0")}),[x,k]=h.useState(T.from("0"));async function v(){e.open(C.STAKE),gt(r,Number(a.chainId),a.account??"",R)}async function f(){a.account&&(c(await Me(E(Number(a.chainId)),a.account)),k(await Re(E(Number(a.chainId)),a.account)),w(await Be(E(Number(a.chainId)),a.account))),d(await Oe(E(Number(a.chainId)))),n(await Pe(E(Number(a.chainId))))}h.useEffect(()=>{const y=setInterval(async()=>{await f()},6e3);return()=>clearInterval(y)},[a.account]),h.useEffect(()=>{f()},[a.account]);const N=le(s,l,g),D=N.filter(y=>!!y.undelagatingInfo),R=N.filter(y=>!!y.userDelegations);function j(y,m){return T.from(y.amount).add(y.gas).add(m??0)}function A(y,m){return y.gt(m)}return{validators:s,delegations:l,undelegations:g,userValidators:R,undelagatingValidators:D,handleClaimRewards:v,rewards:x,stakingApr:o,txFeeCheck:(()=>{const y=a.balance;return{claimRewards:A(y,j(pe)),delegate:A(y,j(_,u.parseEther("1"))),redelegate:A(y,j(mt)),undelegate:A(y,j(he))}})()}},Lt=()=>{const e=K(),a=me(),[r,s]=h.useState(!1),{validators:d,delegations:o,undelegations:n,userValidators:l,undelagatingValidators:c,handleClaimRewards:g,rewards:w,stakingApr:x,txFeeCheck:k}=Tt();return i(U,{children:[t($e,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),i(ct,{children:[t(Ct,{allValidators:d,txBalanceChecks:k}),i(J,{className:"tabs",children:[i(Z,{className:"tablist",children:[t(z,{className:r?"tab tab-hover":"tab",onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),t(z,{className:r?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:"all validators"}),i("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[t(X,{style:{width:"10rem"},children:t(H,{className:"react-select-container",styles:{dropdownIndicator:v=>({...v,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:v=>{a.setValidatorSort((v==null?void 0:v.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),t(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:v=>a.setSearchQuery(v.target.value),placeholder:"search..."})]})]}),t(L,{children:t(nt,{onRewards:g,connected:_e(Number(e.chainId)),account:e.account??"",balance:e.balance,totalStaked:Ue(o),totalUnbonding:n.total_unbonding,totalRewards:w,apr:x,userValidationInfo:l,undelegationValidators:c,canClaim:k.claimRewards})}),t(L,{children:t(st,{validators:le(d,o,n)})})]})]})]})};export{Lt as default};
