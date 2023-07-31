import{m as a,H as I,E as v,M as L,ak as O,Y as f,a6 as S,au as A,bb as k,bc as N,D as m,j as o,n as M,an as C,a as p,V as P,Z as R,T as g,P as T,F as _,W as D,bd as F,X as H,U as W}from"./index-9b76dcee.js";const z=(n,r,t)=>{const e=r??"token",s=t??"";switch(n){case a.ENABLE:return{short:"enable",long:`enable ${e}`,pending:`enabling ${e}...`,success:`successfully enabled ${e}`,error:`unable to enable ${e}`};case a.CLAIM_REWARDS_LENDING:case a.CLAIM_REWARDS_STAKING:return{short:"claim rewards",long:"claim rewards",pending:"claiming rewards...",success:"successfully claimed rewards",error:"unable to claim rewards"};case a.WRAP:return{short:"wrap",long:`wrap ${s+" "+e}`,pending:`wrapping ${s+" "+e}...`,success:`successfully wrapped ${s+" "+e}`,error:`unable to wrap ${e}`};case a.UNWRAP:return{short:"unwrap",long:`unwrap ${s+" "+e}`,pending:`unwrapping ${s+" "+e}...`,success:`successfully unwrapped ${s+" "+e}`,error:`unable to unwrap ${e}`};case a.SUPPLY:return{short:"supply",long:`supply ${s+" "+e}`,pending:`supplying ${s+" "+e}...`,success:`successfully supplied ${s+" "+e}`,error:`unable to supply ${e}`};case a.BORROW:return{short:"borrow",long:`borrow ${s+" "+e}`,pending:`borrowing ${s+" "+e}...`,success:`successfully borrowed ${s+" "+e}`,error:`unable to borrow ${e}`};case a.REPAY:return{short:"repay",long:`repay ${s+" "+e}`,pending:`repaying ${s+" "+e}...`,success:`successfully repaid ${s+" "+e}`,error:`unable to repay ${e}`};case a.WITHDRAW:return{short:"withdraw",long:`withdraw ${s+" "+e}`,pending:`withdrawing ${s+" "+e}...`,success:`successfully withdrew ${s+" "+e}`,error:`unable to withdraw ${e}`};case a.COLLATERALIZE:return{short:"collateralize",long:`collateralize ${e}`,pending:`collateralizing ${e}...`,success:`successfully collateralized ${e}`,error:`unable to collateralize ${e}`};case a.DECOLLATERLIZE:return{short:"decollateralize",long:`decollateralize ${e}`,pending:`decollateralizing ${e}...`,success:`successfully decollateralized ${e}`,error:`unable to decollateralize ${e}`};case a.DRIP:return{short:"drip",long:"drip WETH",pending:"dripping WETH...",success:"successfully dripped WETH",error:"unable to drip WETH"};case a.ADD_LIQUIDITY:return{short:"add liquidity",long:`add liquidity for ${e}`,pending:`adding liquidity for ${e}...`,success:`successfully added liquidity for ${e}`,error:`unable to add liquidity for ${e}`};case a.REMOVE_LIQUIDITY:return{short:"remove liquidity",long:`remove liquidity for ${e}`,pending:`removing liquidity for ${e}...`,success:`successfully removed liquidity for ${e}`,error:`unable to remove liquidity for ${e}`};case a.VOTING:return{short:"vote",long:`vote ${e}`,pending:`voting ${e}...`,success:`successfully voted ${e}`,error:`unable to vote ${e}`};case a.DELEGATE:return{short:"delegate",long:`delegate ${s+" ALTHEA"} to ${e}`,pending:`delegating ${s+" ALTHEA"} to ${e}...`,success:`successfully delegated ${s+" ALTHEA"} to ${e}`,error:`unable to delegate to ${e}`};case a.UNDELEGATE:return{short:"undelegate",long:`undelegate ${s+" ALTHEA"} from ${e}`,pending:`undelegating ${s+" ALTHEA"} from ${e}...`,success:`successfully ${s+" ALTHEA"} undelegated from ${e}`,error:`unable to undelegate from ${e}`};case a.REDELEGATE:return{short:"redelegate",long:`redelegate ${s+" ALTHEA"} ${e}`,pending:`redelegating ${s+" ALTHEA"} ${e}...`,success:`successfully ${s+" ALTHEA"} redelegated ${e}`,error:`unable to redelegate ${e}`};case a.SEND_TO_COSMOS:return{short:"bridge in",long:`bridge in ${s+" "+e}...`,pending:`bridging ${s+" "+e}...`,success:`successfully bridged ${s+" "+e}`,error:`unable to bridge ${e}`};case a.CONVERT_TO_EVM:return{short:"convert to ERC20",long:`convert ${s+" "+e} to ERC20`,pending:`converting ${s+" "+e}...`,success:`successfully converted ${s+" "+e}`,error:`unable to convert ${e}`};case a.CONVERT_TO_NATIVE:return{short:"convert to native",long:`convert ${s+" "+e} to native`,pending:`converting ${s+" "+e}...`,success:`successfully converted ${s+" "+e}`,error:`unable to convert ${e}`};case a.IBC_OUT:case a.OFT_OUT:return{short:"bridge out",long:`bridge out ${s+" "+e}`,pending:`bridging out ${s+" "+e}...`,success:`successfully bridged out ${s+" "+e}`,error:`unable to bridge out ${e}`};case a.IBC_IN:case a.OFT_IN:return{short:"bridge in",long:`bridge in ${s+" "+e}`,pending:`bridging in ${s+" "+e}...`,success:`successfully bridged in ${s+" "+e}`,error:`unable to bridge in ${e}`};case a.OFT_DEPOSIT:return{short:"deposit",long:`deposit ${s+" "+e} into OFT`,pending:`depositing ${s+" "+e} into OFT...`,success:`successfully deposited ${s+" "+e}`,error:`unable to deposit ${e}`};case a.OFT_WITHDRAW:return{short:"withdraw",long:`withdraw ${s+" "+e} from OFT`,pending:`withdrawing ${s+" "+e} from OFT...`,success:`successfully withdrew ${s+" "+e}`,error:`unable to withdraw ${e}`};default:return{short:"confirm",long:"confirm transaction",pending:"confirming",success:"confirmed",error:"unable to confirm"}}};function Z(n){switch(n){case"None":return"complete";case"Mining":return"ongoing";case"PendingSignature":return"signing";case"Success":return"done";case"Exception":case"Fail":return"error";default:return"complete"}}function U(n,r,t){const e=z(r,t==null?void 0:t.symbol,t!=null&&t.amount?I(t==null?void 0:t.amount):void 0);return{txId:n,txType:r,extra:t,status:"None",currentMessage:`${e.long}`,messages:e}}function Q(n,r,t,e,s,i){return{mustPerform:s.lt(e),chainId:n,txType:a.ENABLE,address:r,abi:v,method:"approve",params:[t,L],value:"0",extraDetails:i}}var V=(n=>(n[n.NONE=0]="NONE",n[n.EVM=1]="EVM",n[n.COSMOS=2]="COSMOS",n))(V||{});const q=O((n,r)=>({transactions:[],txListProps:null,modalOpen:!1,addTransactionList:async(t,e,s=!0)=>(n({transactions:t.map(i=>({tx:i,details:U(r().generateTxId(),i.txType,i.extraDetails)})),txListProps:e}),s?await r().performTxList():!0),setModalOpen:t=>n({modalOpen:t}),generateTxId:()=>Math.ceil(Math.random()*Math.ceil(Math.random()*Date.now())).toString(),updateTx:(t,e)=>{const s=r().transactions.findIndex(l=>l.details.txId===t);if(s===-1)throw new Error("tx not found");const i={tx:{...r().transactions[s].tx},details:{...r().transactions[s].details,...e}};n({transactions:[...r().transactions.slice(0,s),i,...r().transactions.slice(s+1)]})},performEVMTx:async(t,e)=>{if(t.mustPerform===!1)return e&&r().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0;try{const s=f.getState().createContractWithSigner(t.address,t.abi),i=await Promise.all(t.params.map(async u=>u instanceof Function?await u():u)),l=await s[t.method](...i,{value:t.value instanceof Function?await t.value():t.value});return e?(r().updateTx(e.txId,{status:"Mining",hash:l.hash,currentMessage:e.messages.pending,blockExplorerLink:S(t.chainId).blockExplorerUrl+"/tx/"+l.hash}),(await l.wait()).status===1?(r().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0):(r().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error}),!1)):!0}catch(s){return e&&r().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error,errorReason:s.message??""}),!1}},performCosmosTx:async(t,e)=>{if(t.mustPerform===!1)return e&&r().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0;let s;try{return s=await t.tx(...t.params),e?(r().updateTx(e.txId,{status:"Mining",currentMessage:e.messages.pending,hash:s.tx_response.txhash,blockExplorerLink:A(t.chainId).cosmosBlockExplorerUrl+"/txs/"+s.tx_response.txhash}),await k(s.tx_response.txhash,t.chainId)?(r().updateTx(e.txId,{status:"Success",currentMessage:e.messages.success}),!0):(r().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error}),!1)):!0}catch(i){return e&&r().updateTx(e.txId,{status:"Fail",currentMessage:e.messages.error,errorReason:i.message??""}),!1}},performTxList:async t=>{var i,l,u;if(r().setStatus({loading:!1}),Number(f.getState().chainId)!==((i=r().txListProps)==null?void 0:i.chainId)&&!await N((l=r().txListProps)==null?void 0:l.chainId))return!1;const e=r().transactions.findIndex(d=>d.details.txId===t);let s;e===-1?s=r().transactions:s=r().transactions.slice(e);for(const d of s)if(!(((u=r().txListProps)==null?void 0:u.txListMethod)===1?await r().performEVMTx(d.tx,d.details):await r().performCosmosTx(d.tx,d.details)))return!1;return!0},status:{loading:!1},setStatus:t=>{n({status:{loading:t.loading??!1,error:t.error??void 0},modalOpen:!0})}})),B="/althea-app/assets/complete-275be582.svg";function G(n,r){m.useEffect(()=>{function t(e){n.current&&!n.current.contains(e.target)&&r()}return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[n])}function j(n){const r=m.useRef(null);return G(r,n.onClickOutside),o("div",{ref:r,children:n.children})}const X=n=>{var l,u,d,h,$,b,w,x,y;const r=q(),{switchNetwork:t}=C(),e=f(c=>c.chainId),[s,i]=m.useState("None");return m.useEffect(()=>{r.status.error=="public key"&&s=="Success"&&r.performTxList()},[s]),r.modalOpen?o(j,{onClickOutside:()=>{r.setModalOpen(!1),n.onClose()},children:p(Y,{children:[o("div",{role:"button",tabIndex:0,onClick:()=>{r.setModalOpen(!1),n.onClose()},children:o("img",{src:P,style:{position:"absolute",top:"1.4rem",right:"1.4rem",width:"30px",cursor:"pointer"}})}),((l=r.status)==null?void 0:l.error)&&o("div",{className:"network-change",children:((u=r.status)==null?void 0:u.error)=="public key"?o(R,{pubKeySuccess:s,setPubKeySuccess:i}):o(g,{type:"title",children:(d=r.status)==null?void 0:d.error})}),e!=((h=r.txListProps)==null?void 0:h.chainId)&&!(($=r.status)!=null&&$.error)&&((b=r.txListProps)==null?void 0:b.chainId)&&p("div",{className:"network-change",children:[o(g,{type:"title",children:"Oops, you seem to be on a wrong network."}),o(T,{onClick:()=>{var c;t(((c=r.txListProps)==null?void 0:c.chainId)??1)},children:"Switch Network"})]}),r.status.loading&&o("div",{className:"network-change",children:o(g,{type:"title",children:"loading"})}),e==((w=r.txListProps)==null?void 0:w.chainId)&&!((x=r.status)!=null&&x.error)&&!r.status.loading&&p(_,{children:[o(g,{type:"title",size:"title3",className:"title",children:(y=r.txListProps)==null?void 0:y.title}),o("div",{className:"scroll-view",children:r.transactions.map((c,E)=>p("div",{className:c.details.status=="Success"?"tx-item tx-item-complete":"tx-item ",children:[o("div",{className:"tx-icon",children:c.details.status=="None"?o(g,{size:"text1",type:"title",children:E+1}):c.details.status=="Success"?o("img",{src:B}):c.details.status=="Fail"||c.details.status=="Exception"?o("img",{src:D}):o(F,{})}),o(g,{size:"text3",bold:!0,style:{flexGrow:2},children:c.details.currentMessage}),c.details.blockExplorerLink?o(H,{height:"small",onClick:()=>{W.events.loadingModal.blockExplorerOpened(c.details.hash),window.open(c.details.blockExplorerLink,"_blank")},children:o(g,{size:"text3",children:"view"})}):null,c.details.status==="Fail"&&o(T,{weight:"bold",onClick:()=>r.performTxList(c.details.txId),children:"retry"})]},c.details.txId))})]})]})}):null},Y=M.div`
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
`;export{X as O,V as T,Q as _,B as a,z as b,U as c,Z as g,q as u};
