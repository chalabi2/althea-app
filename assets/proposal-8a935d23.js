import{a as d,e as k,b as A,d as z,f as Q,V as P,q as W,P as I,c as E}from"./Styled-a84a0800.js";import{n as C,D as p,a as r,j as t,aL as Z,V as J,T as y,P as U,aM as S,H as u,u as v,i as V,B as F,aN as K,aO as X,aP as ee,aQ as te,aR as oe,f as re,aS as ae,m as ne,_ as se,aT as ie,U as le,F as O,ax as ce,a4 as de}from"./index-0ae905f6.js";import{j as ue,d as pe}from"./transactionHelpers-7d20857d.js";import{T as he,u as ve,O as me}from"./ongoingTxModal-562fd982.js";import"./moment-9d68d5ae.js";const T={quorum:"33.4%",threshold:"50%",veto:"33.4%"},ge=C.div`
  background-color: var(--base);
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
`,ye=({proposal:e,currentVote:i,onVote:c,onClose:a})=>{const[o,n]=p.useState(i??d.NONE),s=l=>{n(l)};return r(ge,{children:[t("div",{className:"close",children:t(Z,{src:J,alt:"close",height:30,onClick:a})}),r(y,{type:"title",size:"title3",children:["your vote for #",e.proposal_id]}),t(y,{color:"white",children:e.content.title}),r("div",{className:"grp",children:[t(x,{selected:o===d.YES,voteOption:d.YES,name:"yes",onChange:s}),t(x,{selected:o===d.NO,voteOption:d.NO,name:"no",onChange:s}),t(x,{selected:o===d.VETO,voteOption:d.VETO,name:"veto",onChange:s}),t(x,{selected:o===d.ABSTAIN,voteOption:d.ABSTAIN,name:"abstain",onChange:s})]}),t(U,{style:{marginTop:"1rem"},onClick:()=>c(o),filled:!0,children:"vote"})]})},fe=C.div`
  padding: 2rem;
  border: 1px solid transparent;
  width: 100%;
  cursor: pointer;
  display: flex;
  transition: all 0.4s;
  color: var(--primary-color);
  background-color: var(--base);
  border: 1px solid var(--highlights);
  /* margin-top: -1px; */

  &:hover,
  &.active {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    background-color: var(--background-color-start);
    .unchecked {
      border: 1px solid var(--primary-color);
    }
  }

  &:hover {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    .unchecked {
      border: 1px solid var(--primary-color);
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
`,x=e=>r(fe,{className:e.selected?"active":"",onClick:()=>{e.onChange(e.voteOption)},children:[t("div",{className:"unchecked",children:t("div",{className:e.selected?"checked":""})}),t("p",{style:{marginLeft:"1rem"},children:e.name})]}),be=e=>r(Ne,{...e,children:[r("div",{className:"votes",children:[t(S,{content:r(y,{children:[u(e.yes.toString()).toString(),'% votes casted for "YES"']}),trigger:t("div",{className:"yes bar",children:r("p",{children:[u(e.yes.toString()).toString(),"%"]})})}),t(S,{content:r(y,{children:[u(e.no.toString()).toString(),"% of validators voted no."]}),trigger:t("div",{className:"no bar"})}),t(S,{content:r(y,{children:[u(e.veto.toString()).toString(),"% of validators voted veto."]}),trigger:t("div",{className:"veto bar"})}),t(S,{content:r(y,{children:[u(e.abstain.toString()).toString(),"% of validators voted abstain."]}),trigger:t("div",{className:"abstain bar"})})]}),t("div",{className:"empty bar"}),t(S,{content:t(y,{children:e.quorum+"% quorum"}),trigger:t("div",{className:"quorum dashed"})})]}),Ne=C.div`
  width: 100%;
  height: 50px;
  background-color: var(--base-reverse);
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 2px;
  padding: 4px;
  .bar {
    height: 100%;
    display: grid;
    place-items: center;
  }
  .dashed {
    border-right: 3px dotted var(--base);
    position: absolute;
    left: 0;
    top: 0;
    height: 50px;
    width: 20px;
  }
  .threshold {
    left: ${e=>e.threshold+"%"};
  }
  .voteThreshold {
    left: ${e=>e.vetoThreshold+"%"};
  }

  .quorum {
    left: ${e=>e.quorum+"%"};
  }
  .yes {
    background-color: var(--primary-color);
    width: ${e=>e.yes+"%"};
    color: black;
  }
  .no {
    background-color: #ff4646;
    width: ${e=>e.no+"%"};
    color: black;
  }
  .veto {
    background-color: #710808;
    width: ${e=>e.veto+"%"};
    color: black;
  }
  .abstain {
    background-color: #fbea51;
    width: ${e=>e.abstain+"%"};
    color: black;
  }

  .votes {
    width: ${e=>e.totalVotes+"%"};
    height: 100%;
    display: flex;
  }
  .empty {
    background-color: var(--grey);
    width: ${e=>100-e.totalVotes+"%"};
    color: black;
  }
`,j={method:"GET",headers:{"Content-Type":"application/json"}};async function Te(e,i){if(isNaN(Number(e)))return k;const c=await(await fetch(V(i)+"/cosmos/gov/v1beta1/proposals/"+e,j)).json();return c.proposal?c.proposal:k}async function we(e){var c;const i=await(await fetch(V(e)+"/cosmos/staking/v1beta1/pool",j)).json();return F.from(((c=i.pool)==null?void 0:c.bonded_tokens)??0)}const Se={yes:0,no:0,veto:0,abstain:0,totalVoted:0};function Oe(e,i){const c=Number(v.formatUnits(e.tally.yes)),a=Number(v.formatUnits(e.tally.no)),o=Number(v.formatUnits(e.tally.abstain)),n=Number(v.formatUnits(e.tally.no_with_veto)),s=c+a+o+n,l=Number(v.formatUnits(i));return s==0?Se:{yes:c/s,no:a/s,veto:n/s,abstain:o/s,totalVoted:l==0?0:s/l}}async function Ve(e,i,c,a,o,n,s){const l=await K(e,a),m={proposalId:i,option:c},w=X.createTxMsgVote(n,l,o,s,m);return await ee(w,l,n,a,e)}async function xe(e,i){if(!(typeof window.ethereum<"u"))return console.error("Please install Metamask!"),d.NONE;const a=(await window.ethereum.request({method:"eth_requestAccounts"}))[0],o={method:"GET",headers:{"Content-Type":"application/json"}},n=await te(a,i),l=await(await fetch(i+oe.generateEndpointProposals()+"/"+e+"/votes/"+n,o)).json();if(l.vote){if(l.vote.option=="VOTE_OPTION_YES")return d.YES;if(l.vote.option=="VOTE_OPTION_NO")return d.NO;if(l.vote.option=="VOTE_OPTION_NO_WITH_VETO")return d.VETO;if(l.vote.option=="VOTE_OPTION_ABSTAIN")return d.ABSTAIN}return d.NONE}async function ke(e,i,c,a,o){return c?await e.addTransactionList([Ee(i,c,a,z(o),V(i),ae,re(i),"",{symbol:A(o)})],{title:"Vote on Proposal",txListMethod:he.COSMOS,chainId:i}):(e.setStatus({error:"No account found"}),!1)}const Ee=(e,i,c,a,o,n,s,l,m)=>({chainId:e,txType:ne.VOTING,tx:Ve,params:[i,c,a,o,n,s,l],extraDetails:m});function Pe(){const[e,i]=se(g=>[Number(g.chainId),g.account]),c=ve(),[a,o]=p.useState(!0),[n,s]=p.useState([]),l=ue(n),[m,w]=p.useState(F.from(0));async function f(){i&&s(await pe(V(e),i))}p.useEffect(()=>{f()},[i]);const[M,q]=p.useState(!0),{id:b}=ie(),[B,$]=p.useState(!0),[_,G]=p.useState(Q),[N,R]=p.useState(k);async function L(){const g=await Te(b??"0",e);R(g),G(await W(b??"0",e)),g==k&&$(!1),w(await we(e))}const[Y,H]=p.useState(d.NONE);async function D(){N.status==P.votingOngoing&&H(await xe(N.proposal_id,V(e)))}return p.useEffect(()=>{o(!0),L(),o(!1)},[]),p.useEffect(()=>{b&&le.events.governanceActions.proposalOpened(b)},[b]),p.useEffect(()=>{D()},[N]),{loading:a,proposalId:b,proposalFound:B,proposal:N,voteEnded:N.status!=P.votingOngoing,voteData:{currentTally:_,percents:Oe(_,m)},userVoteData:{currentVote:Y,votingPower:l.toString(),votingPowerPercent:m.isZero()?0:Number(v.formatUnits(l))/Number(v.formatUnits(m))},customizeData:{showPercentVote:M,setShowPercentVote:q},txVote:async g=>{await ke(c,e,i,Number(N.proposal_id),g),D()}}}const Ue=()=>{const{loading:e,proposalId:i,proposalFound:c,proposal:a,voteEnded:o,voteData:n,userVoteData:s,customizeData:l,txVote:m}=Pe(),[w,f]=p.useState(!1);return c?e?t("div",{children:"Loading"}):r(I,{children:[r("div",{className:"details",children:[t("button",{style:{display:"none"},children:"to stop auto focus"}),r("div",{className:"tiny",children:[" ",r("p",{children:["governance / ",a.proposal_id]}),t("p",{children:o?a.status==P.passed?"Passed":"Rejected":"Voting"})]}),t("h1",{children:a.content.title}),t(h,{type:"Type:",value:a.content["@type"].slice(a.content["@type"].lastIndexOf(".")+1)}),t(h,{type:"Description:",value:a.content.description}),t("div",{role:"button",tabIndex:0,className:"details",onClick:()=>l.setShowPercentVote(!l.showPercentVote),style:{cursor:"pointer",width:"100%"},children:r("div",{className:"row",children:[t(h,{color:"#0077FF",type:"Yes:",value:l.showPercentVote?u((n.percents.yes*100).toString())+"%":r(O,{children:[u(v.formatUnits(n.currentTally.tally.yes))," ",t("div",{children:"althea"})]})}),t(h,{color:"#ff4646",type:"No:",value:l.showPercentVote?u((n.percents.no*100).toString())+"%":r(O,{children:[u(v.formatUnits(n.currentTally.tally.no))," ",t("div",{children:"althea"})]})}),t(h,{color:"#b40f0f",type:"No With Veto:",value:l.showPercentVote?u((n.percents.veto*100).toString())+"%":r(O,{children:[u(v.formatUnits(n.currentTally.tally.no_with_veto))," ",t("div",{children:"althea"})]})}),t(h,{color:"#D4A017",type:"Abstain:",value:l.showPercentVote?u((n.percents.abstain*100).toString())+"%":r(O,{children:[u(v.formatUnits(n.currentTally.tally.abstain))," ",t("div",{children:"althea"})]})})]})}),r("div",{className:"row",children:[t(h,{type:"SUBMIT TIME:",value:E(a.submit_time,o)}),t(h,{type:"VOTING END TIME:",value:E(a.voting_end_time,o)}),t(h,{type:"DEPOSIT END TIME:",value:E(a.deposit_end_time,o)})]}),r("div",{className:"row thresholds",children:[t(h,{type:"TOTAL DEPOSIT:",value:r(O,{children:[u(v.formatUnits(a.total_deposit[0].amount))," ",t(ce,{})]})}),t(h,{type:"QUORUM:",value:T.quorum}),t(h,{type:"THRESHOLD:",value:T.threshold}),t(h,{type:"VETO THRESHOLD:",value:T.veto})]})]}),r("div",{className:"voting",children:[t(be,{yes:n.percents.yes*100,no:n.percents.no*100,veto:n.percents.veto*100,abstain:n.percents.abstain*100,totalVotes:o?100:n.percents.totalVoted*100,quorum:Number.parseFloat(T.quorum),vetoThreshold:Number.parseFloat(T.veto),threshold:Number.parseFloat(T.threshold)}),r("div",{className:"voting-wrapper",children:[t(U,{disabled:o,autoFocus:!1,onClick:()=>{f(!0)},children:o?"voting ended":"vote"}),t(de,{overlayStyle:{backgroundColor:"rgba(0, 119, 255, 0.11)",backdropFilter:"blur(2px)"},lockScroll:!0,open:w,modal:!0,onClose:()=>f(!1),children:r("div",{children:[t(me,{onClose:()=>f(!1)}),t(ye,{onVote:m,onClose:()=>f(!1),proposal:a,currentVote:s.currentVote})]})}),s.currentVote!=d.NONE?r("p",{style:{color:"var(--primary-color)"},children:["YOUR VOTE:"," ",t("a",{style:s.currentVote==d.YES?{color:"#06fc9a8f"}:s.currentVote==d.NO?{color:"#ff4646"}:s.currentVote==d.VETO?{color:"#b40f0f"}:{color:"#fbea51"},children:A(s.currentVote).toUpperCase()})]}):"",o?"":t("p",{style:{color:"var(--primary-color)"},children:`voting power: ${l.showPercentVote?u((100*s.votingPowerPercent).toString())+"%":u(v.formatEther(s.votingPower))+" althea"}`})]})]})]}):t(I,{children:t("div",{children:`proposal id "${i}" not found`})})},h=e=>r("div",{className:"rowCell",style:{display:"flex",justifyContent:"space-between",borderColor:e.color+"cc",backgroundColor:e.color+"34"},children:[t("p",{style:{color:e.color??"var(--primary-color)"},children:e.type}),t("p",{style:{color:e.color??"var(--primary-color)"},children:e.value})]});export{Ue as default};
