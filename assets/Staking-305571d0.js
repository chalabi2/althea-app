import{T as q,a as J,b as R,c as j}from"./TabPanel-bee28f31.js";import{l as P,S as X,a as $}from"./selected-092c841d.js";import{n as y,a as i,j as t,T as h,Y as W,al as Z,D as p,B as A,aE as ee,u,a3 as te,aH as he,H as k,aa as D,aI as ge,aJ as pe,ao as fe,a9 as be,ar as xe,F as H,U as O,aK as ae,W as re,P as G,m as L,i as w,f as Q,a4 as ye,z as F,ay as ve,Z as K,V as we,aB as ke}from"./index-ac4b7cfd.js";import{s as oe,T as Ne}from"./LMTables-0cd11ed2.js";import{h as Ee}from"./moment-9d68d5ae.js";import{t as Ce,a as Se,b as Ae,c as _e,g as ne,d as Ie,e as Te,f as De,h as Re,i as je,j as ze}from"./transactionHelpers-e096076e.js";import{T as ie,u as le,O as Le}from"./ongoingTxModal-14d337f5.js";import{H as Ve}from"./seo-b9967164.js";import"./down-f11b2b90.js";const Me=({totalStaked:e,rewards:a,apr:r,onRewards:s,canClaim:c})=>i(Be,{children:[i("div",{className:"dual-item",style:{margin:"0"},children:[t("div",{className:"top",children:t(h,{type:"text",size:"text1",children:"total staked"})}),t("div",{className:"bottom",children:t(h,{type:"text",children:e})})]}),t("div",{className:"separator"}),i("div",{className:"dual-item",children:[t("div",{className:"top",children:t(h,{type:"text",size:"text1",children:"apr"})}),t("div",{className:"bottom",children:i(h,{type:"text",children:[r,"%"]})})]}),t("div",{className:"separator"}),i("div",{className:"dual-item",children:[t("div",{className:"top",children:t(h,{type:"text",size:"text1",children:"rewards"})}),t("div",{className:"bottom",children:t(h,{type:"text",children:a})})]}),t(W,{height:"big",disabled:Number(a)==0||!c,onClick:()=>{s()},children:t(h,{size:"text2",type:"text",bold:!0,children:"claim rewards"})})]}),Be=y.div`
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
`;var _=(e=>(e.DELEGATE="DELEGATE",e.UNDELEGATE="UNDELEGATE",e.REDELEGATE="REDELEGATE",e.CLAIM_REWARDS="CLAIM_REWARDS",e))(_||{});const Fe={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var I=(e=>(e[e.STAKE=0]="STAKE",e[e.CLAIM_REWARDS=1]="CLAIM_REWARDS",e[e.NONE=2]="NONE",e))(I||{});const Y=Z(e=>({currentModal:2,open:a=>e({currentModal:a}),close:()=>e({currentModal:2}),activeValidator:Fe,setActiveValidator:a=>e({activeValidator:a})})),Ue="/althea-app/assets/rightArrow-189f42f9.svg",Pe="/althea-app/assets/arrow-4cafc986.svg",Oe=y.table`
  .jailed {
    color: #ef4444;
    &::after {
      content: url(${Pe});
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
    background-color: black;
    display: inline-table;
    width: 100%;
    /* tr {
      border-bottom: var(--primary-color) solid 1px !important;
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
    background-color: black;

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
        content: url(${Ue});
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
`,se=e=>{const[a,r]=p.useState(!1);return t("div",{children:i(Oe,{children:[t("thead",{children:t("tr",{children:e.columns.map((s,c)=>t("th",{style:{backgroundColor:a&&c==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(c),r(!0)},children:s},s))})}),t("tbody",{children:e.children})]})})},Ge="/althea-app/assets/lock-ee10952d.svg",ce=e=>{const[a,r]=p.useState(0),s=Y(),c=e.validators.sort((o,n)=>{var f,v;if(e.searched)return P(e.searched,o.validator.description.moniker)>P(e.searched,n.validator.description.moniker)?1:-1;const l=e.sortBy==="userTotal"?(f=o.userDelegations)==null?void 0:f.balance.amount:o.validator.tokens,m=e.sortBy==="userTotal"?(v=n.userDelegations)==null?void 0:v.balance.amount:n.validator.tokens;return A.from(l).gt(A.from(m))?-1:1});return e.validators.length?t(se,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:o=>r(o),columnClicked:a,children:t(ee,{children:c.map((o,n)=>{var l,m;return t(Qe,{rank:n+1,name:o.validator.description.moniker,totalStake:o.validator.tokens,userStake:((l=o.userDelegations)==null?void 0:l.balance.amount)??"0",commission:Number(o.validator.commission.commission_rates.rate),jailed:o.validator.jailed,onClick:()=>{s.setActiveValidator(o),s.open(I.STAKE)},sortableProps:[1/Number(n),o.validator.description.moniker,Number(u.formatEther(o.validator.tokens)),Number(u.formatEther(((m=o.userDelegations)==null?void 0:m.balance.amount)??"0")),Number(o.validator.commission.commission_rates.rate)]},n)}).sort((o,n)=>{var l,m;return oe((l=o.props.sortableProps)==null?void 0:l[a],(m=n.props.sortableProps)==null?void 0:m[a])})})}):null},Qe=e=>i("tr",{onClick:e.onClick,className:`${e.jailed?"jailed":""}`,style:{borderColor:e.jailed?"#EF4444":"var(--primary-color)"},children:[t("td",{children:e.rank}),i("td",{children:[e.jailed?t(te,{trigger:t("img",{style:{height:"20px"},src:Ge}),on:["hover","focus"],children:t(Ne,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,e.name]}),i("td",{children:[he(Number(k(u.formatEther(e.totalStake))))," ",t("img",{src:e.jailed?D:D,alt:"althea",height:14})]}),i("td",{children:[u.commify(k(u.formatEther(e.userStake))),t("img",{src:e.jailed?D:D,alt:"althea",height:14})]}),t("td",{children:ge(e.commission)})]}),$e=e=>{var c,o;const[a,r]=p.useState(2),s=[];for(const n of e.validators)if((c=n.undelagatingInfo)!=null&&c.lockouts)for(const l of((o=n.undelagatingInfo)==null?void 0:o.lockouts)??[])s.push({name:n.validator.description.moniker,amount:l.value_of_coin,completionDate:l.complete_time_stamp});return e.validators.length?t(se,{columns:["name","undelegation","completion date"],onColumnClicked:n=>r(n),columnClicked:a,children:t(ee,{children:s.map((n,l)=>t(We,{name:n.name,amount:n.amount,completionDate:Ee.utc(n.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[n.name,Number(u.formatEther(n.amount))]},l)).sort((n,l)=>{var m,f;return a==2?-1:oe((m=n.props.sortableProps)==null?void 0:m[a],(f=l.props.sortableProps)==null?void 0:f[a])})})}):null},We=e=>i("tr",{children:[t("td",{children:e.name}),i("td",{children:[u.commify(k(u.formatEther(e.amount)))," ",t("img",{src:pe,alt:"althea",height:14})]}),t("td",{style:{display:"table-cell"},children:e.completionDate})]}),He=e=>{const{activateBrowserWallet:a}=fe();return t(Ke,{children:e.connected?i(H,{children:[i("div",{children:[t(Me,{balance:k(u.formatEther(e.balance)),totalStaked:k(u.formatEther(e.totalStaked)),totalUnbonding:k(u.formatEther(e.totalUnbonding)),onRewards:e.onRewards,rewards:k(u.formatEther(e.totalRewards)),apr:e.apr,canClaim:e.canClaim}),t(h,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.userValidationInfo.length==0,children:"current staking position"}),t(ce,{validators:e.userValidationInfo,sortBy:"userTotal"}),t(h,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),t($e,{validators:e.undelegationValidators}),t("br",{})]}),t("div",{style:{height:"60px"}})]}):t(be,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:D,onClick:()=>{a(),xe()}})})},Ke=y.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,de=Z(e=>({inAllValidators:!1,setInAllValidators:a=>e({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{e({searchQuery:a})},validatorSort:1,setValidatorSort:a=>e({validatorSort:a})})),Ye=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],qe=e=>{const a=de(),[r,s]=p.useState(!1),c=()=>{const o=e.validators.filter(n=>a.validatorSort==1?!n.validator.jailed:a.validatorSort==2?n.validator.jailed:!0);return a.searchQuery===""?o:o.filter(n=>P(a.searchQuery,n.validator.description.moniker.toLowerCase())<6||n.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return p.useEffect(()=>{!r&&a.searchQuery!==""&&(O.events.stakingActions.userSearch(),s(!0))},[a.searchQuery]),i(Je,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:c().length==0?"black":"transparent"},children:[i("div",{className:"sort-search-local",children:[t(X,{style:{width:"18rem"},children:t($,{className:"react-select-container",styles:{dropdownIndicator:o=>({...o,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:Ye,onChange:o=>{a.setValidatorSort((o==null?void 0:o.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),t(ae,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:o=>a.setSearchQuery(o.target.value),placeholder:"search..."})]}),t("div",{style:{height:"16px"}}),c().length==0?i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[t("img",{src:re,alt:""}),t(h,{size:"title2",type:"title",children:"no validators match this search"})]}):i(H,{children:[t(ce,{validators:c(),sortBy:"validatorTotal",searched:a.searchQuery}),t("div",{style:{height:"60px"}})]})]})},Je=y.div`
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
`,Xe=y.div`
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
`,Ze=y.div`
  background-color: #040404;
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
      color: #efefef;
      border: 1px solid #efefef;
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
`,V={amount:"300000000000000000",denom:"aalthea",gas:"300000"},me={amount:"500000000000000000",denom:"aalthea",gas:"500000"},ue={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},et={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},tt=y.div`
  /* background: rgba(217, 217, 217, 0.2); */
  background-color: black;
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
`,at=e=>i(tt,{children:[t("img",{src:re,height:"60",alt:"warning-icon"}),t(h,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),t(h,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),t(G,{className:"btn-group",onClick:()=>e.onUndelegate(),children:"confirm undelegation"}),t(W,{className:"btn-group",onClick:()=>e.onCancel(),children:"undelegate later"})]});async function U(e,a,r){var o,n,l;if(!r.account)return e.setStatus({error:"No account found"}),!1;if(!r.chainId)return e.setStatus({error:"No chainId found"}),!1;const s=u.formatUnits(r.amount,18),c=a===_.REDELEGATE;return await e.addTransactionList([c?nt(r.chainId,r.account,r.operator.address,((o=r.newOperator)==null?void 0:o.address)??"",r.amount,w(r.chainId),me,Q(r.chainId),"",{amount:s,symbol:`from ${(n=r.operator)==null?void 0:n.name} to ${(l=r.newOperator)==null?void 0:l.name}`}):ot(r.chainId,a===_.DELEGATE,r.account,r.operator.address,r.amount,w(r.chainId),V,Q(r.chainId),"",{amount:s,symbol:r.operator.name})],{title:a,txListMethod:ie.COSMOS,chainId:r.chainId})}async function rt(e,a,r,s){return r?a?await e.addTransactionList([{chainId:a,txType:L.CLAIM_REWARDS_STAKING,tx:Ce,params:[r,w(a),ue,Q(a),"",s]}],{title:"Claim Staking Rewards",txListMethod:ie.COSMOS,chainId:a}):(e.setStatus({error:"No chainId found"}),!1):(e.setStatus({error:"No account found"}),!1)}const ot=(e,a,r,s,c,o,n,l,m,f)=>({chainId:e,txType:a?L.DELEGATE:L.UNDELEGATE,tx:a?Se:Ae,params:[r,s,c,o,n,l,m],extraDetails:f}),nt=(e,a,r,s,c,o,n,l,m,f)=>({chainId:e,txType:L.REDELEGATE,tx:_e,params:[a,c,o,n,l,m,r,s],extraDetails:f}),it=({validator:e,allValidators:a,balance:r,account:s,txFeeCheck:c,txStore:o,chainId:n})=>{var N,B,g;const[l,m]=p.useState(""),[f,v]=p.useState(!1),[b,E]=p.useState(),[x,T]=p.useState(!1),C={account:s??"",chainId:n,amount:ye(l,18).toString(),newOperator:{address:(b==null?void 0:b.operator_address)??"",name:(b==null?void 0:b.description.moniker)??""},operator:{address:e.validator.operator_address,name:e.validator.description.moniker}},M=()=>U(o,_.DELEGATE,C),z=()=>U(o,_.UNDELEGATE,C),S=()=>U(o,_.REDELEGATE,C);return i(Ze,{children:[t(h,{size:"title2",type:"title",className:"title",children:e.validator.description.moniker}),i("div",{className:"desc",children:[t("div",{style:{marginBottom:".5rem"},children:i(h,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[e.validator.description.details.toLowerCase()," "]})}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"delegation"}),i("p",{className:"value",children:[u.formatEther(((N=e.userDelegations)==null?void 0:N.balance.amount)??0)," althea"]})]}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"available balance"}),i("p",{className:"value",children:[k(u.formatEther(r))," althea"]})]}),i("div",{className:"dual-h-row",children:[t("p",{className:"type",children:"commission"}),i("p",{className:"value",children:[(Number(e.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),t("div",{className:"group",children:i(q,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(J,{className:"tablist",children:[t(R,{className:"tab",selectedClassName:"tab-selected",children:t(h,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),t(R,{className:"tab",selectedClassName:"tab-selected",children:t(h,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),t(R,{className:"tab",selectedClassName:"tab-selected",children:t(h,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),i(j,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[t(F,{placeholder:"enter amount...",value:l,onChange:d=>{m(d.target.value)}}),t("button",{className:"max",onClick:()=>{const d=A.from(V.amount).add(V.gas).add(u.parseEther("1"));r.sub(d).lte(0)?m("0"):m(u.formatEther(r.sub(d)))},children:"max"})]}),i("div",{className:"agreement",children:[t("div",{children:t(ve,{checked:f,onChange:d=>{v(d)}})}),t(h,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),t(G,{weight:"bold",height:"big",disabled:!f||Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(r))||!c.delegate,className:"btn",onClick:M,children:"delegate"}),!c.delegate&&t(h,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),i(j,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[t(F,{placeholder:"enter amount...",value:l,onChange:d=>{m(d.target.value)}}),t("button",{className:"max",onClick:()=>{var d;m(u.formatEther(((d=e.userDelegations)==null?void 0:d.balance.amount)??"0"))},children:"max"})]}),t(W,{weight:"bold",height:"big",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(((B=e.userDelegations)==null?void 0:B.balance.amount)??"0"))||!c.undelegate,onClick:()=>T(!0),children:"undelegate"}),!c.undelegate&&t(h,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),x&&t(at,{onUndelegate:z,onCancel:()=>T(!1)})]}),i(j,{className:"tabPanel",children:[t("div",{className:"amount",style:{marginTop:"1rem"},children:t("div",{className:"btn-grp",children:t(lt,{children:t($,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(d=>d.description.moniker!=e.validator.description.moniker?{value:d,label:d.description.moniker}:{}),onChange:d=>{E(d==null?void 0:d.value)}})})})}),i("div",{className:"amount",children:[t(F,{placeholder:"enter amount...",value:l,onChange:d=>{m(d.target.value)}}),t("button",{className:"max",onClick:()=>{var d;m(u.formatEther(((d=e.userDelegations)==null?void 0:d.balance.amount)??"0"))},children:"max"})]}),t(G,{height:"big",weight:"bold",className:"btn",disabled:Number(l)==0||isNaN(Number(l))||Number(l)>Number(u.formatEther(((g=e.userDelegations)==null?void 0:g.balance.amount)??"0"))||b==null||!c.redelegate,onClick:()=>S(),children:"re-delegate"}),!c.redelegate&&t(h,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},lt=y.div`
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
  }
  .react-select__control {
    background-color: #222222 !important;
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
    background: rgba(0, 119, 255, 0.25);
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
`,st=y(te)`
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
`,ct=e=>{const a=Y(),r=le(),s=K();return p.useEffect(()=>{a.currentModal!=I.NONE&&O.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),i(st,{open:a.currentModal!=I.NONE,onClose:()=>{a.close(),O.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[t("div",{role:"button",tabIndex:0,onClick:a.close,children:t("img",{src:we,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),t(Le,{onClose:a.close}),a.currentModal===I.STAKE&&t(it,{validator:a.activeValidator,allValidators:e.allValidators,balance:s.balance,account:s.account,txFeeCheck:e.txBalanceChecks,txStore:r,chainId:Number(s.chainId)})]})},dt=()=>{const e=Y(),a=K(),r=le(),[s,c]=p.useState([]),[o,n]=p.useState("0"),[l,m]=p.useState([]),[f,v]=p.useState({total_unbonding:A.from("0")}),[b,E]=p.useState(A.from("0"));async function x(){e.open(I.CLAIM_REWARDS),rt(r,Number(a.chainId),a.account??"",z)}async function T(){a.account&&(m(await Ie(w(Number(a.chainId)),a.account)),E(await Te(w(Number(a.chainId)),a.account)),v(await De(w(Number(a.chainId)),a.account))),c(await Re(w(Number(a.chainId)))),n(await je(w(Number(a.chainId))))}p.useEffect(()=>{const g=setInterval(async()=>{await T()},6e3);return()=>clearInterval(g)},[a.account]),p.useEffect(()=>{T()},[a.account]);const C=ne(s,l,f),M=C.filter(g=>!!g.undelagatingInfo),z=C.filter(g=>!!g.userDelegations);function S(g,d){return A.from(g.amount).add(g.gas).add(d??0)}function N(g,d){return g.gt(d)}return{validators:s,delegations:l,undelegations:f,userValidators:z,undelagatingValidators:M,handleClaimRewards:x,rewards:b,stakingApr:o,txFeeCheck:(()=>{const g=a.balance;return{claimRewards:N(g,S(ue)),delegate:N(g,S(V,u.parseEther("1"))),redelegate:N(g,S(et)),undelegate:N(g,S(me))}})()}},vt=()=>{const e=K(),a=de(),[r,s]=p.useState(!1),{validators:c,delegations:o,undelegations:n,userValidators:l,undelagatingValidators:m,handleClaimRewards:f,rewards:v,stakingApr:b,txFeeCheck:E}=dt();return i(H,{children:[t(Ve,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),i(Xe,{children:[t(ct,{allValidators:c,txBalanceChecks:E}),i(q,{className:"tabs",children:[i(J,{className:"tablist",children:[t(R,{className:r?"tab tab-hover":"tab",onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),t(R,{className:r?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:"all validators"}),i("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[t(X,{style:{width:"10rem"},children:t($,{className:"react-select-container",styles:{dropdownIndicator:x=>({...x,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:x=>{a.setValidatorSort((x==null?void 0:x.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),t(ae,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:x=>a.setSearchQuery(x.target.value),placeholder:"search..."})]})]}),t(j,{children:t(He,{onRewards:f,connected:ke(Number(e.chainId)),account:e.account??"",balance:e.balance,totalStaked:ze(o),totalUnbonding:n.total_unbonding,totalRewards:v,apr:b,userValidationInfo:l,undelegationValidators:m,canClaim:E.claimRewards})}),t(j,{children:t(qe,{validators:ne(c,o,n)})})]})]})]})};export{vt as default};
