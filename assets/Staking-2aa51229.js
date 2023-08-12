import{l as O,S as J,d as H,T as Z,a as ee,b as j,c as z}from"./selected-5b671671.js";import{n as b,D as g,ao as fe,a as l,j as a,T as p,ap as X,ah as te,B as S,aq as ae,u,$ as re,ar as be,H as k,as as G,at as xe,ak as ye,a5 as ve,a6 as we,an as ke,F as K,L as Q,au as oe,R as ne,P as $,U as Ne,m as M,i as x,f as W,a0 as Ee,z as U,av as Ce,aw as Se,V as q,N as Ae,ax as Ie}from"./index-8a733990.js";import{h as Te}from"./moment-9d68d5ae.js";import{t as _e,a as De,b as je,c as ze,g as ie,d as le,e as Re,f as Ve,h as Le,i as Me,j as Be,k as Fe,l as Ue,m as Pe,n as Oe,o as Ge}from"./transactionHelpers-1cc4b7f0.js";import{T as se,u as ce,O as Qe}from"./index-e79a515f.js";import{H as $e}from"./seo-c22988a6.js";const We=({totalStaked:e,rewards:t,apr:o,onRewards:c,canClaim:d,onDelegate:n})=>{const{theme:i}=g.useContext(fe);return l(He,{children:[l("div",{className:"dual-item",style:{margin:"0"},children:[a("div",{className:"top",children:a(p,{type:"text",size:"text1",children:"total staked"})}),a("div",{className:"bottom",children:a(p,{type:"text",children:e})})]}),a("div",{className:"separator"}),l("div",{className:"dual-item",children:[a("div",{className:"top",children:a(p,{type:"text",size:"text1",children:"apr"})}),a("div",{className:"bottom",children:l(p,{type:"text",children:[o,"%"]})})]}),a("div",{className:"separator"}),l("div",{className:"dual-item",children:[a("div",{className:"top",children:a(p,{type:"text",size:"text1",children:"rewards"})}),a("div",{className:"bottom",children:a(p,{type:"text",children:t})})]}),l("div",{className:"buttons-container",children:[a(X,{type:"outlined",style:{height:"big"},theme:i,disabled:Number(t)==0||!d,onClick:c,children:a(p,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),a(X,{type:"outlined",style:{height:"big"},theme:i,onClick:n,children:a(p,{size:"text2",type:"text",bold:!0,children:"auto stake"})})]})]})},He=b.div`
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
`;var A=(e=>(e.DELEGATE="DELEGATE",e.UNDELEGATE="UNDELEGATE",e.REDELEGATE="REDELEGATE",e.CLAIM_REWARDS="CLAIM_REWARDS",e))(A||{});const Ke={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var I=(e=>(e[e.STAKE=0]="STAKE",e[e.AUTO_DELEGATE=1]="AUTO_DELEGATE",e[e.CLAIM_REWARDS=2]="CLAIM_REWARDS",e[e.NONE=3]="NONE",e))(I||{});const Y=te(e=>({currentModal:3,open:t=>e({currentModal:t}),close:()=>e({currentModal:3}),activeValidator:Ke,setActiveValidator:t=>e({activeValidator:t})})),qe="/althea-app/assets/rightArrow-189f42f9.svg",Ye="/althea-app/assets/arrow-4cafc986.svg",Xe=b.table`
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
`,de=e=>{const[t,o]=g.useState(!1);return a("div",{children:l(Xe,{children:[a("thead",{children:a("tr",{children:e.columns.map((c,d)=>a("th",{style:{backgroundColor:t&&d==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(d),o(!0)},children:c},c))})}),a("tbody",{children:e.children})]})})},Je="/althea-app/assets/lock-ee10952d.svg";b.div`
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
`;const Ze=b.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,et=b.div`
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
`;b(et)`
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
`;function tt(e,t){return typeof e=="string"?e.localeCompare(t):typeof e=="number"?t-e:typeof e=="boolean"?e===t?0:e?-1:1:0}const me=e=>{const[t,o]=g.useState(0),c=Y(),d=e.validators.sort((n,i)=>{var h,w;if(e.searched)return O(e.searched,n.validator.description.moniker)>O(e.searched,i.validator.description.moniker)?1:-1;const r=e.sortBy==="userTotal"?(h=n.userDelegations)==null?void 0:h.balance.amount:n.validator.tokens,s=e.sortBy==="userTotal"?(w=i.userDelegations)==null?void 0:w.balance.amount:i.validator.tokens;return S.from(r).gt(S.from(s))?-1:1});return e.validators.length?a(de,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:n=>o(n),columnClicked:t,children:a(ae,{children:d.map((n,i)=>{var r,s;return a(at,{rank:i+1,name:n.validator.description.moniker,totalStake:n.validator.tokens,userStake:((r=n.userDelegations)==null?void 0:r.balance.amount)??"0",commission:Number(n.validator.commission.commission_rates.rate),jailed:n.validator.jailed,onClick:()=>{c.setActiveValidator(n),c.open(I.STAKE)},sortableProps:[1/Number(i),n.validator.description.moniker,Number(u.formatEther(n.validator.tokens)),Number(u.formatEther(((s=n.userDelegations)==null?void 0:s.balance.amount)??"0")),Number(n.validator.commission.commission_rates.rate)]},i)}).sort((n,i)=>{var r,s;return tt((r=n.props.sortableProps)==null?void 0:r[t],(s=i.props.sortableProps)==null?void 0:s[t])})})}):null},at=e=>l("tr",{onClick:e.onClick,className:`${e.jailed?"jailed":""}`,style:{borderColor:e.jailed?"#EF4444":"var(--primary-color)"},children:[a("td",{children:e.rank}),l("td",{children:[e.jailed?a(re,{trigger:a("img",{style:{height:"20px"},src:Je}),on:["hover","focus"],children:a(Ze,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,e.name]}),l("td",{children:[be(Number(k(u.formatEther(e.totalStake))))," ",a(G,{})]}),l("td",{children:[u.commify(k(u.formatEther(e.userStake))),a(G,{})]}),a("td",{children:xe(e.commission)})]});function rt(e,t){return typeof e=="string"?e.localeCompare(t):typeof e=="number"?t-e:typeof e=="boolean"?e===t?0:e?-1:1:0}const ot=e=>{var d,n;const[t,o]=g.useState(2),c=[];for(const i of e.validators)if((d=i.undelagatingInfo)!=null&&d.lockouts)for(const r of((n=i.undelagatingInfo)==null?void 0:n.lockouts)??[])c.push({name:i.validator.description.moniker,amount:r.value_of_coin,completionDate:r.complete_time_stamp});return e.validators.length?a(de,{columns:["name","undelegation","completion date"],onColumnClicked:i=>o(i),columnClicked:t,children:a(ae,{children:c.map((i,r)=>a(nt,{name:i.name,amount:i.amount,completionDate:Te.utc(i.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[i.name,Number(u.formatEther(i.amount))]},r)).sort((i,r)=>{var s,h;return t==2?-1:rt((s=i.props.sortableProps)==null?void 0:s[t],(h=r.props.sortableProps)==null?void 0:h[t])})})}):null},nt=e=>l("tr",{children:[a("td",{children:e.name}),l("td",{children:[u.commify(k(u.formatEther(e.amount)))," ",a(G,{})]}),a("td",{style:{display:"table-cell"},children:e.completionDate})]}),it=e=>{const{activateBrowserWallet:t}=ye();return a(lt,{children:e.connected?l(K,{children:[l("div",{children:[a(We,{balance:k(u.formatEther(e.balance)),totalStaked:k(u.formatEther(e.totalStaked)),totalUnbonding:k(u.formatEther(e.totalUnbonding)),onRewards:e.onRewards,rewards:k(u.formatEther(e.totalRewards)),apr:e.apr,canClaim:e.canClaim,onDelegate:e.onDelegate}),a(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.userValidationInfo.length==0,children:"current staking position"}),a(me,{validators:e.userValidationInfo,sortBy:"userTotal"}),a(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:e.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),a(ot,{validators:e.undelegationValidators}),a("br",{})]}),a("div",{style:{height:"60px"}})]}):a(ve,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:we,onClick:()=>{t(),ke()}})})},lt=b.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,ue=te(e=>({inAllValidators:!1,setInAllValidators:t=>e({inAllValidators:t}),searchQuery:"",setSearchQuery:t=>{e({searchQuery:t})},validatorSort:1,setValidatorSort:t=>e({validatorSort:t})})),st=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],ct=e=>{const t=ue(),[o,c]=g.useState(!1),d=()=>{const n=e.validators.filter(i=>t.validatorSort==1?!i.validator.jailed:t.validatorSort==2?i.validator.jailed:!0);return t.searchQuery===""?n:n.filter(i=>O(t.searchQuery,i.validator.description.moniker.toLowerCase())<6||i.validator.description.moniker.toLowerCase().includes(t.searchQuery))};return g.useEffect(()=>{!o&&t.searchQuery!==""&&(Q.events.stakingActions.userSearch(),c(!0))},[t.searchQuery]),l(dt,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:d().length==0?"black":"transparent"},children:[l("div",{className:"sort-search-local",children:[a(J,{style:{width:"18rem"},children:a(H,{className:"react-select-container",styles:{dropdownIndicator:n=>({...n,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:st,onChange:n=>{t.setValidatorSort((n==null?void 0:n.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),a(oe,{style:{textAlign:"left",paddingRight:"1rem"},value:t.searchQuery,onChange:n=>t.setSearchQuery(n.target.value),placeholder:"search..."})]}),a("div",{style:{height:"16px"}}),d().length==0?l("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[a(ne,{color:"var(--primary-color)",size:"30px"}),a(p,{size:"title2",type:"title",children:"no validators match this search"})]}):l(K,{children:[a(me,{validators:d(),sortBy:"validatorTotal",searched:t.searchQuery}),a("div",{style:{height:"60px"}})]})]})},dt=b.div`
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
`,mt=b.div`
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
`,ut=b.div`
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
`,B={amount:"300000000000000000",denom:"aalthea",gas:"300000"},pe={amount:"500000000000000000",denom:"aalthea",gas:"500000"},he={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},pt={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},ht=b.div`
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
`,gt=e=>l(ht,{children:[a(ne,{color:"var(--primary-color)",size:"30px"}),a(p,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),a(p,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),a($,{className:"btn-group",onClick:()=>e.onUndelegate(),children:"confirm undelegation"}),a(Ne,{className:"btn-group",onClick:()=>e.onCancel(),children:"undelegate later"})]});async function P(e,t,o){var n,i,r;if(!o.account)return e.setStatus({error:"No account found"}),!1;if(!o.chainId)return e.setStatus({error:"No chainId found"}),!1;const c=u.formatUnits(o.amount,18),d=t===A.REDELEGATE;return await e.addTransactionList([d?xt(o.chainId,o.account,o.operator.address,((n=o.newOperator)==null?void 0:n.address)??"",o.amount,x(o.chainId),pe,W(o.chainId),"",{amount:c,symbol:`from ${(i=o.operator)==null?void 0:i.name} to ${(r=o.newOperator)==null?void 0:r.name}`}):bt(o.chainId,t===A.DELEGATE,o.account,o.operator.address,o.amount,x(o.chainId),B,W(o.chainId),"",{amount:c,symbol:o.operator.name})],{title:t,txListMethod:se.COSMOS,chainId:o.chainId})}async function ft(e,t,o,c){return o?t?await e.addTransactionList([{chainId:t,txType:M.CLAIM_REWARDS_STAKING,tx:_e,params:[o,x(t),he,W(t),"",c]}],{title:"Claim Staking Rewards",txListMethod:se.COSMOS,chainId:t}):(e.setStatus({error:"No chainId found"}),!1):(e.setStatus({error:"No account found"}),!1)}const bt=(e,t,o,c,d,n,i,r,s,h)=>({chainId:e,txType:t?M.DELEGATE:M.UNDELEGATE,tx:t?De:je,params:[o,c,d,n,i,r,s],extraDetails:h}),xt=(e,t,o,c,d,n,i,r,s,h)=>({chainId:e,txType:M.REDELEGATE,tx:ze,params:[t,d,n,i,r,s,o,c],extraDetails:h}),yt=({validator:e,allValidators:t,balance:o,account:c,txFeeCheck:d,txStore:n,chainId:i})=>{var D,N,E;const[r,s]=g.useState(""),[h,w]=g.useState(!1),[v,T]=g.useState(),[C,y]=g.useState(!1),_={account:c??"",chainId:i,amount:Ee(r,18).toString(),newOperator:{address:(v==null?void 0:v.operator_address)??"",name:(v==null?void 0:v.description.moniker)??""},operator:{address:e.validator.operator_address,name:e.validator.description.moniker}},R=()=>P(n,A.DELEGATE,_),V=()=>P(n,A.UNDELEGATE,_),F=()=>P(n,A.REDELEGATE,_);return l(ut,{children:[a(p,{size:"title2",type:"title",className:"title",children:e.validator.description.moniker}),l("div",{className:"desc",children:[a("div",{style:{marginBottom:".5rem"},children:l(p,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[e.validator.description.details.toLowerCase()," "]})}),l("div",{className:"dual-h-row",children:[a("p",{className:"type",children:"delegation"}),l("p",{className:"value",children:[u.formatEther(((D=e.userDelegations)==null?void 0:D.balance.amount)??0)," althea"]})]}),l("div",{className:"dual-h-row",children:[a("p",{className:"type",children:"available balance"}),l("p",{className:"value",children:[k(u.formatEther(o))," althea"]})]}),l("div",{className:"dual-h-row",children:[a("p",{className:"type",children:"commission"}),l("p",{className:"value",children:[(Number(e.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),a("div",{className:"group",children:l(Z,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[l(ee,{className:"tablist",children:[a(j,{className:"tab",selectedClassName:"tab-selected",children:a(p,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),a(j,{className:"tab",selectedClassName:"tab-selected",children:a(p,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),a(j,{className:"tab",selectedClassName:"tab-selected",children:a(p,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),l(z,{className:"tabPanel",children:[l("div",{className:"amount",style:{marginTop:"1rem"},children:[a(U,{placeholder:"enter amount...",value:r,onChange:m=>{s(m.target.value)}}),a("button",{className:"max",onClick:()=>{const m=S.from(B.amount).add(B.gas).add(u.parseEther("1"));o.sub(m).lte(0)?s("0"):s(u.formatEther(o.sub(m)))},children:"max"})]}),l("div",{className:"agreement",children:[a("div",{children:a(Ce,{checked:h,onChange:m=>{w(m)}})}),a(p,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),a($,{weight:"bold",height:"big",disabled:!h||Number(r)==0||isNaN(Number(r))||Number(r)>Number(u.formatEther(o))||!d.delegate,className:"btn",onClick:R,children:"delegate"}),!d.delegate&&a(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),l(z,{className:"tabPanel",children:[l("div",{className:"amount",style:{marginTop:"1rem"},children:[a(U,{placeholder:"enter amount...",value:r,onChange:m=>{s(m.target.value)}}),a("button",{className:"max",onClick:()=>{var m;s(u.formatEther(((m=e.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),a(Se,{weight:"bold",height:"big",className:"btn",disabled:Number(r)==0||isNaN(Number(r))||Number(r)>Number(u.formatEther(((N=e.userDelegations)==null?void 0:N.balance.amount)??"0"))||!d.undelegate,onClick:()=>y(!0),children:"undelegate"}),!d.undelegate&&a(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),C&&a(gt,{onUndelegate:V,onCancel:()=>y(!1)})]}),l(z,{className:"tabPanel",children:[a("div",{className:"amount",style:{marginTop:"1rem"},children:a("div",{className:"btn-grp",children:a(vt,{children:a(H,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:t.map(m=>m.description.moniker!=e.validator.description.moniker?{value:m,label:m.description.moniker}:{}),onChange:m=>{T(m==null?void 0:m.value)}})})})}),l("div",{className:"amount",children:[a(U,{placeholder:"enter amount...",value:r,onChange:m=>{s(m.target.value)}}),a("button",{className:"max",onClick:()=>{var m;s(u.formatEther(((m=e.userDelegations)==null?void 0:m.balance.amount)??"0"))},children:"max"})]}),a($,{height:"big",weight:"bold",className:"btn",disabled:Number(r)==0||isNaN(Number(r))||Number(r)>Number(u.formatEther(((E=e.userDelegations)==null?void 0:E.balance.amount)??"0"))||v==null||!d.redelegate,onClick:()=>F(),children:"re-delegate"}),!d.redelegate&&a(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},vt=b.div`
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
`,wt=b(re)`
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
`,kt=e=>{const t=Y(),o=ce(),c=q();return g.useEffect(()=>{t.currentModal!=I.NONE&&Q.events.stakingActions.modalInteraction(t.activeValidator.validator.description.moniker,!0)},[t.currentModal]),l(wt,{open:t.currentModal!=I.NONE,onClose:()=>{t.close(),Q.events.stakingActions.modalInteraction(t.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[a("div",{role:"button",tabIndex:0,onClick:t.close,children:a("img",{src:Ae,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),a(Qe,{onClose:t.close}),t.currentModal===I.STAKE&&a(yt,{validator:t.activeValidator,allValidators:e.allValidators,balance:c.balance,account:c.account,txFeeCheck:e.txBalanceChecks,txStore:o,chainId:Number(c.chainId)})]})};async function Nt(e){const t=await ie(e),o=t.reduce((r,s)=>r+parseFloat(s.commission),0)/t.length;t.forEach(r=>{let s=0;const h=o-parseFloat(r.commission);h<0?s-=Math.abs(h):s+=h,r.missedBlocks<=500?s+=5:s-=r.missedBlocks-500,r.slashings>1?s-=(r.slashings-1)*5:r.slashings===0&&(s+=5),r.score=s});const c=[...t].sort((r,s)=>parseFloat(s.tokens)-parseFloat(r.tokens)).slice(0,10),d=new Set(c.map(r=>r.operator_address));return t.filter(r=>!d.has(r.operator_address)).sort((r,s)=>s.score-r.score).slice(0,20)}const Et=()=>{const e=Y(),t=q(),o=ce(),[c,d]=g.useState([]),[n,i]=g.useState("0"),[r,s]=g.useState([]),[h,w]=g.useState({total_unbonding:S.from("0")}),[v,T]=g.useState(S.from("0"));async function C(){try{const f=await Re(x(Number(t.chainId))),L=await Ve(x(Number(t.chainId))),Ct=await Le(x(Number(t.chainId))),St=await Me(x(Number(t.chainId))),At=await ie(x(Number(t.chainId))),ge=await Nt(x(Number(t.chainId)));console.log(ge)}catch(f){console.error("Error:",f)}}g.useEffect(()=>{C()},[t.chainId]);async function y(){e.open(I.STAKE),ft(o,Number(t.chainId),t.account??"",D)}async function _(){}async function R(){t.account&&(s(await Be(x(Number(t.chainId)),t.account)),T(await Fe(x(Number(t.chainId)),t.account)),w(await Ue(x(Number(t.chainId)),t.account))),d(await Pe(x(Number(t.chainId)))),i(await Oe(x(Number(t.chainId))))}g.useEffect(()=>{const f=setInterval(async()=>{await R()},6e3);return()=>clearInterval(f)},[t.account]),g.useEffect(()=>{R()},[t.account]);const V=le(c,r,h),F=V.filter(f=>!!f.undelagatingInfo),D=V.filter(f=>!!f.userDelegations);function N(f,L){return S.from(f.amount).add(f.gas).add(L??0)}function E(f,L){return f.gt(L)}return{validators:c,delegations:r,undelegations:h,userValidators:D,undelagatingValidators:F,handleClaimRewards:y,autoDelegate:_,rewards:v,stakingApr:n,txFeeCheck:(()=>{const f=t.balance;return{claimRewards:E(f,N(he)),delegate:E(f,N(B,u.parseEther("1"))),redelegate:E(f,N(pt)),undelegate:E(f,N(pe))}})()}},Rt=()=>{const e=q(),t=ue(),[o,c]=g.useState(!1),{validators:d,delegations:n,undelegations:i,userValidators:r,undelagatingValidators:s,handleClaimRewards:h,autoDelegate:w,rewards:v,stakingApr:T,txFeeCheck:C}=Et();return l(K,{children:[a($e,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),l(mt,{children:[a(kt,{allValidators:d,txBalanceChecks:C}),l(Z,{className:"tabs",children:[l(ee,{className:"tablist",children:[a(j,{className:o?"tab tab-hover":"tab",onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onClick:()=>{t.setInAllValidators(!1)},children:"my staking"}),a(j,{className:o?"tab tab-hover":"tab",onClick:()=>{t.setInAllValidators(!0)},onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:"all validators"}),l("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:t.inAllValidators?"flex":"none"},children:[a(J,{style:{width:"10rem"},children:a(H,{className:"react-select-container",styles:{dropdownIndicator:y=>({...y,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:y=>{t.setValidatorSort((y==null?void 0:y.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),a(oe,{style:{textAlign:"left",paddingRight:"1rem"},value:t.searchQuery,onChange:y=>t.setSearchQuery(y.target.value),placeholder:"search..."})]})]}),a(z,{children:a(it,{onRewards:h,connected:Ie(Number(e.chainId)),account:e.account??"",balance:e.balance,totalStaked:Ge(n),totalUnbonding:i.total_unbonding,totalRewards:v,apr:T,userValidationInfo:r,undelegationValidators:s,canClaim:C.claimRewards,onDelegate:w})}),a(z,{children:a(ct,{validators:le(d,n,i)})})]})]})]})};export{Rt as default};
