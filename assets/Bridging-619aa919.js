import{n as k,j as t,a as l,F as E,B as A,M as ot,e as st,g as ge,C as ke,E as Ue,u as p,A as lt,c as dt,o as we,b as te,d as F,f as ae,h as ve,i as ne,k as je,l as Ge,m as O,p as ct,t as mt,q as ht,r as ut,w as gt,O as Te,s as ft,v as bt,x as xt,y as pt,T as c,z as fe,P as L,D as g,G as D,H as T,I as W,J as yt,K as kt,L as wt,N as vt,Q as Tt,R,S as Nt,U as de,V as ce,W as Et,X as pe,Y as At,Z as P,_ as Ct,$ as It,a0 as ze,a1 as St,a2 as Ye,a3 as Ze,a4 as Bt,a5 as Ot,a6 as j,a7 as Fe,a8 as K,a9 as q,aa as Q,ab as J,ac as X,ad as ee,ae as Mt,af as _t,ag as Rt,ah as Lt,ai as zt,aj as Ft,ak as Dt}from"./index-f4e56ad3.js";import{T as $t,a as Vt,b as Ht,c as Ut,l as De,S as jt,d as Gt}from"./selected-63f80975.js";import{_ as Yt,T as G,O as Pe,c as Zt,b as be,u as We}from"./index-d135049a.js";const Pt=e=>t(Wt,{children:l($t,{className:"tabs",children:[t(Vt,{className:"tablist",children:e.names.map((a,r)=>t(Ht,{className:"tab",onClick:e.onClicks[r],children:a},r))}),t(E,{children:e.panels.map((a,r)=>t(Ut,{children:a},r))})]})}),Wt=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 10.65rem);
  max-width: 1200px;
  margin: 0 auto;

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
    width: 174px;
    border-radius: 0%;
    border: 1px solid transparent;
    padding: 1.8rem 0;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      border: none;
      background-color: rgba(0, 119, 255, 0.25);
      border-bottom: 4px solid var(--primary-color);
      border-top: 4px solid transparent;
    }
  }
  .tablist {
    display: flex;
    justify-content: center;
  }
  .react-tabs__tab--selected {
    border: none;
    border-bottom: 4px solid var(--primary-color);
    border-top: 4px solid transparent;

    background-color: rgba(0, 119, 255, 0.1);
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
    background-color: transparent;
    min-height: 47rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    .tablist {
      width: 100vw;
    }
    .tab {
      width: 9rem;
      padding: 1.8rem 0;
    }

    .react-tabs__tab-panel--selected {
      width: 100%;
    }
  }
`;var b=(e=>(e.GBRIDGE="Gravity Bridge",e.LAYER_ZERO="Layer Zero",e.IBC="IBC",e))(b||{});const oe={id:"empty",name:"",icon:"",isAlthea:!1,isEVM:!1,supportedBridgeInMethods:[],supportedBridgeOutMethods:[]},Ke={isERC20:!1,isLP:!1,symbol:"choose token",address:"0x0412C7c846bb6b7DC462CF6B453f76D8440b2609",decimals:6,icon:st,name:"choose token",tokenGroups:[]},qe={...Ke,ibcDenom:"",nativeName:"",nativeBalance:A.from(0)};({...Ke,erc20Balance:A.from(0),allowance:A.from(ot)});async function se(e,a,r){return Promise.all(e.map(async n=>({...n,balance:await Ne(a,n.address,r,n.isNative),nativeBalance:n.isNative?await Qe(a,r):A.from(0)})))}async function Qe(e,a){return e?await ge(a).getBalance(e):A.from(0)}async function Ne(e,a,r,n=!1){const i=ge(r),o=n?await Qe(e,r):A.from(0),s=new ke(a,Ue,i);return e?(await s.balanceOf(e)).add(o):A.from(0)}async function Kt(e,a,r,n){return await new ke(e,Ue,ge(n)).allowance(a,r)}const le=(e,a,r,n)=>{var i;return((i=e[a])==null?void 0:i.tokens[n?"toAlthea":"fromAlthea"].some(o=>o.address.toLowerCase()===r.address.toLowerCase()))??!1};async function qt(e,a,r,n,i,o,s,d){var m,u,x,w;if(!n.isEVM)return e.setStatus({error:"Invalid network"}),!1;if(!a||!r||!o)return e.setStatus({error:"Invalid address"}),!1;const h={symbol:o.symbol,amount:p.formatUnits(s,o.decimals)};if(i.isAlthea){if(le(n,b.GBRIDGE,o,!0)){const y=n[b.GBRIDGE];return await Qt(y==null?void 0:y.chainId,e,y==null?void 0:y.gravityBridgeAddress,y==null?void 0:y.wethAddress,o.address,r,a,s,h)}else if(le(n,b.LAYER_ZERO,o,!0))return await $e((m=n[b.LAYER_ZERO])==null?void 0:m.chainId,e,!0,o.isNative,o.address,(u=i[b.LAYER_ZERO])==null?void 0:u.lzChainId,s,a,h)}else if(n.isAlthea){if(le(i,b.LAYER_ZERO,o,!1))return await $e((x=n[b.LAYER_ZERO])==null?void 0:x.chainId,e,!1,o.isNative,o.address,(w=i[b.LAYER_ZERO])==null?void 0:w.lzChainId,s,a,h);if(le(i,b.IBC,o,!1))return await ta(n.evmChainId,e,r,o.address,s.toString(),i.IBC,d,o.ibcDenom,h)}return!1}async function Qt(e,a,r,n,i,o,s,d,h){if(!lt.checkAddress(o)||!s||!o||!e)return a.setStatus({error:"Invalid Address"}),!1;a.setStatus({loading:!0});const m=await dt(o,we(e)?te.chainId:F.chainId);m||a.setStatus({error:"public key"});let u=A.from(0);const x=[];if(i===n)try{const y=await Ne(s,i,e);y.lt(d)&&(u=d.sub(y),x.push(na(e,n,u,{symbol:"ETH",amount:p.formatUnits(u)})))}catch{return a.setStatus({error:"error grabbing WETH balance"}),!1}const w=await Kt(i,s,r,e);return x.push(Yt(e,i,r,d,w,h)),x.push(aa(e,r,i,o,d,h)),await a.addTransactionList(x,{title:"Bridge Into Althea",txListMethod:G.EVM,chainId:e},m)}async function Jt(e,a,r,n,i,o,s){return e||a.setStatus({error:"Invalid Chain Id"}),await a.addTransactionList([Ee(e,r,n,i,o,ne(e),ve,ae(e),"",s)],{title:"Convert Coin",txListMethod:G.COSMOS,chainId:e})}async function Xt(e,a,r,n){return e||a.setStatus({error:"Invalid Chain Id"}),await a.addTransactionList(n.map(i=>Ee(e,!0,r,i.token.ibcDenom,i.amount.toString(),ne(e),ve,ae(e),"",{icon:i.token.icon,symbol:i.token.symbol,amount:p.formatUnits(i.amount,i.token.decimals)})),{title:"Convert Coin",txListMethod:G.COSMOS,chainId:e})}async function ea(e,a,r,n,i,o,s){return r.checkAddress(n)?await a.addTransactionList([Je(e,n,r.channelFromAlthea,o,i,ne(e),r.restEndpoint,r.latestBlockEndpoint,je,ae(e),"",s)],{title:"Bridge Out Of Althea",txListMethod:G.COSMOS,chainId:e}):(a.setStatus({error:"Invalid Cosmos Receiver Address"}),!1)}async function ta(e,a,r,n,i,o,s,d,h){return!o||!r||!s||!o.checkAddress(s)?(a.setStatus({error:"Invalid Cosmos Receiver Address"}),!1):await a.addTransactionList([Ee(e,!1,r,n,i,ne(e),ve,ae(e),"",h),Je(e,s,o.channelFromAlthea,i,d,ne(e),o.restEndpoint,o.latestBlockEndpoint,je,ae(e),"",h)],{title:"Bridge Out",txListMethod:G.COSMOS,chainId:e})}async function $e(e,a,r,n,i,o,s,d,h){if(!d||!o||!e)return a.setStatus({error:"Invalid OFT parameters"}),!1;a.setStatus({loading:!0});const m=[];if(n)try{const w=await Ne(d,i,e);w.lt(s)&&m.push(ra(e,!0,i,s.sub(w),{...h,amount:p.formatUnits(s.sub(w),18)}))}catch{return a.setStatus({error:"error fetching OFT balance"}),!1}const u=await Xe(e,o,i,d,s,[1,2e5]);if(u.isZero())return a.setStatus({error:"error fetching gas price"}),!1;const x=Ge.encode(["address"],[d]);return m.push(ia(e,r,i,d,x,o,s,"0x",u,h)),await a.addTransactionList(m,{title:`${(h==null?void 0:h.symbol)??""} OFT Transfer`,txListMethod:G.EVM,chainId:e})}const aa=(e,a,r,n,i,o)=>({chainId:e,txType:O.SEND_TO_COSMOS,address:a,abi:ct,method:"sendToCosmos",params:[r,n,i],value:"0",extraDetails:o}),Ee=(e,a,r,n,i,o,s,d,h,m)=>({chainId:e,txType:a?O.CONVERT_TO_EVM:O.CONVERT_TO_NATIVE,tx:a?mt:ht,params:[r,n,i,o,s,d,h],extraDetails:m}),Je=(e,a,r,n,i,o,s,d,h,m,u,x)=>({chainId:e,txType:O.IBC_OUT,tx:ut,params:[a,r,n,i,o,s,d,h,m,u],extraDetails:x}),na=(e,a,r,n)=>({chainId:e,txType:O.WRAP,address:a,abi:gt,method:"deposit",params:[],value:r,extraDetails:n}),ia=(e,a,r,n,i,o,s,d,h,m)=>({chainId:e,txType:a?O.OFT_IN:O.OFT_OUT,address:r,abi:Te,method:"sendFrom",params:[n,o,i,s,[n,ft,d]],value:h,extraDetails:m}),ra=(e,a,r,n,i)=>({chainId:e,txType:a?O.OFT_DEPOSIT:O.OFT_WITHDRAW,address:r,abi:Te,method:a?"deposit":"withdraw",params:a?[]:[n],value:a?n:"0",extraDetails:i});async function Xe(e,a,r,n,i,o){const s=bt(["uint16","uint256"],o),d=new ke(r,Te,ge(e)),h=Ge.encode(["address"],[n]);try{return(await d.estimateSendFee(a,h,i,!1,s))[0]}catch{return A.from(0)}}function oa(e,a,r,n){const i=[];for(const o of e)o.token&&i.push({origin:o.from,timeLeft:o.secondsToComplete,amount:o.amount,token:o.token});for(const o of a)o.nativeBalance.gt(0)&&i.push({origin:xt(o.ibcDenom,r),timeLeft:"0",amount:o.nativeBalance,token:o});return i}function me(){pt("copied address",!0,"0",300)}function et(e){return Number(e)<0?"pending...":Number(e)==0?"done":Number(e)<=60?e+" seconds":Math.ceil(Number(e)/60)+" min"}function N(e,a){return e?e.length<=a*2?e:e.slice(0,a)+"..."+e.slice(-a):""}function sa(e,a,r){const n=r?"bridge in":"bridge out";return e.isZero()?[n,!0]:e.gt(a)?[n,!0]:[n,!1]}const Ae=e=>l(da,{children:[t(Pe,{onClose:e.onClose})," ",t(c,{type:"title",size:"title2",children:e.title}),e.titleIcon,e.confirmationValues.length>0&&t("div",{className:"confirm-details",children:e.confirmationValues.map((a,r)=>t(la,{title:a.title,value:a.value},r))}),e.extraInputs.length>0&&t("div",{className:"confirm-details",children:e.extraInputs.map((a,r)=>l("div",{className:"row",style:{margin:"8px 0"},children:[t("div",{className:"header",children:`${a.header} :`}),t("div",{className:"value",children:t(fe,{style:{border:"1px solid #282828",backgroundColor:"transparent",width:"16rem"},placeholder:a.placeholder+"1...",value:a.value,onChange:n=>{a.setValue(n.target.value)}})})]},r))}),e.extraDetails,t(L,{filled:!0,height:"big",weight:"bold",onClick:e.onConfirm,disabled:e.disableConfirm,children:"confirm"})]}),la=({title:e,value:a})=>l("div",{className:"row",children:[l("div",{className:"header",children:[e," :"]}),t("div",{className:"value",children:t(c,{type:"title",children:a})})]}),he=({icon:e,name:a})=>t("div",{style:{flexGrow:2,display:"grid",placeItems:"center"},children:l(E,{children:[t("img",{height:50,src:e,alt:a}),t(c,{type:"title",size:"title3",children:a})]})}),da=k.div`
  min-height: 36rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0 40px;
  padding-bottom: 2rem;
  gap: 1rem;
  .expanded {
    flex-grow: 1;
  }

  .loading {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .expanded {
    flex-grow: 2;
    display: grid;
    place-items: center;
  }
  .network-change {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  .confirm-details {
    background: var(--base);
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
        color: var(--primary-color);
      }
    }
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

      img {
        transform: translateY(3px);
      }
    }
  }
`;function ca(e,a,r,n){return t(c,{size:"text4",align:"left",style:{color:"#474747"},children:`by completing bridge ${e?"in":"out"}, you are transferring your assets from ${e?`${n.name}`:"althea"} (${a}) to ${e?"althea":`${n.name}`} (${r}).`})}function tt(e,a,r,n){return t(c,{size:"text4",align:"left",style:{color:"#474747"},children:a?l(E,{children:[`by completing bridge ${e?"in":"out"}, you are transferring your assets from your althea native address (${r}) to your ${e?"althea EVM address ("+n+")":"address on the "+n+" network"}. Read more about this `,t("a",{role:"button",tabIndex:0,onClick:()=>window.open(e?"https://docs.althea.io/user-guides/converting-assets":"https://docs.althea.io/user-guides/bridging-assets/from-althea","_blank"),style:{color:"var(--primary-color)",cursor:"pointer",textDecoration:"underline"},children:"here."})]}):`by bridging ${e?"in":"out"}, you are transferring your assets from your ${e?"ethereum ":"althea "} EVM address (${r}) to your althea native address (${n}) ${e?"through gravity bridge.":"."}`})}const ma=e=>{const[a,r]=g.useState(!1);return l(ha,{children:[t(D,{title:"confirmation",open:a,onClose:()=>{r(!1)},children:t(Ae,{title:"Convert Coin",titleIcon:he({icon:e.transaction.token.icon,name:e.transaction.token.symbol}),disableConfirm:!1,extraInputs:[],confirmationValues:[{title:"from",value:N(e.altheaAddress,6)},{title:"to",value:N(e.ethAddress,6)},{title:"amount",value:T(p.formatUnits(e.transaction.amount,e.transaction.token.decimals))+" "+e.transaction.token.symbol}],onConfirm:e.tx??(()=>!1),extraDetails:tt(!0,!0,N(e.altheaAddress,6),N(e.ethAddress,6)),onClose:()=>{r(!1)}})}),l("div",{className:"dual-item",style:{width:"120%"},children:[t(c,{size:"text3",align:"left",children:"origin"}),t(c,{type:"title",align:"left",children:e.transaction.origin})]}),l("div",{className:"dual-item",children:[t(c,{size:"text3",align:"left",children:"amount"}),l(c,{type:"title",align:"left",children:[T(p.formatUnits(e.transaction.amount,e.transaction.token.decimals))," "+e.transaction.token.symbol]})]}),e.transaction.timeLeft!="0"&&l("div",{className:"dual-item",children:[t(c,{size:"text3",align:"left",children:"time left"}),t(c,{type:"title",align:"left",size:"text2",children:et(e.transaction.timeLeft)})]}),e.transaction.timeLeft=="0"&&t("div",{className:"dual-item",children:t(L,{style:{maxWidth:"7rem"},height:"normal",disabled:e.transaction.timeLeft!=="0",weight:"bold",filled:!0,onClick:()=>r(!0),children:"complete"})})]})},ha=k.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--base);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;

  .dual-item {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .dual-item:last-child {
    max-width: 6rem;
  }
`,ua=e=>{const[a,r]=g.useState(!1);return l(ga,{children:[t(D,{title:"",open:a,onClose:()=>r(!1),children:t("div",{style:{width:"32rem"},children:t(Pe,{onClose:()=>r(!1)})})}),t(c,{size:"title2",children:"Bridge Queue"}),t(c,{type:"text",size:"text3",children:e.bridgeIn?`once the transaction is done, please click on complete to get the funds
        from bridge to althea (evm)`:"once the transactions is done, please click on complete to get the funds to the desired cosmos network"}),t("div",{className:"scroll-port",children:l("div",{className:"scrollable",children:[e.transactions.length==0&&t("div",{className:"empty-records",children:t(c,{children:"No transactions available right now"})}),e.bridgeIn&&e.transactions.sort((n,i)=>n.origin>i.origin?1:-1).map(n=>t(ma,{transaction:n,altheaAddress:e.altheaAddress,ethAddress:e.ethAddress,tx:()=>Jt(e.chainId,e.txStore,e.bridgeIn,e.altheaAddress,n.token.ibcDenom,n.amount.toString(),{icon:n.token.icon,symbol:n.token.symbol,amount:p.formatUnits(n.amount,n.token.decimals)})},n.token.address))]})}),e.transactions.length>0&&e.bridgeIn&&t(L,{className:"complete-all",filled:!0,weight:"bold",onClick:()=>{Xt(e.chainId,e.txStore,e.altheaAddress,e.transactions),r(!0)},children:"Complete All"})]})},ga=k.div`
  background: var(--base);
  box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #3a3a3a;
  border-radius: 4px;
  width: 600px;
  padding: 1rem 2rem;
  margin-top: 3rem;

  .complete-all {
    /* width: 100%; */
  }
  .scroll-port {
    margin-top: 1rem;
    max-height: 300px;
    overflow-y: auto;
  }

  .empty-records {
    border: 1px solid #333;
    background-color: var(--highlights);
    border-radius: 4px;
    padding: 1rem;
    p {
      color: #777;
    }
  }
  .scrollable {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    /* margin: 0 1rem; */
    padding: 12px;
  }
`,fa=e=>l(ba,{...e,children:[t("div",{className:"bar"}),t("div",{className:"bar"}),t("div",{className:"bar"}),t("div",{className:"bar"}),t("div",{className:"bar"}),t("div",{className:"bar"}),t("div",{className:"bar"}),t("div",{className:"bar"})]}),ba=k.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  height: 4px;

  .bar {
    height: 4px;
    width: 4px;
    background-color: ${e=>e.active?"var(--primary-color)":"var(--just-grey-color)"};
    ${({active:e})=>e?"animation: example 3s;":""}

    animation-iteration-count: infinite;

    &:nth-of-type(1) {
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.6s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.9s;
    }
    &:nth-of-type(5) {
      animation-delay: 1.2s;
    }
    &:nth-of-type(6) {
      animation-delay: 1.5s;
    }
    &:nth-of-type(7) {
      animation-delay: 1.8s;
    }
    &:nth-of-type(8) {
      animation-delay: 2.1s;
    }
  }

  @keyframes example {
    0% {
      height: 4px;
    }
    15% {
      height: 18px;
    }
    30% {
      height: 4px;
    }
  }
`,xa=e=>{const[a,r]=g.useState(!1),[n,i]=g.useState(!1),o=Zt(Math.ceil(Math.random()*Math.ceil(Math.random()*Date.now())).toString(),e.transactionType,{symbol:e.tokenName}),s=()=>{switch(e.status){case"PendingSignature":return o.messages.long;case"Mining":return o.messages.pending;case"Success":return o.messages.success;case"Fail":case"Exception":return o.messages.error;default:return"Transaction failed"}};return g.useEffect(()=>{e.status=="PendingSignature"&&!a&&(r(!0),W.events.transactions.transactionStarted(e.transactionType,e.mixPanelEventInfo)),e.status=="Success"&&!n&&(i(!0),W.events.transactions.transactionSuccess(e.transactionType,e.txHash,e.mixPanelEventInfo)),(e.status=="Fail"||e.status=="Exception")&&!n&&(i(!0),W.events.transactions.transactionFailed(e.transactionType,e.txHash,s(),e.mixPanelEventInfo))},[e.status]),l(pa,{children:[t("div",{role:"button",tabIndex:0,onClick:()=>{e.onClose()},children:t("img",{src:yt,style:{position:"absolute",top:"0.5rem",right:"0.5rem",width:"40px",cursor:"pointer"}})}),t("div",{className:"tx-icon",children:e.status=="None"?t(c,{size:"text1",type:"title"}):e.status=="Success"?t(kt,{color:"var(--primary-color)",size:"30px"}):e.status=="Fail"||e.status=="Exception"?t(wt,{color:"var(--primary-color)",size:"30px"}):t(vt,{size:"sm"})}),t(c,{size:"title2",type:"text",style:{marginBottom:"2rem"},children:e.tokenName}),t(c,{size:"text1",type:"text",children:e.customMessage??s()}),t("br",{}),t(c,{size:"text1",type:"text",children:e.additionalMessage}),e.txHash?t(Tt,{className:"btn",onClick:()=>{W.events.loadingModal.blockExplorerOpened(e.txHash),window.open("https://tuber.build/tx/"+e.txHash,"_blank")},children:"open in block explorer"}):null]})},pa=k.div`
  display: flex;
  background-color: black;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  .btn {
    margin-top: 2rem;
  }
`,ya=e=>{const a=R(S=>S.hasPubKey),[r,n]=g.useState("None"),[i,o]=g.useState(""),[s,d]=g.useState("0"),[h,m]=g.useState("0"),[u,x]=g.useState(),[w,y]=g.useState(""),[C,M]=g.useState("None"),_=!(e.network.chainId==="evmos_9001-2"||e.network.chainId==="injective-1");async function $(){if(!window.keplr)console.error("no keplr installed");else{await window.keplr.enable(e.network.chainId);const S=window.keplr.getOfflineSigner(e.network.chainId),B=await S.getAccounts();o(B[0].address);const Z=await be.SigningStargateClient.connectWithSigner(e.network.rpcEndpoint,S,{gasPrice:be.GasPrice.fromString("300000"+e.network.nativeCurrency.denom)});x(Z);const ie=await Z.getBalance(B[0].address,e.token.nativeName);d(ie.amount);const re=await Z.getBalance(B[0].address,e.network.nativeCurrency.denom);m(re.amount)}}async function Y(){const S=await Et(F.cosmosAPIEndpoint);M("PendingSignature");try{if(_){const B=await(u==null?void 0:u.sendIbcTokens(i,e.altheaAddress,be.coin(p.parseUnits(w,e.token.decimals).toString(),e.token.nativeName),"transfer",e.network.channelToAlthea,void 0,Number(S),"auto","ibc transfer"));(B==null?void 0:B.code)===0?M("Success"):M("Fail")}}catch(B){console.error(B),M("Fail")}}return g.useEffect(()=>{_&&$()},[]),l(ka,{children:[!a&&t(Nt,{pubKeySuccess:r,setPubKeySuccess:n}),C!="None"&&t(xa,{onClose:()=>{C!=="Success"?M("None"):e.onClose()},tokenName:e.token.name,transactionType:O.IBC_IN,status:C,additionalMessage:C==="Fail"?"please make sure you have enough balance left over for gas fees":C==="Success"?"please allow time for the funds to be received on the althea network":""}),a&&l(E,{children:[" ",l("div",{children:[t("img",{height:50,src:e.token.icon,alt:e.token.name}),t(c,{type:"title",size:"title3",children:e.token.name})]}),l(c,{size:"text3",align:"center",color:"primary",children:["To bridge ",e.token.name," from the ",e.network.name," network into Althea, you will need to do an IBC transfer to Althea Mainnet."]}),l("div",{className:"values",children:[t(z,{title:"network",value:l(c,{type:"title",children:[e.network.name," "]})}),t(z,{title:"channel",value:l(c,{type:"title",children:[e.network.channelToAlthea," "]})}),t(z,{title:"balance",value:t(c,{type:"title",children:i.length>10?T(p.formatUnits(s,e.token.decimals),6)+" "+e.token.nativeName:"..."})}),e.network.nativeCurrency.denom!==e.token.nativeName&&t(z,{title:"gas balance",value:t(c,{type:"title",children:i.length>10?T(p.formatUnits(h,e.token.decimals),6)+" "+e.network.nativeCurrency.denom:"..."})}),_&&l(E,{children:[" ",t(z,{title:"balance",value:t(c,{type:"title",children:i.length>10?T(p.formatUnits(s,e.token.decimals),6):"..."})}),t(z,{title:"from",value:t(de,{text:i,onCopy:me,children:l(c,{type:"title",style:{cursor:"pointer"},children:[N(i,6),t("img",{src:ce,style:{height:"18px",position:"relative",top:"5px",left:"4px"}})]})})})]}),t(z,{title:"to",value:t(de,{text:e.altheaAddress,onCopy:me,children:l(c,{type:"title",style:{cursor:"pointer"},children:[N(e.altheaAddress,6),t("img",{src:ce,style:{height:"18px",position:"relative",top:"5px",left:"4px"}})]})})})]}),l(c,{size:"text3",align:"center",color:"primary",children:["To learn more about the ibc process, please read"," ",t("a",{role:"button",tabIndex:0,onClick:()=>window.open("https://docs.althea.io/user-guides/bridging-assets/to-althea#from-cosmos-hub-or-other-ibc-enabled-chain","_blank"),style:{cursor:"pointer",textDecoration:"underline"},children:"here"})]}),_&&l(E,{children:[" ",t("div",{className:"expand"}),l("div",{className:"amount",children:[t(fe,{style:{backgroundColor:"transparent",width:"100%",height:"54px"},placeholder:`amount :  ${T(p.formatUnits(s,e.token.decimals),6)} `,value:w,onChange:S=>{y(S.target.value)}}),t("button",{className:"maxBtn",onClick:()=>{y(T(p.formatUnits(s,e.token.decimals),6))},children:t(c,{children:"max"})})]}),window.keplr?i.length>10?t(L,{disabled:Number(w)<=0||Number(w)>Number(p.formatUnits(s,e.token.decimals)),onClick:Y,filled:!0,height:"big",weight:"bold",children:Number(w)<=0?"Enter Amount ":Number(w)>Number(p.formatUnits(s,e.token.decimals))?"Amount Exceeds Max":"IBC IN"}):t(L,{onClick:$,filled:!0,height:"big",weight:"bold",children:"Connect to keplr"}):t(L,{filled:!0,height:"big",weight:"bold",onClick:()=>{window.open("https://www.keplr.app/download","_blank")},children:"install keplr"})]})]})]})},z=({title:e,value:a})=>l("div",{className:"row",children:[l("div",{className:"header",children:[e," :"]}),t("div",{className:"value",children:a})]}),ka=k.div`
  min-height: 36rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0 40px;
  padding-bottom: 2rem;
  gap: 1rem;
  text-align: center;
  background-color: var(--base);

  .expand {
    flex-grow: 2;
  }
  .amount {
    height: 58px;
    background-color: var(--highlights);
    border: 1px solid #2e2d2d;
    border-radius: 4px;
    display: flex;
    align-items: center;
    min-width: 18rem;
    width: 100%;
  }

  .maxBtn {
    height: 100%;
    width: 7rem;
    margin-left: 3px;
    background-color: var(--highlights);

    border: none;
    &:hover {
      background-color: var(--base);
      cursor: pointer;
      p {
        color: grey;
      }
    }

    p {
      color: #999;
    }
  }
  .values {
    background-color: var(--highlights);
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
`,ye="/althea-app/assets/acron-79a28d43.svg",wa="/althea-app/assets/next-4d535f30.svg",va=({transaction:e,altheaAddress:a,txStore:r})=>{const[n,i]=g.useState(!1),[o,s]=g.useState(!1),[d,h]=g.useState(e.defaultNetwork??pe.Cosmos_Hub),[m,u]=g.useState(""),x=pe;return l(Ta,{children:[t(D,{title:"confirmation",open:n,onClose:()=>{i(!1)},children:t(Ae,{title:"CONFIRM",titleIcon:l("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[he({icon:e.token.icon,name:e.token.symbol}),t("img",{src:wa,alt:"arrow"}),he({icon:d.icon,name:d.name})]}),confirmationValues:[{title:"from",value:N(a,6)},{title:"to",value:N(m,6)},{title:"amount",value:T(p.formatUnits(e.amount,e.token.decimals))+" "+e.token.symbol}],extraInputs:[{header:"address",placeholder:d.addressBeginning+"1...",value:m,setValue:u}],disableConfirm:!d.checkAddress(m),onConfirm:()=>{ea(F.chainId,r,d,m,e.token.ibcDenom,e.amount.toString(),{symbol:`${e.token.symbol} to ${d.name}`,amount:p.formatUnits(e.amount,e.token.decimals)})},extraDetails:tt(!1,!0,N(a,6),d.name),onClose:()=>{i(!1)}})}),l("div",{className:"dual-item",style:{width:"120%"},children:[t(c,{size:"text3",align:"left",children:"origin"}),t(c,{type:"title",align:"left",children:e.origin})]}),l("div",{className:"dual-item",children:[t(c,{size:"text3",align:"left",children:"amount"}),t(c,{type:"title",align:"left",children:e.amount+" "+e.symbol})]}),t("div",{className:"dual-item",children:t(L,{height:"normal",weight:"bold",filled:!0,onClick:()=>i(!0),children:"recover"})}),t("div",{className:"dual-item",style:{width:"120%"},children:l("div",{className:"channel-path",children:[t(c,{size:"text3",type:"title",align:"left",children:"channel path :"}),e.channelPath.map((w,y)=>l(E,{children:[y!=0&&t("img",{src:ye,alt:"separator"}),t(c,{size:"text3",type:"title",align:"left",children:w},y)]}))]})}),l("div",{className:"dual-item",children:[t(c,{size:"text3",align:"left",children:"channel id"}),t(c,{type:"title",align:"left",children:d.channelFromAlthea.replace("channel-","")})]}),l("div",{role:"button",tabIndex:0,className:"network-select",onClick:()=>s(!0),children:[l(c,{type:"title",size:"text4",align:"left",children:[d.name,t(D,{title:"select network",open:o,onClose:()=>{s(!1)},children:t(at,{children:t("div",{className:"network-list",children:Object.entries(x).map(([w,y])=>t("div",{role:"button",tabIndex:0,className:"network-item",onClick:()=>{s(!1),h(y)},style:{background:d.chainId===y.chainId?"#1d1d1d":""},children:l("span",{children:[t("img",{src:y.icon}),t(c,{children:y.name})]})},w))})})})]}),t("img",{src:ye,className:"separator",alt:"separator"})]})]})},Ta=k.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 0.8fr;
  grid-template-rows: 1fr 1fr;
  padding: 16px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: var(--base);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  gap: 1rem;
  .channel-path {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    height: 42px;
    background: var(--base)
    border: 1px solid #242424;
    border-radius: 4px;
    width: fit-content;
  }

  .network-select {
    display: flex;
    align-items: center;
    background: var(--base);
    border: 1px solid #242424;
    border-radius: 4px;
    padding: 8px 16px;
    padding-right: 24px;
    height: 42px;
    p {
      width: 100%;
    }
    .separator {
      transform: rotateZ(90deg);
      padding-bottom: 20px;
    }

    &:hover {
      background: #181818;
      cursor: pointer;
    }
  }

  .row {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .dual-item {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .dual-item:last-child {
    max-width: 6rem;
  }
`,at=k.div`
  width: 30rem;
  height: 34rem;
  overflow-y: auto;
  padding: 0 2rem;
  .network-list {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    .network-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      border-radius: 4px;

      padding: 0 14px;
      cursor: pointer;
      img {
        margin: 6px;
        height: 30px;
        width: 30px;
      }
      &:hover {
        background: var(--background-color-start);
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`,Ve=({onSelect:e,items:a,title:r,label:n,selectedId:i,disabled:o})=>{const[s,d]=g.useState(!1),h=a.find(m=>m.id===i);return l(Na,{onClick:()=>{a.length===1||d(!0)},disabled:o,children:[t("img",{src:h==null?void 0:h.icon,height:40,style:{marginRight:8}}),l("div",{className:"token-label",children:[n&&t(c,{style:{color:"#999"},size:"text4",className:"label",bold:!0,align:"left",children:n}),l(c,{type:"title",size:"text4",align:"left",children:[h==null?void 0:h.primaryText,t(D,{title:r,open:s,onClose:()=>{d(!1)},children:t(at,{children:t("div",{className:"network-list",children:a.map(m=>t("div",{role:"button",tabIndex:0,className:"network-item",onClick:()=>{e(m.id),d(!1)},style:{background:(h==null?void 0:h.id)===m.id?"var(--background-color-start)":""},children:l("span",{children:[t("img",{src:m.icon}),t(c,{children:m.primaryText})]})},m.id))})})})]})]}),t("img",{src:ye,className:"separator",alt:"separator"})]})},Na=k.button`
  display: flex;
  align-items: center;
  background: var(--highlights);
  border: 1px solid #242424;
  border-radius: 4px;
  padding: 8px 16px;
  padding-right: 24px;
  height: 62px;

  &:disabled {
    /* opacity: 0.8; */
    cursor: default !important;
    /* filter: grayscale(1); */

    .separator {
      display: none;
    }
  }

  .token-label {
    display: flex;
    flex-direction: column;
    padding: 0 6px;
    padding-right: 5px;
  }
  p {
    width: 100%;
  }
  .separator {
    transform: rotateZ(90deg);
    padding-bottom: 20px;
  }
  transition: background-color 0.2s, border-color 0.3s;
  &:not(:disabled):hover {
    background: var(--hightlights);
    border-color: #525252;

    cursor: pointer;
    .label {
      color: grey !important;
    }
  }
`,Ea="/althea-app/assets/down-196ebb8a.svg",Aa=e=>{const[a,r]=g.useState("");function n(i,o,s){return De(i.toLowerCase(),o.toLowerCase())<=2||De(i.toLowerCase(),s.toLowerCase())<=2||i===""}return l(Ca,{children:[t("div",{className:"modal-title",children:t(c,{type:"text",align:"left",size:"title3",children:"select token"})}),t("div",{className:"search",children:t(fe,{value:a,placeholder:"Token Name",onChange:i=>r(i.target.value)})}),!e.tokens.length&&t("div",{className:"expanded",children:t(c,{size:"text2",children:"no tokens found"})}),t("div",{className:"token-list",children:e.tokens.filter(i=>n(a,i.name,i.symbol)).sort((i,o)=>{var s;return(s=i.balance)!=null&&s.gt((o==null?void 0:o.balance)??0)?-1:1}).map(i=>{var o;return l("div",{role:"button",tabIndex:0,className:"token-item",onClick:()=>{e.onClose(i)},children:[l("span",{children:[t("img",{src:i.icon,alt:i.name}),l(c,{color:"primary",children:[i.isNative&&!i.isOFT?i.nativeSymbol+" / ":"",i.symbol]})]}),i.balance&&t("p",{className:"balance",children:i.isNative&&!i.isOFT?T(p.formatUnits(i.nativeBalance??"0",i.decimals))+" / "+T(p.formatUnits(((o=i.balance)==null?void 0:o.sub((i==null?void 0:i.nativeBalance)??"0"))??"0",i.decimals)):T(p.formatUnits(i.balance,i.decimals))})]},i.address)})})]})},Ca=k.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  max-height: 42rem;
  background-color: var(--base);
  .search {
    margin: 6px;
    padding: 0 14px;

    input {
      max-width: 100%;
      width: 80vw;
    }
  }

  .header {
    padding: 16px;
  }

  .expanded {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 36rem;
    height: 100vmax;

    p {
      color: #888;
    }
  }
  span {
    display: flex;
    align-items: center;
    gap: 6px;
    /* background: red; */
  }
  .balance {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.03em;
    text-align: right;
  }
  .token-list {
    overflow-y: auto;
    padding: 16px;

    /* background: red; */
    .token-item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 60px;
      padding: 0 14px;
      outline: none;
      cursor: pointer;
      img {
        margin: 8px;
        height: 32px;
        width: 32px;
      }

      &:hover {
        background: var(--background-color-start);
        border-radius: 4px;
      }
    }
  }
`,Ia=({allTokens:e,onSelect:a,activeToken:r})=>{const n=g.useRef(null);return t(Sa,{ref:n,modal:!0,lockScroll:!0,closeOnEscape:!0,disabled:e.length===0,trigger:l(Ba,{children:[r&&t("img",{src:r.icon,alt:r.name,height:30,width:30}),t("span",{style:{flex:"2"},children:e.length>0?(r==null?void 0:r.symbol)??"select token":"loading tokens"}),t("img",{src:Ea,alt:""})]}),children:t(Aa,{tokens:e,onClose:i=>{var o;n!=null&&((o=n.current)==null||o.close()),a&&a(i)}})})},Sa=k(At)`
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
    background-color: var(--base);
    border-radius: 4px;
    animation: fadein 0.5s 1;
    min-height: 42rem;
    max-height: 45rem;
    max-width: 30rem;
    width: 100%;
    overflow-y: hidden;
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

    .scrollview {
      max-height: 43rem;
      overflow-y: auto;
      margin-bottom: 1rem;
      height: 100%;
    }
    .modal-title {
      width: 90%;
      border-bottom: 1px solid #222;
      margin: 0 auto;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      min-height: 60px;
    }
    /* width */
  }

  & {
    overflow-y: auto;
  }
`,Ba=k.div`
  padding: 1rem 1.4rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  cursor: pointer;

  /* border: 1px solid black; */
  &:hover {
    /* border: 1px solid var(--primary-color); */
    background-color: var(--base);
  }
`,Oa=k.span`
font-family: 'Macan';
font-size: '12px;
`,Ma=k.span`
font-family: 'MacanFont';
font-size: '12px;
`;function _a(e){const a=e.split(" ");return a.map((r,n)=>{const i=new Set;return l(E,{children:[r.split("").map(o=>!i.has(o.toUpperCase())&&"GANTO".includes(o.toUpperCase())?(i.add(o.toUpperCase()),t(Ma,{children:o})):t(Oa,{children:o})),n<a.length-1&&t(E,{children:" "})]})})}const nt=e=>{var ie,re,Ce,Ie,Se,Be,Oe,Me,_e,Re,Le;const[a,r]=g.useState(!1),[n,i]=g.useState(!1),[o,s]=g.useState(qe),[d,h]=g.useState(""),[m,u]=g.useState(""),x=((ie=e.selectedToken)==null?void 0:ie.balance)??A.from(0),[w,y]=e.selectedToken?sa(P(m,e.selectedToken.decimals),x,e.bridgeIn):["select token",!0],[C,M]=g.useState(A.from(0)),[_,$]=g.useState(!0),Y=Ct(e.fromAddress??"",{chainId:e.fromNetwork.evmChainId}),S=()=>{var f,v;return`${T(p.formatUnits(C,(f=ze(e.fromNetwork.evmChainId).nativeCurrency)==null?void 0:f.decimals))} ${(v=ze(e.fromNetwork.evmChainId).nativeCurrency)==null?void 0:v.symbol}`};async function B(){var f,v;(f=e.selectedToken)!=null&&f.isOFT?M(await Xe(Number(e.fromNetwork.evmChainId),Number((v=e.toNetwork["Layer Zero"])==null?void 0:v.lzChainId),e.selectedToken.address,e.fromAddress??"",P("1",e.selectedToken.decimals),[1,2e5])):(M(A.from(0)),$(!0))}g.useEffect(()=>{B()},[e.selectedToken]),g.useEffect(()=>{var f,v;Y&&C&&((f=e.selectedToken)!=null&&f.isOFT)&&!e.bridgeIn?$(Y.gt(C.add(P(m,((v=e.selectedToken)==null?void 0:v.decimals)??18)))):$(!0)},[m,C]);const Z=`send funds ${e.bridgeIn?"to":"from"} Althea`;return l(Ra,{children:[t(D,{title:"ibc transfer",open:n,onClose:()=>i(!1),children:t(ya,{network:e.fromNetwork.IBC,token:o,altheaAddress:e.toAddress??"",onClose:()=>i(!1)})}),t(D,{title:"confirmation",open:a,onClose:()=>r(!1),children:t(Ae,{title:e.bridgeIn?"bridge in":"bridge out",titleIcon:he({icon:((re=e.selectedToken)==null?void 0:re.icon)??"",name:((Ce=e.selectedToken)==null?void 0:Ce.name)??""}),confirmationValues:[{title:"from",value:N(e.fromAddress,6)},{title:"to",value:e.bridgeIn||e.toNetwork.isEVM?N(e.toAddress,6):N(d,6)},{title:"amount",value:T(m)+" "+((Ie=e.selectedToken)==null?void 0:Ie.symbol)}].concat((Se=e.selectedToken)!=null&&Se.isOFT?[{title:"gas estimation",value:S()}]:[]),extraInputs:e.bridgeIn||e.toNetwork.isEVM?[]:[{header:"address",placeholder:((Be=e.toNetwork.IBC)==null?void 0:Be.addressBeginning)??"",value:d,setValue:h}],disableConfirm:!(e.bridgeIn||(Oe=e.toNetwork.IBC)!=null&&Oe.checkAddress(d)||e.toNetwork.isEVM),onConfirm:()=>{e.selectedToken&&e.tx(P(m,e.selectedToken.decimals),d)},extraDetails:l(E,{children:[((Me=e.selectedToken)==null?void 0:Me.isOFT)&&t(c,{color:"primaryDark",size:"text3",children:"** gas is paid on both the sending and receiving chains so estimates will be higher than other transactions **"}),ca(e.bridgeIn,N(e.fromAddress,6),e.bridgeIn||e.toNetwork.isEVM?N(e.toAddress,6):N(d,6),e.bridgeIn?e.fromNetwork:e.toNetwork)]}),onClose:()=>{r(!1)}})}),t(c,{type:"title",size:"title2",children:_a(Z)}),l("div",{className:"icons-indicator",children:[l("div",{className:"center-element",children:[t("div",{className:"network-selector",children:t(Ve,{title:"select network",label:"Network",items:e.allNetworks.filter(f=>!(f.isAlthea&&e.bridgeIn)).map(f=>({primaryText:f.name,icon:f.icon,id:f.id})),disabled:!e.bridgeIn,onSelect:f=>{const v=e.allNetworks.find(V=>V.id===f);v&&e.selectNetwork(v)},selectedId:e.fromNetwork.id})}),t(de,{text:e.fromAddress??"",onCopy:me,children:l(c,{type:"text",color:"primary",align:"left",size:"text4",style:{cursor:"pointer",color:"#717171"},children:[e.fromAddress?e.fromAddress.slice(0,5)+"..."+e.fromAddress.slice(-4):"retrieving wallet",t("img",{src:ce,style:{height:"18px",position:"relative",top:"5px",left:"4px"}})]})})]}),l("div",{className:"loading",children:[t(fa,{active:!0}),t("div",{style:{height:26}})]}),l("div",{className:"center-element",children:[t(Ve,{title:"select network",label:"Network",items:e.allNetworks.filter(f=>!(f.isAlthea&&!e.bridgeIn)&&f.name!=="Ethereum").map(f=>{let v=f.name;return f.name==="gravity bridge"&&(v="Ethereum / gravity bridge"),{primaryText:v,icon:f.icon,id:f.id}}),disabled:e.bridgeIn,onSelect:f=>{const v=e.allNetworks.find(V=>V.id===f);v&&e.selectNetwork(v)},selectedId:e.toNetwork.id}),t(de,{text:e.toAddress??"",onCopy:me,children:l(c,{type:"text",color:"primary",align:"right",size:"text4",style:{cursor:"pointer",color:"#717171"},children:[e.toAddress?e.toAddress.slice(0,5)+"..."+e.toAddress.slice(-4):"retrieving wallet"," ",t("img",{src:ce,style:{height:"18px",marginLeft:"-6px",position:"relative",top:"5px"}})]})})]})]}),l("div",{className:"amount-box",children:[t("div",{className:"token-box",children:t(Ia,{allTokens:e.allTokens,activeToken:e.selectedToken,onSelect:f=>{if(f!=null&&f.tokenGroups.includes(It.IBC_TOKENS)&&e.bridgeIn){s(f);return}e.selectToken(f)}})}),l("div",{className:"amount",children:[t(fe,{style:{backgroundColor:"transparent",width:"100%",height:"54px"},placeholder:`amount :  ${T(p.formatUnits(x,(_e=e.selectedToken)==null?void 0:_e.decimals),6)} `,value:m&&!isNaN(Number(m))?m.slice(-1)==="."?p.commify(m.slice(0,-1))+".":p.commify(m):m,onChange:f=>{u(f.target.value.replace(/,/g,""))}}),t("button",{className:"maxBtn",onClick:()=>{var f,v,V;Y&&C&&((f=e.selectedToken)!=null&&f.isOFT)&&!e.bridgeIn?u(T(p.formatUnits(x.sub(C.add(p.parseUnits("4",e.selectedToken.decimals))),(v=e.selectedToken)==null?void 0:v.decimals),6)):u(T(p.formatUnits(x,(V=e.selectedToken)==null?void 0:V.decimals),6))},children:t(c,{children:"max"})})]})]}),t(c,{type:"text",size:"text4",align:"center",className:"warning",style:{color:"#ff4141"},children:y&&P(m,((Re=e.selectedToken)==null?void 0:Re.decimals)??0).gt(x)&&`you have exceeded the maximum amount! (current balance: ${T(p.formatUnits(x,(Le=e.selectedToken)==null?void 0:Le.decimals))})`}),t(c,{type:"text",size:"text4",align:"center",className:"warning",style:{color:"#ff4141",marginTop:"-1rem",paddingBottom:"2rem"},hidden:y||_,children:!(_||y)&&`you do not have enough gas to complete the trasaction! (gas estimate: ${S()})`}),t(L,{height:"big",weight:"bold",padding:"lg",filled:!0,disabled:y||!_,onClick:()=>{r(!0)},children:w})]})},Ra=k.div`
  background: var(--base);
  border: 1px solid #3a3a3a;
  box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 600px;
  padding: 1rem 2rem;
  position: relative;

  .maxBtn {
    height: 100%;
    width: 7rem;
    margin-left: 3px;
    background-color: var(--highlights);

    border: none;
    &:hover {
      background-color: var(--base);
      cursor: pointer;
      p {
        color: grey;
      }
    }

    p {
      color: #999;
    }
  }

  .warning {
    width: 100%;
    height: 14px;
    margin: 8px;
  }
  .icons-indicator {
    height: 140px;
    width: 100%;

    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    /* .loading {
      display: flex;
      height: 5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    } */
  }

  .center-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .balance {
    width: 70%;
    opacity: 0.4;
  }
  .token-box {
    height: 58px;
    width: 100%;
    background-color: var(--highlights);
    border: 1px solid #252525;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .address-nodes {
    width: 100%;
  }
  .amount-box {
    display: flex;
    gap: 1rem;
  }
  .amount {
    height: 58px;
    background-color: var(--highlights);
    border: 1px solid #2e2d2d;
    border-radius: 4px;
    display: flex;
    align-items: center;
    min-width: 18rem;
    width: 100%;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > * {
      flex: 1;
      flex-basis: 0;
    }
  }

  .address-nodes {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    /* margin: 0 1rem; */
    padding: 12px;
    .amount-box {
      flex-direction: column;
    }
    .amount {
      min-width: 14rem;
      width: 100%;
    }
  }
`,La=({question:e,answer:a})=>{const[r,n]=g.useState(!1),[i,o]=g.useState(0),s=g.useRef(null);return g.useLayoutEffect(()=>{o(s.current.clientHeight)},[]),l(za,{height:i,expanded:r,onClick:()=>{n(!r)},children:[t("div",{className:"header noselect",ref:s,children:e}),t("div",{className:"content noselect",children:a})]})},za=k.div`
  width: 100%;
  background-color: var(--faq-colors);
  border: 1px solid #505050;
  border-radius: 4px;
  padding: 1rem;
  min-height: ${({height:e})=>e+31+"px"};
  transition: max-height 0.5s;
  max-height: ${({height:e,expanded:a})=>a?"19rem":e+31+"px"};
  overflow-y: hidden;
  padding: ${({expanded:e})=>e?"1rem":"16px"};
  &:hover {
    background-color: var(--base);
    cursor: pointer;
  }
  .header {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.03em;
    color: var(--base-reverse);
  }

  .content {
    transition: margin 0.2s;
    margin-top: ${({expanded:e})=>e?"8px":"16px"};
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.03em;
    color: #878787;
  }
`,ue=({QA:e,title:a})=>l(Fa,{children:[t("div",{style:{width:"100%",paddingTop:"1rem"},children:t(c,{type:"title",align:"left",children:a})}),e.map((r,n)=>t(La,{question:r.question,answer:r.answer},n))]}),Fa=k.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2rem);
  justify-self: flex-start;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
  /* height: 100%; */

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
`,Da=e=>{var a;return l(it,{children:[l("div",{className:"left",children:[t(ue,{title:"instructions",QA:[{question:"Step 1: Send Funds to Althea",answer:l(E,{children:["To start bridging, select the network and token you want to bridge in on the top half of the page. If you are bridging in from Ethereum, this first step usually takes 20 minutes",t("br",{}),t("br",{}),"For more details,"," ",t("a",{role:"button",tabIndex:0,onClick:()=>window.open("https://docs.althea.io/user-guides/bridging-assets/to-althea","_blank"),style:{color:"var(--primary-color)",cursor:"pointer",textDecoration:"underline"},children:"click here"})]})},{question:"Step 2: Complete Queued Transactions",answer:"The 'Complete' button will appear in the bridge queue on the bottom half of this page once the tokens arrive at the Althea native chain. Click the 'Complete' button to move the tokens from the Althea native chain to Althea's EVM"}]}),t(ue,{title:"F.A.Q.",QA:[{question:"How long does it take?",answer:"Sending tokens from Ethereum to the Althea native chain (Step 1) takes 20-30 minutes. IBC transactions usually complete in a few seconds. Completing a queued transaction (Step 2) usually takes a few seconds."},{question:"Where are my tokens?",answer:"If you can't find your tokens, first check to see if the queued transaction is complete at the bottom half of the page. If the transaction is complete, you can click the “Balances” button to see a table of your token balances that are either queued or on Ethereum or Althea."}]})]}),l("div",{className:"center",children:[t(nt,{bridgeIn:!0,allNetworks:e.allNetworks,fromNetwork:e.fromNetwork,toNetwork:e.toNetwork,selectNetwork:r=>e.selectNetwork(r,!0),fromAddress:e.ethAddress,toAddress:(a=e.selectedToken)!=null&&a.isOFT?e.ethAddress:e.altheaAddress,allTokens:e.bridgeTokens,selectedToken:e.selectedToken,selectToken:e.selectToken,tx:async r=>await e.tx(r)}),t(ua,{bridgeIn:!0,transactions:e.step2Transactions,altheaAddress:e.altheaAddress??"",ethAddress:e.ethAddress??"",txStore:e.txStore,chainId:e.chainId})]}),t("div",{className:"right"})]})},it=k.div`
  display: flex;
  background: transparent !important;
  flex-direction: row;
  flex-grow: 1;
  position: relative;
  & > * {
    width: 100%;
  }
  .left {
    height: calc(100% - 1rem);
    overflow-y: auto;
    margin-top: 3rem;
    background-color: transparent;
  }
  .center {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 60px 0;
    flex-grow: 1;
    width: 100%;
    position: relative;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;

    br {
      display: none;
    }
    .center {
      padding: 4rem 1rem 2rem 1rem;
    }

    .right {
      display: none;
    }

    .left {
      background-color: transparent;
      margin-top: 0;
      margin-bottom: 4rem;
    }
  }
`,$a=e=>l(it,{children:[l("div",{className:"left",children:[t("div",{className:"spacer",style:{marginTop:"3rem"}}),t(ue,{title:"instructions",QA:[{question:"Step 1: Send Funds from Althea",answer:l(E,{children:["To bridge out of althea, select the network and token you want to bridge out."," ",t("a",{role:"button",tabIndex:0,onClick:()=>window.open(" https://docs.althea.io/user-guides/bridging-assets/from-althea","_blank"),style:{color:"var(--primary-color)",cursor:"pointer",textDecoration:"underline"},children:"click here to learn more."})]})}]}),t(ue,{title:"F.A.Q.",QA:[{question:"Where are my tokens?",answer:"If you cannot find your token on the receiving network, check on the 'bridge in' page to see if your token is on the native althea network. If the token is shown, click 'complete' on the box to move this token back to Althea's EVM. Then retry bridging out."}]})]}),t("div",{className:"center",children:t(nt,{bridgeIn:!1,allNetworks:e.allNetworks,fromNetwork:e.fromNetwork,toNetwork:e.toNetwork,selectNetwork:a=>e.selectNetwork(a,!1),fromAddress:e.ethAddress,toAddress:e.toNetwork.isEVM?e.ethAddress:e.altheaAddress,allTokens:e.bridgeTokens,selectedToken:e.selectedToken,selectToken:e.selectToken,tx:async(a,r)=>await e.tx(a,r)})}),t("div",{className:"right"})]}),Va="/althea-app/assets/loading-bc7998c4.gif",Ha="/althea-app/assets/bridge-in-31f7aff6.svg",Ua="/althea-app/assets/bridge-out-69393552.svg",He=({tx:e})=>{var a,r;return l(ja,{children:[t("img",{src:e.complete?e.bridgeType=="in"?Ha:Ua:Va,alt:"loading",className:"status-icon"}),l("p",{className:"status",children:["bridge ",e.bridgeType,e.complete?"":" - confirmed in: "+et(e.secondsToComplete)]}),t("h1",{className:"balance",children:T(p.formatUnits(e.amount,((a=e.token)==null?void 0:a.decimals)??18))+" "+((r=e.token)==null?void 0:r.symbol)}),t("a",{href:e.blockExplorerUrl+e.txHash,target:"_blank",rel:"noreferrer",className:"link",onClick:()=>W.events.bridgeActions.viewBlockExplorer("bridge "+e.bridgeType,e.complete?"complete":"loading"),children:"view on explorer"}),t("div",{className:"date",children:new Date(e.timestamp).toLocaleString()})]})},ja=k.div`
  height: 6rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #222;
  color: var(--primary-color);
  padding: 1rem 1rem 1rem 0.2rem;
  display: grid;

  .status-icon {
    grid-area: icon;
    justify-self: center;
    align-self: stretch;
    width: 4rem;
  }
  .status {
    grid-area: status;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.03em;
  }
  .balance {
    grid-area: balance;
    font-family: "Macan";
    font-size: 20px;
    letter-spacing: -0.07em;
  }

  .date {
    grid-area: date;
    font-size: 14px;
    letter-spacing: -0.07em;
    text-align: right;
  }

  .link {
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.03em;
    grid-area: link;
    text-align: right;
  }
  grid-template-areas: "icon status status . . . link" "icon balance balance . . . date ";

  @media (max-width: 1000px) {
    .balance {
      font-size: 15px;
    }
    .date {
      display: none;
    }
  }
`,Ga=e=>{const a=St(),r=e.allTransactions.completeBridgeInTransactions.length+e.allTransactions.bridgeOutTransactions.length+e.allTransactions.pendingBridgeInTransactions.length==0,[n,i]=g.useState(1),o=[{label:"all",value:1},{label:"bridge in",value:2},{label:"bridge out",value:3}],s=n!==3?e.allTransactions.completeBridgeInTransactions:[],d=n!==2?e.allTransactions.bridgeOutTransactions:[],h=[...s,...d],m=n!==3?e.allTransactions.pendingBridgeInTransactions:[];return l(Ya,{children:[" ",r&&t(Ye,{title:"No Transactions",subtext:"Previous bridge transactions will be shown here.",buttonText:"Get Started",bgFilled:!0,onClick:()=>{a("/bridge/walkthrough")},icon:Ze}),!r&&t(jt,{style:{width:"18rem"},children:t(Gt,{className:"react-select-container",styles:{dropdownIndicator:u=>({...u,color:"var(--primary-color)"})},classNamePrefix:"react-select",options:o,onChange:u=>{i((u==null?void 0:u.value)??1)},isSearchable:!1,defaultValue:o[0],placeholder:"view options"})}),l("div",{style:{margin:"0 1rem"},children:[m.length!=0&&l(E,{children:[t(c,{type:"title",color:"primary",size:"title2",children:"In Progress"}),m.sort((u,x)=>new Date(u.timestamp)>new Date(x.timestamp)?-1:1).map(u=>t(He,{tx:u},u.txHash))]}),h.length!=0&&l(E,{children:[t(c,{type:"title",color:"primary",size:"title2",children:"complete"}),h.sort((u,x)=>new Date(u.timestamp)>new Date(x.timestamp)?-1:1).map(u=>t(He,{tx:u},u.txHash))]})]})]})},Ya=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 60px 0;
  max-width: 600px;
  flex-grow: 1;
  background-color: transparent;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`,Za="/althea-app/assets/info-26d2fe2a.svg",Pa=({tokens:e,altheaAddress:a,txStore:r})=>l(Wa,{children:[t(c,{type:"title",size:"title2",children:"IBC Transfers - Recovery"}),l("div",{className:"instruct",children:[t(c,{align:"left",type:"title",children:"Instructions:"}),l("ol",{children:[t("li",{children:"Each token below represents all unidentified ibc tokens on the althea network."}),t("li",{children:"For each token, select the network you would like to ibc transfer the tokens back to (the network where this token came from is selected for you)."}),t("li",{children:"Click recover on the token once you have selected the network you wish."}),t("li",{children:"Confirmation will pop up where you specify the address to send the tokens to."})]})]}),t("div",{className:"list-view",children:e.map(n=>{var s;const i=Bt(n.ibcInfo.denom_trace.base_denom),o=Ot(((s=n.ibcInfo.denom_trace.path.split("/"))==null?void 0:s[1])??"");return n.denom!=="aalthea"&&t(va,{txStore:r,altheaAddress:a,transaction:{origin:(o==null?void 0:o.name)??"unkown",amount:A.from(n.amount),defaultNetwork:o,channelPath:n.ibcInfo.denom_trace.path.replaceAll("transfer/channel-","").split("/").reverse(),symbol:n.ibcInfo.denom_trace.base_denom,token:{...qe,decimals:0,name:(i==null?void 0:i.name)??"unkown",symbol:n.ibcInfo.denom_trace.base_denom,icon:(i==null?void 0:i.icon)??Za}}},n.denom)})})]}),Wa=k.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
  align-items: center;

  .list-view {
    width: 70%;
  }
  .qa {
    width: 70%;
    .header {
      font-size: 18px !important;
    }
    .content {
      font-size: 16px !important;
      line-height: 160%;
    }
  }

  .instruct {
    background: #111111;
    border: 1px solid #2c2c2c;
    border-radius: 4px;
    padding: 22px 18px;
    width: 70%;

    ol {
      list-style-position: inside;
      li {
        margin-top: 3px;
        font-size: 14px;
        color: #d3d3d3;
      }
    }
  }
`,Ka={ETH:{...j,gravityBridgeAddress:Fe.ETHMainnet.GravityBridge,wethAddress:Fe.ETHMainnet.WETH,tokens:{toAlthea:[K.ETHMainnet.USDC,K.ETHMainnet.USDT,K.ETHMainnet.WETH,K.ETHMainnet.WSTETH],fromAlthea:[]}}},I=(e,a)=>({...K.altheaMainnet.ALTHEA,address:e,isNative:a,isOFT:!0}),U={ALTHEA_TEST:{...te,lzChainId:10159,tokens:{toAlthea:[],fromAlthea:[]}},MUMBAI_TEST:{...q,lzChainId:10109,tokens:{toAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!1)],fromAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!0)]}},FANTOM_TEST:{...Q,lzChainId:10112,tokens:{toAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!1)],fromAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!0)]}},GOERLI_TEST:{...J,lzChainId:10121,tokens:{toAlthea:[I("0xd310F11Fb1bdd95568a5dB507a891946ec23642D",!1)],fromAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!0)]}},AVALANCHE_TEST:{...X,lzChainId:10106,tokens:{toAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!1)],fromAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!0)]}},OPTIMISM_TEST:{...ee,lzChainId:10132,tokens:{toAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!1)],fromAlthea:[I("0x6175a322E284E6a5ff5f8BcdBE82d30B047E22d4",!0)]}}},qa={ALTHEA_MAIN:{...F,lzChainId:159,tokens:{toAlthea:[],fromAlthea:[]}},ETH_MAIN:{...j,lzChainId:101,tokens:{toAlthea:[I("0x56C03B8C4FA80Ba37F5A7b60CAAAEF749bB5b220",!1)],fromAlthea:[I("0x56C03B8C4FA80Ba37F5A7b60CAAAEF749bB5b220",!0)]}}};function xe(e){return we(e)?en:Xa}const rt={id:"althea-main",name:F.name,icon:F.icon,isAlthea:!0,isEVM:!0,evmChainId:F.chainId,supportedBridgeInMethods:[],supportedBridgeOutMethods:[],[b.LAYER_ZERO]:qa.ALTHEA_MAIN},Qa={id:"althea-test",name:te.name,icon:te.icon,isAlthea:!0,isEVM:!0,evmChainId:te.chainId,supportedBridgeInMethods:[],supportedBridgeOutMethods:[],[b.LAYER_ZERO]:U.ALTHEA_TEST},Ja=()=>Object.entries(pe).map(([,e])=>({id:e.name,name:e.name,icon:e.icon,isAlthea:!1,isEVM:!1,supportedBridgeInMethods:[b.IBC],supportedBridgeOutMethods:[b.IBC],[b.IBC]:e})),Xa=[rt,{id:j.name,name:j.name,icon:j.icon,isAlthea:!1,isEVM:!0,evmChainId:j.chainId,supportedBridgeInMethods:[b.LAYER_ZERO],supportedBridgeOutMethods:[b.LAYER_ZERO,b.GBRIDGE],[b.GBRIDGE]:Ka.ETH},...Ja()],en=[Qa,{id:q.name,name:q.name,icon:q.icon,isAlthea:!1,isEVM:!0,evmChainId:q.chainId,supportedBridgeInMethods:[b.LAYER_ZERO],supportedBridgeOutMethods:[b.LAYER_ZERO],[b.LAYER_ZERO]:U.MUMBAI_TEST},{id:Q.name,name:Q.name,icon:Q.icon,isAlthea:!1,isEVM:!0,evmChainId:Q.chainId,supportedBridgeInMethods:[b.LAYER_ZERO],supportedBridgeOutMethods:[b.LAYER_ZERO],[b.LAYER_ZERO]:U.FANTOM_TEST},{id:J.name,name:J.name,icon:J.icon,isAlthea:!1,isEVM:!0,evmChainId:J.chainId,supportedBridgeInMethods:[b.LAYER_ZERO],supportedBridgeOutMethods:[b.LAYER_ZERO],[b.LAYER_ZERO]:U.GOERLI_TEST},{id:X.name,name:X.name,icon:X.icon,isAlthea:!1,isEVM:!0,evmChainId:X.chainId,supportedBridgeInMethods:[b.LAYER_ZERO],supportedBridgeOutMethods:[b.LAYER_ZERO],[b.LAYER_ZERO]:U.AVALANCHE_TEST},{id:ee.name,name:ee.name,icon:ee.icon,isAlthea:!1,isEVM:!0,evmChainId:ee.chainId,supportedBridgeInMethods:[b.LAYER_ZERO],supportedBridgeOutMethods:[b.LAYER_ZERO],[b.LAYER_ZERO]:U.OPTIMISM_TEST}],tn=Mt((e,a)=>({allNetworks:xe(),fromNetwork:xe()[1],toNetwork:rt,setNetwork:async(r,n)=>{if(e({selectedToken:void 0,allTokens:[]}),e(n?{fromNetwork:r}:{toNetwork:r}),a().fromNetwork.isEVM){const o=R.getState();e({allTokens:await se(H(a().fromNetwork,a().toNetwork),o.account,Number(a().fromNetwork.evmChainId))})}else e({allTokens:H(a().fromNetwork,a().toNetwork)})},swapNetworks:async()=>{if(e({selectedToken:void 0,allTokens:[],fromNetwork:a().toNetwork,toNetwork:a().fromNetwork}),a().fromNetwork.isEVM){const n=R.getState();e({allTokens:await se(H(a().fromNetwork,a().toNetwork),n.account,Number(a().fromNetwork.evmChainId))})}else e({allTokens:H(a().fromNetwork,a().toNetwork)})},allTokens:[],selectedToken:void 0,setToken:r=>e({selectedToken:r}),syncTokens:async()=>{if(a().fromNetwork.isEVM){const n=await se(H(a().fromNetwork,a().toNetwork),R.getState().account,Number(a().fromNetwork.evmChainId)),i=n.find(o=>{var s;return o.address===((s=a().selectedToken)==null?void 0:s.address)});e({allTokens:n,selectedToken:i})}},onTestnet:!1,chainIdChanged:async(r,n)=>{const i=we(r);if(i!==a().onTestnet){const o=xe(r);let s,d;n?(s=o[1]??oe,d=o[0]??oe):(s=o[0]??oe,d=o[1]??oe);const h=R.getState();e({onTestnet:i,allNetworks:o,fromNetwork:s,toNetwork:d,allTokens:await se(H(s,d),h.account,Number(s.evmChainId)),selectedToken:void 0})}},bridgeTx:async(r,n)=>await qt(We.getState(),R.getState().account,R.getState().altheaAddress,a().fromNetwork,a().toNetwork,a().selectedToken,r,n)}));function H(e,a){var n,i,o;const r=[];if(a.isAlthea)for(const s of e.supportedBridgeOutMethods)r.push(...((i=(n=e[s])==null?void 0:n.tokens)==null?void 0:i.toAlthea)??[]);else if(e.isAlthea)for(const s of a.supportedBridgeInMethods)r.push(...((o=a[s])==null?void 0:o.tokens.fromAlthea)??[]);return r}const sn=()=>{const e=We(),a=R(),r=_t(),n=tn(),i=Rt(),{activateBrowserWallet:o}=Lt(),s=i.unkownIBCTokens.length>0,[d,h]=g.useState("in");g.useEffect(()=>{const u=setTimeout(()=>n.chainIdChanged(Number(a.chainId),d==="in"),1e3);return()=>clearTimeout(u)},[a.chainId,d]),g.useEffect(()=>{const u=setInterval(async()=>{await n.syncTokens()},6e3);return()=>clearInterval(u)},[a.account]),g.useEffect(()=>{const u=setTimeout(async()=>await n.syncTokens(),1e3);return()=>clearTimeout(u)},[a.account,d]);const m=()=>{const u=[];for(let x=0;x<3;x++)u.push(t(Ye,{title:"Wallet is not connected",subtext:"to use bridge you need to connect a wallet through metamask",buttonText:"connnect wallet",bgFilled:!0,onClick:()=>{o(),Dt()},icon:Ze}));return u};return l(an,{children:[t("div",{className:"floating-buttons",children:t(zt,{ethTokens:i.userBridgeInTokens,altheaTokens:i.userBridgeOutTokens,nativeTokens:i.userNativeTokens,allConvertCoinTokens:Ft})}),t(Pt,{names:["bridge in","bridge out","tx history",...s?["recovery"]:[]],onClicks:[()=>{d!=="in"&&(h("in"),n.swapNetworks())},()=>{d!=="out"&&(h("out"),n.swapNetworks())}],panels:a.account?[t(Da,{bridgeTokens:n.allTokens,selectedToken:n.selectedToken,selectToken:n.setToken,allNetworks:n.allNetworks,fromNetwork:n.fromNetwork,toNetwork:n.toNetwork,selectNetwork:n.setNetwork,ethAddress:a.account,altheaAddress:a.altheaAddress,tx:n.bridgeTx,step2Transactions:oa(r.pendingBridgeInTransactions,i.userNativeTokens,!0,Number(a.chainId)),chainId:Number(a.chainId),txStore:e},"in"),t($a,{bridgeTokens:n.allTokens,selectedToken:n.selectedToken,selectToken:n.setToken,allNetworks:n.allNetworks,fromNetwork:n.fromNetwork,toNetwork:n.toNetwork,selectNetwork:n.setNetwork,ethAddress:a.account,altheaAddress:a.altheaAddress,tx:n.bridgeTx,chainId:Number(a.chainId),txStore:e},"out"),t(Ga,{allTransactions:r},"transaction"),...s?[t(Pa,{tokens:i.unkownIBCTokens,altheaAddress:a.altheaAddress,txStore:e},"recovery")]:[]]:m()})]})},an=k.div`
  .diff {
    position: relative;
    top: 4.5rem;
  }

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-self: center;
  position: relative;
  max-width: 1200px;
  .walkthrough {
    position: absolute;
    top: 5rem;
    right: 2rem;
    height: 40px;
    width: 40px;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: black;
    font-size: 20px;
    z-index: 3;
    cursor: pointer;
    &:hover {
      background-color: #13a068;
    }
  }
  .floating-buttons {
    top: 5rem;
    right: 0rem;
    position: absolute;
    display: flex;
    gap: 2rem;
    width: 5rem;
    height: 50rem;
  }

  @media (max-width: 1000px) {
    .walkthrough {
      right: 5rem;
      top: 1.2rem;
    }
    .floating-buttons {
      top: 4.6rem;
    }
  }
`;export{sn as default};
