import{n as O,ap as Te,a as l,j as t,aa as Se,D as P,P as X,B as s,p as S,aK as Oe,T as u,H as x,aY as de,am as Re,U as J,aZ as me,z as Me,u as L,F as $,a_ as Pe,av as I,a$ as Q,a4 as V,G as Ue,aA as Ie,ay as ue,C as F,b0 as pe,ax as Fe,aE as he,aB as fe,aC as ge,f as ze,at as We,aD as be,b1 as D,b2 as Ye,a5 as _e,E as ee,M as $e,Y as De,a3 as Ze,Z as ke,aF as qe}from"./index-cbbd55ca.js";import{E as Ge,R as He,H as Xe,L as je,T as Ke,S as Je,a as te,B as ae,b as Qe,c as Ve}from"./LMTables-473e88f7.js";import{w as re,l as ye,v as H,T as q,m as et,o as tt,p as at,q as rt,j as lt,u as ot,k as nt}from"./handleOnGoingTransactions-09b3e7f5.js";import{b as it,O as st,u as le,g as ct}from"./ongoingTxModal-f1c9819c.js";import{T as dt,a as mt,b as oe,c as ut}from"./TabPanel-754148fe.js";import{H as pt}from"./seo-88f97b61.js";import{i as ht}from"./info-a1d7c1a0.js";import"./down-f11b2b90.js";const ft="/althea-app/assets/metamask-c1af3b1c.svg",gt="/althea-app/assets/walletconnect-c3b699d1.svg",bt="/althea-app/assets/tally-c90fbc06.svg",yt="/althea-app/assets/coinbase-c1b7d03e.svg",wt="/althea-app/assets/ledger-40790ce6.svg",ne=O.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  width: 700px;
  align-items: center;
  & > img {
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  & > p {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    color: #efefef;
    margin-bottom: 3rem;
  }

  .wallet-list {
    border: 1px solid #222;
    width: 90%;
  }
  .wallet-item {
    display: flex;
    cursor: pointer;
    img {
      height: 30px;
      width: 30px;
      margin-right: 2rem;
    }

    padding: 2rem;
    border: 1px solid black;
    border-top: 1px solid #222;

    &:hover {
      background-color: #001a0e;
      border: 1px solid var(--primary-color);
      p {
        color: var(--primary-color);
      }
    }

    p {
      font-size: 20px;
      color: #efefef;
    }
  }

  footer {
    margin-top: 2.4rem;
    letter-spacing: -0.05em;
    color: #efefef67;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 2rem;
    .wallet-list {
      width: 100%;
    }
  }
`,xt=O.div`
  height: 4px;
  width: 200px;
  background-color: #242424;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  &::before {
    content: "";
    display: flex;
    height: 100%;
    width: 80px;
    background-color: var(--primary-color);
    @keyframes slide {
      0% {
        transform: translateX(-80px);
      }
      100% {
        transform: translateX(200px);
      }
    }
    animation: slide 1s linear infinite;
  }
`,vt=({onClose:e})=>{const{account:r,activateBrowserWallet:a,isLoading:i}=Te();return r!==void 0&&e(),i?l(ne,{style:{justifyContent:"center"},children:[t(xt,{}),l("p",{style:{marginTop:"2rem",textAlign:"center"},children:["confirm the transaction",t("br",{})," with metamask"]})]}):l(ne,{children:[t("img",{src:Se,alt:"Canto",height:40}),t("p",{children:"connect wallet to start using althea"}),l("div",{className:"wallet-list",children:[l("div",{className:"wallet-item",onClick:()=>{a()},children:[t("img",{src:ft,alt:"Canto",height:54}),t("p",{children:"metamask"})]}),l("div",{className:"wallet-item",children:[t("img",{src:wt,alt:"Canto",height:54}),t("p",{children:"ledger"})]}),l("div",{className:"wallet-item",children:[t("img",{src:gt,alt:"Canto",height:54}),t("p",{children:"wallet connect"})]}),l("div",{className:"wallet-item",children:[t("img",{src:yt,alt:"Canto",height:54}),t("p",{children:"coinbase wallet"})]}),l("div",{className:"wallet-item",children:[t("img",{src:bt,alt:"Canto",height:54}),t("p",{children:"tally"})]})]}),l("footer",{children:["by connecting, I accept alhtea's ",t("u",{children:"terms of service"})]})]})};function Ct(e,r,a){return e.isZero()?["enter amount",!0]:e.gt(r)?["insufficient balance",!0]:[it(a).short,!1]}function Nt(e,r,a,i,d,o){return e?r.isZero()?a?["100% borrow limit will be reached","your total borrow limit will be used. please repay borrows or increase supply.",!0,!1]:i&&!d?["please confirm you understand the risks","80% or more of your total borrow limit will be used. please make sure you understand the risks of decollateralizing this asset.",!0,!0]:[`disable ${o.toLowerCase()} collateral`,"disabling an asset as collateral will remove it from your borrowing limit, and no longer subject it to liquidation",!1,!1]:[`currently borrowing ${o.toLowerCase()}`,`you cannot uncollateralize an asset that is currently being borrowed. please repay all ${o.toLowerCase()} before uncollateralizing.`,!0,!1]:[`enable ${o.toLowerCase()} collateral`,"enabling an asset as collateral increases your borrowing limit, but subjects the asset to liquidation",!1,!1]}const Lt=O.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #222;
  padding: 2rem 0;
  color: #666;
  width: 100%;
  p {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  span {
    color: #efefef;
  }
`,Bt=e=>{const[r,a]=P.useState(!1),i=re(e.position.totalBorrow,e.position.totalBorrowLimit,e.activeToken.collateralFactor,80,e.activeToken.supplyBalance,e.activeToken.price),d=re(e.position.totalBorrow,e.position.totalBorrowLimit,e.activeToken.collateralFactor,100,e.activeToken.supplyBalance,e.activeToken.price),[o,p,B,N]=Nt(e.decollateralize,e.activeToken.borrowBalance,d,i,r,e.activeToken.data.underlying.symbol);return l(Ge,{children:[t("img",{src:e.activeToken.data.underlying.icon,height:50,style:{marginBottom:"2rem"},alt:"canto"}),t("h2",{children:e.activeToken.data.underlying.name}),t("h2",{children:p}),t("div",{style:{display:"flex",marginTop:"2rem"}}),t(Lt,{style:{marginTop:"0rem",display:"flex",justifyContent:"center"},children:l("div",{children:[t(X,{disabled:B,onClick:()=>ye(e.chainId,e.txStore,e.decollateralize?S.DECOLLATERLIZE:S.COLLATERALIZE,e.activeToken,s.from("0")),children:o}),t("br",{}),N?t("a",{role:"button",tabIndex:0,style:{textDecoration:"underline",cursor:"pointer"},onClick:()=>a(!0),children:"i understand this transaction will put me over 80% of my borrow limit"}):null]})})]})},Y=de,At=({chainId:e,rewardsObj:r,txStore:a})=>l(He,{children:[l("div",{className:"container",children:[t("div",{className:"logo",children:t("img",{src:Oe,height:30})}),t(u,{type:"title",size:"text1",children:"wcanto rewards"}),t(u,{type:"title",size:"title1",children:x(Y(r.accrued,18))}),t(u,{type:"text",size:"text2",bold:!0,children:Number(x(Y(r.accrued,18)))<.001?"Sorry, seems like you have nothing to claim yet!":""})]}),l("div",{className:"balances",children:[l("div",{className:"bal line",children:[t(u,{className:"type",children:"rewards in note value"}),l(u,{className:"value",children:[x(Y(H(r.accrued,r.price))),t(q,{token:"note"})]})]}),l("div",{className:"bal line",children:[t(u,{className:"type",children:"current wallet balance"}),l(u,{className:"value",children:[x(Y(r.walletBalance,18)),t(q,{token:"canto"})]})]}),l("div",{className:"bal line",children:[t(u,{className:"type",children:"unclaimed wcanto balance"}),l(u,{className:"value",children:[Number(x(Y(r.accrued,18))),t(q,{token:"canto"})]})]})]}),t(X,{style:{margin:"2rem"},height:"big",filled:!0,disabled:r.accrued.isZero(),onClick:()=>et(e,a,r.wallet,r.cantroller,r.accrued,r.comptrollerBalance),children:"claim"})]}),Et={data:{symbol:"",name:"",decimals:0,address:"",underlying:{symbol:"",name:"",decimals:0,address:"",isERC20:!1,isLP:!1,icon:"",tokenGroups:[]}},cash:s.from(0),exchangeRate:s.from(0),collateralFactor:s.from(0),price:s.from(0),borrowCap:s.from(0),isListed:!1,liquidity:"",supplyAPY:0,borrowAPY:0,distAPY:0,balanceOf:s.from(0),balanceOfC:s.from(0),borrowBalance:s.from(0),supplyBalance:s.from(0),allowance:s.from(0),inSupplyMarket:!1,inBorrowMarket:!1,supplyBalanceinNote:s.from(0),borrowBalanceinNote:s.from(0),collateral:!1,rewards:s.from(0)},Tt={balanceOf:s.from(0),balanceOfC:s.from(0),borrowBalance:s.from(0),supplyBalance:s.from(0),allowance:s.from(0),inSupplyMarket:!1,inBorrowMarket:!1,supplyBalanceinNote:s.from(0),borrowBalanceinNote:s.from(0),collateral:!1,rewards:s.from(0)},St={totalSupply:s.from(0),totalBorrow:s.from(0),totalBorrowLimit:s.from(0)},Ot={walletBalance:s.from(0),price:s.from(0),accrued:s.from(0),cantroller:"",comptrollerBalance:s.from(0)};var y=(e=>(e.WALLET_CONNECTION="WALLET_CONNECTION",e.LENDING="SUPPLY",e.BORROW="BORROW",e.DEX="DEX",e.COLLATERAL="COLLATERAL",e.DECOLLATERAL="DECOLLATERAL",e.BALANCE="REWARDS",e.NONE="NONE",e))(y||{});const we=Re((e,r)=>({currentModal:"NONE",open:a=>{e({currentModal:a});const i=r().activeToken;J.events.lendingMarketActions.modalInteraction(a,i.data.symbol,!0)},close:()=>{const a=r().activeToken;J.events.lendingMarketActions.modalInteraction(r().currentModal,a.data.symbol,!1),e({currentModal:"NONE"})},isOpen:a=>a===r().currentModal,redirect:a=>{e({currentModal:a})},activeToken:Et,setActiveToken:a=>e({activeToken:a})}));function ie(e,r,a,i){return i.isZero()||a==0?s.from(0):r.mul(a).div(100).sub(e).mul(s.from(10).pow(18)).div(i)}function xe(e,r,a,i){const d=r.mul(i).div(s.from(10).pow(18));return e?a.add(d):a.sub(d)}function Rt(e,r,a,i,d){if(d.isZero())return 0;const o=xe(e,r,a,i);return me(o,d)}const Mt=O.div`
  height: 58px;
  background: #060606;
  border: 1px solid #2e2d2d;
  border-radius: 4px;
  display: flex;
  align-items: center;
  min-width: 18rem;
  width: 100%;

  .maxBtn {
    height: 100%;
    width: 7rem;
    margin-left: 3px;
    background-color: #252525;

    border: none;
    &:hover {
      background-color: #333;
      cursor: pointer;
      p {
        color: white;
      }
    }

    p {
      color: #999;
    }
  }
`,Pt=e=>l(Mt,{className:"amount-field",children:[t(Me,{type:"number",style:{backgroundColor:"transparent",width:"100%",height:"54px"},placeholder:"amount :"+e.balance,value:e.value,onChange:r=>{e.onChange(r.target.value)}}),t("button",{className:"maxBtn",onClick:()=>e.onMax(),children:t(u,{children:e.canDoMax?"max":"80%"})})]}),_=O.div`
  display: flex;
  justify-content: space-between;
  /* border-top: 1px solid #222; */
  padding: 12px 0;
  span {
    color: var(--primary-color);
  }
`,Ut=({borrowLimit:e,icon:r,stringAmount:a,token:i,isBorrowing:d,transactionType:o,borrowBalance:p,userBalance:B,userBalanceType:N})=>{const m=isNaN(Number(a))||!a||Number(a)<=0?s.from(0):L.parseUnits(a,i.data.underlying.decimals),b=L.formatUnits(d?p:e,18),E=e.isZero()?0:me(p,e)*100,w=L.formatUnits(d?xe(o==S.BORROW,m,p,i.price):tt(o==S.SUPPLY,m,i.collateralFactor,i.price,e),18),T=d?Rt(o==S.BORROW,m,p,i.price,e)*100:at(o==S.SUPPLY,m,i.collateralFactor,i.price,e,p)*100;return l(It,{children:[l(_,{children:[l("div",{children:[t("img",{src:r,height:30}),l(u,{type:"title",children:[d?"borrow rate:":"supply apr:",d?l($,{children:[i.borrowAPY.toFixed(2),"%"]}):l($,{children:[i.supplyAPY.toFixed(2),"%"]})]})]}),l("div",{style:{textAlign:"right",visibility:d?"hidden":"visible"},children:[t("img",{src:Pe,height:30}),l(u,{type:"title",children:["dist apr : ",i.distAPY.toFixed(2),"%"]})]})]}),l(_,{children:[t(u,{color:"white",children:"collateral factor:"}),l(u,{type:"title",children:[x(L.formatUnits(i.collateralFactor.mul(100))),"%"]})]}),l(_,{children:[t(u,{color:"white",children:N}),t(u,{type:"title",children:B})]}),l(_,{children:[l(u,{color:"white",children:["borrow ",d?"balance":"limit",":"]}),l(u,{type:"title",children:[I+x(b)+" ",m.gt(0)&&(i.collateral||d)&&Number(w)>0?l(Q.Fragment,{children:[t("span",{children:"->"})," ",I+x(w)]}):null," "]})]}),l(_,{children:[t(u,{color:"white",children:"borrow limit used:"}),l(u,{type:"title",children:[x(E.toString())+"% ",m.gt(0)&&(i.collateral||d)&&T>0?l(Q.Fragment,{children:[t("span",{children:"->"})," ",x(T.toString())+"%"]}):null," "]})]}),t(zt,{progress:i.collateral?T:E})]})},It=O.div`
  background: #0b0b0b;
  border: 1px solid #2f2f2f;
  border-radius: 4px;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    .header {
      color: #9b9b9b;
    }
  }
`,Ft=O.div`
  width: 100%;
  height: 4px;
  background-color: grey;

  .progress {
    background-color: var(--primary-color);
    height: 100%;
  }
`,zt=({progress:e})=>(e>100&&(e=100),t(Ft,{children:t("div",{className:"progress",style:{width:`${e}%`,backgroundColor:`${e>60?e>80?"red":"yellow":"var(--primary-color)"}`}})})),Wt=({position:e,modalType:r,activeToken:a,chainId:i,txStore:d})=>{const o=({txType:C,balance:n,max:c,canDoMax:h,limit80Percent:v})=>{const[g,A]=Ct(V(p,a.data.underlying.decimals),c,C),[z,M]=P.useState(!1);return l(ut,{children:[t(Ut,{transactionType:C,stringAmount:x(p,a.data.underlying.decimals),icon:a.data.underlying.icon,token:a,isBorrowing:r==="repay_borrow",borrowLimit:e.totalBorrowLimit,borrowBalance:e.totalBorrow,userBalanceType:r==="repay_borrow"?"currently borrowing":C===S.SUPPLY?"balance":"supply balance",userBalance:x(L.formatUnits(n,a.data.underlying.decimals))+" "+a.data.underlying.symbol}),t(Pt,{token:a,value:p,canDoMax:h,onMax:()=>{B(L.formatUnits(v?v.lte(0)?"0":v:c,a.data.underlying.decimals)),M(!0)},onChange:W=>{B(W),M(!1)},balance:x(L.formatUnits(n,a.data.underlying.decimals))}),t("div",{style:{marginTop:"16px"},children:l(X,{height:"big",filled:!0,weight:"bold",disabled:A,onClick:()=>ye(i,d,C,a,z&&C===S.REPAY&&a.balanceOf.gt(a.borrowBalance.add(1e3))?s.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"):V(p,a.data.underlying.decimals)),children:[" ",g]})})]})},[p,B]=P.useState(""),[N,m,b]=rt(a.supplyBalance,e.totalBorrow,e.totalBorrowLimit,a.collateralFactor,a.price,a.collateral),E=()=>ie(e.totalBorrow,e.totalBorrowLimit,80,a.price),w=()=>ie(e.totalBorrow,e.totalBorrowLimit,100,a.price),T=()=>a.balanceOf.lt(a.borrowBalance)?a.balanceOf:a.borrowBalance;return l(Yt,{children:[l("div",{className:"title",children:[t("img",{style:{width:"30px",height:"30px"},src:a.data.underlying.icon,alt:a.data.underlying.name}),t(u,{type:"title",size:"title2",children:a.data.underlying.name})]}),r=="supply_withdraw"&&R({name:"Supply",child:o({txType:S.SUPPLY,balance:a.balanceOf,max:a.balanceOf,canDoMax:!0})},{name:"Withdraw",child:o({txType:S.WITHDRAW,balance:a.supplyBalance,max:m,canDoMax:b,limit80Percent:N})}),r=="repay_borrow"&&R({name:"Borrow",child:o({txType:S.BORROW,balance:a.borrowBalance,max:w(),canDoMax:!1,limit80Percent:E()})},{name:"Repay",child:o({txType:S.REPAY,balance:a.borrowBalance,max:T(),canDoMax:!0})})]});function R(C,n){return l(dt,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[l(mt,{className:"tablist",children:[t(oe,{className:"tab",selectedClassName:"tab-selected",children:t(u,{type:"title",children:C.name})}),t(oe,{className:"tab",selectedClassName:"tab-selected",children:t(u,{type:"title",children:n.name})})]}),C.child,n.child]})}},Yt=O.div`
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
  .react-tabs {
    background-color: red;
    display: flex;
  }
  .react-tabs__tab-panel {
    display: flex;
    flex-direction: column;
  }
  .amount-field {
    margin-top: 0rem;
  }
  .selected {
    background: rgba(6, 252, 153, 0.15);
    border-radius: 1px;
    color: var(--primary-color);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`,_t=({isOpen:e,position:r,rewards:a,chainId:i,txStore:d})=>{const o=we();return l(Ue,{open:e,onClose:o.close,children:[t(st,{onClose:o.close}),o.currentModal===y.WALLET_CONNECTION&&t(vt,{onClose:o.close}),(o.currentModal===y.LENDING||o.currentModal===y.BORROW)&&t(Wt,{modalType:o.currentModal===y.LENDING?"supply_withdraw":"repay_borrow",onClose:o.close,position:r,chainId:i,txStore:d,activeToken:o.activeToken}),(o.currentModal===y.COLLATERAL||o.currentModal===y.DECOLLATERAL)&&t(Bt,{position:r,decollateralize:o.currentModal===y.DECOLLATERAL,chainId:i,txStore:d,activeToken:o.activeToken}),o.currentModal===y.BALANCE&&t(At,{chainId:i,rewardsObj:a,txStore:d})]})},G=de,$t=Ye;function Dt(e){var n;const r=Ie(e),a=ue(e),d=86400/5.8,o=365;function p(c){return(Math.pow(Number(c)*d+1,o)-1)*100}function B(c,h,v,g){return h==0||v==0?0:100*(c*(d*o)/h)*(g/v)}const N=new F(a==null?void 0:a.Comptroller,pe),m=new F(a==null?void 0:a.Router,Fe),E=[...((r==null?void 0:r.map(c=>{const h=new F(c.address,he);return[{contract:h,method:"getCash",args:[]},{contract:h,method:"exchangeRateStored",args:[]},{contract:h,method:"supplyRatePerBlock",args:[]},{contract:h,method:"borrowRatePerBlock",args:[]},{contract:N,method:"markets",args:[c.address]},{contract:m,method:"getUnderlyingPrice",args:[c.address]},{contract:N,method:"compSupplySpeeds",args:[c.address]},{contract:N,method:"borrowCaps",args:[c.address]}]}))??[]).flat(),{contract:m,method:"getUnderlyingPrice",args:[(n=r==null?void 0:r.find(c=>c.symbol=="cCANTO"))==null?void 0:n.address]}],w=fe(typeof r==typeof We?E:[],{chainId:ge(e)?e:ze.chainId})??{},T=r?(w.length-1)/r.length:0;let R;const C=(c,h)=>{const v=c.map(A=>A==null?void 0:A.value),g=[];for(let A=0;A<c.length-1;A+=h)g.push(v.slice(A,A+h));return g};return r?T>0&&be(w)?(R=C(w,T),R.map((c,h)=>{var U;const v=r[h].symbol=="cNOTE"||r[h].symbol=="cUSDC"||r[h].symbol=="cUSDT"?$t("1",36-r[h].underlying.decimals):c[5][0],g=c[7][0].eq(s.from("0"))?s.from(Number.MAX_SAFE_INTEGER-1):c[7][0],A=G(s.from(c[0][0]).mul(c[5][0]),36),z=p(Number(D(c[2][0]))),M=p(Number(D(c[3][0]))),W=Number(D(c[6][0])),j=B(W,Number(G(c[0][0],r[h].underlying.decimals)),Number(G(c[5][0],36-r[h].underlying.decimals)),Number(D((U=w[w.length-1])==null?void 0:U.value[0])));return{data:r==null?void 0:r[h],cash:c[0][0],exchangeRate:c[1][0],isListed:c[4][0],collateralFactor:c[4][1],price:v,borrowCap:g,liquidity:A,supplyAPY:z,borrowAPY:M,distAPY:j}})):[]:[]}function Zt(e,r,a){var R,C;const i=ue(a),d=_e(r)??s.from(0),o=new F(i.Comptroller,pe),p=new F(i.WCANTO,ee),N=[...((e==null?void 0:e.map(n=>{const c=new F(n.data.underlying.address,ee),h=new F(n.data.address,he);return[{contract:h,method:"balanceOf",args:[r]},{contract:c,method:"balanceOf",args:[r]},{contract:h,method:"borrowBalanceStored",args:[r]},{contract:c,method:"allowance",args:[r,n.data.address]},{contract:o,method:"checkMembership",args:[r,n.data.address]},{contract:o,method:"compSupplierIndex",args:[n.data.address,r]},{contract:o,method:"compSupplyState",args:[n.data.address]}]}))??[]).flat(),{contract:p,method:"balanceOf",args:[o.address]},{contract:o,method:"compAccrued",args:[r]}],m=fe(e&&ge(a)?N:[])??{},b=e?(m.length-2)/e.length:0;let E;const w=(n,c)=>{const h=n.map(g=>g==null?void 0:g.value),v=[];for(let g=0;g<n.length-2;g+=c)v.push(h.slice(g,g+c));return v};if(b>0&&be(m)){E=w(m,b);const n=E.map((f,U)=>{const ve=e[U].data.symbol==="cCANTO"?d:f[1][0],Z=f[0][0],k=f[2][0],Ce=!Z.isZero(),Ne=!k.isZero(),Le=e[U].data.symbol==="cCANTO"?s.from($e):f[3][0],K=lt(Z,e[U].exchangeRate),Be=H(K,e[U].price),Ae=H(k,e[U].price),Ee=s.from(f[6][0]).sub(f[5][0]).mul(f[0][0]).div(s.from(10).pow(36));return{...e[U],wallet:r,balanceOf:ve,balanceOfC:Z,borrowBalance:k,supplyBalance:K,allowance:Le,inSupplyMarket:Ce,inBorrowMarket:Ne,supplyBalanceinNote:Be,borrowBalanceinNote:Ae,collateral:f[4][0],rewards:Ee}});let c=s.from(0),h=s.from(0),v=s.from(0),g=s.from(0);n==null||n.forEach(f=>{f!=null&&f.inSupplyMarket&&(c=c.add(f.supplyBalanceinNote)),f!=null&&f.inBorrowMarket&&(h=h.add(f.borrowBalanceinNote)),f!=null&&f.collateral&&(v=v.add(f.collateralFactor.mul(f.supplyBalanceinNote).div(s.from(10).pow(18)))),g=g.add(f.rewards)});const A=(R=m[m.length-1])==null?void 0:R.value[0],z=(C=m[m.length-2])==null?void 0:C.value[0],M=n.find(f=>f.data.symbol=="cCANTO"),W={walletBalance:(M==null?void 0:M.balanceOf)??L.parseUnits("0"),price:(M==null?void 0:M.price)??L.parseUnits("0"),accrued:g.add(A),cantroller:i.Comptroller,wallet:r,comptrollerBalance:z};return{userLMTokens:n,position:{totalSupply:c,totalBorrow:h,totalBorrowLimit:v},rewards:W}}return{userLMTokens:e.map(n=>({...n,...Tt})),position:St,rewards:Ot}}const kt=e=>{const r=O.div`
    display: flex;
    margin-top: -2rem;
    border-radius: 4px;
  `,a=O.div`
    text-align: center;
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--primary-color);
    @media (max-width: 1000px) {
      background-color: ${i=>i.active?"rgba(6, 252, 153, 0.1)":"transparent"};
      border-bottom: 4px solid
        ${i=>i.active?"var(--primary-color)":"none"};

      &:hover {
        cursor: pointer;
      }
    }
  `;return l(r,{children:[t(a,{active:e.active,"data-active":!0,onClick:e.onLeftTabClick,children:t(u,{type:"text",size:"text3",bold:!0,children:"supply"})}),t(a,{active:!e.active,onClick:e.onRightTabClick,children:t(u,{type:"text",size:"text3",bold:!0,children:"borrow"})})]})},se=({text:e})=>{const r="______\\/[]{}—=+*^?#!<>",[a,i]=P.useState(B()),[d,o]=P.useState(a);async function p(){for(let m=0;m<e.length;m++)await N(100),o(e.substring(0,m+1)+a.substring(m+1,e.length))}function B(){let m="";for(let b=0;b<e.length;b++)m+=r[Math.floor(Math.random()*r.length)];return m}return P.useEffect(()=>{i(B()),p()},[e]),t($,{children:d});function N(m){return new Promise(b=>setTimeout(b,m))}},qt="/althea-app/assets/reward-sm-0844a1dd.svg",Gt="/althea-app/assets/reward-md-194571ba.svg",Ht="/althea-app/assets/reward-lg-06cc6fea.svg",Xt="/althea-app/assets/reward-xlg-e98db494.svg",ce=e=>l(jt,{...e,children:[t("img",{src:qt}),t("img",{src:Gt}),t("img",{src:Ht}),t("img",{src:Xt})]}),jt=O.div`
  display: flex;
  transform: ${({reverse:e})=>e?"rotateZ(180deg)":""};
  gap: 0.4rem;
  padding: 6px 32px;
  @media (max-width: 1000px) {
    padding: 6px 10px;
  }
  img {
    opacity: 0.2;
    animation: glow 2.4s infinite ease-out;
    &:nth-of-type(1) {
      animation-delay: 1s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.6s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(4) {
      animation-delay: 0s;
    }
  }

  @keyframes glow {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0.2;
    }
    90% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`,Kt=({rewards:e})=>l(Jt,{children:[t(ce,{reverse:!0}),l("div",{children:[t(u,{type:"title",size:"text1",children:"Wcanto Rewards"}),t(u,{type:"title",size:"title1",children:e})]}),t(ce,{})]}),Jt=O.div`
  display: flex;
`,Qt=({borrowBalance:e,borrowLimit:r,supplyBalance:a,rewardBalance:i,isMobile:d,openClaim:o})=>{const p=r.isZero()?s.from(0):e.mul(100).div(r);return t($,{children:l(Xe,{children:[l("div",{className:"bal-title",children:[l(u,{type:"title",align:"left",size:"text1",children:["supply ",d?"":"balance"]}),l("h1",{className:"balance",children:[t("span",{children:I}),t(se,{text:a.isZero()?"000.00":x(L.formatUnits(a,18))})]})]}),l("div",{className:"middle",children:[t(Kt,{rewards:i}),t(De,{weight:"bold",style:{height:"36px",marginTop:"-23px"},onClick:o,children:t(u,{type:"text",children:"claim"})}),t("div",{style:{height:"18px"}}),l(je,{children:[t("div",{className:"bar",children:p.lte(80)?t("div",{className:"green",style:{width:p.toNumber()+"%"}}):t("div",{className:"red",style:{width:p.toNumber()+"%"}})}),l("div",{className:"row",style:{padding:"6px 0"},children:[l("div",{style:{display:"flex",gap:"6px"},children:[t(u,{type:"text",size:"text4",bold:!0,style:{color:"#007245"},children:"limit"}),t(Ze,{trigger:t("img",{style:{cursor:"pointer"},src:ht}),position:"bottom right",on:["hover","focus"],arrow:!0,arrowStyle:{color:"rgba(217, 217, 217, 0.25)",backdropFilter:"blur(35px)"},children:t(Ke,{children:p.lt(80)?l(u,{type:"text",size:"text4",children:["you will be liquidated if you ",t("br",{})," go above your borrow limit",t("br",{}),"Liquidity Cushion:"," ",I+x(L.formatUnits(r.sub(e)))]}):l("p",{children:["you will be liquidated soon",t("br",{})," Liquidity Cushion:"," ",I+x(L.formatUnits(r.sub(e)))]})})})]}),l(u,{type:"text",size:"text4",children:[I+L.formatUnits(r)," ·"," ",p.toNumber(),"%"]})]})]})]}),l("div",{style:{textAlign:"right"},className:"bal-title",children:[l(u,{id:"bor-bal",type:"title",size:"text1",align:"right",children:["borrow ",d?"":"balance"]}),l("h1",{className:"balance",children:[t("span",{children:I}),t(se,{text:e.isZero()?"000.00":x(L.formatUnits(e,18))})]})]})]})})},sa=()=>{const e=ke(),r=le(),{notifications:a}=ot(),[i,d]=P.useState([]);nt(a,i,d);const o=we(),[p,B]=P.useState(window.innerWidth<=1e3),N=Dt(Number(e.chainId)),{userLMTokens:m,position:b,rewards:E}=Zt(N,e.account,Number(e.chainId)),[w,T]=P.useState(!0);function R(){B(window.innerWidth<=1e3)}P.useEffect(()=>(window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)}),[]);const C=le().transactions.filter(n=>n.details.status==="Mining");return l($,{children:[t(pt,{title:"Canto - Lending",description:"Canto Homepage serves De-fi applications",link:"lending"}),l(Je,{as:qe,children:[t(_t,{isOpen:o.currentModal!=y.NONE,position:b,rewards:E,chainId:Number(e.chainId),txStore:r}),t(Qt,{isMobile:p,rewardBalance:E.accrued.isZero()?"000.00":x(L.formatUnits(E.accrued)),borrowBalance:b.totalBorrow,borrowLimit:b.totalBorrowLimit,supplyBalance:b.totalSupply,openClaim:()=>o.open(y.BALANCE)}),p?t(kt,{active:w,onLeftTabClick:()=>{T(!0)},onRightTabClick:()=>{T(!1)}}):null,l("div",{className:"tables-container",children:[l("div",{className:"tables",children:[t(te,{visible:!p||w,supplying:!0,userLMTokens:m.filter(n=>n.inSupplyMarket),onClick:n=>{o.setActiveToken(n),o.open(y.LENDING)},onToggle:n=>{o.setActiveToken(n),n.collateral?o.open(y.DECOLLATERAL):o.open(y.COLLATERAL)}}),t(ae,{visible:!p||!w,borrowing:!0,userLMTokens:m.filter(n=>n.inBorrowMarket),position:b,onClick:n=>{o.setActiveToken(n),o.open(y.BORROW)}})]}),C.length>0&&t("div",{className:"tables",children:t("div",{className:"left",children:t(Qe,{columns:["ongoing transactions"],isLending:!0,children:C.map(n=>{var c;return t(Ve,{icon:((c=n.details.extra)==null?void 0:c.icon)??"",name:n.details.currentMessage??"",status:ct(n.details.status),date:new Date},n.details.txId)})})})}),l("div",{className:"tables",style:{display:"flex"},children:[t(te,{visible:!p||w,supplying:!1,userLMTokens:m.filter(n=>!n.inSupplyMarket),onClick:n=>{o.setActiveToken(n),o.open(y.LENDING)},onToggle:n=>{o.setActiveToken(n),n.collateral?o.open(y.DECOLLATERAL):o.open(y.COLLATERAL)}}),t(ae,{visible:!p||!w,borrowing:!1,userLMTokens:m.filter(n=>!n.inBorrowMarket&&!n.borrowCap.eq(1)),position:b,onClick:n=>{o.setActiveToken(n),o.open(y.BORROW)}})]})]})]})]})};export{sa as default};
