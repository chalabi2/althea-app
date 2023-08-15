import { getValidatorsInfo } from "./allUserValidatorInfo";

export async function getTop10Validators(nodeAddressIP: string) {
  const validatorsInfo = await getValidatorsInfo(nodeAddressIP);

  // Calculate average commission
  const averageCommission =
    validatorsInfo.reduce(
      (sum, validator) => sum + parseFloat(validator.commission),
      0
    ) / validatorsInfo.length;

  // Score validators
  validatorsInfo.forEach((validator) => {
    let score = 0;

    // Commission score
    const commissionDifference =
      averageCommission - parseFloat(validator.commission);
    if (commissionDifference < 0) {
      score -= Math.abs(commissionDifference); // Subtract when commission is above average
    } else {
      score += commissionDifference; // Add when commission is below average
    }

    // Missed blocks score
    if (validator.missedBlocks <= 500) {
      score += 5; // Add 5 points if missed blocks are 500 or below
    } else {
      score -= validator.missedBlocks - 500; // Subtract 1 point for every block above 500
    }

    // Slashes score
    if (validator.slashings > 1) {
      score -= (validator.slashings - 1) * 5;
    } else if (validator.slashings === 0) {
      score += 5;
    }

    validator.score = score;
  });

  // Remove validators with top 10 token share
  const sortedByTokens = [...validatorsInfo]
    .sort((a, b) => parseFloat(b.tokens) - parseFloat(a.tokens))
    .slice(0, 10);
  const top10TokenHolders = new Set(
    sortedByTokens.map((v) => v.operator_address)
  );
  const filteredValidators = validatorsInfo.filter(
    (v) => !top10TokenHolders.has(v.operator_address)
  );

  // Sort by score to get top 10 validators
  const top10Validators = filteredValidators
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return top10Validators;
}
