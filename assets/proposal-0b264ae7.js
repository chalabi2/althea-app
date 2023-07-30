import{a as d,e as E,b as I,d as z,f as W,V as P,q as Z,P as D,c as k}from"./Styled-43fea437.js";import{n as C,D as h,a as r,j as t,b7 as Q,V as J,T as f,P as U,b8 as S,H as u,u as p,i as O,B as j,b9 as K,ba as X,bb as ee,bc as te,bd as oe,f as re,be as ae,m as ne,Z as se,bf as ie,U as le,F as V,aW as ce,a3 as de}from"./index-53daf1f8.js";import{j as ue,d as he}from"./transactionHelpers-49e83154.js";import{T as pe,u as me,O as ge}from"./ongoingTxModal-cfcb8b66.js";import"./moment-9d68d5ae.js";const w={quorum:"33.4%",threshold:"50%",veto:"33.4%"},ve=C.div`
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
`,fe=({proposal:e,currentVote:i,onVote:c,onClose:a})=>{const[o,n]=h.useState(i??d.NONE),s=l=>{n(l)};return r(ve,{children:[t("div",{className:"close",children:t(Q,{src:J,alt:"close",height:30,onClick:a})}),r(f,{type:"title",size:"title3",children:["your vote for #",e.proposal_id]}),t(f,{color:"white",children:e.content.title}),r("div",{className:"grp",children:[t(x,{selected:o===d.YES,voteOption:d.YES,name:"yes",onChange:s}),t(x,{selected:o===d.NO,voteOption:d.NO,name:"no",onChange:s}),t(x,{selected:o===d.VETO,voteOption:d.VETO,name:"veto",onChange:s}),t(x,{selected:o===d.ABSTAIN,voteOption:d.ABSTAIN,name:"abstain",onChange:s})]}),t(U,{style:{marginTop:"1rem"},onClick:()=>c(o),filled:!0,children:"vote"})]})},be=C.div`
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
`,x=e=>r(be,{className:e.selected?"active":"",onClick:()=>{e.onChange(e.voteOption)},children:[t("div",{className:"unchecked",children:t("div",{className:e.selected?"checked":""})}),t("p",{style:{marginLeft:"1rem"},children:e.name})]}),ye=e=>r(Te,{...e,children:[r("div",{className:"votes",children:[t(S,{content:r(f,{children:[u(e.yes.toString()).toString(),'% votes casted for "YES"']}),trigger:t("div",{className:"yes bar",children:r("p",{children:[u(e.yes.toString()).toString(),"%"]})})}),t(S,{content:r(f,{children:[u(e.no.toString()).toString(),"% of validators voted no."]}),trigger:t("div",{className:"no bar"})}),t(S,{content:r(f,{children:[u(e.veto.toString()).toString(),"% of validators voted veto."]}),trigger:t("div",{className:"veto bar"})}),t(S,{content:r(f,{children:[u(e.abstain.toString()).toString(),"% of validators voted abstain."]}),trigger:t("div",{className:"abstain bar"})})]}),t("div",{className:"empty bar"}),t(S,{content:t(f,{children:e.quorum+"% quorum"}),trigger:t("div",{className:"quorum dashed"})})]}),Te=C.div`
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
    background-color: #111;
    width: ${e=>100-e.totalVotes+"%"};
    color: black;
  }
`,F={method:"GET",headers:{"Content-Type":"application/json"}};async function we(e,i){if(isNaN(Number(e)))return E;const c=await(await fetch(O(i)+"/cosmos/gov/v1beta1/proposals/"+e,F)).json();return c.proposal?c.proposal:E}async function Ne(e){var c;const i=await(await fetch(O(e)+"/cosmos/staking/v1beta1/pool",F)).json();return j.from(((c=i.pool)==null?void 0:c.bonded_tokens)??0)}const Se={yes:0,no:0,veto:0,abstain:0,totalVoted:0};function Ve(e,i){const c=Number(p.formatUnits(e.tally.yes)),a=Number(p.formatUnits(e.tally.no)),o=Number(p.formatUnits(e.tally.abstain)),n=Number(p.formatUnits(e.tally.no_with_veto)),s=c+a+o+n,l=Number(p.formatUnits(i));return s==0?Se:{yes:c/s,no:a/s,veto:n/s,abstain:o/s,totalVoted:l==0?0:s/l}}async function Oe(e,i,c,a,o,n,s){const l=await K(e,a),g={proposalId:i,option:c},N=X.createTxMsgVote(n,l,o,s,g);return await ee(N,l,n,a,e)}async function xe(e,i){if(!(typeof window.ethereum<"u"))return console.error("Please install Metamask!"),d.NONE;const a=(await window.ethereum.request({method:"eth_requestAccounts"}))[0],o={method:"GET",headers:{"Content-Type":"application/json"}},n=await te(a,i),l=await(await fetch(i+oe.generateEndpointProposals()+"/"+e+"/votes/"+n,o)).json();if(l.vote){if(l.vote.option=="VOTE_OPTION_YES")return d.YES;if(l.vote.option=="VOTE_OPTION_NO")return d.NO;if(l.vote.option=="VOTE_OPTION_NO_WITH_VETO")return d.VETO;if(l.vote.option=="VOTE_OPTION_ABSTAIN")return d.ABSTAIN}return d.NONE}async function Ee(e,i,c,a,o){return c?await e.addTransactionList([ke(i,c,a,z(o),O(i),ae,re(i),"",{symbol:I(o)})],{title:"Vote on Proposal",txListMethod:pe.COSMOS,chainId:i}):(e.setStatus({error:"No account found"}),!1)}const ke=(e,i,c,a,o,n,s,l,g)=>({chainId:e,txType:ne.VOTING,tx:Oe,params:[i,c,a,o,n,s,l],extraDetails:g});function Pe(){const[e,i]=se(v=>[Number(v.chainId),v.account]),c=me(),[a,o]=h.useState(!0),[n,s]=h.useState([]),l=ue(n),[g,N]=h.useState(j.from(0));async function b(){i&&s(await he(O(e),i))}h.useEffect(()=>{b()},[i]);const[G,M]=h.useState(!0),{id:y}=ie(),[q,B]=h.useState(!0),[_,L]=h.useState(W),[T,$]=h.useState(E);async function R(){const v=await we(y??"0",e);$(v),L(await Z(y??"0",e)),v==E&&B(!1),N(await Ne(e))}const[Y,H]=h.useState(d.NONE);async function A(){T.status==P.votingOngoing&&H(await xe(T.proposal_id,O(e)))}return h.useEffect(()=>{o(!0),R(),o(!1)},[]),h.useEffect(()=>{y&&le.events.governanceActions.proposalOpened(y)},[y]),h.useEffect(()=>{A()},[T]),{loading:a,proposalId:y,proposalFound:q,proposal:T,voteEnded:T.status!=P.votingOngoing,voteData:{currentTally:_,percents:Ve(_,g)},userVoteData:{currentVote:Y,votingPower:l.toString(),votingPowerPercent:g.isZero()?0:Number(p.formatUnits(l))/Number(p.formatUnits(g))},customizeData:{showPercentVote:G,setShowPercentVote:M},txVote:async v=>{await Ee(c,e,i,Number(T.proposal_id),v),A()}}}const Ue=()=>{const{loading:e,proposalId:i,proposalFound:c,proposal:a,voteEnded:o,voteData:n,userVoteData:s,customizeData:l,txVote:g}=Pe(),[N,b]=h.useState(!1);return c?e?t("div",{children:"Loading"}):r(D,{children:[r("div",{className:"details",children:[t("button",{style:{display:"none"},children:"to stop auto focus"}),r("div",{className:"tiny",children:[" ",r("p",{children:["governance / ",a.proposal_id]}),t("p",{children:o?a.status==P.passed?"Passed":"Rejected":"Voting"})]}),t("h1",{children:a.content.title}),t(m,{type:"Type:",value:a.content["@type"].slice(a.content["@type"].lastIndexOf(".")+1)}),r("div",{className:"rowCell",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",color:"green"},children:[t("p",{children:"Description"}),t("p",{children:a.content.description})]}),t("div",{role:"button",tabIndex:0,className:"details",onClick:()=>l.setShowPercentVote(!l.showPercentVote),style:{cursor:"pointer",width:"100%"},children:r("div",{className:"row",children:[t(m,{color:"#0077FF",type:"Yes:",value:l.showPercentVote?u((n.percents.yes*100).toString())+"%":r(V,{children:[u(p.formatUnits(n.currentTally.tally.yes))," ",t("div",{children:"ALTG"})]})}),t(m,{color:"#ff4646",type:"No:",value:l.showPercentVote?u((n.percents.no*100).toString())+"%":r(V,{children:[u(p.formatUnits(n.currentTally.tally.no))," ",t("div",{children:"ALTG"})]})}),t(m,{color:"#b40f0f",type:"No With Veto:",value:l.showPercentVote?u((n.percents.veto*100).toString())+"%":r(V,{children:[u(p.formatUnits(n.currentTally.tally.no_with_veto))," ",t("div",{children:"ALTG"})]})}),t(m,{color:"#fbea51",type:"Abstain:",value:l.showPercentVote?u((n.percents.abstain*100).toString())+"%":r(V,{children:[u(p.formatUnits(n.currentTally.tally.abstain))," ",t("div",{children:"ALTG"})]})})]})}),r("div",{className:"row",children:[t(m,{type:"SUBMIT TIME:",value:k(a.submit_time,o)}),t(m,{type:"VOTING END TIME:",value:k(a.voting_end_time,o)}),t(m,{type:"DEPOSIT END TIME:",value:k(a.deposit_end_time,o)})]}),r("div",{className:"row thresholds",children:[t(m,{type:"TOTAL DEPOSIT:",value:r(V,{children:[u(p.formatUnits(a.total_deposit[0].amount))," ",t("img",{src:ce,height:16,alt:"althea"})]})}),t(m,{type:"QUORUM:",value:w.quorum}),t(m,{type:"THRESHOLD:",value:w.threshold}),t(m,{type:"VETO THRESHOLD:",value:w.veto})]})]}),r("div",{className:"voting",children:[t(ye,{yes:n.percents.yes*100,no:n.percents.no*100,veto:n.percents.veto*100,abstain:n.percents.abstain*100,totalVotes:o?100:n.percents.totalVoted*100,quorum:Number.parseFloat(w.quorum),vetoThreshold:Number.parseFloat(w.veto),threshold:Number.parseFloat(w.threshold)}),r("div",{className:"voting-wrapper",children:[t(U,{disabled:o,autoFocus:!1,onClick:()=>{b(!0)},children:o?"voting ended":"vote"}),t(de,{overlayStyle:{backgroundColor:"rgba(0, 119, 255, 0.11)",backdropFilter:"blur(2px)"},lockScroll:!0,open:N,modal:!0,onClose:()=>b(!1),children:r("div",{children:[t(ge,{onClose:()=>b(!1)}),t(fe,{onVote:g,onClose:()=>b(!1),proposal:a,currentVote:s.currentVote})]})}),s.currentVote!=d.NONE?r("p",{style:{color:"white"},children:["YOUR VOTE:"," ",t("a",{style:s.currentVote==d.YES?{color:"#06fc9a8f"}:s.currentVote==d.NO?{color:"#ff4646"}:s.currentVote==d.VETO?{color:"#b40f0f"}:{color:"#fbea51"},children:I(s.currentVote).toUpperCase()})]}):"",o?"":`voting power: ${l.showPercentVote?u((100*s.votingPowerPercent).toString())+"%":u(p.formatEther(s.votingPower))+" althea"}`]})]})]}):t(D,{children:t("div",{children:`proposal id "${i}" not found`})})},m=e=>r("div",{className:"rowCell",style:{display:"flex",justifyContent:"space-between",borderColor:e.color+"cc",backgroundColor:e.color+"34"},children:[t("p",{style:{color:e.color??"#888"},children:e.type}),t("p",{style:{color:e.color??"white"},children:e.value})]});export{Ue as default};
