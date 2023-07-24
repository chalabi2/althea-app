import { TOKENS } from "global/config/tokenInfo";
import { LayerZeroToken } from "../bridgingInterfaces";

export const ALTHEA_OFT = (
  address: string,
  native: boolean
): LayerZeroToken => ({
  ...TOKENS.altheaMainnet.ALTHEA,
  address,
  isNative: native,
  isOFT: true,
});
