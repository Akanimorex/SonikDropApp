import { CaipNetwork, createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import {
  sepolia as rawSepolia,
  baseSepolia as rawBaseSepolia,
  // sonic as rawSonic,
  liskSepolia as rawLiskSepolia,
  kairos as rawKairos,
  sonicTestnet as rawSonicTest
} from "@reown/appkit/networks";

export const sepolia: CaipNetwork = {
  ...rawSepolia,
  id: 11155111,
  chainNamespace: "eip155",
  caipNetworkId: "eip155:11155111",
};

export const baseSepolia: CaipNetwork = {
  ...rawBaseSepolia,
  id: 84532,
  chainNamespace: "eip155",
  caipNetworkId: "eip155:84532",
};


export const kairos:CaipNetwork = {
  ...rawKairos,
  id: 1001,
  chainNamespace: "eip155",
  caipNetworkId: "eip155:1001",
}

export const liskSepolia:CaipNetwork = {
  ...rawLiskSepolia,
  id: 4202,
  chainNamespace: "eip155",
  caipNetworkId: "eip155:4202",
}

// uncomment
// export const sonic:CaipNetwork = {
//   ...rawSonic,
//   id: 146,
//   chainNamespace: "eip155",
//   caipNetworkId: "eip155:146",
// }

export const sonic:CaipNetwork = {
  ...rawSonicTest,
  id: 57054,
  chainNamespace: "eip155",
  caipNetworkId: "eip155:57054",
}

// export const electroneumTestNetwork:CaipNetwork = {
//   ...rawElectroneumTestnet,
//   id: 5201420,
//   chainNamespace: "eip155",
//   caipNetworkId: "eip155:5201420",
//   rpcUrls : {
//     default: { http: [import.meta.env.VITE_ELECTRONEUM_TESTNET_RPC_URL] },
//   }
// }

// add for Sonic chain
// export const electroneumTestNetwork: CaipNetwork = {
//   id: 5201420,
//   chainNamespace: "eip155",
//   caipNetworkId: "eip155:5201420",
//   name: "Electroneum Testnet",
//   nativeCurrency: {
//     name: "Etn",
//     symbol: "ETN",
//     decimals: 18,
//   },
//   rpcUrls: {
//     default: { http: [import.meta.env.VITE_ELECTRONEUM_TESTNET_RPC_URL] },
//   },
//   blockExplorers: {
//     default: {
//       name: "Block Explorer",
//       url: import.meta.env.VITE_ELECTRONEUM_TESTNET_EXPLORER_URL,
//     },
//   },
// };
console.log("sonic shii ->>>>>>>>>>", sonic);

// 1. Get projectId
const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;

// 2. Set the networks
const networks: [CaipNetwork, ...CaipNetwork[]] = [
  sepolia,
  baseSepolia,
  liskSepolia,
  kairos,
  sonic
];

// 3. Create a metadata object - optional
const metadata = {
  name: "SonikDrop",
  description: "Swift & Cheap Airdrop as a service tool",
  url: "https://sonikdrop.vercel.app/",
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create a AppKit instance
export const appkit = createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  allowUnsupportedChain: false,
  allWallets: "SHOW",
  defaultNetwork: sonic,
  enableEIP6963: true,
  features: {
    analytics: true,
    allWallets: true,
    email: false,
    socials: [],
  },
});
appkit.switchNetwork(sonic);
