import { votingThresholds } from "./config/votingThresholds";
import {
  convertDateToString,
  convertVoteNumberToString,
} from "./utils/formattingStrings";
import { VoteStatus, VotingOption } from "./config/interfaces";
import { PrimaryButton } from "global/packages/src";
import { ProposalContainer } from "./components/Styled";
import { formatEther, formatUnits } from "ethers/lib/utils";
import { truncateNumber } from "global/utils/formattingNumbers";
import Popup from "reactjs-popup";
import GovModal from "./components/govModal";
import GBar from "./components/gBar";
import { useSingleProposalData } from "./hooks/useSingleProposalData";
import { useState } from "react";
import altheaIcon from "assets/favicon.ico";
import { FaCoins } from "react-icons/fa";
import OngoingTxModal from "global/components/modals/ongoingTxModal";
const Proposal = () => {
  const {
    loading,
    proposalId,
    proposalFound,
    proposal,
    voteEnded,
    voteData,
    userVoteData,
    customizeData,
    txVote,
  } = useSingleProposalData();
  const [votingOpen, setVotingOpen] = useState(false);

  if (!proposalFound) {
    return (
      <ProposalContainer>
        <div>{`proposal id "${proposalId}" not found`}</div>
      </ProposalContainer>
    );
  }
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <ProposalContainer>
      <div className="details">
        <button
          style={{
            display: "none",
          }}
        >
          to stop auto focus
        </button>
        <div className="tiny">
          {" "}
          <p>governance / {proposal.proposal_id}</p>
          <p>
            {!voteEnded
              ? "Voting"
              : proposal.status == VoteStatus.passed
              ? "Passed"
              : "Rejected"}
          </p>
        </div>
        <h1>{proposal.content.title}</h1>
        <RowCell
          type="Type:"
          value={proposal.content["@type"].slice(
            proposal.content["@type"].lastIndexOf(".") + 1
          )}
        />

          <RowCell
  type="Description:"
  value={proposal.content.description}
/>

        <div
          role={"button"}
          tabIndex={0}
          className="details"
          onClick={() =>
            customizeData.setShowPercentVote(!customizeData.showPercentVote)
          }
          style={{ cursor: "pointer", width: "100%" }}
        >
          <div className="row">
            <RowCell
              color="#0077FF"
              type="Yes:"
              value={
                customizeData.showPercentVote ? (
                  truncateNumber((voteData.percents.yes * 100).toString()) + "%"
                ) : (
                  <>
                    {truncateNumber(
                      formatUnits(voteData.currentTally.tally.yes)
                    )}{" "}
                   <div>althea</div>
                  </>
                )
              }
            />
            <RowCell
              color="#ff4646"
              type="No:"
              value={
                customizeData.showPercentVote ? (
                  truncateNumber((voteData.percents.no * 100).toString()) + "%"
                ) : (
                  <>
                    {truncateNumber(
                      formatUnits(voteData.currentTally.tally.no)
                    )}{" "}
                    <div>althea</div>
                  </>
                )
              }
            />
            <RowCell
              color="#b40f0f"
              type="No With Veto:"
              value={
                customizeData.showPercentVote ? (
                  truncateNumber((voteData.percents.veto * 100).toString()) +
                  "%"
                ) : (
                  <>
                    {truncateNumber(
                      formatUnits(voteData.currentTally.tally.no_with_veto)
                    )}{" "}
                    <div>althea</div>
                  </>
                )
              }
            />
            <RowCell
              color="#D4A017"
              type="Abstain:"
              value={
                customizeData.showPercentVote ? (
                  truncateNumber((voteData.percents.abstain * 100).toString()) +
                  "%"
                ) : (
                  <>
                    {truncateNumber(
                      formatUnits(voteData.currentTally.tally.abstain)
                    )}{" "}
                    <div>althea</div>
                  </>
                )
              }
            />
          </div>
        </div>
        <div className="row">
          <RowCell
            type="SUBMIT TIME:"
            value={convertDateToString(proposal.submit_time, voteEnded)}
          />
          <RowCell
            type="VOTING END TIME:"
            value={convertDateToString(proposal.voting_end_time, voteEnded)}
          />
          <RowCell
            type="DEPOSIT END TIME:"
            value={convertDateToString(proposal.deposit_end_time, voteEnded)}
          />
        </div>
        <div className="row thresholds">
          <RowCell
            type="TOTAL DEPOSIT:"
            value={
              <>
                {truncateNumber(formatUnits(proposal.total_deposit[0].amount))}{" "}
                <FaCoins/>
              </>
            }
          />
          <RowCell type="QUORUM:" value={votingThresholds.quorum} />
          <RowCell type="THRESHOLD:" value={votingThresholds.threshold} />
          <RowCell type="VETO THRESHOLD:" value={votingThresholds.veto} />
        </div>
      </div>

      <div className="voting">
        <GBar
          yes={voteData.percents.yes * 100}
          no={voteData.percents.no * 100}
          veto={voteData.percents.veto * 100}
          abstain={voteData.percents.abstain * 100}
          totalVotes={voteEnded ? 100 : voteData.percents.totalVoted * 100}
          quorum={Number.parseFloat(votingThresholds.quorum)}
          vetoThreshold={Number.parseFloat(votingThresholds.veto)}
          threshold={Number.parseFloat(votingThresholds.threshold)}
        />
        <div className="voting-wrapper">
          <PrimaryButton
            disabled={voteEnded}
            autoFocus={false}
            onClick={() => {
              setVotingOpen(true);
            }}
          >
            {voteEnded ? "voting ended" : "vote"}
          </PrimaryButton>
          <Popup
            overlayStyle={{
              backgroundColor: "rgba(0, 119, 255, 0.11)",
              backdropFilter: "blur(2px)",
            }}
            lockScroll
            open={votingOpen}
            modal
            onClose={() => setVotingOpen(false)}
          >
            {
              <div>
                <OngoingTxModal onClose={() => setVotingOpen(false)} />
                <GovModal
                  onVote={txVote}
                  onClose={() => setVotingOpen(false)}
                  proposal={proposal}
                  currentVote={userVoteData.currentVote}
                />
              </div>
            }
          </Popup>
          {userVoteData.currentVote != VotingOption.NONE ? (
            <p style={{ color: "var(--primary-color)" }}>
              YOUR VOTE:{" "}
              <a
                style={
                  userVoteData.currentVote == VotingOption.YES
                    ? { color: "#06fc9a8f" }
                    : userVoteData.currentVote == VotingOption.NO
                    ? { color: "#ff4646" }
                    : userVoteData.currentVote == VotingOption.VETO
                    ? { color: "#b40f0f" }
                    : { color: "#fbea51" }
                }
              >
                {convertVoteNumberToString(
                  userVoteData.currentVote
                ).toUpperCase()}
              </a>
            </p>
          ) : (
            ""
          )}
{voteEnded
  ? ""
  : <p style={{ color: 'var(--primary-color)' }}> 
    {`voting power: ${
      customizeData.showPercentVote
        ? truncateNumber(
            (100 * userVoteData.votingPowerPercent).toString()
          ) + "%"
        : truncateNumber(formatEther(userVoteData.votingPower)) +
          " althea"
    }`}
  </p>
}
        </div>
      </div>
    </ProposalContainer>
  );
};

interface Props {
  type: string;
  value?: string | React.ReactNode;
  color?: string;
}
const RowCell = (props: Props) => {
  return (
    <div
      className="rowCell"
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderColor: props.color + "cc",
        backgroundColor: props.color + "34",
      }}
    >
      <p
        style={{
          color: props.color ?? "var(--primary-color)",
        }}
      >
        {props.type}
      </p>
      <p
        style={{
          color: props.color ?? "var(--primary-color)",
        }}
      >
        {props.value}
      </p>
    </div>
  );
};

export default Proposal;
