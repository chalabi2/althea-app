import{a as d,e as E,b as A,d as z,f as W,V as P,q as Z,P as I,c as k}from"./Styled-43726046.js";import{n as C,D as p,a as r,j as e,b8 as K,V as Q,T as f,P as U,b9 as S,H as u,u as h,k as O,B as j,ba as J,bb as X,bc as tt,bd as et,be as ot,h as rt,bf as nt,p as at,Z as st,bg as it,U as lt,F as V,aK as ct,a3 as dt}from"./index-349b3f63.js";import{j as ut,d as pt}from"./transactionHelpers-d26162be.js";import{T as ht,u as mt,O as gt}from"./ongoingTxModal-77162024.js";import"./moment-9d68d5ae.js";const w={quorum:"33.4%",threshold:"50%",veto:"33.4%"},vt=C.div`
  background-color: #040404;
  height: min-content;
  width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem 2rem 2rem;
  overflow-y: auto;
  gap: 1rem;

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .grp {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .selected {
    background: rgba(0, 119, 255, 0.25);
    border-radius: 1px;
    color: var(--primary-color);
  }

  .voteForm {
    border: 1px solid #222;
    padding: 1rem;
    width: 100%;
    div {
      padding: 2rem;
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    height: 100vh;
    width: 100%;
  }
`,ft=({proposal:t,currentVote:i,onVote:c,onClose:n})=>{const[o,a]=p.useState(i??d.NONE),s=l=>{a(l)};return r(vt,{children:[e("div",{className:"close",children:e(K,{src:Q,alt:"close",height:30,onClick:n})}),r(f,{type:"title",size:"title3",children:["your vote for #",t.proposal_id]}),e(f,{color:"white",children:t.content.title}),r("div",{className:"grp",children:[e(x,{selected:o===d.YES,voteOption:d.YES,name:"yes",onChange:s}),e(x,{selected:o===d.NO,voteOption:d.NO,name:"no",onChange:s}),e(x,{selected:o===d.VETO,voteOption:d.VETO,name:"veto",onChange:s}),e(x,{selected:o===d.ABSTAIN,voteOption:d.ABSTAIN,name:"abstain",onChange:s})]}),e(U,{style:{marginTop:"1rem"},onClick:()=>c(o),filled:!0,children:"vote"})]})},bt=C.div`
  padding: 2rem;
  border: 1px solid transparent;
  width: 100%;
  cursor: pointer;
  display: flex;
  transition: all 0.4s;
  color: white;
  border: 1px solid #222;
  /* margin-top: -1px; */

  &:hover,
  &.active {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    background-color: rgba(0, 119, 255, 0.25);
    .unchecked {
      border: 1px solid var(--primary-color);
    }
  }

  &:hover {
    border: 1px solid rgba(0, 119, 255, 0.25);
    color: rgba(0, 119, 255, 1);
    .unchecked {
      border: 1px solid rgba(0, 119, 255, 1);
    }
  }

  .unchecked {
    border: 1px solid white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  .checked {
    margin: 4px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    transition: background-color 0.4s;
    background-color: var(--primary-color);
  }
`,x=t=>r(bt,{className:t.selected?"active":"",onClick:()=>{t.onChange(t.voteOption)},children:[e("div",{className:"unchecked",children:e("div",{className:t.selected?"checked":""})}),e("p",{style:{marginLeft:"1rem"},children:t.name})]}),yt=t=>r(Tt,{...t,children:[r("div",{className:"votes",children:[e(S,{content:r(f,{children:[u(t.yes.toString()).toString(),'% votes casted for "YES"']}),trigger:e("div",{className:"yes bar",children:r("p",{children:[u(t.yes.toString()).toString(),"%"]})})}),e(S,{content:r(f,{children:[u(t.no.toString()).toString(),"% of validators voted no."]}),trigger:e("div",{className:"no bar"})}),e(S,{content:r(f,{children:[u(t.veto.toString()).toString(),"% of validators voted veto."]}),trigger:e("div",{className:"veto bar"})}),e(S,{content:r(f,{children:[u(t.abstain.toString()).toString(),"% of validators voted abstain."]}),trigger:e("div",{className:"abstain bar"})})]}),e("div",{className:"empty bar"}),e(S,{content:e(f,{children:t.quorum+"% quorum"}),trigger:e("div",{className:"quorum dashed"})})]}),Tt=C.div`
  width: 100%;
  height: 50px;
  background-color: #222;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  padding: 4px;
  .bar {
    height: 100%;
    display: grid;
    place-items: center;
  }
  .dashed {
    border-right: 3px dotted #176155;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-5px);
    height: 60px;
    width: 20px;
  }
  .threshold {
    left: ${t=>t.threshold+"%"};
  }
  .voteThreshold {
    left: ${t=>t.vetoThreshold+"%"};
  }

  .quorum {
    left: ${t=>t.quorum+"%"};
  }
  .yes {
    background-color: var(--primary-color);
    width: ${t=>t.yes+"%"};
    color: black;
  }
  .no {
    background-color: #ff4646;
    width: ${t=>t.no+"%"};
    color: black;
  }
  .veto {
    background-color: #710808;
    width: ${t=>t.veto+"%"};
    color: black;
  }
  .abstain {
    background-color: #fbea51;
    width: ${t=>t.abstain+"%"};
    color: black;
  }

  .votes {
    width: ${t=>t.totalVotes+"%"};
    height: 100%;
    display: flex;
  }
  .empty {
    background-color: #111;
    width: ${t=>100-t.totalVotes+"%"};
    color: black;
  }
`,F={method:"GET",headers:{"Content-Type":"application/json"}};async function wt(t,i){if(isNaN(Number(t)))return E;const c=await(await fetch(O(i)+"/cosmos/gov/v1beta1/proposals/"+t,F)).json();return c.proposal?c.proposal:E}async function Nt(t){var c;const i=await(await fetch(O(t)+"/cosmos/staking/v1beta1/pool",F)).json();return j.from(((c=i.pool)==null?void 0:c.bonded_tokens)??0)}const St={yes:0,no:0,veto:0,abstain:0,totalVoted:0};function Vt(t,i){const c=Number(h.formatUnits(t.tally.yes)),n=Number(h.formatUnits(t.tally.no)),o=Number(h.formatUnits(t.tally.abstain)),a=Number(h.formatUnits(t.tally.no_with_veto)),s=c+n+o+a,l=Number(h.formatUnits(i));return s==0?St:{yes:c/s,no:n/s,veto:a/s,abstain:o/s,totalVoted:l==0?0:s/l}}async function Ot(t,i,c,n,o,a,s){const l=await J(t,n),g={proposalId:i,option:c},N=X.createTxMsgVote(a,l,o,s,g);return await tt(N,l,a,n,t)}async function xt(t,i){if(!(typeof window.ethereum<"u"))return console.error("Please install Metamask!"),d.NONE;const n=(await window.ethereum.request({method:"eth_requestAccounts"}))[0],o={method:"GET",headers:{"Content-Type":"application/json"}},a=await et(n,i),l=await(await fetch(i+ot.generateEndpointProposals()+"/"+t+"/votes/"+a,o)).json();if(l.vote){if(l.vote.option=="VOTE_OPTION_YES")return d.YES;if(l.vote.option=="VOTE_OPTION_NO")return d.NO;if(l.vote.option=="VOTE_OPTION_NO_WITH_VETO")return d.VETO;if(l.vote.option=="VOTE_OPTION_ABSTAIN")return d.ABSTAIN}return d.NONE}async function Et(t,i,c,n,o){return c?await t.addTransactionList([kt(i,c,n,z(o),O(i),nt,rt(i),"",{symbol:A(o)})],{title:"Vote on Proposal",txListMethod:ht.COSMOS,chainId:i}):(t.setStatus({error:"No account found"}),!1)}const kt=(t,i,c,n,o,a,s,l,g)=>({chainId:t,txType:at.VOTING,tx:Ot,params:[i,c,n,o,a,s,l],extraDetails:g});function Pt(){const[t,i]=st(v=>[Number(v.chainId),v.account]),c=mt(),[n,o]=p.useState(!0),[a,s]=p.useState([]),l=ut(a),[g,N]=p.useState(j.from(0));async function b(){i&&s(await pt(O(t),i))}p.useEffect(()=>{b()},[i]);const[G,M]=p.useState(!0),{id:y}=it(),[q,B]=p.useState(!0),[_,L]=p.useState(W),[T,$]=p.useState(E);async function R(){const v=await wt(y??"0",t);$(v),L(await Z(y??"0",t)),v==E&&B(!1),N(await Nt(t))}const[Y,H]=p.useState(d.NONE);async function D(){T.status==P.votingOngoing&&H(await xt(T.proposal_id,O(t)))}return p.useEffect(()=>{o(!0),R(),o(!1)},[]),p.useEffect(()=>{y&&lt.events.governanceActions.proposalOpened(y)},[y]),p.useEffect(()=>{D()},[T]),{loading:n,proposalId:y,proposalFound:q,proposal:T,voteEnded:T.status!=P.votingOngoing,voteData:{currentTally:_,percents:Vt(_,g)},userVoteData:{currentVote:Y,votingPower:l.toString(),votingPowerPercent:g.isZero()?0:Number(h.formatUnits(l))/Number(h.formatUnits(g))},customizeData:{showPercentVote:G,setShowPercentVote:M},txVote:async v=>{await Et(c,t,i,Number(T.proposal_id),v),D()}}}const Ut=()=>{const{loading:t,proposalId:i,proposalFound:c,proposal:n,voteEnded:o,voteData:a,userVoteData:s,customizeData:l,txVote:g}=Pt(),[N,b]=p.useState(!1);return c?t?e("div",{children:"Loading"}):r(I,{children:[r("div",{className:"details",children:[e("button",{style:{display:"none"},children:"to stop auto focus"}),r("div",{className:"tiny",children:[" ",r("p",{children:["governance / ",n.proposal_id]}),e("p",{children:o?n.status==P.passed?"Passed":"Rejected":"Voting"})]}),e("h1",{children:n.content.title}),e(m,{type:"Type:",value:n.content["@type"].slice(n.content["@type"].lastIndexOf(".")+1)}),r("div",{className:"rowCell",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",color:"green"},children:[e("p",{children:"Description"}),e("p",{children:n.content.description})]}),e("div",{role:"button",tabIndex:0,className:"details",onClick:()=>l.setShowPercentVote(!l.showPercentVote),style:{cursor:"pointer",width:"100%"},children:r("div",{className:"row",children:[e(m,{color:"#0077FF",type:"Yes:",value:l.showPercentVote?u((a.percents.yes*100).toString())+"%":r(V,{children:[u(h.formatUnits(a.currentTally.tally.yes))," ",e("div",{children:"ALTG"})]})}),e(m,{color:"#ff4646",type:"No:",value:l.showPercentVote?u((a.percents.no*100).toString())+"%":r(V,{children:[u(h.formatUnits(a.currentTally.tally.no))," ",e("div",{children:"ALTG"})]})}),e(m,{color:"#b40f0f",type:"No With Veto:",value:l.showPercentVote?u((a.percents.veto*100).toString())+"%":r(V,{children:[u(h.formatUnits(a.currentTally.tally.no_with_veto))," ",e("div",{children:"ALTG"})]})}),e(m,{color:"#fbea51",type:"Abstain:",value:l.showPercentVote?u((a.percents.abstain*100).toString())+"%":r(V,{children:[u(h.formatUnits(a.currentTally.tally.abstain))," ",e("div",{children:"ALTG"})]})})]})}),r("div",{className:"row",children:[e(m,{type:"SUBMIT TIME:",value:k(n.submit_time,o)}),e(m,{type:"VOTING END TIME:",value:k(n.voting_end_time,o)}),e(m,{type:"DEPOSIT END TIME:",value:k(n.deposit_end_time,o)})]}),r("div",{className:"row thresholds",children:[e(m,{type:"TOTAL DEPOSIT:",value:r(V,{children:[u(h.formatUnits(n.total_deposit[0].amount))," ",e("img",{src:ct,height:16,alt:"canto"})]})}),e(m,{type:"QUORUM:",value:w.quorum}),e(m,{type:"THRESHOLD:",value:w.threshold}),e(m,{type:"VETO THRESHOLD:",value:w.veto})]})]}),r("div",{className:"voting",children:[e(yt,{yes:a.percents.yes*100,no:a.percents.no*100,veto:a.percents.veto*100,abstain:a.percents.abstain*100,totalVotes:o?100:a.percents.totalVoted*100,quorum:Number.parseFloat(w.quorum),vetoThreshold:Number.parseFloat(w.veto),threshold:Number.parseFloat(w.threshold)}),r("div",{className:"voting-wrapper",children:[e(U,{disabled:o,autoFocus:!1,onClick:()=>{b(!0)},children:o?"voting ended":"vote"}),e(dt,{overlayStyle:{backgroundColor:"rgba(0, 119, 255, 0.11)",backdropFilter:"blur(2px)"},lockScroll:!0,open:N,modal:!0,onClose:()=>b(!1),children:r("div",{children:[e(gt,{onClose:()=>b(!1)}),e(ft,{onVote:g,onClose:()=>b(!1),proposal:n,currentVote:s.currentVote})]})}),s.currentVote!=d.NONE?r("p",{style:{color:"white"},children:["YOUR VOTE:"," ",e("a",{style:s.currentVote==d.YES?{color:"#06fc9a8f"}:s.currentVote==d.NO?{color:"#ff4646"}:s.currentVote==d.VETO?{color:"#b40f0f"}:{color:"#fbea51"},children:A(s.currentVote).toUpperCase()})]}):"",o?"":`voting power: ${l.showPercentVote?u((100*s.votingPowerPercent).toString())+"%":u(h.formatEther(s.votingPower))+" canto"}`]})]})]}):e(I,{children:e("div",{children:`proposal id "${i}" not found`})})},m=t=>r("div",{className:"rowCell",style:{display:"flex",justifyContent:"space-between",borderColor:t.color+"cc",backgroundColor:t.color+"34"},children:[e("p",{style:{color:t.color??"#888"},children:t.type}),e("p",{style:{color:t.color??"white"},children:t.value})]});export{Ut as default};
