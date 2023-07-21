import{n as A,D as w,j as t,a as l,T as N,f as ue,ag as Pe,ae as L,af as C,at as R,B as b,am as Ae,au as De,H as g,z as Ee,a4 as ne,u as y,P as v,F as X,av as J,Y as Oe,g as te,aw as fe,C as M,ax as j,ay as _,M as Re,E as z,p as W,az as Me,U as ee,G as Ue,aA as ve,aB as be,aC as pe,aD as he,a5 as _e,aE as Be,Z as Fe,aF as se,aG as ae,aH as ze}from"./index-2bbcbeed.js";import{n as Ve,g as K,a as qe,b as je,c as Ye,d as $e,v as q,e as U,T as le,f as He,_ as ge,h as Qe,i as We,j as Ke,u as Ze,k as Ge}from"./handleOnGoingTransactions-80522691.js";import{_ as Q,T as ye,O as Xe,u as re,g as Je}from"./ongoingTxModal-3a0f43a2.js";import{H as et}from"./seo-7ca9638a.js";import{s as ie}from"./LMTables-126d1b03.js";import"./down-f11b2b90.js";const G=e=>{const[n,o]=w.useState(!1);return t("div",{style:{overflowX:"auto"},children:l(tt,{children:[t("thead",{children:t("tr",{children:e.columns.map((r,a)=>t("th",{style:{backgroundColor:n&&a==e.columnClicked?"rgba(0, 119, 255, 0.25)":""},onClick:()=>{e.onColumnClicked&&e.onColumnClicked(a),o(!0)},children:r},r))})}),t("tbody",{children:e.children})]})})},tt=A.table`
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
`,Y=e=>l(ot,{children:[t("img",{src:e.iconLeft,height:40,style:{zIndex:"2"}}),t("img",{src:e.iconRight,height:40,style:{marginLeft:"-0.7rem"}})]}),ot=A.span`
  display: flex;
  align-content: center;
  align-items: center;
`,nt=A.tr`
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
`,ce=e=>l(nt,{...e,onClick:()=>{e.onClick()},children:[t("td",{className:"center",children:l(N,{type:"title",size:"text3",bold:!0,className:"center",children:[l("span",{children:[t("img",{src:e.iconLeft,height:30,style:{zIndex:"2"}}),t("img",{src:e.iconRight,height:30,style:{marginLeft:"-.7rem",paddingRight:"1rem"}})]}),e.assetName]})}),t("td",{children:l("div",{className:"center",children:[t("img",{src:Ve,alt:"note",height:14,width:14}),t(N,{size:"text3",children:e.totalValueLocked})]})}),t("td",{children:t(N,{size:"text3",children:e.position})}),t("td",{children:l(N,{size:"text3",children:[e.share,"%"]})})]}),st=e=>l("tr",{onClick:e.onClick,children:[l("td",{style:{display:"flex",justifyContent:"center"},children:[" ",l("span",{style:{display:"flex",alignContent:"center",alignItems:"center"},children:[typeof e.icons!="string"?t(Y,{iconLeft:e.icons.icon1,iconRight:e.icons.icon2}):t("img",{src:e.icons,height:30,style:{marginRight:"10px"}})," "]}),t("span",{children:e.name})]}),t("td",{children:e.status}),t("td",{children:e.date.toDateString()})]});A.td`
  display: table-cell !important;
  text-transform: lowercase !important;
  text-align: center !important;
`;function ke(e){switch(e){case Pe.chainId:return at;case ue.chainId:default:return lt}}const at=[{address:L.testnet.CantoNoteLP,cLPaddress:L.testnet.cCantoNoteLP,token1:{...C.cantoTestnet.WCANTO,symbol:"CANTO"},token2:C.cantoTestnet.NOTE,decimals:C.cantoTestnet.CantoNote.decimals,cDecimals:R.cantoTestnet.CCantoNote.decimals,stable:!1},{address:L.testnet.CantoETHLP,cLPaddress:L.testnet.cCantoETHLP,token1:{...C.cantoTestnet.WCANTO,symbol:"CANTO"},token2:C.cantoTestnet.ETH,decimals:C.cantoTestnet.CantoETH.decimals,cDecimals:R.cantoTestnet.CCantoETH.decimals,stable:!1},{address:L.testnet.CantoAtomLP,cLPaddress:L.testnet.cCantoAtomLP,token1:{...C.cantoTestnet.WCANTO,symbol:"CANTO"},token2:C.cantoTestnet.ATOM,decimals:C.cantoTestnet.CantoAtom.decimals,cDecimals:R.cantoTestnet.CCantoAtom.decimals,stable:!1},{address:L.testnet.NoteUSDCLP,cLPaddress:L.testnet.cNoteUSDCLP,token1:C.cantoTestnet.NOTE,token2:C.cantoTestnet.USDC,decimals:C.cantoTestnet.NoteUSDC.decimals,cDecimals:R.cantoTestnet.CNoteUSDC.decimals,stable:!0},{address:L.testnet.NoteUSDTLP,cLPaddress:L.testnet.cNoteUSDTLP,token1:C.cantoTestnet.NOTE,token2:C.cantoTestnet.USDT,decimals:C.cantoTestnet.NoteUSDT.decimals,cDecimals:R.cantoTestnet.CNoteUSDT.decimals,stable:!0}],lt=[{address:L.cantoMainnet.CantoNoteLP,cLPaddress:L.cantoMainnet.cCantoNoteLP,token1:{...C.cantoMainnet.WCANTO,symbol:"CANTO"},token2:C.cantoMainnet.NOTE,decimals:C.cantoMainnet.CantoNote.decimals,cDecimals:R.cantoMainnet.CCantoNote.decimals,stable:!1},{address:L.cantoMainnet.CantoETHLP,cLPaddress:L.cantoMainnet.cCantoETHLP,token1:{...C.cantoMainnet.WCANTO,symbol:"CANTO"},token2:C.cantoMainnet.ETH,decimals:C.cantoMainnet.CantoETH.decimals,cDecimals:R.cantoMainnet.CCantoETH.decimals,stable:!1},{address:L.cantoMainnet.CantoAtomLP,cLPaddress:L.cantoMainnet.cCantoAtomLP,token1:{...C.cantoMainnet.WCANTO,symbol:"CANTO"},token2:C.cantoMainnet.ATOM,decimals:C.cantoMainnet.CantoAtom.decimals,cDecimals:R.cantoMainnet.CCantoAtom.decimals,stable:!1},{address:L.cantoMainnet.NoteUSDCLP,cLPaddress:L.cantoMainnet.cNoteUSDCLP,token1:C.cantoMainnet.NOTE,token2:C.cantoMainnet.USDC,decimals:C.cantoMainnet.NoteUSDC.decimals,cDecimals:R.cantoMainnet.CNoteUSDC.decimals,stable:!0},{address:L.cantoMainnet.NoteUSDTLP,cLPaddress:L.cantoMainnet.cNoteUSDTLP,token1:C.cantoMainnet.NOTE,token2:C.cantoMainnet.USDT,decimals:C.cantoMainnet.NoteUSDT.decimals,cDecimals:R.cantoMainnet.CNoteUSDT.decimals,stable:!0}],rt={userSupply:{totalLP:b.from(0),token1:b.from(0),token2:b.from(0),percentOwned:0},balances:{token1:b.from(0),token2:b.from(0)},allowance:{token1:b.from(0),token2:b.from(0),LPtoken:b.from(0)}},it={basePairInfo:ke()[0],totalSupply:{totalLP:b.from(0),tvl:b.from(0),token1:b.from(0),token2:b.from(0),ratio:{aTob:!0,ratio:b.from(0)}},prices:{token1:b.from(0),token2:b.from(0),LP:b.from(0)},...rt};var O=(e=>(e.ADD_LIQUIDITY="Add Liquidity",e.REMOVE_LIQUIDITY="Remove Liquidity",e.STAKE="Stake",e.ADD_LIQUIDITY_AND_STAKE="Add Liquidity and Stake",e.REMOVE_LIQUIDITY_AND_UNSTAKE="Remove Liquidity and Unstake",e))(O||{}),P=(e=>(e.NONE="NONE",e.ADD="ADD",e.ADD_CONFIRM="ADD_CONFIRM",e.REMOVE="REMOVE",e.REMOVE_CONFIRM="REMOVE_CONFIRM",e.ADD_OR_REMOVE="ADD_OR_REMOVE",e))(P||{});const Ce=Ae()(De((e,n)=>({loading:!1,setLoading:o=>e({loading:o}),status:"None",setStatus:o=>e({status:o}),activePair:it,setActivePair:o=>e({activePair:o}),modalType:"NONE",prevModalType:"NONE",setModalType:o=>{o!==n().modalType&&e({prevModalType:n().modalType,modalType:o})},confirmationValues:{amount1:b.from(0),amount2:b.from(0),deadline:0,slippage:0,percentage:0},setConfirmationValues:o=>e({confirmationValues:o})}))),$=A.div`
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
`,ct=A($)`
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
`;A.div`
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
`;const Ie=A.div`
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
`,dt=A.div`
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
`,de="var(--primary-color)",mt=A.span`
  color: var(--primary-color);
  &:hover {
    color: var(--primary-color);
    cursor: pointer;
  }
`,ut=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  border: 2px solid #191919;
  background-color: black;
  border-radius: 4px;
  /* border-bottom: 1px solid
    ${e=>e.focused?de:"black"}; */
  /* background-color: #8bff8945; */
  p {
    color: ${e=>e.focused?de:"#efefef"};
    padding: 0;
    margin: 0;
  }
`,me=e=>{const[n,o]=w.useState(!1),[r,a]=w.useState(0),d=()=>t("input",{type:"text",placeholder:e.placeholder,autoFocus:n,value:e.value,onFocus:u=>{u.target.setSelectionRange(r,r),o(!0)},onChange:u=>{a(u.target.selectionStart??0),e.onChange(u.target.value)},onBlur:()=>{o(!1)}});return l(dt,{onClick:()=>o(!0),focused:n,children:[l(ut,{focused:n,children:[t("img",{src:e.icon,height:20}),t("p",{children:e.token})]}),t("div",{style:{display:"flex"},children:t(d,{})}),l("div",{style:{display:"flex",position:"absolute",right:"30px",justifyContent:"space-between"},children:[t("p",{children:g(e.balance)}),t("p",{children:t(mt,{onClick:()=>{e.onChange(g(e.limit.toString(),e.tokenDecimals==6?4:8))},children:"max"})})]})]})},H="var(--primary-color)",ft=A.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1px;

  input {
    background-color: #222;
    border: 1px solid transparent;

    padding: 0.5rem;
    color: ${e=>e.value<=0?"#ff4646":H};

    &:hover {
      border: 1px solid
        ${e=>e.value<=0?"#ff4646":H};
    }
    &:focus {
      outline: 1px solid
        ${e=>e.value<=0?"#ff4646":H};
      color: ${e=>e.value<=0?"#ff4646":H};
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
`,V=({name:e,value:n,onChange:o})=>l(ft,{value:Number(n),children:[t(N,{align:"left",type:"title",children:e}),t(Ee,{autoComplete:"off",spellCheck:!1,type:"text",name:"item",id:"item",placeholder:"0.00",value:n,onChange:r=>{o(r.target.value)}})]}),xe="/althea-app/assets/settings-d29630af.svg";function bt(e,n,o,r,a,d){return o.isZero()||r.isZero()?["enter amount",!0]:o.gt(e)||r.gt(n)?["insufficient balance",!0]:a<0||d<=0?["invalid settings",!0]:["add liquidity",!1]}function pt(e,n,o){return isNaN(o)||o>100||o<0?["enter percentage",!0]:isNaN(e)||e<0||isNaN(n)||n<=0?["invalid settings",!0]:["remove liquidity",!1]}const ht=({activePair:e,setModalType:n,setConfirmationValues:o})=>{const[r,a]=w.useState(""),[d,u]=w.useState(""),[c,f]=w.useState("1"),[p,m]=w.useState("10"),[i,h]=w.useState(!1),I=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals),k=ne(r,e.basePairInfo.token1.decimals),S=ne(d,e.basePairInfo.token2.decimals),[s,T]=bt(e.balances.token1,e.balances.token2,k,S,Number(c),Number(p));return l($,{children:[t("div",{style:{marginTop:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:t(Y,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})}),l("div",{className:"row",style:{marginBottom:"2rem"},children:[t(N,{type:"title",children:e.basePairInfo.token1.symbol}),t(N,{type:"title",children:"/"}),t(N,{type:"title",children:e.basePairInfo.token2.symbol})]}),t("div",{style:{position:"absolute",right:"60px",top:"15px",zIndex:"10"},children:t("div",{role:"button",tabIndex:0,onClick:()=>{h(!i)},children:t("img",{src:xe,height:"30px",style:{cursor:"pointer",zIndex:"5"}})})}),l("div",{className:"fields",children:[t("div",{className:"field",children:t(me,{token:e.basePairInfo.token1.symbol,tokenDecimals:e.basePairInfo.token1.decimals,icon:e.basePairInfo.token1.icon,balance:y.formatUnits(e.balances.token1,e.basePairInfo.token1.decimals),limit:y.formatUnits(qe(e.balances.token1,e.balances.token2,e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token1.decimals),placeholder:"0.00",value:r,onChange:x=>{if(a(x),!x||isNaN(Number(x)))u("");else{const D=g(x,e.basePairInfo.token1.decimals);u(g(y.formatUnits(je(y.parseUnits(D,e.basePairInfo.token1.decimals),e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token2.decimals),6))}}})}),t("div",{className:"field",children:t(me,{icon:e.basePairInfo.token2.icon,token:e.basePairInfo.token2.symbol,tokenDecimals:e.basePairInfo.token2.decimals,balance:y.formatUnits(e.balances.token2,e.basePairInfo.token2.decimals),limit:y.formatUnits(Ye(e.balances.token1,e.balances.token2,e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token2.decimals),placeholder:"0.00",value:d,onChange:x=>{if(u(x),!x||isNaN(Number(x)))a("");else{const D=g(x,e.basePairInfo.token2.decimals);a(g(y.formatUnits($e(y.parseUnits(D,e.basePairInfo.token2.decimals),e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob),e.basePairInfo.token1.decimals),6))}}})})]}),l("div",{style:{color:"white",marginTop:"4rem"},children:[l("div",{className:"row",children:[l(N,{type:"title",align:"left",children:["reserve ratio :"," "]}),l(N,{color:"white",children:["1 ",e.basePairInfo.token1.symbol," ="," ",g(I.toString())," ",e.basePairInfo.token2.symbol]})]}),t("br",{}),e.basePairInfo.stable?l("div",{className:"row",children:[t(N,{align:"left",type:"title",children:"price :"})," ",l(N,{style:{textAlign:"right"},color:"white",children:["1 ",e.basePairInfo.token1.symbol," ="," ",g(y.formatUnits(q(y.parseUnits("1",e.basePairInfo.token2.decimals),e.prices.token2)))," ",e.basePairInfo.token2.symbol]})]}):""]}),t("div",{className:"fields",style:{flexDirection:"column",width:"100%",gap:"1rem"},children:l(Ie,{show:i,style:i?{marginBottom:"-15px",zIndex:2}:{zIndex:"-1"},children:[t("div",{className:"field",children:t(V,{name:"slippage tolerance %",value:c,onChange:x=>f(x)})}),t("div",{className:"field",children:t(V,{name:"transaction deadline (minutes)",value:p,onChange:x=>m(x)})}),t(v,{disabled:Number(c)<=0||Number(p)<=0,height:"big",weight:"bold",filled:!0,onClick:()=>h(!1),children:"save settings"})]})}),t(v,{disabled:T,height:"big",filled:!0,onClick:()=>{o({amount1:k,amount2:S,slippage:Number(c),deadline:Number(p),percentage:0}),n(P.ADD_CONFIRM)},children:s})]})},E=e=>l("div",{className:"row",children:[l(N,{className:"header",children:[e.type," :"]}),t(N,{type:"title",className:"value",children:e.value})]}),gt=({activePair:e,setModalType:n,setConfirmationValues:o})=>{const[r,a]=w.useState("1"),[d,u]=w.useState("1"),[c,f]=w.useState("10"),[p,m]=w.useState(b.from(0)),[i,h]=w.useState(b.from(0)),[I,k]=w.useState(!1),[S,s]=pt(Number(d),Number(c),Number(r)),T=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals);return w.useEffect(()=>{m(U(e.userSupply.token1,Number(r))),h(U(e.userSupply.token2,Number(r)))},[r]),l($,{children:[l("div",{className:"center",style:{justifyContent:"start",gap:"1rem"},children:[t("div",{style:{position:"absolute",right:"60px",top:"15px",zIndex:"10"},children:t("div",{role:"button",tabIndex:0,onClick:()=>{k(!I)},children:t("img",{src:xe,height:"30px",style:{cursor:"pointer",zIndex:"5"}})})}),t("div",{style:{marginTop:"1rem"},children:t("div",{className:"row",children:t(Y,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})})}),t("div",{className:"field",style:{width:"100%",marginTop:"1rem"},children:t(V,{name:"percent to remove",value:r,onChange:x=>{a(x)}})}),l(N,{type:"title",children:["1 ",e.basePairInfo.token1.symbol," ="," ",g(T.toString())," ",e.basePairInfo.token2.symbol]}),l("div",{className:"tokenBox",children:[t(N,{color:"white",style:{marginBottom:"1rem"},children:"You will receive"}),t(E,{type:g(y.formatUnits(p,e.basePairInfo.token1.decimals))+" "+e.basePairInfo.token1.symbol,value:l(X,{children:[t(le,{token:"note"}),g(y.formatUnits(q(p,e.prices.token1)))]})}),t(E,{type:g(y.formatUnits(i,e.basePairInfo.token2.decimals))+" "+e.basePairInfo.token2.symbol,value:l(X,{children:[t(le,{token:"note"}),g(y.formatUnits(q(i,e.prices.token2)))]})})]})]}),t(v,{height:"big",filled:!0,weight:"bold",disabled:s,onClick:()=>{o({amount1:p,amount2:i,percentage:Number(r),slippage:Number(d),deadline:Number(c)}),n(P.REMOVE_CONFIRM)},children:S}),t("div",{className:"fields",style:{flexDirection:"column",width:"100%",gap:"1rem"},children:l(Ie,{show:I,style:I?{marginBottom:"-15px",zIndex:2}:{zIndex:"-1"},children:[t("div",{className:"field",children:t(V,{name:"slippage tolerance %",value:d,onChange:x=>u(x)})}),t("div",{className:"field",children:t(V,{name:"transaction deadline (minutes)",value:c,onChange:x=>f(x)})}),t(v,{height:"big",weight:"bold",filled:!0,disabled:Number(d)<=0||Number(c)<=0,onClick:()=>k(!1),children:"save settings"})]})})]})},yt=({activePair:e,setModalType:n})=>l(ct,{children:[l("div",{className:"center",children:[t("p",{id:"position",children:"position overview"}),t("div",{className:"row",children:t(Y,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})}),l("div",{className:"row",children:[t(N,{type:"title",children:e.basePairInfo.token1.symbol}),t(N,{type:"title",children:"/"}),t(N,{type:"title",children:e.basePairInfo.token2.symbol})]}),l("h4",{children:["pool share ",(e.userSupply.percentOwned*100).toFixed(4),"%"]}),l("div",{className:"fields",children:[l("div",{className:"token",style:{width:"40%"},children:[t("img",{src:e.basePairInfo.token1.icon,height:50,width:50}),l("p",{children:[J,g(y.formatUnits(q(e.userSupply.token1,e.prices.token1)))]}),l("p",{children:[g(y.formatUnits(e.userSupply.token1,e.basePairInfo.token1.decimals))," ",e.basePairInfo.token1.symbol]})]}),l("div",{className:"token",style:{width:"40%"},children:[t("img",{src:e.basePairInfo.token2.icon,height:50,width:50}),l("p",{children:[J,g(y.formatUnits(q(e.userSupply.token2,e.prices.token2)))]}),l("p",{children:[g(y.formatUnits(e.userSupply.token2,e.basePairInfo.token2.decimals))," ",e.basePairInfo.token2.symbol]})]})]})]}),l("div",{className:"btns",children:[t(Oe,{height:"big",weight:"bold",filled:!0,onClick:()=>{n(P.REMOVE)},children:"remove"}),t(v,{height:"big",weight:"bold",filled:!0,onClick:()=>{n(P.ADD)},children:"add"})]})]});async function Ne(e){const n=te(e),o=await n.getBlockNumber();return(await n.getBlock(o)).timestamp}function kt(e,n){return[B(e.token1.address,n),B(e.token2.address)]}function B(e,n){const o=fe(n).coreContracts.WCANTO;return e==o}async function Ct(e,n,o,r){const a=te(e),d=fe(e).coreContracts.Router;return(await new M(d,j,a).quoteAddLiquidity(n.token1.address,n.token2.address,n.stable,o,r)).liquidity}async function Se(e,n,o,r,a,d,u,c,f,p,m){const i={symbol:He(r.basePairInfo),icon:r.basePairInfo.token1.icon,icon2:r.basePairInfo.token2.icon};if(!p)return n.setStatus({error:"No account found"}),!1;switch(o){case O.ADD_LIQUIDITY:case O.ADD_LIQUIDITY_AND_STAKE:return await It(e,n,r,d,u,c,f,p,m,o===O.ADD_LIQUIDITY_AND_STAKE,i);case O.REMOVE_LIQUIDITY:case O.REMOVE_LIQUIDITY_AND_UNSTAKE:return await xt(e,n,r,a,c,f,p,m,o===O.REMOVE_LIQUIDITY_AND_UNSTAKE,i);default:return!1}}async function It(e,n,o,r,a,d,u,c,f,p,m){const i=[Q(e,o.basePairInfo.token1.address,_(e).Router,r,o.allowance.token1,{icon:o.basePairInfo.token1.icon,symbol:o.basePairInfo.token1.symbol}),Q(e,o.basePairInfo.token2.address,_(e).Router,a,o.allowance.token2,{icon:o.basePairInfo.token2.icon,symbol:o.basePairInfo.token2.symbol}),Nt(e,o.basePairInfo.token1.address,o.basePairInfo.token2.address,o.basePairInfo.stable,r,a,d,u,c,f,m)],h=[Q(e,o.basePairInfo.address,o.basePairInfo.cLPaddress,Re,b.from(0),m),ge(e,W.SUPPLY,o.basePairInfo.cLPaddress,!1,async()=>{const I=new M(o.basePairInfo.address,z,te(e));try{return(await I.balanceOf(c)).sub(o.userSupply.totalLP)}catch{throw n.setStatus({error:"Error getting LP token balance"}),new Error("Error getting LP token balance")}},m)];return await n.addTransactionList(p?[...i,...h]:i,{title:p?"Add Liquidity and Stake":"Add Liquidity",txListMethod:ye.EVM,chainId:e})}async function xt(e,n,o,r,a,d,u,c,f,p){const m=[Q(e,o.basePairInfo.address,_(e).Router,r,o.allowance.LPtoken,p),St(e,o.basePairInfo.token1.address,o.basePairInfo.token2.address,o.basePairInfo.stable,r,a,d,u,c,p)],i=ge(e,W.WITHDRAW,o.basePairInfo.cLPaddress,!1,r,p);return await n.addTransactionList(f?[i,...m]:m,{title:f?"Unstake and Remove Liquidity":"Remove Liquidity",txListMethod:ye.EVM,chainId:e})}const Nt=(e,n,o,r,a,d,u,c,f,p,m)=>{const[i,h]=[B(n,e),B(o,e)],I=i||h;return{chainId:e,txType:W.ADD_LIQUIDITY,address:_(e).Router,abi:j,method:I?"addLiquidityCANTO":"addLiquidity",params:I?[i?o:n,r,i?d:a,i?c:u,i?u:c,f,p]:[n,o,r,a,d,u,c,f,p],value:i?a:h?d:"0",extraDetails:m}},St=(e,n,o,r,a,d,u,c,f,p)=>{const[m,i]=[B(n,e),B(o,e)],h=m||i;return{chainId:e,txType:W.REMOVE_LIQUIDITY,address:_(e).Router,abi:j,method:h?"removeLiquidityCANTO":"removeLiquidity",params:h?[m?o:n,r,a,m?u:d,m?d:u,c,f]:[n,o,r,a,d,u,c,f],value:"0",extraDetails:p}},wt=({activePair:e,chainId:n,account:o,txStore:r,confirmValues:a})=>{const d=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals),u=a.percentage==100?e.userSupply.totalLP:U(e.userSupply.totalLP,a.percentage),c=U(a.amount1,100-Number(a.slippage)),f=U(a.amount2,100-Number(a.slippage)),[p,m]=w.useState(0);async function i(){m(await Ne(n))}return w.useEffect(()=>{i()},[]),l($,{children:[t("div",{className:"title",children:e.basePairInfo.token1.symbol+" / "+e.basePairInfo.token2.symbol}),t("p",{id:"position",children:"you will receive"}),l("div",{className:"row",children:[t("img",{src:e.basePairInfo.token1.icon,height:50}),t("img",{src:e.basePairInfo.token2.icon,height:50})]}),t("h1",{}),l("h4",{children:[" ",e.basePairInfo.token1.symbol+" and "+e.basePairInfo.token2.symbol," ","tokens"]}),l("div",{className:"tableName",style:{gap:"1rem"},children:[t(E,{type:e.basePairInfo.token1.symbol+" rate",value:"1 "+e.basePairInfo.token1.symbol+" = "+g(d.toString())+" "+e.basePairInfo.token2.symbol}),t(E,{type:e.basePairInfo.token2.symbol+" rate",value:"1 "+e.basePairInfo.token2.symbol+" = "+g((1/d).toString())+" "+e.basePairInfo.token1.symbol})]}),t("div",{style:{borderBottom:"1px solid #222",width:"90%"}}),l("div",{className:"tableName",style:{gap:"1rem"},children:[t(E,{type:e.basePairInfo.token1.symbol+" withdrawing",value:g(y.formatUnits(a.amount1,e.basePairInfo.token1.decimals))}),t(E,{type:e.basePairInfo.token2.symbol+" withdrawing",value:g(y.formatUnits(a.amount2,e.basePairInfo.token2.decimals))}),t(E,{type:"burned",value:g(y.formatUnits(u,e.basePairInfo.decimals))})]}),t(v,{style:{marginBottom:"1.5rem"},filled:!0,height:"big",weight:"bold",disabled:p==0,onClick:()=>Se(n,r,O.REMOVE_LIQUIDITY,e,u,b.from(0),b.from(0),c,f,o,p+Math.floor(Number(a.deadline))*60),children:"confirm"})]})},Tt=({activePair:e,chainId:n,account:o,txStore:r,confirmValues:a})=>{const[d,u]=w.useState(b.from(0)),[c,f]=w.useState(!1);async function p(){u(await Ct(Number(n),e.basePairInfo,a.amount1,a.amount2))}w.useEffect(()=>{p()},[]);const m=K(e.totalSupply.ratio.ratio,e.totalSupply.ratio.aTob,e.basePairInfo.token1.decimals,e.basePairInfo.token2.decimals);return l(Lt,{children:[t(N,{type:"title",size:"title3",children:"you will receive"}),t("div",{className:"center-item",children:t(Y,{iconLeft:e.basePairInfo.token1.icon,iconRight:e.basePairInfo.token2.icon})}),t(N,{type:"title",size:"title2",children:d.isZero()?"calculating...":g(y.formatUnits(d,e.basePairInfo.decimals))}),l(N,{color:"white",children:[e.basePairInfo.token1.symbol+"/"+e.basePairInfo.token2.symbol," ","liquidity pool tokens"]}),l("div",{className:"box",style:{gap:"1rem"},children:[t(E,{type:e.basePairInfo.token1.symbol+" rate",value:"1 "+e.basePairInfo.token1.symbol+" = "+g(m.toString())+" "+e.basePairInfo.token2.symbol}),t(E,{type:e.basePairInfo.token2.symbol+" rate",value:"1 "+e.basePairInfo.token2.symbol+" = "+g((1/m).toString())+" "+e.basePairInfo.token1.symbol})]}),t("div",{style:{borderBottom:"1px solid #222",width:"90%"}}),l("div",{className:"box",style:{gap:"1rem"},children:[t(E,{type:e.basePairInfo.token1.symbol+" deposited",value:g(y.formatUnits(a.amount1,e.basePairInfo.token1.decimals))}),t(E,{type:e.basePairInfo.token2.symbol+" deposited",value:g(y.formatUnits(a.amount2,e.basePairInfo.token2.decimals))}),t(E,{type:"share of pool",value:g(Qe(e.userSupply.percentOwned,d,e.totalSupply.totalLP).toString())+"%"})]}),t(v,{style:{marginTop:"1.5rem"},weight:"bold",height:"big",filled:!0,onClick:async()=>Se(n,r,c?O.ADD_LIQUIDITY_AND_STAKE:O.ADD_LIQUIDITY,e,b.from(0),a.amount1,a.amount2,U(a.amount1,100-Number(a.slippage)),U(a.amount2,100-Number(a.slippage)),o,await Ne(n)+Math.floor(Number(a.deadline))*60),children:"confirm"}),l("div",{className:"getRewards",children:[t(Me,{checked:c,onChange:()=>f(!c)}),t("p",{children:"get rewards"})]}),t(N,{size:"text4",children:"** by checking this box, LP tokens will be supplied in the lending market **"})]})},Lt=A($)`
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
`,Pt=e=>{const[n,o,r,a,d]=Ce(c=>[c.modalType,c.activePair,c.confirmationValues,c.setModalType,c.setConfirmationValues]);function u(c){switch(c){case P.ADD:return"Add Liquidity";case P.REMOVE:return"Remove Liquidity";case P.ADD_OR_REMOVE:return"Liquidity";default:return"Confirmation"}}return w.useEffect(()=>{n!==P.NONE&&ee.events.lpInterfaceActions.modalInteraction(n,o.basePairInfo.token1.symbol+" / "+o.basePairInfo.token2.symbol,!0)},[n]),l(Ue,{open:n!=P.NONE,title:e.txStore.modalOpen?"":u(n),onClose:()=>{ee.events.lpInterfaceActions.modalInteraction(n,o.basePairInfo.token1.symbol+" / "+o.basePairInfo.token2.symbol,!1),e.onClose()},children:[t(Xe,{onClose:e.onClose}),n===P.ADD&&t(ht,{onClose:e.onClose,activePair:o,setModalType:a,setConfirmationValues:d}),n===P.REMOVE&&t(gt,{onClose:e.onClose,activePair:o,setModalType:a,setConfirmationValues:d}),n===P.ADD_OR_REMOVE&&t(yt,{onClose:e.onClose,activePair:o,setModalType:a}),n===P.REMOVE_CONFIRM&&t(wt,{onClose:e.onClose,activePair:o,chainId:e.chainId,account:e.account,confirmValues:r,txStore:e.txStore}),n===P.ADD_CONFIRM&&t(Tt,{onClose:e.onClose,activePair:o,chainId:e.chainId,account:e.account,confirmValues:r,txStore:e.txStore})]})},At=e=>{const n=_(e).Router,o=new M(n,j),r=ke(e),a=ve(e),d=r.map(m=>{const i=new M(m.address,z),h=I=>{for(const[,k]of Object.entries(a))if(k.underlying.address==I)return k.address;return""};return[{contract:i,method:"totalSupply",args:[]},{contract:o,method:"getReserves",args:[m.token1.address,m.token2.address,m.stable]},{contract:o,method:"getUnderlyingPrice",args:[h(m.token1.address)]},{contract:o,method:"getUnderlyingPrice",args:[h(m.token2.address)]},{contract:o,method:"getUnderlyingPrice",args:[m.cLPaddress]}]}),u=be(r?d.flat():[],{chainId:pe(e)?e:ue.chainId})??{},c=r?u.length/r.length:0;let f;const p=(m,i)=>{const h=m.map(k=>k==null?void 0:k.value),I=[];for(let k=0;k<m.length;k+=i)I.push(h.slice(k,k+i));return I};return r?c>0&&he(u)?(f=p(u,c),f.map((m,i)=>{const h=m[0][0],I=m[1],k=I.reserveA,S=I.reserveB,[s,T]=We(k,S),x=m[2][0],D=m[3][0],F=m[4][0],Z=F.mul(h).div(b.from(10).pow(18));return{basePairInfo:r[i],totalSupply:{totalLP:h,tvl:Z,token1:k,token2:S,ratio:{aTob:T,ratio:s}},prices:{token1:x,token2:D,LP:F}}})):[]:[]},Dt=(e,n,o)=>{const r=_(o).Router,a=new M(r,j),d=_e(n)??b.from(0),u=e.map(i=>{const h=new M(i.basePairInfo.address,z),I=new M(i.basePairInfo.token1.address,z),k=new M(i.basePairInfo.token2.address,z),S=new M(i.basePairInfo.cLPaddress,Be);return[{contract:h,method:"balanceOf",args:[n]},{contract:I,method:"balanceOf",args:[n]},{contract:k,method:"balanceOf",args:[n]},{contract:I,method:"allowance",args:[n,a.address]},{contract:k,method:"allowance",args:[n,a.address]},{contract:h,method:"allowance",args:[n,a.address]},{contract:S,method:"balanceOf",args:[n]},{contract:S,method:"exchangeRateStored",args:[]}]}),c=be(e&&pe(o)&&n?u.flat():[])??{},f=e?c.length/e.length:0;let p;const m=(i,h)=>{const I=i.map(S=>S==null?void 0:S.value),k=[];for(let S=0;S<i.length;S+=h)k.push(I.slice(S,S+h));return k};return f>0&&he(c)?(p=m(c,f),p.map((i,h)=>{const I=i[0][0],[k,S]=kt(e[h].basePairInfo,o),s=k?d:i[1][0],T=S?d:i[2][0],x=Ke(i[6][0],i[7][0]),D=Number(y.formatUnits(I.add(x).mul(b.from(10).pow(18)).div(e[h].totalSupply.totalLP))),F=I.mul(b.from(10).pow(18)).div(e[h].totalSupply.totalLP),Z=F.mul(e[h].totalSupply.token1).div(b.from(10).pow(18)),oe=F.mul(e[h].totalSupply.token2).div(b.from(10).pow(18)),we=i[3][0],Te=i[4][0],Le=i[5][0];return{...e[h],userSupply:{totalLP:I,token1:Z,token2:oe,percentOwned:D},allowance:{token1:we,token2:Te,LPtoken:Le},balances:{token1:s,token2:T}}})):e.map(i=>({...i,userSupply:{totalLP:b.from(0),token1:b.from(0),token2:b.from(0),percentOwned:0},allowance:{token1:b.from(0),token2:b.from(0),LPtoken:b.from(0)},balances:{token1:b.from(0),token2:b.from(0)}}))},Ft=()=>{const e=Fe(),n=re(),{notifications:o}=Ze(),[r,a]=w.useState([]);Ge(o,r,a);const[d,u]=Ce(s=>[s.setModalType,s.setActivePair]),c=At(Number(e.chainId)),f=Dt(c,e.account,Number(e.chainId)),[p,m]=w.useState(0),[i,h]=w.useState(0),I=(f==null?void 0:f.filter(s=>!s.userSupply.totalLP.isZero()||s.userSupply.percentOwned>0).length)>0,k=(f==null?void 0:f.filter(s=>s.userSupply.totalLP.isZero()&&s.userSupply.percentOwned==0).length)>0,S=re().transactions.filter(s=>s.details.status==="Mining");return l(X,{children:[t(et,{title:"Canto - LP interface",description:"Canto Homepage serves De-fi applications",link:"lp"}),l(Et,{as:se,children:[t("div",{children:t(Pt,{chainId:Number(e.chainId),account:e.account,onClose:()=>{d(P.NONE)},txStore:n})}),t("div",{style:{margin:"2rem 0"},children:l(N,{type:"title",color:"white",children:["to swap tokens, visit"," ",t("a",{onClick:()=>ee.events.lpInterfaceActions.visitSlingshot(),style:{color:"#a2fca3",textDecoration:"underline",fontFamily:"Macan"},href:"https://app.slingshot.finance/trade/",target:"_blank",rel:"noreferrer",children:"Slingshot"})]})}),S.length>0&&t("div",{className:"tables",children:t("div",{className:"left",children:t(G,{columns:["ongoing transactions"],children:S.map(s=>{var T;return t(st,{icons:((T=s.details.extra)==null?void 0:T.icon)??"",name:s.details.currentMessage??"",status:Je(s.details.status),date:new Date},s.details.txId)})})})}),I&&l("div",{children:[t(N,{type:"title",align:"left",className:"tableName",children:"current position"}),t(se,{children:t(G,{columns:["Asset","TVL","wallet","% Share"],onColumnClicked:s=>m(s),columnClicked:p,children:f==null?void 0:f.map((s,T)=>!s.userSupply.totalLP.isZero()||s.userSupply.percentOwned>0?t(ce,{delay:.2*T,iconLeft:s.basePairInfo.token1.icon,iconRight:s.basePairInfo.token2.icon,onClick:()=>{u(s),d(s.userSupply.totalLP.isZero()?P.ADD:P.ADD_OR_REMOVE)},assetName:s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,totalValueLocked:J+ae(g(y.formatUnits(s.totalSupply.tvl))),position:g(y.formatUnits(s.userSupply.totalLP,s.basePairInfo.decimals))+" LP Tokens",share:g((s.userSupply.percentOwned*100).toString()),sortableProps:[s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,Number(y.formatUnits(s.totalSupply.tvl)),Number(y.formatUnits(s.userSupply.totalLP,s.basePairInfo.decimals)),s.userSupply.percentOwned]},s.basePairInfo.address):null).sort((s,T)=>{var x,D;return ie((x=s==null?void 0:s.props.sortableProps)==null?void 0:x[p],(D=T==null?void 0:T.props.sortableProps)==null?void 0:D[p])})})})]}),k?l("div",{children:[t(N,{type:"title",align:"left",className:"tableName",children:"pools"}),t(G,{columns:["Asset","TVL","wallet","% Share"],onColumnClicked:s=>h(s),columnClicked:i,children:f==null?void 0:f.map((s,T)=>s.userSupply.totalLP.isZero()&&s.userSupply.percentOwned==0?t(ce,{delay:.1*T,iconLeft:s.basePairInfo.token1.icon,iconRight:s.basePairInfo.token2.icon,onClick:()=>{u(s),d(Number(s.userSupply.totalLP)>0?P.ADD_OR_REMOVE:P.ADD)},assetName:s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,totalValueLocked:ae(g(y.formatUnits(s.totalSupply.tvl))),position:g(y.formatUnits(s.userSupply.totalLP))+" LP Tokens",share:g((s.userSupply.percentOwned*100).toString()),sortableProps:[s.basePairInfo.token1.symbol+"/"+s.basePairInfo.token2.symbol,Number(y.formatUnits(s.totalSupply.tvl)),Number(y.formatUnits(s.userSupply.totalLP,s.basePairInfo.decimals)),s.userSupply.percentOwned]},s.basePairInfo.address):null).sort((s,T)=>{var x,D;return ie((x=s==null?void 0:s.props.sortableProps)==null?void 0:x[i],(D=T==null?void 0:T.props.sortableProps)==null?void 0:D[i])})})]}):t("div",{style:{height:"30rem"},children:t(ze,{})})]})]})},Et=A.div`
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
`;export{Ft as default};
