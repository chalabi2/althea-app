import{a as d,e as E,b as A,d as z,f as W,V as P,q as Q,P as I,c as k}from"./Styled-7833ee59.js";import{n as C,D as h,a,j as e,b2 as Z,V as J,T as f,P as U,b3 as S,H as u,u as m,i as O,B as j,b4 as K,b5 as X,b6 as tt,b7 as et,b8 as ot,f as at,b9 as rt,m as nt,Y as st,ba as it,U as lt,F as V,a9 as ct,a2 as dt}from"./index-48314bd5.js";import{j as ut,d as ht}from"./transactionHelpers-0b3df35b.js";import{T as pt,u as mt,O as gt}from"./ongoingTxModal-bdc1c27b.js";import"./moment-9d68d5ae.js";const T={quorum:"33.4%",threshold:"50%",veto:"33.4%"},vt=C.div`
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
`,ft=({proposal:t,currentVote:i,onVote:c,onClose:r})=>{const[o,n]=h.useState(i??d.NONE),s=l=>{n(l)};return a(vt,{children:[e("div",{className:"close",children:e(Z,{src:J,alt:"close",height:30,onClick:r})}),a(f,{type:"title",size:"title3",children:["your vote for #",t.proposal_id]}),e(f,{color:"white",children:t.content.title}),a("div",{className:"grp",children:[e(x,{selected:o===d.YES,voteOption:d.YES,name:"yes",onChange:s}),e(x,{selected:o===d.NO,voteOption:d.NO,name:"no",onChange:s}),e(x,{selected:o===d.VETO,voteOption:d.VETO,name:"veto",onChange:s}),e(x,{selected:o===d.ABSTAIN,voteOption:d.ABSTAIN,name:"abstain",onChange:s})]}),e(U,{style:{marginTop:"1rem"},onClick:()=>c(o),filled:!0,children:"vote"})]})},bt=C.div`
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
`,x=t=>a(bt,{className:t.selected?"active":"",onClick:()=>{t.onChange(t.voteOption)},children:[e("div",{className:"unchecked",children:e("div",{className:t.selected?"checked":""})}),e("p",{style:{marginLeft:"1rem"},children:t.name})]}),yt=t=>a(Nt,{...t,children:[a("div",{className:"votes",children:[e(S,{content:a(f,{children:[u(t.yes.toString()).toString(),'% votes casted for "YES"']}),trigger:e("div",{className:"yes bar",children:a("p",{children:[u(t.yes.toString()).toString(),"%"]})})}),e(S,{content:a(f,{children:[u(t.no.toString()).toString(),"% of validators voted no."]}),trigger:e("div",{className:"no bar"})}),e(S,{content:a(f,{children:[u(t.veto.toString()).toString(),"% of validators voted veto."]}),trigger:e("div",{className:"veto bar"})}),e(S,{content:a(f,{children:[u(t.abstain.toString()).toString(),"% of validators voted abstain."]}),trigger:e("div",{className:"abstain bar"})})]}),e("div",{className:"empty bar"}),e(S,{content:e(f,{children:t.quorum+"% quorum"}),trigger:e("div",{className:"quorum dashed"})})]}),Nt=C.div`
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
`,F={method:"GET",headers:{"Content-Type":"application/json"}};async function Tt(t,i){if(isNaN(Number(t)))return E;const c=await(await fetch(O(i)+"/cosmos/gov/v1beta1/proposals/"+t,F)).json();return c.proposal?c.proposal:E}async function wt(t){var c;const i=await(await fetch(O(t)+"/cosmos/staking/v1beta1/pool",F)).json();return j.from(((c=i.pool)==null?void 0:c.bonded_tokens)??0)}const St={yes:0,no:0,veto:0,abstain:0,totalVoted:0};function Vt(t,i){const c=Number(m.formatUnits(t.tally.yes)),r=Number(m.formatUnits(t.tally.no)),o=Number(m.formatUnits(t.tally.abstain)),n=Number(m.formatUnits(t.tally.no_with_veto)),s=c+r+o+n,l=Number(m.formatUnits(i));return s==0?St:{yes:c/s,no:r/s,veto:n/s,abstain:o/s,totalVoted:l==0?0:s/l}}async function Ot(t,i,c,r,o,n,s){const l=await K(t,r),g={proposalId:i,option:c},w=X.createTxMsgVote(n,l,o,s,g);return await tt(w,l,n,r,t)}async function xt(t,i){if(!(typeof window.ethereum<"u"))return console.error("Please install Metamask!"),d.NONE;const r=(await window.ethereum.request({method:"eth_requestAccounts"}))[0],o={method:"GET",headers:{"Content-Type":"application/json"}},n=await et(r,i),l=await(await fetch(i+ot.generateEndpointProposals()+"/"+t+"/votes/"+n,o)).json();if(l.vote){if(l.vote.option=="VOTE_OPTION_YES")return d.YES;if(l.vote.option=="VOTE_OPTION_NO")return d.NO;if(l.vote.option=="VOTE_OPTION_NO_WITH_VETO")return d.VETO;if(l.vote.option=="VOTE_OPTION_ABSTAIN")return d.ABSTAIN}return d.NONE}async function Et(t,i,c,r,o){return c?await t.addTransactionList([kt(i,c,r,z(o),O(i),rt,at(i),"",{symbol:A(o)})],{title:"Vote on Proposal",txListMethod:pt.COSMOS,chainId:i}):(t.setStatus({error:"No account found"}),!1)}const kt=(t,i,c,r,o,n,s,l,g)=>({chainId:t,txType:nt.VOTING,tx:Ot,params:[i,c,r,o,n,s,l],extraDetails:g});function Pt(){const[t,i]=st(v=>[Number(v.chainId),v.account]),c=mt(),[r,o]=h.useState(!0),[n,s]=h.useState([]),l=ut(n),[g,w]=h.useState(j.from(0));async function b(){i&&s(await ht(O(t),i))}h.useEffect(()=>{b()},[i]);const[M,q]=h.useState(!0),{id:y}=it(),[B,$]=h.useState(!0),[_,G]=h.useState(W),[N,Y]=h.useState(E);async function R(){const v=await Tt(y??"0",t);Y(v),G(await Q(y??"0",t)),v==E&&$(!1),w(await wt(t))}const[L,H]=h.useState(d.NONE);async function D(){N.status==P.votingOngoing&&H(await xt(N.proposal_id,O(t)))}return h.useEffect(()=>{o(!0),R(),o(!1)},[]),h.useEffect(()=>{y&&lt.events.governanceActions.proposalOpened(y)},[y]),h.useEffect(()=>{D()},[N]),{loading:r,proposalId:y,proposalFound:B,proposal:N,voteEnded:N.status!=P.votingOngoing,voteData:{currentTally:_,percents:Vt(_,g)},userVoteData:{currentVote:L,votingPower:l.toString(),votingPowerPercent:g.isZero()?0:Number(m.formatUnits(l))/Number(m.formatUnits(g))},customizeData:{showPercentVote:M,setShowPercentVote:q},txVote:async v=>{await Et(c,t,i,Number(N.proposal_id),v),D()}}}const Ut=()=>{const{loading:t,proposalId:i,proposalFound:c,proposal:r,voteEnded:o,voteData:n,userVoteData:s,customizeData:l,txVote:g}=Pt(),[w,b]=h.useState(!1);return c?t?e("div",{children:"Loading"}):a(I,{children:[a("div",{className:"details",children:[e("button",{style:{display:"none"},children:"to stop auto focus"}),a("div",{className:"tiny",children:[" ",a("p",{children:["governance / ",r.proposal_id]}),e("p",{children:o?r.status==P.passed?"Passed":"Rejected":"Voting"})]}),e("h1",{children:r.content.title}),e(p,{type:"Type:",value:r.content["@type"].slice(r.content["@type"].lastIndexOf(".")+1)}),e(p,{type:"Description:",value:r.content.description}),e("div",{role:"button",tabIndex:0,className:"details",onClick:()=>l.setShowPercentVote(!l.showPercentVote),style:{cursor:"pointer",width:"100%"},children:a("div",{className:"row",children:[e(p,{color:"#0077FF",type:"Yes:",value:l.showPercentVote?u((n.percents.yes*100).toString())+"%":a(V,{children:[u(m.formatUnits(n.currentTally.tally.yes))," ",e("div",{children:"althea"})]})}),e(p,{color:"#ff4646",type:"No:",value:l.showPercentVote?u((n.percents.no*100).toString())+"%":a(V,{children:[u(m.formatUnits(n.currentTally.tally.no))," ",e("div",{children:"althea"})]})}),e(p,{color:"#b40f0f",type:"No With Veto:",value:l.showPercentVote?u((n.percents.veto*100).toString())+"%":a(V,{children:[u(m.formatUnits(n.currentTally.tally.no_with_veto))," ",e("div",{children:"althea"})]})}),e(p,{color:"#D4A017",type:"Abstain:",value:l.showPercentVote?u((n.percents.abstain*100).toString())+"%":a(V,{children:[u(m.formatUnits(n.currentTally.tally.abstain))," ",e("div",{children:"althea"})]})})]})}),a("div",{className:"row",children:[e(p,{type:"SUBMIT TIME:",value:k(r.submit_time,o)}),e(p,{type:"VOTING END TIME:",value:k(r.voting_end_time,o)}),e(p,{type:"DEPOSIT END TIME:",value:k(r.deposit_end_time,o)})]}),a("div",{className:"row thresholds",children:[e(p,{type:"TOTAL DEPOSIT:",value:a(V,{children:[u(m.formatUnits(r.total_deposit[0].amount))," ",e("img",{src:ct,height:16,alt:"althea"})]})}),e(p,{type:"QUORUM:",value:T.quorum}),e(p,{type:"THRESHOLD:",value:T.threshold}),e(p,{type:"VETO THRESHOLD:",value:T.veto})]})]}),a("div",{className:"voting",children:[e(yt,{yes:n.percents.yes*100,no:n.percents.no*100,veto:n.percents.veto*100,abstain:n.percents.abstain*100,totalVotes:o?100:n.percents.totalVoted*100,quorum:Number.parseFloat(T.quorum),vetoThreshold:Number.parseFloat(T.veto),threshold:Number.parseFloat(T.threshold)}),a("div",{className:"voting-wrapper",children:[e(U,{disabled:o,autoFocus:!1,onClick:()=>{b(!0)},children:o?"voting ended":"vote"}),e(dt,{overlayStyle:{backgroundColor:"rgba(0, 119, 255, 0.11)",backdropFilter:"blur(2px)"},lockScroll:!0,open:w,modal:!0,onClose:()=>b(!1),children:a("div",{children:[e(gt,{onClose:()=>b(!1)}),e(ft,{onVote:g,onClose:()=>b(!1),proposal:r,currentVote:s.currentVote})]})}),s.currentVote!=d.NONE?a("p",{style:{color:"white"},children:["YOUR VOTE:"," ",e("a",{style:s.currentVote==d.YES?{color:"#06fc9a8f"}:s.currentVote==d.NO?{color:"#ff4646"}:s.currentVote==d.VETO?{color:"#b40f0f"}:{color:"#fbea51"},children:A(s.currentVote).toUpperCase()})]}):"",o?"":`voting power: ${l.showPercentVote?u((100*s.votingPowerPercent).toString())+"%":u(m.formatEther(s.votingPower))+" althea"}`]})]})]}):e(I,{children:e("div",{children:`proposal id "${i}" not found`})})},p=t=>a("div",{className:"rowCell",style:{display:"flex",justifyContent:"space-between",borderColor:t.color+"cc",backgroundColor:t.color+"34"},children:[e("p",{style:{color:t.color??"var(--primary-color)"},children:t.type}),e("p",{style:{color:t.color??"var(--primary-color)"},children:t.value})]});export{Ut as default};
