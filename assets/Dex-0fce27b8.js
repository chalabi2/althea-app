import{n as E,D as T,j as t,a as l,T as S,d as ue,b as Le,af as C,ag as I,at as O,B as h,am as Ee,au as Pe,H as g,z as De,a5 as ne,u as y,P as v,F as X,av as J,Z as Re,g as te,aw as fe,C as M,ax as q,ay as _,M as Oe,E as F,m as W,az as Me,U as ee,G as Ue,aA as ve,aB as he,aC as be,aD as pe,a6 as _e,aE as Be,_ as He,aF as se,aG as ae,aH as Fe}from"./index-303f332c.js";import{n as ze,g as K,a as Ve,b as qe,c as je,d as $e,v as V,e as U,T as le,f as Ye,_ as ge,h as Qe,i as We,j as Ke,u as Ze,k as Ge}from"./handleOnGoingTransactions-e6548ee3.js";import{_ as Q,T as ye,O as Xe,u as re,g as Je}from"./ongoingTxModal-7fb6356c.js";import{H as et}from"./seo-1f58295e.js";import{s as ie}from"./LMTables-49a7eb15.js";import"./down-f11b2b90.js";const G=e=>{const[n,o]=T.useState(!1);return t("div",{style:{overflowX:"auto"},children:l(tt,{children:[t("thead",{children:t("tr",{children:e.columns.map((r,a)=>t("th",{style:{backgroundColor:n&&a==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(a),o(!0)},children:r},r))})}),t("tbody",{children:e.children})]})})},tt=E.table`
  margin: 5px auto;
  max-width: 1200px;
  width: 100%;
  color: var(--primary-color);
  text-align: center;
  border-spacing: 0 1rem;
  border-collapse: separate;

  thead {
    text-transform: lowercase;
    font-size: 14px;
  }

  th {
    text-transform: lowercase;
    padding: 8px;
    font-weight: 400;
    &:hover {
      cursor: pointer;
    }
  }

  tr {
    font-size: 14px;
    transition: all 0.2s ease;
    position: relative;
    z-index: 1;

    &::after {
      background-color: black;
      content: " ";
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      border-radius: 4px;
      left: 0;
      z-index: -1;
    }
  }

  td:first-of-type,
  th:first-of-type {
    padding-left: 2rem;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    height: 30px;
  }

  tbody {
    tr {
      &::after {
        border-left: 4px solid var(--primary-color);
        border-right: 4px solid var(--primary-color);
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }

      &:hover::after {
        background-color: #09291c;
      }
    }

    td {
      height: 90px;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 1rem;

    th:nth-of-type(3) {
      display: none;
    }
    td:nth-of-type(3) {
      display: none;
    }
    th:nth-of-type(4) {
      display: none;
    }
    td:nth-of-type(4) {
      display: none;
    }
  }
`,j=e=>l(ot,{children:[t("img",{src:e.iconLeft,height:40,style:{zIndex:"2"}}),t("img",{src:e.iconRight,height:40,style:{marginLeft:"-0.7rem"}})]}),ot=E.span`
  display: flex;
  align-content: center;
  align-items: center;
`,nt=E.tr`
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,de=e=>l(nt,{...e,onClick:()=>{e.onClick()},children:[t("td",{className:"center",children:l(S,{type:"title",size:"text3",bold:!0,className:"center",children:[l("span",{children:[t("img",{src:e.iconLeft,height:30,style:{zIndex:"2"}}),t("img",{src:e.iconRight,height:30,style:{marginLeft:"-.7rem",paddingRight:"1rem"}})]}),e.assetName]})}),t("td",{children:l("div",{className:"center",children:[t("img",{src:ze,alt:"note",height:14,width:14}),t(S,{size:"text3",children:e.totalValueLocked})]})}),t("td",{children:t(S,{size:"text3",children:e.position})}),t("td",{children:l(S,{size:"text3",children:[e.share,"%"]})})]}),st=e=>l("tr",{onClick:e.onClick,children:[l("td",{style:{display:"flex",justifyContent:"center"},children:[" ",l("span",{style:{display:"flex",alignContent:"center",alignItems:"center"},children:[typeof e.icons!="string"?t(j,{iconLeft:e.icons.icon1,iconRight:e.icons.icon2}):t("img",{src:e.icons,height:30,style:{marginRight:"10px"}})," "]}),t("span",{children:e.name})]}),t("td",{children:e.status}),t("td",{children:e.date.toDateString()})]});E.td`
  display: table-cell !important;
  text-transform: lowercase !important;
  text-align: center !important;
`;function ke(e){switch(e){case Le.chainId:return at;case ue.chainId:default:return lt}}const at=[{address:C.testnet.AltheaNoteLP,cLPaddress:C.testnet.cAltheaNoteLP,token1:{...I.altheaTestnet.WALTHEA,symbol:"ALTHEA"},token2:I.altheaTestnet.NOTE,decimals:I.altheaTestnet.AltheaNote.decimals,cDecimals:O.altheaTestnet.CAltheaNote.decimals,stable:!1},{address:C.testnet.AltheaETHLP,cLPaddress:C.testnet.cAltheaETHLP,token1:{...I.altheaTestnet.WALTHEA,symbol:"ALTHEA"},token2:I.altheaTestnet.ETH,decimals:I.altheaTestnet.AltheaETH.decimals,cDecimals:O.altheaTestnet.CAltheaETH.decimals,stable:!1},{address:C.testnet.AltheaAtomLP,cLPaddress:C.testnet.cAltheaAtomLP,token1:{...I.altheaTestnet.WALTHEA,symbol:"ALTHEA"},token2:I.altheaTestnet.ATOM,decimals:I.altheaTestnet.AltheaAtom.decimals,cDecimals:O.altheaTestnet.CAltheaAtom.decimals,stable:!1},{address:C.testnet.NoteUSDCLP,cLPaddress:C.testnet.cNoteUSDCLP,token1:I.altheaTestnet.NOTE,token2:I.altheaTestnet.USDC,decimals:I.altheaTestnet.NoteUSDC.decimals,cDecimals:O.altheaTestnet.CNoteUSDC.decimals,stable:!0},{address:C.testnet.NoteUSDTLP,cLPaddress:C.testnet.cNoteUSDTLP,token1:I.altheaTestnet.NOTE,token2:I.altheaTestnet.USDT,decimals:I.altheaTestnet.NoteUSDT.decimals,cDecimals:O.altheaTestnet.CNoteUSDT.decimals,stable:!0}],lt=[{address:C.altheaMainnet.AltheaNoteLP,cLPaddress:C.altheaMainnet.cAltheaNoteLP,token1:{...I.altheaMainnet.WALTHEA,symbol:"ALTHEA"},token2:I.altheaMainnet.NOTE,decimals:I.altheaMainnet.AltheaNote.decimals,cDecimals:O.altheaMainnet.CAltheaNote.decimals,stable:!1},{address:C.altheaMainnet.AltheaETHLP,cLPaddress:C.altheaMainnet.cAltheaETHLP,token1:{...I.altheaMainnet.WALTHEA,symbol:"ALTHEA"},token2:I.altheaMainnet.ETH,decimals:I.altheaMainnet.AltheaETH.decimals,cDecimals:O.altheaMainnet.CAltheaETH.decimals,stable:!1},{address:C.altheaMainnet.AltheaAtomLP,cLPaddress:C.altheaMainnet.cAltheaAtomLP,token1:{...I.altheaMainnet.WALTHEA,symbol:"ALTHEA"},token2:I.altheaMainnet.ATOM,decimals:I.altheaMainnet.AltheaAtom.decimals,cDecimals:O.altheaMainnet.CAltheaAtom.decimals,stable:!1},{address:C.altheaMainnet.NoteUSDCLP,cLPaddress:C.altheaMainnet.cNoteUSDCLP,token1:I.altheaMainnet.NOTE,token2:I.altheaMainnet.USDC,decimals:I.altheaMainnet.NoteUSDC.decimals,cDecimals:O.altheaMainnet.CNoteUSDC.decimals,stable:!0},{address:C.altheaMainnet.NoteUSDTLP,cLPaddress:C.altheaMainnet.cNoteUSDTLP,token1:I.altheaMainnet.NOTE,token2:I.altheaMainnet.USDT,decimals:I.altheaMainnet.NoteUSDT.decimals,cDecimals:O.altheaMainnet.CNoteUSDT.decimals,stable:!0}],rt={userSupply:{totalLP:h.from(0),token1:h.from(0),token2:h.from(0),percentOwned:0},balances:{token1:h.from(0),token2:h.from(0)},allowance:{token1:h.from(0),token2:h.from(0),LPtoken:h.from(0)}},it={basePairInfo:ke()[0],totalSupply:{totalLP:h.from(0),tvl:h.from(0),token1:h.from(0),token2:h.from(0),ratio:{aTob:!0,ratio:h.from(0)}},prices:{token1:h.from(0),token2:h.from(0),LP:h.from(0)},...rt};var R=(e=>(e.ADD_LIQUIDITY="Add Liquidity",e.REMOVE_LIQUIDITY="Remove Liquidity",e.STAKE="Stake",e.ADD_LIQUIDITY_AND_STAKE="Add Liquidity and Stake",e.REMOVE_LIQUIDITY_AND_UNSTAKE="Remove Liquidity and Unstake",e))(R||{}),L=(e=>(e.NONE="NONE",e.ADD="ADD",e.ADD_CONFIRM="ADD_CONFIRM",e.REMOVE="REMOVE",e.REMOVE_CONFIRM="REMOVE_CONFIRM",e.ADD_OR_REMOVE="ADD_OR_REMOVE",e))(L||{});const Ie=Ee()(Pe((e,n)=>({loading:!1,setLoading:o=>e({loading:o}),status:"None",setStatus:o=>e({status:o}),activePair:it,setActivePair:o=>e({activePair:o}),modalType:"NONE",prevModalType:"NONE",setModalType:o=>{o!==n().modalType&&e({prevModalType:n().modalType,modalType:o})},confirmationValues:{amount1:h.from(0),amount2:h.from(0),deadline:0,slippage:0,percentage:0},setConfirmationValues:o=>e({confirmationValues:o})}))),$=E.div`
  background-color: #040404;
  max-height: 40rem;
  height: calc(100vh - 6rem);
  flex-grow: 1;
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
  //! marked for deletion
  .title {
    width: 100%;
    /* background-color: #0077FF; */
    padding: 1rem;
    border-bottom: 1px solid #222;
    z-index: 2;
  }

  .dual-button {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .locked {
    position: relative;
    margin: 2rem 0;
    .icons {
      position: absolute;
      bottom: -10px;
      left: 60px;
      border: 1px solid var(--primary-color);
      border-radius: 50px;
      background-color: #111;
      padding: 2px 4px;
    }
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .tokenBox {
    background: #0b0b0b;
    border: 1px solid #2f2f2f;
    border-radius: 4px;
    width: 100%;
    padding: 1rem;
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 2rem;
      .header {
        color: #9b9b9b;
      }
    }
  }

  h1 {
    font-size: 30px;
    line-height: 130%;
    font-weight: 400;

    text-align: center;
    letter-spacing: -0.03em;
    color: white;
  }

  /* h4 {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-transform: lowercase;
    color: #606060;
  } */

  #position {
    font-size: 18px;
    line-height: 140%;
    color: #606060;
    text-align: center;
    letter-spacing: -0.03em;
  }
  .line {
    border-bottom: 1px solid #222;
  }
  .center {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.7rem;
  }
  .logo {
    /* padding: 1rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primary-color);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }
  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .fields {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;
  }

  .rowCell {
    p:first-of-type {
      text-transform: lowercase;
      color: #888;
    }
    p:last-child {
      color: white;
    }
  }

  .row {
    display: flex;
    width: 100%;
  }
  /* .tableName {
    width: 80%;
    display: flex;
    flex-direction: column;
  } */

  @media (max-width: 1000px) {
    width: 100vw;
    padding: 0 1rem;

    .box {
      width: 100%;
    }
    .tableName {
      width: 90%;
    }
  }
  .row {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`,dt=E($)`
  .token {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.3rem;
    /* border: 2px solid #333; */
    background-color: #111;
    color: white;
    align-items: center;
    gap: 0.8rem;
    text-align: center;
    /* margin: .4rem; */
  }
  .fields {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.6rem;
  }
  .btns {
    display: flex;
    margin-bottom: 1rem;
    flex-direction: row;
    align-items: end;
    flex-grow: 1;

    gap: 0.6rem;
  }
`;E.div`
  display: ${e=>e.show?"block":"none"};
  position: absolute;
  top: 0%;
  bottom: 0%;
  width: 100%;
  max-height: 45.6rem;
  z-index: 2;
  background-color: black;
  @media (max-width: 1000px) {
    width: 99vw;
  }
`;const xe=E.div`
  opacity: ${e=>e.show?"100":"0"};
  transition: all 0.2s;
  height: 100%;
  position: absolute;
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1;
`,ct=E.div`
  display: flex;
  /* flex-direction: column; */
  background-color: ${e=>e.focused?"#001A0E":"#191919"};
  border: ${e=>e.focused?"1px solid #0077FF":"1px solid #191919"};
  border-radius: 4px;
  color: #efefef;
  height: 80px;

  &:hover {
    background-color: #001a0e;
    border-radius: 4px;

    cursor: text;
    input {
      border-radius: 4px;
      /* background-color: #001a0e !important; */
    }
  }
  input[type="text"] {
    padding: 0 1rem;
    margin-top: 1rem;
    background-color: transparent;
    /* background-color: ${e=>e.focused?"#001A0E":"#191919"}; */
    font-size: 24px;
    width: 100%;
    border: none;
    font-weight: 300;
    color: ${e=>e.focused?"var(--primary-color)":"#efefef"};
    &:focus {
      outline: none;
    }
  }

  p {
    margin-top: 0.4rem;
    color: #6f6f6f;
    letter-spacing: -0.03em;
    text-align: right;
    font-size: 16px;
    padding: 0 1rem;
  }
`,ce="var(--primary-color)",mt=E.span`
  color: var(--primary-color);
  &:hover {
    color: var(--primary-color);
    cursor: pointer;
  }
`,ut=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  border: 2px solid #191919;
  background-color: black;
  border-radius: 4px;
  /* border-bottom: 1px solid
    ${e=>e.focused?ce:"black"}; */
  /* background-color: #8bff8945; */
  p {
    color: ${e=>e.focused?ce:"#efefef"};
    padding: 0;
    margin: 0;
  }
`,me=e=>{const[n,o]=T.useState(!1),[r,a]=T.useState(0),c=()=>t("input",{type:"text",placeholder:e.placeholder,autoFocus:n,value:e.value,onFocus:u=>{u.target.setSelectionRange(r,r),o(!0)},onChange:u=>{a(u.target.selectionStart??0),e.onChange(u.target.value)},onBlur:()=>{o(!1)}});return l(ct,{onClick:()=>o(!0),focused:n,children:[l(ut,{focused:n,children:[t("img",{src:e.icon,height:20}),t("p",{children:e.token})]}),t("div",{style:{display:"flex"},children:t(c,{})}),l("div",{style:{display:"flex",position:"absolute",right:"30px",justifyContent:"space-between"},children:[t("p",{children:g(e.balance)}),t("p",{children:t(mt,{onClick:()=>{e.onChange(g(e.limit.toString(),e.tokenDecimals==6?4:8))},children:"max"})})]})]})},Y="var(--primary-color)",ft=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1px;

  input {
    background-color: #222;
    border: 1px solid transparent;

    padding: 0.5rem;
    color: ${e=>e.value<=0?"#ff4646":Y};

    &:hover {
      border: 1px solid
        ${e=>e.value<=0?"#ff4646":Y};
    }
    &:focus {
      outline: 1px solid
        ${e=>e.value<=0?"#ff4646":Y};
      color: ${e=>e.value<=0?"#ff4646":Y};
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    color: ${e=>e.value<=0?"#ff4646":"white"};
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.03em;

    &:focus {
      color: ${e=>e.value<=0?"#ff4646":"var(--primary-color)"};
    }
  }
`,z=({name:e,value:n,onChange:o})=>l(ft,{value:Number(n),children:[t(S,{align:"left",type:"title",children:e}),t(De,{autoComplete:"off",spellCheck:!1,type:"text",name:"item",id:"item",placeholder:"0.00",value:n,onChange:r=>{o(r.target.value)}})]}),Ne="/althea-app/assets/settings-004930fe.svg";function ht(e,n,o,r,a,c){return o.isZero()||r.isZero()?["enter amount",!0]:o.gt(e)||r.gt(n)?["insufficient balance",!0]:a<0||c<=0?["invalid settings",!0]:["add liquidity",!1]}function bt(e,n,o){return isNaN(o)||o>100||o<0?["enter percentage",!0]:isNaN(e)||e<0||isNaN(n)||n<=0?["invalid settings",!0]:["remove liquidity",!1]}const pt=({activePair:e,setModalType:n,setConfirmationValues:o})=>{const[r,a]=T.useState(""),[c,u]=T.useState(""),[d,f]=T.useState("1"),[b,m]=T.useState("10"),[i,p]=T.useState(!1),x=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals),k=ne(r,e.basePairInfo.token1.decimals),w=ne(c,e.basePairInfo.token2.decimals),[s,A]=ht(e.balances.token1,e.balances.token2,k,w,Number(d),Number(b));return l($,{children:[t("div",{style:{marginTop:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:t(j,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})}),l("div",{className:"row",style:{marginBottom:"2rem"},children:[t(S,{type:"title",children:e.basePairInfo.token1.symbol}),t(S,{type:"title",children:"/"}),t(S,{type:"title",children:e.basePairInfo.token2.symbol})]}),t("div",{style:{position:"absolute",right:"60px",top:"15px",zIndex:"10"},children:t("div",{role:"button",tabIndex:0,onClick:()=>{p(!i)},children:t("img",{src:Ne,height:"30px",style:{cursor:"pointer",zIndex:"5"}})})}),l("div",{className:"fields",children:[t("div",{className:"field",children:t(me,{token:e.basePairInfo.token1.symbol,tokenDecimals:e.basePairInfo.token1.decimals,icon:e.basePairInfo.token1.icon,balance:y.formatUnits(e.balances.token1,e.basePairInfo.token1.decimals),limit:y.formatUnits(Ve(e.balances.token1,e.balances.token2,e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token1.decimals),placeholder:"0.00",value:r,onChange:N=>{if(a(N),!N||isNaN(Number(N)))u("");else{const P=g(N,e.basePairInfo.token1.decimals);u(g(y.formatUnits(qe(y.parseUnits(P,e.basePairInfo.token1.decimals),e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token2.decimals),6))}}})}),t("div",{className:"field",children:t(me,{icon:e.basePairInfo.token2.icon,token:e.basePairInfo.token2.symbol,tokenDecimals:e.basePairInfo.token2.decimals,balance:y.formatUnits(e.balances.token2,e.basePairInfo.token2.decimals),limit:y.formatUnits(je(e.balances.token1,e.balances.token2,e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token2.decimals),placeholder:"0.00",value:c,onChange:N=>{if(u(N),!N||isNaN(Number(N)))a("");else{const P=g(N,e.basePairInfo.token2.decimals);a(g(y.formatUnits($e(y.parseUnits(P,e.basePairInfo.token2.decimals),e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token1.decimals),6))}}})})]}),l("div",{style:{color:"white",marginTop:"4rem"},children:[l("div",{className:"row",children:[l(S,{type:"title",align:"left",children:["reserve ratio :"," "]}),l(S,{color:"white",children:["1 ",e.basePairInfo.token1.symbol," ="," ",g(x.toString())," ",e.basePairInfo.token2.symbol]})]}),t("br",{}),e.basePairInfo.stable?l("div",{className:"row",children:[t(S,{align:"left",type:"title",children:"price :"})," ",l(S,{style:{textAlign:"right"},color:"white",children:["1 ",e.basePairInfo.token1.symbol," ="," ",g(y.formatUnits(V(y.parseUnits("1",e.basePairInfo.token2.decimals),e.prices.token2)))," ",e.basePairInfo.token2.symbol]})]}):""]}),t("div",{className:"fields",style:{flexDirection:"column",width:"100%",gap:"1rem"},children:l(xe,{show:i,style:i?{marginBottom:"-15px",zIndex:2}:{zIndex:"-1"},children:[t("div",{className:"field",children:t(z,{name:"slippage tolerance %",value:d,onChange:N=>f(N)})}),t("div",{className:"field",children:t(z,{name:"transaction deadline (minutes)",value:b,onChange:N=>m(N)})}),t(v,{disabled:Number(d)<=0||Number(b)<=0,height:"big",weight:"bold",filled:!0,onClick:()=>p(!1),children:"save settings"})]})}),t(v,{disabled:A,height:"big",filled:!0,onClick:()=>{o({amount1:k,amount2:w,slippage:Number(d),deadline:Number(b),percentage:0}),n(L.ADD_CONFIRM)},children:s})]})},D=e=>l("div",{className:"row",children:[l(S,{className:"header",children:[e.type," :"]}),t(S,{type:"title",className:"value",children:e.value})]}),gt=({activePair:e,setModalType:n,setConfirmationValues:o})=>{const[r,a]=T.useState("1"),[c,u]=T.useState("1"),[d,f]=T.useState("10"),[b,m]=T.useState(h.from(0)),[i,p]=T.useState(h.from(0)),[x,k]=T.useState(!1),[w,s]=bt(Number(c),Number(d),Number(r)),A=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals);return T.useEffect(()=>{m(U(e.userSupply.token1,Number(r))),p(U(e.userSupply.token2,Number(r)))},[r]),l($,{children:[l("div",{className:"center",style:{justifyContent:"start",gap:"1rem"},children:[t("div",{style:{position:"absolute",right:"60px",top:"15px",zIndex:"10"},children:t("div",{role:"button",tabIndex:0,onClick:()=>{k(!x)},children:t("img",{src:Ne,height:"30px",style:{cursor:"pointer",zIndex:"5"}})})}),t("div",{style:{marginTop:"1rem"},children:t("div",{className:"row",children:t(j,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})})}),t("div",{className:"field",style:{width:"100%",marginTop:"1rem"},children:t(z,{name:"percent to remove",value:r,onChange:N=>{a(N)}})}),l(S,{type:"title",children:["1 ",e.basePairInfo.token1.symbol," ="," ",g(A.toString())," ",e.basePairInfo.token2.symbol]}),l("div",{className:"tokenBox",children:[t(S,{color:"white",style:{marginBottom:"1rem"},children:"You will receive"}),t(D,{type:g(y.formatUnits(b,e.basePairInfo.token1.decimals))+" "+e.basePairInfo.token1.symbol,value:l(X,{children:[t(le,{token:"note"}),g(y.formatUnits(V(b,e.prices.token1)))]})}),t(D,{type:g(y.formatUnits(i,e.basePairInfo.token2.decimals))+" "+e.basePairInfo.token2.symbol,value:l(X,{children:[t(le,{token:"note"}),g(y.formatUnits(V(i,e.prices.token2)))]})})]})]}),t(v,{height:"big",filled:!0,weight:"bold",disabled:s,onClick:()=>{o({amount1:b,amount2:i,percentage:Number(r),slippage:Number(c),deadline:Number(d)}),n(L.REMOVE_CONFIRM)},children:w}),t("div",{className:"fields",style:{flexDirection:"column",width:"100%",gap:"1rem"},children:l(xe,{show:x,style:x?{marginBottom:"-15px",zIndex:2}:{zIndex:"-1"},children:[t("div",{className:"field",children:t(z,{name:"slippage tolerance %",value:c,onChange:N=>u(N)})}),t("div",{className:"field",children:t(z,{name:"transaction deadline (minutes)",value:d,onChange:N=>f(N)})}),t(v,{height:"big",weight:"bold",filled:!0,disabled:Number(c)<=0||Number(d)<=0,onClick:()=>k(!1),children:"save settings"})]})})]})},yt=({activePair:e,setModalType:n})=>l(dt,{children:[l("div",{className:"center",children:[t("p",{id:"position",children:"position overview"}),t("div",{className:"row",children:t(j,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})}),l("div",{className:"row",children:[t(S,{type:"title",children:e.basePairInfo.token1.symbol}),t(S,{type:"title",children:"/"}),t(S,{type:"title",children:e.basePairInfo.token2.symbol})]}),l("h4",{children:["pool share ",(e.userSupply.percentOwned*100).toFixed(4),"%"]}),l("div",{className:"fields",children:[l("div",{className:"token",style:{width:"40%"},children:[t("img",{src:e.basePairInfo.token1.icon,height:50,width:50}),l("p",{children:[J,g(y.formatUnits(V(e.userSupply.token1,e.prices.token1)))]}),l("p",{children:[g(y.formatUnits(e.userSupply.token1,e.basePairInfo.token1.decimals))," ",e.basePairInfo.token1.symbol]})]}),l("div",{className:"token",style:{width:"40%"},children:[t("img",{src:e.basePairInfo.token2.icon,height:50,width:50}),l("p",{children:[J,g(y.formatUnits(V(e.userSupply.token2,e.prices.token2)))]}),l("p",{children:[g(y.formatUnits(e.userSupply.token2,e.basePairInfo.token2.decimals))," ",e.basePairInfo.token2.symbol]})]})]})]}),l("div",{className:"btns",children:[t(Re,{height:"big",weight:"bold",filled:!0,onClick:()=>{n(L.REMOVE)},children:"remove"}),t(v,{height:"big",weight:"bold",filled:!0,onClick:()=>{n(L.ADD)},children:"add"})]})]});async function Se(e){const n=te(e),o=await n.getBlockNumber();return(await n.getBlock(o)).timestamp}function kt(e,n){return[B(e.token1.address,n),B(e.token2.address)]}function B(e,n){const o=fe(n).coreContracts.WALTHEA;return e==o}async function It(e,n,o,r){const a=te(e),c=fe(e).coreContracts.Router;return(await new M(c,q,a).quoteAddLiquidity(n.token1.address,n.token2.address,n.stable,o,r)).liquidity}async function we(e,n,o,r,a,c,u,d,f,b,m){const i={symbol:Ye(r.basePairInfo),icon:r.basePairInfo.token1.icon,icon2:r.basePairInfo.token2.icon};if(!b)return n.setStatus({error:"No account found"}),!1;switch(o){case R.ADD_LIQUIDITY:case R.ADD_LIQUIDITY_AND_STAKE:return await xt(e,n,r,c,u,d,f,b,m,o===R.ADD_LIQUIDITY_AND_STAKE,i);case R.REMOVE_LIQUIDITY:case R.REMOVE_LIQUIDITY_AND_UNSTAKE:return await Nt(e,n,r,a,d,f,b,m,o===R.REMOVE_LIQUIDITY_AND_UNSTAKE,i);default:return!1}}async function xt(e,n,o,r,a,c,u,d,f,b,m){const i=[Q(e,o.basePairInfo.token1.address,_(e).Router,r,o.allowance.token1,{icon:o.basePairInfo.token1.icon,symbol:o.basePairInfo.token1.symbol}),Q(e,o.basePairInfo.token2.address,_(e).Router,a,o.allowance.token2,{icon:o.basePairInfo.token2.icon,symbol:o.basePairInfo.token2.symbol}),St(e,o.basePairInfo.token1.address,o.basePairInfo.token2.address,o.basePairInfo.stable,r,a,c,u,d,f,m)],p=[Q(e,o.basePairInfo.address,o.basePairInfo.cLPaddress,Oe,h.from(0),m),ge(e,W.SUPPLY,o.basePairInfo.cLPaddress,!1,async()=>{const x=new M(o.basePairInfo.address,F,te(e));try{return(await x.balanceOf(d)).sub(o.userSupply.totalLP)}catch{throw n.setStatus({error:"Error getting LP token balance"}),new Error("Error getting LP token balance")}},m)];return await n.addTransactionList(b?[...i,...p]:i,{title:b?"Add Liquidity and Stake":"Add Liquidity",txListMethod:ye.EVM,chainId:e})}async function Nt(e,n,o,r,a,c,u,d,f,b){const m=[Q(e,o.basePairInfo.address,_(e).Router,r,o.allowance.LPtoken,b),wt(e,o.basePairInfo.token1.address,o.basePairInfo.token2.address,o.basePairInfo.stable,r,a,c,u,d,b)],i=ge(e,W.WITHDRAW,o.basePairInfo.cLPaddress,!1,r,b);return await n.addTransactionList(f?[i,...m]:m,{title:f?"Unstake and Remove Liquidity":"Remove Liquidity",txListMethod:ye.EVM,chainId:e})}const St=(e,n,o,r,a,c,u,d,f,b,m)=>{const[i,p]=[B(n,e),B(o,e)],x=i||p;return{chainId:e,txType:W.ADD_LIQUIDITY,address:_(e).Router,abi:q,method:x?"addLiquidityALTHEA":"addLiquidity",params:x?[i?o:n,r,i?c:a,i?d:u,i?u:d,f,b]:[n,o,r,a,c,u,d,f,b],value:i?a:p?c:"0",extraDetails:m}},wt=(e,n,o,r,a,c,u,d,f,b)=>{const[m,i]=[B(n,e),B(o,e)],p=m||i;return{chainId:e,txType:W.REMOVE_LIQUIDITY,address:_(e).Router,abi:q,method:p?"removeLiquidityALTHEA":"removeLiquidity",params:p?[m?o:n,r,a,m?u:c,m?c:u,d,f]:[n,o,r,a,c,u,d,f],value:"0",extraDetails:b}},Tt=({activePair:e,chainId:n,account:o,txStore:r,confirmValues:a})=>{const c=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals),u=a.percentage==100?e.userSupply.totalLP:U(e.userSupply.totalLP,a.percentage),d=U(a.amount1,100-Number(a.slippage)),f=U(a.amount2,100-Number(a.slippage)),[b,m]=T.useState(0);async function i(){m(await Se(n))}return T.useEffect(()=>{i()},[]),l($,{children:[t("div",{className:"title",children:e.basePairInfo.token1.symbol+" / "+e.basePairInfo.token2.symbol}),t("p",{id:"position",children:"you will receive"}),l("div",{className:"row",children:[t("img",{src:e.basePairInfo.token1.icon,height:50}),t("img",{src:e.basePairInfo.token2.icon,height:50})]}),t("h1",{}),l("h4",{children:[" ",e.basePairInfo.token1.symbol+" and "+e.basePairInfo.token2.symbol," ","tokens"]}),l("div",{className:"tableName",style:{gap:"1rem"},children:[t(D,{type:e.basePairInfo.token1.symbol+" rate",value:"1 "+e.basePairInfo.token1.symbol+" = "+g(c.toString())+" "+e.basePairInfo.token2.symbol}),t(D,{type:e.basePairInfo.token2.symbol+" rate",value:"1 "+e.basePairInfo.token2.symbol+" = "+g((1/c).toString())+" "+e.basePairInfo.token1.symbol})]}),t("div",{style:{borderBottom:"1px solid #222",width:"90%"}}),l("div",{className:"tableName",style:{gap:"1rem"},children:[t(D,{type:e.basePairInfo.token1.symbol+" withdrawing",value:g(y.formatUnits(a.amount1,e.basePairInfo.token1.decimals))}),t(D,{type:e.basePairInfo.token2.symbol+" withdrawing",value:g(y.formatUnits(a.amount2,e.basePairInfo.token2.decimals))}),t(D,{type:"burned",value:g(y.formatUnits(u,e.basePairInfo.decimals))})]}),t(v,{style:{marginBottom:"1.5rem"},filled:!0,height:"big",weight:"bold",disabled:b==0,onClick:()=>we(n,r,R.REMOVE_LIQUIDITY,e,u,h.from(0),h.from(0),d,f,o,b+Math.floor(Number(a.deadline))*60),children:"confirm"})]})},At=({activePair:e,chainId:n,account:o,txStore:r,confirmValues:a})=>{const[c,u]=T.useState(h.from(0)),[d,f]=T.useState(!1);async function b(){u(await It(Number(n),e.basePairInfo,a.amount1,a.amount2))}T.useEffect(()=>{b()},[]);const m=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals);return l(Ct,{children:[t(S,{type:"title",size:"title3",children:"you will receive"}),t("div",{className:"center-item",children:t(j,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})}),t(S,{type:"title",size:"title2",children:c.isZero()?"calculating...":g(y.formatUnits(c,e.basePairInfo.decimals))}),l(S,{color:"white",children:[e.basePairInfo.token1.symbol+"/"+e.basePairInfo.token2.symbol," ","liquidity pool tokens"]}),l("div",{className:"box",style:{gap:"1rem"},children:[t(D,{type:e.basePairInfo.token1.symbol+" rate",value:"1 "+e.basePairInfo.token1.symbol+" = "+g(m.toString())+" "+e.basePairInfo.token2.symbol}),t(D,{type:e.basePairInfo.token2.symbol+" rate",value:"1 "+e.basePairInfo.token2.symbol+" = "+g((1/m).toString())+" "+e.basePairInfo.token1.symbol})]}),t("div",{style:{borderBottom:"1px solid #222",width:"90%"}}),l("div",{className:"box",style:{gap:"1rem"},children:[t(D,{type:e.basePairInfo.token1.symbol+" deposited",value:g(y.formatUnits(a.amount1,e.basePairInfo.token1.decimals))}),t(D,{type:e.basePairInfo.token2.symbol+" deposited",value:g(y.formatUnits(a.amount2,e.basePairInfo.token2.decimals))}),t(D,{type:"share of pool",value:g(Qe(e.userSupply.percentOwned,c,e.totalSupply.totalLP).toString())+"%"})]}),t(v,{style:{marginTop:"1.5rem"},weight:"bold",height:"big",filled:!0,onClick:async()=>we(n,r,d?R.ADD_LIQUIDITY_AND_STAKE:R.ADD_LIQUIDITY,e,h.from(0),a.amount1,a.amount2,U(a.amount1,100-Number(a.slippage)),U(a.amount2,100-Number(a.slippage)),o,await Se(n)+Math.floor(Number(a.deadline))*60),children:"confirm"}),l("div",{className:"getRewards",children:[t(Me,{checked:d,onChange:()=>f(!d)}),t("p",{children:"get rewards"})]}),t(S,{size:"text4",children:"** by checking this box, LP tokens will be supplied in the lending market **"})]})},Ct=E($)`
  .row {
    display: flex;
    justify-content: space-between;
  }

  .center-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: min-content;
  }
  .box {
    display: flex;
    border: 1px solid #222;
    padding: 1rem;
  }

  .getRewards {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }
`,Lt=e=>{const[n,o,r,a,c]=Ie(d=>[d.modalType,d.activePair,d.confirmationValues,d.setModalType,d.setConfirmationValues]);function u(d){switch(d){case L.ADD:return"Add Liquidity";case L.REMOVE:return"Remove Liquidity";case L.ADD_OR_REMOVE:return"Liquidity";default:return"Confirmation"}}return T.useEffect(()=>{n!==L.NONE&&ee.events.lpInterfaceActions.modalInteraction(n,o.basePairInfo.token1.symbol+" / "+o.basePairInfo.token2.symbol,!0)},[n]),l(Ue,{open:n!=L.NONE,title:e.txStore.modalOpen?"":u(n),onClose:()=>{ee.events.lpInterfaceActions.modalInteraction(n,o.basePairInfo.token1.symbol+" / "+o.basePairInfo.token2.symbol,!1),e.onClose()},children:[t(Xe,{onClose:e.onClose}),n===L.ADD&&t(pt,{onClose:e.onClose,activePair:o,setModalType:a,setConfirmationValues:c}),n===L.REMOVE&&t(gt,{onClose:e.onClose,activePair:o,setModalType:a,setConfirmationValues:c}),n===L.ADD_OR_REMOVE&&t(yt,{onClose:e.onClose,activePair:o,setModalType:a}),n===L.REMOVE_CONFIRM&&t(Tt,{onClose:e.onClose,activePair:o,chainId:e.chainId,account:e.account,confirmValues:r,txStore:e.txStore}),n===L.ADD_CONFIRM&&t(At,{onClose:e.onClose,activePair:o,chainId:e.chainId,account:e.account,confirmValues:r,txStore:e.txStore})]})},Et=e=>{const n=_(e).Router,o=new M(n,q),r=ke(e),a=ve(e),c=r.map(m=>{const i=new M(m.address,F),p=x=>{for(const[,k]of Object.entries(a))if(k.underlying.address==x)return k.address;return""};return[{contract:i,method:"totalSupply",args:[]},{contract:o,method:"getReserves",args:[m.token1.address,m.token2.address,m.stable]},{contract:o,method:"getUnderlyingPrice",args:[p(m.token1.address)]},{contract:o,method:"getUnderlyingPrice",args:[p(m.token2.address)]},{contract:o,method:"getUnderlyingPrice",args:[m.cLPaddress]}]}),u=he(r?c.flat():[],{chainId:be(e)?e:ue.chainId})??{},d=r?u.length/r.length:0;let f;const b=(m,i)=>{const p=m.map(k=>k==null?void 0:k.value),x=[];for(let k=0;k<m.length;k+=i)x.push(p.slice(k,k+i));return x};return r?d>0&&pe(u)?(f=b(u,d),f.map((m,i)=>{const p=m[0][0],x=m[1],k=x.reserveA,w=x.reserveB,[s,A]=We(k,w),N=m[2][0],P=m[3][0],H=m[4][0],Z=H.mul(p).div(h.from(10).pow(18));return{basePairInfo:r[i],totalSupply:{totalLP:p,tvl:Z,token1:k,token2:w,ratio:{aTob:A,ratio:s}},prices:{token1:N,token2:P,LP:H}}})):[]:[]},Pt=(e,n,o)=>{const r=_(o).Router,a=new M(r,q),c=_e(n)??h.from(0),u=e.map(i=>{const p=new M(i.basePairInfo.address,F),x=new M(i.basePairInfo.token1.address,F),k=new M(i.basePairInfo.token2.address,F),w=new M(i.basePairInfo.cLPaddress,Be);return[{contract:p,method:"balanceOf",args:[n]},{contract:x,method:"balanceOf",args:[n]},{contract:k,method:"balanceOf",args:[n]},{contract:x,method:"allowance",args:[n,a.address]},{contract:k,method:"allowance",args:[n,a.address]},{contract:p,method:"allowance",args:[n,a.address]},{contract:w,method:"balanceOf",args:[n]},{contract:w,method:"exchangeRateStored",args:[]}]}),d=he(e&&be(o)&&n?u.flat():[])??{},f=e?d.length/e.length:0;let b;const m=(i,p)=>{const x=i.map(w=>w==null?void 0:w.value),k=[];for(let w=0;w<i.length;w+=p)k.push(x.slice(w,w+p));return k};return f>0&&pe(d)?(b=m(d,f),b.map((i,p)=>{const x=i[0][0],[k,w]=kt(e[p].basePairInfo,o),s=k?c:i[1][0],A=w?c:i[2][0],N=Ke(i[6][0],i[7][0]),P=Number(y.formatUnits(x.add(N).mul(h.from(10).pow(18)).div(e[p].totalSupply.totalLP))),H=x.mul(h.from(10).pow(18)).div(e[p].totalSupply.totalLP),Z=H.mul(e[p].totalSupply.token1).div(h.from(10).pow(18)),oe=H.mul(e[p].totalSupply.token2).div(h.from(10).pow(18)),Te=i[3][0],Ae=i[4][0],Ce=i[5][0];return{...e[p],userSupply:{totalLP:x,token1:Z,token2:oe,percentOwned:P},allowance:{token1:Te,token2:Ae,LPtoken:Ce},balances:{token1:s,token2:A}}})):e.map(i=>({...i,userSupply:{totalLP:h.from(0),token1:h.from(0),token2:h.from(0),percentOwned:0},allowance:{token1:h.from(0),token2:h.from(0),LPtoken:h.from(0)},balances:{token1:h.from(0),token2:h.from(0)}}))},Ht=()=>{const e=He(),n=re(),{notifications:o}=Ze(),[r,a]=T.useState([]);Ge(o,r,a);const[c,u]=Ie(s=>[s.setModalType,s.setActivePair]),d=Et(Number(e.chainId)),f=Pt(d,e.account,Number(e.chainId)),[b,m]=T.useState(0),[i,p]=T.useState(0),x=(f==null?void 0:f.filter(s=>!s.userSupply.totalLP.isZero()||s.userSupply.percentOwned>0).length)>0,k=(f==null?void 0:f.filter(s=>s.userSupply.totalLP.isZero()&&s.userSupply.percentOwned==0).length)>0,w=re().transactions.filter(s=>s.details.status==="Mining");return l(X,{children:[t(et,{title:"Althea - LP interface",description:"Althea Homepage serves De-fi applications",link:"lp"}),l(Dt,{as:se,children:[t("div",{children:t(Lt,{chainId:Number(e.chainId),account:e.account,onClose:()=>{c(L.NONE)},txStore:n})}),t("div",{style:{margin:"2rem 0"},children:l(S,{type:"title",color:"white",children:["to swap tokens, visit"," ",t("a",{onClick:()=>ee.events.lpInterfaceActions.visitSlingshot(),style:{color:"#a2fca3",textDecoration:"underline",fontFamily:"Macan"},href:"https://app.slingshot.finance/trade/",target:"_blank",rel:"noreferrer",children:"Slingshot"})]})}),w.length>0&&t("div",{className:"tables",children:t("div",{className:"left",children:t(G,{columns:["ongoing transactions"],children:w.map(s=>{var A;return t(st,{icons:((A=s.details.extra)==null?void 0:A.icon)??"",name:s.details.currentMessage??"",status:Je(s.details.status),date:new Date},s.details.txId)})})})}),x&&l("div",{children:[t(S,{type:"title",align:"left",className:"tableName",children:"current position"}),t(se,{children:t(G,{columns:["Asset","TVL","wallet","% Share"],onColumnClicked:s=>m(s),columnClicked:b,children:f==null?void 0:f.map((s,A)=>!s.userSupply.totalLP.isZero()||s.userSupply.percentOwned>0?t(de,{delay:.2*A,iconLeft:s.basePairInfo.token1.icon,iconRight:s.basePairInfo.token2.icon,onClick:()=>{u(s),c(s.userSupply.totalLP.isZero()?L.ADD:L.ADD_OR_REMOVE)},assetName:s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,totalValueLocked:J+ae(g(y.formatUnits(s.totalSupply.tvl))),position:g(y.formatUnits(s.userSupply.totalLP,s.basePairInfo.decimals))+" LP Tokens",share:g((s.userSupply.percentOwned*100).toString()),sortableProps:[s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,Number(y.formatUnits(s.totalSupply.tvl)),Number(y.formatUnits(s.userSupply.totalLP,s.basePairInfo.decimals)),s.userSupply.percentOwned]},s.basePairInfo.address):null).sort((s,A)=>{var N,P;return ie((N=s==null?void 0:s.props.sortableProps)==null?void 0:N[b],(P=A==null?void 0:A.props.sortableProps)==null?void 0:P[b])})})})]}),k?l("div",{children:[t(S,{type:"title",align:"left",className:"tableName",children:"pools"}),t(G,{columns:["Asset","TVL","wallet","% Share"],onColumnClicked:s=>p(s),columnClicked:i,children:f==null?void 0:f.map((s,A)=>s.userSupply.totalLP.isZero()&&s.userSupply.percentOwned==0?t(de,{delay:.1*A,iconLeft:s.basePairInfo.token1.icon,iconRight:s.basePairInfo.token2.icon,onClick:()=>{u(s),c(Number(s.userSupply.totalLP)>0?L.ADD_OR_REMOVE:L.ADD)},assetName:s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,totalValueLocked:ae(g(y.formatUnits(s.totalSupply.tvl))),position:g(y.formatUnits(s.userSupply.totalLP))+" LP Tokens",share:g((s.userSupply.percentOwned*100).toString()),sortableProps:[s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,Number(y.formatUnits(s.totalSupply.tvl)),Number(y.formatUnits(s.userSupply.totalLP,s.basePairInfo.decimals)),s.userSupply.percentOwned]},s.basePairInfo.address):null).sort((s,A)=>{var N,P;return ie((N=s==null?void 0:s.props.sortableProps)==null?void 0:N[i],(P=A==null?void 0:A.props.sortableProps)==null?void 0:P[i])})})]}):t("div",{style:{height:"30rem"},children:t(Fe,{})})]})]})},Dt=E.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  .tableName {
    width: 1200px;
    margin: 0 auto;
    padding: 0;
  }

  @media (max-width: 1000px) {
    .tableName {
      width: 100%;
      padding: 0 2rem;
    }
  }
`;export{Ht as default};
