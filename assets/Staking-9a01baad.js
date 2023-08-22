import{l as Q,S as Z,d as H,T as K,a as q,b as _,c as j}from"./selected-c0746d14.js";import{ae as ee,n as x,D as h,al as fe,a as i,j as e,T as p,am as X,B as D,an as te,u as g,Y as ae,ao as be,H as A,ap as $,aq as xe,ah as ye,a2 as ve,a3 as we,ak as ke,F as O,I as W,ar as re,L as oe,P as F,Q as Ne,m as L,i as C,f as P,Z as ne,z as B,as as ie,at as Ee,au as Ce,av as Se,N as Te,R as Y,J as Ae,aw as Ie}from"./index-2643c3b6.js";import{g as _e,t as De,a as Ve,b as ze,c as Me,d as je,e as le,f as Le,h as Re,i as Be,j as Fe,k as Pe,l as Oe}from"./transactionHelpers-9334762b.js";import{h as Ue}from"./moment-7785d891.js";import{T as J,u as se,O as Ge}from"./index-de13f699.js";import{H as Qe}from"./seo-12f6a5c1.js";var z=(t=>(t.DELEGATE="DELEGATE",t.UNDELEGATE="UNDELEGATE",t.REDELEGATE="REDELEGATE",t.CLAIM_REWARDS="CLAIM_REWARDS",t))(z||{});const $e={validator:{commission:{commission_rates:{max_change_rate:"0",max_rate:"0",rate:"0"},update_time:"0"},consensus_pubkey:{"@type":"0",key:"0"},delegator_shares:"0",description:{details:"0",identity:"0",moniker:"0",security_contact:"0",website:"0"},moniker:"",jailed:!1,min_self_delegation:"0",operator_address:"0",status:"0",tokens:"0",unbonding_height:"0",unbonding_time:"0"},userDelegations:void 0,undelagatingInfo:void 0};var I=(t=>(t[t.STAKE=0]="STAKE",t[t.AUTO_DELEGATE=1]="AUTO_DELEGATE",t[t.CLAIM_REWARDS=2]="CLAIM_REWARDS",t[t.NONE=3]="NONE",t))(I||{});const R=ee(t=>({currentModal:3,open:a=>t({currentModal:a}),close:()=>t({currentModal:3}),activeValidator:$e,activeValidators:[],setActiveValidator:a=>t({activeValidator:a}),setActiveValidators:a=>t({activeValidators:a})}));async function ce(t){const a=await _e(),r=a.reduce((o,s)=>o+parseFloat(s.commission),0)/a.length;a.forEach(o=>{let s=0;const m=r-parseFloat(o.commission);m<0?s-=Math.abs(m):s+=m,o.missedBlocks<=100?s+=5:s-=o.missedBlocks-100,o.slashings>1?s-=(o.slashings-1)*5:o.slashings===0&&(s+=5),o.score=s});const c=[...a].sort((o,s)=>parseFloat(s.tokens)-parseFloat(o.tokens)).slice(0,10),d=new Set(c.map(o=>o.operator_address));return a.filter(o=>!d.has(o.operator_address)).sort((o,s)=>s.score-o.score).slice(0,10)}const We=({totalStaked:t,rewards:a,apr:r,onRewards:c,canClaim:d})=>{const{theme:n}=h.useContext(fe),[l,o]=h.useState([]);R(f=>f.open);const{setActiveValidators:s,open:m}=R(),w=async()=>{m(I.AUTO_DELEGATE);const f=await ce();o(f),s(f)};return i(He,{children:[i("div",{className:"dual-item",style:{margin:"0"},children:[e("div",{className:"top",children:e(p,{type:"text",size:"text1",children:"total staked"})}),e("div",{className:"bottom",children:e(p,{type:"text",children:t})})]}),e("div",{className:"separator"}),i("div",{className:"dual-item",children:[e("div",{className:"top",children:e(p,{type:"text",size:"text1",children:"apr"})}),e("div",{className:"bottom",children:i(p,{type:"text",children:[r,"%"]})})]}),e("div",{className:"separator"}),i("div",{className:"dual-item",children:[e("div",{className:"top",children:e(p,{type:"text",size:"text1",children:"rewards"})}),e("div",{className:"bottom",children:e(p,{type:"text",children:a})})]}),i("div",{className:"buttons-container",children:[e(X,{type:"outlined",style:{height:"big"},theme:n,disabled:Number(a)==0||!d,onClick:c,children:e(p,{size:"text2",type:"text",bold:!0,children:"claim rewards"})}),e(X,{type:"outlined",style:{height:"big"},theme:n,onClick:w,children:e(p,{size:"text2",type:"text",bold:!0,children:"multi stake"})})]})]})},He=x.div`
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
`,de=t=>{const[a,r]=h.useState(!1);return e("div",{children:i(Ye,{children:[e("thead",{children:e("tr",{children:t.columns.map((c,d)=>e("th",{style:{backgroundColor:a&&d==t.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{t.onColumnClicked&&t.onColumnClicked(d),r(!0)},children:c},c))})}),e("tbody",{children:t.children})]})})},Je="/althea-app/assets/lock-ee10952d.svg";x.div`
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
`;function et(t,a){return typeof t=="string"?t.localeCompare(a):typeof t=="number"?a-t:typeof t=="boolean"?t===a?0:t?-1:1:0}const me=t=>{const[a,r]=h.useState(0),c=R(),d=t.validators.sort((n,l)=>{var m,w;if(t.searched)return Q(t.searched,n.validator.description.moniker)>Q(t.searched,l.validator.description.moniker)?1:-1;const o=t.sortBy==="userTotal"?(m=n.userDelegations)==null?void 0:m.balance.amount:n.validator.tokens,s=t.sortBy==="userTotal"?(w=l.userDelegations)==null?void 0:w.balance.amount:l.validator.tokens;return D.from(o).gt(D.from(s))?-1:1});return t.validators.length?e(de,{columns:["rank","name","validator total","my stake","commission"],onColumnClicked:n=>r(n),columnClicked:a,children:e(te,{children:d.map((n,l)=>{var o,s;return e(tt,{rank:l+1,name:n.validator.description.moniker,totalStake:n.validator.tokens,userStake:((o=n.userDelegations)==null?void 0:o.balance.amount)??"0",commission:Number(n.validator.commission.commission_rates.rate),jailed:n.validator.jailed,onClick:()=>{c.setActiveValidator(n),c.open(I.STAKE)},sortableProps:[1/Number(l),n.validator.description.moniker,Number(g.formatEther(n.validator.tokens)),Number(g.formatEther(((s=n.userDelegations)==null?void 0:s.balance.amount)??"0")),Number(n.validator.commission.commission_rates.rate)]},l)}).sort((n,l)=>{var o,s;return et((o=n.props.sortableProps)==null?void 0:o[a],(s=l.props.sortableProps)==null?void 0:s[a])})})}):null},tt=t=>i("tr",{onClick:t.onClick,className:`${t.jailed?"jailed":""}`,style:{borderColor:t.jailed?"#EF4444":"var(--primary-color)"},children:[e("td",{children:t.rank}),i("td",{children:[t.jailed?e(ae,{trigger:e("img",{style:{height:"20px"},src:Je}),on:["hover","focus"],children:e(Xe,{style:{width:"175px"},children:"This validator is currently jailed"})}):null,t.name]}),i("td",{children:[be(Number(A(g.formatEther(t.totalStake))))," ",e($,{})]}),i("td",{children:[g.commify(A(g.formatEther(t.userStake))),e($,{})]}),e("td",{children:xe(t.commission)})]});function at(t,a){return typeof t=="string"?t.localeCompare(a):typeof t=="number"?a-t:typeof t=="boolean"?t===a?0:t?-1:1:0}const rt=t=>{var d,n;const[a,r]=h.useState(2),c=[];for(const l of t.validators)if((d=l.undelagatingInfo)!=null&&d.lockouts)for(const o of((n=l.undelagatingInfo)==null?void 0:n.lockouts)??[])c.push({name:l.validator.description.moniker,amount:o.value_of_coin,completionDate:o.complete_time_stamp});return t.validators.length?e(de,{columns:["name","undelegation","completion date"],onColumnClicked:l=>r(l),columnClicked:a,children:e(te,{children:c.map((l,o)=>e(ot,{name:l.name,amount:l.amount,completionDate:Ue.utc(l.completionDate).local().format("L h:mma").toLowerCase(),sortableProps:[l.name,Number(g.formatEther(l.amount))]},o)).sort((l,o)=>{var s,m;return a==2?-1:at((s=l.props.sortableProps)==null?void 0:s[a],(m=o.props.sortableProps)==null?void 0:m[a])})})}):null},ot=t=>i("tr",{children:[e("td",{children:t.name}),i("td",{children:[g.commify(A(g.formatEther(t.amount)))," ",e($,{})]}),e("td",{style:{display:"table-cell"},children:t.completionDate})]}),nt=t=>{const{activateBrowserWallet:a}=ye();return e(it,{children:t.connected?i(O,{children:[i("div",{children:[e(We,{balance:A(g.formatEther(t.balance)),totalStaked:A(g.formatEther(t.totalStaked)),totalUnbonding:A(g.formatEther(t.totalUnbonding)),onRewards:t.onRewards,rewards:A(g.formatEther(t.totalRewards)),apr:t.apr,canClaim:t.canClaim}),e(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:t.userValidationInfo.length==0,children:"current staking position"}),e(me,{validators:t.userValidationInfo,sortBy:"userTotal"}),e(p,{type:"text",size:"title3",color:"primary",align:"left",hidden:t.undelegationValidators.length==0,style:{marginTop:"2rem"},children:"currently undelegating"}),e(rt,{validators:t.undelegationValidators}),e("br",{})]}),e("div",{style:{height:"60px"}})]}):e(ve,{style:{height:"calc(100vh - 14rem)"},title:"Wallet is not connected",subtext:"to use staking you need to connect a wallet through the service metamask",buttonText:"connect wallet",bgFilled:!0,icon:we,onClick:()=>{a(),ke()}})})},it=x.div`
  justify-content: center;
  width: 100vmax;
  max-width: 1200px;
`,ue=ee(t=>({inAllValidators:!1,setInAllValidators:a=>t({inAllValidators:a}),searchQuery:"",setSearchQuery:a=>{t({searchQuery:a})},validatorSort:1,setValidatorSort:a=>t({validatorSort:a})})),lt=[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],st=t=>{const a=ue(),[r,c]=h.useState(!1),d=()=>{const n=t.validators.filter(l=>a.validatorSort==1?!l.validator.jailed:a.validatorSort==2?l.validator.jailed:!0);return a.searchQuery===""?n:n.filter(l=>Q(a.searchQuery,l.validator.description.moniker.toLowerCase())<6||l.validator.description.moniker.toLowerCase().includes(a.searchQuery))};return h.useEffect(()=>{!r&&a.searchQuery!==""&&(W.events.stakingActions.userSearch(),c(!0))},[a.searchQuery]),i(ct,{style:{flexDirection:"column",width:"100%",height:"100%",backgroundColor:d().length==0?"black":"transparent"},children:[i("div",{className:"sort-search-local",children:[e(Z,{style:{width:"18rem"},children:e(H,{className:"react-select-container",styles:{dropdownIndicator:n=>({...n,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:lt,onChange:n=>{a.setValidatorSort((n==null?void 0:n.value)??1)},isSearchable:!1,defaultValue:{label:"active",value:1},placeholder:"active"})}),e(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:n=>a.setSearchQuery(n.target.value),placeholder:"search..."})]}),e("div",{style:{height:"16px"}}),d().length==0?i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"100%",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",justifyContent:"center",alignItems:"center"},children:[e(oe,{color:"var(--primary-color)",size:"30px"}),e(p,{size:"title2",type:"title",children:"no validators match this search"})]}):i(O,{children:[e(me,{validators:d(),sortBy:"validatorTotal",searched:a.searchQuery}),e("div",{style:{height:"60px"}})]})]})},ct=x.div`
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
`,pe=x.div`
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
`,M={amount:"300000000000000000",denom:"aalthea",gas:"300000"},he={amount:"500000000000000000",denom:"aalthea",gas:"500000"},ge={amount:"3000000000000000000",denom:"aalthea",gas:"3000000"},mt={amount:"1000000000000000000",denom:"aalthea",gas:"1000000"},ut=x.div`
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
`,pt=t=>i(ut,{children:[e(oe,{color:"var(--primary-color)",size:"30px"}),e(p,{type:"title",size:"title2",className:"warning-message",children:"funds will not be available for another 21 days"}),e(p,{type:"text",size:"text2",className:"warning-message",children:"you will be able to dispose of these funds after 21 days. during this period, no rewards will accrue"}),e(F,{className:"btn-group",onClick:()=>t.onUndelegate(),children:"confirm undelegation"}),e(Ne,{className:"btn-group",onClick:()=>t.onCancel(),children:"undelegate later"})]});async function ht(t,a,r){if(!r.account)return console.error("No account provided"),t.setStatus({error:"No account found"}),!1;if(!r.chainId)return console.error("No chainId provided"),t.setStatus({error:"No chainId found"}),!1;const c=r.multipOperator.length,d=D.from(r.amount),n=d.div(c),l=d.sub(n.mul(c)),o=Array(c).fill(n),s=Math.floor(Math.random()*c);o[s]=o[s].add(l);const m=o.map(k=>k.toString()),w=r.multipOperator.map((k,v)=>({type:"delegate",operator:k.address,amount:m[v],symbol:"aalthea"})),f=bt(r.chainId,r.account,r.multipOperator.map(k=>k.address),m,C(r.chainId),M,P(r.chainId),"",{delegateMessages:w});return await t.addTransactionList([f],{title:a,txListMethod:J.COSMOS,chainId:r.chainId})}async function G(t,a,r){var n,l,o;if(!r.account)return t.setStatus({error:"No account found"}),!1;if(!r.chainId)return t.setStatus({error:"No chainId found"}),!1;const c=g.formatUnits(r.amount,18),d=a===z.REDELEGATE;return await t.addTransactionList([d?xt(r.chainId,r.account,r.operator.address,((n=r.newOperator)==null?void 0:n.address)??"",r.amount,C(r.chainId),he,P(r.chainId),"",{amount:c,symbol:`from ${(l=r.operator)==null?void 0:l.name} to ${(o=r.newOperator)==null?void 0:o.name}`}):ft(r.chainId,a===z.DELEGATE,r.account,r.operator.address,r.amount,C(r.chainId),M,P(r.chainId),"",{amount:c,symbol:r.operator.name})],{title:a,txListMethod:J.COSMOS,chainId:r.chainId})}async function gt(t,a,r,c){return r?a?await t.addTransactionList([{chainId:a,txType:L.CLAIM_REWARDS_STAKING,tx:De,params:[r,C(a),ge,P(a),"",c]}],{title:"Claim Staking Rewards",txListMethod:J.COSMOS,chainId:a}):(t.setStatus({error:"No chainId found"}),!1):(t.setStatus({error:"No account found"}),!1)}const ft=(t,a,r,c,d,n,l,o,s,m)=>({chainId:t,txType:a?L.DELEGATE:L.UNDELEGATE,tx:a?Ve:ze,params:[r,c,d,n,l,o,s],extraDetails:m}),bt=(t,a,r,c,d,n,l,o,s)=>({chainId:t,txType:L.DELEGATE_MULTIPLE,tx:Me,params:[a,r,c,d,n,l,o,s],extraDetails:s}),xt=(t,a,r,c,d,n,l,o,s,m)=>({chainId:t,txType:L.REDELEGATE,tx:je,params:[a,d,n,l,o,s,r,c],extraDetails:m}),yt=({validator:t,allValidators:a,balance:r,account:c,txFeeCheck:d,txStore:n,chainId:l})=>{var V,U,y;const[o,s]=h.useState(""),[m,w]=h.useState(!1),[f,k]=h.useState(),[v,E]=h.useState(!1),S={account:c??"",chainId:l,amount:ne(o,18).toString(),multipOperator:[],newOperator:{address:(f==null?void 0:f.operator_address)??"",name:(f==null?void 0:f.description.moniker)??""},operator:{address:t.validator.operator_address,name:t.validator.description.moniker}},b=()=>G(n,z.DELEGATE,S),T=()=>G(n,z.UNDELEGATE,S),N=()=>G(n,z.REDELEGATE,S);return i(pe,{children:[e(p,{size:"title2",type:"title",className:"title",children:t.validator.description.moniker}),i("div",{className:"desc",children:[e("div",{style:{marginBottom:".5rem"},children:i(p,{size:"text2",type:"text",align:"left",style:{padding:"8px 0"},children:[t.validator.description.details.toLowerCase()," "]})}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"delegation"}),i("p",{className:"value",children:[g.formatEther(((V=t.userDelegations)==null?void 0:V.balance.amount)??0)," althea"]})]}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"available balance"}),i("p",{className:"value",children:[A(g.formatEther(r))," althea"]})]}),i("div",{className:"dual-h-row",children:[e("p",{className:"type",children:"commission"}),i("p",{className:"value",children:[(Number(t.validator.commission.commission_rates.rate)*100).toFixed(2)," ","%"]})]}),e("div",{className:"group",children:i(K,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(q,{className:"tablist",children:[e(_,{className:"tab",selectedClassName:"tab-selected",children:e(p,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),e(_,{className:"tab",selectedClassName:"tab-selected",children:e(p,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),e(_,{className:"tab",selectedClassName:"tab-selected",children:e(p,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),i(j,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[e(B,{placeholder:"enter amount...",value:o,onChange:u=>{s(u.target.value)}}),e("button",{className:"max",onClick:()=>{const u=D.from(M.amount).add(M.gas).add(g.parseEther("1"));r.sub(u).lte(0)?s("0"):s(g.formatEther(r.sub(u)))},children:"max"})]}),i("div",{className:"agreement",children:[e("div",{children:e(ie,{checked:m,onChange:u=>{w(u)}})}),e(p,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),e(F,{weight:"bold",height:"big",disabled:!m||Number(o)==0||isNaN(Number(o))||Number(o)>Number(g.formatEther(r))||!d.delegate,className:"btn",onClick:b,children:"delegate"}),!d.delegate&&e(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for delegation fee"})]}),i(j,{className:"tabPanel",children:[i("div",{className:"amount",style:{marginTop:"1rem"},children:[e(B,{placeholder:"enter amount...",value:o,onChange:u=>{s(u.target.value)}}),e("button",{className:"max",onClick:()=>{var u;s(g.formatEther(((u=t.userDelegations)==null?void 0:u.balance.amount)??"0"))},children:"max"})]}),e(Ee,{weight:"bold",height:"big",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(g.formatEther(((U=t.userDelegations)==null?void 0:U.balance.amount)??"0"))||!d.undelegate,onClick:()=>E(!0),children:"undelegate"}),!d.undelegate&&e(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for undelegation fee"}),v&&e(pt,{onUndelegate:T,onCancel:()=>E(!1)})]}),i(j,{className:"tabPanel",children:[e("div",{className:"amount",style:{marginTop:"1rem"},children:e("div",{className:"btn-grp",children:e(vt,{children:e(H,{className:"react-select-container",classNamePrefix:"react-select",placeholder:"choose a validator...",options:a.map(u=>u.description.moniker!=t.validator.description.moniker?{value:u,label:u.description.moniker}:{}),onChange:u=>{k(u==null?void 0:u.value)}})})})}),i("div",{className:"amount",children:[e(B,{placeholder:"enter amount...",value:o,onChange:u=>{s(u.target.value)}}),e("button",{className:"max",onClick:()=>{var u;s(g.formatEther(((u=t.userDelegations)==null?void 0:u.balance.amount)??"0"))},children:"max"})]}),e(F,{height:"big",weight:"bold",className:"btn",disabled:Number(o)==0||isNaN(Number(o))||Number(o)>Number(g.formatEther(((y=t.userDelegations)==null?void 0:y.balance.amount)??"0"))||f==null||!d.redelegate,onClick:()=>N(),children:"re-delegate"}),!d.redelegate&&e(p,{type:"text",size:"text3",style:{color:"red"},children:"not enough funds for re-delegation fee"})]})]})})]})]})},vt=x.div`
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
`,wt=({balance:t,account:a,txFeeCheck:r,txStore:c,chainId:d})=>{const[n,l]=h.useState(""),[o,s]=h.useState(!0),[m,w]=h.useState(!1),[f,k]=h.useState(!1),v=async()=>{if(!a){console.error("Account is not defined");return}const b=E.map(N=>({address:N.operator_address,name:N.moniker})),T={account:a,chainId:d,amount:ne(n,18).toString(),multipOperator:b,operator:b[0]};try{await ht(c,z.DELEGATE,T)?console.log("Staking transaction added successfully."):console.error("Failed to add the staking transaction.")}catch(N){console.error("Error while processing staking transaction:",N)}},[E,S]=h.useState([]);return h.useEffect(()=>{(async()=>{s(!0);const T=await ce();S(T),s(!1)})()},[]),i(pe,{children:[i(p,{size:"title2",type:"title",className:"title",children:["Multi-Staking",e("div",{className:"menu-btn",children:e(Ce,{src:Se,width:27,height:27,rotateImage:!0,alt:"menu",onClick:()=>w(!m)})})]}),i("div",{className:"desc",children:[m&&e(kt,{children:"Multi Staking is a tool used to send your delegation to a group of random and performant validators below the top ten. The list is based off a ranking system that considers missed blocks, slashings, commission, voting power, and governance participation."}),e("div",{className:"group",children:i(K,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[i(q,{className:"tablist",children:[e(_,{className:"tab",selectedClassName:"tab-selected",children:e(p,{size:"text3",type:"text",align:"left",bold:!0,children:"delegate"})}),e(_,{className:"tab",selectedClassName:"tab-selected",children:e(p,{size:"text3",type:"text",align:"left",bold:!0,children:"undelegate"})}),e(_,{className:"tab",selectedClassName:"tab-selected",children:e(p,{size:"text3",type:"text",align:"left",bold:!0,children:"redelegate"})})]}),i(j,{className:"tabPanel",children:[o?e(O,{children:i(Et,{children:[e(Te,{size:"md"}),e("span",{children:"Finidng safest validators..."})]})}):e(Nt,{children:i("table",{children:[e("thead",{children:i("tr",{children:[e("th",{children:"Validator"}),e("th",{children:"Missed Blocks"}),e("th",{children:"Rank"}),e("th",{children:"Score"})]})}),e("tbody",{children:E.map(b=>i("tr",{children:[e("td",{children:b.moniker}),e("td",{children:b.missedBlocks}),i("td",{children:[b.trueRank,"th"]}),e("td",{children:Number(b.score).toFixed(4)})]},b.operator_address))})]})}),i("div",{className:"amount",style:{marginTop:"1rem"},children:[e(B,{placeholder:"Enter amount to split between validators...",value:n,onChange:b=>{l(b.target.value)}}),e("button",{className:"max",onClick:()=>{const b=D.from(M.amount).add(M.gas).add(g.parseEther("1"));t.sub(b).lte(0)?l("0"):l(g.formatEther(t.sub(b)))},children:"Max"})]}),i("div",{className:"agreement",children:[e("div",{children:e(ie,{checked:f,onChange:b=>{k(b)}})}),e(p,{size:"text3",type:"text",align:"left",children:"staking will lock up your funds for at least 21 days once you undelegate your staked althea, you will need to wait 21 days for your tokens to be liquid"})]}),e(F,{weight:"bold",height:"big",disabled:!n||!E.length||!r.delegate,className:"btn",onClick:v,children:"Delegate to Multiple Validators"}),!r.delegate&&e(p,{type:"text",size:"text3",style:{color:"red"},children:"Not enough funds for delegation fee"})]})]})})]})]})},kt=x.div`
  font-family: "IBM Plex Sans"; 
  color: var(--primary-color);
  margin-bottom: 15px;
  max-width: 100%; 
  margin-left: auto; 
  margin-right: auto;
`,Nt=x.div`
  width: 100%; 
  max-height: 20vh; 
  overflow-y: scroll;
  padding-top: 16px;
  

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
`,Ct=x(ae)`
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
`,St=t=>{const a=R(),r=se(),c=Y();return h.useEffect(()=>{a.currentModal!=I.NONE&&W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!0)},[a.currentModal]),i(Ct,{open:a.currentModal!=I.NONE,onClose:()=>{a.close(),W.events.stakingActions.modalInteraction(a.activeValidator.validator.description.moniker,!1)},lockScroll:!0,modal:!0,position:"center center",nested:!0,children:[e("div",{role:"button",tabIndex:0,onClick:a.close,children:e("img",{src:Ae,style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer",zIndex:"3",padding:".5rem"},alt:"close"})}),e(Ge,{onClose:a.close}),a.currentModal===I.STAKE&&e(yt,{validator:a.activeValidator,allValidators:t.allValidators,balance:c.balance,account:c.account,txFeeCheck:t.txBalanceChecks,txStore:r,chainId:Number(c.chainId)}),a.currentModal===I.AUTO_DELEGATE&&e(wt,{allValidators:t.allValidators,balance:c.balance,account:c.account,txFeeCheck:t.txBalanceChecks,txStore:r,chainId:Number(c.chainId)})]})},Tt=()=>{const t=R(),a=Y(),r=se(),[c,d]=h.useState([]),[n,l]=h.useState("0"),[o,s]=h.useState([]),[m,w]=h.useState({total_unbonding:D.from("0")}),[f,k]=h.useState(D.from("0"));async function v(){t.open(I.STAKE),gt(r,Number(a.chainId),a.account??"",T)}async function E(){a.account&&(s(await Le(C(Number(a.chainId)),a.account)),k(await Re(C(Number(a.chainId)),a.account)),w(await Be(C(Number(a.chainId)),a.account))),d(await Fe(C(Number(a.chainId)))),l(await Pe(C(Number(a.chainId))))}h.useEffect(()=>{const y=setInterval(async()=>{await E()},6e3);return()=>clearInterval(y)},[a.account]),h.useEffect(()=>{E()},[a.account]);const S=le(c,o,m),b=S.filter(y=>!!y.undelagatingInfo),T=S.filter(y=>!!y.userDelegations);function N(y,u){return D.from(y.amount).add(y.gas).add(u??0)}function V(y,u){return y.gt(u)}return{validators:c,delegations:o,undelegations:m,userValidators:T,undelagatingValidators:b,handleClaimRewards:v,rewards:f,stakingApr:n,txFeeCheck:(()=>{const y=a.balance;return{claimRewards:V(y,N(ge)),delegate:V(y,N(M,g.parseEther("1"))),redelegate:V(y,N(mt)),undelegate:V(y,N(he))}})()}},Mt=()=>{const t=Y(),a=ue(),[r,c]=h.useState(!1),{validators:d,delegations:n,undelegations:l,userValidators:o,undelagatingValidators:s,handleClaimRewards:m,rewards:w,stakingApr:f,txFeeCheck:k}=Tt();return i(O,{children:[e(Qe,{title:"Althea - Staking",description:"Stake your ALTG tokens to participate in governance",link:"staking"}),i(dt,{children:[e(St,{allValidators:d,txBalanceChecks:k}),i(K,{className:"tabs",children:[i(q,{className:"tablist",children:[e(_,{className:r?"tab tab-hover":"tab",onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onClick:()=>{a.setInAllValidators(!1)},children:"my staking"}),e(_,{className:r?"tab tab-hover":"tab",onClick:()=>{a.setInAllValidators(!0)},onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:"all validators"}),i("div",{className:"sort-search",style:{width:"100%",justifyContent:"flex-end",alignItems:"center",gap:"12px",display:a.inAllValidators?"flex":"none"},children:[e(Z,{style:{width:"10rem"},children:e(H,{className:"react-select-container",styles:{dropdownIndicator:v=>({...v,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:[{label:"active",value:1},{label:"inactive",value:2},{label:"all",value:3}],onChange:v=>{a.setValidatorSort((v==null?void 0:v.value)??1)},defaultValue:{label:"active",value:1},isSearchable:!1,placeholder:"active"})}),e(re,{style:{textAlign:"left",paddingRight:"1rem"},value:a.searchQuery,onChange:v=>a.setSearchQuery(v.target.value),placeholder:"search..."})]})]}),e(j,{children:e(nt,{onRewards:m,connected:Ie(Number(t.chainId)),account:t.account??"",balance:t.balance,totalStaked:Oe(n),totalUnbonding:l.total_unbonding,totalRewards:w,apr:f,userValidationInfo:o,undelegationValidators:s,canClaim:k.claimRewards})}),e(j,{children:e(st,{validators:le(d,n,l)})})]})]})]})};export{Mt as default};
