# TraderJoe Widget

See [Create React App](https://codesandbox.io/p/github/LayerZero-Labs/x-trader-joe-bridge-example/) example

## Configure WAGMI

```typescript
// config/wagmi.ts
import {getDefaultWallets} from '@rainbow-me/rainbowkit';
import {configureChains, createClient} from 'wagmi';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import * as wagmiDefaultChains from 'wagmi/chains';

import {createWagmiAdapter} from '@layerzerolabs/x-trader-joe-bridge';

const {chains: wagmiChains, provider} = configureChains(
  // provide wagmi chain configuration
  [alchemyProvider({apiKey: process.env.ALCHEMY_ID!}), publicProvider()],
);

const {connectors} = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains: wagmiChains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// create wallet adapter
const wagmiAdapter = createWagmiAdapter(wagmiClient as any);

export const wagmi = {
  wagmiClient,
  wagmiChains,
  wagmiAdapter,
};
```

## Configure your tokens

```typescript
// config/mainnet.ts
import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from '@layerzerolabs/x-trader-joe-bridge';

const tokens = [
  new Token(ChainId.BSC, '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07', 18, 'JOE'),
  new Token(ChainId.ARBITRUM, '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07', 18, 'JOE'),
  new Token(ChainId.AVALANCHE, '0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd', 18, 'JOE'),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    address: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
  },
];

export const mainnet = {tokens, proxy};
```

## Use adapter and bootstrap bridge

```typescript
// pages/index.tsx
import {
  Bridge,
  bootstrap,
  themeDark,
  themeLight,
  ThemeProvider,
  createWagmiProvider,
} from '@layerzerolabs/x-trader-joe-bridge';

// import your configuration
import {wagmi} from './config/wagmi';
import {testnet} from './config/testnet';

// boostrap the bridge
bootstrap(testnet, {
  evm: wagmi.wagmiAdapter,
});

const EthereumAdapterProvider = createWagmiProvider(wagmi) as React.FC<React.PropsWithChildren>;

const App = () => {
  return (
    <Layout>
      <EthereumAdapterProvider>
        <ThemeProvider theme={themeLight}>
          <Bridge />
        </ThemeProvider>
      </EthereumAdapterProvider>
    </Layout>
  );
};

export default App;
```
