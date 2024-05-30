import {
  WhirlpoolAccountFetcher,
  WhirlpoolClient,
  WhirlpoolContext,
} from "@orca-so/whirlpools-sdk";
import { NavigateFunction } from "react-router";

class Cache {
  navigation: NavigateFunction = () => {};
  WhirlpoolContext: WhirlpoolContext | undefined = undefined;
  WhirlpoolFetcher: WhirlpoolAccountFetcher | undefined = undefined;
  WhirlpoolClient: WhirlpoolClient | undefined = undefined;
}

const CachedService = new Cache();

export default CachedService;
