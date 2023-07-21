import{n as m,a as n,j as t,T as c,F as d,Z as b,a8 as v,D as y,U as x}from"./index-6cd93b82.js";import{V as P,c as l,u as _,G as N}from"./Styled-a9814bf4.js";import{H as k}from"./seo-c48b11d3.js";import"./moment-9d68d5ae.js";const w=e=>n(S,{onClick:e.onClick,children:[n("div",{style:{display:"flex",justifyContent:"space-between"},children:[n("p",{className:"number",children:["#",e.proposalID]}),t(c,{type:"title",className:"number",children:e.status=="PROPOSAL_STATUS_VOTING_PERIOD"?"Voting":e.status=="PROPOSAL_STATUS_PASSED"?"Passed":"Rejected"})]}),t(c,{type:"title",size:"title3",align:"left",children:e.name}),t("div",{className:"options-1",children:e.status==P.votingOngoing?n(d,{children:[n("p",{children:["start ",l(e.startDate,!0)]})," ",t("p",{children:"  →  "}),n("p",{children:["end ",l(e.endDate,!0)]})]}):n(d,{children:["vote ended ",l(e.endDate,!1)]})}),n("div",{className:"votes-grp",children:[n(s,{color:"#06fc99",children:[t("span",{className:"label",children:"yes :"})," ",e.yesPecterage.toFixed(2),"%"]}),n(s,{color:"#ff4646",children:[t("span",{className:"label",children:"no :"})," ",e.noPecterage.toFixed(2),"%"]}),n(s,{color:"#710808",children:[t("span",{className:"label",children:"veto :"})," ",e.vetoPecterage.toFixed(2),"%"]}),n(s,{color:"#fbea51",children:[t("span",{className:"label",children:"abstain :"})," ",e.abstainPecterage.toFixed(2),"%"]})]}),t(A,{...e})]}),S=m.div`
  background-color: black;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  &:hover {
    border: 1px solid #444;
    border-radius: 4px;
    cursor: pointer;
  }
  .number {
    color: #707070;
  }

  .details {
    display: flex;
    color: #7f7f7f;
    background-color: red;
    text-align: right;
    align-items: flex-end;
    justify-content: space-between;
  }

  .options-1 {
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
  }
  .votes-grp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    row-gap: 2rem;
    column-gap: 4rem;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4px;
    justify-content: space-between;
    /* transition: all 0.2s ease-in 0.2s; */
    background-color: black;
    padding: 2rem;
    padding-left: 4rem;
    opacity: 0;

    &:hover {
      opacity: 1;
      transition-delay: 0.1s;
    }
  }
`,D=m.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  div {
    height: 6px;
  }
  .yes {
    background-color: #06fc99;
    width: ${e=>e.yesPecterage+"%"};
  }
  .no {
    background-color: #ff4646;
    width: ${e=>e.noPecterage+"%"};
  }
  .veto {
    background-color: #710808;
    width: ${e=>e.vetoPecterage+"%"};
  }
  .abstain {
    background-color: #fbea51;
    width: ${e=>e.abstainPecterage+"%"};
  }
`,A=e=>n(D,{...e,children:[t("div",{className:"yes"}),t("div",{className:"no"}),t("div",{className:"veto"}),t("div",{className:"abstain"})]}),s=m.p`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  font-family: "Macan";

  span {
    font-family: "Macan";
    margin-right: 8px;
    /* color: ${e=>e.color}; */
  }

  &::before {
    content: " ";
    display: flex;
    height: 20px;
    width: 10px;
    border-radius: 10px;
    margin-right: 0.5rem;
    background-color: ${e=>e.color};
  }
`,G=()=>{const e=b(),o=_(),h=v();y.useEffect(()=>{o.initProposals(Number(e.chainId))},[e.chainId]);function p(){return n(d,{children:[t(k,{title:"Althea - Governance",description:"Vote on proposals",link:"governance"}),o.proposals?o.proposals.map(a=>{const i=Number(a.final_tally_result.yes),g=Number(a.final_tally_result.no),u=Number(a.final_tally_result.abstain),f=Number(a.final_tally_result.no_with_veto),r=i+g+u+f;return t(w,{name:a.content.title,proposalID:a.proposal_id,yesPecterage:r==0?0:100*i/r,noPecterage:r==0?0:100*g/r,vetoPecterage:r==0?0:100*f/r,abstainPecterage:r==0?0:100*u/r,startDate:a.voting_start_time,endDate:a.voting_end_time,status:a.status,onClick:()=>{o.setCurrentProposal(a),h("proposal/"+a.proposal_id)}},a.proposal_id)}).sort((a,i)=>(i==null?void 0:i.props.proposalID)-(a==null?void 0:a.props.proposalID)):""]})}return n(N,{children:[n(c,{size:"title2",type:"title",color:"white",style:{margin:"3rem 1rem",fontFamily:"Macan"},children:[t("a",{style:{fontFamily:"Macan",textDecoration:"underline"},href:"/staking",onClick:()=>x.events.governanceActions.openedStakingPage(),children:"STAKE"})," ","your Althea to participate in governance"]}),t("div",{className:"grid",children:t(p,{})})]})};export{G as default};
