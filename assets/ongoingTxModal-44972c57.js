import{m as a,H as v,E as L,M as O,am as A,_ as f,a8 as k,aU as S,aV as N,aW as M,D as g,j as o,n as C,at as P,ap as R,a as m,V as _,$ as D,T as p,P as E,F,W as z,X as H,Y as W,au as U,U as V}from"./index-37179e77.js";const q=(n,t,r)=>{const e=t??"token",s=r??"";switch(n){case a.ENABLE:return{short:"enable",long:`enable ${e}`,pending:`enabling ${e}...`,success:`successfully enabled ${e}`,error:`unable to enable ${e}`};case a.CLAIM_REWARDS_LENDING:case a.CLAIM_REWARDS_STAKING:return{short:"claim rewards",long:"claim rewards",pending:"claiming rewards...",success:"successfully claimed rewards",error:"unable to claim rewards"};case a.WRAP:return{short:"wrap",long:`wrap ${s+" "+e}`,pending:`wrapping ${s+" "+e}...`,success:`successfully wrapped ${s+" "+e}`,error:`unable to wrap ${e}`};case a.UNWRAP:return{short:"unwrap",long:`unwrap ${s+" "+e}`,pending:`unwrapping ${s+" "+e}...`,success:`successfully unwrapped ${s+" "+e}`,error:`unable to unwrap ${e}`};case a.SUPPLY:return{short:"supply",long:`supply ${s+" "+e}`,pending:`supplying ${s+" "+e}...`,success:`successfully supplied ${s+" "+e}`,error:`unable to supply ${e}`};case a.BORROW:return{short:"borrow",long:`borrow ${s+" "+e}`,pending:`borrowing ${s+" "+e}...`,success:`successfully borrowed ${s+" "+e}`,error:`unable to borrow ${e}`};case a.REPAY:return{short:"repay",long:`repay ${s+" "+e}`,pending:`repaying ${s+" "+e}...`,success:`successfully repaid ${s+" "+e}`,error:`unable to repay ${e}`};case a.WITHDRAW:return{short:"withdraw",long:`withdraw ${s+" "+e}`,pending:`withdrawing ${s+" "+e}...`,success:`successfully withdrew ${s+" "+e}`,error:`unable to withdraw ${e}`};case a.COLLATERALIZE:return{short:"collateralize",long:`collateralize ${e}`,pending:`collateralizing ${e}...`,success:`successfully collateralized ${e}`,error:`unable to collateralize ${e}`};case a.DECOLLATERLIZE:return{short:"decollateralize",long:`decollateralize ${e}`,pending:`decollateralizing ${e}...`,success:`successfully decollateralized ${e}`,error:`unable to decollateralize ${e}`};case a.DRIP:return{short:"drip",long:"drip WETH",pending:"dripping WETH...",success:"successfully dripped WETH",error:"unable to drip WETH"};case a.ADD_LIQUIDITY:return{short:"add liquidity",long:`add liquidity for ${e}`,pending:`adding liquidity for ${e}...`,success:`successfully added liquidity for ${e}`,error:`unable to add liquidity for ${e}`};case a.REMOVE_LIQUIDITY:return{short:"remove liquidity",long:`remove liquidity for ${e}`,pending:`removing liquidity for ${e}...`,success:`successfully removed liquidity for ${e}`,error:`unable to remove liquidity for ${e}`};case a.VOTING:return{short:"vote",long:`vote ${e}`,pending:`voting ${e}...`,success:`successfully voted ${e}`,error:`unable to vote ${e}`};case a.DELEGATE:return{short:"delegate",long:`delegate ${s+" ALTHEA"} to ${e}`,pending:`delegating ${s+" ALTHEA"} to ${e}...`,success:`successfully delegated ${s+" ALTHEA"} to ${e}`,error:`unable to delegate to ${e}`};case a.UNDELEGATE:return{short:"undelegate",long:`undelegate ${s+" ALTHEA"} from ${e}`,pending:`undelegating ${s+" ALTHEA"} from ${e}...`,success:`successfully ${s+" ALTHEA"} undelegated from ${e}`,error:`unable to undelegate from ${e}`};case a.REDELEGATE:return{short:"redelegate",long:`redelegate ${s+" ALTHEA"} ${e}`,pending:`redelegating ${s+" ALTHEA"} ${e}...`,success:`successfully ${s+" ALTHEA"} redelegated ${e}`,error:`unable to redelegate ${e}`};case a.SEND_TO_COSMOS:return{short:"bridge in",long:`bridge in ${s+" "+e}...`,pending:`bridging ${s+" "+e}...`,success:`successfully bridged ${s+" "+e}`,error:`unable to bridge ${e}`};case a.CONVERT_TO_EVM:return{short:"convert to ERC20",long:`convert ${s+" "+e} to ERC20`,pending:`converting ${s+" "+e}...`,success:`successfully converted ${s+" "+e}`,error:`unable to convert ${e}`};case a.CONVERT_TO_NATIVE:return{short:"convert to native",long:`convert ${s+" "+e} to native`,pending:`converting ${s+" "+e}...`,success:`successfully converted ${s+" "+e}`,error:`unable to convert ${e}`};case a.IBC_OUT:case a.OFT_OUT:return{short:"bridge out",long:`bridge out ${s+" "+e}`,pending:`bridging out ${s+" "+e}...`,success:`successfully bridged out ${s+" "+e}`,error:`unable to bridge out ${e}`};case a.IBC_IN:case a.OFT_IN:return{short:"bridge in",long:`bridge in ${s+" "+e}`,pending:`bridging in ${s+" "+e}...`,success:`successfully bridged in ${s+" "+e}`,error:`unable to bridge in ${e}`};case a.OFT_DEPOSIT:return{short:"deposit",long:`deposit ${s+" "+e} into OFT`,pending:`depositing ${s+" "+e} into OFT...`,success:`successfully deposited ${s+" "+e}`,error:`unable to deposit ${e}`};case a.OFT_WITHDRAW:return{short:"withdraw",long:`withdraw ${s+" "+e} from OFT`,pending:`withdrawing ${s+" "+e} from OFT...`,success:`successfully withdrew ${s+" "+e}`,error:`unable to withdraw ${e}`};default:return{short:"confirm",long:"confirm transaction",pending:"confirming",success:"confirmed",error:"unable to confirm"}}};function B(n,t,r){const e=q(t,r==null?void 0:r.symbol,r!=null&&r.amount?v(r==null?void 0:r.amount):void 0);return{txId:n,txType:t,extra:r,status:"None",currentMessage:`${e.long}`,messages:e}}function X(n,t,r,e,s,i){return{mustPerform:s.lt(e),chainId:n,txType:a.ENABLE,address:t,abi:L,method:"approve",params:[r,O],value:"0",extraDetails:i}}var G=(n=>(n[n.NONE=0]="NONE",n[n.EVM=1]="EVM",n[n.COSMOS=2]="COSMOS",n))(G||{});const j=A((n,t)=>({transactions:[],txListProps:null,modalOpen:!1,addTransactionList:async(r,e,s=!0)=>(n({transactions:r.map(i=>({tx:i,details:B(t().generateTxId(),i.txType,i.extraDetails)})),txListProps:e}),s?await t().performTxList():!0),setModalOpen:r=>n({modalOpen:r}),generateTxId:()=>Math.ceil(Math.random()*Math.ceil(Math.random()*Date.now())).toString(),updateTx:(r,e)=>{const s=t().transactions.findIndex(l=>l.details.txId===r);if(s===-1)throw new Error("tx not found");const i={tx:{...t().transactions[s].tx},details:{...t().transactions[s].details,...e}};n({transactions:[...t().transactions.slice(0,s),i,...t().transactions.slice(s+1)]})},performEVMTx:async(r,e)=>{if(r.mustPerform===!1)return e&&t().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0;try{const s=f.getState().createContractWithSigner(r.address,r.abi),i=await Promise.all(r.params.map(async u=>u instanceof Function?await u():u)),l=await s[r.method](...i,{value:r.value instanceof Function?await r.value():r.value});return e?(t().updateTx(e.txId,{status:"Mining",hash:l.hash,currentMessage:e.messages.pending,blockExplorerLink:k(r.chainId).blockExplorerUrl+"/tx/"+l.hash}),(await l.wait()).status===1?(t().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0):(t().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error}),!1)):!0}catch(s){return e&&t().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error,errorReason:s.message??""}),!1}},performCosmosTx:async(r,e)=>{if(r.mustPerform===!1)return e&&t().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0;let s;try{return s=await r.tx(...r.params),e?(t().updateTx(e.txId,{status:"Mining",currentMessage:e.messages.pending,hash:s.tx_response.txhash,blockExplorerLink:S(r.chainId).cosmosBlockExplorerUrl+"/txs/"+s.tx_response.txhash}),await N(s.tx_response.txhash,r.chainId)?(t().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0):(t().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error}),!1)):!0}catch(i){return e&&t().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error,errorReason:i.message??""}),!1}},performTxList:async r=>{var i,l,u;if(t().setStatus({loading:!1}),Number(f.getState().chainId)!==((i=t().txListProps)==null?void 0:i.chainId)&&!await M((l=t().txListProps)==null?void 0:l.chainId))return!1;const e=t().transactions.findIndex(d=>d.details.txId===r);let s;e===-1?s=t().transactions:s=t().transactions.slice(e);for(const d of s)if(!(((u=t().txListProps)==null?void 0:u.txListMethod)===1?await t().performEVMTx(d.tx,d.details):await t().performCosmosTx(d.tx,d.details)))return!1;return!0},status:{loading:!1},setStatus:r=>{n({status:{loading:r.loading??!1,error:r.error??void 0},modalOpen:!0})}}));function Y(n,t){g.useEffect(()=>{function r(e){n.current&&!n.current.contains(e.target)&&t()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[n])}function K(n){const t=g.useRef(null);return Y(t,n.onClickOutside),o("div",{ref:t,children:n.children})}const J=n=>{var u,d,h,$,b,w,x,y,T;const{theme:t}=g.useContext(P),r=j(),{switchNetwork:e}=R(),s=f(c=>c.chainId),[i,l]=g.useState("None");return g.useEffect(()=>{r.status.error=="public key"&&i=="Success"&&r.performTxList()},[i]),r.modalOpen?o(K,{onClickOutside:()=>{r.setModalOpen(!1),n.onClose()},children:m(Q,{children:[o("div",{role:"button",tabIndex:0,onClick:()=>{r.setModalOpen(!1),n.onClose()},children:o("img",{src:_,style:{position:"absolute",top:"1.4rem",right:"1.4rem",width:"30px",cursor:"pointer"}})}),((u=r.status)==null?void 0:u.error)&&o("div",{className:"network-change",children:((d=r.status)==null?void 0:d.error)=="public key"?o(D,{pubKeySuccess:i,setPubKeySuccess:l}):o(p,{type:"title",children:(h=r.status)==null?void 0:h.error})}),s!=(($=r.txListProps)==null?void 0:$.chainId)&&!((b=r.status)!=null&&b.error)&&((w=r.txListProps)==null?void 0:w.chainId)&&m("div",{className:"network-change",children:[o(p,{type:"title",children:"Oops, you seem to be on a wrong network."}),o(E,{onClick:()=>{var c;e(((c=r.txListProps)==null?void 0:c.chainId)??1)},children:"Switch Network"})]}),r.status.loading&&o("div",{className:"network-change",children:o(p,{type:"title",children:"loading"})}),s==((x=r.txListProps)==null?void 0:x.chainId)&&!((y=r.status)!=null&&y.error)&&!r.status.loading&&m(F,{children:[o(p,{type:"title",size:"title3",className:"title",children:(T=r.txListProps)==null?void 0:T.title}),o("div",{className:"scroll-view",children:r.transactions.map((c,I)=>m("div",{className:c.details.status=="Success"?"tx-item tx-item-complete":"tx-item ",children:[o("div",{className:"tx-icon",children:c.details.status=="None"?o(p,{size:"text1",type:"title",children:I+1}):c.details.status=="Success"?o(z,{color:"var(--primary-color)",size:"30px"}):c.details.status=="Fail"||c.details.status=="Exception"?o(H,{color:"var(--primary-color)",size:"30px"}):o(W,{size:"sm"})}),o(p,{size:"text3",bold:!0,style:{flexGrow:2},children:c.details.currentMessage}),c.details.blockExplorerLink?o(U,{theme:t,type:"outlined",size:"sm",onClick:()=>{V.events.loadingModal.blockExplorerOpened(c.details.hash),window.open(c.details.blockExplorerLink,"_blank")},children:o(p,{size:"text3",children:"view"})}):null,c.details.status==="Fail"&&o(E,{weight:"bold",onClick:()=>r.performTxList(c.details.txId),children:"retry"})]},c.details.txId))})]})]})}):null},Q=C.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  background-color: var(--base);
  height: 100%;
  width: 100%;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  .tx-icon {
    height: 50px;
    width: 50px;
    border: 1px solid #333;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
      border: 1px solid #333;
      border-radius: 4px;
    }
  }

  .title {
    margin: 1.3rem;
  }

  .scroll-view {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 4rem;
    gap: 2rem;
    width: 100%;
  }

  .tx-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
    background-color: var(--base);
    border-radius: 4px;
    padding: 1rem;
    gap: 1rem;
  }

  .tx-item-complete {
    opacity: 0.7;
    background-color: var(--base);
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
`;export{J as O,G as T,X as _,B as c,j as u};
