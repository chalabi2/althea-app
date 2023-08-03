import { CTOKEN } from "global/config/interfaces/tokens";
import { AltheaTestnet } from "global/config/networks";
import { AltheaMainnet } from "global/config/networks";
import { CTOKENS } from "global/config/tokenInfo";

export function getCTokensForChainId(chainId?: number) {
  switch (chainId) {
    case AltheaTestnet.chainId:
      return ALTHEA_TEST_C_TOKENS;
    case AltheaMainnet.chainId:
    default:
      return ALTHEA_MAIN_C_TOKENS;
  }
}

const ALTHEA_TEST_C_TOKENS: CTOKEN[] = [
  CTOKENS.altheaTestnet.CALTHEA,
  CTOKENS.altheaTestnet.CNOTE,
  CTOKENS.altheaTestnet.CETH,
  CTOKENS.altheaTestnet.CATOM,
  CTOKENS.altheaTestnet.CUSDC,
  CTOKENS.altheaTestnet.CUSDT,
  CTOKENS.altheaTestnet.CAltheaNote,
  CTOKENS.altheaTestnet.CAltheaAtom,
  CTOKENS.altheaTestnet.CNoteUSDC,
  CTOKENS.altheaTestnet.CNoteUSDT,
  CTOKENS.altheaTestnet.CAltheaETH,
];

const ALTHEA_MAIN_C_TOKENS = [
  CTOKENS.altheaMainnet.CALTHEA,
  CTOKENS.altheaMainnet.CNOTE,
  CTOKENS.altheaMainnet.CETH,
  CTOKENS.altheaMainnet.CATOM,
  CTOKENS.altheaMainnet.CUSDC,
  CTOKENS.altheaMainnet.CUSDT,
  CTOKENS.altheaMainnet.CAltheaNote,
  CTOKENS.altheaMainnet.CAltheaAtom,
  CTOKENS.altheaMainnet.CNoteUSDC,
  CTOKENS.altheaMainnet.CNoteUSDT,
  CTOKENS.altheaMainnet.CAltheaETH,
];
