import * as _layerzerolabs_ui_aptos from '@layerzerolabs/ui-aptos';
import * as ethers from 'ethers';
import * as _layerzerolabs_ui_mobx from '@layerzerolabs/ui-mobx';
import { AptosWalletAdapter, EvmWalletAdapter } from '@layerzerolabs/ui-mobx';
import * as react from 'react';
import * as _layerzerolabs_ui_core from '@layerzerolabs/ui-core';
import { TransactionResult, AdapterParams, FeeQuote, CurrencyAmount, Currency, Token } from '@layerzerolabs/ui-core';
export { Token } from '@layerzerolabs/ui-core';
import { TransferInput } from '@layerzerolabs/ui-bridge-sdk';
import * as _layerzerolabs_lz_sdk from '@layerzerolabs/lz-sdk';
import { ChainId } from '@layerzerolabs/lz-sdk';
import * as mobx_state_tree_dist_internal from 'mobx-state-tree/dist/internal';
import * as mobx_state_tree from 'mobx-state-tree';
import * as _mui_system from '@mui/system';
export { ThemeProvider } from '@mui/system';
export { createWagmiAdapter, createWagmiProvider } from '@layerzerolabs/ui-adapter-wagmi';

type BridgeStrategy = {
    approve(): Promise<unknown>;
    transfer(input: TransferInput): Promise<TransactionResult>;
    isApproved(): boolean | undefined;
    isApplicable(): boolean;
    getMessageFee(adapterParams?: AdapterParams): Promise<FeeQuote>;
    getBridgeFee(inputAmount: CurrencyAmount, dstChainId: ChainId): Promise<CurrencyAmount>;
    getUnclaimed(currency: Currency, account: string): Promise<CurrencyAmount>;
    supports(currency: Currency): boolean;
    claim(currency: Currency): Promise<TransactionResult>;
    register(currency: Currency): Promise<TransactionResult>;
    estimateNative: {
        register(currency: Currency): Promise<CurrencyAmount>;
    };
};

type Config = {
    proxy: {
        chainId: ChainId;
        address: string;
    }[];
    tokens: Token[];
};

declare function bootstrap(config: Config, adapters: {
    aptos?: AptosWalletAdapter;
    evm?: EvmWalletAdapter;
}): void;

declare const themeLight: _mui_system.Theme;
declare const themeDark: _mui_system.Theme;

declare const JoeBridge: () => JSX.Element;

declare const joeBridge: {
    bridge: {
        isMining: boolean;
        isSigning: boolean;
        isExecuting: boolean;
        isApproving: boolean;
        isRegistering: boolean;
        oftFee: (_layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> & mobx_state_tree.IStateTreeNode<mobx_state_tree.IType<_layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined, _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined, _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined>>) | undefined;
        form: {
            srcChainId: _layerzerolabs_lz_sdk.ChainId | undefined;
            dstChainId: _layerzerolabs_lz_sdk.ChainId | undefined;
            amount: string;
            dstNativeAmount: string;
        } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IOptionalIType<mobx_state_tree.IModelType<{
            srcChainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined>;
            dstChainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined>;
            amount: mobx_state_tree.IType<string | undefined, string, string>;
            dstNativeAmount: mobx_state_tree.IType<string | undefined, string, string>;
        }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, [undefined]>>;
        fees: mobx_state_tree.IMSTMap<mobx_state_tree.IType<_layerzerolabs_ui_core.FeeQuote, _layerzerolabs_ui_core.FeeQuote, _layerzerolabs_ui_core.FeeQuote>> & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMapType<mobx_state_tree.IType<_layerzerolabs_ui_core.FeeQuote, _layerzerolabs_ui_core.FeeQuote, _layerzerolabs_ui_core.FeeQuote>>>;
        tokens: mobx_state_tree.IMSTArray<mobx_state_tree.IType<Token, Token, Token>> & mobx_state_tree.IStateTreeNode<mobx_state_tree.IArrayType<mobx_state_tree.IType<Token, Token, Token>>>;
        proxyOFT: mobx_state_tree.IMSTArray<mobx_state_tree.IType<{
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }, {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }, {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }>> & mobx_state_tree.IStateTreeNode<mobx_state_tree.IArrayType<mobx_state_tree.IType<{
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }, {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }, {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }>>>;
        strategies: mobx_state_tree.IMSTArray<mobx_state_tree.IType<BridgeStrategy, BridgeStrategy, BridgeStrategy>> & mobx_state_tree.IStateTreeNode<mobx_state_tree.IArrayType<mobx_state_tree.IType<BridgeStrategy, BridgeStrategy, BridgeStrategy>>>;
    } & mobx_state_tree_dist_internal.NonEmptyObject & {
        readonly strategy: BridgeStrategy | undefined;
        readonly chains: _layerzerolabs_lz_sdk.ChainId[];
        readonly srcNetworkOptions: {
            chainId: _layerzerolabs_lz_sdk.ChainId;
            disabled?: boolean | undefined;
            overlay?: react.ReactNode;
        }[];
        readonly dstNetworkOptions: {
            chainId: _layerzerolabs_lz_sdk.ChainId;
            disabled?: boolean | undefined;
            overlay?: react.ReactNode;
        }[];
        readonly errors: string[];
        readonly srcAddress: string | undefined;
        readonly dstAddress: string | undefined;
        readonly dstWallet: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly srcWallet: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly maxAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly dstBalance: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly srcToken: Token | undefined;
        readonly dstToken: Token | undefined;
        readonly amount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly minAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly srcNativeCost: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly srcNativeBalance: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly dstNativeBalance: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly dstNativeAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly maxDstNativeAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly isApproved: boolean | undefined;
        readonly srcProxy: {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        } | undefined;
        readonly dstProxy: {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        } | undefined;
        readonly fee: _layerzerolabs_ui_core.FeeQuote | undefined;
        isSupportedChain(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
        getProxyOFT(chainId?: _layerzerolabs_lz_sdk.ChainId | undefined): {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        } | undefined;
        readonly adapterParams: _layerzerolabs_ui_core.AdapterParams | undefined;
        readonly isRegistered: boolean | undefined;
    } & {
        updateOftFee: () => Promise<void>;
    } & {
        setAmount(amount: string): void;
        setMaxAmount(): void;
        setDstNativeAmount(amount: string): void;
        setSrcChainId(chainId: _layerzerolabs_lz_sdk.ChainId): void;
        setDstChainId(chainId: _layerzerolabs_lz_sdk.ChainId): void;
        register: () => Promise<unknown>;
        approve: () => Promise<void>;
        switch(): void;
        updateFee: () => Promise<any>;
        resetAmount(): void;
        updateAllowances(): void;
        send: () => Promise<{
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_1 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_1>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>;
        updateBalances(wallets?: _layerzerolabs_ui_mobx.Wallet[]): Promise<PromiseSettledResult<void>[]>;
        setTokens(tokens: Token[]): void;
        setProxyOFT(proxyOFT?: {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }[]): void;
        setStrategies(strategies: BridgeStrategy[]): void;
        addStrategy(strategy: BridgeStrategy): void;
    } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
        isMining: mobx_state_tree.IType<boolean | undefined, boolean, boolean>;
        isSigning: mobx_state_tree.IType<boolean | undefined, boolean, boolean>;
        isExecuting: mobx_state_tree.IType<boolean | undefined, boolean, boolean>;
        isApproving: mobx_state_tree.IType<boolean | undefined, boolean, boolean>;
        isRegistering: mobx_state_tree.IType<boolean | undefined, boolean, boolean>;
        oftFee: mobx_state_tree.IType<_layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined, _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined, _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined>;
        form: mobx_state_tree.IOptionalIType<mobx_state_tree.IModelType<{
            srcChainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined>;
            dstChainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined, _layerzerolabs_lz_sdk.ChainId | undefined>;
            amount: mobx_state_tree.IType<string | undefined, string, string>;
            dstNativeAmount: mobx_state_tree.IType<string | undefined, string, string>;
        }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, [undefined]>;
        fees: mobx_state_tree.IMapType<mobx_state_tree.IType<_layerzerolabs_ui_core.FeeQuote, _layerzerolabs_ui_core.FeeQuote, _layerzerolabs_ui_core.FeeQuote>>;
        tokens: mobx_state_tree.IArrayType<mobx_state_tree.IType<Token, Token, Token>>;
        proxyOFT: mobx_state_tree.IArrayType<mobx_state_tree.IType<{
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }, {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }, {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }>>;
        strategies: mobx_state_tree.IArrayType<mobx_state_tree.IType<BridgeStrategy, BridgeStrategy, BridgeStrategy>>;
    }, {
        readonly strategy: BridgeStrategy | undefined;
        readonly chains: _layerzerolabs_lz_sdk.ChainId[];
        readonly srcNetworkOptions: {
            chainId: _layerzerolabs_lz_sdk.ChainId;
            disabled?: boolean | undefined;
            overlay?: react.ReactNode;
        }[];
        readonly dstNetworkOptions: {
            chainId: _layerzerolabs_lz_sdk.ChainId;
            disabled?: boolean | undefined;
            overlay?: react.ReactNode;
        }[];
        readonly errors: string[];
        readonly srcAddress: string | undefined;
        readonly dstAddress: string | undefined;
        readonly dstWallet: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly srcWallet: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly maxAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly dstBalance: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly srcToken: Token | undefined;
        readonly dstToken: Token | undefined;
        readonly amount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly minAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly srcNativeCost: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly srcNativeBalance: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly dstNativeBalance: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly dstNativeAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly maxDstNativeAmount: _layerzerolabs_ui_core.CurrencyAmount<_layerzerolabs_ui_core.Currency> | undefined;
        readonly isApproved: boolean | undefined;
        readonly srcProxy: {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        } | undefined;
        readonly dstProxy: {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        } | undefined;
        readonly fee: _layerzerolabs_ui_core.FeeQuote | undefined;
        isSupportedChain(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
        getProxyOFT(chainId?: _layerzerolabs_lz_sdk.ChainId | undefined): {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        } | undefined;
        readonly adapterParams: _layerzerolabs_ui_core.AdapterParams | undefined;
        readonly isRegistered: boolean | undefined;
    } & {
        updateOftFee: () => Promise<void>;
    } & {
        setAmount(amount: string): void;
        setMaxAmount(): void;
        setDstNativeAmount(amount: string): void;
        setSrcChainId(chainId: _layerzerolabs_lz_sdk.ChainId): void;
        setDstChainId(chainId: _layerzerolabs_lz_sdk.ChainId): void;
        register: () => Promise<unknown>;
        approve: () => Promise<void>;
        switch(): void;
        updateFee: () => Promise<any>;
        resetAmount(): void;
        updateAllowances(): void;
        send: () => Promise<{
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_1 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_1>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>;
        updateBalances(wallets?: _layerzerolabs_ui_mobx.Wallet[]): Promise<PromiseSettledResult<void>[]>;
        setTokens(tokens: Token[]): void;
        setProxyOFT(proxyOFT?: {
            address: string;
            chainId: _layerzerolabs_lz_sdk.ChainId;
        }[]): void;
        setStrategies(strategies: BridgeStrategy[]): void;
        addStrategy(strategy: BridgeStrategy): void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
    wallet: {
        evm: ({
            type: _layerzerolabs_ui_core.WalletType;
            account: string;
            evmChainId: number;
            signer: (ethers.Signer & mobx_state_tree.IStateTreeNode<mobx_state_tree.IType<ethers.Signer | undefined, ethers.Signer | undefined, ethers.Signer | undefined>>) | undefined;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            disconnect(): Promise<void>;
            switchChain(chainId: _layerzerolabs_lz_sdk.ChainId): Promise<void>;
        } & {
            supports(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
            readonly chainId: _layerzerolabs_lz_sdk.ChainId | undefined;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<_layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType>;
            account: mobx_state_tree.ISimpleType<string>;
            evmChainId: mobx_state_tree.ISimpleType<number>;
            signer: mobx_state_tree.IType<ethers.Signer | undefined, ethers.Signer | undefined, ethers.Signer | undefined>;
        }, {
            disconnect(): Promise<void>;
            switchChain(chainId: _layerzerolabs_lz_sdk.ChainId): Promise<void>;
        } & {
            supports(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
            readonly chainId: _layerzerolabs_lz_sdk.ChainId | undefined;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
        aptos: ({
            type: _layerzerolabs_ui_core.WalletType;
            account: string;
            aptosChainId: number | undefined;
            publicKey: string | undefined;
            signer: (_layerzerolabs_ui_aptos.AptosSigner & mobx_state_tree.IStateTreeNode<mobx_state_tree.IType<_layerzerolabs_ui_aptos.AptosSigner | undefined, _layerzerolabs_ui_aptos.AptosSigner | undefined, _layerzerolabs_ui_aptos.AptosSigner | undefined>>) | undefined;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            disconnect(): Promise<void>;
            switchChain(chainId: _layerzerolabs_lz_sdk.ChainId): never;
        } & {
            supports(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
            readonly chainId: _layerzerolabs_lz_sdk.ChainId | undefined;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<_layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType>;
            account: mobx_state_tree.ISimpleType<string>;
            aptosChainId: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            publicKey: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            signer: mobx_state_tree.IType<_layerzerolabs_ui_aptos.AptosSigner | undefined, _layerzerolabs_ui_aptos.AptosSigner | undefined, _layerzerolabs_ui_aptos.AptosSigner | undefined>;
        }, {
            disconnect(): Promise<void>;
            switchChain(chainId: _layerzerolabs_lz_sdk.ChainId): never;
        } & {
            supports(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
            readonly chainId: _layerzerolabs_lz_sdk.ChainId | undefined;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
        isSwitching: boolean;
    } & mobx_state_tree_dist_internal.NonEmptyObject & {
        readonly eth: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly activeWallet: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly wallets: _layerzerolabs_ui_mobx.Wallet[];
    } & {
        disconnect(walletType?: _layerzerolabs_ui_core.WalletType | undefined): Promise<void>;
        connect(walletType?: _layerzerolabs_ui_core.WalletType | undefined): Promise<void>;
        switchChain: (chainId: _layerzerolabs_lz_sdk.ChainId) => Promise<void>;
        useAptosWallet(context?: _layerzerolabs_ui_mobx.AptosWalletContext | undefined, name?: string | undefined): void;
        useEvmWallet(context?: _layerzerolabs_ui_mobx.EvmWalletContext | undefined, name?: string | undefined): void;
    } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
        evm: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<_layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType>;
            account: mobx_state_tree.ISimpleType<string>;
            evmChainId: mobx_state_tree.ISimpleType<number>;
            signer: mobx_state_tree.IType<ethers.Signer | undefined, ethers.Signer | undefined, ethers.Signer | undefined>;
        }, {
            disconnect(): Promise<void>;
            switchChain(chainId: _layerzerolabs_lz_sdk.ChainId): Promise<void>;
        } & {
            supports(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
            readonly chainId: _layerzerolabs_lz_sdk.ChainId | undefined;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
        aptos: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<_layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType, _layerzerolabs_ui_core.WalletType>;
            account: mobx_state_tree.ISimpleType<string>;
            aptosChainId: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            publicKey: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            signer: mobx_state_tree.IType<_layerzerolabs_ui_aptos.AptosSigner | undefined, _layerzerolabs_ui_aptos.AptosSigner | undefined, _layerzerolabs_ui_aptos.AptosSigner | undefined>;
        }, {
            disconnect(): Promise<void>;
            switchChain(chainId: _layerzerolabs_lz_sdk.ChainId): never;
        } & {
            supports(chainId: _layerzerolabs_lz_sdk.ChainId): boolean;
            readonly chainId: _layerzerolabs_lz_sdk.ChainId | undefined;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
        isSwitching: mobx_state_tree.IType<boolean | undefined, boolean, boolean>;
    }, {
        readonly eth: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly activeWallet: _layerzerolabs_ui_mobx.Wallet | undefined;
        readonly wallets: _layerzerolabs_ui_mobx.Wallet[];
    } & {
        disconnect(walletType?: _layerzerolabs_ui_core.WalletType | undefined): Promise<void>;
        connect(walletType?: _layerzerolabs_ui_core.WalletType | undefined): Promise<void>;
        switchChain: (chainId: _layerzerolabs_lz_sdk.ChainId) => Promise<void>;
        useAptosWallet(context?: _layerzerolabs_ui_mobx.AptosWalletContext | undefined, name?: string | undefined): void;
        useEvmWallet(context?: _layerzerolabs_ui_mobx.EvmWalletContext | undefined, name?: string | undefined): void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
    history: {
        transactions: mobx_state_tree.IMSTArray<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_2 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_2>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>> & mobx_state_tree.IStateTreeNode<mobx_state_tree.IOptionalIType<mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_3 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_3>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>, [undefined]>>;
    } & mobx_state_tree_dist_internal.NonEmptyObject & {
        readonly isPending: boolean;
        readonly hasPending: boolean;
        readonly recentTransactions: ({
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z_4 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_4>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_5 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_5>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>)[];
        readonly pendingTransactions: ({
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z_6 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_6>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_7 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_7>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>)[];
    } & {
        addTransaction(transaction: {
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z_8 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_8>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_8 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_8>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>): void;
        clear(): void;
        create: (snapshot?: mobx_state_tree.ModelCreationType<mobx_state_tree_dist_internal.ExtractCFromProps<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }>> | undefined, env?: any) => {
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_1 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_1>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
    } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
        transactions: mobx_state_tree.IOptionalIType<mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_9 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_9>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>, [undefined]>;
    }, {
        readonly isPending: boolean;
        readonly hasPending: boolean;
        readonly recentTransactions: ({
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z_10 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_10>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_11 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_11>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>)[];
        readonly pendingTransactions: ({
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z_12 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_12>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_13 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_13>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>)[];
    } & {
        addTransaction(transaction: {
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z_8 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_8>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_8 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_8>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>): void;
        clear(): void;
        create: (snapshot?: mobx_state_tree.ModelCreationType<mobx_state_tree_dist_internal.ExtractCFromProps<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }>> | undefined, env?: any) => {
            type: string;
            input: any;
            chainId: _layerzerolabs_lz_sdk.ChainId;
            expectedDate: number | undefined;
            submittedDate: number;
            error: any;
            txHash: string | undefined;
            confirmation: ({
                txHash: string | undefined;
                chainId: _layerzerolabs_lz_sdk.ChainId;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
            completed: boolean;
        } & mobx_state_tree_dist_internal.NonEmptyObject & {
            update<Z_14 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_14>): void;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            type: mobx_state_tree.IType<string, string, string>;
            input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
            submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
            error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
            txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
            confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
            completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            update<Z_15 extends {
                type: string;
                input: any;
                chainId: _layerzerolabs_lz_sdk.ChainId;
                expectedDate: number | undefined;
                submittedDate: number;
                error: any;
                txHash: string | undefined;
                confirmation: ({
                    txHash: string | undefined;
                    chainId: _layerzerolabs_lz_sdk.ChainId;
                } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>) | undefined;
                completed: boolean;
            } & mobx_state_tree_dist_internal.NonEmptyObject & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
                type: mobx_state_tree.IType<string, string, string>;
                input: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                expectedDate: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<number>>;
                submittedDate: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
                error: mobx_state_tree.IMaybeNull<mobx_state_tree.IType<any, any, any>>;
                txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                confirmation: mobx_state_tree.IMaybe<mobx_state_tree.IModelType<{
                    txHash: mobx_state_tree.IMaybe<mobx_state_tree.ISimpleType<string>>;
                    chainId: mobx_state_tree.IType<_layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId, _layerzerolabs_lz_sdk.ChainId>;
                }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
                completed: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>(changes: Partial<Z_15>): void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
};

export { JoeBridge as Bridge, bootstrap, joeBridge, themeDark, themeLight };
