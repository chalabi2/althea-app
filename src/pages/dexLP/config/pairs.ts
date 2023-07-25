import { ADDRESSES } from "global/config/addresses";
import { CTOKENS, TOKENS } from "global/config/tokenInfo";
import { PAIR } from "./interfaces";
import { AltheaMainnet, AltheaTestnet } from "global/config/networks";

export function getPairsForChainId(chainId?: number) {
  switch (chainId) {
    case AltheaTestnet.chainId:
      return ALTHEA_TEST_PAIRS;
    case AltheaMainnet.chainId:
    default:
      return ALTHEA_MAIN_PAIRS;
  }
}

const ALTHEA_TEST_PAIRS: PAIR[] = [
  {
    address: ADDRESSES.testnet.AltheaNoteLP,
    cLPaddress: ADDRESSES.testnet.cAltheaNoteLP,
    token1: { ...TOKENS.altheaTestnet.WALTHEA, symbol: "ALTHEA" }, // ALTHEA,
    token2: TOKENS.altheaTestnet.NOTE, // NOTE,
    decimals: TOKENS.altheaTestnet.AltheaNote.decimals,
    cDecimals: CTOKENS.altheaTestnet.CAltheaNote.decimals,
    stable: false,
  },
  {
    address: ADDRESSES.testnet.AltheaETHLP,
    cLPaddress: ADDRESSES.testnet.cAltheaETHLP,
    token1: { ...TOKENS.altheaTestnet.WALTHEA, symbol: "ALTHEA" }, // ALTHEA,
    token2: TOKENS.altheaTestnet.ETH, // ETH,
    decimals: TOKENS.altheaTestnet.AltheaETH.decimals,
    cDecimals: CTOKENS.altheaTestnet.CAltheaETH.decimals,
    stable: false,
  },
  {
    address: ADDRESSES.testnet.AltheaAtomLP,
    cLPaddress: ADDRESSES.testnet.cAltheaAtomLP,
    token1: { ...TOKENS.altheaTestnet.WALTHEA, symbol: "ALTHEA" }, // ALTHEA,
    token2: TOKENS.altheaTestnet.ATOM, // ATOM,
    decimals: TOKENS.altheaTestnet.AltheaAtom.decimals,
    cDecimals: CTOKENS.altheaTestnet.CAltheaAtom.decimals,
    stable: false,
  },
  {
    address: ADDRESSES.testnet.NoteUSDCLP,
    cLPaddress: ADDRESSES.testnet.cNoteUSDCLP,
    token1: TOKENS.altheaTestnet.NOTE, // NOTE,
    token2: TOKENS.altheaTestnet.USDC, // USDC,
    decimals: TOKENS.altheaTestnet.NoteUSDC.decimals,
    cDecimals: CTOKENS.altheaTestnet.CNoteUSDC.decimals,
    stable: true,
  },
  {
    address: ADDRESSES.testnet.NoteUSDTLP,
    cLPaddress: ADDRESSES.testnet.cNoteUSDTLP,
    token1: TOKENS.altheaTestnet.NOTE, // NOTE,
    token2: TOKENS.altheaTestnet.USDT, // USDT,
    decimals: TOKENS.altheaTestnet.NoteUSDT.decimals,
    cDecimals: CTOKENS.altheaTestnet.CNoteUSDT.decimals,
    stable: true,
  },
];
const ALTHEA_MAIN_PAIRS: PAIR[] = [
  {
    address: ADDRESSES.altheaMainnet.AltheaNoteLP,
    cLPaddress: ADDRESSES.altheaMainnet.cAltheaNoteLP,
    token1: { ...TOKENS.altheaMainnet.WALTHEA, symbol: "ALTHEA" }, // ALTHEA,
    token2: TOKENS.altheaMainnet.NOTE, // NOTE,
    decimals: TOKENS.altheaMainnet.AltheaNote.decimals,
    cDecimals: CTOKENS.altheaMainnet.CAltheaNote.decimals,
    stable: false,
  },
  {
    address: ADDRESSES.altheaMainnet.AltheaETHLP,
    cLPaddress: ADDRESSES.altheaMainnet.cAltheaETHLP,
    token1: { ...TOKENS.altheaMainnet.WALTHEA, symbol: "ALTHEA" }, // ALTHEA,
    token2: TOKENS.altheaMainnet.ETH, // ETH,
    decimals: TOKENS.altheaMainnet.AltheaETH.decimals,
    cDecimals: CTOKENS.altheaMainnet.CAltheaETH.decimals,
    stable: false,
  },
  {
    address: ADDRESSES.altheaMainnet.AltheaAtomLP,
    cLPaddress: ADDRESSES.altheaMainnet.cAltheaAtomLP,
    token1: { ...TOKENS.altheaMainnet.WALTHEA, symbol: "ALTHEA" }, // ALTHEA,
    token2: TOKENS.altheaMainnet.ATOM, // ATOM,
    decimals: TOKENS.altheaMainnet.AltheaAtom.decimals,
    cDecimals: CTOKENS.altheaMainnet.CAltheaAtom.decimals,
    stable: false,
  },
  {
    address: ADDRESSES.altheaMainnet.NoteUSDCLP,
    cLPaddress: ADDRESSES.altheaMainnet.cNoteUSDCLP,
    token1: TOKENS.altheaMainnet.NOTE, // NOTE,
    token2: TOKENS.altheaMainnet.USDC, // USDC,
    decimals: TOKENS.altheaMainnet.NoteUSDC.decimals,
    cDecimals: CTOKENS.altheaMainnet.CNoteUSDC.decimals,
    stable: true,
  },
  {
    address: ADDRESSES.altheaMainnet.NoteUSDTLP,
    cLPaddress: ADDRESSES.altheaMainnet.cNoteUSDTLP,
    token1: TOKENS.altheaMainnet.NOTE, // NOTE,
    token2: TOKENS.altheaMainnet.USDT, // USDT,
    decimals: TOKENS.altheaMainnet.NoteUSDT.decimals,
    cDecimals: CTOKENS.altheaMainnet.CNoteUSDT.decimals,
    stable: true,
  },
];
