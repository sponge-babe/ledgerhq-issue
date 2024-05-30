import { WalletButton } from "App";
import { WALLET_BTN_LABELS } from "Constants/misc";
const Home = () => {
  return (
    <div>
      <WalletButton
        labels={WALLET_BTN_LABELS}
        style={{ borderRadius: "4px", fontFamily: "inter" }}
      />
      <p>asdasdasd</p>
    </div>
  );
};

export default Home;
