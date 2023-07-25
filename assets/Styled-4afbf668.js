import{al as g,at as h,i as c,bd as p,n as d}from"./index-0607c7ec.js";import{h as l}from"./moment-9d68d5ae.js";var e=(t=>(t[t.YES=0]="YES",t[t.NO=1]="NO",t[t.ABSTAIN=2]="ABSTAIN",t[t.VETO=3]="VETO",t[t.NONE=4]="NONE",t))(e||{});const T={passed:"PROPOSAL_STATUS_PASSED",votingOngoing:"PROPOSAL_STATUS_VOTING_PERIOD"},w={tally:{yes:"1",abstain:"0",no:"0",no_with_veto:"0"}},x={content:{"@type":"none",description:"none",erc20address:"none",title:"none"},deposit_end_time:"000000",final_tally_result:{abstain:"0",no:"0",no_with_veto:"0",yes:"0"},proposal_id:"0000",status:"none",submit_time:"000000",total_deposit:[{amount:"0",denom:"aalthea"}],voting_end_time:"000000",voting_start_time:"0000000"},P=g()(h((t,r)=>({proposals:[],initProposals:async o=>{const i=(await fetch(c(Number(o))+p.generateEndpointProposals(),m).then(function(a){return a.json()})).proposals;t({proposals:i}),await i.map(async a=>{if(a.status=="PROPOSAL_STATUS_VOTING_PERIOD"){const u=await y(a.proposal_id,o),s=r().proposals.filter(f=>f.proposal_id!=a.proposal_id);a.final_tally_result={...u.tally},s.push(a),t({proposals:s})}})},currentProposal:x,setCurrentProposal:o=>t({currentProposal:o})})));async function y(t,r){const n=await(await fetch(c(Number(r))+p.generateEndpointProposalTally(t),m)).json();return n.tally?n:w}const m={method:"GET",headers:{"Content-Type":"application/json"}};function S(t,r){const o=new Date(t);return r?l(o).format("MMM Do YY - h:mm:ss a"):l(o).fromNow()}function v(t){switch(t){case e.YES:return 1;case e.ABSTAIN:return 2;case e.NO:return 3;case e.VETO:return 4;default:return 0}}function N(t){switch(t){case e.YES:return"yes";case e.ABSTAIN:return"abstain";case e.NO:return"no";case e.VETO:return"veto";default:return"none"}}const E=d.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 1200px;
  margin: 0 auto 3rem auto;

  & > button {
    background-color: var(--primary-color);
    border: none;
    border-radius: 0px;
    padding: 0.6rem 2.4rem;
    font-size: 1rem;
    font-weight: 500;
    font-style: Macan;
    letter-spacing: -0.03em;
    width: fit-content;
    margin: 0 auto;
    margin-top: 2rem;

    margin-bottom: 3rem;

    &:hover {
      background-color: var(--primary-color-dark);
      cursor: pointer;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    column-gap: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 1rem;
    .grid {
      grid-template-columns: 1fr;
      row-gap: 1rem;
      column-gap: 0.8rem;
    }
  }
`,A=d.div`
  overflow-wrap: break-word;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  align-items: stretch;
  gap: 4rem;
  background-color: black;
  height: 100%;
  margin: 0 auto; /* width */

  .details {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  .pie {
    height: 300px;
    margin-top: -40px;
    /* align-self: flex-start; */
  }
  .voting {
    /* width: 25%; */
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  .title {
    font-weight: 300;
    font-size: 184px;
    line-height: 130%;
    font-style: Macan;
    text-align: center;
    letter-spacing: -0.13em;
    color: #0077FF;
    text-shadow: 0px 12.2818px 12.2818px rgba(6, 252, 153, 0.2);
  }
  .row {
    display: flex;
    gap: 1rem;
  }

  .row {
    > div {
      width: 100%;
    }
  }
  .rowCell {
    border: 1px solid #555;
    padding: 1rem;
    border-radius: 4px;
    background-color: #121212;
    img {
      position: relative;
      top: 2px;
    }
    p:first-of-type {
      text-transform: lowercase;
      color: #888;
    }
    p:last-child {
      color: white;
    }
  }
  .tiny {
    font-weight: 400;
    font-size: 14px;
    font-style: Macan;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    letter-spacing: -0.03em;

    color: #878787;
  }
  h1 {
    font-weight: 300;
    font-size: 22px;
    line-height: 130%;
    /* identical to box height, or 29px */

    text-align: left;
    letter-spacing: -0.1em;

    /* almost white */

    color: #efefef;
  }

  @media (max-width: 1000px) {
    padding: 1rem;
    width: 100%;
    flex-direction: column;
    .details {
      width: 100%;
    }

    .row {
      flex-direction: column;
    }
    .voting {
      width: 100%;
      gap: 2rem;
      margin-bottom: 1rem;
      flex-direction: column;
    }
  }
`;export{E as G,A as P,T as V,e as a,N as b,S as c,v as d,x as e,w as f,y as q,P as u};
