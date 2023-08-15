import{l as $,S as J,d as H,T as Z,a as ee,b as M,c as z}from"./selected-a3ab94f7.js";import{ah as te,n as x,D as g,ao as fe,a as n,j as t,T as f,ap as Y,B as E,aq as ae,u as p,$ as re,ar as be,H as A,as as Q,at as xe,ak as ye,a5 as ve,a6 as we,an as ke,F as P,L as W,au as oe,R as ne,P as F,U as Ne,m as L,i as C,f as O,av as X,aw as Ee,a0 as ie,z as B,ax as Se,ay as Ce,az as Ae,aA as Te,S as Ie,V as K,N as _e,aB as De}from"./index-c65550e2.js";import{g as le,t as je,a as Me,b as ze,c as Le,d as Ve,e as se,f as Re,h as Be,i as Fe,j as Oe,k as Pe,l as Ue}from"./transactionHelpers-eba80652.js";import{h as Ge}from"./moment-9d68d5ae.js";import{T as q,u as de,O as $e}from"./index-edc0bdd6.js";import{H as Qe}from"./seo-14e687ae.js";var _=(e=>(e.DELEGATE="DELEGATE",e.UNDELEGATE="UNDELEGATE",e.REDELEGATE="REDELEGATE",e.CLAIM_REWARDS="CLAIM_REWARDS",e))(_||{});const We={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},moniker:"",jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var T=(e=>(e[e.STAKE=0]="STAKE",e[e.AUTO_DELEGATE=1]="AUTO_DELEGATE",e[e.CLAIM_REWARDS=2]="CLAIM_REWARDS",e[e.NONE=3]="NONE",e))(T||{});const V=te(e=>({currentModal:3,open:a=>e({currentModal:a}),close:()=>e({currentModal:3}),activeValidator:We,activeValidators:[],setActiveValidator:a=>e({activeValidator:a}),setActiveValidators:a=>e({activeValidators:a})})),He=({totalStaked:e,rewards:a,apr:r,onRewards:s,canClaim:d})=>{const{theme:o}=g.useContext(fe),[i,l]=g.useState([]);V(b=>b.open);const{setActiveValidators:c,open:h}=V(),v=async()=>{h(T.AUTO_DELEGATE);const b=await le();l(b),c(b)};return n(Ke,{children:[n("div",{className:"dual-item",style:{margin:"0"},children:[t("div",{className:"top",children:t(f,{type:"text",size:"text1",children:"total staked"})}),t("div",{className:"bottom",children:t(f,{type:"text",children:e})})]}),t("div",{className:"separator"}),n("div",{className:"dual-item",children:[t("div",{className:"top",children:t(f,{type:"text",size:"text1",children:"apr"})}),t("div",{className:"bottom",children:n(f,{type:"text",children:[r,"%"]})})]}),t("div",{className:"separator"}),n("div",{className:"dual-item",children:[t("div",{className:"top",children:t(f,{type:"text",size:"text1",children:"rewards"})}),t("div",{className:"bottom",children:t(f,{type:"text",children:a})})]}),n("div",{className:"buttons-container",children:[t(Y,{type:"outlined",style:{height:"big"},theme:o,disabled:Number(a)==0||!d,onClick:s,children:t(f,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),t(Y,{type:"outlined",style:{height:"big"},theme:o,onClick:v,children:t(f,{size:"text2",type:"text",bold:!0,children:"multi stake"})})]})]})},Ke=x.div`
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
`,qe="/althea-app/assets/rightArrow-189f42f9.svg",Ye="/althea-app/assets/arrow-4cafc986.svg",Xe=x.table`
  .jailed {
    color: #ef4444;
    &::after {
      content: url(${Ye});
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
        content: url(${qe});
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
`,ce=e=>{const[a,r]=g.useState(!1);return t("div",{children:n(Xe,{children:[t("thead",{children:t("tr",{children:e.columns.map((s,d)=>t("th",{style:{backgroundColor:a&&d==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(d),r(!0)},children:s},s))})}),t("tbody",{children:e.children})]})})},Je="/althea-app/assets/lock-ee10952d.svg";x.div`
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
`;const Ze=x.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,et=x.div`
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
`;x(et)`
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
`;function tt(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const me=e=>{const[a,r]=g.useState(0),s=V(),d=e.validators.sort((o,i)=>{var h,v;if(e.searched)return $(e.searched,o.validator.description.moniker)>$(e.searched,i.validator.description.moniker)?1:-1;const l=e.sortBy==="userTotal"?(h=o.userDelegations)==null?void 0:h.balance.amount:o.validator.tokens,c=e.sortBy==="userTotal"?(v=i.userDelegations)==null?void 0:v.balance.amount:i.validator.tokens;return E.from(l).gt(E.from(c))?-1:1});return e.validators.length?t(ce,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:o=>r(o),columnClicked:a,children:t(ae,{children:d.map((o,i)=>{var l,c;return t(at,{rank:i+1,name:o.validator.description.moniker,totalStake:o.validator.tokens,userStake:((l=o.userDelegations)==null?void 0:l.balance.amount)??"0",commission:Number(o.validator.commission.commission_rates.rate),jailed:o.validator.jailed,onClick:()=>{s.setActiveValidator(o),s.open(T.STAKE)},sortableProps:[1/Number(i),o.validator.description.moniker,Number(p.formatEther(o.validator.tokens)),Number(p.formatEther(((c=o.userDelegations)==null?void 0:c.balance.amount)??"0")),Number(o.validator.commission.commission_rates.rate)]},i)}).sort((o,i)=>{var l,c;return tt((l=o.props.sortableProps)==null?void 0:l[a],(c=i.props.sortableProps)==null?void 0:c[a])})})}):null},at=e=>n("tr",{onClick:e.onClick,className:`${e.jailed?"jailed":""}`,style:{borderColor:e.jailed?"#EF4444":"var(--primary-color)"},children:[t("td",{children:e.rank}),n("td",{children:[e.jailed?t(re,{trigger:t("img",{style:{height:"20px"},src:Je}),on:["hover","focus"],children:t(Ze,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,e.name]}),n("td",{children:[be(Number(A(p.formatEther(e.totalStake))))," ",t(Q,{})]}),n("td",{children:[p.commify(A(p.formatEther(e.userStake))),t(Q,{})]}),t("td",{children:xe(e.commission)})]});function rt(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const ot=e=>{var d,o;const[a,r]=g.useState(2),s=[];for(const i of e.validators)if((d=i.undelagatingInfo)!=null&&d.lockouts)for(const l of((o=i.undelagatingInfo)==null?void 0:o.lockouts)??[])s.push({name:i.validator.description.moniker,amount:l.value_of_coin,completionDate:l.complete_time_stamp});return e.validators.length?t(ce,{columns:["name","undelegation","completion date"],onColumnClicked:i=>r(i),columnClicked:a,children:t(ae,{children:s.map((i,l)=>t(nt,{name:i.name,amount:i.amount,completionDate:Ge.utc(i.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[i.name,Number(p.formatEther(i.amount))]},l)).sort((i,l)=>{var c,h;return a==2?-1:rt((c=i.props.sortableProps)==null?void 0:c[a],(h=l.props.sortableProps)==null?void 0:h[a])})})}):null},nt=e=>n("tr",{children:[t("td",{children:e.name}),n("td",{children:[p.commify(A(p.formatEther(e.amount)))," ",t(Q,{})]}),t("td",{style:{display:"table-cell"},children:e.completionDate})]}),it=e=>{const{activateBrowserWallet:a}=ye();return t(lt,{children:e.connected?n(P,{children:[n("div",{children:[t(He,{balance:A(p.formatEther(e.balance)),totalStaked:A(p.formatEther(e.totalStaked)),totalUnbonding:A(p.formatEther(e.totalUnbonding)),onRewards:e.onRewards,rewards:A(p.formatEther(e.totalRewards)),apr:e.apr,canClaim:e.canClaim}),t(f,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.userValidationInfo.length==0,children:"current staking position"}),t(me,{validators:e.userValidationInfo,sortBy:"userTotal"}),t(f,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),t(ot,{validators:e.undelegationValidators}),t("br",{})]}),t("div",{style:{height:"60px"}})]}):t(ve,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:we,onClick:()=>{a(),ke()}})})},lt=x.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,ue=te(e=>({inAllValidators:!1,setInAllValidators:a=>e({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{e({searchQuery:a})},validatorSort:1,setValidatorSort:a=>e({validatorSort:a})})),st=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],dt=e=>{const a=ue(),[r,s]=g.useState(!1),d=()=>{const o=e.validators.filter(i=>a.validatorSort==1?!i.validator.jailed:a.validatorSort==2?i.validator.jailed:!0);return a.searchQuery===""?o:o.filter(i=>$(a.searchQuery,i.validator.description.moniker.toLowerCase())<6||i.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return g.useEffect(()=>{!r&&a.searchQuery!==""&&(W.events.stakingActions.userSearch(),s(!0))},[a.searchQuery]),n(ct,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:d().length==0?"black":"transparent"},children:[n("div",{className:"sort-search-local",children:[t(J,{style:{width:"18rem"},children:t(H,{className:"react-select-container",styles:{dropdownIndicator:o=>({...o,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:st,onChange:o=>{a.setValidatorSort((o==null?void 0:o.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),t(oe,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:o=>a.setSearchQuery(o.target.value),placeholder:"search..."})]}),t("div",{style:{height:"16px"}}),d().length==0?n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[t(ne,{color:"var(--primary-color)",size:"30px"}),t(f,{size:"title2",type:"title",children:"no validators match this search"})]}):n(P,{children:[t(me,{validators:d(),sortBy:"validatorTotal",searched:a.searchQuery}),t("div",{style:{height:"60px"}})]})]})},ct=x.div`
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
`,mt=x.div`
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
`,he=x.div`
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
`,D={amount:"300000000000000000",denom:"aalthea",gas:"300000"},pe={amount:"500000000000000000",denom:"aalthea",gas:"500000"},ge={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},ut={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},ht=x.div`
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
`,pt=e=>n(ht,{children:[t(ne,{color:"var(--primary-color)",size:"30px"}),t(f,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),t(f,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),t(F,{className:"btn-group",onClick:()=>e.onUndelegate(),children:"confirm undelegation"}),t(Ne,{className:"btn-group",onClick:()=>e.onCancel(),children:"undelegate later"})]});async function gt(e,a,r){if(!r.account)return e.setStatus({error:"No account found"}),!1;if(!r.chainId)return e.setStatus({error:"No chainId found"}),!1;const s=r.multipOperator.length,d=E.from(r.amount),o=d.div(s),i=d.sub(o.mul(s)),l=E.from((parseFloat(X(o))*100).toFixed(0)),c=E.from((parseFloat(X(i))*100).toFixed(0)),h=Array(s).fill(l),v=Math.floor(Math.random()*s);h[v]=h[v].add(c);const b=h.map(u=>Ee(u,18).slice(0,-16)),k=r.multipOperator.map((u,N)=>({type:"delegate",operator:u.address,amount:b[N],symbol:u.name})),w=xt(r.chainId,r.account,r.multipOperator.map(u=>u.address),b,C(r.chainId),D,O(r.chainId),"",{delegateMessages:k});return await e.addTransactionList([w],{title:a,txListMethod:q.COSMOS,chainId:r.chainId})}async function G(e,a,r){var o,i,l;if(!r.account)return e.setStatus({error:"No account found"}),!1;if(!r.chainId)return e.setStatus({error:"No chainId found"}),!1;const s=p.formatUnits(r.amount,18),d=a===_.REDELEGATE;return await e.addTransactionList([d?yt(r.chainId,r.account,r.operator.address,((o=r.newOperator)==null?void 0:o.address)??"",r.amount,C(r.chainId),pe,O(r.chainId),"",{amount:s,symbol:`from ${(i=r.operator)==null?void 0:i.name} to ${(l=r.newOperator)==null?void 0:l.name}`}):bt(r.chainId,a===_.DELEGATE,r.account,r.operator.address,r.amount,C(r.chainId),D,O(r.chainId),"",{amount:s,symbol:r.operator.name})],{title:a,txListMethod:q.COSMOS,chainId:r.chainId})}async function ft(e,a,r,s){return r?a?await e.addTransactionList([{chainId:a,txType:L.CLAIM_REWARDS_STAKING,tx:je,params:[r,C(a),ge,O(a),"",s]}],{title:"Claim Staking Rewards",txListMethod:q.COSMOS,chainId:a}):(e.setStatus({error:"No chainId found"}),!1):(e.setStatus({error:"No account found"}),!1)}const bt=(e,a,r,s,d,o,i,l,c,h)=>({chainId:e,txType:a?L.DELEGATE:L.UNDELEGATE,tx:a?Me:ze,params:[r,s,d,o,i,l,c],extraDetails:h}),xt=(e,a,r,s,d,o,i,l,c)=>({chainId:e,txType:L.DELEGATE_MULTIPLE,tx:Le,params:[a,r,s,d,o,i,l],extraDetails:c}),yt=(e,a,r,s,d,o,i,l,c,h)=>({chainId:e,txType:L.REDELEGATE,tx:Ve,params:[a,d,o,i,l,c,r,s],extraDetails:h}),vt=({validator:e,allValidators:a,balance:r,account:s,txFeeCheck:d,txStore:o,chainId:i})=>{var I,U,y;const[l,c]=g.useState(""),[h,v]=g.useState(!1),[b,k]=g.useState(),[w,u]=g.useState(!1),N={account:s??"",chainId:i,amount:ie(l,18).toString(),multipOperator:[],newOperator:{address:(b==null?void 0:b.operator_address)??"",name:(b==null?void 0:b.description.moniker)??""},operator:{address:e.validator.operator_address,name:e.validator.description.moniker}},S=()=>G(o,_.DELEGATE,N),R=()=>G(o,_.UNDELEGATE,N),j=()=>G(o,_.REDELEGATE,N);return n(he,{children:[t(f,{size:"title2",type:"title",className:"title",children:e.validator.description.moniker}),n("div",{className:"desc",children:[t("div",{style:{marginBottom:".5rem"},children:n(f,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[e.validator.description.details.toLowerCase()," "]})}),n("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"delegation"}),n("p",{className:"value",children:[p.formatEther(((I=e.userDelegations)==null?void 0:I.balance.amount)??0)," althea"]})]}),n("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"available balance"}),n("p",{className:"value",children:[A(p.formatEther(r))," althea"]})]}),n("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"commission"}),n("p",{className:"value",children:[(Number(e.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),t("div",{className:"group",children:n(Z,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[n(ee,{className:"tablist",children:[t(M,{className:"tab",selectedClassName:"tab-selected",children:t(f,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),t(M,{className:"tab",selectedClassName:"tab-selected",children:t(f,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),t(M,{className:"tab",selectedClassName:"tab-selected",children:t(f,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),n(z,{className:"tabPanel",children:[n("div",{className:"amount",style:{marginTop:"1rem"},children:[t(B,{placeholder:"enter amount...",value:l,onChange:m=>{c(m.target.value)}}),t("button",{className:"max",onClick:()=>{const m=E.from(D.amount).add(D.gas).add(p.parseEther("1"));r.sub(m).lte(0)?c("0"):c(p.formatEther(r.sub(m)))},children:"max"})]}),n("div",{className:"agreement",children:[t("div",{children:t(Se,{checked:h,onChange:m=>{v(m)}})}),t(f,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),t(F,{weight:"bold",height:"big",disabled:!h||Number(l)==0||isNaN(Number(l))||Number(l)>Number(p.formatEther(r))||!d.delegate,className:"btn",onClick:S,children:"delegate"}),!d.delegate&&t(f,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),n(z,{className:"tabPanel",children:[n("div",{className:"amount",style:{marginTop:"1rem"},children:[t(B,{placeholder:"enter amount...",value:l,onChange:m=>{c(m.target.value)}}),t("button",{className:"max",onClick:()=>{var m;c(p.formatEther(((m=e.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),t(Ce,{weight:"bold",height:"big",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(p.formatEther(((U=e.userDelegations)==null?void 0:U.balance.amount)??"0"))||!d.undelegate,onClick:()=>u(!0),children:"undelegate"}),!d.undelegate&&t(f,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),w&&t(pt,{onUndelegate:R,onCancel:()=>u(!1)})]}),n(z,{className:"tabPanel",children:[t("div",{className:"amount",style:{marginTop:"1rem"},children:t("div",{className:"btn-grp",children:t(wt,{children:t(H,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(m=>m.description.moniker!=e.validator.description.moniker?{value:m,label:m.description.moniker}:{}),onChange:m=>{k(m==null?void 0:m.value)}})})})}),n("div",{className:"amount",children:[t(B,{placeholder:"enter amount...",value:l,onChange:m=>{c(m.target.value)}}),t("button",{className:"max",onClick:()=>{var m;c(p.formatEther(((m=e.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),t(F,{height:"big",weight:"bold",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(p.formatEther(((y=e.userDelegations)==null?void 0:y.balance.amount)??"0"))||b==null||!d.redelegate,onClick:()=>j(),children:"re-delegate"}),!d.redelegate&&t(f,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},wt=x.div`
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
`,kt=({balance:e,account:a,txFeeCheck:r,txStore:s,chainId:d})=>{const[o,i]=g.useState(""),[l,c]=g.useState(!0),[h,v]=g.useState(!1),b=async()=>{if(!a){console.error("Account is not defined");return}const u=k.map(S=>({address:S.operator_address,name:S.moniker})),N={account:a,chainId:d,amount:ie(o,18).toString(),multipOperator:u,operator:u[0]};try{await gt(s,_.DELEGATE,N)?console.log("Staking transaction added successfully."):console.error("Failed to add the staking transaction.")}catch(S){console.error("Error while processing staking transaction:",S)}},[k,w]=g.useState([]);return g.useEffect(()=>{(async()=>{c(!0);const N=await le();w(N),c(!1)})()},[]),n(he,{children:[n(f,{size:"title2",type:"title",className:"title",children:["Multi-Staking",t(Ae,{src:Te,width:27,height:27,rotateImage:!0,alt:"menu",onClick:()=>v(!h)})]}),h&&t(Nt,{children:"Multi Staking is a tool used to send your delegation to a group of random and performant validators below the top ten. The list is based off a ranking system that considers missed blocks, slashings, commission, voting power, and governance participation."}),n("div",{className:"desc",children:[n("div",{className:"amount",children:[t(B,{placeholder:"Enter amount to split between validators...",value:o,onChange:u=>{i(u.target.value)}}),t("button",{className:"max",onClick:()=>{const u=E.from(D.amount).add(D.gas).add(p.parseEther("1"));e.sub(u).lte(0)?i("0"):i(p.formatEther(e.sub(u)))},children:"Max"})]}),t("div",{className:"validators-list",children:l?t(P,{children:n(St,{children:[t(Ie,{size:"md"}),t("span",{children:"Finidng safest validators..."})]})}):t(Et,{children:n("table",{children:[t("thead",{children:n("tr",{children:[t("th",{children:"Validator"}),t("th",{children:"Missed Blocks"}),t("th",{children:"Rank"}),t("th",{children:"Score"})]})}),t("tbody",{children:k.map(u=>n("tr",{children:[t("td",{children:u.moniker}),t("td",{children:u.missedBlocks}),n("td",{children:[u.trueRank,"th"]}),t("td",{children:Number(u.score).toFixed(4)})]},u.operator_address))})]})})}),t(F,{weight:"bold",height:"big",disabled:!o||!k.length||!r.delegate,className:"btn",onClick:b,children:"Delegate to Multiple Validators"}),!r.delegate&&t(f,{type:"text",size:"text3",style:{color:"red"},children:"Not enough funds for delegation fee"})]})]})},Nt=x.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 90%; // This limits the width to 90% of its parent (the modal). Adjust as needed.
  margin-left: auto; // These two lines center the Description box in the modal.
  margin-right: auto;
`,Et=x.div`
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
`,St=x.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
font-family: IBM Plex Sans; 
color: var(--primary-color);
`,Ct=x(re)`
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
`,At=e=>{const a=V(),r=de(),s=K();return g.useEffect(()=>{a.currentModal!=T.NONE&&W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),n(Ct,{open:a.currentModal!=T.NONE,onClose:()=>{a.close(),W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[t("div",{role:"button",tabIndex:0,onClick:a.close,children:t("img",{src:_e,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),t($e,{onClose:a.close}),a.currentModal===T.STAKE&&t(vt,{validator:a.activeValidator,allValidators:e.allValidators,balance:s.balance,account:s.account,txFeeCheck:e.txBalanceChecks,txStore:r,chainId:Number(s.chainId)}),a.currentModal===T.AUTO_DELEGATE&&t(kt,{allValidators:e.allValidators,balance:s.balance,account:s.account,txFeeCheck:e.txBalanceChecks,txStore:r,chainId:Number(s.chainId)})]})},Tt=()=>{const e=V(),a=K(),r=de(),[s,d]=g.useState([]),[o,i]=g.useState("0"),[l,c]=g.useState([]),[h,v]=g.useState({total_unbonding:E.from("0")}),[b,k]=g.useState(E.from("0"));async function w(){e.open(T.STAKE),ft(r,Number(a.chainId),a.account??"",R)}async function u(){a.account&&(c(await Re(C(Number(a.chainId)),a.account)),k(await Be(C(Number(a.chainId)),a.account)),v(await Fe(C(Number(a.chainId)),a.account))),d(await Oe(C(Number(a.chainId)))),i(await Pe(C(Number(a.chainId))))}g.useEffect(()=>{const y=setInterval(async()=>{await u()},6e3);return()=>clearInterval(y)},[a.account]),g.useEffect(()=>{u()},[a.account]);const N=se(s,l,h),S=N.filter(y=>!!y.undelagatingInfo),R=N.filter(y=>!!y.userDelegations);function j(y,m){return E.from(y.amount).add(y.gas).add(m??0)}function I(y,m){return y.gt(m)}return{validators:s,delegations:l,undelegations:h,userValidators:R,undelagatingValidators:S,handleClaimRewards:w,rewards:b,stakingApr:o,txFeeCheck:(()=>{const y=a.balance;return{claimRewards:I(y,j(ge)),delegate:I(y,j(D,p.parseEther("1"))),redelegate:I(y,j(ut)),undelegate:I(y,j(pe))}})()}},Lt=()=>{const e=K(),a=ue(),[r,s]=g.useState(!1),{validators:d,delegations:o,undelegations:i,userValidators:l,undelagatingValidators:c,handleClaimRewards:h,rewards:v,stakingApr:b,txFeeCheck:k}=Tt();return n(P,{children:[t(Qe,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),n(mt,{children:[t(At,{allValidators:d,txBalanceChecks:k}),n(Z,{className:"tabs",children:[n(ee,{className:"tablist",children:[t(M,{className:r?"tab tab-hover":"tab",onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),t(M,{className:r?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:"all validators"}),n("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[t(J,{style:{width:"10rem"},children:t(H,{className:"react-select-container",styles:{dropdownIndicator:w=>({...w,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:w=>{a.setValidatorSort((w==null?void 0:w.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),t(oe,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:w=>a.setSearchQuery(w.target.value),placeholder:"search..."})]})]}),t(z,{children:t(it,{onRewards:h,connected:De(Number(e.chainId)),account:e.account??"",balance:e.balance,totalStaked:Ue(o),totalUnbonding:i.total_unbonding,totalRewards:v,apr:b,userValidationInfo:l,undelegationValidators:c,canClaim:k.claimRewards})}),t(z,{children:t(dt,{validators:se(d,o,i)})})]})]})]})};export{Lt as default};
