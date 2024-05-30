import { useCallback, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import { WalletError, WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import * as MobileAdapter from "@solana-mobile/wallet-adapter-mobile";
import Routes from "./Routes";
import { HELIUS_MAINNET_RPC } from "Constants/endpoints";
import {
  WalletModalProvider,
  BaseWalletMultiButton,
} from "Components/walletModal";

require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletButton = BaseWalletMultiButton;

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/*",
          element: <Routes />,
          errorElement: <></>,
        },
      ]),
    []
  );
  const wallets = useMemo(
    () => [
      new walletAdapterWallets.SolongWalletAdapter(),
      new walletAdapterWallets.SafePalWalletAdapter(),
      new walletAdapterWallets.MathWalletAdapter(),
      new walletAdapterWallets.LedgerWalletAdapter(),
      new walletAdapterWallets.HuobiWalletAdapter(),
      new walletAdapterWallets.CoinbaseWalletAdapter(),
      new walletAdapterWallets.CoinhubWalletAdapter(),
      new walletAdapterWallets.Coin98WalletAdapter(),
      new walletAdapterWallets.BitgetWalletAdapter(),
      new MobileAdapter.SolanaMobileWalletAdapter({
        addressSelector: MobileAdapter.createDefaultAddressSelector(),
        appIdentity: {
          name: "Mesh Protocol",
          uri: window.location.href,
          icon: "logo192.png",
        },
        authorizationResultCache:
          MobileAdapter.createDefaultAuthorizationResultCache(),
        // chain: WalletAdapterNetwork.Devnet,
        cluster: WalletAdapterNetwork.Mainnet,
        onWalletNotFound: MobileAdapter.createDefaultWalletNotFoundHandler(),
      }),
    ],
    []
  );
  const onError = useCallback((error: WalletError) => {
    console.error(error);
  }, []);
  return (
    <ConnectionProvider endpoint={HELIUS_MAINNET_RPC}>
      <WalletProvider wallets={wallets} autoConnect={true} onError={onError}>
        <WalletModalProvider>
          <RouterProvider router={router} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
