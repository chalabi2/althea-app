import{ah as g,aX as h,i as c,aM as p,n as d}from"./index-22579ada.js";import{h as l}from"./moment-9d68d5ae.js";var e=(t=>(t[t.YES=0]="YES",t[t.NO=1]="NO",t[t.ABSTAIN=2]="ABSTAIN",t[t.VETO=3]="VETO",t[t.NONE=4]="NONE",t))(e||{});const v={passed:"PROPOSAL_STATUS_PASSED",votingOngoing:"PROPOSAL_STATUS_VOTING_PERIOD"},x={tally:{yes:"1",abstain:"0",no:"0",no_with_veto:"0"}},w={content:{"@type":"none",description:"none",erc20address:"none",title:"none"},deposit_end_time:"000000",final_tally_result:{abstain:"0",no:"0",no_with_veto:"0",yes:"0"},proposal_id:"0000",status:"none",submit_time:"000000",total_deposit:[{amount:"0",denom:"aalthea"}],voting_end_time:"000000",voting_start_time:"0000000"},T=g()(h((t,r)=>({proposals:[],initProposals:async o=>{const s=(await fetch(c(Number(o))+p.generateEndpointProposals(),m).then(function(a){return a.json()})).proposals;t({proposals:s}),await s.map(async a=>{if(a.status=="PROPOSAL_STATUS_VOTING_PERIOD"){const u=await y(a.proposal_id,o),i=r().proposals.filter(f=>f.proposal_id!=a.proposal_id);a.final_tally_result={...u.tally},i.push(a),t({proposals:i})}})},currentProposal:w,setCurrentProposal:o=>t({currentProposal:o})})));async function y(t,r){const n=await(await fetch(c(Number(r))+p.generateEndpointProposalTally(t),m)).json();return n.tally?n:x}const m={method:"GET",headers:{"Content-Type":"application/json"}};function P(t,r){const o=new Date(t);return r?l(o).format("MMM Do YY - h:mm:ss a"):l(o).fromNow()}function S(t){switch(t){case e.YES:return 1;case e.ABSTAIN:return 2;case e.NO:return 3;case e.VETO:return 4;default:return 0}}function N(t){switch(t){case e.YES:return"yes";case e.ABSTAIN:return"abstain";case e.NO:return"no";case e.VETO:return"veto";default:return"none"}}const E=d.div`
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
  box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  align-items: stretch;
  gap: 4rem;
  background-color: var(--background-threads);
  height: 95%;
  margin: 0 auto; /* width */
  border-radius: 3px;

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
    background-color: var(--base);
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

    color: var(--primary-color);
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
`;export{E as G,A as P,v as V,e as a,N as b,P as c,S as d,w as e,x as f,y as q,T as u};
