import { BigNumber } from "ethers";
import { commify, formatEther } from "ethers/lib/utils";
import { truncateNumber } from "global/utils/formattingNumbers";
import altheaIcon from "assets/favicon.ico";
import { FaCoins } from "react-icons/fa";
import altheaJailedIcon from "assets/favicon.ico";
import { MasterValidatorProps } from "../config/interfaces";
import useValidatorModalStore, {
  ValidatorModalType,
} from "../stores/validatorModalStore";
import Table from "./table";
import FadeIn from "react-fade-in";
import { levenshteinDistance } from "global/utils/search";
import jailedSymbol from "assets/lock.svg";
import { ToolTipL } from "pages/staking/config/Styled";
import Popup from "reactjs-popup";
import { formatLiquidity } from "global/utils/formattingNumbers";
import { formatPercent } from "global/packages/src/utils/formatNumbers";
import { useState } from "react";

export function sortColumnsByType(value1: unknown, value2: unknown) {
  if (typeof value1 === "string") {
    return value1.localeCompare(value2 as string);
  } else if (typeof value1 === "number") {
    return (value2 as number) - (value1 as number);
  } else if (typeof value1 === "boolean") {
    return value1 === value2 ? 0 : value1 ? -1 : 1;
  }
  return 0;
}

interface TableProps {
  validators: MasterValidatorProps[];
  sortBy: "validatorTotal" | "userTotal";
  searched?: string;
}
export const ValidatorTable = (props: TableProps) => {
  const [columnClicked, setColumnClicked] = useState(0);
  const validatorModalStore = useValidatorModalStore();
  const sortedValidators = props.validators.sort((a, b) => {
    if (props.searched) {
      return levenshteinDistance(
        props.searched,
        a.validator.description.moniker
      ) > levenshteinDistance(props.searched, b.validator.description.moniker)
        ? 1
        : -1;
    }
    const value1 =
      props.sortBy === "userTotal"
        ? a.userDelegations?.balance.amount
        : a.validator.tokens;
    const value2 =
      props.sortBy === "userTotal"
        ? b.userDelegations?.balance.amount
        : b.validator.tokens;

    return BigNumber.from(value1).gt(BigNumber.from(value2)) ? -1 : 1;
  });

  if (props.validators.length) {
    return (
      <Table
        columns={["rank", "name", "validator total", "my stake", "commission"]}
        onColumnClicked={(column) => setColumnClicked(column)}
        columnClicked={columnClicked}
      >
        <FadeIn>
          {sortedValidators
            .map((validator, idx) => {
              return (
                <Row
                  key={idx}
                  rank={idx + 1}
                  name={validator.validator.description.moniker}
                  totalStake={validator.validator.tokens}
                  userStake={validator.userDelegations?.balance.amount ?? "0"}
                  commission={Number(
                    validator.validator.commission.commission_rates.rate
                  )}
                  jailed={validator.validator.jailed}
                  onClick={() => {
                    validatorModalStore.setActiveValidator(validator);
                    validatorModalStore.open(ValidatorModalType.STAKE);
                  }}
                  sortableProps={[
                    1 / Number(idx),
                    validator.validator.description.moniker,
                    Number(formatEther(validator.validator.tokens)),
                    Number(
                      formatEther(
                        validator.userDelegations?.balance.amount ?? "0"
                      )
                    ),
                    Number(
                      validator.validator.commission.commission_rates.rate
                    ),
                  ]}
                />
              );
            })
            .sort((a, b) => {
              return sortColumnsByType(
                a.props.sortableProps?.[columnClicked],
                b.props.sortableProps?.[columnClicked]
              );
            })}
        </FadeIn>
      </Table>
    );
  } else {
    return null;
  }
};

interface RowProps {
  rank: number;
  name: string;
  totalStake: string;
  userStake: string;
  commission: number;
  jailed: boolean;
  onClick?: () => void;
  sortableProps?: unknown[];
}
const Row = (props: RowProps) => {
  return (
    <tr
      onClick={props.onClick}
      className={`${props.jailed ? "jailed" : ""}`}
      style={{
        borderColor: props.jailed ? "#EF4444" : "var(--primary-color)",
      }}
    >
      <td>{props.rank}</td>
      <td>
        {props.jailed ? (
          <Popup
            trigger={<img style={{ height: "20px" }} src={jailedSymbol} />}
            on={["hover", "focus"]}
          >
            <ToolTipL style={{ width: "175px" }}>
              This validator is currently jailed
            </ToolTipL>
          </Popup>
        ) : null}
        {props.name}
      </td>
      <td>
        {formatLiquidity(Number(truncateNumber(formatEther(props.totalStake))))}{" "}
        <FaCoins/>
      </td>
      <td>
        {commify(truncateNumber(formatEther(props.userStake)))}
        <FaCoins/>
      </td>

      <td>{formatPercent(props.commission)}</td>
    </tr>
  );
};
