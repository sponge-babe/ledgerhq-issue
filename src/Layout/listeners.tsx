import { useEffect } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@coral-xyz/anchor";
import CachedService from "Classes/cachedService";
import {
  WhirlpoolContext,
  buildDefaultAccountFetcher,
  buildWhirlpoolClient,
} from "@orca-so/whirlpools-sdk";
import { WHIRLPOOL_PROGRAM_ID } from "Constants/address";

const Listeners = () => {
  const { connection } = useConnection();
  const anchrWallet = useAnchorWallet();

  useEffect(() => {
    let provider: anchor.Provider;
    if (anchrWallet) {
      provider = new anchor.AnchorProvider(connection, anchrWallet, {});
      anchor.setProvider(provider);
      const ctx = WhirlpoolContext.from(
        connection,
        anchrWallet,
        WHIRLPOOL_PROGRAM_ID
      );
      CachedService.WhirlpoolContext = ctx;
      const fetcher = buildDefaultAccountFetcher(ctx.provider.connection);
      const client = buildWhirlpoolClient(ctx);
      CachedService.WhirlpoolClient = client;
      CachedService.WhirlpoolFetcher = fetcher;
    }
  }, [anchrWallet, connection]);
  return <></>;
};

export default Listeners;
