import { PublicKey } from "@solana/web3.js";
import { Environment } from "Types/misc";

export const WHIRLPOOL_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_ENVIRONMENT === Environment.dev
    ? "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc"
    : "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc"
);
