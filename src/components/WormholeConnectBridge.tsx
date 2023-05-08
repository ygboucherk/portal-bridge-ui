import { useEffect } from "react";
import { CLUSTER } from "../utils/consts";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    config?: string;
  }
}

const CONFIG = {
  env: CLUSTER,
  bridgeDefaults: {
    requiredNetwork: "sui",
    toNetwork: "sui",
  },
  networks: [
    "ethereum",
    "bsc",
    "polygon",
    "avalanche",
    "fantom",
    "celo",
    "moonbeam",
    "goerli",
    "mumbai",
    "fuji",
    "alfajores",
    "moonbasealpha",
    "sui",
  ],
  mode: "dark",
  customTheme: {
    background: { default: "transparent" },
    button: {
      primary: "#ffffff19",
      primaryText: "#ffffff",
      disabled: "#ffffff0F",
      disabledText: "#ffffff66",
      action: "#ffffff",
      actionText: "#17153F",
      hover: "#ffffff0F",
    },
    font: {
      primary: "Poppins, sans-serif",
      header: "Suisse BP Intl, sans-serif",
    },
  },
};

const WormholeConnectBridge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.0.2/dist/main.js";
    script.async = true;

    const link = document.createElement("link");
    link.href =
      "https://www.unpkg.com/@wormhole-foundation/wormhole-connect@0.0.2/dist/main.css";

    document.body.appendChild(script);
    document.body.appendChild(link);
  }, []);

  return <div id="wormhole-connect" config={JSON.stringify(CONFIG)}></div>;
};

export default WormholeConnectBridge;
