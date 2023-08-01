import{n as i,j as t,a4 as C,a as o,T as g,aY as v,av as x,aK as P,F as S,aU as B,D as y,H as b,u as l}from"./index-3a80e83a.js";import{d as z}from"./down-f11b2b90.js";const q=i.div`
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
`,H=i.div`
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
`,D=i.div`
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
`,k=i.div`
  background: rgba(0, 119, 255, 0.25);
  backdrop-filter: blur(35px);
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
`,F=i.div`
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
`,O=i(F)`
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
`,W=i.div`
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
`,N=i.label`
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
`,A=i(N)`
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
`,I=e=>e.disabled?t(C,{trigger:o(A,{className:"switch","data-for":"foo",children:[t("input",{type:"checkbox",checked:e.checked}),t("span",{className:"slider"})]}),position:"bottom center",on:["hover","focus"],arrow:!0,arrowStyle:{color:"rgba(217, 217, 217, 0.25)",backdropFilter:"blur(35px)"},children:t(k,{children:o(g,{type:"text",size:"text4",children:["this asset cannot",t("br",{})," be collateralised"]})})}):o(N,{className:"switch",onClick:a=>{a.stopPropagation()},children:[t("input",{type:"checkbox",checked:e.checked,onChange:()=>{e.onChange()}}),t("span",{className:"slider"})]}),f=({top:e,bottom:a})=>o("div",{style:{display:"flex",flexDirection:"column",lineHeight:"1.5rem"},children:[t("p",{children:e}),t("p",{style:{opacity:.5},children:a})]}),L=e=>o("tr",{onClick:e.onClick,children:[o("td",{children:[t("img",{src:e.assetIcon,alt:""})," ",t("span",{children:e.assetName})]}),t("td",{children:e.apy+" %"}),e.borrowing?o(v.Fragment,{children:[t("td",{children:t(f,{top:e.amount,bottom:x+e.amountInNote})}),t("td",{children:e.liquidity.toFixed(0)+" %"})]}):o(v.Fragment,{children:[t("td",{children:e.amount}),e.assetName=="NOTE"?o("td",{children:[" ",t(C,{trigger:t("span",{children:"N/A"}),position:"bottom center",on:["hover","focus"],arrow:!0,arrowStyle:{color:"rgba(217, 217, 217, 0.25)",backdropFilter:"blur(35px)"},children:t(k,{children:o(g,{type:"text",size:"text4",children:["this asset cannot",t("br",{})," be collateralised"]})})})]}):o("td",{children:[x,P(e.liquidity)]})]})]}),Y=e=>o("tr",{onClick:e.onClick,children:[o("td",{children:[t("img",{style:{padding:e.assetName.slice(-2)=="LP"?"0":"0 10px"},src:e.assetIcon,alt:""})," ",t("span",{children:e.assetName})]}),t("td",{children:t(f,{top:e.apy+" %",bottom:e.distAPY+"%"})}),e.supplying?o(S,{children:[o("td",{children:[Number(e.rewards).toFixed(2)," ",t("img",{src:B,alt:"althea",style:{height:"14px",paddingTop:"3px"}})]}),t("td",{children:t(f,{top:e.amount,bottom:x+e.amountInNote})})]}):t("td",{children:e.amount}),t("td",{children:t(I,{checked:e.collateral??!1,disabled:!e.collaterable,onChange:()=>{e.onToggle(!e.collateral)}})})]}),X=e=>o("tr",{onClick:e.onClick,children:[o("td",{children:[t("img",{src:e.icon})," ",t("span",{children:e.name})]}),t("td",{children:e.status}),t("td",{children:e.date.toDateString()})]});i.td`
  display: table-cell !important;
  text-transform: lowercase !important;
  text-align: center !important;
`;const U=i.table`
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
`,T=e=>{const[a,d]=y.useState(!1);return o(U,{children:[t("thead",{children:t("tr",{children:e.columns.map((m,p)=>o("th",{style:{position:"relative"},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(p),d(!0)},children:[m,a&&p==e.columnClicked?t("img",{src:z,width:"10",style:{position:"absolute",right:"10px",top:"2px"}}):""]},m+(Math.random()+1).toString(36).substring(7)))})}),t("tbody",{children:e.children})]})};function j(e,a){return typeof e=="string"?e.localeCompare(a):typeof e=="number"?a-e:typeof e=="boolean"?e===a?0:e?-1:1:0}const K=({visible:e,supplying:a,userLMTokens:d,onClick:m,onToggle:p})=>{const[c,u]=y.useState(0),w=a?["asset","apr","rewards","balance","collateral"]:["asset","apr","wallet","collateral"];return d.length==0||!e?null:o("div",{className:"left",children:[t(g,{type:"title",size:"title3",align:"left",children:a?"supplying":"supply market"}),t(T,{columns:w,isLending:!0,onColumnClicked:r=>u(r),columnClicked:c,children:d.map(r=>{const s=a?r.supplyBalance:r.balanceOf;return t(Y,{supplying:a,collaterable:!r.collateralFactor.isZero(),onClick:()=>m(r),assetIcon:r.data.underlying.icon,assetName:r.data.underlying.symbol,apy:r.supplyAPY.toFixed(2),distAPY:r.distAPY.toFixed(2),amount:b(l.formatUnits(s,r.data.underlying.decimals)),amountInNote:b(l.formatUnits(r.supplyBalanceinNote)),symbol:r.data.underlying.symbol,collateral:r.collateral,rewards:b(l.formatUnits(r.rewards)),onToggle:()=>p(r),sortableProps:a?[r.data.underlying.symbol,r.distAPY,Number(l.formatEther(r.rewards)),Number(l.formatEther(r.supplyBalanceinNote)),r.collateral]:[r.data.underlying.symbol,r.distAPY,Number(l.formatUnits(r.balanceOf,r.data.decimals)),r.collateral]},r.data.address+"supplying")}).sort((r,s)=>{var n,h;return j((n=r.props.sortableProps)==null?void 0:n[c],(h=s.props.sortableProps)==null?void 0:h[c])})})]})},M=({visible:e,borrowing:a,userLMTokens:d,position:m,onClick:p})=>{const[c,u]=y.useState(0);return d.length==0||!e?null:o("div",{className:"right",children:[t(g,{type:"title",size:"title3",align:"right",children:a?"borrowing":"borrow market"}),t(T,{columns:a?["asset","apr/accrued","balance","% of limit"]:["asset","apr","wallet","liquidity"],isLending:!1,onColumnClicked:r=>u(r),columnClicked:c,children:d.map(r=>{const s=a?r.borrowBalance:r.balanceOf,n=a?r.borrowBalanceinNote.mul(100).div(m.totalBorrowLimit).toNumber():Number(r.liquidity);return t(L,{borrowing:a,onClick:()=>p(r),assetIcon:r.data.underlying.icon,assetName:r.data.underlying.symbol,apy:r.borrowAPY.toFixed(2),amount:b(l.formatUnits(s,r.data.underlying.decimals)),amountInNote:b(l.formatUnits(r.borrowBalanceinNote)),symbol:r.data.underlying.symbol,liquidity:n,sortableProps:[r.data.underlying.symbol,r.borrowAPY,Number(a?l.formatEther(r.borrowBalanceinNote):l.formatUnits(r.balanceOf,r.data.underlying.decimals)),n]},r.data.address+"borrowed")}).sort((r,s)=>{var n,h;return j((n=r.props.sortableProps)==null?void 0:n[c],(h=s.props.sortableProps)==null?void 0:h[c])})})]})};export{M as B,O as E,H,D as L,W as R,q as S,k as T,K as a,T as b,X as c,j as s};
