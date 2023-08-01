import{n as R,an as Te,a as l,j as t,a9 as Se,D as U,P as X,B as s,m as S,aS as Re,T as u,H as x,aT as de,ak as Oe,U as V,aU as me,z as Me,u as C,F as D,aV as Ue,at as I,aW as J,a3 as Q,G as Pe,ay as Ie,aw as ue,C as z,aX as he,av as ze,aC as pe,az as fe,aA as ge,d as We,ar as Fe,aB as be,aY as $,aZ as Ye,a4 as _e,E as ee,M as De,X as $e,a2 as Ze,Y as ke,aD as He}from"./index-942959e7.js";import{E as qe,R as Ge,H as Xe,L as je,T as Ke,S as Ve,a as te,B as ae,b as Je,c as Qe}from"./LMTables-36f2731e.js";import{w as re,l as ye,v as G,T as H,m as et,o as tt,p as at,q as rt,j as lt,u as ot,k as it}from"./handleOnGoingTransactions-f55ff880.js";import{b as nt,O as st,u as le,g as ct}from"./ongoingTxModal-ddab4ea6.js";import{T as dt,a as mt,b as oe,c as ut}from"./TabPanel-0e9bc0eb.js";import{H as ht}from"./seo-8560fa4b.js";import{i as pt}from"./info-d3908fe8.js";import"./down-f11b2b90.js";const ft="/althea-app/assets/metamask-c1af3b1c.svg",gt="/althea-app/assets/walletconnect-c3b699d1.svg",bt="/althea-app/assets/tally-c90fbc06.svg",yt="/althea-app/assets/coinbase-c1b7d03e.svg",wt="/althea-app/assets/ledger-40790ce6.svg",ie=R.div`
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
`,xt=R.div`
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
`,vt=({onClose:e})=>{const{account:r,activateBrowserWallet:a,isLoading:n}=Te();return r!==void 0&&e(),n?l(ie,{style:{justifyContent:"center"},children:[t(xt,{}),l("p",{style:{marginTop:"2rem",textAlign:"center"},children:["confirm the transaction",t("br",{})," with metamask"]})]}):l(ie,{children:[t("img",{src:Se,alt:"Althea",height:40}),t("p",{children:"connect wallet to start using althea"}),l("div",{className:"wallet-list",children:[l("div",{className:"wallet-item",onClick:()=>{a()},children:[t("img",{src:ft,alt:"Althea",height:54}),t("p",{children:"metamask"})]}),l("div",{className:"wallet-item",children:[t("img",{src:wt,alt:"Althea",height:54}),t("p",{children:"ledger"})]}),l("div",{className:"wallet-item",children:[t("img",{src:gt,alt:"Althea",height:54}),t("p",{children:"wallet connect"})]}),l("div",{className:"wallet-item",children:[t("img",{src:yt,alt:"Althea",height:54}),t("p",{children:"coinbase wallet"})]}),l("div",{className:"wallet-item",children:[t("img",{src:bt,alt:"Althea",height:54}),t("p",{children:"tally"})]})]}),l("footer",{children:["by connecting, I accept alhtea's ",t("u",{children:"terms of service"})]})]})};function Nt(e,r,a){return e.isZero()?["enter amount",!0]:e.gt(r)?["insufficient balance",!0]:[nt(a).short,!1]}function Lt(e,r,a,n,d,o){return e?r.isZero()?a?["100% borrow limit will be reached","your total borrow limit will be used. please repay borrows or increase supply.",!0,!1]:n&&!d?["please confirm you understand the risks","80% or more of your total borrow limit will be used. please make sure you understand the risks of decollateralizing this asset.",!0,!0]:[`disable ${o.toLowerCase()} collateral`,"disabling an asset as collateral will remove it from your borrowing limit, and no longer subject it to liquidation",!1,!1]:[`currently borrowing ${o.toLowerCase()}`,`you cannot uncollateralize an asset that is currently being borrowed. please repay all ${o.toLowerCase()} before uncollateralizing.`,!0,!1]:[`enable ${o.toLowerCase()} collateral`,"enabling an asset as collateral increases your borrowing limit, but subjects the asset to liquidation",!1,!1]}const Ct=R.div`
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
`,At=e=>{const[r,a]=U.useState(!1),n=re(e.position.totalBorrow,e.position.totalBorrowLimit,e.activeToken.collateralFactor,80,e.activeToken.supplyBalance,e.activeToken.price),d=re(e.position.totalBorrow,e.position.totalBorrowLimit,e.activeToken.collateralFactor,100,e.activeToken.supplyBalance,e.activeToken.price),[o,h,A,L]=Lt(e.decollateralize,e.activeToken.borrowBalance,d,n,r,e.activeToken.data.underlying.symbol);return l(qe,{children:[t("img",{src:e.activeToken.data.underlying.icon,height:50,style:{marginBottom:"2rem"},alt:"althea"}),t("h2",{children:e.activeToken.data.underlying.name}),t("h2",{children:h}),t("div",{style:{display:"flex",marginTop:"2rem"}}),t(Ct,{style:{marginTop:"0rem",display:"flex",justifyContent:"center"},children:l("div",{children:[t(X,{disabled:A,onClick:()=>ye(e.chainId,e.txStore,e.decollateralize?S.DECOLLATERLIZE:S.COLLATERALIZE,e.activeToken,s.from("0")),children:o}),t("br",{}),L?t("a",{role:"button",tabIndex:0,style:{textDecoration:"underline",cursor:"pointer"},onClick:()=>a(!0),children:"i understand this transaction will put me over 80% of my borrow limit"}):null]})})]})},Y=de,Bt=({chainId:e,rewardsObj:r,txStore:a})=>l(Ge,{children:[l("div",{className:"container",children:[t("div",{className:"logo",children:t("img",{src:Re,height:30})}),t(u,{type:"title",size:"text1",children:"walthea rewards"}),t(u,{type:"title",size:"title1",children:x(Y(r.accrued,18))}),t(u,{type:"text",size:"text2",bold:!0,children:Number(x(Y(r.accrued,18)))<.001?"Sorry, seems like you have nothing to claim yet!":""})]}),l("div",{className:"balances",children:[l("div",{className:"bal line",children:[t(u,{className:"type",children:"rewards in note value"}),l(u,{className:"value",children:[x(Y(G(r.accrued,r.price))),t(H,{token:"note"})]})]}),l("div",{className:"bal line",children:[t(u,{className:"type",children:"current wallet balance"}),l(u,{className:"value",children:[x(Y(r.walletBalance,18)),t(H,{token:"althea"})]})]}),l("div",{className:"bal line",children:[t(u,{className:"type",children:"unclaimed walthea balance"}),l(u,{className:"value",children:[Number(x(Y(r.accrued,18))),t(H,{token:"althea"})]})]})]}),t(X,{style:{margin:"2rem"},height:"big",filled:!0,disabled:r.accrued.isZero(),onClick:()=>et(e,a,r.wallet,r.cantroller,r.accrued,r.comptrollerBalance),children:"claim"})]}),Et={data:{symbol:"",name:"",decimals:0,address:"",underlying:{symbol:"",name:"",decimals:0,address:"",isERC20:!1,isLP:!1,icon:"",tokenGroups:[]}},cash:s.from(0),exchangeRate:s.from(0),collateralFactor:s.from(0),price:s.from(0),borrowCap:s.from(0),isListed:!1,liquidity:"",supplyAPY:0,borrowAPY:0,distAPY:0,balanceOf:s.from(0),balanceOfC:s.from(0),borrowBalance:s.from(0),supplyBalance:s.from(0),allowance:s.from(0),inSupplyMarket:!1,inBorrowMarket:!1,supplyBalanceinNote:s.from(0),borrowBalanceinNote:s.from(0),collateral:!1,rewards:s.from(0)},Tt={balanceOf:s.from(0),balanceOfC:s.from(0),borrowBalance:s.from(0),supplyBalance:s.from(0),allowance:s.from(0),inSupplyMarket:!1,inBorrowMarket:!1,supplyBalanceinNote:s.from(0),borrowBalanceinNote:s.from(0),collateral:!1,rewards:s.from(0)},St={totalSupply:s.from(0),totalBorrow:s.from(0),totalBorrowLimit:s.from(0)},Rt={walletBalance:s.from(0),price:s.from(0),accrued:s.from(0),cantroller:"",comptrollerBalance:s.from(0)};var y=(e=>(e.WALLET_CONNECTION="WALLET_CONNECTION",e.LENDING="SUPPLY",e.BORROW="BORROW",e.DEX="DEX",e.COLLATERAL="COLLATERAL",e.DECOLLATERAL="DECOLLATERAL",e.BALANCE="REWARDS",e.NONE="NONE",e))(y||{});const we=Oe((e,r)=>({currentModal:"NONE",open:a=>{e({currentModal:a});const n=r().activeToken;V.events.lendingMarketActions.modalInteraction(a,n.data.symbol,!0)},close:()=>{const a=r().activeToken;V.events.lendingMarketActions.modalInteraction(r().currentModal,a.data.symbol,!1),e({currentModal:"NONE"})},isOpen:a=>a===r().currentModal,redirect:a=>{e({currentModal:a})},activeToken:Et,setActiveToken:a=>e({activeToken:a})}));function ne(e,r,a,n){return n.isZero()||a==0?s.from(0):r.mul(a).div(100).sub(e).mul(s.from(10).pow(18)).div(n)}function xe(e,r,a,n){const d=r.mul(n).div(s.from(10).pow(18));return e?a.add(d):a.sub(d)}function Ot(e,r,a,n,d){if(d.isZero())return 0;const o=xe(e,r,a,n);return me(o,d)}const Mt=R.div`
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
`,Ut=e=>l(Mt,{className:"amount-field",children:[t(Me,{type:"number",style:{backgroundColor:"transparent",width:"100%",height:"54px"},placeholder:"amount :"+e.balance,value:e.value,onChange:r=>{e.onChange(r.target.value)}}),t("button",{className:"maxBtn",onClick:()=>e.onMax(),children:t(u,{children:e.canDoMax?"max":"80%"})})]}),_=R.div`
  display: flex;
  justify-content: space-between;
  /* border-top: 1px solid #222; */
  padding: 12px 0;
  span {
    color: var(--primary-color);
  }
`,Pt=({borrowLimit:e,icon:r,stringAmount:a,token:n,isBorrowing:d,transactionType:o,borrowBalance:h,userBalance:A,userBalanceType:L})=>{const m=isNaN(Number(a))||!a||Number(a)<=0?s.from(0):C.parseUnits(a,n.data.underlying.decimals),b=C.formatUnits(d?h:e,18),E=e.isZero()?0:me(h,e)*100,w=C.formatUnits(d?xe(o==S.BORROW,m,h,n.price):tt(o==S.SUPPLY,m,n.collateralFactor,n.price,e),18),T=d?Ot(o==S.BORROW,m,h,n.price,e)*100:at(o==S.SUPPLY,m,n.collateralFactor,n.price,e,h)*100;return l(It,{children:[l(_,{children:[l("div",{children:[t("img",{src:r,height:30}),l(u,{type:"title",children:[d?"borrow rate:":"supply apr:",d?l(D,{children:[n.borrowAPY.toFixed(2),"%"]}):l(D,{children:[n.supplyAPY.toFixed(2),"%"]})]})]}),l("div",{style:{textAlign:"right",visibility:d?"hidden":"visible"},children:[t("img",{src:Ue,height:30}),l(u,{type:"title",children:["dist apr : ",n.distAPY.toFixed(2),"%"]})]})]}),l(_,{children:[t(u,{color:"white",children:"collateral factor:"}),l(u,{type:"title",children:[x(C.formatUnits(n.collateralFactor.mul(100))),"%"]})]}),l(_,{children:[t(u,{color:"white",children:L}),t(u,{type:"title",children:A})]}),l(_,{children:[l(u,{color:"white",children:["borrow ",d?"balance":"limit",":"]}),l(u,{type:"title",children:[I+x(b)+" ",m.gt(0)&&(n.collateral||d)&&Number(w)>0?l(J.Fragment,{children:[t("span",{children:"->"})," ",I+x(w)]}):null," "]})]}),l(_,{children:[t(u,{color:"white",children:"borrow limit used:"}),l(u,{type:"title",children:[x(E.toString())+"% ",m.gt(0)&&(n.collateral||d)&&T>0?l(J.Fragment,{children:[t("span",{children:"->"})," ",x(T.toString())+"%"]}):null," "]})]}),t(Wt,{progress:n.collateral?T:E})]})},It=R.div`
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
`,zt=R.div`
  width: 100%;
  height: 4px;
  background-color: grey;

  .progress {
    background-color: var(--primary-color);
    height: 100%;
  }
`,Wt=({progress:e})=>(e>100&&(e=100),t(zt,{children:t("div",{className:"progress",style:{width:`${e}%`,backgroundColor:`${e>60?e>80?"red":"yellow":"var(--primary-color)"}`}})})),Ft=({position:e,modalType:r,activeToken:a,chainId:n,txStore:d})=>{const o=({txType:N,balance:i,max:c,canDoMax:p,limit80Percent:v})=>{const[g,B]=Nt(Q(h,a.data.underlying.decimals),c,N),[W,M]=U.useState(!1);return l(ut,{children:[t(Pt,{transactionType:N,stringAmount:x(h,a.data.underlying.decimals),icon:a.data.underlying.icon,token:a,isBorrowing:r==="repay_borrow",borrowLimit:e.totalBorrowLimit,borrowBalance:e.totalBorrow,userBalanceType:r==="repay_borrow"?"currently borrowing":N===S.SUPPLY?"balance":"supply balance",userBalance:x(C.formatUnits(i,a.data.underlying.decimals))+" "+a.data.underlying.symbol}),t(Ut,{token:a,value:h,canDoMax:p,onMax:()=>{A(C.formatUnits(v?v.lte(0)?"0":v:c,a.data.underlying.decimals)),M(!0)},onChange:F=>{A(F),M(!1)},balance:x(C.formatUnits(i,a.data.underlying.decimals))}),t("div",{style:{marginTop:"16px"},children:l(X,{height:"big",filled:!0,weight:"bold",disabled:B,onClick:()=>ye(n,d,N,a,W&&N===S.REPAY&&a.balanceOf.gt(a.borrowBalance.add(1e3))?s.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"):Q(h,a.data.underlying.decimals)),children:[" ",g]})})]})},[h,A]=U.useState(""),[L,m,b]=rt(a.supplyBalance,e.totalBorrow,e.totalBorrowLimit,a.collateralFactor,a.price,a.collateral),E=()=>ne(e.totalBorrow,e.totalBorrowLimit,80,a.price),w=()=>ne(e.totalBorrow,e.totalBorrowLimit,100,a.price),T=()=>a.balanceOf.lt(a.borrowBalance)?a.balanceOf:a.borrowBalance;return l(Yt,{children:[l("div",{className:"title",children:[t("img",{style:{width:"30px",height:"30px"},src:a.data.underlying.icon,alt:a.data.underlying.name}),t(u,{type:"title",size:"title2",children:a.data.underlying.name})]}),r=="supply_withdraw"&&O({name:"Supply",child:o({txType:S.SUPPLY,balance:a.balanceOf,max:a.balanceOf,canDoMax:!0})},{name:"Withdraw",child:o({txType:S.WITHDRAW,balance:a.supplyBalance,max:m,canDoMax:b,limit80Percent:L})}),r=="repay_borrow"&&O({name:"Borrow",child:o({txType:S.BORROW,balance:a.borrowBalance,max:w(),canDoMax:!1,limit80Percent:E()})},{name:"Repay",child:o({txType:S.REPAY,balance:a.borrowBalance,max:T(),canDoMax:!0})})]});function O(N,i){return l(dt,{disabledTabClassName:"disabled",selectedTabClassName:"selected",className:"tabs",children:[l(mt,{className:"tablist",children:[t(oe,{className:"tab",selectedClassName:"tab-selected",children:t(u,{type:"title",children:N.name})}),t(oe,{className:"tab",selectedClassName:"tab-selected",children:t(u,{type:"title",children:i.name})})]}),N.child,i.child]})}},Yt=R.div`
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
`,_t=({isOpen:e,position:r,rewards:a,chainId:n,txStore:d})=>{const o=we();return l(Pe,{open:e,onClose:o.close,children:[t(st,{onClose:o.close}),o.currentModal===y.WALLET_CONNECTION&&t(vt,{onClose:o.close}),(o.currentModal===y.LENDING||o.currentModal===y.BORROW)&&t(Ft,{modalType:o.currentModal===y.LENDING?"supply_withdraw":"repay_borrow",onClose:o.close,position:r,chainId:n,txStore:d,activeToken:o.activeToken}),(o.currentModal===y.COLLATERAL||o.currentModal===y.DECOLLATERAL)&&t(At,{position:r,decollateralize:o.currentModal===y.DECOLLATERAL,chainId:n,txStore:d,activeToken:o.activeToken}),o.currentModal===y.BALANCE&&t(Bt,{chainId:n,rewardsObj:a,txStore:d})]})},q=de,Dt=Ye;function $t(e){var i;const r=Ie(e),a=ue(e),d=86400/5.8,o=365;function h(c){return(Math.pow(Number(c)*d+1,o)-1)*100}function A(c,p,v,g){return p==0||v==0?0:100*(c*(d*o)/p)*(g/v)}const L=new z(a==null?void 0:a.Comptroller,he),m=new z(a==null?void 0:a.Router,ze),E=[...((r==null?void 0:r.map(c=>{const p=new z(c.address,pe);return[{contract:p,method:"getCash",args:[]},{contract:p,method:"exchangeRateStored",args:[]},{contract:p,method:"supplyRatePerBlock",args:[]},{contract:p,method:"borrowRatePerBlock",args:[]},{contract:L,method:"markets",args:[c.address]},{contract:m,method:"getUnderlyingPrice",args:[c.address]},{contract:L,method:"compSupplySpeeds",args:[c.address]},{contract:L,method:"borrowCaps",args:[c.address]}]}))??[]).flat(),{contract:m,method:"getUnderlyingPrice",args:[(i=r==null?void 0:r.find(c=>c.symbol=="cALTHEA"))==null?void 0:i.address]}],w=fe(typeof r==typeof Fe?E:[],{chainId:ge(e)?e:We.chainId})??{},T=r?(w.length-1)/r.length:0;let O;const N=(c,p)=>{const v=c.map(B=>B==null?void 0:B.value),g=[];for(let B=0;B<c.length-1;B+=p)g.push(v.slice(B,B+p));return g};return r?T>0&&be(w)?(O=N(w,T),O.map((c,p)=>{var P;const v=r[p].symbol=="cNOTE"||r[p].symbol=="cUSDC"||r[p].symbol=="cUSDT"?Dt("1",36-r[p].underlying.decimals):c[5][0],g=c[7][0].eq(s.from("0"))?s.from(Number.MAX_SAFE_INTEGER-1):c[7][0],B=q(s.from(c[0][0]).mul(c[5][0]),36),W=h(Number($(c[2][0]))),M=h(Number($(c[3][0]))),F=Number($(c[6][0])),j=A(F,Number(q(c[0][0],r[p].underlying.decimals)),Number(q(c[5][0],36-r[p].underlying.decimals)),Number($((P=w[w.length-1])==null?void 0:P.value[0])));return{data:r==null?void 0:r[p],cash:c[0][0],exchangeRate:c[1][0],isListed:c[4][0],collateralFactor:c[4][1],price:v,borrowCap:g,liquidity:B,supplyAPY:W,borrowAPY:M,distAPY:j}})):[]:[]}function Zt(e,r,a){var O,N;const n=ue(a),d=_e(r)??s.from(0),o=new z(n.Comptroller,he),h=new z(n.WALTHEA,ee),L=[...((e==null?void 0:e.map(i=>{const c=new z(i.data.underlying.address,ee),p=new z(i.data.address,pe);return[{contract:p,method:"balanceOf",args:[r]},{contract:c,method:"balanceOf",args:[r]},{contract:p,method:"borrowBalanceStored",args:[r]},{contract:c,method:"allowance",args:[r,i.data.address]},{contract:o,method:"checkMembership",args:[r,i.data.address]},{contract:o,method:"compSupplierIndex",args:[i.data.address,r]},{contract:o,method:"compSupplyState",args:[i.data.address]}]}))??[]).flat(),{contract:h,method:"balanceOf",args:[o.address]},{contract:o,method:"compAccrued",args:[r]}],m=fe(e&&ge(a)?L:[])??{},b=e?(m.length-2)/e.length:0;let E;const w=(i,c)=>{const p=i.map(g=>g==null?void 0:g.value),v=[];for(let g=0;g<i.length-2;g+=c)v.push(p.slice(g,g+c));return v};if(b>0&&be(m)){E=w(m,b);const i=E.map((f,P)=>{const ve=e[P].data.symbol==="cALTHEA"?d:f[1][0],Z=f[0][0],k=f[2][0],Ne=!Z.isZero(),Le=!k.isZero(),Ce=e[P].data.symbol==="cALTHEA"?s.from(De):f[3][0],K=lt(Z,e[P].exchangeRate),Ae=G(K,e[P].price),Be=G(k,e[P].price),Ee=s.from(f[6][0]).sub(f[5][0]).mul(f[0][0]).div(s.from(10).pow(36));return{...e[P],wallet:r,balanceOf:ve,balanceOfC:Z,borrowBalance:k,supplyBalance:K,allowance:Ce,inSupplyMarket:Ne,inBorrowMarket:Le,supplyBalanceinNote:Ae,borrowBalanceinNote:Be,collateral:f[4][0],rewards:Ee}});let c=s.from(0),p=s.from(0),v=s.from(0),g=s.from(0);i==null||i.forEach(f=>{f!=null&&f.inSupplyMarket&&(c=c.add(f.supplyBalanceinNote)),f!=null&&f.inBorrowMarket&&(p=p.add(f.borrowBalanceinNote)),f!=null&&f.collateral&&(v=v.add(f.collateralFactor.mul(f.supplyBalanceinNote).div(s.from(10).pow(18)))),g=g.add(f.rewards)});const B=(O=m[m.length-1])==null?void 0:O.value[0],W=(N=m[m.length-2])==null?void 0:N.value[0],M=i.find(f=>f.data.symbol=="cALTHEA"),F={walletBalance:(M==null?void 0:M.balanceOf)??C.parseUnits("0"),price:(M==null?void 0:M.price)??C.parseUnits("0"),accrued:g.add(B),cantroller:n.Comptroller,wallet:r,comptrollerBalance:W};return{userLMTokens:i,position:{totalSupply:c,totalBorrow:p,totalBorrowLimit:v},rewards:F}}return{userLMTokens:e.map(i=>({...i,...Tt})),position:St,rewards:Rt}}const kt=e=>{const r=R.div`
    display: flex;
    margin-top: -2rem;
    border-radius: 4px;
  `,a=R.div`
    text-align: center;
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--primary-color);
    @media (max-width: 1000px) {
      background-color: ${n=>n.active?"rgba(6, 252, 153, 0.1)":"transparent"};
      border-bottom: 4px solid
        ${n=>n.active?"var(--primary-color)":"none"};

      &:hover {
        cursor: pointer;
      }
    }
  `;return l(r,{children:[t(a,{active:e.active,"data-active":!0,onClick:e.onLeftTabClick,children:t(u,{type:"text",size:"text3",bold:!0,children:"supply"})}),t(a,{active:!e.active,onClick:e.onRightTabClick,children:t(u,{type:"text",size:"text3",bold:!0,children:"borrow"})})]})},se=({text:e})=>{const r="______\\/[]{}—=+*^?#!<>",[a,n]=U.useState(A()),[d,o]=U.useState(a);async function h(){for(let m=0;m<e.length;m++)await L(100),o(e.substring(0,m+1)+a.substring(m+1,e.length))}function A(){let m="";for(let b=0;b<e.length;b++)m+=r[Math.floor(Math.random()*r.length)];return m}return U.useEffect(()=>{n(A()),h()},[e]),t(D,{children:d});function L(m){return new Promise(b=>setTimeout(b,m))}},Ht="/althea-app/assets/reward-sm-cc450315.svg",qt="/althea-app/assets/reward-md-5f13899c.svg",Gt="/althea-app/assets/reward-lg-33a10571.svg",Xt="/althea-app/assets/reward-xlg-22951562.svg",ce=e=>l(jt,{...e,children:[t("img",{src:Ht}),t("img",{src:qt}),t("img",{src:Gt}),t("img",{src:Xt})]}),jt=R.div`
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
`,Kt=({rewards:e})=>l(Vt,{children:[t(ce,{reverse:!0}),l("div",{children:[t(u,{type:"title",size:"text1",children:"Walthea Rewards"}),t(u,{type:"title",size:"title1",children:e})]}),t(ce,{})]}),Vt=R.div`
  display: flex;
`,Jt=({borrowBalance:e,borrowLimit:r,supplyBalance:a,rewardBalance:n,isMobile:d,openClaim:o})=>{const h=r.isZero()?s.from(0):e.mul(100).div(r);return t(D,{children:l(Xe,{children:[l("div",{className:"bal-title",children:[l(u,{type:"title",align:"left",size:"text1",children:["supply ",d?"":"balance"]}),l("h1",{className:"balance",children:[t("span",{children:I}),t(se,{text:a.isZero()?"000.00":x(C.formatUnits(a,18))})]})]}),l("div",{className:"middle",children:[t(Kt,{rewards:n}),t($e,{weight:"bold",style:{height:"36px",marginTop:"-23px"},onClick:o,children:t(u,{type:"text",children:"claim"})}),t("div",{style:{height:"18px"}}),l(je,{children:[t("div",{className:"bar",children:h.lte(80)?t("div",{className:"green",style:{width:h.toNumber()+"%"}}):t("div",{className:"red",style:{width:h.toNumber()+"%"}})}),l("div",{className:"row",style:{padding:"6px 0"},children:[l("div",{style:{display:"flex",gap:"6px"},children:[t(u,{type:"text",size:"text4",bold:!0,style:{color:"#007245"},children:"limit"}),t(Ze,{trigger:t("img",{style:{cursor:"pointer"},src:pt}),position:"bottom right",on:["hover","focus"],arrow:!0,arrowStyle:{color:"rgba(217, 217, 217, 0.25)",backdropFilter:"blur(35px)"},children:t(Ke,{children:h.lt(80)?l(u,{type:"text",size:"text4",children:["you will be liquidated if you ",t("br",{})," go above your borrow limit",t("br",{}),"Liquidity Cushion:"," ",I+x(C.formatUnits(r.sub(e)))]}):l("p",{children:["you will be liquidated soon",t("br",{})," Liquidity Cushion:"," ",I+x(C.formatUnits(r.sub(e)))]})})})]}),l(u,{type:"text",size:"text4",children:[I+C.formatUnits(r)," ·"," ",h.toNumber(),"%"]})]})]})]}),l("div",{style:{textAlign:"right"},className:"bal-title",children:[l(u,{id:"bor-bal",type:"title",size:"text1",align:"right",children:["borrow ",d?"":"balance"]}),l("h1",{className:"balance",children:[t("span",{children:I}),t(se,{text:e.isZero()?"000.00":x(C.formatUnits(e,18))})]})]})]})})},sa=()=>{const e=ke(),r=le(),{notifications:a}=ot(),[n,d]=U.useState([]);it(a,n,d);const o=we(),[h,A]=U.useState(window.innerWidth<=1e3),L=$t(Number(e.chainId)),{userLMTokens:m,position:b,rewards:E}=Zt(L,e.account,Number(e.chainId)),[w,T]=U.useState(!0);function O(){A(window.innerWidth<=1e3)}U.useEffect(()=>(window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O)}),[]);const N=le().transactions.filter(i=>i.details.status==="Mining");return l(D,{children:[t(ht,{title:"Althea - Lending",description:"Althea Homepage serves De-fi applications",link:"lending"}),l(Ve,{as:He,children:[t(_t,{isOpen:o.currentModal!=y.NONE,position:b,rewards:E,chainId:Number(e.chainId),txStore:r}),t(Jt,{isMobile:h,rewardBalance:E.accrued.isZero()?"000.00":x(C.formatUnits(E.accrued)),borrowBalance:b.totalBorrow,borrowLimit:b.totalBorrowLimit,supplyBalance:b.totalSupply,openClaim:()=>o.open(y.BALANCE)}),h?t(kt,{active:w,onLeftTabClick:()=>{T(!0)},onRightTabClick:()=>{T(!1)}}):null,l("div",{className:"tables-container",children:[l("div",{className:"tables",children:[t(te,{visible:!h||w,supplying:!0,userLMTokens:m.filter(i=>i.inSupplyMarket),onClick:i=>{o.setActiveToken(i),o.open(y.LENDING)},onToggle:i=>{o.setActiveToken(i),i.collateral?o.open(y.DECOLLATERAL):o.open(y.COLLATERAL)}}),t(ae,{visible:!h||!w,borrowing:!0,userLMTokens:m.filter(i=>i.inBorrowMarket),position:b,onClick:i=>{o.setActiveToken(i),o.open(y.BORROW)}})]}),N.length>0&&t("div",{className:"tables",children:t("div",{className:"left",children:t(Je,{columns:["ongoing transactions"],isLending:!0,children:N.map(i=>{var c;return t(Qe,{icon:((c=i.details.extra)==null?void 0:c.icon)??"",name:i.details.currentMessage??"",status:ct(i.details.status),date:new Date},i.details.txId)})})})}),l("div",{className:"tables",style:{display:"flex"},children:[t(te,{visible:!h||w,supplying:!1,userLMTokens:m.filter(i=>!i.inSupplyMarket),onClick:i=>{o.setActiveToken(i),o.open(y.LENDING)},onToggle:i=>{o.setActiveToken(i),i.collateral?o.open(y.DECOLLATERAL):o.open(y.COLLATERAL)}}),t(ae,{visible:!h||!w,borrowing:!1,userLMTokens:m.filter(i=>!i.inBorrowMarket&&!i.borrowCap.eq(1)),position:b,onClick:i=>{o.setActiveToken(i),o.open(y.BORROW)}})]})]})]})]})};export{sa as default};
