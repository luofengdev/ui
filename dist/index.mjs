import { keyframes, styled, Box, createTheme, useTheme, Stack, GlobalStyles } from '@mui/system';
export { ThemeProvider } from '@mui/system';
import * as $cjs$ethers from 'ethers';
import * as assert6 from 'assert';
import assert6__default from 'assert';
import * as $cjs$_layerzerolabs_lz_sdk from '@layerzerolabs/lz-sdk';
import { ChainId } from '@layerzerolabs/lz-sdk';
import * as $cjs$jsbi from 'jsbi';
import * as $cjs$toformat from 'toformat';
import * as $cjs$big_js from 'big.js';
import * as $cjs$decimal_js_light from 'decimal.js-light';
import * as $cjs$axios from 'axios';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import { WagmiConfig, useSwitchNetwork } from 'wagmi';
import * as React5 from 'react';
import React5__default, { forwardRef, useState, useRef, useEffect, useCallback, Children, isValidElement, createElement, cloneElement, createContext, useMemo, Fragment as Fragment$1, useContext, useLayoutEffect } from 'react';
import { watchSigner, disconnect } from '@wagmi/core';
import { types, flow, onSnapshot, applySnapshot, getSnapshot } from 'mobx-state-tree';
import * as $cjs$lodash from 'lodash';
import { compact, sortBy, intersection, uniq, memoize, cloneDeepWith } from 'lodash';
import * as $cjs$_ethersproject_providers from '@ethersproject/providers';
import * as $cjs$_ethersproject_logger from '@ethersproject/logger';
import { now } from 'mobx-utils';
import { autorun } from 'mobx';
import { toast, ToastContainer } from 'react-toastify';
import { observer } from 'mobx-react';
import * as Dialog from '@radix-ui/react-dialog';
import 'react-dom';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../ui-core/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  AdapterParams: () => __export02,
  AptosChainId: () => __export18,
  BLOCK_CONFIRMATIONS: () => __export52,
  BLOCK_EXPLORERS: () => __export24,
  BaseCurrency: () => __export09,
  ChainType: () => __export4,
  Coin: () => __export011,
  CurrencyAmount: () => __export36,
  DEFAULT_BLOCK_CONFIRMATIONS: () => __export62,
  DEFAULT_BLOCK_TIME_SECONDS: () => __export72,
  Fraction: () => __export211,
  IconTheme: () => __export44,
  MaxUint256: () => __export020,
  NETWORKS: () => __export122,
  Percent: () => __export117,
  Price: () => __export032,
  ResourceProvider__currency_evm: () => __export016,
  Rounding: () => __export112,
  Token: () => __export010,
  WALLETS_APTOS: () => __export03,
  WALLETS_EVM: () => __export12,
  WALLET_EXTENSION_MAP: () => __export13,
  WalletType: () => __export2,
  assertToken: () => __export25,
  bpToFraction: () => __export029,
  castCurrencyAmountUnsafe: () => __export028,
  convertToPaddedUint8Array: () => __export017,
  default: () => dist_default,
  escapeRegExp: () => __export018,
  formatAmount: () => __export210,
  formatCurrencyAmount: () => __export116,
  formatFiatAmount: () => __export027,
  fromAptosChainId: () => __export014,
  fromEvmChainId: () => __export015,
  getAddressLink: () => __export26,
  getAvailableWallets: () => __export3,
  getBlockExplorer: () => __export15,
  getBlockLink: () => __export34,
  getBlockTime: () => __export43,
  getChainKey: () => __export7,
  getChainStage: () => __export5,
  getChainType: () => __export23,
  getCurrencyIcon: () => __export37,
  getEstimatedTransactionTime: () => __export29,
  getExpectedDate: () => __export019,
  getNativeCurrency: () => __export8,
  getNetwork: () => __export10,
  getNetworkIcon: () => __export212,
  getRequiredBlockConfirmations: () => __export35,
  getScanLink: () => __export013,
  getTransactionLink: () => __export17,
  getWalletExtensionUrl: () => __export04,
  getWalletIcon: () => __export118,
  http: () => __export034,
  isAptosChainId: () => __export06,
  isChainOnStage: () => __export42,
  isChainType: () => __export32,
  isCoin: () => __export16,
  isCurrency: () => __export012,
  isEvmAddress: () => __export11,
  isEvmChainId: () => __export14,
  isNativeCurrency: () => __export6,
  isSupportedEvmChainId: () => __export19,
  isToken: () => __export33,
  isWalletAvailable: () => __export22,
  parseCurrencyAmount: () => __export113,
  parseFraction: () => __export115,
  parseNumber: () => __export110,
  setIconTheme: () => __export033,
  sumFiat: () => __export025,
  sumUnsafe: () => __export114,
  timeStamp: () => __export111,
  toBigInt: () => __export0,
  toBigNumber: () => __export1,
  toCurrencyAmount: () => __export023,
  toEvmChainId: () => __export27,
  toULNv2: () => __export05,
  tryGetBlockExplorer: () => __export07,
  tryGetNetwork: () => __export9,
  tryParseCurrencyAmount: () => __export024,
  tryParseFraction: () => __export026,
  tryParseNumber: () => __export28,
  validateAndParseAddress: () => __export08
});

// ../ui-core/dist/types/FeeQuote.js
var FeeQuote_exports = {};
__export(FeeQuote_exports, {
  default: () => FeeQuote_default
});
var exports = {};
var module = {
  get exports() {
    return exports;
  },
  set exports(value) {
    exports = value;
  }
};
Object.defineProperty(exports, "__esModule", { value: true });
var FeeQuote_default = module.exports != null && typeof module.exports === "object" && "default" in module.exports ? module.exports.default : module.exports;

// ../ui-core/dist/types/DstPrice.js
var DstPrice_exports = {};
__export(DstPrice_exports, {
  default: () => DstPrice_default
});
var exports2 = {};
var module2 = {
  get exports() {
    return exports2;
  },
  set exports(value) {
    exports2 = value;
  }
};
Object.defineProperty(exports2, "__esModule", { value: true });
var DstPrice_default = module2.exports != null && typeof module2.exports === "object" && "default" in module2.exports ? module2.exports.default : module2.exports;

// ../ui-core/dist/types/DstConfig.js
var DstConfig_exports = {};
__export(DstConfig_exports, {
  default: () => DstConfig_default
});
var exports3 = {};
var module3 = {
  get exports() {
    return exports3;
  },
  set exports(value) {
    exports3 = value;
  }
};
Object.defineProperty(exports3, "__esModule", { value: true });
var DstConfig_default = module3.exports != null && typeof module3.exports === "object" && "default" in module3.exports ? module3.exports.default : module3.exports;

// ../ui-core/dist/types/AdapterParams.js
var AdapterParams_exports = {};
__export(AdapterParams_exports, {
  AdapterParams: () => __export02
});

// ../ui-core/dist/fraction/utils/toBigNumber.js
var toBigNumber_exports = {};
__export(toBigNumber_exports, {
  toBigInt: () => __export0,
  toBigNumber: () => __export1
});
function $$cjs_default$$(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global !== "undefined" && global || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global !== "undefined" && global || typeof globalThis !== "undefined" && globalThis || {};
var exports4 = {};
var module4 = {
  get exports() {
    return exports4;
  },
  set exports(value) {
    exports4 = value;
  }
};
Object.defineProperty(exports4, "__esModule", { value: true });
exports4.toBigInt = exports4.toBigNumber = void 0;
var ethers_1 = $$cjs_default$$(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
function toBigNumber(amount) {
  return ethers_1.BigNumber.from(amount.quotient.toString());
}
exports4.toBigNumber = toBigNumber;
function toBigInt(amount) {
  return BigInt(amount.quotient.toString());
}
exports4.toBigInt = toBigInt;
var __export0;
var __export1;
if (Object.isExtensible(module4.exports)) {
  __export0 = module4.exports["toBigInt"];
  __export1 = module4.exports["toBigNumber"];
}
function $$cjs_default$$2(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global2 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2 || typeof globalThis !== "undefined" && globalThis || {};
var exports5 = {};
var module5 = {
  get exports() {
    return exports5;
  },
  set exports(value) {
    exports5 = value;
  }
};
var __importDefault = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports5, "__esModule", { value: true });
exports5.AdapterParams = void 0;
var assert_1 = __importDefault($$cjs_default$$2(typeof assert6 !== "undefined" ? assert6 : {}));
var ethers_12 = $$cjs_default$$2(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var toBigNumber_1 = $$cjs_default$$2(typeof toBigNumber_exports !== "undefined" ? toBigNumber_exports : {});
var AdapterParams = class {
  constructor(version, extraGas = 2e5, dstNativeAmount, dstNativeAddress) {
    this.version = version;
    this.extraGas = extraGas;
    this.dstNativeAmount = dstNativeAmount;
    this.dstNativeAddress = dstNativeAddress;
  }
  static forV1(extraGas) {
    return new AdapterParams(1, extraGas);
  }
  static forV2(input) {
    (0, assert_1.default)(input.dstNativeAmount);
    (0, assert_1.default)(input.dstNativeAddress);
    return new AdapterParams(2, input.extraGas, input.dstNativeAmount, input.dstNativeAddress);
  }
  create(input) {
    var _a;
    if ((_a = input.dstNativeAmount) === null || _a === void 0 ? void 0 : _a.greaterThan(1)) {
      return AdapterParams.forV1(input.extraGas);
    } else {
      (0, assert_1.default)(input.dstNativeAddress);
      (0, assert_1.default)(input.dstNativeAmount);
      return AdapterParams.forV2(input);
    }
  }
  serialize() {
    if (this.version === 1) {
      return ethers_12.utils.solidityPack(["uint16", "uint256"], [1, this.extraGas]);
    } else {
      return ethers_12.utils.solidityPack(["uint16", "uint", "uint", "address"], [2, this.extraGas, (0, toBigNumber_1.toBigNumber)(this.dstNativeAmount), this.dstNativeAddress]);
    }
  }
};
exports5.AdapterParams = AdapterParams;
var __export02;
if (Object.isExtensible(module5.exports)) {
  __export02 = module5.exports["AdapterParams"];
}

// ../ui-core/dist/wallet/walletUtils.js
var walletUtils_exports = {};
__export(walletUtils_exports, {
  WALLET_EXTENSION_MAP: () => __export13,
  getAvailableWallets: () => __export3,
  getWalletExtensionUrl: () => __export04,
  isWalletAvailable: () => __export22
});

// ../ui-core/dist/wallet/walletType.js
var walletType_exports = {};
__export(walletType_exports, {
  WALLETS_APTOS: () => __export03,
  WALLETS_EVM: () => __export12,
  WalletType: () => __export2
});
var exports6 = {};
var module6 = {
  get exports() {
    return exports6;
  },
  set exports(value) {
    exports6 = value;
  }
};
Object.defineProperty(exports6, "__esModule", { value: true });
exports6.WALLETS_APTOS = exports6.WALLETS_EVM = exports6.WalletType = void 0;
var WalletType;
(function(WalletType4) {
  WalletType4["Pontem"] = "Pontem";
  WalletType4["Petra"] = "Petra";
  WalletType4["Brave"] = "Brave";
  WalletType4["Martian"] = "Martian";
  WalletType4["Fewcha"] = "Fewcha";
  WalletType4["MetaMask"] = "MetaMask";
  WalletType4["CoinBase"] = "CoinBase";
  WalletType4["Core"] = "Core";
  WalletType4["WalletConnect"] = "WalletConnect";
})(WalletType = exports6.WalletType || (exports6.WalletType = {}));
exports6.WALLETS_EVM = [
  WalletType.MetaMask,
  WalletType.Core,
  WalletType.Brave,
  WalletType.CoinBase
];
exports6.WALLETS_APTOS = [
  WalletType.Pontem,
  WalletType.Fewcha,
  WalletType.Martian,
  WalletType.Petra
];
var __export03;
var __export12;
var __export2;
if (Object.isExtensible(module6.exports)) {
  __export03 = module6.exports["WALLETS_APTOS"];
  __export12 = module6.exports["WALLETS_EVM"];
  __export2 = module6.exports["WalletType"];
}

// ../ui-core/dist/wallet/walletUtils.js
function $$cjs_default$$3(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global3 !== "undefined" && global3 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global3 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global3 !== "undefined" && global3 || typeof globalThis !== "undefined" && globalThis || {};
var exports7 = {};
var module7 = {
  get exports() {
    return exports7;
  },
  set exports(value) {
    exports7 = value;
  }
};
Object.defineProperty(exports7, "__esModule", { value: true });
exports7.getWalletExtensionUrl = exports7.WALLET_EXTENSION_MAP = exports7.isWalletAvailable = exports7.getAvailableWallets = void 0;
var walletType_1 = $$cjs_default$$3(typeof walletType_exports !== "undefined" ? walletType_exports : {});
function getAvailableWallets() {
  var _a, _b, _c, _d;
  const global67 = typeof window === "undefined" ? {} : window;
  const wallet = {
    [walletType_1.WalletType.MetaMask]: !!((_a = global67.ethereum) === null || _a === void 0 ? void 0 : _a.isMetaMask) && !((_b = global67.ethereum) === null || _b === void 0 ? void 0 : _b.isBrave),
    [walletType_1.WalletType.Brave]: !!((_c = global67.ethereum) === null || _c === void 0 ? void 0 : _c.isBrave),
    [walletType_1.WalletType.CoinBase]: !!global67.coinbaseWalletExtension,
    [walletType_1.WalletType.Pontem]: !!global67.pontem,
    [walletType_1.WalletType.Martian]: !!global67.martian,
    [walletType_1.WalletType.Fewcha]: !!((_d = global67.fewcha) === null || _d === void 0 ? void 0 : _d.isFewcha),
    [walletType_1.WalletType.Petra]: !!global67.petra,
    [walletType_1.WalletType.Core]: !!global67.avalanche,
    [walletType_1.WalletType.WalletConnect]: true
  };
  return wallet;
}
exports7.getAvailableWallets = getAvailableWallets;
function isWalletAvailable(walletType) {
  if (typeof window === "undefined")
    return false;
  const availableWallets = getAvailableWallets();
  return availableWallets[walletType] || false;
}
exports7.isWalletAvailable = isWalletAvailable;
exports7.WALLET_EXTENSION_MAP = {
  [walletType_1.WalletType.CoinBase]: "https://www.coinbase.com/wallet",
  [walletType_1.WalletType.Fewcha]: "https://fewcha.app/",
  [walletType_1.WalletType.Martian]: "https://martianwallet.xyz/",
  [walletType_1.WalletType.MetaMask]: "https://metamask.io/",
  [walletType_1.WalletType.Pontem]: "https://pontem.network/",
  [walletType_1.WalletType.Petra]: "https://petra.app/",
  [walletType_1.WalletType.Brave]: "https://brave.com/wallet/",
  [walletType_1.WalletType.Core]: "https://core.app/",
  [walletType_1.WalletType.WalletConnect]: "https://walletconnect.com/"
};
function getWalletExtensionUrl(walletType) {
  return exports7.WALLET_EXTENSION_MAP[walletType];
}
exports7.getWalletExtensionUrl = getWalletExtensionUrl;
var __export04;
var __export13;
var __export22;
var __export3;
if (Object.isExtensible(module7.exports)) {
  __export04 = module7.exports["getWalletExtensionUrl"];
  __export13 = module7.exports["WALLET_EXTENSION_MAP"];
  __export22 = module7.exports["isWalletAvailable"];
  __export3 = module7.exports["getAvailableWallets"];
}

// ../ui-core/dist/providers/ResourceProvider__currency_evm.js
var ResourceProvider_currency_evm_exports = {};
__export(ResourceProvider_currency_evm_exports, {
  ResourceProvider__currency_evm: () => __export016
});

// ../ui-core/dist/network/index.js
var network_exports = {};
__export(network_exports, {
  AptosChainId: () => __export18,
  BLOCK_EXPLORERS: () => __export24,
  ChainType: () => __export4,
  NETWORKS: () => __export122,
  default: () => network_default,
  fromAptosChainId: () => __export014,
  fromEvmChainId: () => __export015,
  getAddressLink: () => __export26,
  getBlockExplorer: () => __export15,
  getBlockLink: () => __export34,
  getChainKey: () => __export7,
  getChainStage: () => __export5,
  getChainType: () => __export23,
  getNativeCurrency: () => __export8,
  getNetwork: () => __export10,
  getScanLink: () => __export013,
  getTransactionLink: () => __export17,
  isAptosChainId: () => __export06,
  isChainOnStage: () => __export42,
  isChainType: () => __export32,
  isEvmAddress: () => __export11,
  isEvmChainId: () => __export14,
  isNativeCurrency: () => __export6,
  isSupportedEvmChainId: () => __export19,
  toEvmChainId: () => __export27,
  toULNv2: () => __export05,
  tryGetBlockExplorer: () => __export07,
  tryGetNetwork: () => __export9
});

// ../ui-core/dist/network/toULNv2.js
var toULNv2_exports = {};
__export(toULNv2_exports, {
  toULNv2: () => __export05
});
var exports8 = {};
var module8 = {
  get exports() {
    return exports8;
  },
  set exports(value) {
    exports8 = value;
  }
};
Object.defineProperty(exports8, "__esModule", { value: true });
exports8.toULNv2 = void 0;
var EXCEPTIONS = /* @__PURE__ */ new Set([20008]);
function toULNv2(chainId) {
  if (EXCEPTIONS.has(chainId))
    return chainId;
  if (chainId < 100)
    return chainId + 100;
  if (chainId < 1e4)
    return chainId;
  if (chainId < 10100)
    return chainId + 100;
  if (chainId < 2e4)
    return chainId;
  if (chainId < 20100)
    return chainId + 100;
  return chainId;
}
exports8.toULNv2 = toULNv2;
var __export05;
if (Object.isExtensible(module8.exports)) {
  __export05 = module8.exports["toULNv2"];
}

// ../ui-core/dist/network/chainType.js
var chainType_exports = {};
__export(chainType_exports, {
  ChainType: () => __export4,
  getChainType: () => __export23,
  isAptosChainId: () => __export06,
  isChainType: () => __export32,
  isEvmChainId: () => __export14
});
function $$cjs_default$$4(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global4 !== "undefined" && global4 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global4 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global4 !== "undefined" && global4 || typeof globalThis !== "undefined" && globalThis || {};
var exports9 = {};
var module9 = {
  get exports() {
    return exports9;
  },
  set exports(value) {
    exports9 = value;
  }
};
Object.defineProperty(exports9, "__esModule", { value: true });
exports9.isAptosChainId = exports9.isEvmChainId = exports9.getChainType = exports9.isChainType = exports9.ChainType = void 0;
var lz_sdk_1 = $$cjs_default$$4(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var ChainType;
(function(ChainType2) {
  ChainType2["EVM"] = "EVM";
  ChainType2["APTOS"] = "APTOS";
  ChainType2["SOLANA"] = "SOLANA";
})(ChainType = exports9.ChainType || (exports9.ChainType = {}));
var APTOS = [lz_sdk_1.ChainId.APTOS, lz_sdk_1.ChainId.APTOS_TESTNET, lz_sdk_1.ChainId.APTOS_TESTNET_SANDBOX];
var SOLANA = [];
function isChainType(chainId, chainType) {
  if (chainType === ChainType.APTOS)
    return APTOS.includes(chainId);
  if (chainType === ChainType.SOLANA)
    return SOLANA.includes(chainId);
  if (SOLANA.includes(chainId))
    return false;
  if (APTOS.includes(chainId))
    return false;
  return true;
}
exports9.isChainType = isChainType;
function getChainType(chainId) {
  if (isChainType(chainId, ChainType.APTOS))
    return ChainType.APTOS;
  if (isChainType(chainId, ChainType.SOLANA))
    return ChainType.SOLANA;
  return ChainType.EVM;
}
exports9.getChainType = getChainType;
function isEvmChainId(chainId) {
  return isChainType(chainId, ChainType.EVM);
}
exports9.isEvmChainId = isEvmChainId;
function isAptosChainId(chainId) {
  return isChainType(chainId, ChainType.APTOS);
}
exports9.isAptosChainId = isAptosChainId;
var __export06;
var __export14;
var __export23;
var __export32;
var __export4;
if (Object.isExtensible(module9.exports)) {
  __export06 = module9.exports["isAptosChainId"];
  __export14 = module9.exports["isEvmChainId"];
  __export23 = module9.exports["getChainType"];
  __export32 = module9.exports["isChainType"];
  __export4 = module9.exports["ChainType"];
}

// ../ui-core/dist/network/getBlockExplorer.js
var getBlockExplorer_exports = {};
__export(getBlockExplorer_exports, {
  BLOCK_EXPLORERS: () => __export24,
  getBlockExplorer: () => __export15,
  tryGetBlockExplorer: () => __export07
});
function $$cjs_default$$5(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global5 !== "undefined" && global5 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global5 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global5 !== "undefined" && global5 || typeof globalThis !== "undefined" && globalThis || {};
var exports10 = {};
var module10 = {
  get exports() {
    return exports10;
  },
  set exports(value) {
    exports10 = value;
  }
};
Object.defineProperty(exports10, "__esModule", { value: true });
exports10.tryGetBlockExplorer = exports10.getBlockExplorer = exports10.BLOCK_EXPLORERS = void 0;
var lz_sdk_12 = $$cjs_default$$5(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var toULNv2_1 = $$cjs_default$$5(typeof toULNv2_exports !== "undefined" ? toULNv2_exports : {});
exports10.BLOCK_EXPLORERS = addSandboxBlockExplorers([
  { chainId: lz_sdk_12.ChainId.ETHEREUM, url: "https://etherscan.com", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.GOERLI, url: "https://goerli.etherscan.io", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.RINKEBY, url: "https://rinkeby.etherscan.io", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.FANTOM, url: "https://ftmscan.com", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.FANTOM_TESTNET, url: "https://testnet.ftmscan.com", name: "block explorer" },
  {
    chainId: lz_sdk_12.ChainId.FANTOM_TESTNET_SANDBOX,
    url: "https://testnet.ftmscan.com",
    name: "block explorer"
  },
  { chainId: lz_sdk_12.ChainId.ARBITRUM, url: "https://arbiscan.io", name: "block explorer" },
  {
    chainId: lz_sdk_12.ChainId.ARBITRUM_GOERLI,
    url: "https://goerli.arbiscan.io",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.ARBITRUM_RINKEBY,
    url: "https://rinkeby-explorer.arbitrum.io",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.POLYGON,
    url: "https://explorer-mainnet.maticvigil.com",
    name: "block explorer"
  },
  { chainId: lz_sdk_12.ChainId.MUMBAI, url: "https://mumbai.polygonscan.com", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.MUMBAI_SANDBOX, url: "https://mumbai.polygonscan.com", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.BSC, url: "https://bscscan.com", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.BSC_TESTNET, url: "https://testnet.bscscan.com", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.AVALANCHE, url: "https://cchain.explorer.avax.network", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.FUJI, url: "https://testnet.snowtrace.io", name: "block explorer" },
  { chainId: lz_sdk_12.ChainId.OPTIMISM, url: "https://optimistic.etherscan.io", name: "block explorer" },
  {
    chainId: lz_sdk_12.ChainId.OPTIMISM_KOVAN,
    url: "https://kovan-optimistic.etherscan.io",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.OPTIMISM_GOERLI,
    url: "https://goerli-optimism.etherscan.io/",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.HARMONY,
    url: "https://explorer.harmony.one",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.DFK,
    url: "https://subnets.avax.network/defi-kingdoms",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.SWIMMER,
    url: "https://explorer.swimmer.network",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.DEXALOT_TESTNET,
    url: "https://subnets-test.avax.network/dexalot",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.MOONBEAM,
    url: "https://moonscan.io",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.GOERLI,
    url: "https://goerli.etherscan.io",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.APTOS,
    url: "https://explorer.aptoslabs.com",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.APTOS_TESTNET,
    url: "https://explorer.aptoslabs.com",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.METIS,
    url: "https://andromeda-explorer.metis.io",
    name: "block explorer"
  },
  {
    chainId: lz_sdk_12.ChainId.METIS_TESTNET,
    url: "https://goerli.explorer.metisdevops.link",
    name: "block explorer"
  }
]);
function getBlockExplorer(chainId) {
  const explorer = tryGetBlockExplorer(chainId);
  if (!explorer)
    throw new Error(`No BLOCK_EXPLORERS for ChainId ${chainId}`);
  return explorer;
}
exports10.getBlockExplorer = getBlockExplorer;
function tryGetBlockExplorer(chainId) {
  chainId = (0, toULNv2_1.toULNv2)(chainId);
  const explorer = exports10.BLOCK_EXPLORERS.find((i) => i.chainId === chainId);
  return explorer;
}
exports10.tryGetBlockExplorer = tryGetBlockExplorer;
function addSandboxBlockExplorers(explorers) {
  const result = explorers.slice();
  for (const explorer of explorers) {
    const networkSymbol = lz_sdk_12.ChainId[explorer.chainId];
    const chainId = lz_sdk_12.ChainId[networkSymbol + "_SANDBOX"];
    if (chainId) {
      const sandbox = Object.assign(Object.assign({}, explorer), { chainId });
      result.push(sandbox);
    }
  }
  return result;
}
var __export07;
var __export15;
var __export24;
if (Object.isExtensible(module10.exports)) {
  __export07 = module10.exports["tryGetBlockExplorer"];
  __export15 = module10.exports["getBlockExplorer"];
  __export24 = module10.exports["BLOCK_EXPLORERS"];
}

// ../ui-core/dist/network/networks.js
var networks_exports = {};
__export(networks_exports, {
  NETWORKS: () => __export122,
  getAddressLink: () => __export26,
  getBlockLink: () => __export34,
  getChainKey: () => __export7,
  getChainStage: () => __export5,
  getNativeCurrency: () => __export8,
  getNetwork: () => __export10,
  getScanLink: () => __export013,
  getTransactionLink: () => __export17,
  isChainOnStage: () => __export42,
  isEvmAddress: () => __export11,
  isNativeCurrency: () => __export6,
  tryGetNetwork: () => __export9
});

// ../ui-core/dist/currency/index.js
var currency_exports2 = {};
__export(currency_exports2, {
  BaseCurrency: () => __export09,
  Coin: () => __export011,
  Token: () => __export010,
  assertToken: () => __export25,
  default: () => currency_default2,
  isCoin: () => __export16,
  isCurrency: () => __export012,
  isToken: () => __export33,
  validateAndParseAddress: () => __export08
});

// ../ui-core/dist/currency/utils/validateAndParseAddress.js
var validateAndParseAddress_exports = {};
__export(validateAndParseAddress_exports, {
  validateAndParseAddress: () => __export08
});
function $$cjs_default$$6(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global6 !== "undefined" && global6 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global6 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global6 !== "undefined" && global6 || typeof globalThis !== "undefined" && globalThis || {};
var exports11 = {};
var module11 = {
  get exports() {
    return exports11;
  },
  set exports(value) {
    exports11 = value;
  }
};
Object.defineProperty(exports11, "__esModule", { value: true });
exports11.validateAndParseAddress = void 0;
var ethers_13 = $$cjs_default$$6(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var chainType_1 = $$cjs_default$$6(typeof chainType_exports !== "undefined" ? chainType_exports : {});
function validateAndParseAddress(address, chainId) {
  if ((0, chainType_1.isEvmChainId)(chainId)) {
    return ethers_13.utils.getAddress(address);
  }
  return address;
}
exports11.validateAndParseAddress = validateAndParseAddress;
var __export08;
if (Object.isExtensible(module11.exports)) {
  __export08 = module11.exports["validateAndParseAddress"];
}

// ../ui-core/dist/currency/utils/assertToken.js
var assertToken_exports = {};
__export(assertToken_exports, {
  assertToken: () => __export25,
  isCoin: () => __export16,
  isCurrency: () => __export012,
  isToken: () => __export33
});

// ../ui-core/dist/currency/token.js
var token_exports = {};
__export(token_exports, {
  Token: () => __export010
});

// ../ui-core/dist/currency/baseCurrency.js
var baseCurrency_exports = {};
__export(baseCurrency_exports, {
  BaseCurrency: () => __export09
});
function $$cjs_default$$7(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global7 !== "undefined" && global7 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global7 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global7 !== "undefined" && global7 || typeof globalThis !== "undefined" && globalThis || {};
var exports12 = {};
var module12 = {
  get exports() {
    return exports12;
  },
  set exports(value) {
    exports12 = value;
  }
};
var __importDefault2 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports12, "__esModule", { value: true });
exports12.BaseCurrency = void 0;
var assert_12 = __importDefault2($$cjs_default$$7(typeof assert6 !== "undefined" ? assert6 : {}));
var BaseCurrency = class {
  constructor(chainId, decimals, symbol, name) {
    (0, assert_12.default)(Number.isSafeInteger(chainId), "CHAIN_ID");
    (0, assert_12.default)(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), "DECIMALS");
    this.chainId = chainId;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
};
exports12.BaseCurrency = BaseCurrency;
var __export09;
if (Object.isExtensible(module12.exports)) {
  __export09 = module12.exports["BaseCurrency"];
}

// ../ui-core/dist/currency/token.js
function $$cjs_default$$8(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global8 !== "undefined" && global8 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global8 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global8 !== "undefined" && global8 || typeof globalThis !== "undefined" && globalThis || {};
var exports13 = {};
var module13 = {
  get exports() {
    return exports13;
  },
  set exports(value) {
    exports13 = value;
  }
};
Object.defineProperty(exports13, "__esModule", { value: true });
exports13.Token = void 0;
var validateAndParseAddress_1 = $$cjs_default$$8(typeof validateAndParseAddress_exports !== "undefined" ? validateAndParseAddress_exports : {});
var baseCurrency_1 = $$cjs_default$$8(typeof baseCurrency_exports !== "undefined" ? baseCurrency_exports : {});
var Token = class extends baseCurrency_1.BaseCurrency {
  constructor(chainId, address, decimals, symbol, name) {
    super(chainId, decimals, symbol, name);
    this.address = (0, validateAndParseAddress_1.validateAndParseAddress)(address, chainId);
  }
  equals(other) {
    if (!(other instanceof Token))
      return false;
    return this.chainId === other.chainId && this.address === other.address;
  }
};
exports13.Token = Token;
var __export010;
if (Object.isExtensible(module13.exports)) {
  __export010 = module13.exports["Token"];
}

// ../ui-core/dist/currency/coin.js
var coin_exports = {};
__export(coin_exports, {
  Coin: () => __export011
});
function $$cjs_default$$9(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global9 !== "undefined" && global9 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global9 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global9 !== "undefined" && global9 || typeof globalThis !== "undefined" && globalThis || {};
var exports14 = {};
var module14 = {
  get exports() {
    return exports14;
  },
  set exports(value) {
    exports14 = value;
  }
};
Object.defineProperty(exports14, "__esModule", { value: true });
exports14.Coin = void 0;
var baseCurrency_12 = $$cjs_default$$9(typeof baseCurrency_exports !== "undefined" ? baseCurrency_exports : {});
var Coin = class extends baseCurrency_12.BaseCurrency {
  constructor(chainId, decimals, symbol, name) {
    super(chainId, decimals, symbol, name);
  }
  equals(other) {
    if (!(other instanceof Coin))
      return false;
    return this.chainId === other.chainId;
  }
};
exports14.Coin = Coin;
var __export011;
if (Object.isExtensible(module14.exports)) {
  __export011 = module14.exports["Coin"];
}

// ../ui-core/dist/currency/utils/assertToken.js
function $$cjs_default$$10(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global10 !== "undefined" && global10 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global10 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global10 !== "undefined" && global10 || typeof globalThis !== "undefined" && globalThis || {};
var exports15 = {};
var module15 = {
  get exports() {
    return exports15;
  },
  set exports(value) {
    exports15 = value;
  }
};
Object.defineProperty(exports15, "__esModule", { value: true });
exports15.isCurrency = exports15.isCoin = exports15.assertToken = exports15.isToken = void 0;
var coin_1 = $$cjs_default$$10(typeof coin_exports !== "undefined" ? coin_exports : {});
var token_1 = $$cjs_default$$10(typeof token_exports !== "undefined" ? token_exports : {});
function isToken(value) {
  return value instanceof token_1.Token;
}
exports15.isToken = isToken;
function assertToken(value, errorMessage) {
  if (!isToken(value)) {
    throw new Error(errorMessage !== null && errorMessage !== void 0 ? errorMessage : `Not a token (${value.symbol})`);
  }
}
exports15.assertToken = assertToken;
function isCoin(value) {
  return value instanceof coin_1.Coin;
}
exports15.isCoin = isCoin;
function isCurrency(value) {
  return value instanceof token_1.Token || value instanceof coin_1.Coin;
}
exports15.isCurrency = isCurrency;
var __export012;
var __export16;
var __export25;
var __export33;
if (Object.isExtensible(module15.exports)) {
  __export012 = module15.exports["isCurrency"];
  __export16 = module15.exports["isCoin"];
  __export25 = module15.exports["assertToken"];
  __export33 = module15.exports["isToken"];
}

// ../ui-core/dist/currency/currency.js
var currency_exports = {};
__export(currency_exports, {
  default: () => currency_default
});
var exports16 = {};
var module16 = {
  get exports() {
    return exports16;
  },
  set exports(value) {
    exports16 = value;
  }
};
Object.defineProperty(exports16, "__esModule", { value: true });
var currency_default = module16.exports != null && typeof module16.exports === "object" && "default" in module16.exports ? module16.exports.default : module16.exports;

// ../ui-core/dist/currency/index.js
function $$cjs_default$$11(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global11 !== "undefined" && global11 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global11 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global11 !== "undefined" && global11 || typeof globalThis !== "undefined" && globalThis || {};
var exports17 = {};
var module17 = {
  get exports() {
    return exports17;
  },
  set exports(value) {
    exports17 = value;
  }
};
var __createBinding = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __exportStar = function(m, exports88) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports88, p))
      __createBinding(exports88, m, p);
};
Object.defineProperty(exports17, "__esModule", { value: true });
__exportStar($$cjs_default$$11(typeof baseCurrency_exports !== "undefined" ? baseCurrency_exports : {}), exports17);
__exportStar($$cjs_default$$11(typeof coin_exports !== "undefined" ? coin_exports : {}), exports17);
__exportStar($$cjs_default$$11(typeof currency_exports !== "undefined" ? currency_exports : {}), exports17);
__exportStar($$cjs_default$$11(typeof token_exports !== "undefined" ? token_exports : {}), exports17);
__exportStar($$cjs_default$$11(typeof assertToken_exports !== "undefined" ? assertToken_exports : {}), exports17);
__exportStar($$cjs_default$$11(typeof validateAndParseAddress_exports !== "undefined" ? validateAndParseAddress_exports : {}), exports17);
var currency_default2 = module17.exports != null && typeof module17.exports === "object" && "default" in module17.exports ? module17.exports.default : module17.exports;
function $$cjs_default$$12(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global12 !== "undefined" && global12 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global12 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global12 !== "undefined" && global12 || typeof globalThis !== "undefined" && globalThis || {};
var exports18 = {};
var module18 = {
  get exports() {
    return exports18;
  },
  set exports(value) {
    exports18 = value;
  }
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
Object.defineProperty(exports18, "__esModule", { value: true });
exports18.getScanLink = exports18.getTransactionLink = exports18.getAddressLink = exports18.getBlockLink = exports18.isChainOnStage = exports18.getChainStage = exports18.isNativeCurrency = exports18.getChainKey = exports18.getNativeCurrency = exports18.tryGetNetwork = exports18.getNetwork = exports18.isEvmAddress = exports18.NETWORKS = void 0;
var lz_sdk_13 = $$cjs_default$$12(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var ethers_14 = $$cjs_default$$12(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var currency_1 = $$cjs_default$$12(typeof currency_exports2 !== "undefined" ? currency_exports2 : {});
var chainType_12 = $$cjs_default$$12(typeof chainType_exports !== "undefined" ? chainType_exports : {});
var getBlockExplorer_1 = $$cjs_default$$12(typeof getBlockExplorer_exports !== "undefined" ? getBlockExplorer_exports : {});
var toULNv2_12 = $$cjs_default$$12(typeof toULNv2_exports !== "undefined" ? toULNv2_exports : {});
function addSandboxNetworks(networks) {
  const result = networks.slice();
  for (const network of networks) {
    const networkSymbol = lz_sdk_13.ChainId[network.chainId];
    const chainId = lz_sdk_13.ChainId[networkSymbol + "_SANDBOX"];
    if (chainId) {
      const sandbox = Object.assign(Object.assign({}, network), { chainId });
      result.push(sandbox);
    }
  }
  return result;
}
exports18.NETWORKS = addSandboxNetworks([
  {
    chainId: lz_sdk_13.ChainId.ETHEREUM,
    name: "Ethereum",
    symbol: "Ethereum",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.RINKEBY,
    name: "Rinkeby Testnet",
    symbol: "Rinkeby",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.GOERLI,
    name: "Goerli",
    symbol: "goerli",
    nativeCurrency: { name: "GoerliETH", symbol: "GoerliETH", decimals: 18 }
  },
  {
    name: "BNB Chain",
    chainId: lz_sdk_13.ChainId.BSC,
    symbol: "BNB",
    nativeCurrency: { symbol: "BNB", name: "BNB", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.BSC_TESTNET,
    name: "Binance Test Chain",
    symbol: "BNB",
    nativeCurrency: { symbol: "BNB", name: "BNB", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.POLYGON,
    name: "Polygon",
    symbol: "Matic",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.MUMBAI,
    name: "Mumbai",
    symbol: "Matic",
    nativeCurrency: { symbol: "MATIC", name: "MATIC", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.AVALANCHE,
    name: "Avalanche",
    symbol: "Avalanche",
    nativeCurrency: { name: "Avalanche Token", symbol: "AVAX", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.FUJI,
    name: "Fuji",
    symbol: "Avalanche",
    nativeCurrency: { name: "Avalanche Token", symbol: "AVAX", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.FANTOM,
    name: "Fantom",
    symbol: "Fantom",
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.FANTOM_TESTNET,
    name: "Fantom Testnet",
    symbol: "Fantom",
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.ARBITRUM,
    name: "Arbitrum",
    symbol: "Arbitrum",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.ARBITRUM_GOERLI,
    name: "Arbitrum Goerli",
    symbol: "Arbitrum",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.ARBITRUM_RINKEBY,
    name: "Arbitrum Rinkeby",
    symbol: "Arbitrum",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.OPTIMISM,
    name: "Optimism",
    symbol: "Optimism",
    nativeCurrency: { symbol: "ETH", name: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.OPTIMISM_KOVAN,
    name: "Optimism Kovan",
    symbol: "Optimism",
    nativeCurrency: { symbol: "ETH", name: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.OPTIMISM_GOERLI,
    name: "Optimism Goerli",
    symbol: "Optimism",
    nativeCurrency: { symbol: "ETH", name: "ETH", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.SWIMMER,
    name: "Swimmer",
    symbol: "swimmer",
    nativeCurrency: { symbol: "TUS", name: "TUS", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.DFK,
    name: "DFK",
    symbol: "dfk",
    nativeCurrency: { symbol: "JEWEL", name: "JEWEL", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.HARMONY,
    name: "Harmony",
    symbol: "harmony",
    nativeCurrency: { symbol: "ONE", name: "ONE", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.APTOS,
    name: "Aptos",
    symbol: "APTOS",
    nativeCurrency: {
      symbol: "APT",
      name: "AptosCoin",
      decimals: 8,
      address: "0x1::aptos_coin::AptosCoin"
    }
  },
  {
    chainId: lz_sdk_13.ChainId.APTOS_TESTNET,
    name: "Aptos Testnet",
    symbol: "APTOS",
    nativeCurrency: {
      symbol: "APT",
      name: "AptosCoin",
      decimals: 8,
      address: "0x1::aptos_coin::AptosCoin"
    }
  },
  {
    chainId: lz_sdk_13.ChainId.MOONBEAM,
    name: "MOONBEAM",
    symbol: "moonbeam",
    nativeCurrency: { symbol: "MOVR", name: "MOVR", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.METIS,
    name: "Metis",
    symbol: "Metis",
    nativeCurrency: { symbol: "METIS", name: "METIS", decimals: 18 }
  },
  {
    chainId: lz_sdk_13.ChainId.METIS_TESTNET,
    name: "Metis",
    symbol: "Metis",
    nativeCurrency: { symbol: "METIS", name: "METIS", decimals: 18 }
  }
]).map((_a) => {
  var { nativeCurrency } = _a, network = __rest(_a, ["nativeCurrency"]);
  return Object.assign(Object.assign({}, network), { nativeCurrency: hasAddress(nativeCurrency) ? new currency_1.Token(network.chainId, nativeCurrency.address, nativeCurrency.decimals, nativeCurrency.symbol, nativeCurrency.name) : new currency_1.Coin(network.chainId, nativeCurrency.decimals, nativeCurrency.symbol, nativeCurrency.name) });
});
function hasAddress(currency) {
  return !!currency.address;
}
exports18.isEvmAddress = ethers_14.utils.isAddress;
function getNetwork(chainId) {
  const network = tryGetNetwork(chainId);
  if (!network)
    throw Error(`No NETWORK for ${chainId}`);
  return network;
}
exports18.getNetwork = getNetwork;
function tryGetNetwork(chainId) {
  if (chainId === void 0)
    return void 0;
  chainId = (0, toULNv2_12.toULNv2)(chainId);
  return exports18.NETWORKS.find((i) => i.chainId === chainId);
}
exports18.tryGetNetwork = tryGetNetwork;
function getNativeCurrency(chainId) {
  return getNetwork(chainId).nativeCurrency;
}
exports18.getNativeCurrency = getNativeCurrency;
function getChainKey(chainId) {
  const key = lz_sdk_13.CHAIN_KEY[chainId];
  if (!key)
    throw new Error(`No CHAIN_KEY for ${chainId}`);
  return key;
}
exports18.getChainKey = getChainKey;
function isNativeCurrency(currency) {
  const native = getNativeCurrency(currency.chainId);
  return native.equals(currency);
}
exports18.isNativeCurrency = isNativeCurrency;
function getChainStage(chainId) {
  return chainId < 1e4 ? lz_sdk_13.ChainStage.MAINNET : chainId < 2e4 ? lz_sdk_13.ChainStage.TESTNET : lz_sdk_13.ChainStage.TESTNET_SANDBOX;
}
exports18.getChainStage = getChainStage;
function isChainOnStage(chainId, chainStage) {
  return getChainStage(chainId) === chainStage;
}
exports18.isChainOnStage = isChainOnStage;
function getBlockExplorerUrl(chainId) {
  var _a, _b;
  return (_b = (_a = (0, getBlockExplorer_1.tryGetBlockExplorer)(chainId)) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : "";
}
function getBlockLink(chainId, blockOrHash) {
  return getBlockExplorerUrl(chainId) + `/block/${blockOrHash}`;
}
exports18.getBlockLink = getBlockLink;
function getAddressLink(chainId, address) {
  return getBlockExplorerUrl(chainId) + `/address/${address}`;
}
exports18.getAddressLink = getAddressLink;
function getTransactionLink(chainId, hash) {
  const explorer = getBlockExplorerUrl(chainId);
  if ((0, chainType_12.isChainType)(chainId, chainType_12.ChainType.APTOS)) {
    const queryString = chainId === lz_sdk_13.ChainId.APTOS_TESTNET || chainId === lz_sdk_13.ChainId.APTOS_TESTNET_SANDBOX ? "?network=Testnet" : "";
    return explorer + "/txn/" + hash + queryString;
  }
  return explorer + "/tx/" + hash;
}
exports18.getTransactionLink = getTransactionLink;
function getScanLink(chainId, hash) {
  const chainStage = getChainStage(chainId);
  if (chainStage === lz_sdk_13.ChainStage.MAINNET) {
    return `https://layerzeroscan.com/tx/${hash}`;
  }
  if (chainStage === lz_sdk_13.ChainStage.TESTNET) {
    return `https://testnet.layerzeroscan.com/tx/${hash}`;
  }
  return `https://sandbox.layerzeroscan.com/tx/${hash}`;
}
exports18.getScanLink = getScanLink;
var __export013;
var __export17;
var __export26;
var __export34;
var __export42;
var __export5;
var __export6;
var __export7;
var __export8;
var __export9;
var __export10;
var __export11;
var __export122;
if (Object.isExtensible(module18.exports)) {
  __export013 = module18.exports["getScanLink"];
  __export17 = module18.exports["getTransactionLink"];
  __export26 = module18.exports["getAddressLink"];
  __export34 = module18.exports["getBlockLink"];
  __export42 = module18.exports["isChainOnStage"];
  __export5 = module18.exports["getChainStage"];
  __export6 = module18.exports["isNativeCurrency"];
  __export7 = module18.exports["getChainKey"];
  __export8 = module18.exports["getNativeCurrency"];
  __export9 = module18.exports["tryGetNetwork"];
  __export10 = module18.exports["getNetwork"];
  __export11 = module18.exports["isEvmAddress"];
  __export122 = module18.exports["NETWORKS"];
}

// ../ui-core/dist/network/aptos.js
var aptos_exports = {};
__export(aptos_exports, {
  AptosChainId: () => __export18,
  fromAptosChainId: () => __export014
});
function $$cjs_default$$13(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global13 !== "undefined" && global13 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global13 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global13 !== "undefined" && global13 || typeof globalThis !== "undefined" && globalThis || {};
var exports19 = {};
var module19 = {
  get exports() {
    return exports19;
  },
  set exports(value) {
    exports19 = value;
  }
};
Object.defineProperty(exports19, "__esModule", { value: true });
exports19.fromAptosChainId = exports19.AptosChainId = void 0;
var lz_sdk_14 = $$cjs_default$$13(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var AptosChainId;
(function(AptosChainId2) {
  AptosChainId2[AptosChainId2["TESTNET"] = 2] = "TESTNET";
  AptosChainId2[AptosChainId2["MAINNET"] = 1] = "MAINNET";
})(AptosChainId = exports19.AptosChainId || (exports19.AptosChainId = {}));
function fromAptosChainId(aptosChainId) {
  aptosChainId = Number(aptosChainId);
  if (aptosChainId === AptosChainId.MAINNET)
    return lz_sdk_14.ChainId.APTOS;
  if (aptosChainId === AptosChainId.TESTNET) {
    return lz_sdk_14.ChainId.APTOS_TESTNET;
  }
  return void 0;
}
exports19.fromAptosChainId = fromAptosChainId;
var __export014;
var __export18;
if (Object.isExtensible(module19.exports)) {
  __export014 = module19.exports["fromAptosChainId"];
  __export18 = module19.exports["AptosChainId"];
}

// ../ui-core/dist/network/evm.js
var evm_exports = {};
__export(evm_exports, {
  fromEvmChainId: () => __export015,
  isSupportedEvmChainId: () => __export19,
  toEvmChainId: () => __export27
});
function $$cjs_default$$14(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global14 !== "undefined" && global14 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global14 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global14 !== "undefined" && global14 || typeof globalThis !== "undefined" && globalThis || {};
var exports20 = {};
var module20 = {
  get exports() {
    return exports20;
  },
  set exports(value) {
    exports20 = value;
  }
};
Object.defineProperty(exports20, "__esModule", { value: true });
exports20.fromEvmChainId = exports20.isSupportedEvmChainId = exports20.toEvmChainId = void 0;
var lz_sdk_15 = $$cjs_default$$14(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var chainType_13 = $$cjs_default$$14(typeof chainType_exports !== "undefined" ? chainType_exports : {});
var networks_1 = $$cjs_default$$14(typeof networks_exports !== "undefined" ? networks_exports : {});
function toEvmChainId(chainId) {
  const key = lz_sdk_15.ChainId[chainId];
  const evmChainId = lz_sdk_15.ChainListId[key];
  if (!evmChainId)
    throw Error(`No ChainListId for ${key}, ${chainId}`);
  return evmChainId;
}
exports20.toEvmChainId = toEvmChainId;
function isSupportedEvmChainId(evmChainId) {
  return evmChainId in lz_sdk_15.ChainListId;
}
exports20.isSupportedEvmChainId = isSupportedEvmChainId;
function fromEvmChainId(evmChainId, sandbox = false) {
  evmChainId = Number(evmChainId);
  const matches = [];
  for (const key in lz_sdk_15.ChainListId) {
    const nativeChainId = lz_sdk_15.ChainListId[key];
    if (nativeChainId !== evmChainId)
      continue;
    const chainId2 = lz_sdk_15.ChainId[key];
    if (!isFinite(chainId2))
      continue;
    if (!(0, chainType_13.isEvmChainId)(chainId2))
      continue;
    matches.push(chainId2);
  }
  if (sandbox) {
    const chainId2 = matches.find((i) => (0, networks_1.isChainOnStage)(i, lz_sdk_15.ChainStage.TESTNET_SANDBOX));
    if (chainId2)
      return chainId2;
  }
  const chainId = matches[0];
  if (chainId)
    return chainId;
  throw new Error(`No ChainId for ${evmChainId}`);
}
exports20.fromEvmChainId = fromEvmChainId;
var __export015;
var __export19;
var __export27;
if (Object.isExtensible(module20.exports)) {
  __export015 = module20.exports["fromEvmChainId"];
  __export19 = module20.exports["isSupportedEvmChainId"];
  __export27 = module20.exports["toEvmChainId"];
}

// ../ui-core/dist/network/index.js
function $$cjs_default$$15(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global15 !== "undefined" && global15 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global15 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global15 !== "undefined" && global15 || typeof globalThis !== "undefined" && globalThis || {};
var exports21 = {};
var module21 = {
  get exports() {
    return exports21;
  },
  set exports(value) {
    exports21 = value;
  }
};
var __createBinding2 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __exportStar2 = function(m, exports88) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports88, p))
      __createBinding2(exports88, m, p);
};
Object.defineProperty(exports21, "__esModule", { value: true });
__exportStar2($$cjs_default$$15(typeof evm_exports !== "undefined" ? evm_exports : {}), exports21);
__exportStar2($$cjs_default$$15(typeof aptos_exports !== "undefined" ? aptos_exports : {}), exports21);
__exportStar2($$cjs_default$$15(typeof networks_exports !== "undefined" ? networks_exports : {}), exports21);
__exportStar2($$cjs_default$$15(typeof getBlockExplorer_exports !== "undefined" ? getBlockExplorer_exports : {}), exports21);
__exportStar2($$cjs_default$$15(typeof chainType_exports !== "undefined" ? chainType_exports : {}), exports21);
__exportStar2($$cjs_default$$15(typeof toULNv2_exports !== "undefined" ? toULNv2_exports : {}), exports21);
var network_default = module21.exports != null && typeof module21.exports === "object" && "default" in module21.exports ? module21.exports.default : module21.exports;

// ../ui-core/dist/providers/ResourceProvider__currency_evm.js
function $$cjs_default$$16(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global16 !== "undefined" && global16 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global16 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global16 !== "undefined" && global16 || typeof globalThis !== "undefined" && globalThis || {};
var exports22 = {};
var module22 = {
  get exports() {
    return exports22;
  },
  set exports(value) {
    exports22 = value;
  }
};
Object.defineProperty(exports22, "__esModule", { value: true });
exports22.ResourceProvider__currency_evm = void 0;
var currency_12 = $$cjs_default$$16(typeof currency_exports2 !== "undefined" ? currency_exports2 : {});
var network_1 = $$cjs_default$$16(typeof network_exports !== "undefined" ? network_exports : {});
var ResourceProvider__currency_evm = class {
  supports(resource) {
    if (!(0, currency_12.isCurrency)(resource))
      return false;
    return (0, network_1.isEvmChainId)(resource.chainId);
  }
  register(resource) {
    throw new Error("Method not supported.");
  }
  async isRegistered(resource, address) {
    return true;
  }
  getType(resource) {
    return `${resource.chainId}:${resource.symbol}:${(0, currency_12.isToken)(resource) ? resource.address : "0x"}`;
  }
};
exports22.ResourceProvider__currency_evm = ResourceProvider__currency_evm;
var __export016;
if (Object.isExtensible(module22.exports)) {
  __export016 = module22.exports["ResourceProvider__currency_evm"];
}

// ../ui-core/dist/providers/ResourceProvider.js
var ResourceProvider_exports = {};
__export(ResourceProvider_exports, {
  default: () => ResourceProvider_default
});
var exports23 = {};
var module23 = {
  get exports() {
    return exports23;
  },
  set exports(value) {
    exports23 = value;
  }
};
Object.defineProperty(exports23, "__esModule", { value: true });
var ResourceProvider_default = module23.exports != null && typeof module23.exports === "object" && "default" in module23.exports ? module23.exports.default : module23.exports;

// ../ui-core/dist/providers/DstConfigProvider.js
var DstConfigProvider_exports = {};
__export(DstConfigProvider_exports, {
  default: () => DstConfigProvider_default
});
var exports24 = {};
var module24 = {
  get exports() {
    return exports24;
  },
  set exports(value) {
    exports24 = value;
  }
};
Object.defineProperty(exports24, "__esModule", { value: true });
var DstConfigProvider_default = module24.exports != null && typeof module24.exports === "object" && "default" in module24.exports ? module24.exports.default : module24.exports;

// ../ui-core/dist/providers/DefaultAirdropProvider.js
var DefaultAirdropProvider_exports = {};
__export(DefaultAirdropProvider_exports, {
  default: () => DefaultAirdropProvider_default
});
var exports25 = {};
var module25 = {
  get exports() {
    return exports25;
  },
  set exports(value) {
    exports25 = value;
  }
};
Object.defineProperty(exports25, "__esModule", { value: true });
var DefaultAirdropProvider_default = module25.exports != null && typeof module25.exports === "object" && "default" in module25.exports ? module25.exports.default : module25.exports;

// ../ui-core/dist/providers/UAConfigProvider.js
var UAConfigProvider_exports = {};
__export(UAConfigProvider_exports, {
  default: () => UAConfigProvider_default
});
var exports26 = {};
var module26 = {
  get exports() {
    return exports26;
  },
  set exports(value) {
    exports26 = value;
  }
};
Object.defineProperty(exports26, "__esModule", { value: true });
var UAConfigProvider_default = module26.exports != null && typeof module26.exports === "object" && "default" in module26.exports ? module26.exports.default : module26.exports;

// ../ui-core/dist/providers/BalanceProvider.js
var BalanceProvider_exports = {};
__export(BalanceProvider_exports, {
  default: () => BalanceProvider_default
});
var exports27 = {};
var module27 = {
  get exports() {
    return exports27;
  },
  set exports(value) {
    exports27 = value;
  }
};
Object.defineProperty(exports27, "__esModule", { value: true });
var BalanceProvider_default = module27.exports != null && typeof module27.exports === "object" && "default" in module27.exports ? module27.exports.default : module27.exports;

// ../ui-core/dist/utils/convertToPaddedUint8Array.js
var convertToPaddedUint8Array_exports = {};
__export(convertToPaddedUint8Array_exports, {
  convertToPaddedUint8Array: () => __export017
});
var exports28 = {};
var module28 = {
  get exports() {
    return exports28;
  },
  set exports(value) {
    exports28 = value;
  }
};
Object.defineProperty(exports28, "__esModule", { value: true });
exports28.convertToPaddedUint8Array = void 0;
function convertToPaddedUint8Array(str, length) {
  const value = str.replace(/^0x/i, "").match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
  const result = Uint8Array.from([...new Array(length - value.length).fill(0), ...value]);
  return result;
}
exports28.convertToPaddedUint8Array = convertToPaddedUint8Array;
var __export017;
if (Object.isExtensible(module28.exports)) {
  __export017 = module28.exports["convertToPaddedUint8Array"];
}

// ../ui-core/dist/utils/parseNumber.js
var parseNumber_exports = {};
__export(parseNumber_exports, {
  escapeRegExp: () => __export018,
  parseNumber: () => __export110,
  tryParseNumber: () => __export28
});
var exports29 = {};
var module29 = {
  get exports() {
    return exports29;
  },
  set exports(value) {
    exports29 = value;
  }
};
Object.defineProperty(exports29, "__esModule", { value: true });
exports29.escapeRegExp = exports29.parseNumber = exports29.tryParseNumber = void 0;
function formatUserInput(value) {
  value = value.replace(/,/g, ".");
  return value;
}
var tryParseNumber = (value) => {
  const nextUserInput = formatUserInput(value);
  if (nextUserInput === "" || inputRegex.test(escapeRegExp(nextUserInput))) {
    return nextUserInput;
  }
  return void 0;
};
exports29.tryParseNumber = tryParseNumber;
var parseNumber = (value) => {
  const number = (0, exports29.tryParseNumber)(value);
  if (!number)
    throw new Error(`Value "${value}" is invalid number`);
  return number;
};
exports29.parseNumber = parseNumber;
var inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
exports29.escapeRegExp = escapeRegExp;
var __export018;
var __export110;
var __export28;
if (Object.isExtensible(module29.exports)) {
  __export018 = module29.exports["escapeRegExp"];
  __export110 = module29.exports["parseNumber"];
  __export28 = module29.exports["tryParseNumber"];
}

// ../ui-core/dist/utils/getExpectedDate.js
var getExpectedDate_exports = {};
__export(getExpectedDate_exports, {
  BLOCK_CONFIRMATIONS: () => __export52,
  DEFAULT_BLOCK_CONFIRMATIONS: () => __export62,
  DEFAULT_BLOCK_TIME_SECONDS: () => __export72,
  getBlockTime: () => __export43,
  getEstimatedTransactionTime: () => __export29,
  getExpectedDate: () => __export019,
  getRequiredBlockConfirmations: () => __export35,
  timeStamp: () => __export111
});
function $$cjs_default$$17(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global17 !== "undefined" && global17 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global17 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global17 !== "undefined" && global17 || typeof globalThis !== "undefined" && globalThis || {};
var exports30 = {};
var module30 = {
  get exports() {
    return exports30;
  },
  set exports(value) {
    exports30 = value;
  }
};
Object.defineProperty(exports30, "__esModule", { value: true });
exports30.getExpectedDate = exports30.timeStamp = exports30.getEstimatedTransactionTime = exports30.getRequiredBlockConfirmations = exports30.getBlockTime = exports30.BLOCK_CONFIRMATIONS = exports30.DEFAULT_BLOCK_CONFIRMATIONS = exports30.DEFAULT_BLOCK_TIME_SECONDS = void 0;
var lz_sdk_16 = $$cjs_default$$17(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
exports30.DEFAULT_BLOCK_TIME_SECONDS = 15;
exports30.DEFAULT_BLOCK_CONFIRMATIONS = 1;
exports30.BLOCK_CONFIRMATIONS = {
  [lz_sdk_16.ChainId.ETHEREUM]: 15,
  [lz_sdk_16.ChainId.AVALANCHE]: 12,
  [lz_sdk_16.ChainId.BSC]: 20,
  [lz_sdk_16.ChainId.POLYGON]: 512,
  [lz_sdk_16.ChainId.ARBITRUM]: 20,
  [lz_sdk_16.ChainId.OPTIMISM]: 20,
  [lz_sdk_16.ChainId.FANTOM]: 5
};
function getBlockTime(chainId) {
  var _a;
  return (_a = lz_sdk_16.AVERAGE_BLOCK_TIME[chainId]) !== null && _a !== void 0 ? _a : exports30.DEFAULT_BLOCK_TIME_SECONDS;
}
exports30.getBlockTime = getBlockTime;
function getRequiredBlockConfirmations(chainId) {
  var _a;
  return (_a = exports30.BLOCK_CONFIRMATIONS[chainId]) !== null && _a !== void 0 ? _a : exports30.DEFAULT_BLOCK_CONFIRMATIONS;
}
exports30.getRequiredBlockConfirmations = getRequiredBlockConfirmations;
function getEstimatedTransactionTime(chainId) {
  const confirmations = getRequiredBlockConfirmations(chainId);
  const blockTime = getBlockTime(chainId);
  const extraDelay = 10;
  return (confirmations + 1) * blockTime + extraDelay;
}
exports30.getEstimatedTransactionTime = getEstimatedTransactionTime;
function getExpectedConfirmationDateSameChain(chainId, nowTimestamp = timeStamp()) {
  const delay = getEstimatedTransactionTime(chainId);
  return nowTimestamp + delay;
}
function getExpectedConfirmationDateBetweenChains(srcChainId, dstChainId, nowTimestamp = timeStamp()) {
  if (srcChainId === lz_sdk_16.ChainId.APTOS || srcChainId === lz_sdk_16.ChainId.APTOS_TESTNET) {
    return nowTimestamp + 3 * 24 * 3600;
  }
  const fromDelay = getBlockTime(srcChainId) * (1 + getRequiredBlockConfirmations(srcChainId));
  const toDelay = 2 * getBlockTime(dstChainId);
  const lambdaDelay = 15;
  const extraDelay = 10;
  return nowTimestamp + fromDelay + toDelay + lambdaDelay + extraDelay;
}
function timeStamp() {
  return Math.floor(Date.now() / 1e3);
}
exports30.timeStamp = timeStamp;
function getExpectedDate(srcChainId, dstChainId, nowTimestamp = timeStamp()) {
  if (!dstChainId)
    return getExpectedConfirmationDateSameChain(srcChainId, nowTimestamp);
  return getExpectedConfirmationDateBetweenChains(srcChainId, dstChainId, nowTimestamp);
}
exports30.getExpectedDate = getExpectedDate;
var __export019;
var __export111;
var __export29;
var __export35;
var __export43;
var __export52;
var __export62;
var __export72;
if (Object.isExtensible(module30.exports)) {
  __export019 = module30.exports["getExpectedDate"];
  __export111 = module30.exports["timeStamp"];
  __export29 = module30.exports["getEstimatedTransactionTime"];
  __export35 = module30.exports["getRequiredBlockConfirmations"];
  __export43 = module30.exports["getBlockTime"];
  __export52 = module30.exports["BLOCK_CONFIRMATIONS"];
  __export62 = module30.exports["DEFAULT_BLOCK_CONFIRMATIONS"];
  __export72 = module30.exports["DEFAULT_BLOCK_TIME_SECONDS"];
}

// ../ui-core/dist/transaction.js
var transaction_exports = {};
__export(transaction_exports, {
  default: () => transaction_default
});
var exports31 = {};
var module31 = {
  get exports() {
    return exports31;
  },
  set exports(value) {
    exports31 = value;
  }
};
Object.defineProperty(exports31, "__esModule", { value: true });
var transaction_default = module31.exports != null && typeof module31.exports === "object" && "default" in module31.exports ? module31.exports.default : module31.exports;

// ../ui-core/dist/fraction/index.js
var fraction_exports2 = {};
__export(fraction_exports2, {
  CurrencyAmount: () => __export36,
  Fraction: () => __export211,
  MaxUint256: () => __export020,
  Percent: () => __export117,
  Price: () => __export032,
  Rounding: () => __export112,
  bpToFraction: () => __export029,
  castCurrencyAmountUnsafe: () => __export028,
  formatAmount: () => __export210,
  formatCurrencyAmount: () => __export116,
  formatFiatAmount: () => __export027,
  parseCurrencyAmount: () => __export113,
  parseFraction: () => __export115,
  sumFiat: () => __export025,
  sumUnsafe: () => __export114,
  toBigInt: () => __export0,
  toBigNumber: () => __export1,
  toCurrencyAmount: () => __export023,
  tryParseCurrencyAmount: () => __export024,
  tryParseFraction: () => __export026
});

// ../ui-core/dist/fraction/utils/toCurrencyAmount.js
var toCurrencyAmount_exports = {};
__export(toCurrencyAmount_exports, {
  toCurrencyAmount: () => __export023
});

// ../ui-core/dist/fraction/currencyAmount.js
var currencyAmount_exports = {};
__export(currencyAmount_exports, {
  CurrencyAmount: () => __export022
});

// ../ui-core/dist/fraction/constants.js
var constants_exports = {};
__export(constants_exports, {
  MaxUint256: () => __export020,
  Rounding: () => __export112
});
function $$cjs_default$$18(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global18 !== "undefined" && global18 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global18 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global18 !== "undefined" && global18 || typeof globalThis !== "undefined" && globalThis || {};
var exports32 = {};
var module32 = {
  get exports() {
    return exports32;
  },
  set exports(value) {
    exports32 = value;
  }
};
var __importDefault3 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports32, "__esModule", { value: true });
exports32.MaxUint256 = exports32.Rounding = void 0;
var jsbi_1 = __importDefault3($$cjs_default$$18(typeof $cjs$jsbi !== "undefined" ? $cjs$jsbi : {}));
(function(Rounding2) {
  Rounding2[Rounding2["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding2[Rounding2["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding2[Rounding2["ROUND_UP"] = 2] = "ROUND_UP";
})(exports32.Rounding || (exports32.Rounding = {}));
exports32.MaxUint256 = jsbi_1.default.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var __export020;
var __export112;
if (Object.isExtensible(module32.exports)) {
  __export020 = module32.exports["MaxUint256"];
  __export112 = module32.exports["Rounding"];
}

// ../ui-core/dist/fraction/fraction.js
var fraction_exports = {};
__export(fraction_exports, {
  Fraction: () => __export021
});
function $$cjs_default$$19(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global19 !== "undefined" && global19 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global19 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global19 !== "undefined" && global19 || typeof globalThis !== "undefined" && globalThis || {};
var exports33 = {};
var module33 = {
  get exports() {
    return exports33;
  },
  set exports(value) {
    exports33 = value;
  }
};
var __importDefault4 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports33, "__esModule", { value: true });
exports33.Fraction = void 0;
var jsbi_12 = __importDefault4($$cjs_default$$19(typeof $cjs$jsbi !== "undefined" ? $cjs$jsbi : {}));
var decimal_js_light_1 = __importDefault4($$cjs_default$$19(typeof $cjs$decimal_js_light !== "undefined" ? $cjs$decimal_js_light : {}));
var big_js_1 = __importDefault4($$cjs_default$$19(typeof $cjs$big_js !== "undefined" ? $cjs$big_js : {}));
var toformat_1 = __importDefault4($$cjs_default$$19(typeof $cjs$toformat !== "undefined" ? $cjs$toformat : {}));
var constants_1 = $$cjs_default$$19(typeof constants_exports !== "undefined" ? constants_exports : {});
var assert_13 = __importDefault4($$cjs_default$$19(typeof assert6 !== "undefined" ? assert6 : {}));
var Decimal = (0, toformat_1.default)(decimal_js_light_1.default);
var Big = (0, toformat_1.default)(big_js_1.default);
var toSignificantRounding = {
  [constants_1.Rounding.ROUND_DOWN]: Decimal.ROUND_DOWN,
  [constants_1.Rounding.ROUND_HALF_UP]: Decimal.ROUND_HALF_UP,
  [constants_1.Rounding.ROUND_UP]: Decimal.ROUND_UP
};
var toFixedRounding = {
  [constants_1.Rounding.ROUND_DOWN]: 0,
  [constants_1.Rounding.ROUND_HALF_UP]: 1,
  [constants_1.Rounding.ROUND_UP]: 3
};
var Fraction = class {
  constructor(numerator, denominator = jsbi_12.default.BigInt(1)) {
    if (typeof numerator === "bigint")
      numerator = "0x" + numerator.toString(16);
    if (typeof denominator === "bigint")
      denominator = "0x" + denominator.toString(16);
    this.numerator = jsbi_12.default.BigInt(numerator);
    this.denominator = jsbi_12.default.BigInt(denominator);
  }
  static tryParseFraction(fractionish) {
    if (fractionish instanceof jsbi_12.default || typeof fractionish === "number" || typeof fractionish === "string" || typeof fractionish === "bigint")
      return new Fraction(fractionish);
    if ("numerator" in fractionish && "denominator" in fractionish)
      return fractionish;
    throw new Error("Could not parse fraction");
  }
  get quotient() {
    return jsbi_12.default.divide(this.numerator, this.denominator);
  }
  get remainder() {
    return new Fraction(jsbi_12.default.remainder(this.numerator, this.denominator), this.denominator);
  }
  invert() {
    return new Fraction(this.denominator, this.numerator);
  }
  add(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    if (jsbi_12.default.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(jsbi_12.default.add(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(jsbi_12.default.add(jsbi_12.default.multiply(this.numerator, otherParsed.denominator), jsbi_12.default.multiply(otherParsed.numerator, this.denominator)), jsbi_12.default.multiply(this.denominator, otherParsed.denominator));
  }
  subtract(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    if (jsbi_12.default.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(jsbi_12.default.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(jsbi_12.default.subtract(jsbi_12.default.multiply(this.numerator, otherParsed.denominator), jsbi_12.default.multiply(otherParsed.numerator, this.denominator)), jsbi_12.default.multiply(this.denominator, otherParsed.denominator));
  }
  lessThan(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return jsbi_12.default.lessThan(jsbi_12.default.multiply(this.numerator, otherParsed.denominator), jsbi_12.default.multiply(otherParsed.numerator, this.denominator));
  }
  equalTo(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return jsbi_12.default.equal(jsbi_12.default.multiply(this.numerator, otherParsed.denominator), jsbi_12.default.multiply(otherParsed.numerator, this.denominator));
  }
  greaterThan(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return jsbi_12.default.greaterThan(jsbi_12.default.multiply(this.numerator, otherParsed.denominator), jsbi_12.default.multiply(otherParsed.numerator, this.denominator));
  }
  multiply(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(jsbi_12.default.multiply(this.numerator, otherParsed.numerator), jsbi_12.default.multiply(this.denominator, otherParsed.denominator));
  }
  divide(other) {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(jsbi_12.default.multiply(this.numerator, otherParsed.denominator), jsbi_12.default.multiply(this.denominator, otherParsed.numerator));
  }
  toSignificant(significantDigits, format = { groupSeparator: "" }, rounding = constants_1.Rounding.ROUND_HALF_UP) {
    (0, assert_13.default)(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`);
    (0, assert_13.default)(significantDigits > 0, `${significantDigits} is not positive.`);
    Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] });
    const quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }
  toFixed(decimalPlaces, format = { groupSeparator: "" }, rounding = constants_1.Rounding.ROUND_HALF_UP) {
    (0, assert_13.default)(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`);
    (0, assert_13.default)(decimalPlaces >= 0, `${decimalPlaces} is negative.`);
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  get asFraction() {
    return new Fraction(this.numerator, this.denominator);
  }
};
exports33.Fraction = Fraction;
var __export021;
if (Object.isExtensible(module33.exports)) {
  __export021 = module33.exports["Fraction"];
}
function $$cjs_default$$20(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global20 !== "undefined" && global20 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global20 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global20 !== "undefined" && global20 || typeof globalThis !== "undefined" && globalThis || {};
var exports34 = {};
var module34 = {
  get exports() {
    return exports34;
  },
  set exports(value) {
    exports34 = value;
  }
};
var __importDefault5 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports34, "__esModule", { value: true });
exports34.CurrencyAmount = void 0;
var jsbi_13 = __importDefault5($$cjs_default$$20(typeof $cjs$jsbi !== "undefined" ? $cjs$jsbi : {}));
var fraction_1 = $$cjs_default$$20(typeof fraction_exports !== "undefined" ? fraction_exports : {});
var big_js_12 = __importDefault5($$cjs_default$$20(typeof $cjs$big_js !== "undefined" ? $cjs$big_js : {}));
var toformat_12 = __importDefault5($$cjs_default$$20(typeof $cjs$toformat !== "undefined" ? $cjs$toformat : {}));
var constants_12 = $$cjs_default$$20(typeof constants_exports !== "undefined" ? constants_exports : {});
var assert_14 = __importDefault5($$cjs_default$$20(typeof assert6 !== "undefined" ? assert6 : {}));
var Big2 = (0, toformat_12.default)(big_js_12.default);
var CurrencyAmount = class extends fraction_1.Fraction {
  static fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  static fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  }
  constructor(currency, numerator, denominator) {
    super(numerator, denominator);
    (0, assert_14.default)(jsbi_13.default.lessThanOrEqual(this.quotient, constants_12.MaxUint256), "AMOUNT");
    this.currency = currency;
    this.decimalScale = jsbi_13.default.exponentiate(jsbi_13.default.BigInt(10), jsbi_13.default.BigInt(currency.decimals));
  }
  add(other) {
    (0, assert_14.default)(this.currency.equals(other.currency), "CURRENCY");
    const added = super.add(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  }
  subtract(other) {
    (0, assert_14.default)(this.currency.equals(other.currency), "CURRENCY");
    const subtracted = super.subtract(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  }
  multiply(other) {
    const multiplied = super.multiply(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  }
  divide(other) {
    const divided = super.divide(other);
    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  }
  toSignificant(significantDigits = 6, format, rounding = constants_12.Rounding.ROUND_DOWN) {
    return super.divide(this.decimalScale).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = this.currency.decimals, format, rounding = constants_12.Rounding.ROUND_DOWN) {
    (0, assert_14.default)(decimalPlaces <= this.currency.decimals, "DECIMALS");
    return super.divide(this.decimalScale).toFixed(decimalPlaces, format, rounding);
  }
  toExact(format = { groupSeparator: "" }) {
    Big2.DP = this.currency.decimals;
    return new Big2(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  }
};
exports34.CurrencyAmount = CurrencyAmount;
var __export022;
if (Object.isExtensible(module34.exports)) {
  __export022 = module34.exports["CurrencyAmount"];
}
function $$cjs_default$$21(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global21 !== "undefined" && global21 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global21 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global21 !== "undefined" && global21 || typeof globalThis !== "undefined" && globalThis || {};
var exports35 = {};
var module35 = {
  get exports() {
    return exports35;
  },
  set exports(value) {
    exports35 = value;
  }
};
Object.defineProperty(exports35, "__esModule", { value: true });
exports35.toCurrencyAmount = void 0;
var ethers_15 = $$cjs_default$$21(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var currencyAmount_1 = $$cjs_default$$21(typeof currencyAmount_exports !== "undefined" ? currencyAmount_exports : {});
function toCurrencyAmount(token, value) {
  if (ethers_15.BigNumber.isBigNumber(value))
    value = value.toHexString();
  return currencyAmount_1.CurrencyAmount.fromRawAmount(token, value);
}
exports35.toCurrencyAmount = toCurrencyAmount;
var __export023;
if (Object.isExtensible(module35.exports)) {
  __export023 = module35.exports["toCurrencyAmount"];
}

// ../ui-core/dist/fraction/utils/sumUnsafe.js
var sumUnsafe_exports = {};
__export(sumUnsafe_exports, {
  sumFiat: () => __export025,
  sumUnsafe: () => __export114
});

// ../ui-core/dist/fraction/utils/parseCurrencyAmount.js
var parseCurrencyAmount_exports = {};
__export(parseCurrencyAmount_exports, {
  parseCurrencyAmount: () => __export113,
  tryParseCurrencyAmount: () => __export024
});
function $$cjs_default$$22(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global22 !== "undefined" && global22 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global22 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global22 !== "undefined" && global22 || typeof globalThis !== "undefined" && globalThis || {};
var exports36 = {};
var module36 = {
  get exports() {
    return exports36;
  },
  set exports(value) {
    exports36 = value;
  }
};
Object.defineProperty(exports36, "__esModule", { value: true });
exports36.tryParseCurrencyAmount = exports36.parseCurrencyAmount = void 0;
var ethers_16 = $$cjs_default$$22(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var currencyAmount_12 = $$cjs_default$$22(typeof currencyAmount_exports !== "undefined" ? currencyAmount_exports : {});
function parseCurrencyAmount(currency, value) {
  const typedValueParsed = ethers_16.utils.parseUnits(value, currency.decimals);
  return currencyAmount_12.CurrencyAmount.fromRawAmount(currency, typedValueParsed.toHexString());
}
exports36.parseCurrencyAmount = parseCurrencyAmount;
function tryParseCurrencyAmount(currency, value) {
  if (currency === void 0 || value === void 0)
    return void 0;
  try {
    return parseCurrencyAmount(currency, value);
  } catch (_a) {
  }
  return void 0;
}
exports36.tryParseCurrencyAmount = tryParseCurrencyAmount;
var __export024;
var __export113;
if (Object.isExtensible(module36.exports)) {
  __export024 = module36.exports["tryParseCurrencyAmount"];
  __export113 = module36.exports["parseCurrencyAmount"];
}

// ../ui-core/dist/fraction/utils/sumUnsafe.js
function $$cjs_default$$23(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global23 !== "undefined" && global23 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global23 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global23 !== "undefined" && global23 || typeof globalThis !== "undefined" && globalThis || {};
var exports37 = {};
var module37 = {
  get exports() {
    return exports37;
  },
  set exports(value) {
    exports37 = value;
  }
};
Object.defineProperty(exports37, "__esModule", { value: true });
exports37.sumFiat = exports37.sumUnsafe = void 0;
var parseCurrencyAmount_1 = $$cjs_default$$23(typeof parseCurrencyAmount_exports !== "undefined" ? parseCurrencyAmount_exports : {});
function sumUnsafe(amounts, asCurrency) {
  if (!amounts || amounts.length === 0 || amounts.some((i) => !i)) {
    return void 0;
  }
  asCurrency = asCurrency !== null && asCurrency !== void 0 ? asCurrency : amounts[0].currency;
  let sum = 0;
  for (let amount of amounts) {
    const float = parseFloat(amount.toExact());
    sum += float;
  }
  if (!Number.isFinite(sum))
    return void 0;
  return (0, parseCurrencyAmount_1.tryParseCurrencyAmount)(asCurrency, sum.toFixed(asCurrency.decimals));
}
exports37.sumUnsafe = sumUnsafe;
function sumFiat(amounts) {
  if (!amounts || amounts.length === 0)
    return void 0;
  let sum = 0;
  const currency = amounts[0].currency;
  for (let amount of amounts) {
    if (!amount)
      return void 0;
    if (currency !== amount.currency)
      return void 0;
    sum += amount.value;
  }
  if (!Number.isFinite(sum))
    return void 0;
  return {
    currency,
    value: sum
  };
}
exports37.sumFiat = sumFiat;
var __export025;
var __export114;
if (Object.isExtensible(module37.exports)) {
  __export025 = module37.exports["sumFiat"];
  __export114 = module37.exports["sumUnsafe"];
}

// ../ui-core/dist/fraction/utils/parseFraction.js
var parseFraction_exports = {};
__export(parseFraction_exports, {
  parseFraction: () => __export115,
  tryParseFraction: () => __export026
});
function $$cjs_default$$24(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global24 !== "undefined" && global24 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global24 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global24 !== "undefined" && global24 || typeof globalThis !== "undefined" && globalThis || {};
var exports38 = {};
var module38 = {
  get exports() {
    return exports38;
  },
  set exports(value) {
    exports38 = value;
  }
};
Object.defineProperty(exports38, "__esModule", { value: true });
exports38.tryParseFraction = exports38.parseFraction = void 0;
var ethers_17 = $$cjs_default$$24(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var fraction_12 = $$cjs_default$$24(typeof fraction_exports !== "undefined" ? fraction_exports : {});
function parseFraction(value, decimals) {
  const parsed = ethers_17.utils.parseUnits(value, decimals);
  const denominator = 10 ** decimals;
  return new fraction_12.Fraction(parsed.toHexString(), denominator);
}
exports38.parseFraction = parseFraction;
function tryParseFraction(value, decimals = 4) {
  if (value === void 0)
    return void 0;
  try {
    return parseFraction(value, decimals);
  } catch (_a) {
  }
  return void 0;
}
exports38.tryParseFraction = tryParseFraction;
var __export026;
var __export115;
if (Object.isExtensible(module38.exports)) {
  __export026 = module38.exports["tryParseFraction"];
  __export115 = module38.exports["parseFraction"];
}

// ../ui-core/dist/fraction/utils/formatAmount.js
var formatAmount_exports = {};
__export(formatAmount_exports, {
  formatAmount: () => __export210,
  formatCurrencyAmount: () => __export116,
  formatFiatAmount: () => __export027
});
function $$cjs_default$$25(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global25 !== "undefined" && global25 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global25 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global25 !== "undefined" && global25 || typeof globalThis !== "undefined" && globalThis || {};
var exports39 = {};
var module39 = {
  get exports() {
    return exports39;
  },
  set exports(value) {
    exports39 = value;
  }
};
Object.defineProperty(exports39, "__esModule", { value: true });
exports39.formatFiatAmount = exports39.formatCurrencyAmount = exports39.formatAmount = void 0;
var currencyAmount_13 = $$cjs_default$$25(typeof currencyAmount_exports !== "undefined" ? currencyAmount_exports : {});
function formatAmount(amount) {
  if (amount instanceof currencyAmount_13.CurrencyAmount) {
    return formatCurrencyAmount(amount);
  }
}
exports39.formatAmount = formatAmount;
formatAmount.nice = (amount) => {
  if (amount instanceof currencyAmount_13.CurrencyAmount) {
    return formatCurrencyAmount.nice(amount);
  }
};
function formatCurrencyAmount(value) {
  return value.toExact();
}
exports39.formatCurrencyAmount = formatCurrencyAmount;
formatCurrencyAmount.short = (value, dp = 1) => {
  if (!value)
    return "-";
  const formatted = formatCurrencyAmount(value);
  try {
    const number = parseFloat(formatted);
    if (number > 1e6) {
      const m = number / 1e6;
      return m.toLocaleString("en-US", {
        maximumFractionDigits: dp,
        minimumFractionDigits: 1
      }) + "M";
    }
    return number.toLocaleString("en-US", {
      maximumFractionDigits: dp,
      minimumFractionDigits: 1
    });
  } catch (_a) {
    const [whole, rest = "0"] = formatted.split(".");
    return whole + "." + rest.substr(0, dp);
  }
};
var niceFormat = { groupSeparator: "," };
formatCurrencyAmount.nice = (value, dp = 2) => {
  if (!value)
    return "-";
  if (!value.toFixed)
    return "-";
  return value.toFixed(dp, niceFormat);
};
function formatFiatAmount(amount) {
  return amount.value.toLocaleString("en-US", {
    currency: amount.currency,
    style: "currency"
  });
}
exports39.formatFiatAmount = formatFiatAmount;
formatFiatAmount.nice = (amount) => {
  if (!amount)
    return "-";
  return formatFiatAmount(amount);
};
formatFiatAmount.short = (value, currency = "USD") => {
  if (value >= 1e6) {
    const m = value / 1e6;
    return m.toLocaleString("en-US", {
      currency,
      style: "currency",
      maximumFractionDigits: 1
    }) + "M";
  }
  return value.toLocaleString("en-US", {
    currency,
    style: "currency"
  });
};
var __export027;
var __export116;
var __export210;
if (Object.isExtensible(module39.exports)) {
  __export027 = module39.exports["formatFiatAmount"];
  __export116 = module39.exports["formatCurrencyAmount"];
  __export210 = module39.exports["formatAmount"];
}

// ../ui-core/dist/fraction/utils/castCurrencyAmountUnsafe.js
var castCurrencyAmountUnsafe_exports = {};
__export(castCurrencyAmountUnsafe_exports, {
  castCurrencyAmountUnsafe: () => __export028
});
function $$cjs_default$$26(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global26 !== "undefined" && global26 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global26 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global26 !== "undefined" && global26 || typeof globalThis !== "undefined" && globalThis || {};
var exports40 = {};
var module40 = {
  get exports() {
    return exports40;
  },
  set exports(value) {
    exports40 = value;
  }
};
Object.defineProperty(exports40, "__esModule", { value: true });
exports40.castCurrencyAmountUnsafe = void 0;
var currencyAmount_14 = $$cjs_default$$26(typeof currencyAmount_exports !== "undefined" ? currencyAmount_exports : {});
function castCurrencyAmountUnsafe(input, dstCurrency) {
  const srcCurrency = input.currency;
  if (srcCurrency.decimals === dstCurrency.decimals) {
    return currencyAmount_14.CurrencyAmount.fromRawAmount(dstCurrency, input.quotient);
  }
  return currencyAmount_14.CurrencyAmount.fromRawAmount(dstCurrency, input.quotient).multiply(10 ** dstCurrency.decimals).divide(10 ** srcCurrency.decimals);
}
exports40.castCurrencyAmountUnsafe = castCurrencyAmountUnsafe;
var __export028;
if (Object.isExtensible(module40.exports)) {
  __export028 = module40.exports["castCurrencyAmountUnsafe"];
}

// ../ui-core/dist/fraction/utils/bpToFraction.js
var bpToFraction_exports = {};
__export(bpToFraction_exports, {
  bpToFraction: () => __export029
});
function $$cjs_default$$27(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global27 !== "undefined" && global27 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global27 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global27 !== "undefined" && global27 || typeof globalThis !== "undefined" && globalThis || {};
var exports41 = {};
var module41 = {
  get exports() {
    return exports41;
  },
  set exports(value) {
    exports41 = value;
  }
};
Object.defineProperty(exports41, "__esModule", { value: true });
exports41.bpToFraction = void 0;
var fraction_13 = $$cjs_default$$27(typeof fraction_exports !== "undefined" ? fraction_exports : {});
function bpToFraction(bp, decimals = 4) {
  return new fraction_13.Fraction(bp.toNumber(), 10 ** decimals);
}
exports41.bpToFraction = bpToFraction;
var __export029;
if (Object.isExtensible(module41.exports)) {
  __export029 = module41.exports["bpToFraction"];
}

// ../ui-core/dist/fraction/fiatAmount.js
var fiatAmount_exports = {};
__export(fiatAmount_exports, {
  default: () => fiatAmount_default
});
var exports42 = {};
var module42 = {
  get exports() {
    return exports42;
  },
  set exports(value) {
    exports42 = value;
  }
};
Object.defineProperty(exports42, "__esModule", { value: true });
var fiatAmount_default = module42.exports != null && typeof module42.exports === "object" && "default" in module42.exports ? module42.exports.default : module42.exports;

// ../ui-core/dist/fraction/price.js
var price_exports = {};
__export(price_exports, {
  Price: () => __export030
});

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant_exports = {};
__export(tiny_invariant_exports, {
  default: () => invariant
});
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}
function $$cjs_default$$28(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global28 !== "undefined" && global28 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global28 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global28 !== "undefined" && global28 || typeof globalThis !== "undefined" && globalThis || {};
var exports43 = {};
var module43 = {
  get exports() {
    return exports43;
  },
  set exports(value) {
    exports43 = value;
  }
};
var __importDefault6 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports43, "__esModule", { value: true });
exports43.Price = void 0;
var jsbi_14 = __importDefault6($$cjs_default$$28(typeof $cjs$jsbi !== "undefined" ? $cjs$jsbi : {}));
var tiny_invariant_1 = __importDefault6($$cjs_default$$28(typeof tiny_invariant_exports !== "undefined" ? tiny_invariant_exports : {}));
var fraction_14 = $$cjs_default$$28(typeof fraction_exports !== "undefined" ? fraction_exports : {});
var currencyAmount_15 = $$cjs_default$$28(typeof currencyAmount_exports !== "undefined" ? currencyAmount_exports : {});
var Price = class extends fraction_14.Fraction {
  constructor(...args) {
    let baseCurrency, quoteCurrency, denominator, numerator;
    if (args.length === 4) {
      [baseCurrency, quoteCurrency, denominator, numerator] = args;
    } else {
      const result = args[0].quoteAmount.divide(args[0].baseAmount);
      [baseCurrency, quoteCurrency, denominator, numerator] = [
        args[0].baseAmount.currency,
        args[0].quoteAmount.currency,
        result.denominator,
        result.numerator
      ];
    }
    super(numerator, denominator);
    this.baseCurrency = baseCurrency;
    this.quoteCurrency = quoteCurrency;
    this.scalar = new fraction_14.Fraction(jsbi_14.default.exponentiate(jsbi_14.default.BigInt(10), jsbi_14.default.BigInt(baseCurrency.decimals)), jsbi_14.default.exponentiate(jsbi_14.default.BigInt(10), jsbi_14.default.BigInt(quoteCurrency.decimals)));
  }
  invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  multiply(other) {
    (0, tiny_invariant_1.default)(this.quoteCurrency.equals(other.baseCurrency), "TOKEN");
    const fraction = super.multiply(other);
    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  quote(currencyAmount) {
    (0, tiny_invariant_1.default)(currencyAmount.currency.equals(this.baseCurrency), "TOKEN");
    const result = super.multiply(currencyAmount);
    return currencyAmount_15.CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
  }
  get adjustedForDecimals() {
    return super.multiply(this.scalar);
  }
  toSignificant(significantDigits = 6, format, rounding) {
    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 4, format, rounding) {
    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  }
};
exports43.Price = Price;
var __export030;
if (Object.isExtensible(module43.exports)) {
  __export030 = module43.exports["Price"];
}

// ../ui-core/dist/fraction/percent.js
var percent_exports = {};
__export(percent_exports, {
  Percent: () => __export031
});
function $$cjs_default$$29(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global29 !== "undefined" && global29 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global29 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global29 !== "undefined" && global29 || typeof globalThis !== "undefined" && globalThis || {};
var exports44 = {};
var module44 = {
  get exports() {
    return exports44;
  },
  set exports(value) {
    exports44 = value;
  }
};
var __importDefault7 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports44, "__esModule", { value: true });
exports44.Percent = void 0;
var jsbi_15 = __importDefault7($$cjs_default$$29(typeof $cjs$jsbi !== "undefined" ? $cjs$jsbi : {}));
var fraction_15 = $$cjs_default$$29(typeof fraction_exports !== "undefined" ? fraction_exports : {});
var ONE_HUNDRED = new fraction_15.Fraction(jsbi_15.default.BigInt(100));
function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}
var Percent = class extends fraction_15.Fraction {
  constructor() {
    super(...arguments);
    this.isPercent = true;
  }
  add(other) {
    return toPercent(super.add(other));
  }
  subtract(other) {
    return toPercent(super.subtract(other));
  }
  multiply(other) {
    return toPercent(super.multiply(other));
  }
  divide(other) {
    return toPercent(super.divide(other));
  }
  toSignificant(significantDigits = 5, format, rounding) {
    return super.multiply(ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 2, format, rounding) {
    return super.multiply(ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  }
};
exports44.Percent = Percent;
var __export031;
if (Object.isExtensible(module44.exports)) {
  __export031 = module44.exports["Percent"];
}

// ../ui-core/dist/fraction/index.js
function $$cjs_default$$30(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global30 !== "undefined" && global30 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global30 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global30 !== "undefined" && global30 || typeof globalThis !== "undefined" && globalThis || {};
var exports45 = {};
var module45 = {
  get exports() {
    return exports45;
  },
  set exports(value) {
    exports45 = value;
  }
};
var __createBinding3 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __exportStar3 = function(m, exports88) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports88, p))
      __createBinding3(exports88, m, p);
};
Object.defineProperty(exports45, "__esModule", { value: true });
exports45.Price = exports45.Percent = exports45.Fraction = exports45.CurrencyAmount = void 0;
var currencyAmount_16 = $$cjs_default$$30(typeof currencyAmount_exports !== "undefined" ? currencyAmount_exports : {});
Object.defineProperty(exports45, "CurrencyAmount", { enumerable: true, get: function() {
  return currencyAmount_16.CurrencyAmount;
} });
var fraction_16 = $$cjs_default$$30(typeof fraction_exports !== "undefined" ? fraction_exports : {});
Object.defineProperty(exports45, "Fraction", { enumerable: true, get: function() {
  return fraction_16.Fraction;
} });
var percent_1 = $$cjs_default$$30(typeof percent_exports !== "undefined" ? percent_exports : {});
Object.defineProperty(exports45, "Percent", { enumerable: true, get: function() {
  return percent_1.Percent;
} });
var price_1 = $$cjs_default$$30(typeof price_exports !== "undefined" ? price_exports : {});
Object.defineProperty(exports45, "Price", { enumerable: true, get: function() {
  return price_1.Price;
} });
__exportStar3($$cjs_default$$30(typeof fiatAmount_exports !== "undefined" ? fiatAmount_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof constants_exports !== "undefined" ? constants_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof bpToFraction_exports !== "undefined" ? bpToFraction_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof castCurrencyAmountUnsafe_exports !== "undefined" ? castCurrencyAmountUnsafe_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof formatAmount_exports !== "undefined" ? formatAmount_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof parseCurrencyAmount_exports !== "undefined" ? parseCurrencyAmount_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof parseFraction_exports !== "undefined" ? parseFraction_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof sumUnsafe_exports !== "undefined" ? sumUnsafe_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof toBigNumber_exports !== "undefined" ? toBigNumber_exports : {}), exports45);
__exportStar3($$cjs_default$$30(typeof toCurrencyAmount_exports !== "undefined" ? toCurrencyAmount_exports : {}), exports45);
var __export032;
var __export117;
var __export211;
var __export36;
if (Object.isExtensible(module45.exports)) {
  __export032 = module45.exports["Price"];
  __export117 = module45.exports["Percent"];
  __export211 = module45.exports["Fraction"];
  __export36 = module45.exports["CurrencyAmount"];
}

// ../ui-core/dist/icon.js
var icon_exports = {};
__export(icon_exports, {
  IconTheme: () => __export44,
  getCurrencyIcon: () => __export37,
  getNetworkIcon: () => __export212,
  getWalletIcon: () => __export118,
  setIconTheme: () => __export033
});
function $$cjs_default$$31(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global31 !== "undefined" && global31 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global31 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global31 !== "undefined" && global31 || typeof globalThis !== "undefined" && globalThis || {};
var exports46 = {};
var module46 = {
  get exports() {
    return exports46;
  },
  set exports(value) {
    exports46 = value;
  }
};
Object.defineProperty(exports46, "__esModule", { value: true });
exports46.setIconTheme = exports46.getWalletIcon = exports46.getNetworkIcon = exports46.getCurrencyIcon = exports46.IconTheme = void 0;
var network_12 = $$cjs_default$$31(typeof network_exports !== "undefined" ? network_exports : {});
var IconTheme;
(function(IconTheme2) {
  IconTheme2["LZ_DARK"] = "lz-dark";
  IconTheme2["LZ_LIGHT"] = "lz-light";
  IconTheme2["STG_LIGHT"] = "stargate-light";
})(IconTheme = exports46.IconTheme || (exports46.IconTheme = {}));
var defaultTheme = IconTheme.LZ_DARK;
var baseUrl = "https://icons-ckg.pages.dev";
function getCurrencyIcon(symbol, theme = getCurrencyIcon.defaultTheme) {
  return [baseUrl, theme, "tokens", symbol.toLowerCase() + ".svg"].join("/");
}
exports46.getCurrencyIcon = getCurrencyIcon;
function getNetworkIcon(chainIdOrSymbol, theme = getNetworkIcon.defaultTheme) {
  const symbol = typeof chainIdOrSymbol === "string" ? chainIdOrSymbol : (0, network_12.getNetwork)(chainIdOrSymbol).symbol;
  return [baseUrl, theme, "networks", symbol.toLowerCase() + ".svg"].join("/");
}
exports46.getNetworkIcon = getNetworkIcon;
function getWalletIcon(walletType, theme = getWalletIcon.defaultTheme) {
  return [baseUrl, theme, "wallets", walletType.toLowerCase() + ".svg"].join("/");
}
exports46.getWalletIcon = getWalletIcon;
getCurrencyIcon.defaultTheme = defaultTheme;
getNetworkIcon.defaultTheme = defaultTheme;
getWalletIcon.defaultTheme = defaultTheme;
function setIconTheme(theme) {
  getCurrencyIcon.defaultTheme = theme;
  getNetworkIcon.defaultTheme = theme;
  getWalletIcon.defaultTheme = theme;
}
exports46.setIconTheme = setIconTheme;
var __export033;
var __export118;
var __export212;
var __export37;
var __export44;
if (Object.isExtensible(module46.exports)) {
  __export033 = module46.exports["setIconTheme"];
  __export118 = module46.exports["getWalletIcon"];
  __export212 = module46.exports["getNetworkIcon"];
  __export37 = module46.exports["getCurrencyIcon"];
  __export44 = module46.exports["IconTheme"];
}

// ../ui-core/dist/http.js
var http_exports = {};
__export(http_exports, {
  http: () => __export034
});
function $$cjs_default$$32(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global32 !== "undefined" && global32 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global32 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global32 !== "undefined" && global32 || typeof globalThis !== "undefined" && globalThis || {};
var exports47 = {};
var module47 = {
  get exports() {
    return exports47;
  },
  set exports(value) {
    exports47 = value;
  }
};
var __importDefault8 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports47, "__esModule", { value: true });
exports47.http = void 0;
var axios_1 = __importDefault8($$cjs_default$$32(typeof $cjs$axios !== "undefined" ? $cjs$axios : {}));
exports47.http = axios_1.default;
var __export034;
if (Object.isExtensible(module47.exports)) {
  __export034 = module47.exports["http"];
}

// ../ui-core/dist/index.js
function $$cjs_default$$33(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global33 !== "undefined" && global33 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global33 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global33 !== "undefined" && global33 || typeof globalThis !== "undefined" && globalThis || {};
var exports48 = {};
var module48 = {
  get exports() {
    return exports48;
  },
  set exports(value) {
    exports48 = value;
  }
};
var __createBinding4 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __exportStar4 = function(m, exports88) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports88, p))
      __createBinding4(exports88, m, p);
};
Object.defineProperty(exports48, "__esModule", { value: true });
__exportStar4($$cjs_default$$33(typeof http_exports !== "undefined" ? http_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof icon_exports !== "undefined" ? icon_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof network_exports !== "undefined" ? network_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof currency_exports2 !== "undefined" ? currency_exports2 : {}), exports48);
__exportStar4($$cjs_default$$33(typeof fraction_exports2 !== "undefined" ? fraction_exports2 : {}), exports48);
__exportStar4($$cjs_default$$33(typeof transaction_exports !== "undefined" ? transaction_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof getExpectedDate_exports !== "undefined" ? getExpectedDate_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof parseNumber_exports !== "undefined" ? parseNumber_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof convertToPaddedUint8Array_exports !== "undefined" ? convertToPaddedUint8Array_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof BalanceProvider_exports !== "undefined" ? BalanceProvider_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof UAConfigProvider_exports !== "undefined" ? UAConfigProvider_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof DefaultAirdropProvider_exports !== "undefined" ? DefaultAirdropProvider_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof DstConfigProvider_exports !== "undefined" ? DstConfigProvider_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof ResourceProvider_exports !== "undefined" ? ResourceProvider_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof ResourceProvider_currency_evm_exports !== "undefined" ? ResourceProvider_currency_evm_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof walletType_exports !== "undefined" ? walletType_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof walletUtils_exports !== "undefined" ? walletUtils_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof AdapterParams_exports !== "undefined" ? AdapterParams_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof DstConfig_exports !== "undefined" ? DstConfig_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof DstPrice_exports !== "undefined" ? DstPrice_exports : {}), exports48);
__exportStar4($$cjs_default$$33(typeof FeeQuote_exports !== "undefined" ? FeeQuote_exports : {}), exports48);
var dist_default = module48.exports != null && typeof module48.exports === "object" && "default" in module48.exports ? module48.exports.default : module48.exports;

// ../ui-adapter-wagmi/dist/createWagmiAdapter.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function createWagmiAdapter(wagmiClient) {
  const adapter = {
    switchChain() {
      return __awaiter(this, void 0, void 0, function* () {
        warnWagmiProvider();
      });
    },
    connect() {
      return __awaiter(this, void 0, void 0, function* () {
        warnWagmiProvider();
      });
    },
    disconnect() {
      return __awaiter(this, void 0, void 0, function* () {
        warnWagmiProvider();
      });
    }
  };
  return adapter;
}
function warnWagmiProvider() {
  throw new Error("Use WagmiProvider");
}
var aptosAdapter;
function setAptosAdapter(adapter) {
  aptosAdapter = adapter;
}
function getAptosAdapter() {
  return aptosAdapter;
}
var AptosWalletModel = types.model({
  type: types.frozen(),
  account: types.string,
  aptosChainId: types.maybe(types.number),
  publicKey: types.maybe(types.string),
  signer: types.frozen()
}).actions((wallet) => ({
  disconnect() {
    return getAptosAdapter().disconnect();
  },
  switchChain(chainId) {
    throw new Error(`switchChain not implemented`);
  }
})).views((wallet) => ({
  supports(chainId) {
    return __export06(chainId);
  },
  get chainId() {
    return wallet.aptosChainId ? __export014(wallet.aptosChainId) : void 0;
  }
}));
var evmAdapter;
function getEvmAdapter() {
  return evmAdapter;
}
function setEvmAdapter(adapter) {
  evmAdapter = adapter;
}
var EthWalletModel = types.model({
  type: types.frozen(),
  account: types.string,
  evmChainId: types.number,
  signer: types.frozen()
}).actions((wallet) => ({
  disconnect() {
    return getEvmAdapter().disconnect(wallet.type);
  },
  switchChain(chainId) {
    return getEvmAdapter().switchChain(chainId);
  }
})).views((wallet) => ({
  supports(chainId) {
    return __export14(chainId);
  },
  get chainId() {
    try {
      return __export015(wallet.evmChainId);
    } catch (_a) {
      return void 0;
    }
  }
}));
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var WalletStoreModel = types.model({
  evm: types.maybe(EthWalletModel),
  aptos: types.maybe(AptosWalletModel),
  isSwitching: false
}).views((store) => ({
  get eth() {
    return store.evm;
  },
  get activeWallet() {
    return store.evm;
  },
  get wallets() {
    return compact([store.evm, store.aptos]);
  }
})).actions((store) => {
  const actions = {
    disconnect(walletType) {
      return __awaiter2(this, void 0, void 0, function* () {
        if (!walletType || __export12.includes(walletType)) {
          yield getEvmAdapter().disconnect();
        } else if (__export03.includes(walletType)) {
          yield getAptosAdapter().disconnect(walletType);
        }
      });
    },
    connect(walletType) {
      var _a, _b, _c;
      return __awaiter2(this, void 0, void 0, function* () {
        if (!walletType || __export12.includes(walletType)) {
          yield getEvmAdapter().connect(walletType);
          if (!((_a = store.evm) === null || _a === void 0 ? void 0 : _a.account))
            throw new Error(`connect did not sync account`);
          if (!((_b = store.evm) === null || _b === void 0 ? void 0 : _b.signer))
            throw new Error(`connect did not sync signer`);
          if (!((_c = store.evm) === null || _c === void 0 ? void 0 : _c.evmChainId))
            throw new Error(`connect did not sync evmChainId`);
        } else if (__export03.includes(walletType)) {
          yield getAptosAdapter().connect(walletType);
        }
      });
    },
    switchChain: flow(function* (chainId) {
      var _a, _b;
      if (!__export14(chainId))
        return;
      if (((_a = store.eth) === null || _a === void 0 ? void 0 : _a.chainId) === chainId)
        return;
      try {
        store.isSwitching = true;
        yield getEvmAdapter().switchChain(chainId);
        if (((_b = store.eth) === null || _b === void 0 ? void 0 : _b.chainId) !== chainId)
          throw new Error(`switchChain did not sync chainId`);
      } finally {
        store.isSwitching = false;
      }
    }),
    useAptosWallet(context, name) {
      if (context) {
        store.aptos = AptosWalletModel.create(context);
      } else {
        store.aptos = void 0;
      }
    },
    useEvmWallet(context, name) {
      if (context) {
        store.evm = EthWalletModel.create(context);
      } else {
        store.evm = void 0;
      }
    }
  };
  return actions;
});
var walletStore = WalletStoreModel.create({});

// ../ui-ethers/dist/index.js
var dist_exports2 = {};
__export(dist_exports2, {
  ERC20_APPROVE: () => __export042,
  ERC20_TRANSFER: () => __export124,
  FailoverProvider: () => __export036,
  JsonRpcBatchProviderFactory: () => __export45,
  ONE_ADDRESS: () => __export044,
  PUBLIC_RPC_NODES: () => __export120,
  ProviderRpcErrorCode: () => __export39,
  StaticJsonRpcBatchProvider: () => __export035,
  StaticJsonRpcBatchProviderFactory: () => __export38,
  ZERO_ADDRESS: () => __export126,
  addEthereumChain: () => __export46,
  assertChainAndWallet: () => __export043,
  assertChainId: () => __export214,
  assertWallet: () => __export125,
  createEstimateGas: () => __export041,
  createFailoverProvider: () => __export213,
  createTransaction: () => __export123,
  default: () => dist_default2,
  getOfficialRpcUrls: () => __export039,
  getProvider: () => __export121,
  randomWeighted: () => __export038,
  randomizeOrder: () => __export119,
  requestAccounts: () => __export73,
  selectAccounts: () => __export63,
  setProviderFactory: () => __export040,
  switchEthereumChain: () => __export53
});

// ../ui-ethers/dist/providers/StaticJsonBatchProvider.js
var StaticJsonBatchProvider_exports = {};
__export(StaticJsonBatchProvider_exports, {
  StaticJsonRpcBatchProvider: () => __export035
});
function $$cjs_default$$34(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global34 !== "undefined" && global34 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global34 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global34 !== "undefined" && global34 || typeof globalThis !== "undefined" && globalThis || {};
var exports49 = {};
var module49 = {
  get exports() {
    return exports49;
  },
  set exports(value) {
    exports49 = value;
  }
};
Object.defineProperty(exports49, "__esModule", { value: true });
exports49.StaticJsonRpcBatchProvider = void 0;
var providers_1 = $$cjs_default$$34(typeof $cjs$_ethersproject_providers !== "undefined" ? $cjs$_ethersproject_providers : {});
var StaticJsonRpcBatchProvider = class extends providers_1.JsonRpcBatchProvider {
  async detectNetwork() {
    let network = this.network;
    if (network == null) {
      network = await super._ready();
    }
    return network;
  }
  send(method, params) {
    const response = super.send(method, params);
    response.catch((error) => {
      var _a;
      (_a = this._onError) === null || _a === void 0 ? void 0 : _a.call(this, error, this);
    });
    return response;
  }
  onError(handler) {
    this._onError = handler;
  }
};
exports49.StaticJsonRpcBatchProvider = StaticJsonRpcBatchProvider;
var __export035;
if (Object.isExtensible(module49.exports)) {
  __export035 = module49.exports["StaticJsonRpcBatchProvider"];
}

// ../ui-ethers/dist/providers/FailoverProvider.js
var FailoverProvider_exports = {};
__export(FailoverProvider_exports, {
  FailoverProvider: () => __export036
});
function $$cjs_default$$35(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global35 !== "undefined" && global35 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global35 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global35 !== "undefined" && global35 || typeof globalThis !== "undefined" && globalThis || {};
var exports50 = {};
var module50 = {
  get exports() {
    return exports50;
  },
  set exports(value) {
    exports50 = value;
  }
};
Object.defineProperty(exports50, "__esModule", { value: true });
exports50.FailoverProvider = void 0;
var providers_12 = $$cjs_default$$35(typeof $cjs$_ethersproject_providers !== "undefined" ? $cjs$_ethersproject_providers : {});
var logger_1 = $$cjs_default$$35(typeof $cjs$_ethersproject_logger !== "undefined" ? $cjs$_ethersproject_logger : {});
var logger = new logger_1.Logger("0.0.1");
var FailoverProvider = class extends providers_12.BaseProvider {
  constructor(providers, network) {
    super(Promise.resolve(network));
    this.maxAttempts = 3;
    const providerConfigs = providers.map((providerOrConfig) => {
      if (providers_12.Provider.isProvider(providerOrConfig)) {
        const config2 = {
          provider: providerOrConfig
        };
        return config2;
      }
      const config = {
        provider: providerOrConfig.provider
      };
      return config;
    });
    const providerEntries = /* @__PURE__ */ new Map();
    providerConfigs.forEach((config) => {
      const entry = {
        provider: config.provider,
        errors: []
      };
      providerEntries.set(config.provider, entry);
    });
    this.providerConfigs = providerConfigs;
    this.providerEntries = providerEntries;
    this.orderedProviderEntries = Array.from(providerEntries.values());
  }
  async detectNetwork() {
    return this.network;
  }
  async perform(method, params) {
    let attempt = 0;
    while (++attempt <= this.maxAttempts) {
      const provider = this.getProvider();
      if (attempt > 1) {
        logger.warn(`Attempt ${attempt}`, { provider });
      }
      try {
        return await provider.perform(method, params);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "UNPREDICTABLE_GAS_LIMIT") {
          throw error;
        }
        logger.warn(`Attempt ${attempt} failed`, error);
        this.handleError(provider, error);
        if (attempt >= this.maxAttempts) {
          throw error;
        }
      }
    }
  }
  getProvider() {
    return this.orderedProviderEntries[0].provider;
  }
  handleError(provider, error) {
    const entry = this.getEntry(provider);
    entry.errors.push(error);
    this.updateOrder();
  }
  getEntry(provider) {
    return this.providerEntries.get(provider);
  }
  updateOrder() {
    const currentProvider = this.getProvider();
    this.orderedProviderEntries.sort((a, b) => a.errors.length - b.errors.length);
    const nextProvider = this.getProvider();
    if (nextProvider !== currentProvider) {
      logger.warn(`Next provider`, { currentProvider, nextProvider });
    }
  }
};
exports50.FailoverProvider = FailoverProvider;
var __export036;
if (Object.isExtensible(module50.exports)) {
  __export036 = module50.exports["FailoverProvider"];
}

// ../ui-ethers/dist/providerFactory.js
var providerFactory_exports = {};
__export(providerFactory_exports, {
  JsonRpcBatchProviderFactory: () => __export45,
  StaticJsonRpcBatchProviderFactory: () => __export38,
  createFailoverProvider: () => __export213,
  getProvider: () => __export121,
  setProviderFactory: () => __export040
});

// ../ui-ethers/dist/constants/rpcConstants.js
var rpcConstants_exports = {};
__export(rpcConstants_exports, {
  WHITELISTED_RPCS_FOR_WALLETS: () => __export037
});
function $$cjs_default$$36(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global36 !== "undefined" && global36 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global36 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global36 !== "undefined" && global36 || typeof globalThis !== "undefined" && globalThis || {};
var exports51 = {};
var module51 = {
  get exports() {
    return exports51;
  },
  set exports(value) {
    exports51 = value;
  }
};
Object.defineProperty(exports51, "__esModule", { value: true });
exports51.WHITELISTED_RPCS_FOR_WALLETS = void 0;
var lz_sdk_17 = $$cjs_default$$36(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
exports51.WHITELISTED_RPCS_FOR_WALLETS = {
  [lz_sdk_17.ChainId.ETHEREUM]: [
    "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
    "https://eth-rpc.gateway.pokt.network",
    "https://cloudflare-eth.com",
    "https://mainnet-nethermind.blockscout.com",
    "https://rpc.flashbots.net",
    "https://mainnet.infura.io/v3/"
  ],
  [lz_sdk_17.ChainId.RINKEBY]: ["https://rinkeby-light.eth.linkpool.io"],
  [lz_sdk_17.ChainId.RINKEBY_SANDBOX]: ["https://rinkeby-light.eth.linkpool.io"],
  [lz_sdk_17.ChainId.KOVAN]: ["http://kovan.poa.network:8545", "https://kovan.poa.network"],
  [lz_sdk_17.ChainId.KOVAN_SANDBOX]: ["http://kovan.poa.network:8545", "https://kovan.poa.network"],
  [lz_sdk_17.ChainId.GOERLI]: ["https://rpc.goerli.mudit.blog/"],
  [lz_sdk_17.ChainId.GOERLI_SANDBOX]: ["https://rpc.goerli.mudit.blog/"],
  [lz_sdk_17.ChainId.BSC]: [
    "https://rpc-bsc.bnb48.club",
    "https://bsc-dataseed2.ninicoin.io",
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed4.binance.org",
    "https://bsc-dataseed2.defibit.io",
    "https://bsc-dataseed3.ninicoin.io",
    "https://bsc-dataseed1.defibit.io",
    "https://binance.nodereal.io",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed.binance.org",
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed3.defibit.io",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed4.ninicoin.io",
    "https://bsc-dataseed4.defibit.io"
  ],
  [lz_sdk_17.ChainId.BSC_TESTNET]: [
    "https://data-seed-prebsc-2-s3.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545"
  ],
  [lz_sdk_17.ChainId.BSC_TESTNET_SANDBOX]: [
    "https://data-seed-prebsc-2-s3.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545"
  ],
  [lz_sdk_17.ChainId.AVALANCHE]: ["https://api.avax.network/ext/bc/C/rpc"],
  [lz_sdk_17.ChainId.FUJI]: ["https://api.avax-test.network/ext/bc/C/rpc"],
  [lz_sdk_17.ChainId.FUJI_SANDBOX]: ["https://api.avax-test.network/ext/bc/C/rpc"],
  [lz_sdk_17.ChainId.POLYGON]: [
    "https://poly-rpc.gateway.pokt.network",
    "https://polygon-rpc.com",
    "https://rpc-mainnet.matic.quiknode.pro",
    "https://rpc-mainnet.matic.network",
    "https://matic-mainnet.chainstacklabs.com",
    "https://matic-mainnet-full-rpc.bwarelabs.com",
    "https://matic-mainnet-archive-rpc.bwarelabs.com"
  ],
  [lz_sdk_17.ChainId.MUMBAI]: [
    "https://rpc-mumbai.maticvigil.com",
    "https://matic-mumbai.chainstacklabs.com"
  ],
  [lz_sdk_17.ChainId.MUMBAI_SANDBOX]: [
    "https://rpc-mumbai.maticvigil.com",
    "https://matic-mumbai.chainstacklabs.com"
  ],
  [lz_sdk_17.ChainId.ARBITRUM]: ["https://arb1.arbitrum.io/rpc"],
  [lz_sdk_17.ChainId.ARBITRUM_RINKEBY]: ["https://rinkeby.arbitrum.io/rpc"],
  [lz_sdk_17.ChainId.ARBITRUM_GOERLI]: ["https://goerli-rollup.arbitrum.io/rpc/"],
  [lz_sdk_17.ChainId.ARBITRUM_RINKEBY_SANDBOX]: ["https://rinkeby.arbitrum.io/rpc"],
  [lz_sdk_17.ChainId.OPTIMISM]: ["https://mainnet.optimism.io"],
  [lz_sdk_17.ChainId.OPTIMISM_KOVAN]: ["https://kovan.optimism.io/"],
  [lz_sdk_17.ChainId.OPTIMISM_GOERLI]: ["https://goerli.optimism.io/"],
  [lz_sdk_17.ChainId.OPTIMISM_KOVAN_SANDBOX]: ["https://kovan.optimism.io/"],
  [lz_sdk_17.ChainId.FANTOM]: [
    "https://rpc.ftm.tools",
    "https://rpc.fantom.network",
    "https://rpcapi.fantom.network",
    "https://rpc3.fantom.network",
    "https://rpc2.fantom.network"
  ],
  [lz_sdk_17.ChainId.FANTOM_TESTNET]: ["https://rpc.testnet.fantom.network/"],
  [lz_sdk_17.ChainId.FANTOM_TESTNET_SANDBOX]: ["https://rpc.testnet.fantom.network/"],
  [lz_sdk_17.ChainId.SWIMMER]: ["https://subnets.avax.network/swimmer/mainnet/rpc"],
  [lz_sdk_17.ChainId.SWIMMER_TESTNET]: ["https://subnets.avax.network/swimmer/testnet/rpc"],
  [lz_sdk_17.ChainId.SWIMMER_TESTNET_SANDBOX]: ["https://subnets.avax.network/swimmer/testnet/rpc"],
  [lz_sdk_17.ChainId.DFK]: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
  [lz_sdk_17.ChainId.DFK_TESTNET]: ["https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc"],
  [lz_sdk_17.ChainId.DFK_TESTNET_SANDBOX]: [
    "https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc"
  ],
  [lz_sdk_17.ChainId.HARMONY]: ["https://api.harmony.one", "https://api.s0.t.hmny.io/"],
  [lz_sdk_17.ChainId.HARMONY_TESTNET]: [
    "https://api.s0.b.hmny.io/",
    "https://api.s1.b.hmny.io",
    "https://api.s0.backup1.b.hmny.io/",
    "https://api.s0.pops.one/"
  ],
  [lz_sdk_17.ChainId.HARMONY_TESTNET_SANDBOX]: [
    "https://api.s0.b.hmny.io/",
    "https://api.s1.b.hmny.io",
    "https://api.s0.backup1.b.hmny.io/",
    "https://api.s0.pops.one/"
  ],
  [lz_sdk_17.ChainId.ARCANA_TESTNET]: ["https://blockchain-dev.arcana.network/"],
  [lz_sdk_17.ChainId.ARCANA_TESTNET_SANDBOX]: ["https://blockchain-dev.arcana.network/"],
  [lz_sdk_17.ChainId.DEXALOT_TESTNET]: [
    "https://subnets.avax.network/dexalot/testnet/rpc",
    "https://node.dexalot-test.com/ext/bc/XuEPnCE59rtutASDPCDeYw8geQaGWwteWjkDXYLWvssfuirde/rpc"
  ],
  [lz_sdk_17.ChainId.DEXALOT_TESTNET_SANDBOX]: [
    "https://subnets.avax.network/dexalot/testnet/rpc",
    "https://node.dexalot-test.com/ext/bc/XuEPnCE59rtutASDPCDeYw8geQaGWwteWjkDXYLWvssfuirde/rpc"
  ],
  [lz_sdk_17.ChainId.CASTLECRUSH_TESTNET]: ["https://subnets.avax.network/castle-crush/testnet/rpc"],
  [lz_sdk_17.ChainId.CASTLECRUSH_TESTNET_SANDBOX]: ["https://subnets.avax.network/castle-crush/testnet/rpc"],
  [lz_sdk_17.ChainId.CELO]: ["https://forno.celo.org", "https://rpc.ankr.com/celo"],
  [lz_sdk_17.ChainId.CELO_TESTNET]: ["https://alfajores-forno.celo-testnet.org"],
  [lz_sdk_17.ChainId.CELO_TESTNET_SANDBOX]: ["https://alfajores-forno.celo-testnet.org"],
  [lz_sdk_17.ChainId.MOONBEAM]: [
    "https://moonbeam.public.blastapi.io",
    "https://moonbeam-rpc.dwellir.com",
    "https://rpc.ankr.com/moonbeam",
    "https://moonbeam.api.onfinality.io/public",
    "https://moonbeam-mainnet.gateway.pokt.network/v1/lb/629a2b5650ec8c0039bb30f0"
  ],
  [lz_sdk_17.ChainId.MOONBEAM_TESTNET]: [
    "https://rpc.api.moonbase.moonbeam.network",
    "https://moonbase-alpha.public.blastapi.io",
    "https://moonbeam-alpha.api.onfinality.io/public"
  ],
  [lz_sdk_17.ChainId.MOONBEAM_TESTNET_SANDBOX]: [
    "https://rpc.api.moonbase.moonbeam.network",
    "https://moonbase-alpha.public.blastapi.io",
    "https://moonbeam-alpha.api.onfinality.io/public"
  ],
  [lz_sdk_17.ChainId.GNOSIS_TESTNET]: ["https://optimism.gnosischain.com"],
  [lz_sdk_17.ChainId.GNOSIS_TESTNET_SANDBOX]: ["https://optimism.gnosischain.com"],
  [lz_sdk_17.ChainId.BOBA]: [
    "https://mainnet.boba.network",
    "https://lightning-replica.boba.network",
    "https://boba-mainnet.gateway.pokt.network/v1/lb/623ad21b20354900396fed7f"
  ],
  [lz_sdk_17.ChainId.BOBA_TESTNET]: ["https://rinkeby.boba.network/"],
  [lz_sdk_17.ChainId.BOBA_TESTNET_SANDBOX]: ["https://rinkeby.boba.network/"],
  [lz_sdk_17.ChainId.PORTAL_TESTNET]: [
    "http://3.212.233.100:9650/ext/bc/29oXNywCkGdJCuYikXkkqG6Pe5Q8tuS5VfyLHNGfeqmDzBoTPq/rpc"
  ],
  [lz_sdk_17.ChainId.PORTAL_TESTNET_SANDBOX]: [
    "http://3.212.233.100:9650/ext/bc/29oXNywCkGdJCuYikXkkqG6Pe5Q8tuS5VfyLHNGfeqmDzBoTPq/rpc"
  ],
  [lz_sdk_17.ChainId.AURORA]: ["https://mainnet.aurora.dev"],
  [lz_sdk_17.ChainId.AURORA_TESTNET]: ["https://testnet.aurora.dev/"],
  [lz_sdk_17.ChainId.AURORA_TESTNET_SANDBOX]: ["https://testnet.aurora.dev/"],
  [lz_sdk_17.ChainId.APTOS]: ["https://fullnode.devnet.aptoslabs.com/v1"],
  [lz_sdk_17.ChainId.APTOS_TESTNET]: ["https://fullnode.devnet.aptoslabs.com/v1"],
  [lz_sdk_17.ChainId.APTOS_TESTNET_SANDBOX]: ["https://fullnode.devnet.aptoslabs.com/v1"],
  [lz_sdk_17.ChainId.METIS]: ["https://andromeda.metis.io/?owner=1088"],
  [lz_sdk_17.ChainId.METIS_TESTNET]: ["https://goerli.gateway.metisdevops.link"]
};
var __export037;
if (Object.isExtensible(module51.exports)) {
  __export037 = module51.exports["WHITELISTED_RPCS_FOR_WALLETS"];
}

// ../ui-ethers/dist/randomize.js
var randomize_exports = {};
__export(randomize_exports, {
  randomWeighted: () => __export038,
  randomizeOrder: () => __export119
});
function $$cjs_default$$37(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global37 !== "undefined" && global37 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global37 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global37 !== "undefined" && global37 || typeof globalThis !== "undefined" && globalThis || {};
var exports52 = {};
var module52 = {
  get exports() {
    return exports52;
  },
  set exports(value) {
    exports52 = value;
  }
};
Object.defineProperty(exports52, "__esModule", { value: true });
exports52.randomWeighted = exports52.randomizeOrder = void 0;
var lodash_1 = $$cjs_default$$37(typeof $cjs$lodash !== "undefined" ? $cjs$lodash : {});
function randomizeOrder(items) {
  let remaining = items.slice();
  const result = [];
  while (remaining.length > 1) {
    const item = randomWeighted(remaining);
    result.push(item);
    remaining = (0, lodash_1.without)(remaining, item);
  }
  result.push(...remaining);
  return result;
}
exports52.randomizeOrder = randomizeOrder;
function randomWeighted(objects, defaultWeight = 1) {
  var _a;
  const totalWeight = objects.reduce((agg, object) => {
    var _a2;
    return agg + ((_a2 = object.weight) !== null && _a2 !== void 0 ? _a2 : defaultWeight);
  }, 0);
  const randomNumber = Math.random() * totalWeight;
  let weightSum = 0;
  for (let object of objects) {
    weightSum += (_a = object.weight) !== null && _a !== void 0 ? _a : defaultWeight;
    if (randomNumber <= weightSum)
      return object;
  }
  return void 0;
}
exports52.randomWeighted = randomWeighted;
var __export038;
var __export119;
if (Object.isExtensible(module52.exports)) {
  __export038 = module52.exports["randomWeighted"];
  __export119 = module52.exports["randomizeOrder"];
}

// ../ui-ethers/dist/rpcNodes.js
var rpcNodes_exports = {};
__export(rpcNodes_exports, {
  PUBLIC_RPC_NODES: () => __export120,
  getOfficialRpcUrls: () => __export039
});
function $$cjs_default$$38(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global38 !== "undefined" && global38 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global38 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global38 !== "undefined" && global38 || typeof globalThis !== "undefined" && globalThis || {};
var exports53 = {};
var module53 = {
  get exports() {
    return exports53;
  },
  set exports(value) {
    exports53 = value;
  }
};
Object.defineProperty(exports53, "__esModule", { value: true });
exports53.getOfficialRpcUrls = exports53.PUBLIC_RPC_NODES = void 0;
var lz_sdk_18 = $$cjs_default$$38(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var rpcConstants_1 = $$cjs_default$$38(typeof rpcConstants_exports !== "undefined" ? rpcConstants_exports : {});
var MATICVIGIL_ID = "39fe5c21ccf1eff1520ff3a98b17a7a93b444d26";
var ALCHEMY_ID = "diFpK69enquODcjB8i6pfcJmy4VNaO-D";
var INFURA_ID = "028a19f481ce4d35908214e5134c2131";
exports53.PUBLIC_RPC_NODES = {
  [lz_sdk_18.ChainId.ETHEREUM]: [
    {
      url: "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
      weight: 1e6
    },
    { url: "https://eth-rpc.gateway.pokt.network", weight: 1e6 },
    { url: "https://ethereum.publicnode.com", weight: 1e6 },
    { url: "https://eth-mainnet.public.blastapi.io", weight: 1e6 },
    { url: "https://cloudflare-eth.com", weight: 1e3 },
    { url: `https://mainnet.infura.io/v3/${INFURA_ID}`, weight: 1 },
    {
      url: `https://eth-mainnet.alchemyapi.io/v2/84tGz8xVIWFkagsaSzNjObh7aSPbxeXD`,
      weight: 100
    },
    {
      url: `https://eth-mainnet.alchemyapi.io/v2/VsPzIezK0AtqsnrWAuV0Gew-MS7H_E5E`,
      weight: 100
    }
  ],
  [lz_sdk_18.ChainId.POLYGON]: [
    { url: "https://poly-rpc.gateway.pokt.network", weight: 1e6 },
    { url: "https://matic-mainnet.chainstacklabs.com", weight: 1e6 },
    { url: `https://polygon-mainnet.infura.io/v3/${INFURA_ID}` },
    { url: "https://polygon-rpc.com", weight: 1e6 },
    {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`,
      weight: 1
    },
    {
      url: "https://polygon-mainnet.g.alchemy.com/v2/me6Q04fTd2kTT74BUYAp82d_3KL-ObCw",
      weight: 100
    },
    {
      url: "https://polygon-mainnet.g.alchemy.com/v2/q3f-QpPeM_g7rL3G21Cr9tFeuYAquyYl",
      weight: 100
    }
  ],
  [lz_sdk_18.ChainId.BSC]: [
    { url: "https://bscrpc.com" },
    { url: "https://binance.nodereal.io" },
    { url: "https://bsc-dataseed.binance.org" },
    { url: "https://bsc-dataseed1.binance.org" },
    { url: "https://bsc-dataseed2.binance.org" },
    { url: "https://bsc-dataseed3.binance.org" },
    { url: "https://bsc-dataseed4.binance.org" }
  ],
  [lz_sdk_18.ChainId.AVALANCHE]: [
    { url: "https://api.avax.network/ext/bc/C/rpc", weight: 1e6 },
    {
      url: `https://avalanche--mainnet--rpc.datahub.figment.io/apikey/b1a0d59ba8a5d08049bbfdc174dca1b1/ext/bc/C/rpc`,
      weight: 100
    }
  ],
  [lz_sdk_18.ChainId.FANTOM]: [
    { url: "https://rpc.ftm.tools", weight: 1e6 },
    { url: "https://rpc2.fantom.network", weight: 100 },
    { url: "https://rpc3.fantom.network", weight: 100 }
  ],
  [lz_sdk_18.ChainId.OPTIMISM]: [
    { url: "https://mainnet.optimism.io", timeout: 8e3, weight: 1e6 },
    { url: `https://optimism-mainnet.infura.io/v3/${INFURA_ID}` },
    { url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}` },
    {
      url: `https://opt-mainnet.g.alchemy.com/v2/3glkhRJRgzHCB2NbDwiQa7G_FTdqn3-T`,
      weight: 100
    },
    {
      url: `https://opt-mainnet.g.alchemy.com/v2/7urLa-8k2RR_UYc0exh-b0qg4xySL5KA`,
      weight: 100
    }
  ],
  [lz_sdk_18.ChainId.ARBITRUM]: [
    { url: "https://arb1.arbitrum.io/rpc", weight: 1e6 },
    { url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`, weight: 1 },
    {
      url: "https://arb-mainnet.g.alchemy.com/v2/N71NRfHZGk2jbnDkW-GiM6fTe6ysJOmp",
      weight: 100
    },
    {
      url: "https://arb-mainnet.g.alchemy.com/v2/KhVdIItVH0ttiQvBYYO5NPL-De-gLWoW",
      weight: 100
    }
  ],
  [lz_sdk_18.ChainId.METIS]: [
    { url: "https://andromeda.metis.io/?owner=1088" }
  ],
  [lz_sdk_18.ChainId.RINKEBY]: [
    { url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}` }
  ],
  [lz_sdk_18.ChainId.GOERLI]: [
    { url: "https://eth-goerli.public.blastapi.io", weight: 1 },
    { url: "https://goerli.blockpi.network/v1/rpc/public", weight: 1 },
    { url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", weight: 1 },
    { url: "https://endpoints.omniatech.io/v1/eth/goerli/public", weight: 1 },
    { url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", weight: 1e6 }
  ],
  [lz_sdk_18.ChainId.BSC_TESTNET]: [
    { url: "https://data-seed-prebsc-1-s3.binance.org:8545" },
    { url: "https://data-seed-prebsc-2-s2.binance.org:8545" },
    { url: "https://data-seed-prebsc-1-s1.binance.org:8545" },
    { url: "https://data-seed-prebsc-1-s2.binance.org:8545" },
    { url: "https://data-seed-prebsc-2-s1.binance.org:8545" }
  ],
  [lz_sdk_18.ChainId.MUMBAI]: [
    { url: "https://matic-mumbai.chainstacklabs.com" },
    { url: `https://rpc-mumbai.maticvigil.com/v1/${MATICVIGIL_ID}` }
  ],
  [lz_sdk_18.ChainId.FUJI]: [
    { url: "https://api.avax-test.network/ext/bc/C/rpc" },
    { url: "https://rpc.ankr.com/avalanche_fuji" }
  ],
  [lz_sdk_18.ChainId.OPTIMISM_KOVAN]: [
    { url: "https://kovan.optimism.io/" },
    { url: `https://opt-kovan.g.alchemy.com/v2/${ALCHEMY_ID}` }
  ],
  [lz_sdk_18.ChainId.OPTIMISM_GOERLI]: [
    { url: "https://goerli.optimism.io" }
  ],
  [lz_sdk_18.ChainId.FANTOM_TESTNET]: [
    { url: "https://rpc.testnet.fantom.network/" },
    { url: "https://rpc.ankr.com/fantom_testnet" },
    { url: "https://fantom-testnet.public.blastapi.io" }
  ],
  [lz_sdk_18.ChainId.ARBITRUM_RINKEBY]: [
    { url: "https://rinkeby.arbitrum.io/rpc" },
    { url: `https://arb-rinkeby.g.alchemy.com/v2/${ALCHEMY_ID}` }
  ],
  [lz_sdk_18.ChainId.ARBITRUM_GOERLI]: [
    { url: "https://goerli-rollup.arbitrum.io/rpc" },
    { url: "https://arb-goerli.g.alchemy.com/v2/bgFeK0bK5LSFZCyBQAnztWaCUgF_b4fE" }
  ],
  [lz_sdk_18.ChainId.HARMONY]: [
    { url: "https://harmony-mainnet.chainstacklabs.com" },
    { url: "https://api.harmony.one" },
    { url: "https://api.s0.t.hmny.io" },
    { url: "https://a.api.s0.t.hmny.io" },
    { url: "https://rpc.ankr.com/harmony" },
    { url: "https://harmony-0-rpc.gateway.pokt.network" }
  ],
  [lz_sdk_18.ChainId.DFK]: [
    { url: "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc" }
  ],
  [lz_sdk_18.ChainId.GOERLI]: [
    { url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" }
  ],
  [lz_sdk_18.ChainId.METIS_TESTNET]: [
    { url: "https://goerli.gateway.metisdevops.link" }
  ]
};
function getOfficialRpcUrls(chainId) {
  const urls = rpcConstants_1.WHITELISTED_RPCS_FOR_WALLETS[chainId];
  if (!urls || urls.length === 0)
    throw new Error(`No OFFICIAL_RPC_URI for ${chainId} ${lz_sdk_18.ChainId[chainId]}`);
  return urls;
}
exports53.getOfficialRpcUrls = getOfficialRpcUrls;
function updateSandbox() {
  for (const sandboxKey of Object.keys(lz_sdk_18.ChainId).filter((key) => key.endsWith("_SANDBOX"))) {
    const testnetKey = sandboxKey.replace("_SANDBOX", "");
    const testnetChainId = lz_sdk_18.ChainId[testnetKey];
    const sandboxChainId = lz_sdk_18.ChainId[sandboxKey];
    exports53.PUBLIC_RPC_NODES[sandboxChainId] = exports53.PUBLIC_RPC_NODES[testnetChainId];
    rpcConstants_1.WHITELISTED_RPCS_FOR_WALLETS[sandboxChainId] = rpcConstants_1.WHITELISTED_RPCS_FOR_WALLETS[testnetChainId];
  }
}
function updateDefault() {
  Object.entries(lz_sdk_18.RPCS).forEach(([key, urls]) => {
    const chainId = Number(key);
    if (!exports53.PUBLIC_RPC_NODES[chainId]) {
      exports53.PUBLIC_RPC_NODES[chainId] = urls.map((url) => ({ url }));
    }
  });
}
updateSandbox();
updateDefault();
var __export039;
var __export120;
if (Object.isExtensible(module53.exports)) {
  __export039 = module53.exports["getOfficialRpcUrls"];
  __export120 = module53.exports["PUBLIC_RPC_NODES"];
}

// ../ui-ethers/dist/providerFactory.js
function $$cjs_default$$39(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global39 !== "undefined" && global39 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global39 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global39 !== "undefined" && global39 || typeof globalThis !== "undefined" && globalThis || {};
var exports54 = {};
var module54 = {
  get exports() {
    return exports54;
  },
  set exports(value) {
    exports54 = value;
  }
};
Object.defineProperty(exports54, "__esModule", { value: true });
exports54.setProviderFactory = exports54.getProvider = exports54.createFailoverProvider = exports54.StaticJsonRpcBatchProviderFactory = exports54.JsonRpcBatchProviderFactory = void 0;
var rpcNodes_1 = $$cjs_default$$39(typeof rpcNodes_exports !== "undefined" ? rpcNodes_exports : {});
var lodash_12 = $$cjs_default$$39(typeof $cjs$lodash !== "undefined" ? $cjs$lodash : {});
var providers_13 = $$cjs_default$$39(typeof $cjs$_ethersproject_providers !== "undefined" ? $cjs$_ethersproject_providers : {});
var StaticJsonBatchProvider_1 = $$cjs_default$$39(typeof StaticJsonBatchProvider_exports !== "undefined" ? StaticJsonBatchProvider_exports : {});
var FailoverProvider_1 = $$cjs_default$$39(typeof FailoverProvider_exports !== "undefined" ? FailoverProvider_exports : {});
var ui_core_1 = $$cjs_default$$39(typeof dist_exports !== "undefined" ? dist_exports : {});
var randomize_1 = $$cjs_default$$39(typeof randomize_exports !== "undefined" ? randomize_exports : {});
var rpcConstants_12 = $$cjs_default$$39(typeof rpcConstants_exports !== "undefined" ? rpcConstants_exports : {});
exports54.JsonRpcBatchProviderFactory = (0, lodash_12.memoize)((chainId) => {
  const urls = rpcConstants_12.WHITELISTED_RPCS_FOR_WALLETS[chainId];
  if (!chainId)
    throw new Error(`No RPC_URI for ${chainId}`);
  const evmChainId = (0, ui_core_1.toEvmChainId)(chainId);
  const network = (0, ui_core_1.getNetwork)(chainId);
  const url = (0, lodash_12.sample)(urls);
  if (!url)
    throw new Error(`No RPC URL for ${chainId}`);
  return new providers_13.JsonRpcBatchProvider({ url }, {
    chainId: evmChainId,
    name: network.name
  });
});
exports54.StaticJsonRpcBatchProviderFactory = (0, lodash_12.memoize)((chainId) => {
  const urls = rpcConstants_12.WHITELISTED_RPCS_FOR_WALLETS[chainId];
  if (!chainId)
    throw new Error(`No RPC_URI for ${chainId}`);
  const evmChainId = (0, ui_core_1.toEvmChainId)(chainId);
  const network = (0, ui_core_1.getNetwork)(chainId);
  const url = (0, lodash_12.sample)(urls);
  if (!url)
    throw new Error(`No RPC URL for ${chainId}`);
  return new StaticJsonBatchProvider_1.StaticJsonRpcBatchProvider({ url, timeout: 5e3 }, {
    chainId: evmChainId,
    name: network.name
  });
});
function createFailoverProvider(chainId, options = {}) {
  const network = {
    name: (0, ui_core_1.getNetwork)(chainId).name,
    chainId: (0, ui_core_1.toEvmChainId)(chainId)
  };
  const urls = rpcNodes_1.PUBLIC_RPC_NODES[chainId];
  if (!urls || urls.length === 0) {
    throw new Error(`No PUBLIC_RPC_NODES for ${chainId}`);
  }
  const rpcList = (0, randomize_1.randomizeOrder)(urls);
  const providers = rpcList.map(({ url, timeout = 5e3 }) => {
    return new StaticJsonBatchProvider_1.StaticJsonRpcBatchProvider({ url, timeout }, network);
  });
  providers.forEach((provider2) => {
    var _a, _b;
    provider2.onError((_a = options.onError) !== null && _a !== void 0 ? _a : lodash_12.noop);
    provider2.on("debug", (_b = options.onDebug) !== null && _b !== void 0 ? _b : lodash_12.noop);
  });
  const provider = new FailoverProvider_1.FailoverProvider(providers, network);
  return provider;
}
exports54.createFailoverProvider = createFailoverProvider;
var providerFactory = (0, lodash_12.memoize)((chainId) => createFailoverProvider(chainId));
var getProvider = (chainId) => {
  console.warn("getProvider is deprecated", "please inject your provider factory");
  return providerFactory(chainId);
};
exports54.getProvider = getProvider;
var setProviderFactory = (factory) => {
  providerFactory = factory;
};
exports54.setProviderFactory = setProviderFactory;
var __export040;
var __export121;
var __export213;
var __export38;
var __export45;
if (Object.isExtensible(module54.exports)) {
  __export040 = module54.exports["setProviderFactory"];
  __export121 = module54.exports["getProvider"];
  __export213 = module54.exports["createFailoverProvider"];
  __export38 = module54.exports["StaticJsonRpcBatchProviderFactory"];
  __export45 = module54.exports["JsonRpcBatchProviderFactory"];
}

// ../ui-ethers/dist/createTransaction.js
var createTransaction_exports = {};
__export(createTransaction_exports, {
  createEstimateGas: () => __export041,
  createTransaction: () => __export123
});
function $$cjs_default$$40(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global40 !== "undefined" && global40 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global40 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global40 !== "undefined" && global40 || typeof globalThis !== "undefined" && globalThis || {};
var exports55 = {};
var module55 = {
  get exports() {
    return exports55;
  },
  set exports(value) {
    exports55 = value;
  }
};
Object.defineProperty(exports55, "__esModule", { value: true });
exports55.createEstimateGas = exports55.createTransaction = void 0;
var ui_core_12 = $$cjs_default$$40(typeof dist_exports !== "undefined" ? dist_exports : {});
var noop = {
  estimateGas() {
    throw new Error("estimateGas not implemented.");
  },
  estimateNative() {
    throw new Error("estimateNative not implemented.");
  }
};
function createTransactionFromSignAndSubmit(signAndSubmit, options) {
  var _a, _b;
  const tx = {
    signAndSubmitTransaction: createSignAndSubmitTransaction(signAndSubmit),
    estimateGas: (_a = options.estimateGas) !== null && _a !== void 0 ? _a : noop.estimateGas,
    estimateNative: (_b = options.estimateNative) !== null && _b !== void 0 ? _b : noop.estimateNative
  };
  return tx;
}
function createSignAndSubmitTransaction(signAndSubmit) {
  return async function signAndSubmitTransaction(signer) {
    const response = await signAndSubmit(signer);
    return {
      txHash: response.hash,
      async wait() {
        const receipt = await response.wait();
        return {
          txHash: receipt.transactionHash
        };
      }
    };
  };
}
function createTransactionFromPopulatedTransaction(populatedTransaction, options) {
  var _a, _b, _c, _d, _e;
  const { provider } = options;
  async function singAndSubmit(signer) {
    return signer.sendTransaction(await populatedTransaction);
  }
  if (provider) {
    const getGasPrice = (_a = options.getGasPrice) !== null && _a !== void 0 ? _a : () => provider.getGasPrice().then((p) => p.toBigInt());
    const estimateGas = (_b = options.estimateGas) !== null && _b !== void 0 ? _b : createEstimateGas(populatedTransaction, provider);
    const estimateNative = (_c = options.estimateNative) !== null && _c !== void 0 ? _c : async function estimateNative2(signer) {
      var _a2;
      const chainId = (_a2 = options.chainId) !== null && _a2 !== void 0 ? _a2 : (0, ui_core_12.fromEvmChainId)((await provider.getNetwork()).chainId);
      const native = (0, ui_core_12.getNativeCurrency)(chainId);
      const [gasPrice, gasUsed] = await Promise.all([getGasPrice(), estimateGas(signer)]);
      const amount = gasPrice * gasUsed;
      return ui_core_12.CurrencyAmount.fromRawAmount(native, amount);
    };
    const tx2 = {
      signAndSubmitTransaction: createSignAndSubmitTransaction(singAndSubmit),
      estimateGas,
      estimateNative
    };
    return tx2;
  }
  const tx = {
    signAndSubmitTransaction: createSignAndSubmitTransaction(singAndSubmit),
    estimateGas: (_d = options.estimateGas) !== null && _d !== void 0 ? _d : noop.estimateGas,
    estimateNative: (_e = options.estimateNative) !== null && _e !== void 0 ? _e : noop.estimateNative
  };
  return tx;
}
function createTransaction(...args) {
  var _a;
  const options = (_a = args[1]) !== null && _a !== void 0 ? _a : {};
  if (typeof args[0] === "function") {
    console.warn(`createTransaction(signAndSubmit) is deprecated. Use createTransaction(populatedTransaction, {provider})`);
    const signAndSubmit = args[0];
    return createTransactionFromSignAndSubmit(signAndSubmit, options);
  }
  const populatedTransaction = args[0];
  return createTransactionFromPopulatedTransaction(populatedTransaction, options);
}
exports55.createTransaction = createTransaction;
function createEstimateGas(populatedTransaction, provider) {
  return async (signer) => provider.estimateGas(await populatedTransaction).then((r) => r.toBigInt());
}
exports55.createEstimateGas = createEstimateGas;
var __export041;
var __export123;
if (Object.isExtensible(module55.exports)) {
  __export041 = module55.exports["createEstimateGas"];
  __export123 = module55.exports["createTransaction"];
}

// ../ui-ethers/dist/gasEstimate.js
var gasEstimate_exports = {};
__export(gasEstimate_exports, {
  ERC20_APPROVE: () => __export042,
  ERC20_TRANSFER: () => __export124
});
function $$cjs_default$$41(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global41 !== "undefined" && global41 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global41 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global41 !== "undefined" && global41 || typeof globalThis !== "undefined" && globalThis || {};
var exports56 = {};
var module56 = {
  get exports() {
    return exports56;
  },
  set exports(value) {
    exports56 = value;
  }
};
Object.defineProperty(exports56, "__esModule", { value: true });
exports56.ERC20_APPROVE = exports56.ERC20_TRANSFER = void 0;
var lz_sdk_19 = $$cjs_default$$41(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
exports56.ERC20_TRANSFER = {
  [lz_sdk_19.ChainId.ETHEREUM]: 65e3,
  [lz_sdk_19.ChainId.RINKEBY]: 65e3,
  [lz_sdk_19.ChainId.GOERLI]: 65e3,
  [lz_sdk_19.ChainId.BSC]: 65e3,
  [lz_sdk_19.ChainId.BSC_TESTNET]: 65e3,
  [lz_sdk_19.ChainId.AVALANCHE]: 65e3,
  [lz_sdk_19.ChainId.FUJI]: 65e3,
  [lz_sdk_19.ChainId.POLYGON]: 65e3,
  [lz_sdk_19.ChainId.MUMBAI]: 65e3,
  [lz_sdk_19.ChainId.ARBITRUM]: 39e4,
  [lz_sdk_19.ChainId.ARBITRUM_RINKEBY]: 39e4,
  [lz_sdk_19.ChainId.ARBITRUM_GOERLI]: 39e4,
  [lz_sdk_19.ChainId.OPTIMISM]: 65e3,
  [lz_sdk_19.ChainId.OPTIMISM_KOVAN]: 65e3,
  [lz_sdk_19.ChainId.OPTIMISM_GOERLI]: 65e3,
  [lz_sdk_19.ChainId.FANTOM]: 65e3,
  [lz_sdk_19.ChainId.FANTOM_TESTNET]: 65e3,
  [lz_sdk_19.ChainId.METIS]: 65e3,
  [lz_sdk_19.ChainId.METIS_TESTNET]: 65e3
};
exports56.ERC20_APPROVE = {
  [lz_sdk_19.ChainId.ETHEREUM]: 47e3,
  [lz_sdk_19.ChainId.RINKEBY]: 47e3,
  [lz_sdk_19.ChainId.GOERLI]: 47e3,
  [lz_sdk_19.ChainId.BSC]: 47e3,
  [lz_sdk_19.ChainId.BSC_TESTNET]: 47e3,
  [lz_sdk_19.ChainId.AVALANCHE]: 47e3,
  [lz_sdk_19.ChainId.FUJI]: 47e3,
  [lz_sdk_19.ChainId.POLYGON]: 47e3,
  [lz_sdk_19.ChainId.MUMBAI]: 47e3,
  [lz_sdk_19.ChainId.ARBITRUM]: 282e3,
  [lz_sdk_19.ChainId.ARBITRUM_RINKEBY]: 282e3,
  [lz_sdk_19.ChainId.ARBITRUM_GOERLI]: 282e3,
  [lz_sdk_19.ChainId.OPTIMISM]: 47e3,
  [lz_sdk_19.ChainId.OPTIMISM_KOVAN]: 47e3,
  [lz_sdk_19.ChainId.OPTIMISM_GOERLI]: 47e3,
  [lz_sdk_19.ChainId.FANTOM]: 47e3,
  [lz_sdk_19.ChainId.FANTOM_TESTNET]: 47e3,
  [lz_sdk_19.ChainId.METIS]: 47e3,
  [lz_sdk_19.ChainId.METIS_TESTNET]: 47e3
};
var __export042;
var __export124;
if (Object.isExtensible(module56.exports)) {
  __export042 = module56.exports["ERC20_APPROVE"];
  __export124 = module56.exports["ERC20_TRANSFER"];
}

// ../ui-ethers/dist/wallet.js
var wallet_exports = {};
__export(wallet_exports, {
  ProviderRpcErrorCode: () => __export39,
  addEthereumChain: () => __export46,
  assertChainAndWallet: () => __export043,
  assertChainId: () => __export214,
  assertWallet: () => __export125,
  requestAccounts: () => __export73,
  selectAccounts: () => __export63,
  switchEthereumChain: () => __export53
});
function $$cjs_default$$42(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global42 !== "undefined" && global42 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global42 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global42 !== "undefined" && global42 || typeof globalThis !== "undefined" && globalThis || {};
var exports57 = {};
var module57 = {
  get exports() {
    return exports57;
  },
  set exports(value) {
    exports57 = value;
  }
};
var __importDefault9 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports57, "__esModule", { value: true });
exports57.assertChainAndWallet = exports57.assertWallet = exports57.assertChainId = exports57.ProviderRpcErrorCode = exports57.addEthereumChain = exports57.switchEthereumChain = exports57.selectAccounts = exports57.requestAccounts = void 0;
var ui_core_13 = $$cjs_default$$42(typeof dist_exports !== "undefined" ? dist_exports : {});
var assert_15 = __importDefault9($$cjs_default$$42(typeof assert6 !== "undefined" ? assert6 : {}));
var ethers_18 = $$cjs_default$$42(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var rpcNodes_12 = $$cjs_default$$42(typeof rpcNodes_exports !== "undefined" ? rpcNodes_exports : {});
function requestAccounts(provider) {
  const args = { method: "eth_requestAccounts" };
  return provider.send(args.method, []);
}
exports57.requestAccounts = requestAccounts;
function selectAccounts(provider) {
  const args = { method: "eth_selectAccounts" };
  return provider.send(args.method, []);
}
exports57.selectAccounts = selectAccounts;
function switchEthereumChain(chainId, provider) {
  const args = {
    method: "wallet_switchEthereumChain",
    params: [{ chainId: toHexEvmChainId(chainId) }]
  };
  return provider.send(args.method, args.params);
}
exports57.switchEthereumChain = switchEthereumChain;
function addEthereumChain(chainId, provider) {
  const network = (0, ui_core_13.getNetwork)(chainId);
  const rpcUrls = (0, rpcNodes_12.getOfficialRpcUrls)(network.chainId);
  const addChainParams = {
    chainId: toHexEvmChainId(chainId),
    chainName: network.name,
    nativeCurrency: {
      name: network.nativeCurrency.name,
      symbol: network.nativeCurrency.symbol,
      decimals: network.nativeCurrency.decimals
    },
    rpcUrls
  };
  const args = {
    method: "wallet_addEthereumChain",
    params: [addChainParams]
  };
  return provider.send(args.method, args.params);
}
exports57.addEthereumChain = addEthereumChain;
function toHexEvmChainId(chainId) {
  return "0x" + (0, ui_core_13.toEvmChainId)(chainId).toString(16);
}
(function(ProviderRpcErrorCode2) {
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["ACCOUNT_ACCESS_REJECTED"] = 4001] = "ACCOUNT_ACCESS_REJECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["ACCOUNT_ACCESS_ALREADY_REQUESTED"] = -32002] = "ACCOUNT_ACCESS_ALREADY_REQUESTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["DISCONNECTED"] = 4900] = "DISCONNECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["CHAIN_DISCONNECTED"] = 4901] = "CHAIN_DISCONNECTED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["CHAIN_NOT_ADDED"] = 4902] = "CHAIN_NOT_ADDED";
  ProviderRpcErrorCode2[ProviderRpcErrorCode2["DOES_NOT_EXIST"] = -32601] = "DOES_NOT_EXIST";
})(exports57.ProviderRpcErrorCode || (exports57.ProviderRpcErrorCode = {}));
async function assertChainId(singer, chainId) {
  const evmChainId = await singer.getChainId();
  (0, assert_15.default)((0, ui_core_13.fromEvmChainId)(evmChainId) === chainId, "ChainId");
}
exports57.assertChainId = assertChainId;
async function assertWallet(signer, walletAddress) {
  const actualAddress = await signer.getAddress();
  (0, assert_15.default)(ethers_18.utils.getAddress(actualAddress) === ethers_18.utils.getAddress(walletAddress), "address");
}
exports57.assertWallet = assertWallet;
async function assertChainAndWallet(signer, chainId, walletAddress) {
  await Promise.all([assertChainId(signer, chainId), assertWallet(signer, walletAddress)]);
}
exports57.assertChainAndWallet = assertChainAndWallet;
var __export043;
var __export125;
var __export214;
var __export39;
var __export46;
var __export53;
var __export63;
var __export73;
if (Object.isExtensible(module57.exports)) {
  __export043 = module57.exports["assertChainAndWallet"];
  __export125 = module57.exports["assertWallet"];
  __export214 = module57.exports["assertChainId"];
  __export39 = module57.exports["ProviderRpcErrorCode"];
  __export46 = module57.exports["addEthereumChain"];
  __export53 = module57.exports["switchEthereumChain"];
  __export63 = module57.exports["selectAccounts"];
  __export73 = module57.exports["requestAccounts"];
}

// ../ui-ethers/dist/constants.js
var constants_exports2 = {};
__export(constants_exports2, {
  ONE_ADDRESS: () => __export044,
  ZERO_ADDRESS: () => __export126
});
var exports58 = {};
var module58 = {
  get exports() {
    return exports58;
  },
  set exports(value) {
    exports58 = value;
  }
};
Object.defineProperty(exports58, "__esModule", { value: true });
exports58.ONE_ADDRESS = exports58.ZERO_ADDRESS = void 0;
exports58.ZERO_ADDRESS = "0x" + "0".repeat(40);
exports58.ONE_ADDRESS = "0x" + "0".repeat(39) + "1";
var __export044;
var __export126;
if (Object.isExtensible(module58.exports)) {
  __export044 = module58.exports["ONE_ADDRESS"];
  __export126 = module58.exports["ZERO_ADDRESS"];
}

// ../ui-ethers/dist/index.js
function $$cjs_default$$43(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global43 !== "undefined" && global43 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global43 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global43 !== "undefined" && global43 || typeof globalThis !== "undefined" && globalThis || {};
var exports59 = {};
var module59 = {
  get exports() {
    return exports59;
  },
  set exports(value) {
    exports59 = value;
  }
};
var __createBinding5 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __exportStar5 = function(m, exports88) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports88, p))
      __createBinding5(exports88, m, p);
};
Object.defineProperty(exports59, "__esModule", { value: true });
__exportStar5($$cjs_default$$43(typeof constants_exports2 !== "undefined" ? constants_exports2 : {}), exports59);
__exportStar5($$cjs_default$$43(typeof wallet_exports !== "undefined" ? wallet_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof rpcNodes_exports !== "undefined" ? rpcNodes_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof randomize_exports !== "undefined" ? randomize_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof gasEstimate_exports !== "undefined" ? gasEstimate_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof createTransaction_exports !== "undefined" ? createTransaction_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof providerFactory_exports !== "undefined" ? providerFactory_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof createTransaction_exports !== "undefined" ? createTransaction_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof FailoverProvider_exports !== "undefined" ? FailoverProvider_exports : {}), exports59);
__exportStar5($$cjs_default$$43(typeof StaticJsonBatchProvider_exports !== "undefined" ? StaticJsonBatchProvider_exports : {}), exports59);
var dist_default2 = module59.exports != null && typeof module59.exports === "object" && "default" in module59.exports ? module59.exports.default : module59.exports;
var BalanceStoreModel = types.model({
  balances: types.map(types.frozen()),
  providers: types.array(types.frozen())
}).views((store) => {
  return {
    pickBalance(currency, account) {
      const key = currencyAccountKey(currency, account);
      return store.balances.get(key);
    }
  };
}).actions((store) => {
  return {
    addProvider(provider) {
      store.providers.push(provider);
    },
    setProviders(providers) {
      store.providers.replace(providers);
    },
    updateBalance: flow(function* (currency, account) {
      const key = currencyAccountKey(currency, account);
      for (const provider of store.providers) {
        if (provider.supports(currency)) {
          const newBalance = yield provider.getBalance(currency, account);
          const oldBalance = store.balances.get(key);
          if (oldBalance === null || oldBalance === void 0 ? void 0 : oldBalance.equalTo(newBalance))
            return;
          store.balances.set(key, newBalance);
          return;
        }
      }
      throw new Error(`No provider for ${currency.symbol} on ${__export10(currency.chainId).name}`);
    })
  };
});
var currencyKey = (c) => {
  var _a;
  return [c.chainId, c.symbol, (_a = c.address) !== null && _a !== void 0 ? _a : "0xNATIVE"].join(":");
};
var currencyAccountKey = (currency, account) => currencyKey(currency) + ":" + account;
var balanceStore = BalanceStoreModel.create();

// ../ui-mobx/dist/utils.js
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function getActiveAccount() {
  var _a;
  return (_a = walletStore.evm) === null || _a === void 0 ? void 0 : _a.account;
}
function getBalance(currency, account) {
  if (!account || !currency)
    return void 0;
  return balanceStore.pickBalance(currency, account);
}
function getWalletBalance(currency) {
  if (!currency)
    return void 0;
  const wallets = walletStore.wallets;
  for (const wallet of wallets) {
    if (wallet.supports(currency.chainId)) {
      return getBalance(currency, wallet.account);
    }
  }
  return void 0;
}
function approve(amount, spender, owner = getActiveAccount()) {
  return __awaiter3(this, void 0, void 0, function* () {
    if (!owner)
      throw new Error(`No active wallet`);
    yield walletStore.switchChain(amount.currency.chainId);
    return approveStore.approve(amount, owner, spender);
  });
}
function approveMax(currency, spender, owner = getActiveAccount()) {
  const amount = __export36.fromRawAmount(currency, MAX_APPROVE);
  return approve(amount, spender, owner);
}
function isApproved(amount, spender, owner = getActiveAccount()) {
  if (!owner || !spender)
    return void 0;
  return approveStore.isApproved(amount, owner, spender);
}
function switchChain(chainId) {
  return __awaiter3(this, void 0, void 0, function* () {
    return walletStore.switchChain(chainId);
  });
}
var MAX_APPROVE = "0x" + "f".repeat(64);

// ../ui-mobx/dist/approveStore.js
var ApproveStoreModel = types.model({
  isSigning: false,
  isMining: false,
  isApproving: false,
  allowances: types.map(types.frozen()),
  api: types.frozen()
}).actions((store) => {
  const updateAllowance = flow(function* (token, owner, spender) {
    const key = allowanceKey(token, owner, spender);
    const erc20 = store.api.forToken(token);
    const amount = yield erc20.allowance(owner, spender);
    store.allowances.set(key, amount);
    return amount;
  });
  const actions = {
    approve: flow(function* (amount, owner, spender) {
      try {
        yield switchChain(amount.currency.chainId);
        const { evm: evm2 } = walletStore;
        assert6__default(evm2 === null || evm2 === void 0 ? void 0 : evm2.signer, "signer");
        const erc20 = store.api.forToken(amount.currency);
        store.isSigning = true;
        const tx = yield erc20.approve(amount, spender);
        const result = yield tx.signAndSubmitTransaction(evm2.signer);
        store.isSigning = false;
        store.isMining = true;
        yield result.wait();
        store.isMining = false;
        yield updateAllowance(amount.currency, owner, spender);
      } finally {
        store.isApproving = false;
        store.isMining = false;
        store.isSigning = false;
      }
    }),
    setApi(api) {
      store.api = api;
    },
    updateAllowance
  };
  return actions;
}).views((store) => {
  const views = {
    pickAllowance(token, owner, spender) {
      const key = allowanceKey(token, owner, spender);
      return store.allowances.get(key);
    },
    isApproved(amount, owner, spender) {
      const allowance = views.pickAllowance(amount.currency, owner, spender);
      if (!allowance)
        return void 0;
      return !allowance.lessThan(amount);
    }
  };
  return views;
});
var currencyKey2 = (c) => [c.chainId, c.symbol].join(":");
var allowanceKey = (c, owner, spender) => currencyKey2(c) + ":" + spender + ":" + owner;
var approveStore = ApproveStoreModel.create();
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var FiatSymbol;
(function(FiatSymbol2) {
  FiatSymbol2["USD"] = "USD";
  FiatSymbol2["EUR"] = "EUR";
})(FiatSymbol || (FiatSymbol = {}));
var DEFAULT_FIAT_SYMBOL = FiatSymbol.USD;
var FiatStoreModel = types.model({
  items: types.map(types.frozen())
}).actions((store) => {
  const actions = {
    afterCreate() {
      if (typeof window === "undefined")
        return;
      actions.fetch();
    },
    fetch: flow(function* () {
      try {
        const symbols = Object.keys(FiatSymbol);
        const items = yield getFiatQuotas(symbols);
        store.items.replace(items);
      } catch (e) {
        console.error(e);
        throw e;
      }
    })
  };
  return actions;
}).views((store) => {
  const views = {
    pickFiatPrice(currency, fiatSymbol = DEFAULT_FIAT_SYMBOL) {
      const quotas = store.items.get(fiatSymbol);
      if (!quotas)
        return;
      const price = quotas[toKnownSymbol(currency.symbol)];
      if (!price)
        return;
      return {
        value: price,
        currency: fiatSymbol
      };
    },
    toFiatAmount(amount, fiatSymbol = DEFAULT_FIAT_SYMBOL) {
      if (amount) {
        if (amount.equalTo(0)) {
          return { value: 0, currency: fiatSymbol };
        }
        const price = views.pickFiatPrice(amount.currency, fiatSymbol);
        if (!price)
          return void 0;
        const value = parseFloat(amount.toExact()) * price.value;
        return {
          value,
          currency: fiatSymbol
        };
      }
      return void 0;
    },
    sum(amounts, fiatSymbol = DEFAULT_FIAT_SYMBOL) {
      if (amounts) {
        let result = 0;
        for (let i = 0; i < amounts.length; i++) {
          const amount = views.toFiatAmount(amounts[i], fiatSymbol);
          if (!amount) {
            return void 0;
          }
          result += amount.value;
        }
        return {
          value: result,
          currency: fiatSymbol
        };
      }
      return void 0;
    }
  };
  return views;
});
function toKnownSymbol(symbol) {
  symbol = symbol.toUpperCase();
  if (symbol === "WETH")
    return "ETH";
  if (symbol === "BTC.B")
    return "BTC";
  return symbol;
}
var getFiatQuotas = (fiatSymbols) => __awaiter4(void 0, void 0, void 0, function* () {
  const { data } = yield __export034.get("https://stargate.finance/.netlify/functions/fiat", {
    params: {
      symbol: fiatSymbols.join(",")
    }
  });
  return data;
});
var fiatStore = FiatStoreModel.create();
types.custom({
  name: "CurrencyAmount",
  fromSnapshot({ currency, rawAmount }) {
    return __export36.fromRawAmount(currency.address ? new __export010(currency.chainId, currency.address, currency.decimals, currency.symbol, currency.name) : new __export011(currency.chainId, currency.decimals, currency.symbol, currency.name), rawAmount);
  },
  toSnapshot(value) {
    const currency = Object.assign({}, value.currency);
    return {
      currency,
      rawAmount: value.quotient.toString()
    };
  },
  isTargetType(v) {
    return v instanceof __export36;
  },
  getValidationMessage(v) {
    if (!(v instanceof __export36)) {
      return "Invalid moment object";
    }
    return "";
  }
});
types.custom({
  name: "Date",
  fromSnapshot(isoString) {
    return new Date(isoString);
  },
  toSnapshot(value) {
    return value.toISOString();
  },
  isTargetType(v) {
    return v instanceof Date;
  },
  getValidationMessage(v) {
    if (!(v instanceof Date) && !(typeof v === "string")) {
      return "Invalid date object";
    }
    return "";
  }
});
function liveTimeStamp() {
  return Math.floor(now() / 1e3);
}
function timeStamp2(nowMs = Date.now()) {
  return Math.floor(nowMs / 1e3);
}

// ../ui-mobx/dist/transactionStore.js
var TransactionModel = types.model({
  type: types.frozen(),
  input: types.maybeNull(types.frozen()),
  chainId: types.frozen(),
  expectedDate: types.maybe(types.number),
  submittedDate: types.optional(types.number, () => timeStamp2()),
  error: types.maybeNull(types.frozen()),
  txHash: types.maybe(types.string),
  confirmation: types.maybe(types.model({
    txHash: types.maybe(types.string),
    chainId: types.frozen()
  })),
  completed: types.optional(types.boolean, false)
}).actions(function(transaction) {
  const actions = {
    update(changes) {
      Object.assign(transaction, changes);
    }
  };
  return actions;
});
var TransactionStoreModel = types.model({
  transactions: types.optional(types.array(TransactionModel), () => [])
}).views((store) => {
  const views = {
    get isPending() {
      return this.pendingTransactions.length > 0;
    },
    get hasPending() {
      return views.isPending;
    },
    get recentTransactions() {
      return store.transactions.slice().reverse();
    },
    get pendingTransactions() {
      return views.recentTransactions.filter((transaction) => !transaction.completed && !transaction.error);
    }
  };
  return views;
}).actions((state) => {
  const create = (snapshot) => {
    const model = TransactionModel.create(snapshot);
    actions.addTransaction(model);
    return model;
  };
  const actions = {
    addTransaction(transaction) {
      state.transactions.push(transaction);
    },
    clear() {
      state.transactions.clear();
    },
    create
  };
  return actions;
});
var transactionStore = TransactionStoreModel.create();
var RelayerStoreModel = types.model({
  dstPriceItems: types.map(types.frozen()),
  dstConfigItems: types.map(types.frozen()),
  providers: types.array(types.frozen())
}).views((store) => {
  const views = {
    pickDstPrice: (srcChainId, dstChainId) => {
      return store.dstPriceItems.get(toKey(srcChainId, dstChainId));
    },
    pickDstConfig: (srcChainId, dstChainId) => {
      return store.dstConfigItems.get(toKey(srcChainId, dstChainId));
    },
    pickMaxDstNativeAmount: (srcChainId, dstChainId) => {
      var _a;
      return (_a = views.pickDstConfig(srcChainId, dstChainId)) === null || _a === void 0 ? void 0 : _a.dstNativeAmtCap;
    },
    pickProvider: (srcChainId) => {
      return store.providers.find((p) => p.isApplicable(srcChainId));
    }
  };
  return views;
}).actions((store) => {
  const actions = {
    addProvider(provider) {
      store.providers.push(provider);
    },
    setProviders(providers) {
      store.providers.replace(providers);
    },
    updateDstPrice: flow(function* (srcChainId, dstChainId) {
      const provider = store.pickProvider(srcChainId);
      if (!provider)
        throw new Error(`No provider found for chainId: ${srcChainId}`);
      const price = yield provider.dstPriceLookup(srcChainId, dstChainId);
      store.dstPriceItems.set(toKey(srcChainId, dstChainId), price);
    }),
    updateDstConfig: flow(function* (srcChainId, dstChainId) {
      const provider = store.pickProvider(srcChainId);
      if (!provider)
        return void 0;
      const config = yield provider.dstConfigLookup(srcChainId, dstChainId);
      store.dstConfigItems.set(toKey(srcChainId, dstChainId), config);
    }),
    updateAll: (chainIds) => {
      const paths = compact(chainIds.flatMap((srcChainId) => chainIds.map((dstChainId) => {
        if (srcChainId === dstChainId)
          return void 0;
        return { srcChainId, dstChainId };
      })));
      return Promise.allSettled(paths.map((path) => {
        actions.updateDstPrice(path.srcChainId, path.dstChainId);
        actions.updateDstConfig(path.srcChainId, path.dstChainId);
      }));
    }
  };
  return actions;
});
function toKey(srcChainId, dstChainId) {
  return srcChainId + ":" + dstChainId;
}
var relayerStore = RelayerStoreModel.create();
var ResourceStoreModel = types.model({
  isSigning: false,
  isMining: false,
  isRegistering: false,
  resources: types.map(types.boolean),
  providers: types.array(types.frozen())
}).views((store) => {
  function isRegistered(resource, address) {
    if (address === void 0) {
      const { wallets } = walletStore;
      return wallets.some((wallet) => isRegistered(resource, wallet.account));
    }
    const provider = views.getProvider(resource);
    if (!provider)
      return void 0;
    const type = provider.getType(resource);
    const key = toKey2({ address, type });
    return store.resources.get(key);
  }
  const views = {
    isRegistered,
    getProvider(resource) {
      return store.providers.find((p) => p.supports(resource));
    }
  };
  return views;
}).actions((store) => {
  const register = flow(function* (resource) {
    try {
      const wallet = __export06(resource.chainId) ? walletStore.aptos : __export14(resource.chainId) ? walletStore.evm : void 0;
      assert6__default(wallet === null || wallet === void 0 ? void 0 : wallet.signer);
      const provider = store.getProvider(resource);
      assert6__default(provider);
      store.isRegistering = true;
      const tx = yield provider.register(resource);
      store.isSigning = true;
      const result = yield tx.signAndSubmitTransaction(wallet.signer);
      store.isSigning = false;
      store.isMining = true;
      yield result.wait();
      store.isMining = false;
      yield actions.update(resource, wallet.account);
      return result;
    } finally {
      store.isRegistering = false;
      store.isSigning = false;
      store.isMining = false;
    }
  });
  const update = flow(function* (resource, address) {
    const provider = store.getProvider(resource);
    assert6__default(provider);
    const type = provider.getType(resource);
    const key = toKey2({ address, type });
    const isRegistered = yield provider.isRegistered(resource, address);
    store.resources.set(key, isRegistered);
  });
  const actions = {
    update,
    register,
    setProviders(providers) {
      store.providers.replace(providers);
    },
    addProvider(provider) {
      store.providers.push(provider);
    }
  };
  return actions;
});
function toKey2({ address, type }) {
  return `${address}:${type}`;
}
var resourceStore = ResourceStoreModel.create({});
var networkStore = types.model({
  enabledNetworks: types.array(types.frozen())
}).views((store) => {
  const views = {
    get enabledChains() {
      return store.enabledNetworks.map((i) => i.chainId);
    }
  };
  return views;
}).actions((store) => ({
  setEnabledNetworks(enabledNetworks2) {
    store.enabledNetworks.replace(enabledNetworks2.map((network) => {
      const chainId = typeof network === "number" ? network : network.chainId;
      return __export10(chainId);
    }));
  }
})).create({ enabledNetworks: __export122 });
var enabledNetworks = networkStore.enabledNetworks;
if (typeof window !== "undefined") {
  Object.assign(window, { enabledNetworks, networkStore });
}
var AirdropStoreModel = types.model({
  defaultAmount: types.map(types.frozen()),
  providers: types.array(types.frozen())
}).views((store) => ({
  getDefault(dstChainId) {
    return store.defaultAmount.get(String(dstChainId));
  }
})).actions((store) => ({
  addProvider(provider) {
    store.providers.push(provider);
  },
  setProviders(providers) {
    store.providers.replace(providers);
  }
})).actions((store) => {
  let globalNonce = 0;
  const updateDefaultAmount = flow(function* (dstChainId) {
    const localNonce = ++globalNonce;
    const provider = store.providers.find((p) => p.supports(dstChainId));
    assert6__default(provider);
    const amount = yield provider.estimateDefaultAirdrop(dstChainId);
    if (globalNonce !== localNonce)
      return;
    store.defaultAmount.set(String(dstChainId), amount);
  });
  return { updateDefaultAmount };
});
var airdropStore = AirdropStoreModel.create({});
function $$cjs_default$$44(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global44 !== "undefined" && global44 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global44 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global44 !== "undefined" && global44 || typeof globalThis !== "undefined" && globalThis || {};
var exports60 = {};
var module60 = {
  get exports() {
    return exports60;
  },
  set exports(value) {
    exports60 = value;
  }
};
var __importDefault10 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports60, "__esModule", { value: true });
exports60.getMessagesBySrcTxHash = exports60.createClient = exports60.MessageStatus = void 0;
var axios_12 = __importDefault10($$cjs_default$$44(typeof $cjs$axios !== "undefined" ? $cjs$axios : {}));
(function(MessageStatus2) {
  MessageStatus2["INFLIGHT"] = "INFLIGHT";
  MessageStatus2["DELIVERED"] = "DELIVERED";
  MessageStatus2["FAILED"] = "FAILED";
})(exports60.MessageStatus || (exports60.MessageStatus = {}));
var URLS = {
  testnet: "https://api-testnet.layerzero-scan.com",
  mainnet: "https://api-mainnet.layerzero-scan.com",
  sandbox: "https://api-sandbox.layerzero-scan.com"
};
var createClient = (env, options) => {
  const url = URLS[env];
  if (!url)
    throw new Error(`No endpoint for env ${env}`);
  const client = axios_12.default.create({
    baseURL: url
  });
  return {
    async getMessagesBySrcTxHash(srcTxHash) {
      if (!srcTxHash)
        throw new Error("srcTxHash must be provided");
      const { data } = await client.get(`/tx/${srcTxHash}`);
      return data;
    }
  };
};
exports60.createClient = createClient;
function getMessagesBySrcTxHash(srcChainId, srcTxHash) {
  const env = srcChainId < 1e4 ? "mainnet" : srcChainId < 2e4 ? "testnet" : "sandbox";
  return (0, exports60.createClient)(env).getMessagesBySrcTxHash(srcTxHash);
}
exports60.getMessagesBySrcTxHash = getMessagesBySrcTxHash;
var __export127;
var __export215;
if (Object.isExtensible(module60.exports)) {
  module60.exports["getMessagesBySrcTxHash"];
  __export127 = module60.exports["createClient"];
  __export215 = module60.exports["MessageStatus"];
}

// ../ui-mobx/dist/utils/waitForMessageReceived.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function waitForMessageReceived(srcChainId, srcTxHash, pollInterval = 1e3) {
  return __awaiter5(this, void 0, void 0, function* () {
    const env = srcChainId < 1e4 ? "mainnet" : srcChainId < 2e4 ? "testnet" : "sandbox";
    const client = __export127(env);
    while (true) {
      try {
        const { messages } = yield client.getMessagesBySrcTxHash(srcTxHash);
        const message = messages[0];
        if (messages.length > 1) {
          return Promise.reject(new Error(`More than one message`));
        } else if ((message === null || message === void 0 ? void 0 : message.status) === __export215.FAILED) {
          return Promise.reject(new Error(`Message failed ${message.dstTxError}`));
        } else if ((message === null || message === void 0 ? void 0 : message.status) === __export215.DELIVERED) {
          return message;
        }
      } catch (_a) {
      }
      yield sleep(pollInterval);
    }
  });
}
var sleep = (ms = 1e3) => new Promise((resolve) => setTimeout(resolve, ms));

// ../ui-mobx/dist/utils/recordTransactions.js
function tryParse(unknown) {
  try {
    if (unknown !== null && typeof unknown === "object") {
      if (unknown["$type"] === "BigInt") {
        const value = BigInt(unknown.value);
        return value;
      }
      if (unknown["$type"] === "Token") {
        const token = unknown;
        return new __export010(token.chainId, token.address, token.decimals, token.symbol, token.name);
      }
      if (unknown["$type"] === "Coin") {
        const coin = unknown;
        return new __export011(coin.chainId, coin.decimals, coin.symbol, coin.name);
      }
      if (unknown["$type"] === "CurrencyAmount") {
        const amount = unknown;
        const currency = tryParse(amount.currency);
        return __export024(currency, amount.value);
      }
    }
  } catch (e) {
    console.log("tryParse", e);
  }
}
function trySerialize(unknown) {
  try {
    if (typeof unknown === "bigint") {
      return { $type: "BigInt", value: unknown.toString() };
    }
    if (unknown !== null && typeof unknown === "object") {
      if (unknown instanceof __export011) {
        return Object.assign({ $type: "Coin" }, unknown);
      }
      if (unknown instanceof __export010) {
        return Object.assign({ $type: "Token" }, unknown);
      }
      if (unknown instanceof __export36) {
        return {
          $type: "CurrencyAmount",
          currency: trySerialize(unknown.currency),
          value: unknown.toExact()
        };
      }
    }
  } catch (e) {
    console.error("trySerialize", e);
  }
}
function serialize(obj) {
  return cloneDeepWith(obj, trySerialize);
}
function parse(obj) {
  return cloneDeepWith(obj, tryParse);
}
function saveSnapshot() {
  if (typeof localStorage === "undefined")
    return;
  try {
    const snapshot = getSnapshot(transactionStore.transactions);
    localStorage.setItem("transactions", JSON.stringify(serialize(snapshot)));
  } catch (e) {
    console.error(e);
  }
}
function restoreSnapshot() {
  if (typeof localStorage === "undefined")
    return;
  try {
    const snapshot = JSON.parse(localStorage.getItem("transactions"));
    if (snapshot === null || snapshot === void 0 ? void 0 : snapshot.length) {
      applySnapshot(transactionStore.transactions, parse(snapshot));
      transactionStore.transactions.filter((tx) => isCrossChainTx(tx) && !tx.completed && !tx.error).forEach((tx) => {
        if (!tx.txHash)
          return;
        waitForMessageReceived(tx.chainId, tx.txHash, 5e3).then((message) => {
          tx.update({
            completed: true,
            confirmation: {
              chainId: message.dstChainId,
              txHash: message.dstTxHash
            }
          });
        }, (error) => {
          tx.update({ error });
        });
      });
    }
  } catch (e) {
    console.error(e);
  }
}
function isCrossChainTx(tx) {
  const input = tx.input;
  if (input === null || input === void 0 ? void 0 : input.dstChainId)
    return true;
  return false;
}
function recordTransactions() {
  if (typeof window === "undefined")
    return;
  restoreSnapshot();
  onSnapshot(transactionStore.transactions, () => {
    saveSnapshot();
  });
}
function parseWalletErrorTitle(e) {
  const title = (e === null || e === void 0 ? void 0 : e.code) === 4001 ? "Transaction rejected" : "Transaction failed";
  return title;
}
function parseWalletErrorMessage(e) {
  const any = e;
  const code = any === null || any === void 0 ? void 0 : any.code;
  if (code && typeof code === "string") {
    if (code === "INSUFFICIENT_FUNDS") {
      return ErrorMessage.INSUFFICIENT_FUNDS;
    }
  }
  const reason = any === null || any === void 0 ? void 0 : any.reason;
  if (reason && typeof reason === "string") {
    return reason;
  }
  const message = any === null || any === void 0 ? void 0 : any.message;
  if (message && typeof message === "string") {
    if (typeof message === "string") {
      if (message.includes("INSUFFICIENT_BALANCE_FOR_TRANSACTION_FEE")) {
        return ErrorMessage.INSUFFICIENT_FUNDS;
      }
      if (message.includes("RejectedByUser")) {
        return ErrorMessage.REJECTED_BY_USER;
      }
    }
    return message;
  }
  const error = String(e !== null && e !== void 0 ? e : "Unknown error");
  return error;
}
var ErrorMessage;
(function(ErrorMessage2) {
  ErrorMessage2["INSUFFICIENT_FUNDS"] = "Insufficient funds for gas. Make sure you have enough gas.";
  ErrorMessage2["REJECTED_BY_USER"] = "Transaction was rejected.";
})(ErrorMessage || (ErrorMessage = {}));
function parseWalletError(e) {
  const title = parseWalletErrorTitle(e);
  const message = parseWalletErrorMessage(e);
  return { title, message };
}
function getWalletExtension(walletType) {
  if (typeof window === "undefined")
    return;
  const url = __export04(walletType);
  assert6__default(url, "url");
  window.open(url, "_blank", "noopener,noreferrer");
}

// ../ui-mobx/dist/utils/errorUtils.js
var handledErrors = /* @__PURE__ */ new WeakSet();
function isHandled(e) {
  if (e && typeof e === "object") {
    return handledErrors.has(e);
  }
  return void 0;
}
function markAsHandled(e) {
  if (e && typeof e === "object") {
    handledErrors.add(e);
  }
}
function displayError(e, displayErrorHandler) {
  if (isHandled(e))
    return;
  markAsHandled(e);
  displayErrorHandler();
}

// ../ui-mobx/dist/utils/txProgressUtils.js
function getTxProgress(tx) {
  if (!tx.submittedDate || !tx.expectedDate)
    return 0;
  if (tx.error)
    return 0;
  const now2 = liveTimeStamp();
  const elapsed = Math.max(now2 - tx.submittedDate, 0);
  const duration = Math.max(tx.expectedDate - tx.submittedDate, 0);
  const progress2 = elapsed / duration;
  if (!isFinite(progress2))
    return 0;
  return Math.min(progress2, 1);
}
function getTxRemainingTime(tx) {
  if (!tx.expectedDate)
    return void 0;
  const now2 = liveTimeStamp();
  const remaining = tx.expectedDate - now2;
  if (!Number.isFinite(remaining))
    return void 0;
  return Math.max(remaining, 0);
}

// ../ui-mobx/dist/analytics/reportEvent.js
function reportEvent(eventName, args) {
  if (typeof window === "undefined")
    return;
  try {
    const { dataLayer } = window;
    if (typeof dataLayer === "undefined")
      return;
    dataLayer.push(Object.assign({ event: eventName, timeStamp: __export111() }, args));
  } catch (e) {
    console.error(e);
  }
}

// ../ui-mobx/dist/analytics/reportOftTransfer.js
function reportOftTransfer(input, srcWalletType, dstWalletType) {
  var _a, _b;
  reportEvent("transfer", {
    srcWalletType,
    dstWalletType,
    srcChainId: input.srcChainId,
    dstChainId: input.dstChainId,
    "srcCurrency.symbol": input.srcCurrency.symbol,
    "dstCurrency.symbol": input.dstCurrency.symbol,
    amount: input.amount.toFixed(2),
    nativeFee: input.fee.nativeFee.toExact(),
    "adapterParams.dstNativeAmount": (_b = (_a = input.adapterParams.dstNativeAmount) === null || _a === void 0 ? void 0 : _a.toExact()) !== null && _b !== void 0 ? _b : "0"
  });
}

// ../../node_modules/promise.obj/index.js
var exports61 = {};
var module61 = {
  get exports() {
    return exports61;
  },
  set exports(value) {
    exports61 = value;
  }
};
module61.exports = function pobj(o) {
  o = o || {};
  var ks = Object.keys(o);
  var result = {};
  var ps = ks.map(function(key) {
    var value = o[key];
    return Promise.resolve(value).then(function(val) {
      result[key] = val;
    });
  });
  return Promise.all(ps).then(function() {
    return result;
  });
};
var promise_default = module61.exports;

// ../ui-adapter-wagmi/dist/createWagmiProvider.js
var __awaiter6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var ConnectAdapter = (_a) => {
  var { wagmiAdapter, wagmiClient } = _a, props = __rest2(_a, ["wagmiAdapter", "wagmiClient"]);
  const onCancelConnectRef = useRef();
  useEffect(() => {
    if (!props.connectModalOpen) {
      const onCancelConnect = onCancelConnectRef.current;
      setTimeout(() => {
        onCancelConnect === null || onCancelConnect === void 0 ? void 0 : onCancelConnect();
      }, 100);
    }
  }, [props.connectModalOpen]);
  wagmiAdapter.connect = () => {
    return new Promise((resolve, reject) => {
      var _a2;
      (_a2 = onCancelConnectRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(onCancelConnectRef);
      onCancelConnectRef.current = () => {
        reject();
        unsubscribe();
      };
      const unsubscribe = wagmiClient.subscribe((state) => state.status, (status, prevStatus) => {
        if (status === "connected") {
          waitFor(() => {
            var _a3;
            return Boolean(((_a3 = walletStore.evm) === null || _a3 === void 0 ? void 0 : _a3.account) && walletStore.evm.signer);
          }).then(resolve, reject).finally(unsubscribe);
        }
      });
      props.openConnectModal();
    });
  };
  const { switchNetworkAsync } = useSwitchNetwork();
  wagmiAdapter.switchChain = (chainId) => __awaiter6(void 0, void 0, void 0, function* () {
    if (!switchNetworkAsync)
      throw new Error("Wallet does not support `switchChain`");
    const evmChainId = __export27(chainId);
    yield switchNetworkAsync === null || switchNetworkAsync === void 0 ? void 0 : switchNetworkAsync(evmChainId);
    yield waitFor(() => {
      var _a2;
      return ((_a2 = walletStore.evm) === null || _a2 === void 0 ? void 0 : _a2.chainId) === chainId;
    });
  });
  wagmiAdapter.changeAccount = () => __awaiter6(void 0, void 0, void 0, function* () {
    props.openAccountModal();
  });
  wagmiAdapter.disconnect = disconnect;
  return null;
};
function waitFor(fn, timeout = 1e3) {
  return new Promise((resolve, reject) => {
    const id = setInterval(() => {
      if (fn()) {
        clear();
        resolve();
      }
    }, 100);
    const clear = () => clearInterval(id);
    setTimeout(() => {
      clear();
      reject();
    }, timeout);
  });
}
var subscribeToWagmi = () => {
  let globalNonce = 0;
  watchSigner({}, (signer) => __awaiter6(void 0, void 0, void 0, function* () {
    const localNonce = ++globalNonce;
    if (signer) {
      promise_default({
        type: __export2.MetaMask,
        account: signer.getAddress(),
        evmChainId: signer.getChainId(),
        signer
      }).then((context) => {
        if (globalNonce !== localNonce)
          return;
        walletStore.useEvmWallet(context);
      });
    } else {
      walletStore.useEvmWallet(void 0);
    }
  }));
};
function createWagmiProvider(wagmi) {
  subscribeToWagmi();
  const WagmiProvider = ({ children }) => {
    useEffect(() => subscribeToWagmi(), []);
    return jsx(WagmiConfig, Object.assign({ client: wagmi.wagmiClient }, { children: jsxs(RainbowKitProvider, Object.assign({ chains: wagmi.wagmiChains }, { children: [jsx(ConnectButton.Custom, { children: (props) => jsx(ConnectAdapter, Object.assign({}, props, wagmi)) }), children] })) }));
  };
  return WagmiProvider;
}
var rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var BaseSpinner = styled("div", { name: "Spinner" })(() => ({
  position: "absolute",
  animation: `500ms ${rotate} linear infinite`
}));
var Spinner = (props) => {
  return /* @__PURE__ */ jsx(Box, __spreadProps(__spreadValues({ height: 16, width: 16 }, props), { children: /* @__PURE__ */ jsx(BaseSpinner, { children: /* @__PURE__ */ jsx(
    "svg",
    {
      width: "16",
      height: "17",
      viewBox: "0 0 16 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.8967 4.43561C10.8104 3.5078 9.42862 2.99805 8 2.99805L8 0.998047C9.90483 0.998047 11.7471 1.67772 13.1956 2.9148C14.644 4.15189 15.6035 5.8652 15.9015 7.74657C16.1995 9.62795 15.8164 11.5539 14.8211 13.178C13.8259 14.8022 12.2837 16.0179 10.4721 16.6065L9.8541 14.7044C11.2128 14.2629 12.3694 13.3511 13.1158 12.133C13.8623 10.9149 14.1496 9.47047 13.9261 8.05944C13.7026 6.64841 12.983 5.36343 11.8967 4.43561Z",
          fill: "currentColor"
        }
      )
    }
  ) }) }));
};
var HEIGHT = /* @__PURE__ */ ((HEIGHT3) => {
  HEIGHT3[HEIGHT3["xs"] = 26] = "xs";
  HEIGHT3[HEIGHT3["sm"] = 32] = "sm";
  HEIGHT3[HEIGHT3["md"] = 40] = "md";
  HEIGHT3[HEIGHT3["lg"] = 52] = "lg";
  return HEIGHT3;
})(HEIGHT || {});
var FONT_SIZE = /* @__PURE__ */ ((FONT_SIZE3) => {
  FONT_SIZE3[FONT_SIZE3["xs"] = 12] = "xs";
  FONT_SIZE3[FONT_SIZE3["sm"] = 12] = "sm";
  FONT_SIZE3[FONT_SIZE3["md"] = 14] = "md";
  FONT_SIZE3[FONT_SIZE3["lg"] = 16] = "lg";
  return FONT_SIZE3;
})(FONT_SIZE || {});
var DEFAULT_SIZE = "lg";
var BaseButton = styled("button", { name: "LzButton", label: "LzButton" })(
  ({ theme, size = DEFAULT_SIZE, variant = "secondary" }) => {
    var _a;
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues({
      borderRadius: theme.shape.borderRadius,
      border: "0",
      height: HEIGHT[size],
      fontSize: FONT_SIZE[size],
      cursor: "pointer",
      padding: "0px 16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textTransform: (_a = theme.typography.button) == null ? void 0 : _a.textTransform,
      "&:disabled": {
        opacity: 0.5,
        cursor: "default"
      }
    }, variant === "primary" && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: "0px 8px 24px rgba(126, 132, 255, 0.4)",
      borderBottom: "4px solid #6670EA",
      fontWeight: 700,
      transition: "background-color 200ms ease-out",
      "&:disabled": {
        borderColor: "transparent",
        opacity: 0.5,
        cursor: "default"
      },
      "&:hover:not(:disabled)": {
        backgroundColor: theme.palette.primary.light,
        borderColor: "#525ADB"
      },
      "&:focus": {
        outline: 0,
        backgroundColor: theme.palette.primary.light
      }
    }), variant === "secondary" && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      "&:hover:not(:disabled)": {
        backgroundColor: theme.palette.secondary.light
      },
      "&:focus": {
        backgroundColor: theme.palette.secondary.light,
        outline: 0
      }
    }), variant === "tertiary" && {
      minHeight: 24,
      padding: "4px 9px",
      fontSize: 12,
      backgroundColor: theme.palette.mode === "light" ? "#F0F0FE" : theme.palette.secondary.main,
      fontWeight: 700,
      color: theme.palette.secondary.contrastText,
      "&:hover:not(:disabled)": {
        backgroundColor: theme.palette.secondary.light
      },
      "&:focus": {
        backgroundColor: theme.palette.secondary.light,
        outline: 0
      }
    }), variant == "incognito" && {
      background: "transparent",
      padding: 0,
      color: theme.palette.primary.contrastText,
      height: "auto",
      textTransform: "none",
      "&:hover:not(:disabled)": {
        opacity: 0.7
      }
    });
  }
);
styled(Box, { name: "ButtonGroup" })(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& > [class*=LzButton]:not(:first-of-type), & > *:first-of-type": {
    marginLeft: 1
  },
  "& > [class*=LzButton], & > *": {
    borderRadius: 0
  },
  "& > [class*=LzButton]:first-of-type, & > *:first-of-type": {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius
  },
  "& > [class*=LzButton]:last-of-type, & > *:last-of-type": {
    borderTopRightRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius
  }
}));
var Button = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { isLoading, children } = _b, props = __objRest(_b, ["isLoading", "children"]);
    return /* @__PURE__ */ jsxs(BaseButton, __spreadProps(__spreadValues({ ref }, props), { children: [
      isLoading && /* @__PURE__ */ jsx(Spinner, { sx: { mr: 1 } }),
      children
    ] }));
  }
);
var Svg = styled("svg")(({ theme, color }) => ({
  color: color || theme.palette.text.primary
}));
var Icon = () => {
  return null;
};
Icon.Close = (_a) => {
  var _b = _a, { size = 16 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    Svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx("path", { d: "M13 3L3 13", stroke: "currentColor" }),
        /* @__PURE__ */ jsx("path", { d: "M3 3L13 13", stroke: "currentColor" })
      ]
    })
  );
};
Icon.Chevron = (_a) => {
  var _b = _a, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsx(
    Svg,
    __spreadProps(__spreadValues({
      width: "10",
      height: "6",
      viewBox: "0 0 10 6",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: /* @__PURE__ */ jsx("path", { d: "M1 1L5 5L9 1", stroke: "currentColor", strokeLinejoin: "round" })
    })
  );
};
Icon.DefaultToken = (_a) => {
  var _b = _a, { size = 40 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsx(
    "svg",
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: /* @__PURE__ */ jsx("rect", { width: "40", height: "40", rx: "4", fill: "white" })
    })
  );
};
Icon.Checkmark = (_a) => {
  var _b = _a, { size = 16 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsx(
    Svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: /* @__PURE__ */ jsx("path", { d: "M2.75 8L6.25 11.5L13.25 4.5", stroke: "currentColor", "stroke-width": "1.16667" })
    })
  );
};
Icon.Swap = (_a) => {
  var _b = _a, { size = 24 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    Svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx("path", { d: "M14 3L14 20L19 14.8629", stroke: "currentColor" }),
        /* @__PURE__ */ jsx("path", { d: "M10 21L10 4L5 9.13712", stroke: "currentColor" })
      ]
    })
  );
};
Icon.Search = (_a) => {
  var _b = _a, { size = 16 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    Svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "7.5",
            cy: "7.5",
            r: "6",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M12 12L15 15", stroke: "currentColor", strokeLinejoin: "round" })
      ]
    })
  );
};
Icon.ActiveDot = (_a) => {
  var _b = _a, { size = 12 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    "svg",
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx("circle", { opacity: "0.08", cx: "6", cy: "6", r: "6", fill: "currentColor" }),
        /* @__PURE__ */ jsx("circle", { opacity: "0.08", cx: "6", cy: "6", r: "4", fill: "currentColor" }),
        /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "2", fill: "currentColor" })
      ]
    })
  );
};
Icon.Arrow = (_a) => {
  var _b = _a, { size = 16 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsx(
    Svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.5 11.7909L4.35554 8.64648L3.64844 9.35359L8.00199 13.7071L12.3555 9.35359L11.6484 8.64648L8.5 11.7949L8.5 2L7.5 2L7.5 11.7909Z",
          fill: "currentColor"
        }
      )
    })
  );
};
Icon.DownArrow = (_a) => {
  var _b = _a, { size = 16 } = _b; __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M8 2L8 13", stroke: "#161617" }),
        /* @__PURE__ */ jsx("path", { d: "M4 9L8 13L12 9", stroke: "#161617" })
      ]
    }
  );
};
Icon.Logo = ({ size = 40 }) => /* @__PURE__ */ jsx(
  "img",
  {
    src: "/static/trader-joe.webp",
    alt: "",
    width: size,
    height: size,
    style: { objectFit: "contain" }
  }
);
Icon.Link = (_a) => {
  var _b = _a, { size = 16 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    Svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx("path", { d: "M14 2H10M14 2L8 8M14 2V6", stroke: "currentColor" }),
        /* @__PURE__ */ jsx("path", { d: "M8 1.99805H2V13.998H14V7.99805", stroke: "currentColor" })
      ]
    })
  );
};
Icon.ExternalLink = (_a) => {
  var _b = _a, { size = 12 } = _b; __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsx(
    Svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10.6667 10.6667H1.33333V1.33333H6V0H0V12H12V6H10.6667V10.6667ZM7.33333 0V1.33333H9.72667L3.17333 7.88667L4.11333 8.82667L10.6667 2.27333V4.66667H12V0H7.33333Z",
          fill: "black"
        }
      )
    }
  );
};
Icon.Success = (_a) => {
  var _b = _a, { size = 18 } = _b; __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    Svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "9", cy: "9", r: "9", fill: "#49C24E" }),
        /* @__PURE__ */ jsx("path", { d: "M4.5 9L7.5 12L13.5 6", stroke: "white" })
      ]
    }
  );
};
var rotate2 = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var LoadingIcon = styled("div")(({ size, color, theme }) => ({
  borderRadius: "100%",
  width: size ? size + "px" : "96px",
  height: size ? size + "px" : "96px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  borderTopColor: color != null ? color : theme.palette.text.primary,
  animation: `1s ${rotate2} ease-out infinite`
}));
Icon.Spinner = LoadingIcon;
Icon.CheckmarkCircle = (_a) => {
  var _b = _a, { size = 20 } = _b, props = __objRest(_b, ["size"]);
  return /* @__PURE__ */ jsxs(
    "svg",
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "9", fill: "#49C24E" }),
        /* @__PURE__ */ jsx("path", { d: "M5.5 10L8.5 13L14.5 7", stroke: "white" })
      ]
    })
  );
};
Icon.DefaultNetwork = (_a) => {
  var _b = _a, { size = 40 } = _b, props = __objRest(_b, ["size"]);
  const theme = useTheme();
  return /* @__PURE__ */ jsx(
    Svg,
    __spreadProps(__spreadValues({
      width: size,
      height: size,
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {
      children: /* @__PURE__ */ jsx(
        "rect",
        {
          width: "40",
          height: "40",
          fill: theme.palette.mode === "light" ? "#F0F0FE" : "rgb(255 255 255 / 0.12)"
        }
      )
    })
  );
};
var TOAST_Z_INDEX = 100;
var TOAST_DELAY = 7e3;
function createProgressAnimation(theme, accent) {
  const animation = {};
  for (let i = 0; i <= 1; i += 0.01) {
    const key = `${i * 100}%`;
    animation[key] = {
      background: `conic-gradient(${accent != null ? accent : theme.palette.text.primary} ${i * 360}deg, rgba(255, 255, 255, 0.24) 0deg)`
    };
  }
  return animation;
}
var progress = (theme, accent) => keyframes(createProgressAnimation(theme, accent));
var toastTheme = /* @__PURE__ */ jsx(
  GlobalStyles,
  {
    styles: (theme) => ({
      ":root": {
        "--toastify-z-index": TOAST_Z_INDEX,
        "--toastify-color-progress-light": theme.palette.text.primary
      },
      ".Toastify .Toastify__toast": {
        backgroundColor: theme.palette.background.paper,
        minHeight: 76,
        borderRadius: theme.shape.borderRadius,
        paddingRight: 50,
        boxShadow: theme.palette.mode === "light" ? "0px 2px 4px #D3D3DF" : "0px 2px 4px #181823"
      },
      ".Toastify .Toastify__toast .Toastify__toast-icon": {
        display: "none"
      },
      ".Toastify .Toastify__progress-bar": {
        right: 0,
        left: "auto",
        top: "50%",
        transform: "translateY(-50%)",
        marginRight: 18,
        width: 24,
        height: 24,
        borderRadius: "100%",
        visibility: "hidden",
        "&::after": {
          content: '""',
          background: theme.palette.background.default,
          borderRadius: "100%",
          width: 22,
          height: 22,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%"
        }
      },
      ".Toastify .Toastify__toast-container h1": {
        letterSpacing: "-0.02em",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        color: theme.palette.text.primary,
        fontFamily: theme.typography.fontFamily
      },
      ".Toastify .Toastify__toast-container p": {
        color: theme.palette.text.secondary,
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        marginTop: "4px",
        lineBreak: "anywhere"
      },
      ".Toastify .Toastify__toast-container a::after": {
        content: 'url("/static/link.svg")',
        marginLeft: 10,
        verticalAlign: "middle"
      },
      ".Toastify .Toastify__toast--default a::after": {
        opacity: 0.7,
        filter: theme.palette.mode === "light" ? "brightness(0.5)" : "none"
      },
      ".Toastify .Toastify__toast-icon": {
        marginBottom: "auto",
        marginTop: 2
      },
      ".Toastify .Toastify__toast-container": {
        width: 300,
        maxWidth: "100%",
        marginTop: 70
      },
      ".Toastify .Toastify__toast-container .Toastify__toast--success h1, .Toastify .Toastify__toast-container .Toastify__toast--error h1": {
        color: theme.palette.success.contrastText
      },
      ".Toastify .Toastify__toast-container .Toastify__toast--success p, .Toastify .Toastify__toast-container .Toastify__toast--error p": {
        color: theme.palette.success.contrastText,
        opacity: 0.7
      },
      ".Toastify .Toastify__toast--success": {
        backgroundColor: theme.palette.success.main
      },
      ".Toastify .Toastify__toast--error": {
        backgroundColor: theme.palette.error.main
      },
      ".Toastify .Toastify__toast--success .Toastify__progress-bar::after": {
        backgroundColor: theme.palette.success.main
      },
      ".Toastify .Toastify__toast--error .Toastify__progress-bar::after": {
        backgroundColor: theme.palette.error.main
      },
      ".Toastify .Toastify__toast--success .Toastify__progress-bar": {
        animationName: progress(theme, theme.palette.success.main),
        visibility: "visible"
      },
      ".Toastify .Toastify__toast--error .Toastify__progress-bar": {
        animationName: progress(theme, theme.palette.error.main),
        visibility: "visible"
      }
    })
  }
);
var Container = styled("div", {
  name: "ToastContainer"
})({
  display: "flex",
  "& > svg": {
    marginRight: "12px"
  }
});
var Toast = observer(({ children }) => {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { children }) });
});
var ToastProvider = ({ children }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    toastTheme,
    /* @__PURE__ */ jsx(
      ToastContainer,
      {
        autoClose: TOAST_DELAY,
        closeButton: CloseButton,
        closeOnClick: false,
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        theme: theme.palette.mode,
        draggable: false
      }
    )
  ] });
};
var SCloseIcon = styled("div", { name: "CloseButton" })(() => ({
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translate(-50%, -50%)",
  marginRight: 14
}));
var CloseButton = ({ closeToast, ariaLabel, type }) => {
  const theme = useTheme();
  if (["success", "error"].includes(type)) {
    return /* @__PURE__ */ jsx(
      Button,
      {
        variant: "incognito",
        "aria-label": ariaLabel,
        sx: {
          position: "absolute",
          right: 0,
          top: 0,
          width: "54px",
          height: "100%",
          zIndex: TOAST_Z_INDEX + 10
        },
        onClick: (event) => {
          closeToast(event);
        },
        children: /* @__PURE__ */ jsx(SCloseIcon, { children: /* @__PURE__ */ jsx(Icon.Close, { size: 16, color: theme.palette.success.contrastText }) })
      }
    );
  }
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "incognito",
      "aria-label": ariaLabel,
      sx: {
        position: "absolute",
        right: 0,
        top: 0,
        width: "54px",
        height: "100%",
        zIndex: TOAST_Z_INDEX + 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 2.5,
        color: theme.palette.text.primary
      },
      onClick: (event) => {
        closeToast(event);
      },
      children: /* @__PURE__ */ jsx(Spinner, {})
    }
  );
};
var ToggleModel = types.model({
  value: types.optional(types.boolean, false)
}).actions((store) => ({
  open() {
    store.value = true;
  },
  close() {
    store.value = false;
  },
  toggle() {
    store.value = !store.value;
  }
}));
var WalletModal = ToggleModel.props({
  activeTab: types.optional(types.frozen(), "Transactions" /* TRANSACTIONS */)
}).actions((store) => ({
  setActiveTab(tab) {
    store.activeTab = tab;
  }
}));
var TransactionProgressModel = ToggleModel.props({
  dismissed: types.array(types.string)
}).views((store) => ({
  get transactions() {
    return transactionStore.recentTransactions.filter(
      (tx) => !store.dismissed.includes(tx.txHash)
    );
  },
  get hasPendingTransactions() {
    return this.transactions.some((transaction) => !transaction.completed && !transaction.error);
  }
})).actions((store) => ({
  dismiss(txHash) {
    store.dismissed.push(txHash);
  }
}));
var UiStoreModel = types.model({
  walletModal: types.optional(WalletModal, {}),
  txProgress: types.optional(TransactionProgressModel, {}),
  dstNativeAmountModal: types.optional(ToggleModel, {}),
  claimReminderAlert: types.optional(ToggleModel, {}),
  rpcErrorAlert: types.optional(ToggleModel, {})
});
var uiStore = UiStoreModel.create();
var PROGRESS_KEY = "ui.txProgress";
function recordUiStore() {
  if (typeof window === "undefined")
    return;
  restoreSnapshot2();
  onSnapshot(uiStore.txProgress, () => {
    saveSnapshot2();
  });
  function restoreSnapshot2() {
    try {
      const json = localStorage.getItem(PROGRESS_KEY);
      if (!json)
        return;
      const snapshot = JSON.parse(json);
      applySnapshot(uiStore.txProgress, snapshot);
    } catch (e) {
    }
  }
  function saveSnapshot2() {
    try {
      const snapshot = getSnapshot(uiStore.txProgress);
      window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(snapshot));
    } catch (e) {
    }
  }
}
var BalanceModel = types.model({
  address: types.string,
  amount: types.frozen()
}).views((balance) => ({
  get currency() {
    return balance.amount.currency;
  }
}));
var UnclaimedStoreModel = types.model({
  isExecuting: false,
  isSigning: false,
  balances: types.map(BalanceModel),
  claimingAmount: types.maybe(types.frozen()),
  strategies: types.array(types.frozen())
}).views((store) => {
  const views = {
    isUnclaimed(currency) {
      const { aptos } = walletStore;
      if (!(aptos == null ? void 0 : aptos.account))
        return false;
      const balance = views.getBalance(currency, aptos.account);
      if (!balance)
        return false;
      return balance.amount.greaterThan(0);
    },
    getUnclaimed(currency, address) {
      return this.getBalancesFor(address).find((balance) => balance.currency.equals(currency));
    },
    getUnclaimedFor(address) {
      return this.getBalancesFor(address).filter((balance) => balance.amount.greaterThan(0));
    },
    getBalancesFor(address) {
      return Array.from(store.balances.values()).filter((i) => i.address === address);
    },
    getBalance(currency, address) {
      const key = toKey3(currency, address);
      return store.balances.get(key);
    },
    getStrategy(currency) {
      const provider = store.strategies.find((p) => p.supports(currency));
      return provider;
    },
    get unclaimed() {
      const { aptos } = walletStore;
      return this.getUnclaimedFor(aptos == null ? void 0 : aptos.account);
    }
  };
  return views;
}).actions((store) => ({
  setStrategies(strategies) {
    store.strategies.replace(strategies);
  },
  addStrategy(strategy) {
    store.strategies.push(strategy);
  }
})).actions((store) => {
  const actions = {
    claim: flow(function* (currency) {
      const provider = store.getStrategy(currency);
      assert6__default(provider);
      try {
        store.isExecuting = true;
        const { aptos } = walletStore;
        assert6__default(aptos);
        const claimingAmount = yield provider.getUnclaimed(currency, aptos.account);
        store.claimingAmount = claimingAmount;
        store.isSigning = true;
        const tx = yield provider.claim(currency);
        store.isSigning = false;
        const receipt = yield tx.wait();
        yield actions.updateBalance(currency, aptos.account);
        toast.success(
          /* @__PURE__ */ jsxs(Toast, { children: [
            /* @__PURE__ */ jsxs("h1", { children: [
              "Claimed ",
              claimingAmount == null ? void 0 : claimingAmount.toExact(),
              " ",
              currency.symbol
            ] }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: __export013(currency.chainId, receipt.txHash), target: "_blank", children: "View on block explorer" }) })
          ] })
        );
      } catch (e) {
        const { title, message } = parseWalletError(e);
        toast.error(
          /* @__PURE__ */ jsxs(Toast, { children: [
            /* @__PURE__ */ jsx("h1", { children: title }),
            /* @__PURE__ */ jsx("p", { children: message })
          ] })
        );
        throw e;
      } finally {
        store.isExecuting = false;
        closeUnclaimedTokensModal();
      }
    }),
    updateBalance: flow(function* (currency, address) {
      const key = toKey3(currency, address);
      const strategy = store.getStrategy(currency);
      assert6__default(strategy);
      const amount = yield strategy.getUnclaimed(currency, address);
      const balance = store.getBalance(currency, address);
      if (balance) {
        balance.amount = amount;
      } else {
        store.balances.set(key, BalanceModel.create({ amount, address }));
      }
    })
  };
  return actions;
});
function closeUnclaimedTokensModal() {
  if (uiStore.walletModal.activeTab === "Unclaimed" /* UNCLAIMED */) {
    uiStore.walletModal.setActiveTab("Transactions" /* TRANSACTIONS */);
    uiStore.walletModal.close();
  }
  uiStore.claimReminderAlert.close();
}
function toKey3(currency, address) {
  return `${currency.symbol}:${address}`;
}
var unclaimedStore = UnclaimedStoreModel.create();
var DstNativeAmount = /* @__PURE__ */ ((DstNativeAmount2) => {
  DstNativeAmount2["DEFAULT"] = "DEFAULT";
  DstNativeAmount2["MAX"] = "MAX";
  DstNativeAmount2["ZERO"] = "ZERO";
  return DstNativeAmount2;
})(DstNativeAmount || {});
var FormModel = types.model({
  srcChainId: types.frozen(),
  dstChainId: types.frozen(),
  amount: "",
  dstNativeAmount: "DEFAULT" /* DEFAULT */
});
types.model({
  slippage: types.optional(types.number, 0.05)
});
var TransactionType = {
  TRANSFER: "TRANSFER"
};
var BridgeStoreModel = types.model({
  isMining: false,
  isSigning: false,
  isExecuting: false,
  isApproving: false,
  isRegistering: false,
  oftFee: types.frozen(),
  form: types.optional(FormModel, () => FormModel.create()),
  fees: types.map(types.frozen()),
  tokens: types.array(types.frozen()),
  proxyOFT: types.array(types.frozen()),
  strategies: types.array(types.frozen())
}).views((store) => {
  const views = {
    get strategy() {
      return store.strategies.find((s) => s.isApplicable());
    },
    get chains() {
      return uniq(store.tokens.map((i) => i.chainId));
    },
    get srcNetworkOptions() {
      const { dstChainId } = store.form;
      return this.chains.map((chainId) => ({
        chainId,
        overlay: chainId === dstChainId ? "Selecting this will change your destination network" : void 0
      }));
    },
    get dstNetworkOptions() {
      const { srcChainId } = store.form;
      return this.chains.map((chainId) => ({
        chainId,
        overlay: chainId === srcChainId ? "Selecting this will change your source network" : void 0
      }));
    },
    get errors() {
      var _a;
      const errors = [];
      function addError(error) {
        errors.push(error);
      }
      const { srcNativeBalance, srcNativeCost } = this;
      if (srcNativeCost && srcNativeBalance) {
        if (srcNativeCost.greaterThan(srcNativeBalance)) {
          addError("Not enough native for gas");
        }
      }
      if (!store.form.dstChainId)
        addError("Select network");
      if (!store.form.srcChainId) {
        addError("Select network");
      } else if (!this.isSupportedChain(store.form.srcChainId)) {
        addError("Selected chain is not supported");
      }
      if (!this.amount || !this.amount.greaterThan(0)) {
        addError("Enter amount");
      } else if ((_a = this.maxAmount) == null ? void 0 : _a.lessThan(this.amount)) {
        addError("Insufficient balance");
      }
      if (store.form.srcChainId && store.form.srcChainId === store.form.dstChainId) {
        addError("Change network");
      }
      if (!this.fee || !store.oftFee)
        addError("Checking fee ...");
      return errors;
    },
    get srcAddress() {
      var _a;
      return (_a = this.srcWallet) == null ? void 0 : _a.account;
    },
    get dstAddress() {
      var _a;
      return (_a = this.dstWallet) == null ? void 0 : _a.account;
    },
    get dstWallet() {
      const { dstChainId } = store.form;
      if (!dstChainId)
        return void 0;
      if (__export14(dstChainId))
        return walletStore.evm;
      if (__export06(dstChainId))
        return walletStore.aptos;
      return void 0;
    },
    get srcWallet() {
      const { srcChainId } = store.form;
      if (!srcChainId)
        return void 0;
      if (__export14(srcChainId))
        return walletStore.evm;
      if (__export06(srcChainId))
        return walletStore.aptos;
      return void 0;
    },
    get maxAmount() {
      return getWalletBalance(views.srcToken);
    },
    get dstBalance() {
      return getWalletBalance(views.dstToken);
    },
    get srcToken() {
      return store.tokens.find((i) => i.chainId === store.form.srcChainId);
    },
    get dstToken() {
      return store.tokens.find((i) => i.chainId === store.form.dstChainId);
    },
    get amount() {
      const token = views.srcToken;
      if (!token)
        return void 0;
      return __export024(token, store.form.amount);
    },
    get minAmount() {
      var _a;
      const { oftFee } = store;
      if (!oftFee)
        return void 0;
      return (_a = this.amount) == null ? void 0 : _a.subtract(oftFee);
    },
    get srcNativeCost() {
      var _a;
      return (_a = this.fee) == null ? void 0 : _a.nativeFee;
    },
    get srcNativeBalance() {
      if (!store.form.srcChainId)
        return void 0;
      const native = __export8(store.form.srcChainId);
      return getWalletBalance(native);
    },
    get dstNativeBalance() {
      if (!store.form.dstChainId)
        return void 0;
      const native = __export8(store.form.dstChainId);
      return getWalletBalance(native);
    },
    get dstNativeAmount() {
      const { dstNativeAmount, dstChainId } = store.form;
      if (!dstChainId)
        return void 0;
      const native = __export8(dstChainId);
      const zero = __export36.fromRawAmount(native, 0);
      if (!dstNativeAmount || dstNativeAmount === "ZERO" /* ZERO */)
        return zero;
      if ("DEFAULT" /* DEFAULT */ === dstNativeAmount) {
        const { dstNativeBalance } = this;
        const minAmount = airdropStore.getDefault(dstChainId);
        if (!dstNativeBalance)
          return void 0;
        if (!minAmount)
          return void 0;
        if (dstNativeBalance.lessThan(minAmount)) {
          return minAmount;
        }
        return zero;
      }
      if (dstNativeAmount === "MAX" /* MAX */) {
        return this.maxDstNativeAmount;
      }
      return __export024(native, dstNativeAmount);
    },
    get maxDstNativeAmount() {
      const { dstChainId, srcChainId } = store.form;
      if (!srcChainId)
        return void 0;
      if (!dstChainId)
        return void 0;
      const config = relayerStore.pickDstConfig(srcChainId, dstChainId);
      return config == null ? void 0 : config.dstNativeAmtCap;
    },
    get isApproved() {
      var _a;
      return (_a = this.strategy) == null ? void 0 : _a.isApproved();
    },
    get srcProxy() {
      return this.getProxyOFT(store.form.srcChainId);
    },
    get dstProxy() {
      return this.getProxyOFT(store.form.dstChainId);
    },
    get fee() {
      const { srcChainId, dstChainId } = store.form;
      const { adapterParams } = this;
      const key = feeKey(srcChainId, dstChainId, adapterParams == null ? void 0 : adapterParams.dstNativeAmount);
      return store.fees.get(key);
    },
    isSupportedChain(chainId) {
      return store.tokens.some((t) => t.chainId === chainId);
    },
    getProxyOFT(chainId) {
      return store.proxyOFT.find((token) => token.chainId === chainId);
    },
    get adapterParams() {
      var _a;
      const { dstNativeAmount, dstAddress } = this;
      if (!dstNativeAmount)
        return void 0;
      const dstChainId = dstNativeAmount.currency.chainId;
      const extraGas = (_a = HARDCODED_GAS_LIMITS[dstChainId]) != null ? _a : __export06(dstChainId) ? 1e4 : 25e4;
      return __export02.forV2({
        extraGas,
        dstNativeAmount,
        dstNativeAddress: dstAddress != null ? dstAddress : __export044
      });
    },
    get isRegistered() {
      const { dstToken: dstCurrency } = views;
      if (!dstCurrency)
        return void 0;
      if (__export14(dstCurrency.chainId))
        return true;
      if (__export06(dstCurrency.chainId)) {
        return resourceStore.isRegistered(dstCurrency);
      }
      return false;
    }
  };
  return views;
}).actions((store) => {
  let globalNonce = 0;
  const updateOftFee = flow(function* () {
    const localNonce = ++globalNonce;
    store.oftFee = void 0;
    const { dstChainId } = store.form;
    const { strategy, amount } = store;
    if (!amount)
      return;
    if (!dstChainId)
      return;
    if (!strategy)
      return;
    const fee = yield strategy.getBridgeFee(
      amount,
      dstChainId
    );
    if (localNonce !== globalNonce)
      return;
    store.oftFee = fee;
  });
  return { updateOftFee };
}).actions((store) => {
  const register = flow(function* () {
    store.isRegistering = true;
    try {
      const { dstToken } = store;
      assert6__default(dstToken, "dstToken");
      const result = yield resourceStore.register(dstToken);
      toast.success(
        /* @__PURE__ */ jsxs(Toast, { children: [
          /* @__PURE__ */ jsx("h1", { children: "Transaction Submitted" }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: __export17(dstToken.chainId, result.txHash),
              target: "_blank",
              rel: "noreferrer",
              children: "View on block explorer"
            }
          ) })
        ] })
      );
    } finally {
      store.isRegistering = false;
    }
  });
  const approve2 = flow(function* () {
    var _a;
    const { strategy } = store;
    assert6__default(strategy);
    try {
      store.isSigning = true;
      const result = yield strategy.approve();
      store.isSigning = false;
      store.isApproving = true;
      yield (_a = result == null ? void 0 : result.wait) == null ? void 0 : _a.call(result);
    } finally {
      store.isApproving = false;
      store.isSigning = false;
    }
  });
  const actions = {
    setAmount(amount) {
      if (__export28(amount) !== void 0) {
        store.form.amount = amount;
      }
    },
    setMaxAmount() {
      if (!store.maxAmount)
        return;
      store.form.amount = store.maxAmount.toExact();
    },
    setDstNativeAmount(amount) {
      if (amount in DstNativeAmount) {
        store.form.dstNativeAmount = amount;
      }
      const { dstChainId } = store.form;
      if (!dstChainId)
        return;
      const dstNative = __export8(dstChainId);
      if (__export024(dstNative, amount) !== void 0) {
        store.form.dstNativeAmount = amount;
      }
    },
    setSrcChainId(chainId) {
      if (store.form.dstChainId === chainId) {
        store.form.dstChainId = store.form.srcChainId;
      }
      store.form.srcChainId = chainId;
    },
    setDstChainId(chainId) {
      if (store.form.srcChainId === chainId) {
        store.form.srcChainId = store.form.dstChainId;
      }
      store.form.dstChainId = chainId;
    },
    register,
    approve: approve2,
    switch() {
      const { form } = store;
      [form.srcChainId, form.dstChainId] = [form.dstChainId, form.srcChainId];
    },
    updateFee: flow(function* () {
      const { srcChainId, dstChainId } = store.form;
      const { adapterParams, strategy } = store;
      if (!srcChainId)
        return;
      if (!dstChainId)
        return;
      if (!adapterParams)
        return;
      if (!strategy)
        return;
      const fee = yield strategy.getMessageFee(adapterParams);
      const key = feeKey(srcChainId, dstChainId, adapterParams.dstNativeAmount);
      store.fees.set(key, fee);
      return fee;
    }),
    resetAmount() {
      store.form.amount = "";
    },
    updateAllowances() {
      const account = getActiveAccount();
      if (!account)
        return;
      store.proxyOFT.forEach((proxy) => {
        const token = store.tokens.find((token2) => token2.chainId === proxy.chainId);
        if (!token)
          return;
        approveStore.updateAllowance(token, account, proxy.address);
      });
    },
    send: flow(function* () {
      try {
        store.isExecuting = true;
        if (!store.isRegistered) {
          const { dstToken: dstToken2 } = store;
          const { dstNativeBalance } = store;
          assert6__default(dstToken2);
          assert6__default(dstNativeBalance);
          const dstStrategy = store.strategies.find((strategy2) => strategy2.supports(dstToken2));
          assert6__default(dstStrategy);
          const estimatedGasAmount = yield dstStrategy.estimateNative.register(dstToken2);
          if (dstNativeBalance.greaterThan(estimatedGasAmount)) {
            yield register();
          }
        }
        if (!store.isApproved) {
          yield approve2();
        }
        const { dstChainId, srcChainId } = store.form;
        const {
          strategy,
          dstToken,
          srcToken,
          adapterParams,
          amount,
          minAmount,
          fee,
          srcWallet,
          dstWallet
        } = store;
        assert6__default(srcChainId, "srcChainId");
        assert6__default(dstChainId, "dstChainId");
        assert6__default(dstToken, "dstToken");
        assert6__default(srcToken, "srcToken");
        assert6__default(adapterParams, "adapterParams");
        assert6__default(amount, "amount");
        assert6__default(minAmount, "minAmount");
        assert6__default(fee, "fee");
        assert6__default(srcWallet, "srcWallet");
        assert6__default(dstWallet, "dstWallet");
        assert6__default(strategy, "strategy");
        const input = {
          amount,
          minAmount,
          srcChainId,
          dstChainId,
          srcCurrency: srcToken,
          dstCurrency: dstToken,
          srcAddress: srcWallet.account,
          dstAddress: dstWallet.account,
          adapterParams,
          fee
        };
        yield switchChain(store.form.srcChainId);
        store.isSigning = true;
        const response = yield strategy.transfer(
          input
        );
        store.isSigning = false;
        store.isMining = true;
        const receipt = yield response.wait();
        store.isMining = false;
        reportOftTransfer(input, srcWallet == null ? void 0 : srcWallet.type, dstWallet == null ? void 0 : dstWallet.type);
        if (!store.isRegistered) {
          uiStore.claimReminderAlert.open();
        }
        const tx = transactionStore.create({
          type: TransactionType.TRANSFER,
          input,
          chainId: srcToken.chainId,
          expectedDate: __export019(srcToken.chainId, dstToken.chainId),
          txHash: receipt.txHash
        });
        actions.resetAmount();
        actions.updateBalances();
        actions.updateAllowances();
        const toastId = toast(
          /* @__PURE__ */ jsxs(Toast, { children: [
            /* @__PURE__ */ jsxs("h1", { children: [
              "Sending ",
              amount.toSignificant(),
              " ",
              amount.currency.symbol,
              " from",
              " ",
              __export10(srcToken.chainId).name,
              " to ",
              __export10(dstToken.chainId).name
            ] }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: __export013(srcToken.chainId, receipt.txHash), target: "_blank", children: "View on block explorer" }) })
          ] }),
          {
            autoClose: false
          }
        );
        waitForMessageReceived(srcToken.chainId, receipt.txHash).then((message) => {
          tx.update({
            completed: true,
            confirmation: {
              chainId: dstChainId,
              txHash: message.dstTxHash
            }
          });
          toast.update(toastId, {
            type: "success",
            autoClose: 5e3,
            render: () => /* @__PURE__ */ jsxs(Toast, { children: [
              /* @__PURE__ */ jsxs("h1", { children: [
                "Bridged ",
                amount.toExact(),
                " ",
                amount.currency.symbol,
                " from",
                " ",
                __export10(srcToken.chainId).name,
                " to ",
                __export10(dstToken.chainId).name
              ] }),
              /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: __export013(message.srcChainId, message.srcTxHash), target: "_blank", children: "View on explorer" }) })
            ] })
          });
        }).finally(() => {
          if (__export06(dstChainId)) {
            unclaimedStore.updateBalance(dstToken, input.dstAddress);
          }
          actions.updateBalances();
        });
        return tx;
      } catch (e) {
        displayError(e, () => {
          const { message, title } = parseWalletError(e);
          toast.error(
            /* @__PURE__ */ jsxs(Toast, { children: [
              /* @__PURE__ */ jsx("h1", { children: title }),
              /* @__PURE__ */ jsx("p", { children: message })
            ] })
          );
        });
        throw e;
      } finally {
        actions.updateBalances();
        store.isExecuting = false;
        store.isSigning = false;
        store.isMining = false;
      }
    }),
    updateBalances(wallets = walletStore.wallets) {
      const promises = wallets.flatMap((wallet) => {
        const tokens = store.tokens.filter((token) => wallet.supports(token.chainId));
        return tokens.flatMap((token) => [
          balanceStore.updateBalance(token, wallet.account),
          balanceStore.updateBalance(__export8(token.chainId), wallet.account)
        ]);
      });
      return Promise.allSettled(promises);
    },
    setTokens(tokens) {
      store.tokens.replace(tokens);
    },
    setProxyOFT(proxyOFT = []) {
      store.proxyOFT.replace(proxyOFT);
    },
    setStrategies(strategies) {
      store.strategies.replace(strategies);
    },
    addStrategy(strategy) {
      store.strategies.push(strategy);
    }
  };
  return actions;
});
var feeKey = (srcChainId, dstChainId, dstNativeAmount) => {
  return [srcChainId, dstChainId, dstNativeAmount == null ? void 0 : dstNativeAmount.toExact()].join(":");
};
var bridgeStore = BridgeStoreModel.create();
function getAllTokens() {
  const nativeTokens = bridgeStore.chains.map(__export8);
  const bridgeTokens = bridgeStore.tokens;
  const allTokens = uniq([...nativeTokens, ...bridgeTokens]);
  return allTokens;
}
function initOftStore() {
  const updateEvmBalance = () => {
    const { evm: evm2 } = walletStore;
    if (!evm2)
      return;
    getAllTokens().filter((token) => __export14(token.chainId)).forEach((token) => {
      balanceStore.updateBalance(token, evm2.account);
    });
  };
  const updateAptosBalance = () => {
    const { aptos } = walletStore;
    if (!aptos)
      return;
    getAllTokens().filter((token) => __export06(token.chainId)).forEach((token) => {
      balanceStore.updateBalance(token, aptos.account);
    });
  };
  const updateFee = () => {
    const { srcChainId, dstChainId } = bridgeStore.form;
    const { adapterParams, strategy } = bridgeStore;
    if (!srcChainId)
      return;
    if (!srcChainId)
      return;
    if (!dstChainId)
      return;
    if (!adapterParams)
      return;
    bridgeStore.updateFee();
  };
  const updateDstPrice = () => {
    const { srcChainId, dstChainId } = bridgeStore.form;
    if (!srcChainId)
      return;
    if (!dstChainId)
      return;
    relayerStore.updateDstConfig(srcChainId, dstChainId);
    relayerStore.updateDstPrice(srcChainId, dstChainId);
  };
  const updateDefaultAirdropAmount = () => {
    const { dstChainId } = bridgeStore.form;
    if (!dstChainId)
      return;
    airdropStore.updateDefaultAmount(dstChainId);
  };
  const updateAllowance = () => {
    const { evm: evm2 } = walletStore;
    const { srcProxy, srcToken } = bridgeStore;
    if (!evm2)
      return;
    if (!srcToken)
      return;
    if (!srcProxy)
      return;
    if (!__export14(srcToken.chainId))
      return;
    approveStore.updateAllowance(srcToken, evm2.account, srcProxy.address);
  };
  const updateUnclaimedBalance = () => {
    const { aptos } = walletStore;
    if (!aptos)
      return;
    bridgeStore.tokens.filter((token) => __export06(token.chainId)).filter((token) => !__export6(token)).forEach((token) => {
      unclaimedStore.updateBalance(token, aptos.account);
    });
  };
  const updateOftFee = async () => {
    const { dstChainId } = bridgeStore.form;
    const { amount } = bridgeStore;
    if (!dstChainId)
      return;
    if (!amount)
      return;
    bridgeStore.updateOftFee();
  };
  const updateAptosResources = () => {
    const { aptos } = walletStore;
    if (!aptos)
      return;
    const tokens = bridgeStore.tokens.filter((c) => __export06(c.chainId));
    tokens.forEach((token) => resourceStore.update(token, aptos.account));
  };
  const updateEvmResources = () => {
    const { evm: evm2 } = walletStore;
    if (!evm2)
      return;
    const tokens = bridgeStore.tokens.filter((c) => __export14(c.chainId));
    tokens.forEach((token) => resourceStore.update(token, evm2.account));
  };
  autorun(() => updateEvmBalance());
  autorun(() => updateEvmResources());
  autorun(() => updateAptosBalance());
  autorun(() => updateAptosResources());
  autorun(() => updateUnclaimedBalance());
  autorun(() => updateFee());
  autorun(() => updateOftFee());
  autorun(() => updateDstPrice());
  autorun(() => updateDefaultAirdropAmount());
  autorun(() => updateAllowance());
  autorun(() => {
    var _a;
    const chainId = (_a = walletStore.activeWallet) == null ? void 0 : _a.chainId;
    if (!chainId)
      return;
    if (bridgeStore.form.srcChainId || bridgeStore.form.dstChainId)
      return;
    if (bridgeStore.tokens.some((token) => token.chainId === chainId)) {
      bridgeStore.setSrcChainId(chainId);
    }
  });
}
var HARDCODED_GAS_LIMITS = {
  [ChainId.ARBITRUM]: 32e5,
  [ChainId.ARBITRUM_GOERLI]: 32e5
};
var BridgeStrategy__oft_evm = class {
  constructor(api, bridgeStore2, walletStore2) {
    this.api = api;
    this.bridgeStore = bridgeStore2;
    this.walletStore = walletStore2;
  }
  getUnclaimed(currency, account) {
    return this.api.getUnclaimed(currency, account);
  }
  supports(currency) {
    return this.api.supports(currency);
  }
  claim(currency) {
    throw new Error("Method not implemented.");
  }
  register(currency) {
    throw new Error("Method not implemented.");
  }
  async getBridgeFee(inputAmount, dstChainId) {
    return this.api.getBridgeFee(inputAmount, dstChainId);
  }
  approve() {
    const { srcProxy, amount } = this.bridgeStore;
    assert6__default(srcProxy, "srcProxy");
    assert6__default(amount, "amount");
    return approveMax(amount.currency, srcProxy.address);
  }
  async transfer(input) {
    var _a;
    const { srcToken } = this.bridgeStore;
    const signer = (_a = this.walletStore.evm) == null ? void 0 : _a.signer;
    assert6__default(srcToken, "srcToken");
    assert6__default(signer, "signer");
    const tx = await this.api.transfer(input);
    const response = await tx.signAndSubmitTransaction(signer);
    return response;
  }
  isApproved() {
    const { bridgeStore: oftStore } = this;
    if (!oftStore.amount)
      return void 0;
    const proxy = oftStore.srcProxy;
    if (!proxy)
      return true;
    return isApproved(oftStore.amount, proxy.address);
  }
  isApplicable() {
    const { srcToken, dstToken } = this.bridgeStore;
    if (!srcToken)
      return false;
    if (!dstToken)
      return false;
    return this.api.supports(srcToken, dstToken);
  }
  async getMessageFee(adapterParams = __export02.forV1()) {
    const { srcChainId, dstChainId } = this.bridgeStore.form;
    assert6__default(srcChainId, "srcChainId");
    assert6__default(dstChainId, "dstChainId");
    return this.api.getMessageFee(srcChainId, dstChainId, adapterParams);
  }
  get estimateNative() {
    return {
      register(currency) {
        throw new Error("Function not implemented.");
      }
    };
  }
};

// ../ui-lz-sdk/dist/evm/contracts/index.js
var contracts_exports = {};
__export(contracts_exports, {
  Endpoint__factory: () => __export217,
  Relayer__factory: () => __export129,
  UltraLightNode__factory: () => __export050,
  factories: () => __export310
});

// ../ui-lz-sdk/dist/evm/contracts/factories/UltraLightNode__factory.js
var UltraLightNode_factory_exports = {};
__export(UltraLightNode_factory_exports, {
  UltraLightNode__factory: () => __export046
});
function $$cjs_default$$45(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global45 !== "undefined" && global45 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global45 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global45 !== "undefined" && global45 || typeof globalThis !== "undefined" && globalThis || {};
var exports62 = {};
var module62 = {
  get exports() {
    return exports62;
  },
  set exports(value) {
    exports62 = value;
  }
};
Object.defineProperty(exports62, "__esModule", { value: true });
exports62.UltraLightNode__factory = void 0;
var ethers_19 = $$cjs_default$$45(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_endpoint",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "lib",
        type: "address"
      }
    ],
    name: "AddInboundProofLibraryForChain",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userApplication",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "configType",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newConfig",
        type: "bytes"
      }
    ],
    name: "AppConfigUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "proofType",
        type: "uint16"
      }
    ],
    name: "EnableSupportedOutboundProof",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "confirmations",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "blockhash",
        type: "bytes32"
      }
    ],
    name: "HashReceived",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      }
    ],
    name: "Packet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "outboundProofType",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "RelayerParams",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "size",
        type: "uint256"
      }
    ],
    name: "SetChainAddressSize",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "proofType",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes"
      }
    ],
    name: "SetDefaultAdapterParamsForChainId",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "inboundProofLib",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "inboundBlockConfirm",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "outboundProofType",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "outboundBlockConfirm",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address"
      }
    ],
    name: "SetDefaultConfigForChainId",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      }
    ],
    name: "SetLayerZeroToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayerFeeContract",
        type: "address"
      }
    ],
    name: "SetRelayerFeeContract",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "uln",
        type: "bytes32"
      }
    ],
    name: "SetRemoteUln",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "treasuryAddress",
        type: "address"
      }
    ],
    name: "SetTreasury",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "_type",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_msgSender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "WithdrawNative",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_msgSender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "WithdrawZRO",
    type: "event"
  },
  {
    inputs: [],
    name: "BP_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CONFIG_TYPE_INBOUND_BLOCK_CONFIRMATIONS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CONFIG_TYPE_INBOUND_PROOF_LIBRARY_VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CONFIG_TYPE_ORACLE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CONFIG_TYPE_OUTBOUND_BLOCK_CONFIRMATIONS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CONFIG_TYPE_OUTBOUND_PROOF_TYPE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "CONFIG_TYPE_RELAYER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WITHDRAW_TYPE_ORACLE_QUOTED_FEES",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WITHDRAW_TYPE_RELAYER_QUOTED_FEES",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WITHDRAW_TYPE_TREASURY_PROTOCOL_FEES",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_library",
        type: "address"
      }
    ],
    name: "addInboundProofLibraryForChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "appConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "inboundProofLibraryVersion",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "inboundBlockConfirmations",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "relayer",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "outboundProofType",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "outboundBlockConfirmations",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "chainAddressSizeMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "defaultAdapterParams",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "defaultAppConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "inboundProofLibraryVersion",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "inboundBlockConfirmations",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "relayer",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "outboundProofType",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "outboundBlockConfirmations",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_proofType",
        type: "uint16"
      }
    ],
    name: "enableSupportedOutboundProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "endpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpoint",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_ua",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_payInZRO",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateFees",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "userApplicationAddress",
        type: "address"
      }
    ],
    name: "getAppConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "inboundProofLibraryVersion",
            type: "uint16"
          },
          {
            internalType: "uint64",
            name: "inboundBlockConfirmations",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "relayer",
            type: "address"
          },
          {
            internalType: "uint16",
            name: "outboundProofType",
            type: "uint16"
          },
          {
            internalType: "uint64",
            name: "outboundBlockConfirmations",
            type: "uint64"
          },
          {
            internalType: "address",
            name: "oracle",
            type: "address"
          }
        ],
        internalType: "struct UltraLightNode.ApplicationConfiguration",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_lookupHash",
        type: "bytes32"
      }
    ],
    name: "getBlockHeaderData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "confirmations",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "data",
            type: "bytes32"
          }
        ],
        internalType: "struct UltraLightNode.BlockData",
        name: "blockData",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "userApplicationAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      }
    ],
    name: "getConfig",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "hashLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "confirmations",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "data",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "inboundProofLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "layerZeroToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "maxInboundProofLibrary",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address"
      }
    ],
    name: "oracleQuotedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "oracleQuotedFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address"
      }
    ],
    name: "relayerQuotedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "relayerQuotedFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ua",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_destination",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_zroPaymentAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256"
      }
    ],
    name: "setChainAddressSize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_ua",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_config",
        type: "bytes"
      }
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_proofType",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "setDefaultAdapterParamsForChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_inboundProofLibraryVersion",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_inboundBlockConfirmations",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "_relayer",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_outboundProofType",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_outboundBlockConfirmations",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address"
      }
    ],
    name: "setDefaultConfigForChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_layerZeroToken",
        type: "address"
      }
    ],
    name: "setLayerZeroToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_remoteUln",
        type: "bytes32"
      }
    ],
    name: "setRemoteUln",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address"
      }
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "supportedOutboundProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "treasuryContract",
    outputs: [
      {
        internalType: "contract ILayerZeroTreasury",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "treasuryNativeFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "treasuryZROFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "ulnLookup",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_lookupHash",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_confirmations",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_data",
        type: "bytes32"
      }
    ],
    name: "updateHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_dstAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_lookupHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_transactionProof",
        type: "bytes"
      }
    ],
    name: "validateTransactionProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_type",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawZRO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var UltraLightNode__factory = class {
  static createInterface() {
    return new ethers_19.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers_19.Contract(address, _abi, signerOrProvider);
  }
};
exports62.UltraLightNode__factory = UltraLightNode__factory;
UltraLightNode__factory.abi = _abi;
var __export046;
if (Object.isExtensible(module62.exports)) {
  __export046 = module62.exports["UltraLightNode__factory"];
}

// ../ui-lz-sdk/dist/evm/contracts/factories/Relayer__factory.js
var Relayer_factory_exports = {};
__export(Relayer_factory_exports, {
  Relayer__factory: () => __export047
});
function $$cjs_default$$46(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global46 !== "undefined" && global46 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global46 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global46 !== "undefined" && global46 || typeof globalThis !== "undefined" && globalThis || {};
var exports63 = {};
var module63 = {
  get exports() {
    return exports63;
  },
  set exports(value) {
    exports63 = value;
  }
};
Object.defineProperty(exports63, "__esModule", { value: true });
exports63.Relayer__factory = void 0;
var ethers_110 = $$cjs_default$$46(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var _abi2 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApproveAddress",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawTokens",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "approvedAddresses",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "dstConfigLookup",
    outputs: [
      {
        internalType: "uint128",
        name: "dstNativeAmtCap",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "baseGas",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "gasPerByte",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "dstPriceLookup",
    outputs: [
      {
        internalType: "uint128",
        name: "dstPriceRatio",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "dstGasPriceInWei",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_outboundProofType",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "payloadSize",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_uln",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayerAddress",
        type: "address"
      }
    ],
    name: "isApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_outboundProofType",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "notifyRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayerAddress",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_approve",
        type: "bool"
      }
    ],
    name: "setApprovedAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_outboundProofType",
        type: "uint16"
      },
      {
        internalType: "uint128",
        name: "_dstNativeAmtCap",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "_baseGas",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_gasPerByte",
        type: "uint64"
      }
    ],
    name: "setDstConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint128",
        name: "_dstPriceRatio",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "_dstGasPriceInWei",
        type: "uint128"
      }
    ],
    name: "setDstPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "uln",
    outputs: [
      {
        internalType: "contract ILayerZeroUltraLightNodeV1",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_dstAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_blockHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_transactionProof",
        type: "bytes"
      }
    ],
    name: "validateTransactionProofV1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_dstAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_blockHash",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "_transactionProof",
        type: "bytes"
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address"
      }
    ],
    name: "validateTransactionProofV2",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawQuotedFromULN",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var Relayer__factory = class {
  static createInterface() {
    return new ethers_110.utils.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new ethers_110.Contract(address, _abi2, signerOrProvider);
  }
};
exports63.Relayer__factory = Relayer__factory;
Relayer__factory.abi = _abi2;
var __export047;
if (Object.isExtensible(module63.exports)) {
  __export047 = module63.exports["Relayer__factory"];
}

// ../ui-lz-sdk/dist/evm/contracts/factories/Endpoint__factory.js
var Endpoint_factory_exports = {};
__export(Endpoint_factory_exports, {
  Endpoint__factory: () => __export048
});
function $$cjs_default$$47(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global47 !== "undefined" && global47 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global47 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global47 !== "undefined" && global47 || typeof globalThis !== "undefined" && globalThis || {};
var exports64 = {};
var module64 = {
  get exports() {
    return exports64;
  },
  set exports(value) {
    exports64 = value;
  }
};
Object.defineProperty(exports64, "__esModule", { value: true });
exports64.Endpoint__factory = void 0;
var ethers_111 = $$cjs_default$$47(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var _abi3 = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "DefaultReceiveVersionSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "DefaultSendVersionSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "NewLibraryVersionAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "address",
        name: "dstAddress",
        type: "address"
      }
    ],
    name: "PayloadCleared",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "address",
        name: "dstAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "payload",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes"
      }
    ],
    name: "PayloadStored",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "srcAddress",
        type: "bytes"
      }
    ],
    name: "UaForceResumeReceive",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ua",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "UaReceiveVersionSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ua",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "version",
        type: "uint16"
      }
    ],
    name: "UaSendVersionSet",
    type: "event"
  },
  {
    inputs: [],
    name: "BLOCK_VERSION",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DEFAULT_VERSION",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultReceiveLibraryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultReceiveVersion",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultSendLibrary",
    outputs: [
      {
        internalType: "contract ILayerZeroMessagingLibrary",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultSendVersion",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "bool",
        name: "_payInZRO",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateFees",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      }
    ],
    name: "getConfig",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "getInboundNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_srcAddress",
        type: "address"
      }
    ],
    name: "getOutboundNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getReceiveLibraryAddress",
    outputs: [
      {
        internalType: "address",
        name: "receiveLibraryAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getReceiveVersion",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getSendLibraryAddress",
    outputs: [
      {
        internalType: "address",
        name: "sendLibraryAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userApplication",
        type: "address"
      }
    ],
    name: "getSendVersion",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "hasStoredPayload",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "inboundNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isReceivingPayload",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isSendingPayload",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestVersion",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "libraryLookup",
    outputs: [
      {
        internalType: "contract ILayerZeroMessagingLibrary",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newLayerZeroLibraryAddress",
        type: "address"
      }
    ],
    name: "newVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "outboundNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "address",
        name: "_dstAddress",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "receivePayload",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "retryPayload",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_destination",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_zroPaymentAddress",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_config",
        type: "bytes"
      }
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newDefaultReceiveVersion",
        type: "uint16"
      }
    ],
    name: "setDefaultReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newDefaultSendVersion",
        type: "uint16"
      }
    ],
    name: "setDefaultSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newVersion",
        type: "uint16"
      }
    ],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newVersion",
        type: "uint16"
      }
    ],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "storedPayload",
    outputs: [
      {
        internalType: "uint64",
        name: "payloadLength",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "dstAddress",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "payloadHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "uaConfigLookup",
    outputs: [
      {
        internalType: "uint16",
        name: "sendVersion",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "receiveVersion",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "receiveLibraryAddress",
        type: "address"
      },
      {
        internalType: "contract ILayerZeroMessagingLibrary",
        name: "sendLibrary",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var Endpoint__factory = class {
  static createInterface() {
    return new ethers_111.utils.Interface(_abi3);
  }
  static connect(address, signerOrProvider) {
    return new ethers_111.Contract(address, _abi3, signerOrProvider);
  }
};
exports64.Endpoint__factory = Endpoint__factory;
Endpoint__factory.abi = _abi3;
var __export048;
if (Object.isExtensible(module64.exports)) {
  __export048 = module64.exports["Endpoint__factory"];
}

// ../ui-lz-sdk/dist/evm/contracts/factories/index.js
var factories_exports = {};
__export(factories_exports, {
  Endpoint__factory: () => __export216,
  Relayer__factory: () => __export128,
  UltraLightNode__factory: () => __export049
});
function $$cjs_default$$48(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global48 !== "undefined" && global48 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global48 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global48 !== "undefined" && global48 || typeof globalThis !== "undefined" && globalThis || {};
var exports65 = {};
var module65 = {
  get exports() {
    return exports65;
  },
  set exports(value) {
    exports65 = value;
  }
};
Object.defineProperty(exports65, "__esModule", { value: true });
exports65.UltraLightNode__factory = exports65.Relayer__factory = exports65.Endpoint__factory = void 0;
var Endpoint__factory_1 = $$cjs_default$$48(typeof Endpoint_factory_exports !== "undefined" ? Endpoint_factory_exports : {});
Object.defineProperty(exports65, "Endpoint__factory", { enumerable: true, get: function() {
  return Endpoint__factory_1.Endpoint__factory;
} });
var Relayer__factory_1 = $$cjs_default$$48(typeof Relayer_factory_exports !== "undefined" ? Relayer_factory_exports : {});
Object.defineProperty(exports65, "Relayer__factory", { enumerable: true, get: function() {
  return Relayer__factory_1.Relayer__factory;
} });
var UltraLightNode__factory_1 = $$cjs_default$$48(typeof UltraLightNode_factory_exports !== "undefined" ? UltraLightNode_factory_exports : {});
Object.defineProperty(exports65, "UltraLightNode__factory", { enumerable: true, get: function() {
  return UltraLightNode__factory_1.UltraLightNode__factory;
} });
var __export049;
var __export128;
var __export216;
if (Object.isExtensible(module65.exports)) {
  __export049 = module65.exports["UltraLightNode__factory"];
  __export128 = module65.exports["Relayer__factory"];
  __export216 = module65.exports["Endpoint__factory"];
}

// ../ui-lz-sdk/dist/evm/contracts/index.js
function $$cjs_default$$49(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global49 !== "undefined" && global49 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global49 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global49 !== "undefined" && global49 || typeof globalThis !== "undefined" && globalThis || {};
var exports66 = {};
var module66 = {
  get exports() {
    return exports66;
  },
  set exports(value) {
    exports66 = value;
  }
};
var __createBinding6 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __setModuleDefault = Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
};
var __importStar = function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding6(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports66, "__esModule", { value: true });
exports66.UltraLightNode__factory = exports66.Relayer__factory = exports66.Endpoint__factory = exports66.factories = void 0;
exports66.factories = __importStar($$cjs_default$$49(typeof factories_exports !== "undefined" ? factories_exports : {}));
var Endpoint__factory_12 = $$cjs_default$$49(typeof Endpoint_factory_exports !== "undefined" ? Endpoint_factory_exports : {});
Object.defineProperty(exports66, "Endpoint__factory", { enumerable: true, get: function() {
  return Endpoint__factory_12.Endpoint__factory;
} });
var Relayer__factory_12 = $$cjs_default$$49(typeof Relayer_factory_exports !== "undefined" ? Relayer_factory_exports : {});
Object.defineProperty(exports66, "Relayer__factory", { enumerable: true, get: function() {
  return Relayer__factory_12.Relayer__factory;
} });
var UltraLightNode__factory_12 = $$cjs_default$$49(typeof UltraLightNode_factory_exports !== "undefined" ? UltraLightNode_factory_exports : {});
Object.defineProperty(exports66, "UltraLightNode__factory", { enumerable: true, get: function() {
  return UltraLightNode__factory_12.UltraLightNode__factory;
} });
var __export050;
var __export129;
var __export217;
var __export310;
if (Object.isExtensible(module66.exports)) {
  __export050 = module66.exports["UltraLightNode__factory"];
  __export129 = module66.exports["Relayer__factory"];
  __export217 = module66.exports["Endpoint__factory"];
  __export310 = module66.exports["factories"];
}
function $$cjs_default$$50(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global50 !== "undefined" && global50 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global50 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global50 !== "undefined" && global50 || typeof globalThis !== "undefined" && globalThis || {};
var exports67 = {};
var module67 = {
  get exports() {
    return exports67;
  },
  set exports(value) {
    exports67 = value;
  }
};
var __importDefault11 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports67, "__esModule", { value: true });
exports67.DefaultAirdropProvider__evm__erc20_approve_transfer = void 0;
var ui_core_14 = $$cjs_default$$50(typeof dist_exports !== "undefined" ? dist_exports : {});
var ui_ethers_1 = $$cjs_default$$50(typeof dist_exports2 !== "undefined" ? dist_exports2 : {});
var assert_16 = __importDefault11($$cjs_default$$50(typeof assert6 !== "undefined" ? assert6 : {}));
var DefaultAirdropProvider__evm__erc20_approve_transfer = class {
  constructor(providerFactory2) {
    this.providerFactory = providerFactory2;
    this.estimateApproveTransferGasAmount = async (dstChainId) => {
      (0, assert_16.default)((0, ui_core_14.isEvmChainId)(dstChainId));
      const approve2 = this.getGasForERC20Approve(dstChainId);
      const transfer = this.getGasForERC20Transfer(dstChainId);
      const native = (0, ui_core_14.getNativeCurrency)(dstChainId);
      const zero = ui_core_14.CurrencyAmount.fromRawAmount(native, 0);
      if (!approve2)
        return zero;
      if (!transfer)
        return zero;
      const sum = approve2 + transfer;
      const gasPrice = await this.getGasPrice(dstChainId);
      const wei = gasPrice.mul(sum);
      return ui_core_14.CurrencyAmount.fromRawAmount(native, wei.mul(130).div(100).toHexString());
    };
  }
  supports(dstChainId) {
    return (0, ui_core_14.isEvmChainId)(dstChainId);
  }
  estimateDefaultAirdrop(dstChainId) {
    return this.estimateApproveTransferGasAmount(dstChainId);
  }
  getGasForERC20Approve(chainId) {
    return ui_ethers_1.ERC20_APPROVE[chainId];
  }
  getGasForERC20Transfer(chainId) {
    return ui_ethers_1.ERC20_TRANSFER[chainId];
  }
  async getGasPrice(chainId) {
    const provider = this.providerFactory(chainId);
    const gasPrice = await provider.getGasPrice();
    return gasPrice;
  }
};
exports67.DefaultAirdropProvider__evm__erc20_approve_transfer = DefaultAirdropProvider__evm__erc20_approve_transfer;
var __export051;
if (Object.isExtensible(module67.exports)) {
  __export051 = module67.exports["DefaultAirdropProvider__evm__erc20_approve_transfer"];
}
function $$cjs_default$$51(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global51 !== "undefined" && global51 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global51 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global51 !== "undefined" && global51 || typeof globalThis !== "undefined" && globalThis || {};
var exports68 = {};
var module68 = {
  get exports() {
    return exports68;
  },
  set exports(value) {
    exports68 = value;
  }
};
Object.defineProperty(exports68, "__esModule", { value: true });
exports68.DstConfigProvider__evm = void 0;
var lz_sdk_110 = $$cjs_default$$51(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var ui_core_15 = $$cjs_default$$51(typeof dist_exports !== "undefined" ? dist_exports : {});
var contracts_1 = $$cjs_default$$51(typeof contracts_exports !== "undefined" ? contracts_exports : {});
var DstConfigProvider__evm = class {
  constructor(providerFactory2) {
    this.providerFactory = providerFactory2;
  }
  async dstPriceLookup(srcChainId, dstChainId) {
    const native = (0, ui_core_15.getNativeCurrency)(dstChainId);
    const relayer = this.getRelayer(srcChainId);
    const { dstPriceRatio, dstGasPriceInWei } = await relayer.dstPriceLookup((0, ui_core_15.toULNv2)(dstChainId));
    const price = {
      dstGasPriceInWei: (0, ui_core_15.toCurrencyAmount)(native, dstGasPriceInWei),
      dstPriceRatio: new ui_core_15.Fraction(dstPriceRatio.toHexString(), 1)
    };
    return price;
  }
  async dstConfigLookup(srcChainId, dstChainId, outboundProofType = (0, ui_core_15.isEvmChainId)(dstChainId) ? 1 : 2) {
    const relayer = this.getRelayer(srcChainId);
    const native = (0, ui_core_15.getNativeCurrency)(dstChainId);
    const { dstNativeAmtCap, baseGas, gasPerByte } = await relayer.dstConfigLookup((0, ui_core_15.toULNv2)(dstChainId), outboundProofType);
    const config = {
      dstNativeAmtCap: (0, ui_core_15.toCurrencyAmount)(native, dstNativeAmtCap),
      baseGas: new ui_core_15.Fraction(baseGas.toHexString(), 1),
      gasPerByte: new ui_core_15.Fraction(gasPerByte.toHexString(), 1)
    };
    return config;
  }
  getRelayer(srcChainId) {
    const relayer = contracts_1.Relayer__factory.connect(getRelayerAddress(srcChainId), this.providerFactory(srcChainId));
    return relayer;
  }
  isApplicable(srcChainId) {
    return (0, ui_core_15.isEvmChainId)(srcChainId);
  }
};
exports68.DstConfigProvider__evm = DstConfigProvider__evm;
function getRelayerAddress(chainId) {
  const chainKey = (0, ui_core_15.getChainKey)(chainId);
  const address = lz_sdk_110.LZ_RELAYER_V2[chainKey];
  if (!address)
    throw new Error(`No LZ_RELAYER_V2 for ${chainId}`);
  return address;
}
var __export052;
if (Object.isExtensible(module68.exports)) {
  __export052 = module68.exports["DstConfigProvider__evm"];
}

// src/sdk/DefaultAirdropProvider__evm.ts
var DefaultAirdropProvider__evm = class extends __export051 {
};

// ../ui-erc20-sdk/dist/index.js
var dist_exports4 = {};
__export(dist_exports4, {
  BalanceProvider__evm: () => __export056,
  ERC20: () => __export131,
  ERC20__api: () => __export058,
  ERC20__factory: () => __export054,
  default: () => dist_default4
});

// ../ui-erc20-sdk/dist/BalanceProvider__evm.js
var BalanceProvider_evm_exports = {};
__export(BalanceProvider_evm_exports, {
  BalanceProvider__evm: () => __export056
});

// ../ui-erc20-sdk/dist/contracts/index.js
var contracts_exports2 = {};
__export(contracts_exports2, {
  ERC20__factory: () => __export055,
  factories: () => __export130
});

// ../ui-erc20-sdk/dist/contracts/factories/ERC20__factory.js
var ERC20_factory_exports = {};
__export(ERC20_factory_exports, {
  ERC20__factory: () => __export053
});
function $$cjs_default$$52(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global52 !== "undefined" && global52 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global52 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global52 !== "undefined" && global52 || typeof globalThis !== "undefined" && globalThis || {};
var exports69 = {};
var module69 = {
  get exports() {
    return exports69;
  },
  set exports(value) {
    exports69 = value;
  }
};
Object.defineProperty(exports69, "__esModule", { value: true });
exports69.ERC20__factory = void 0;
var ethers_112 = $$cjs_default$$52(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var _abi4 = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
];
var ERC20__factory = class {
  static createInterface() {
    return new ethers_112.utils.Interface(_abi4);
  }
  static connect(address, signerOrProvider) {
    return new ethers_112.Contract(address, _abi4, signerOrProvider);
  }
};
exports69.ERC20__factory = ERC20__factory;
ERC20__factory.abi = _abi4;
var __export053;
if (Object.isExtensible(module69.exports)) {
  __export053 = module69.exports["ERC20__factory"];
}

// ../ui-erc20-sdk/dist/contracts/factories/index.js
var factories_exports2 = {};
__export(factories_exports2, {
  ERC20__factory: () => __export054
});
function $$cjs_default$$53(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global53 !== "undefined" && global53 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global53 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global53 !== "undefined" && global53 || typeof globalThis !== "undefined" && globalThis || {};
var exports70 = {};
var module70 = {
  get exports() {
    return exports70;
  },
  set exports(value) {
    exports70 = value;
  }
};
Object.defineProperty(exports70, "__esModule", { value: true });
exports70.ERC20__factory = void 0;
var ERC20__factory_1 = $$cjs_default$$53(typeof ERC20_factory_exports !== "undefined" ? ERC20_factory_exports : {});
Object.defineProperty(exports70, "ERC20__factory", { enumerable: true, get: function() {
  return ERC20__factory_1.ERC20__factory;
} });
var __export054;
if (Object.isExtensible(module70.exports)) {
  __export054 = module70.exports["ERC20__factory"];
}

// ../ui-erc20-sdk/dist/contracts/index.js
function $$cjs_default$$54(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global54 !== "undefined" && global54 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global54 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global54 !== "undefined" && global54 || typeof globalThis !== "undefined" && globalThis || {};
var exports71 = {};
var module71 = {
  get exports() {
    return exports71;
  },
  set exports(value) {
    exports71 = value;
  }
};
var __createBinding7 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __setModuleDefault2 = Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
};
var __importStar2 = function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding7(result, mod, k);
  }
  __setModuleDefault2(result, mod);
  return result;
};
Object.defineProperty(exports71, "__esModule", { value: true });
exports71.ERC20__factory = exports71.factories = void 0;
exports71.factories = __importStar2($$cjs_default$$54(typeof factories_exports2 !== "undefined" ? factories_exports2 : {}));
var ERC20__factory_12 = $$cjs_default$$54(typeof ERC20_factory_exports !== "undefined" ? ERC20_factory_exports : {});
Object.defineProperty(exports71, "ERC20__factory", { enumerable: true, get: function() {
  return ERC20__factory_12.ERC20__factory;
} });
var __export055;
var __export130;
if (Object.isExtensible(module71.exports)) {
  __export055 = module71.exports["ERC20__factory"];
  __export130 = module71.exports["factories"];
}
function $$cjs_default$$55(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global55 !== "undefined" && global55 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global55 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global55 !== "undefined" && global55 || typeof globalThis !== "undefined" && globalThis || {};
var exports72 = {};
var module72 = {
  get exports() {
    return exports72;
  },
  set exports(value) {
    exports72 = value;
  }
};
var __importDefault12 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports72, "__esModule", { value: true });
exports72.BalanceProvider__evm = void 0;
var ui_core_16 = $$cjs_default$$55(typeof dist_exports !== "undefined" ? dist_exports : {});
var assert_17 = __importDefault12($$cjs_default$$55(typeof assert6 !== "undefined" ? assert6 : {}));
var contracts_12 = $$cjs_default$$55(typeof contracts_exports2 !== "undefined" ? contracts_exports2 : {});
var BalanceProvider__evm = class {
  constructor(providerFactory2) {
    this.providerFactory = providerFactory2;
  }
  supports(token) {
    if (!(0, ui_core_16.isEvmChainId)(token.chainId))
      return false;
    return true;
  }
  getBalance(token, address) {
    if ((0, ui_core_16.isCoin)(token))
      return this.getNativeBalance(token, address);
    if ((0, ui_core_16.isToken)(token))
      return this.getErc20Balance(token, address);
    throw new Error("Invalid token");
  }
  async getNativeBalance(token, address) {
    (0, assert_17.default)((0, ui_core_16.isEvmAddress)(address), "Non EVM address");
    (0, assert_17.default)((0, ui_core_16.isCoin)(token));
    const balance = await this.providerFactory(token.chainId).getBalance(address);
    return (0, ui_core_16.toCurrencyAmount)(token, balance);
  }
  async getErc20Balance(token, address) {
    (0, assert_17.default)((0, ui_core_16.isEvmAddress)(address), "Non EVM address");
    (0, assert_17.default)((0, ui_core_16.isToken)(token));
    const erc20 = contracts_12.ERC20__factory.connect(token.address, this.providerFactory(token.chainId));
    const balance = await erc20.balanceOf(address);
    return (0, ui_core_16.toCurrencyAmount)(token, balance);
  }
};
exports72.BalanceProvider__evm = BalanceProvider__evm;
var __export056;
if (Object.isExtensible(module72.exports)) {
  __export056 = module72.exports["BalanceProvider__evm"];
}

// ../ui-erc20-sdk/dist/ERC20.js
var ERC20_exports = {};
__export(ERC20_exports, {
  ERC20: () => __export131,
  ERC20__api: () => __export058
});

// ../../node_modules/p-memoize/index.js
var p_memoize_exports = {};
__export(p_memoize_exports, {
  clear: () => __export057,
  default: () => p_memoize_default
});

// ../../node_modules/p-settle/index.js
var p_settle_exports = {};
__export(p_settle_exports, {
  default: () => p_settle_default
});

// ../../node_modules/p-settle/node_modules/p-limit/index.js
var p_limit_exports = {};
__export(p_limit_exports, {
  default: () => p_limit_default
});

// ../../node_modules/p-try/index.js
var p_try_exports = {};
__export(p_try_exports, {
  default: () => p_try_default
});
var exports73 = {};
var module73 = {
  get exports() {
    return exports73;
  },
  set exports(value) {
    exports73 = value;
  }
};
var pTry = (fn, ...arguments_) => new Promise((resolve) => {
  resolve(fn(...arguments_));
});
module73.exports = pTry;
module73.exports.default = pTry;
var p_try_default = module73.exports;

// ../../node_modules/p-settle/node_modules/p-limit/index.js
function $$cjs_default$$56(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global56 !== "undefined" && global56 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global56 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global56 !== "undefined" && global56 || typeof globalThis !== "undefined" && globalThis || {};
var exports74 = {};
var module74 = {
  get exports() {
    return exports74;
  },
  set exports(value) {
    exports74 = value;
  }
};
var pTry2 = $$cjs_default$$56(typeof p_try_exports !== "undefined" ? p_try_exports : {});
var pLimit = (concurrency) => {
  if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
    return Promise.reject(new TypeError("Expected `concurrency` to be a number from 1 and up"));
  }
  const queue = [];
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.length > 0) {
      queue.shift()();
    }
  };
  const run = (fn, resolve, ...args) => {
    activeCount++;
    const result = pTry2(fn, ...args);
    resolve(result);
    result.then(next, next);
  };
  const enqueue = (fn, resolve, ...args) => {
    if (activeCount < concurrency) {
      run(fn, resolve, ...args);
    } else {
      queue.push(run.bind(null, fn, resolve, ...args));
    }
  };
  const generator = (fn, ...args) => new Promise((resolve) => enqueue(fn, resolve, ...args));
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.length
    },
    clearQueue: {
      value: () => {
        queue.length = 0;
      }
    }
  });
  return generator;
};
module74.exports = pLimit;
module74.exports.default = pLimit;
var p_limit_default = module74.exports;

// ../../node_modules/p-reflect/index.js
var p_reflect_exports = {};
__export(p_reflect_exports, {
  default: () => p_reflect_default
});
var exports75 = {};
var module75 = {
  get exports() {
    return exports75;
  },
  set exports(value) {
    exports75 = value;
  }
};
var pReflect = async (promise) => {
  try {
    const value = await promise;
    return {
      isFulfilled: true,
      isRejected: false,
      value
    };
  } catch (error) {
    return {
      isFulfilled: false,
      isRejected: true,
      reason: error
    };
  }
};
module75.exports = pReflect;
module75.exports.default = pReflect;
var p_reflect_default = module75.exports;

// ../../node_modules/p-settle/index.js
function $$cjs_default$$57(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global57 !== "undefined" && global57 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global57 = globalThis;
var exports76 = {};
var module76 = {
  get exports() {
    return exports76;
  },
  set exports(value) {
    exports76 = value;
  }
};
var pReflect2 = $$cjs_default$$57(typeof p_reflect_exports !== "undefined" ? p_reflect_exports : {});
var pLimit2 = $$cjs_default$$57(typeof p_limit_exports !== "undefined" ? p_limit_exports : {});
module76.exports = async (array, options = {}) => {
  const { concurrency = Infinity } = options;
  const limit = pLimit2(concurrency);
  return Promise.all(array.map((element) => {
    if (element && typeof element.then === "function") {
      return pReflect2(element);
    }
    if (typeof element === "function") {
      return pReflect2(limit(() => element()));
    }
    return pReflect2(Promise.resolve(element));
  }));
};
var p_settle_default = module76.exports;

// ../../node_modules/map-age-cleaner/dist/index.js
var dist_exports3 = {};
__export(dist_exports3, {
  default: () => dist_default3
});

// ../../node_modules/p-defer/index.js
var p_defer_exports = {};
__export(p_defer_exports, {
  default: () => p_defer_default
});
var exports77 = {};
var module77 = {
  get exports() {
    return exports77;
  },
  set exports(value) {
    exports77 = value;
  }
};
module77.exports = () => {
  const ret = {};
  ret.promise = new Promise((resolve, reject) => {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
};
var p_defer_default = module77.exports;

// ../../node_modules/map-age-cleaner/dist/index.js
function $$cjs_default$$58(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global58 !== "undefined" && global58 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global58 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global58 !== "undefined" && global58 || typeof globalThis !== "undefined" && globalThis || {};
var exports78 = {};
var module78 = {
  get exports() {
    return exports78;
  },
  set exports(value) {
    exports78 = value;
  }
};
var __awaiter7 = function(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : new P(function(resolve2) {
        resolve2(result.value);
      }).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault13 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports78, "__esModule", { value: true });
var p_defer_1 = __importDefault13($$cjs_default$$58(typeof p_defer_exports !== "undefined" ? p_defer_exports : {}));
function mapAgeCleaner(map, property = "maxAge") {
  let processingKey;
  let processingTimer;
  let processingDeferred;
  const cleanup = () => __awaiter7(this, void 0, void 0, function* () {
    if (processingKey !== void 0) {
      return;
    }
    const setupTimer = (item) => __awaiter7(this, void 0, void 0, function* () {
      processingDeferred = p_defer_1.default();
      const delay = item[1][property] - Date.now();
      if (delay <= 0) {
        map.delete(item[0]);
        processingDeferred.resolve();
        return;
      }
      processingKey = item[0];
      processingTimer = setTimeout(() => {
        map.delete(item[0]);
        if (processingDeferred) {
          processingDeferred.resolve();
        }
      }, delay);
      if (typeof processingTimer.unref === "function") {
        processingTimer.unref();
      }
      return processingDeferred.promise;
    });
    try {
      for (const entry of map) {
        yield setupTimer(entry);
      }
    } catch (_a) {
    }
    processingKey = void 0;
  });
  const reset = () => {
    processingKey = void 0;
    if (processingTimer !== void 0) {
      clearTimeout(processingTimer);
      processingTimer = void 0;
    }
    if (processingDeferred !== void 0) {
      processingDeferred.reject(void 0);
      processingDeferred = void 0;
    }
  };
  const originalSet = map.set.bind(map);
  map.set = (key, value) => {
    if (map.has(key)) {
      map.delete(key);
    }
    const result = originalSet(key, value);
    if (processingKey && processingKey === key) {
      reset();
    }
    cleanup();
    return result;
  };
  cleanup();
  return map;
}
exports78.default = mapAgeCleaner;
module78.exports = mapAgeCleaner;
module78.exports.default = mapAgeCleaner;
var dist_default3 = module78.exports != null && typeof module78.exports === "object" && "default" in module78.exports ? module78.exports.default : module78.exports;

// ../../node_modules/p-memoize/node_modules/mimic-fn/index.js
var mimic_fn_exports = {};
__export(mimic_fn_exports, {
  default: () => mimic_fn_default
});
var exports79 = {};
var module79 = {
  get exports() {
    return exports79;
  },
  set exports(value) {
    exports79 = value;
  }
};
var copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
var canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
var changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
var changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", __spreadProps(__spreadValues({}, toStringDescriptor), { value: newToString }));
};
var mimicFn = (to, from, { ignoreNonConfigurable = false } = {}) => {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
};
module79.exports = mimicFn;
var mimic_fn_default = module79.exports;

// ../../node_modules/p-memoize/index.js
function $$cjs_default$$59(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global59 !== "undefined" && global59 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global59 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global59 !== "undefined" && global59 || typeof globalThis !== "undefined" && globalThis || {};
var exports80 = {};
var module80 = {
  get exports() {
    return exports80;
  },
  set exports(value) {
    exports80 = value;
  }
};
var mimicFn2 = $$cjs_default$$59(typeof mimic_fn_exports !== "undefined" ? mimic_fn_exports : {});
var mapAgeCleaner2 = $$cjs_default$$59(typeof dist_exports3 !== "undefined" ? dist_exports3 : {});
var pSettle = $$cjs_default$$59(typeof p_settle_exports !== "undefined" ? p_settle_exports : {});
var cacheStore = /* @__PURE__ */ new WeakMap();
var pMemoize = (fn, _a = {}) => {
  var _b = _a, { cachePromiseRejection = false } = _b, options = __objRest(_b, ["cachePromiseRejection"]);
  const { maxAge, cacheKey } = options;
  const cache = options.cache || /* @__PURE__ */ new Map();
  if (Number.isSafeInteger(maxAge)) {
    mapAgeCleaner2(cache);
  } else if (typeof maxAge !== "undefined") {
    throw new TypeError("maxAge is not a safe integer.");
  }
  const memoized = async function(...arguments_) {
    const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
    const cacheItem = cache.get(key);
    if (cacheItem) {
      return cacheItem.data;
    }
    const promise = fn.apply(this, arguments_);
    cache.set(key, {
      data: promise,
      maxAge: 2 ** 31 - 1
    });
    const [{ reason }] = await pSettle([promise]);
    if (!cachePromiseRejection && reason) {
      cache.delete(key);
    } else if (maxAge) {
      cache.set(key, {
        data: promise,
        maxAge: Date.now() + maxAge
      });
    }
    return promise;
  };
  mimicFn2(memoized, fn);
  cacheStore.set(memoized, cache);
  return memoized;
};
module80.exports = pMemoize;
module80.exports.clear = (memoized) => {
  if (!cacheStore.has(memoized)) {
    throw new Error("Can't clear a function that was not memoized!");
  }
  const cache = cacheStore.get(memoized);
  if (typeof cache.clear !== "function") {
    throw new TypeError("The cache Map can't be cleared!");
  }
  cache.clear();
};
var __export057;
if (Object.isExtensible(module80.exports) && Object.keys(module80.exports).length === 1) {
  __export057 = module80.exports["clear"];
}
var p_memoize_default = module80.exports;

// ../ui-erc20-sdk/dist/ERC20.js
function $$cjs_default$$60(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global60 !== "undefined" && global60 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global60 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global60 !== "undefined" && global60 || typeof globalThis !== "undefined" && globalThis || {};
var exports81 = {};
var module81 = {
  get exports() {
    return exports81;
  },
  set exports(value) {
    exports81 = value;
  }
};
var __importDefault14 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports81, "__esModule", { value: true });
exports81.ERC20__api = exports81.ERC20 = void 0;
var ui_core_17 = $$cjs_default$$60(typeof dist_exports !== "undefined" ? dist_exports : {});
var ERC20__factory_13 = $$cjs_default$$60(typeof ERC20_factory_exports !== "undefined" ? ERC20_factory_exports : {});
var p_memoize_1 = __importDefault14($$cjs_default$$60(typeof p_memoize_exports !== "undefined" ? p_memoize_exports : {}));
var assert_18 = __importDefault14($$cjs_default$$60(typeof assert6 !== "undefined" ? assert6 : {}));
var lodash_13 = $$cjs_default$$60(typeof $cjs$lodash !== "undefined" ? $cjs$lodash : {});
var ERC20 = class {
  constructor(token, contract) {
    this.token = token;
    this.contract = contract;
  }
  async balanceOf(account) {
    const balance = await this.contract.balanceOf(account);
    return (0, ui_core_17.toCurrencyAmount)(await this.token, balance);
  }
  async allowance(owner, spender) {
    const amount = await this.contract.allowance(owner, spender);
    return (0, ui_core_17.toCurrencyAmount)(await this.token, amount);
  }
  async isApproved(amount, owner, spender) {
    (0, assert_18.default)(amount.currency.equals(this.token));
    const allowance = await this.allowance(owner, spender);
    if (allowance.lessThan(amount))
      return false;
    return true;
  }
  async approve(amount, spender) {
    (0, assert_18.default)(amount.currency.equals(this.token), "token");
    const { contract } = this;
    const tx = {
      async signAndSubmitTransaction(signer) {
        const response = await contract.connect(signer).approve(spender, (0, ui_core_17.toBigNumber)(amount));
        return {
          txHash: response.hash,
          async wait() {
            const receipt = await response.wait();
            return {
              txHash: receipt.transactionHash
            };
          }
        };
      },
      estimateGas: function(signer) {
        throw new Error("Function not implemented.");
      },
      estimateNative: function(signer) {
        throw new Error("Function not implemented.");
      }
    };
    return tx;
  }
};
exports81.ERC20 = ERC20;
async function getToken(chainId, address, provider) {
  const erc20 = ERC20__factory_13.ERC20__factory.connect(address, provider);
  const [symbol, decimals, name] = await Promise.all([
    erc20.symbol(),
    erc20.decimals(),
    erc20.name()
  ]);
  return new ui_core_17.Token(chainId, address, decimals, symbol, name);
}
var ERC20__api = class {
  constructor(providerFactory2) {
    this.providerFactory = providerFactory2;
    this.getToken = (0, p_memoize_1.default)(({ chainId, address }) => {
      return getToken(chainId, address, this.providerFactory(chainId));
    }, {
      cacheKey: ([{ chainId, address }]) => chainId + ":" + address.toLowerCase()
    });
  }
  forToken(currency) {
    (0, assert_18.default)((0, ui_core_17.isToken)(currency), "token");
    const provider = this.providerFactory(currency.chainId);
    const contract = ERC20__factory_13.ERC20__factory.connect(currency.address, provider);
    return new ERC20(currency, contract);
  }
  async getTransferEvents(chainId, txHash) {
    const provider = this.providerFactory(chainId);
    const receipt = await provider.getTransactionReceipt(txHash);
    const events = await Promise.all(receipt.logs.map((log) => this.tryParseTransferEvent(chainId, log)));
    return (0, lodash_13.compact)(events);
  }
  async tryParseTransferEvent(chainId, log) {
    const iface = ERC20__factory_13.ERC20__factory.createInterface();
    const event = iface.getEvent("Transfer");
    const topicHash = iface.getEventTopic(event);
    if (log.topics[0] !== topicHash)
      return void 0;
    try {
      const description = iface.parseLog(log);
      const tokenAddress = log.address;
      const token = await this.getToken({ chainId, address: tokenAddress });
      const value = (0, ui_core_17.toCurrencyAmount)(token, description.args.value);
      return {
        event: {
          name: event.name,
          namespace: "ERC20"
        },
        args: {
          from: description.args.from,
          to: description.args.to,
          value
        },
        address: tokenAddress,
        chainId
      };
    } catch (_a) {
    }
  }
};
exports81.ERC20__api = ERC20__api;
var __export058;
var __export131;
if (Object.isExtensible(module81.exports)) {
  __export058 = module81.exports["ERC20__api"];
  __export131 = module81.exports["ERC20"];
}

// ../ui-erc20-sdk/dist/index.js
function $$cjs_default$$61(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global61 !== "undefined" && global61 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global61 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global61 !== "undefined" && global61 || typeof globalThis !== "undefined" && globalThis || {};
var exports82 = {};
var module82 = {
  get exports() {
    return exports82;
  },
  set exports(value) {
    exports82 = value;
  }
};
var __createBinding8 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __exportStar6 = function(m, exports88) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports88, p))
      __createBinding8(exports88, m, p);
};
Object.defineProperty(exports82, "__esModule", { value: true });
__exportStar6($$cjs_default$$61(typeof ERC20_exports !== "undefined" ? ERC20_exports : {}), exports82);
__exportStar6($$cjs_default$$61(typeof factories_exports2 !== "undefined" ? factories_exports2 : {}), exports82);
__exportStar6($$cjs_default$$61(typeof BalanceProvider_evm_exports !== "undefined" ? BalanceProvider_evm_exports : {}), exports82);
var dist_default4 = module82.exports != null && typeof module82.exports === "object" && "default" in module82.exports ? module82.exports.default : module82.exports;

// ../ui-bridge-oft/dist/evm/contracts/index.js
var contracts_exports3 = {};
__export(contracts_exports3, {
  OFT__factory: () => __export133,
  ProxyOFT__factory: () => __export062,
  factories: () => __export218
});

// ../ui-bridge-oft/dist/evm/contracts/factories/ProxyOFT__factory.js
var ProxyOFT_factory_exports = {};
__export(ProxyOFT_factory_exports, {
  ProxyOFT__factory: () => __export059
});
function $$cjs_default$$62(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global62 !== "undefined" && global62 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global62 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global62 !== "undefined" && global62 || typeof globalThis !== "undefined" && globalThis || {};
var exports83 = {};
var module83 = {
  get exports() {
    return exports83;
  },
  set exports(value) {
    exports83 = value;
  }
};
Object.defineProperty(exports83, "__esModule", { value: true });
exports83.ProxyOFT__factory = void 0;
var ethers_113 = $$cjs_default$$62(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var _abi5 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "CallOFTReceivedSuccess",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes"
      }
    ],
    name: "MessageFailed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "NonContractAddress",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "ReceiveFromChain",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_payloadHash",
        type: "bytes32"
      }
    ],
    name: "RetryMessageSuccess",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "SendToChain",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetDefaultFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "dstchainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeOwner",
        type: "address"
      }
    ],
    name: "SetFeeOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_type",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minDstGas",
        type: "uint256"
      }
    ],
    name: "SetMinDstGas",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "precrime",
        type: "address"
      }
    ],
    name: "SetPrecrime",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_path",
        type: "bytes"
      }
    ],
    name: "SetTrustedRemote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
      }
    ],
    name: "SetTrustedRemoteAddress",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_useCustomAdapterParams",
        type: "bool"
      }
    ],
    name: "SetUseCustomAdapterParams",
    type: "event"
  },
  {
    inputs: [],
    name: "BP_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "NO_EXTRA_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PT_SEND",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PT_SEND_AND_CALL",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes32",
        name: "_from",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasForCall",
        type: "uint256"
      }
    ],
    name: "callOnOFTReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "chainIdToFeeBps",
    outputs: [
      {
        internalType: "uint16",
        name: "feeBP",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "circulatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "creditedPackets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultFeeBp",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateSendAndCallFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateSendFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "failedMessages",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feeOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      }
    ],
    name: "getConfig",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      }
    ],
    name: "getTrustedRemoteAddress",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "isTrustedRemote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lzEndpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpoint",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "minDstGasLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "nonblockingLzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "outboundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "precrime",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "quoteOFTFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "retryMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_config",
        type: "bytes"
      }
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setDefaultFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool"
      },
      {
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeOwner",
        type: "address"
      }
    ],
    name: "setFeeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_packetType",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_minGas",
        type: "uint256"
      }
    ],
    name: "setMinDstGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_precrime",
        type: "address"
      }
    ],
    name: "setPrecrime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      }
    ],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      }
    ],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_path",
        type: "bytes"
      }
    ],
    name: "setTrustedRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
      }
    ],
    name: "setTrustedRemoteAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_useCustomAdapterParams",
        type: "bool"
      }
    ],
    name: "setUseCustomAdapterParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "sharedDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "trustedRemoteLookup",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "useCustomAdapterParams",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var ProxyOFT__factory = class {
  static createInterface() {
    return new ethers_113.utils.Interface(_abi5);
  }
  static connect(address, signerOrProvider) {
    return new ethers_113.Contract(address, _abi5, signerOrProvider);
  }
};
exports83.ProxyOFT__factory = ProxyOFT__factory;
ProxyOFT__factory.abi = _abi5;
var __export059;
if (Object.isExtensible(module83.exports)) {
  __export059 = module83.exports["ProxyOFT__factory"];
}

// ../ui-bridge-oft/dist/evm/contracts/factories/OFT__factory.js
var OFT_factory_exports = {};
__export(OFT_factory_exports, {
  OFT__factory: () => __export060
});
function $$cjs_default$$63(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global63 !== "undefined" && global63 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global63 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global63 !== "undefined" && global63 || typeof globalThis !== "undefined" && globalThis || {};
var exports84 = {};
var module84 = {
  get exports() {
    return exports84;
  },
  set exports(value) {
    exports84 = value;
  }
};
Object.defineProperty(exports84, "__esModule", { value: true });
exports84.OFT__factory = void 0;
var ethers_114 = $$cjs_default$$63(typeof $cjs$ethers !== "undefined" ? $cjs$ethers : {});
var _abi6 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "CallOFTReceivedSuccess",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes"
      }
    ],
    name: "MessageFailed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "NonContractAddress",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "ReceiveFromChain",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_payloadHash",
        type: "bytes32"
      }
    ],
    name: "RetryMessageSuccess",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "SendToChain",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetDefaultFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "dstchainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeBp",
        type: "uint16"
      }
    ],
    name: "SetFeeBp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeOwner",
        type: "address"
      }
    ],
    name: "SetFeeOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "_type",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_minDstGas",
        type: "uint256"
      }
    ],
    name: "SetMinDstGas",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "precrime",
        type: "address"
      }
    ],
    name: "SetPrecrime",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_path",
        type: "bytes"
      }
    ],
    name: "SetTrustedRemote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
      }
    ],
    name: "SetTrustedRemoteAddress",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_useCustomAdapterParams",
        type: "bool"
      }
    ],
    name: "SetUseCustomAdapterParams",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "BP_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "NO_EXTRA_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PT_SEND",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PT_SEND_AND_CALL",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes32",
        name: "_from",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_gasForCall",
        type: "uint256"
      }
    ],
    name: "callOnOFTReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "chainIdToFeeBps",
    outputs: [
      {
        internalType: "uint16",
        name: "feeBP",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "circulatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "creditedPackets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultFeeBp",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateSendAndCallFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes"
      }
    ],
    name: "estimateSendFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "failedMessages",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feeOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "forceResumeReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      }
    ],
    name: "getConfig",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      }
    ],
    name: "getTrustedRemoteAddress",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      }
    ],
    name: "isTrustedRemote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lzEndpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpoint",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "minDstGasLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "nonblockingLzReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "precrime",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "quoteOFTFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      }
    ],
    name: "retryMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_dstGasForCall",
        type: "uint64"
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bytes32",
        name: "_toAddress",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address"
          },
          {
            internalType: "address",
            name: "zroPaymentAddress",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "adapterParams",
            type: "bytes"
          }
        ],
        internalType: "struct ICommonOFT.LzCallParams",
        name: "_callParams",
        type: "tuple"
      }
    ],
    name: "sendFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_configType",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_config",
        type: "bytes"
      }
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setDefaultFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool"
      },
      {
        internalType: "uint16",
        name: "_feeBp",
        type: "uint16"
      }
    ],
    name: "setFeeBp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeOwner",
        type: "address"
      }
    ],
    name: "setFeeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "_packetType",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_minGas",
        type: "uint256"
      }
    ],
    name: "setMinDstGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_precrime",
        type: "address"
      }
    ],
    name: "setPrecrime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      }
    ],
    name: "setReceiveVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_version",
        type: "uint16"
      }
    ],
    name: "setSendVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_srcChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_path",
        type: "bytes"
      }
    ],
    name: "setTrustedRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_remoteChainId",
        type: "uint16"
      },
      {
        internalType: "bytes",
        name: "_remoteAddress",
        type: "bytes"
      }
    ],
    name: "setTrustedRemoteAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_useCustomAdapterParams",
        type: "bool"
      }
    ],
    name: "setUseCustomAdapterParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "sharedDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "trustedRemoteLookup",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "useCustomAdapterParams",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var OFT__factory = class {
  static createInterface() {
    return new ethers_114.utils.Interface(_abi6);
  }
  static connect(address, signerOrProvider) {
    return new ethers_114.Contract(address, _abi6, signerOrProvider);
  }
};
exports84.OFT__factory = OFT__factory;
OFT__factory.abi = _abi6;
var __export060;
if (Object.isExtensible(module84.exports)) {
  __export060 = module84.exports["OFT__factory"];
}

// ../ui-bridge-oft/dist/evm/contracts/factories/index.js
var factories_exports3 = {};
__export(factories_exports3, {
  OFT__factory: () => __export132,
  ProxyOFT__factory: () => __export061
});
function $$cjs_default$$64(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global64 !== "undefined" && global64 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global64 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global64 !== "undefined" && global64 || typeof globalThis !== "undefined" && globalThis || {};
var exports85 = {};
var module85 = {
  get exports() {
    return exports85;
  },
  set exports(value) {
    exports85 = value;
  }
};
Object.defineProperty(exports85, "__esModule", { value: true });
exports85.ProxyOFT__factory = exports85.OFT__factory = void 0;
var OFT__factory_1 = $$cjs_default$$64(typeof OFT_factory_exports !== "undefined" ? OFT_factory_exports : {});
Object.defineProperty(exports85, "OFT__factory", { enumerable: true, get: function() {
  return OFT__factory_1.OFT__factory;
} });
var ProxyOFT__factory_1 = $$cjs_default$$64(typeof ProxyOFT_factory_exports !== "undefined" ? ProxyOFT_factory_exports : {});
Object.defineProperty(exports85, "ProxyOFT__factory", { enumerable: true, get: function() {
  return ProxyOFT__factory_1.ProxyOFT__factory;
} });
var __export061;
var __export132;
if (Object.isExtensible(module85.exports)) {
  __export061 = module85.exports["ProxyOFT__factory"];
  __export132 = module85.exports["OFT__factory"];
}

// ../ui-bridge-oft/dist/evm/contracts/index.js
function $$cjs_default$$65(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global65 !== "undefined" && global65 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global65 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global65 !== "undefined" && global65 || typeof globalThis !== "undefined" && globalThis || {};
var exports86 = {};
var module86 = {
  get exports() {
    return exports86;
  },
  set exports(value) {
    exports86 = value;
  }
};
var __createBinding9 = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
};
var __setModuleDefault3 = Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
};
var __importStar3 = function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding9(result, mod, k);
  }
  __setModuleDefault3(result, mod);
  return result;
};
Object.defineProperty(exports86, "__esModule", { value: true });
exports86.ProxyOFT__factory = exports86.OFT__factory = exports86.factories = void 0;
exports86.factories = __importStar3($$cjs_default$$65(typeof factories_exports3 !== "undefined" ? factories_exports3 : {}));
var OFT__factory_12 = $$cjs_default$$65(typeof OFT_factory_exports !== "undefined" ? OFT_factory_exports : {});
Object.defineProperty(exports86, "OFT__factory", { enumerable: true, get: function() {
  return OFT__factory_12.OFT__factory;
} });
var ProxyOFT__factory_12 = $$cjs_default$$65(typeof ProxyOFT_factory_exports !== "undefined" ? ProxyOFT_factory_exports : {});
Object.defineProperty(exports86, "ProxyOFT__factory", { enumerable: true, get: function() {
  return ProxyOFT__factory_12.ProxyOFT__factory;
} });
var __export062;
var __export133;
var __export218;
if (Object.isExtensible(module86.exports)) {
  __export062 = module86.exports["ProxyOFT__factory"];
  __export133 = module86.exports["OFT__factory"];
  __export218 = module86.exports["factories"];
}
function $$cjs_default$$66(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global66 !== "undefined" && global66 || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global66 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global66 !== "undefined" && global66 || typeof globalThis !== "undefined" && globalThis || {};
var exports87 = {};
var module87 = {
  get exports() {
    return exports87;
  },
  set exports(value) {
    exports87 = value;
  }
};
var __importDefault15 = function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports87, "__esModule", { value: true });
exports87.OftBridge__evm = void 0;
var lz_sdk_111 = $$cjs_default$$66(typeof $cjs$_layerzerolabs_lz_sdk !== "undefined" ? $cjs$_layerzerolabs_lz_sdk : {});
var ui_core_18 = $$cjs_default$$66(typeof dist_exports !== "undefined" ? dist_exports : {});
var ui_erc20_sdk_1 = $$cjs_default$$66(typeof dist_exports4 !== "undefined" ? dist_exports4 : {});
var assert_19 = __importDefault15($$cjs_default$$66(typeof assert6 !== "undefined" ? assert6 : {}));
var ui_ethers_12 = $$cjs_default$$66(typeof dist_exports2 !== "undefined" ? dist_exports2 : {});
var contracts_13 = $$cjs_default$$66(typeof contracts_exports3 !== "undefined" ? contracts_exports3 : {});
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["PT_SEND"] = 0] = "PT_SEND";
  PacketType2[PacketType2["PT_SEND_AND_CALL"] = 1] = "PT_SEND_AND_CALL";
})(PacketType || (PacketType = {}));
var OftBridge__evm = class {
  constructor(providerFactory2, config) {
    this.providerFactory = providerFactory2;
    this.config = config;
    this.erc20 = new ui_erc20_sdk_1.ERC20__api(providerFactory2);
  }
  async isApproved(amount, address) {
    const currency = amount.currency;
    const proxy = this.findProxy(currency);
    if (!proxy)
      return true;
    (0, assert_19.default)((0, ui_core_18.isToken)(currency));
    return this.erc20.forToken(currency).isApproved(amount, address, proxy.address);
  }
  async approve(amount) {
    const proxy = this.findProxy(amount.currency);
    (0, assert_19.default)(proxy, "No proxy");
    return this.erc20.forToken(amount.currency).approve(amount, proxy.address);
  }
  supports(srcCurrency, dstCurrency) {
    if (!(0, ui_core_18.isEvmChainId)(srcCurrency.chainId))
      return false;
    if (!this.config.tokens.some((token) => token.equals(srcCurrency)))
      return false;
    if (dstCurrency) {
      if (!this.config.tokens.some((token) => token.equals(dstCurrency)))
        return false;
    }
    return true;
  }
  async isRegistered(currency, address) {
    return true;
  }
  async getUnclaimed(currency, address) {
    return ui_core_18.CurrencyAmount.fromRawAmount(currency, 0);
  }
  claim(currency) {
    throw new Error("Method not supported.");
  }
  register(currency) {
    throw new Error("Method not supported.");
  }
  async transfer(input) {
    const contract = this.getContract(input.srcCurrency);
    const adapterParams = this.buildLayerZeroTxParams(input.adapterParams);
    const amountLD = input.amount;
    const minAmountLD = (0, ui_core_18.castCurrencyAmountUnsafe)(
      input.minAmount,
      input.dstCurrency
    );
    const value = (0, ui_core_18.toBigNumber)(input.fee.nativeFee);
    const dstAddress = (0, ui_core_18.convertToPaddedUint8Array)(input.dstAddress, 32);
    const callParams = {
      adapterParams,
      refundAddress: input.srcAddress,
      zroPaymentAddress: ui_ethers_12.ZERO_ADDRESS
    };
    const tx = {
      async signAndSubmitTransaction(signer) {
        const response = await contract.connect(signer).sendFrom(input.srcAddress, input.dstChainId, dstAddress, (0, ui_core_18.toBigNumber)(amountLD), (0, ui_core_18.toBigNumber)(minAmountLD), callParams, { value });
        const result = {
          txHash: response.hash,
          async wait() {
            const receipt = await response.wait();
            return {
              txHash: receipt.transactionHash
            };
          }
        };
        return result;
      },
      estimateGas: function(signer) {
        throw new Error("Function not implemented.");
      },
      estimateNative: function(signer) {
        throw new Error("Function not implemented.");
      }
    };
    return tx;
  }
  async getMessageFee(srcChainId, dstChainId, adapterParams) {
    const srcCurrency = this.config.tokens.find((token) => token.chainId === srcChainId);
    (0, assert_19.default)(srcCurrency, "srcCurrency");
    const native = (0, ui_core_18.getNativeCurrency)(srcChainId);
    const lzParams = this.buildLayerZeroTxParams(adapterParams);
    const dstAddress = ui_ethers_12.ONE_ADDRESS;
    const useZro = false;
    const amount = 0;
    const contract = this.getContract(srcCurrency);
    const response = await contract.estimateSendFee(dstChainId, (0, ui_core_18.convertToPaddedUint8Array)(dstAddress, 32), amount, useZro, lzParams);
    const fee = {
      nativeFee: (0, ui_core_18.toCurrencyAmount)(native, response.nativeFee),
      zroFee: (0, ui_core_18.toCurrencyAmount)(native, response.zroFee)
    };
    return fee;
  }
  async getExtraGas(srcChainId, dstChainId) {
    const srcCurrency = this.config.tokens.find((token) => token.chainId === srcChainId);
    (0, assert_19.default)(srcCurrency, "srcCurrency");
    const contract = this.getContract(srcCurrency);
    const packetType = PacketType.PT_SEND;
    const extraGas = await contract.minDstGasLookup(dstChainId, packetType);
    return extraGas.toNumber() || (dstChainId === lz_sdk_111.ChainId.ARBITRUM ? 3e6 : (0, ui_core_18.isAptosChainId)(dstChainId) ? 1e4 : 25e4);
  }
  async getOutput(inputAmount, dstCurrency) {
    const fee = await this.getBridgeFee(inputAmount, dstCurrency.chainId);
    const outputAmountLD = inputAmount.subtract(fee);
    const outputAmountRD = (0, ui_core_18.castCurrencyAmountUnsafe)(outputAmountLD, dstCurrency);
    return {
      fee,
      amount: outputAmountRD
    };
  }
  async getBridgeFee(inputAmount, dstChainId) {
    const contract = this.getContract(inputAmount.currency);
    const fee = await contract.quoteOFTFee(dstChainId, (0, ui_core_18.toBigNumber)(inputAmount));
    return (0, ui_core_18.toCurrencyAmount)(inputAmount.currency, fee);
  }
  async getLimit(srcCurrency, dstCurrency) {
    return ui_core_18.CurrencyAmount.fromRawAmount(srcCurrency, ui_core_18.MaxUint256);
  }
  getContract(srcCurrency) {
    (0, assert_19.default)((0, ui_core_18.isToken)(srcCurrency), "token");
    const proxy = this.findProxy(srcCurrency);
    const provider = this.providerFactory(srcCurrency.chainId);
    const contract = proxy ? contracts_13.ProxyOFT__factory.connect(proxy.address, provider) : contracts_13.OFT__factory.connect(srcCurrency.address, provider);
    return contract;
  }
  findProxy(token) {
    (0, assert_19.default)((0, ui_core_18.isToken)(token), "token");
    return this.config.proxy.find((proxy) => proxy.chainId === token.chainId);
  }
  buildLayerZeroTxParams(adapterParams) {
    return adapterParams.serialize();
  }
};
exports87.OftBridge__evm = OftBridge__evm;
var __export063;
if (Object.isExtensible(module87.exports)) {
  __export063 = module87.exports["OftBridge__evm"];
}
async function mint(amount) {
  var _a;
  const proxyOFT = bridgeStore.proxyOFT.at(0);
  assert6__default(proxyOFT);
  const chainId = proxyOFT.chainId;
  await switchChain(chainId);
  const signer = (_a = walletStore.evm) == null ? void 0 : _a.signer;
  assert6__default(signer);
  const token = bridgeStore.tokens.find((i) => i.chainId === chainId);
  const iface = new $cjs$ethers.utils.Interface([
    "function mint(address account, uint256 amount) external"
  ]);
  const contract = new $cjs$ethers.Contract(token.address, iface, signer);
  const to = await signer.getAddress();
  const currencyAmount = __export113(token, String(amount));
  const response = await contract.mint(to, __export1(currencyAmount));
  await response.wait();
  bridgeStore.updateBalances();
}
function bootstrap(config, adapters) {
  var _a;
  if (adapters.evm)
    setEvmAdapter(adapters.evm);
  if (adapters.aptos)
    setAptosAdapter(adapters.aptos);
  bridgeStore.setTokens(config.tokens);
  bridgeStore.setProxyOFT(config.proxy);
  const chains = config.tokens.map((token) => token.chainId);
  networkStore.setEnabledNetworks(chains);
  {
    __export033(__export44.LZ_LIGHT);
    const providerFactory2 = memoize((chainId) => __export213(chainId));
    __export040(providerFactory2);
    approveStore.setApi(new __export058(providerFactory2));
    const oft__evm = new __export063(providerFactory2, config);
    relayerStore.addProvider(new __export052(providerFactory2));
    balanceStore.addProvider(new __export056(providerFactory2));
    airdropStore.addProvider(new DefaultAirdropProvider__evm(providerFactory2));
    resourceStore.addProvider(new __export016());
    const strategy = new BridgeStrategy__oft_evm(oft__evm, bridgeStore, walletStore);
    bridgeStore.addStrategy(strategy);
    unclaimedStore.addStrategy(strategy);
  }
  if (typeof window !== "undefined") {
    (_a = adapters.aptos) == null ? void 0 : _a.eagerConnect();
    initOftStore();
    fiatStore.fetch();
    recordTransactions();
    recordUiStore();
    Object.assign(window, {
      mint,
      joeBridge: {
        bridge: bridgeStore,
        wallet: walletStore,
        history: transactionStore
      }
    });
  }
}
var themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F0F0FF",
      paper: "#fff",
      overlay: "rgba(0, 0, 0, 0.24)"
    },
    text: {
      primary: "#161617",
      secondary: "#AEAFC2"
    },
    primary: {
      main: "#7E87F7",
      light: "#6870E2",
      contrastText: "#F2F2F2"
    },
    secondary: {
      main: "#fff",
      light: "#E9E9FE",
      contrastText: "#242424"
    },
    divider: "#E2E8F0",
    info: {
      main: "#2F46F4"
    },
    success: {
      main: "#64BD9A",
      contrastText: "#fff"
    },
    error: {
      main: "#E87B72",
      contrastText: "#fff"
    },
    warning: {
      main: "#EEAC3C"
    }
  },
  shape: {
    borderRadius: 12
  },
  typography: {
    fontFamily: '"Averta CY", sans-serif',
    button: {
      textTransform: "none"
    }
  }
});
var themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#181824",
      paper: "#1F202E"
    },
    text: {
      primary: "#fff",
      secondary: "#7F7F9A"
    },
    primary: {
      main: "#7E87F7",
      light: "#6870E2",
      contrastText: "#fff"
    },
    secondary: {
      main: "#2F3145",
      light: "#464A65",
      contrastText: "#fff"
    },
    divider: "#43444F",
    info: {
      main: "#2F46F4"
    },
    success: {
      main: "#64BD9A",
      contrastText: "#fff"
    },
    error: {
      main: "#E87B72",
      contrastText: "#fff"
    },
    warning: {
      main: "#EEAC3C"
    }
  },
  shape: {
    borderRadius: 12
  },
  typography: {
    fontFamily: '"Averta CY", sans-serif',
    button: {
      textTransform: "none"
    }
  }
});
var HEIGHT2 = /* @__PURE__ */ ((HEIGHT3) => {
  HEIGHT3[HEIGHT3["md"] = 40] = "md";
  HEIGHT3[HEIGHT3["lg"] = 68] = "lg";
  return HEIGHT3;
})(HEIGHT2 || {});
var FONT_SIZE2 = /* @__PURE__ */ ((FONT_SIZE3) => {
  FONT_SIZE3[FONT_SIZE3["md"] = 14] = "md";
  FONT_SIZE3[FONT_SIZE3["lg"] = 24] = "lg";
  return FONT_SIZE3;
})(FONT_SIZE2 || {});
var ADORNMENT_PADDING = /* @__PURE__ */ ((ADORNMENT_PADDING2) => {
  ADORNMENT_PADDING2[ADORNMENT_PADDING2["md"] = 8] = "md";
  ADORNMENT_PADDING2[ADORNMENT_PADDING2["lg"] = 16] = "lg";
  return ADORNMENT_PADDING2;
})(ADORNMENT_PADDING || {});
var InputWrapper = styled("div", {
  name: "InputWrapper",
  label: "InputWrapper",
  shouldForwardProp: (props) => props !== "size" && props !== "sx"
})((_a) => {
  var _b = _a, { theme } = _b, props = __objRest(_b, ["theme"]);
  var _a2, _b2, _c;
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    height: HEIGHT2[(_a2 = props.size) != null ? _a2 : "md"],
    paddingLeft: ADORNMENT_PADDING[(_b2 = props.size) != null ? _b2 : "md"],
    paddingRight: ADORNMENT_PADDING[(_c = props.size) != null ? _c : "md"],
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    "&:hover": {},
    "&:focus-within": {
      borderColor: theme.palette.primary.main
    }
  };
});
var InputBase = styled("input", {
  shouldForwardProp: (props) => props !== "size" && props !== "startAdornment" && props !== "endAdornment",
  name: "Input"
})((props) => {
  var _a;
  return {
    backgroundColor: "transparent",
    color: props.theme.palette.text.primary,
    fontSize: FONT_SIZE2[(_a = props.size) != null ? _a : "md"],
    fontWeight: 600,
    border: 0,
    width: 0,
    flexBasis: 0,
    flexGrow: 1,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    "&:focus": {
      outline: 0
    },
    "&::-webkit-input-placeholder": {
      color: props.theme.palette.text.secondary
    }
  };
});
var StartAdornment = styled("div", { name: "InputStartAdornment" })(
  ({ size = "md" }) => ({
    marginRight: ADORNMENT_PADDING[size]
  })
);
var EndAdornment = styled("div", { name: "InputEndAdornment" })(
  ({ size = "md" }) => ({
    marginLeft: ADORNMENT_PADDING[size],
    display: "flex"
  })
);
var Error2 = styled("div", { name: "InputError" })(({ theme }) => ({
  fontSize: 12,
  lineHeight: "16px",
  color: theme.palette.error.main,
  textAlign: "right",
  width: "100%",
  marginTop: 4
}));
var Input = forwardRef((props, ref) => {
  const _a = props, { endAdornment, startAdornment, size, sx, error } = _a, inputProps = __objRest(_a, ["endAdornment", "startAdornment", "size", "sx", "error"]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(InputWrapper, { sx, size, children: [
      startAdornment && /* @__PURE__ */ jsx(StartAdornment, { size, children: startAdornment }),
      /* @__PURE__ */ jsx(
        InputBase,
        __spreadValues({
          type: "text",
          ref,
          startAdornment,
          endAdornment,
          size
        }, inputProps)
      ),
      endAdornment && /* @__PURE__ */ jsx(EndAdornment, { size, children: endAdornment })
    ] }),
    error && /* @__PURE__ */ jsx(Error2, { children: error })
  ] });
});
var SInputAdornment = styled("div", { name: "InputAdornment" })(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end"
}));
var InputAdornment = (props) => {
  return /* @__PURE__ */ jsx(SInputAdornment, { children: props.children });
};
var Group = styled("div", { name: "InputsGroup" })(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  "& [class*=SelectButton]": {
    borderRadius: 0
  },
  "& [class*=Input]": {
    border: 0,
    borderRadius: 0
  }
}));
var InputsGroup = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx(Group, { children });
};
var Top = styled("div", { name: "InputsGroupTop" })(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *:not(:first-child)": {
    marginLeft: 1
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row"
  }
}));
var InputsGroupTop = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx(Top, { children });
};
var InputsGroupBottom = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx("div", { children });
};
InputsGroup.Top = InputsGroupTop;
InputsGroup.Bottom = InputsGroupBottom;
var VARIANTS = {
  h1: { fontSize: 28, lineHeight: "36px" },
  h2: { fontSize: 24, lineHeight: "28px" },
  h3: { fontSize: 20, lineHeight: "24px" },
  p1: { fontSize: 16, lineHeight: "24px" },
  p2: { fontSize: 14, lineHeight: "20px", letterSpacing: "-0.02em" },
  p3: { fontSize: 12, lineHeight: "16px" },
  caption: { fontSize: 10, lineHeight: "16px", textTransform: "uppercase" }
};
function getVariant(variant) {
  if (variant) {
    return VARIANTS[variant];
  }
  return {};
}
var TextBase = styled(Box, {
  name: "Text",
  shouldForwardProp: (prop) => prop !== "bold"
})((props) => __spreadValues({
  color: props.color || props.theme.palette.text.primary,
  fontSize: props.size || 14,
  display: "inline",
  fontWeight: props.bold ? 500 : 400
}, getVariant(props.variant)));
var TextLink = styled("a", { name: "TextLink" })((props) => __spreadProps(__spreadValues({
  color: props.color || props.theme.palette.text.secondary,
  fontSize: props.size || 14,
  display: "inline",
  fontWeight: props.bold ? 500 : 400
}, getVariant(props.variant)), {
  cursor: "pointer",
  "&:hover": {
    color: props.theme.palette.text.primary
  }
}));
var Text = Object.assign(TextBase, {
  Link: TextLink
});
var Item = styled("div", { name: "DetailsItem" })(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "&:not(:last-of-type)": {
    marginBottom: theme.spacing(1)
  }
}));
var Key = styled("div", { name: "DetailsItemKey" })(({ theme }) => ({
  fontSize: 14,
  lineHeight: "21px",
  color: theme.palette.mode === "light" ? "#888D9B" : "#7F7F9A"
}));
var Value = styled("div", { name: "DetailsItemKey" })(({ theme }) => ({
  fontSize: 14,
  lineHeight: "21px",
  color: theme.palette.text.primary,
  fontWeight: 700
}));
var DetailsRoot = styled(Box, { name: "DetailsRoot" })(({ theme }) => ({
  border: theme.palette.mode === "light" ? "1px solid #D5D5F9" : "1px solid #2F3146",
  borderRadius: 6,
  padding: "18px 16px"
}));
var Details = (props) => {
  const { items, sx } = props;
  return /* @__PURE__ */ jsx(DetailsRoot, { sx, children: items.map(({ key, label, value }, index) => /* @__PURE__ */ jsxs(Item, { children: [
    /* @__PURE__ */ jsx(Key, { children: label != null ? label : key }),
    /* @__PURE__ */ jsx(Value, { children: value })
  ] }, key != null ? key : index)) });
};
var Item2 = styled("button", { name: "ListItem" })(
  ({ theme, disabled, overlay }) => __spreadValues(__spreadProps(__spreadValues({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    alignItems: "stretch",
    fontSize: "14px",
    backgroundColor: "transparent",
    border: "0",
    color: theme.palette.text.primary,
    width: "100%",
    padding: "10px 16px",
    maxWidth: "calc(100% - 32px)",
    margin: "0 auto",
    borderRadius: theme.shape.borderRadius,
    "&:first-of-type": {
      marginTop: 16
    },
    "&:hover": {
      backgroundColor: theme.palette.background.default
    },
    "&:focus": {
      backgroundColor: theme.palette.background.default,
      outline: 0
    }
  }, disabled ? { opacity: 0.5, cursor: "initial" } : { cursor: "pointer" }), {
    "&:not(:hover) > [class*=ListItemOverlay]": {
      display: "none"
    }
  }), overlay && {
    "&:hover > [class*=ListItemRight]": {
      display: "none"
    }
  })
);
var Left = styled("div", { name: "ListItemLeft" })(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: 1,
  justifyContent: "space-between"
}));
var Right = styled("div", { name: "ListItemRight", label: "ListItemRight" })(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between"
}));
var Center = styled("div", { name: "ListItemCenter" })(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: 1,
  justifyContent: "space-between"
}));
var Label = styled("div", { name: "ListItemLabel" })(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "12px",
  whiteSpace: "nowrap"
}));
var Value2 = styled("div", { name: "ListItemValue" })(({ theme }) => ({
  fontWeight: "700",
  letterSpacing: "-0.02em",
  lineHeight: "20px"
}));
var Start = styled("div", { name: "ListItemStart" })({
  width: 32,
  height: 32,
  marginRight: 12,
  alignSelf: "center"
});
var End = styled("div", { name: "ListItemEnd" })({
  marginLeft: 12,
  alignSelf: "center"
});
var Overlay = styled("div", { name: "ListItemOverlay", label: "ListItemOverlay" })({
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: 12,
  fontSize: 12
});
var ListItem = (props) => {
  const _a = props, {
    bottomCenter,
    bottomLeft,
    bottomRight,
    endAdornment,
    onClick,
    startAdornment,
    topCenter,
    topLeft,
    topRight,
    overlay
  } = _a, commonProps = __objRest(_a, [
    "bottomCenter",
    "bottomLeft",
    "bottomRight",
    "endAdornment",
    "onClick",
    "startAdornment",
    "topCenter",
    "topLeft",
    "topRight",
    "overlay"
  ]);
  return /* @__PURE__ */ jsxs(Item2, __spreadProps(__spreadValues({ onClick, overlay }, commonProps), { children: [
    startAdornment && /* @__PURE__ */ jsx(Start, { children: startAdornment }),
    /* @__PURE__ */ jsxs(Left, { children: [
      /* @__PURE__ */ jsx(Label, { children: topLeft }),
      /* @__PURE__ */ jsx(Value2, { children: bottomLeft })
    ] }),
    /* @__PURE__ */ jsxs(Center, { children: [
      /* @__PURE__ */ jsx(Label, { children: topCenter }),
      /* @__PURE__ */ jsx(Value2, { children: bottomCenter })
    ] }),
    /* @__PURE__ */ jsxs(Right, { children: [
      /* @__PURE__ */ jsx(Label, { children: topRight }),
      /* @__PURE__ */ jsx(Value2, { children: bottomRight })
    ] }),
    endAdornment && /* @__PURE__ */ jsx(End, { children: endAdornment }),
    overlay && /* @__PURE__ */ jsx(Overlay, { children: overlay })
  ] }));
};
var Image = styled("img")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}));
var NetworkIcon = (props) => {
  if (!props.chainId) {
    return /* @__PURE__ */ jsx(Icon.DefaultNetwork, { size: props.size });
  }
  return /* @__PURE__ */ jsx(Image, { src: __export212(props.chainId), width: props.size, height: props.size });
};
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const close = useCallback(() => setValue(false), []);
  const open = useCallback(() => setValue(true), []);
  return {
    value,
    open,
    close
  };
}
var DialogOverlay = styled(Dialog.Overlay)((props) => ({
  background: "rgba(0 0 0 / 0.72)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto"
}));
var DialogContent = styled(Dialog.Content)((props) => ({
  opacity: 1,
  pointerEvents: "none",
  backgroundColor: props.theme.palette.background.paper,
  maxWidth: "100%",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  fontFamily: props.theme.typography.fontFamily,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  [props.theme.breakpoints.up("md")]: {
    width: 512,
    height: 520,
    borderRadius: 16
  }
}));
var DialogTitle = styled(Dialog.Title)((props) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 20,
  fontSize: 20,
  lineHeight: "20px",
  fontWeight: "700",
  marginRight: 16,
  marginLeft: 16,
  color: props.theme.palette.text.primary
}));
var DialogClose = styled(Dialog.Close)((props) => ({
  backgroundColor: props.theme.palette.background.paper,
  border: 0,
  position: "absolute",
  top: 8,
  right: 12,
  cursor: "pointer",
  borderRadius: "100%",
  padding: 12,
  transition: "all 0.2s",
  width: 40,
  height: 40,
  "&:hover": {
    filter: "brightness(1.5)"
  }
}));
var ScrollContainer = styled("div", { name: "ScrollContainer" })(({ theme }) => ({
  overflowY: "scroll",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  "&::-webkit-scrollbar": {
    width: "1px"
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.text.secondary
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.text.secondary
  }
}));
var Header = styled("div", { name: "Header" })(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 21,
  backgroundColor: theme.palette.background.default
}));
var TopAdornment = styled("div", { name: "ModalTopAdornment" })(({ theme }) => ({
  marginBottom: 16,
  paddingLeft: 16,
  paddingRight: 16
}));
var Modal = (props) => {
  const { title, open, onClose, children, topAdornment, overlay = true } = props;
  return /* @__PURE__ */ jsx(Dialog.Root, { open, onOpenChange: (isOpen) => !isOpen && (onClose == null ? void 0 : onClose()), children: /* @__PURE__ */ jsxs(Dialog.Portal, { children: [
    overlay && /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(DialogContent, { onOpenAutoFocus: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ jsxs(Header, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: title }),
        topAdornment && /* @__PURE__ */ jsx(TopAdornment, { children: topAdornment })
      ] }),
      /* @__PURE__ */ jsx(ScrollContainer, { children }),
      /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "incognito", children: /* @__PURE__ */ jsx(Icon.Close, { size: 16 }) }) })
    ] })
  ] }) });
};
var InputWrapper2 = styled("div")({
  position: "relative",
  margin: "0 auto",
  width: "100%"
});
var Input2 = styled("input")((props) => ({
  backgroundColor: props.theme.palette.background.paper,
  border: `1px solid ${props.theme.palette.divider}`,
  height: "40px",
  fontSize: "16px",
  lineHeight: "24px",
  color: props.theme.palette.text.primary,
  paddingLeft: "36px",
  width: "100%",
  minHeight: 40,
  borderRadius: props.theme.shape.borderRadius,
  "&:focus": {
    outline: 0,
    borderColor: props.theme.palette.primary.main
  }
}));
var SearchIcon = styled("span")({
  position: "absolute",
  top: 0,
  left: 0,
  marginTop: "12px",
  marginLeft: "12px"
});
var SearchBar = (props) => {
  const { value, onChange } = props;
  const inputRef = useRef(null);
  const theme = useTheme();
  useEffect(() => {
    if (props.autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.autoFocus]);
  return /* @__PURE__ */ jsxs(InputWrapper2, { children: [
    /* @__PURE__ */ jsx(
      Input2,
      {
        ref: inputRef,
        placeholder: "Search",
        value,
        onChange,
        autoFocus: props.autoFocus
      }
    ),
    /* @__PURE__ */ jsx(SearchIcon, { children: /* @__PURE__ */ jsx(Icon.Search, { color: theme.palette.secondary.contrastText }) })
  ] });
};
var SelectButtonRoot = styled(Button, {
  name: "SelectButtonRoot",
  label: "SelectButtonRoot",
  shouldForwardProp: (prop) => prop !== "readonly"
})((props) => __spreadValues({
  cursor: props.onClick ? "pointer" : "initial",
  height: "72px",
  minWidth: "136px",
  display: "flex",
  position: "relative",
  width: "100%",
  padding: "16px",
  textAlign: "left",
  overflow: "hidden",
  justifyContent: "flex-start"
}, props.readonly && {
  "&:hover:not(:disabled)": {
    backgroundColor: props.theme.palette.secondary.main
  },
  "&:focus": {
    backgroundColor: props.theme.palette.secondary.main
  }
}));
var Title2 = styled("div", { name: "SelectButtonTitle" })(({ theme }) => ({
  fontSize: "12px",
  color: theme.palette.text.secondary
}));
var Value3 = styled("div", {
  name: "SelectButtonValue",
  shouldForwardProp: (prop) => prop !== "withIcon" && prop !== "readonly"
})((_a) => {
  var _b = _a, { theme } = _b, props = __objRest(_b, ["theme"]);
  return {
    color: props.readonly ? theme.palette.text.secondary : theme.palette.text.primary,
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block",
    maxWidth: props.withIcon ? "60%" : "95%",
    fontWeight: 700,
    "& > svg": {
      marginLeft: "8px"
    }
  };
});
var ValueLine = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  "& > svg": {
    marginLeft: "8px",
    minWidth: "10px"
  }
}));
var SelectButtonIcon = styled("div", { name: "SelectButtonIcon" })(({ theme }) => ({
  marginRight: "16px",
  minWidth: 40,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden"
}));
var ContentWrapper = styled("div")(() => ({
  width: "100%"
}));
var ConnectedIcon = styled("div")(() => ({
  position: "absolute",
  top: 0,
  right: 0,
  marginTop: 8,
  marginRight: 8
}));
var SelectButton = (_a) => {
  var _b = _a, {
    chevron = true,
    connected,
    readonly = false,
    icon,
    title,
    value
  } = _b, btnProps = __objRest(_b, [
    "chevron",
    "connected",
    "readonly",
    "icon",
    "title",
    "value"
  ]);
  const theme = useTheme();
  return /* @__PURE__ */ jsxs(SelectButtonRoot, __spreadProps(__spreadValues({}, btnProps), { readonly, children: [
    icon && /* @__PURE__ */ jsx(SelectButtonIcon, { children: icon }),
    /* @__PURE__ */ jsxs(ContentWrapper, { children: [
      /* @__PURE__ */ jsx(Title2, { children: title }),
      /* @__PURE__ */ jsxs(ValueLine, { children: [
        /* @__PURE__ */ jsx(Value3, { withIcon: !!icon, readonly, children: value || "Select" }),
        chevron && /* @__PURE__ */ jsx(Icon.Chevron, { size: 10 })
      ] })
    ] }),
    connected && /* @__PURE__ */ jsx(ConnectedIcon, { children: /* @__PURE__ */ jsx(Icon.ActiveDot, { color: theme.palette.success.main, size: 12 }) })
  ] }));
};
var ListItem2 = observer(ListItem);
var NetworkSelect = observer(
  (_a) => {
    var _b = _a, {
      icon: withIcon = true,
      title = "Network",
      value,
      options = [],
      overlay = true,
      onSelect,
      renderOption: renderOption2,
      component,
      withSearch = true,
      readonly = !onSelect
    } = _b, props = __objRest(_b, [
      "icon",
      "title",
      "value",
      "options",
      "overlay",
      "onSelect",
      "renderOption",
      "component",
      "withSearch",
      "readonly"
    ]);
    const modal = useToggle();
    const [search, setSearch] = useState("");
    const filtered = options.map(toOption).filter((option) => matchSearch(option.chainId, search));
    const icon = withIcon ? /* @__PURE__ */ jsx(NetworkIcon, { chainId: value, size: 40 }) : null;
    const network = value ? __export10(value) : void 0;
    const sorted = filtered.sort((a) => {
      return a.disabled ? 1 : -1;
    });
    function close() {
      modal.close();
      setSearch("");
    }
    const SelectComponent = component != null ? component : SelectButton;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SelectComponent,
        __spreadProps(__spreadValues({}, props), {
          title,
          onClick: readonly ? void 0 : modal.value ? close : modal.open,
          chevron: !readonly,
          icon,
          value: network == null ? void 0 : network.name,
          readonly
        })
      ),
      /* @__PURE__ */ jsx(
        Modal,
        {
          overlay,
          topAdornment: withSearch ? /* @__PURE__ */ jsx(SearchBar, { value: search, onChange: (e) => setSearch(e.target.value) }) : null,
          title,
          open: readonly ? false : modal.value,
          onClose: close,
          children: sorted.map((option, index) => {
            const { chainId } = option;
            const network2 = __export10(chainId);
            const onClick = () => {
              if (option.disabled)
                return;
              onSelect == null ? void 0 : onSelect(chainId);
              close();
            };
            if (renderOption2) {
              return React5__default.cloneElement(renderOption2(option, index), { onClick, key: index });
            }
            return /* @__PURE__ */ jsx(
              ListItem2,
              {
                disabled: option.disabled,
                overlay: option.overlay,
                startAdornment: /* @__PURE__ */ jsx(NetworkIcon, { chainId, size: 32 }),
                topLeft: network2.name,
                bottomLeft: network2.symbol,
                onClick
              },
              index
            );
          })
        }
      )
    ] });
  }
);
function matchSearch(chainId, query) {
  if (!query)
    return true;
  const text = query.toLowerCase();
  const network = __export10(chainId);
  return network.name.toLowerCase().includes(text) || network.symbol.includes(text);
}
function toOption(option) {
  if (typeof option === "number") {
    return {
      chainId: option
    };
  }
  return option;
}
var PanelRoot = styled(Box, { name: "Panel" })(({ theme }) => ({
  width: "464px",
  maxWidth: "100%",
  padding: "0 16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: theme.palette.text.primary
}));
var Title3 = styled("div", { name: "PanelTitle" })(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
  alignItems: "center"
}));
var PanelContent = styled("div", { name: "PanelContent" })(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "32px",
  flex: "1"
}));
var EndAdornment2 = styled("div", { name: "PanelTitleEndAdornment" })(() => ({
  fontSize: "12px"
}));
var Panel = (props) => {
  const { title, endAdornment, children, footer, sx } = props;
  return /* @__PURE__ */ jsxs(PanelRoot, { sx, children: [
    (title || endAdornment) && /* @__PURE__ */ jsxs(Title3, { children: [
      /* @__PURE__ */ jsx("div", { children: title }),
      /* @__PURE__ */ jsx(EndAdornment2, { children: endAdornment })
    ] }),
    /* @__PURE__ */ jsx(PanelContent, { children }),
    footer
  ] });
};
var Button2 = styled("button", { name: "SwapButton" })(({ theme }) => ({
  minWidth: 22,
  backgroundColor: "transparent",
  border: "0",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transform: "rotate(90deg)",
  padding: "12px",
  maxHeight: 38,
  "&:focus": {
    outline: "0",
    filter: "brightness(1.5)"
  },
  [theme.breakpoints.up("md")]: {
    transform: "rotate(0deg)",
    padding: "0 5px",
    maxHeight: "none"
  }
}));
var SwapButton = (props) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx(Button2, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_3013_20525)", children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.994 3.53033L13.5439 3L12.994 2.46967L10.6606 0.21967C10.3569 -0.0732234 9.86444 -0.0732234 9.56069 0.21967C9.25696 0.512563 9.25696 0.987435 9.56069 1.28033L10.5663 2.25L3.11067 2.25C2.6811 2.25 2.33289 2.58579 2.33289 3C2.33289 3.41422 2.6811 3.75 3.11067 3.75L10.5663 3.75L9.5607 4.71967C9.25695 5.01257 9.25695 5.48744 9.5607 5.78033C9.86444 6.07322 10.3569 6.07322 10.6606 5.78033L12.994 3.53033ZM1.00514 8.46968L0.455179 9L1.00514 9.53033L3.33848 11.7803C3.6422 12.0732 4.13469 12.0732 4.43841 11.7803C4.74213 11.4875 4.74213 11.0126 4.43841 10.7197L3.43282 9.75L10.8884 9.75C11.318 9.75 11.6662 9.41423 11.6662 9C11.6662 8.58578 11.318 8.25 10.8884 8.25L3.43282 8.25L4.43841 7.28033C4.74213 6.98744 4.74213 6.51256 4.43841 6.21967C4.13469 5.92678 3.6422 5.92678 3.33848 6.21967L1.00514 8.46968Z",
            fill: theme.palette.mode === "light" ? "black" : "white"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_3013_20525", children: /* @__PURE__ */ jsx("rect", { width: "12", height: "14", fill: "white", transform: "translate(14) rotate(90)" }) }) })
      ]
    }
  ) }));
};

// src/utils/formatRemainingTime.ts
function formatRemainingTime(seconds) {
  if (seconds === void 0)
    return "--";
  if (seconds <= 4)
    return "finishing...";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  const ss = String(s).padStart(2, "0");
  if (m > 0) {
    return m + "m " + ss + "s";
  }
  return ss + "s";
}
var TrackerBox = styled(Box, { name: "TrackerBox" })(({ theme }) => ({
  backgroundColor: "transparent",
  border: theme.palette.mode === "light" ? `1px solid #D5D5FB` : "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  minHeight: 60,
  padding: "8px 16px",
  position: "relative",
  overflow: "hidden"
}));
var Header2 = styled("div", { name: "Header" })(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}));
var MainInfo = styled("div", { name: "MainInfo" })(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: 4,
  justifyContent: "space-between"
}));
var Progress = styled("div", { name: "Progress" })(({ theme, percentage = 0 }) => ({
  position: "absolute",
  height: 2,
  backgroundColor: theme.palette.primary.main,
  transition: "all 1s linear",
  width: `${percentage}%`,
  bottom: 0,
  left: 0
}));
var CloseBtn = styled("button")(() => ({
  border: 0,
  backgroundColor: "transparent",
  padding: 0,
  display: "flex",
  "&:hover": {
    opacity: 0.7,
    cursor: "pointer"
  }
}));
var Tracker = observer((_a) => {
  var _b = _a, { tx, onClose, status } = _b, props = __objRest(_b, ["tx", "onClose", "status"]);
  var _a2, _b2;
  const theme = useTheme();
  if (!tx) {
    return null;
  }
  const srcChainId = tx.chainId;
  const dstChainId = (_a2 = tx.input) == null ? void 0 : _a2.dstChainId;
  const amount = (_b2 = tx.input) == null ? void 0 : _b2.amount;
  const srcChain = srcChainId ? __export10(srcChainId) : void 0;
  const dstChain = dstChainId ? __export10(dstChainId) : void 0;
  const progress2 = getTxProgress(tx);
  const remaining = getTxRemainingTime(tx);
  const percentage = progress2 * 100;
  return /* @__PURE__ */ jsxs(TrackerBox, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ jsxs(Header2, { children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: srcChainId && tx.txHash ? __export013(srcChainId, tx.txHash) : void 0,
          target: "_blank",
          children: /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ jsx(
              Icon.Link,
              {
                size: 12,
                color: theme.palette.text.secondary,
                style: { marginRight: "5px" }
              }
            ),
            /* @__PURE__ */ jsxs(Text, { variant: "p3", color: theme.palette.text.secondary, children: [
              "\xA0",
              srcChain == null ? void 0 : srcChain.name,
              "\xA0"
            ] }),
            /* @__PURE__ */ jsx(
              Icon.Arrow,
              {
                size: 12,
                color: theme.palette.text.secondary,
                style: { transform: "rotate(-90deg)" }
              }
            ),
            /* @__PURE__ */ jsxs(Text, { color: theme.palette.text.secondary, variant: "p3", children: [
              "\xA0",
              dstChain == null ? void 0 : dstChain.name
            ] })
          ] })
        }
      ),
      onClose && /* @__PURE__ */ jsx(CloseBtn, { type: "button", onClick: onClose, children: /* @__PURE__ */ jsx(Text, { variant: "p3", color: theme.palette.text.secondary, children: "Close" }) })
    ] }),
    /* @__PURE__ */ jsxs(MainInfo, { children: [
      /* @__PURE__ */ jsxs(Text, { variant: "p2", sx: { fontWeight: 700 }, children: [
        amount ? __export116(amount) : "-",
        " ",
        amount == null ? void 0 : amount.currency.symbol
      ] }),
      status != null ? status : /* @__PURE__ */ jsx(
        Text,
        {
          variant: "p2",
          color: tx.completed ? "success.main" : tx.error ? "warning.main" : "text.primary",
          sx: { textTransform: "capitalize", fontWeight: 700 },
          children: tx.completed ? "Complete" : tx.error ? "Failed" : formatRemainingTime(remaining)
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Progress, { percentage })
  ] }));
});
function usePagination(items, perPage = 8) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPagesCount = Math.ceil(items.length / perPage);
  const currentPageItems = items.slice((currentPage - 1) * perPage, currentPage * perPage);
  const lengthRef = useRef(items.length);
  useEffect(() => {
    if (lengthRef.current !== items.length) {
      setCurrentPage(1);
      lengthRef.current = items.length;
    }
  }, [items.length]);
  return {
    onNextPage: () => setCurrentPage(Math.min(currentPage + 1, totalPagesCount)),
    onPrevPage: () => setCurrentPage(Math.max(currentPage - 1, 1)),
    currentPage,
    currentPageItems,
    totalPagesCount
  };
}
var Row = styled("div")(() => ({
  display: "flex",
  overflowX: "hidden"
}));
var Header3 = styled("div")(() => ({
  marginBottom: 8,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline"
}));
var TrackerCarousel = (props) => {
  const { txs, sx, title = "Transactions" } = props;
  if (!txs || txs.length === 0) {
    return null;
  }
  const pagination = usePagination(txs, 1);
  return /* @__PURE__ */ jsxs(Box, { sx, children: [
    /* @__PURE__ */ jsxs(Header3, { children: [
      /* @__PURE__ */ jsx(Text, { variant: "p3", color: "text.secondary", children: title }),
      /* @__PURE__ */ jsx(Box, { sx: { display: "flex" }, children: pagination.totalPagesCount > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Button, { variant: "incognito", onClick: pagination.onPrevPage, sx: { mr: 1 }, children: /* @__PURE__ */ jsx(Icon.Chevron, { size: 12, sx: { transform: "rotate(90deg)" } }) }),
        /* @__PURE__ */ jsx(Text, { variant: "p3", children: pagination.currentPage }),
        /* @__PURE__ */ jsxs(Text, { variant: "p3", color: "text.secondary", children: [
          "/",
          pagination.totalPagesCount
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "incognito", onClick: pagination.onNextPage, sx: { ml: 1 }, children: /* @__PURE__ */ jsx(Icon.Chevron, { size: 12, sx: { transform: "rotate(-90deg)" } }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Row, { children: pagination.currentPageItems.map(
      (tx) => props.renderTracker ? props.renderTracker(tx) : /* @__PURE__ */ jsx(Tracker, { tx, sx: { minWidth: "100%" } }, tx.txHash)
    ) })
  ] });
};
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
var JoeTracker = observer(() => {
  const mounted = useHasMounted();
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx(
    TrackerCarousel,
    {
      txs: uiStore.txProgress.transactions,
      sx: { mb: 4 },
      renderTracker
    }
  );
});
function renderTracker(tx) {
  return /* @__PURE__ */ jsx(Tracker2, { tx }, tx.txHash);
}
var Tracker2 = observer(({ tx }) => {
  const { aptos } = walletStore;
  const input = tx.input;
  const isUnclaimed = (input == null ? void 0 : input.dstCurrency) && unclaimedStore.isUnclaimed(input.dstCurrency);
  const isDstWalletConnected = aptos && (input == null ? void 0 : input.dstAddress) === aptos.account;
  const remainingTime = getTxRemainingTime(tx);
  const handleClaim = () => {
    if (tx.completed) {
      unclaimedStore.claim(tx.input.dstCurrency);
      uiStore.txProgress.dismiss(tx.txHash);
    }
  };
  return /* @__PURE__ */ jsx(
    Tracker,
    {
      tx,
      sx: { minWidth: "100%" },
      onClose: !isUnclaimed && (tx.completed || tx.error) ? () => uiStore.txProgress.dismiss(tx.txHash) : void 0,
      status: isDstWalletConnected ? /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          sx: { marginTop: -2.5, textTransform: "uppercase" },
          variant: tx.completed ? "primary" : "secondary",
          onClick: handleClaim,
          children: tx.completed ? "Claim" : /* @__PURE__ */ jsx(Fragment, { children: (remainingTime != null ? remainingTime : 0) > 4 ? `Claim in ${formatRemainingTime(remainingTime)}` : formatRemainingTime(remainingTime) })
        }
      ) : void 0
    },
    tx.txHash
  );
});
var CurrencyIcon = (props) => {
  const [error, setError] = useState();
  if (!props.currency || error) {
    return /* @__PURE__ */ jsx(Icon.DefaultToken, { size: props.size });
  }
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: __export37(props.currency.symbol),
      width: props.size,
      height: props.size,
      onError: setError
    }
  );
};
var DIVIDER_COLOR = {
  dark: "#2F3145",
  light: "#D5D5FB"
};
var SelectorRoot = styled(Box)(() => ({
  position: "relative",
  width: "100%"
}));
var BgBar = styled("div", { name: "BgBar" })(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  height: 32,
  border: theme.palette.mode === "light" ? `1px solid ${DIVIDER_COLOR.light}` : `1px solid ${DIVIDER_COLOR.dark}`
}));
var Buttons = styled("div", { name: "Buttons" })(() => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
}));
var Button3 = styled("button", { name: "Button" })(
  ({ itemWidth, active, theme }) => ({
    color: theme.palette.secondary.contrastText,
    backgroundColor: "transparent",
    border: 0,
    borderRadius: theme.shape.borderRadius,
    width: `${itemWidth}%`,
    height: "100%",
    fontSize: 12,
    lineHeight: "16px",
    textTransform: "uppercase",
    outline: 0,
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "rgb(0 0 0 / 0.02)" : "rgba(255,255,255,0.05)",
      cursor: "pointer"
    }
  })
);
var SelectionBox = styled("div", { name: "SelectionBox" })(
  ({ position = 0, itemWidth, theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? DIVIDER_COLOR.light : DIVIDER_COLOR.dark,
    borderRadius: theme.shape.borderRadius,
    width: `${itemWidth}%`,
    height: 32,
    position: "absolute",
    top: 0,
    transform: `translateX(${position * 100}%)`,
    transition: "transform 100ms ease-out"
  })
);
var Selector = (props) => {
  const { selection } = props;
  const childrenArray = React5__default.Children.toArray(props.children);
  const activeChildIdx = childrenArray.findIndex((child) => child.props.value === selection);
  const selectionPosition = Math.max(activeChildIdx, 0);
  const itemWidth = 100 / childrenArray.length;
  return /* @__PURE__ */ jsxs(SelectorRoot, { children: [
    /* @__PURE__ */ jsx(BgBar, {}),
    activeChildIdx > -1 && /* @__PURE__ */ jsx(SelectionBox, { position: selectionPosition, itemWidth }),
    /* @__PURE__ */ jsx(Buttons, { children: React5__default.Children.map(childrenArray, ({ props: { value, onClick, children } }) => /* @__PURE__ */ jsx(Button3, { onClick, itemWidth, active: selection === value, children })) })
  ] });
};
Selector.Option = (_props) => {
  return null;
};

// ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// ../../node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const _a = props, { scope, children } = _a, context = __objRest(_a, ["scope", "children"]);
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ createElement(Context.Provider, {
        value
      }, children);
    }
    function useContext$1(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext$1
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return useMemo(
        () => ({
          [`__scope${scopeName}`]: __spreadProps(__spreadValues({}, scope), {
            [scopeName]: contexts
          })
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return __spreadValues(__spreadValues({}, nextScopes), currentScope);
      }, {});
      return useMemo(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return useMemo(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = useCallback((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = useRef(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = useRef({
    value,
    previous: value
  });
  return useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? useLayoutEffect : () => {
};

// ../../node_modules/@radix-ui/react-use-size/dist/index.module.js
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size, setSize] = useState(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size;
}
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  const childrenArray = Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (Children.count(newElement) > 1)
          return Children.only(null);
        return /* @__PURE__ */ isValidElement(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ isValidElement(newElement) ? /* @__PURE__ */ cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
  if (/* @__PURE__ */ isValidElement(children))
    return /* @__PURE__ */ cloneElement(children, __spreadProps(__spreadValues({}, $5e63c961fc1ce211$var$mergeProps(slotProps, children.props)), {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    }));
  return Children.count(children) > 1 ? Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ createElement(Fragment$1, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = __spreadValues({}, childProps);
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return __spreadValues(__spreadValues({}, slotProps), overrideProps);
}

// ../../node_modules/@radix-ui/react-primitive/dist/index.module.js
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
    const _a = props, { asChild } = _a, primitiveProps = __objRest(_a, ["asChild"]);
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ createElement(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return __spreadProps(__spreadValues({}, primitive), {
    [node]: Node
  });
}, {});

// ../../node_modules/@radix-ui/react-switch/dist/index.module.js
var $6be4966fd9bbc698$var$SWITCH_NAME = "Switch";
var [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6be4966fd9bbc698$var$SWITCH_NAME);
var [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
var $6be4966fd9bbc698$export$b5d5cf8927ab7262 = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange } = _a, switchProps = __objRest(_a, ["__scopeSwitch", "name", "checked", "defaultChecked", "required", "disabled", "value", "onCheckedChange"]);
  const [button, setButton] = useState(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = useRef(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  return /* @__PURE__ */ createElement($6be4966fd9bbc698$var$SwitchProvider, {
    scope: __scopeSwitch,
    checked,
    disabled
  }, /* @__PURE__ */ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-required": required,
    "data-state": $6be4966fd9bbc698$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, switchProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ createElement($6be4966fd9bbc698$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $6be4966fd9bbc698$var$THUMB_NAME = "SwitchThumb";
var $6be4966fd9bbc698$export$4d07bf653ea69106 = /* @__PURE__ */ forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeSwitch } = _a, thumbProps = __objRest(_a, ["__scopeSwitch"]);
  const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
  return /* @__PURE__ */ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $6be4966fd9bbc698$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, thumbProps, {
    ref: forwardedRef
  }));
});
var $6be4966fd9bbc698$var$BubbleInput = (props) => {
  const _a = props, { control, checked, bubbles = true } = _a, inputProps = __objRest(_a, ["control", "checked", "bubbles"]);
  const ref = useRef(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ createElement("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: __spreadProps(__spreadValues(__spreadValues({}, props.style), controlSize), {
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    })
  }));
};
function $6be4966fd9bbc698$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
var $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;
var SwitchRoot = styled($6be4966fd9bbc698$export$be92b6f5f03c0fe9)(({ theme }) => ({
  width: 38,
  height: 20,
  borderRadius: 23,
  border: 0,
  padding: 0,
  cursor: "pointer",
  backgroundColor: theme.palette.divider,
  "&[data-state=checked]": {
    backgroundColor: theme.palette.primary.main
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.light
  }
}));
var Thumb = styled($6be4966fd9bbc698$export$6521433ed15a34db)(({ theme }) => ({
  width: 16,
  height: 16,
  borderRadius: "100%",
  backgroundColor: "#FFF",
  display: "block",
  transform: "translateX(2px)",
  transition: "transform 100ms ease-in",
  "&[data-state=checked]": {
    transform: "translateX(calc(100% + 4px))"
  }
}));
var Switch = (props) => {
  return /* @__PURE__ */ jsx(SwitchRoot, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx(Thumb, {}) }));
};
var dstNativeAmounts = {
  ["DEFAULT" /* DEFAULT */]: true,
  ["MAX" /* MAX */]: true,
  ["ZERO" /* ZERO */]: true
};
var isDstNativeAmount = (value) => dstNativeAmounts.hasOwnProperty(value);
var GasOnDestinationModal = observer((props) => {
  var _a, _b;
  const theme = useTheme();
  const { form } = bridgeStore;
  const formAmountAsDstNativeAmount = isDstNativeAmount(form.dstNativeAmount) ? form.dstNativeAmount : void 0;
  const lastSelectedNativeAmountRef = useRef("DEFAULT" /* DEFAULT */);
  if (formAmountAsDstNativeAmount) {
    lastSelectedNativeAmountRef.current = formAmountAsDstNativeAmount;
  }
  const formAmountIsDstNativeAmount = formAmountAsDstNativeAmount != null;
  const handleToggleCustomAmount = () => {
    bridgeStore.setDstNativeAmount(
      formAmountIsDstNativeAmount ? dstNativeAmountInput != null ? dstNativeAmountInput : "0" : lastSelectedNativeAmountRef.current
    );
  };
  const { dstNativeAmount, maxDstNativeAmount } = bridgeStore;
  const dstNativeAmountInput = formAmountIsDstNativeAmount ? (_a = bridgeStore.dstNativeAmount) == null ? void 0 : _a.toExact() : form.dstNativeAmount;
  const dstNativeAmountError = maxDstNativeAmount && (dstNativeAmount == null ? void 0 : dstNativeAmount.greaterThan(maxDstNativeAmount)) ? `Requested airdrop exceeds max: ${maxDstNativeAmount.toExact()} ${maxDstNativeAmount.currency.symbol}` : void 0;
  const dstNativeCost = (_b = bridgeStore.fee) == null ? void 0 : _b.nativeFee;
  const dstNative = form.dstChainId ? __export8(form.dstChainId) : void 0;
  return /* @__PURE__ */ jsx(
    Modal,
    __spreadProps(__spreadValues({
      title: "Get ready for your destination",
      topAdornment: /* @__PURE__ */ jsxs(Text, { variant: "p2", color: "text.secondary", children: [
        "Choose the amount of",
        " ",
        /* @__PURE__ */ jsx(Text, { variant: "p2", color: "primary.main", children: dstNative == null ? void 0 : dstNative.symbol }),
        " ",
        "you want to swap.",
        /* @__PURE__ */ jsx("br", {}),
        "The total amount you\u2019ll pay in your wallet includes the gas you\u2019ll be airdropping to your destination."
      ] })
    }, props), {
      children: /* @__PURE__ */ jsxs(Box, { sx: { p: 2, height: "100%", display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsx(Box, { sx: { mt: 0, mb: 2 }, children: /* @__PURE__ */ jsxs(Selector, { selection: formAmountAsDstNativeAmount != null ? formAmountAsDstNativeAmount : lastSelectedNativeAmountRef.current, children: [
          /* @__PURE__ */ jsx(
            Selector.Option,
            {
              onClick: () => bridgeStore.setDstNativeAmount("ZERO" /* ZERO */),
              value: "ZERO" /* ZERO */,
              children: "None"
            }
          ),
          /* @__PURE__ */ jsx(
            Selector.Option,
            {
              onClick: () => bridgeStore.setDstNativeAmount("DEFAULT" /* DEFAULT */),
              value: "DEFAULT" /* DEFAULT */,
              children: "Medium"
            }
          ),
          /* @__PURE__ */ jsx(
            Selector.Option,
            {
              onClick: () => bridgeStore.setDstNativeAmount("MAX" /* MAX */),
              value: "MAX" /* MAX */,
              children: "Max"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ jsx(Text, { color: theme.palette.text.secondary, children: "Custom amount" }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              checked: !formAmountIsDstNativeAmount,
              onCheckedChange: handleToggleCustomAmount
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            onChange: (e) => bridgeStore.setDstNativeAmount(e.target.value),
            size: "md",
            error: dstNativeAmountError,
            value: dstNativeAmountInput,
            sx: { mt: 2, width: "100%" },
            startAdornment: /* @__PURE__ */ jsx(CurrencyIcon, { size: 16, currency: dstNative }),
            endAdornment: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "tertiary",
                size: "xs",
                disabled: formAmountIsDstNativeAmount,
                onClick: () => bridgeStore.setDstNativeAmount("MAX" /* MAX */),
                sx: { textTransform: "uppercase" },
                children: "Max"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(Box, { sx: { mt: "auto", display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ jsx(Text, { color: theme.palette.text.secondary, variant: "p3", children: "Cost" }),
          /* @__PURE__ */ jsxs(Text, { variant: "p3", children: [
            dstNativeCost == null ? void 0 : dstNativeCost.toSignificant(),
            " ",
            dstNativeCost == null ? void 0 : dstNativeCost.currency.symbol
          ] })
        ] })
      ] })
    })
  );
});
var GasOnDestinationButton = styled("span", { name: "GasOnDestinationButton" })(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    cursor: "pointer"
  })
);
var STabs = styled(Box, { name: "Tabs" })(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%"
}));
var STabsBar = styled("div", { name: "TabsBar" })(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: 24,
  position: "relative"
}));
var STab = styled("button", { name: "Tab", shouldForwardProp: (props) => props !== "active" })((_a) => {
  var _b = _a, { theme } = _b, props = __objRest(_b, ["theme"]);
  return {
    border: 0,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    paddingBottom: 16,
    color: props.active ? theme.palette.text.primary : theme.palette.text.secondary,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: "-0.02em",
    textAlign: "left",
    marginRight: 12,
    borderBottom: props.active ? `1px solid ${theme.palette.text.primary}` : "1px solid transparent",
    "&:only-child": {
      borderBottom: "1px solid transparent"
    },
    "&:hover": {
      color: theme.palette.text.primary
    },
    "&:not(:first-of-type)": {
      marginLeft: 12
    }
  };
});
var TabContent = styled("div", { name: "TabContent" })(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
}));
var Tabs = (props) => {
  const { children, activeTab, setActiveTab, sx } = props;
  const childrenArray = React5.Children.toArray(children);
  const activeChild = childrenArray.find((child) => child.props.title === activeTab);
  childrenArray.indexOf(activeChild);
  return /* @__PURE__ */ jsxs(STabs, { sx, children: [
    /* @__PURE__ */ jsx(STabsBar, { children: React5.Children.map(childrenArray, ({ props: { title } }) => /* @__PURE__ */ jsx(STab, { onClick: () => setActiveTab(title), active: title === activeTab, children: title })) }),
    /* @__PURE__ */ jsx(TabContent, { children: activeChild == null ? void 0 : activeChild.props.children })
  ] });
};
var Tab = (_props) => {
  return null;
};
Tabs.Tab = Tab;
var ConfigStoreModel = types.model({
  tokens: types.array(types.frozen()),
  wallets: types.array(types.frozen())
}).views(() => ({
  get chains() {
    return networkStore.enabledChains;
  }
})).actions((store) => {
  const actions = {
    setChains(chains) {
      networkStore.setEnabledNetworks(chains);
    },
    setWallets(wallets) {
      store.wallets.replace(wallets);
    },
    setTokens(symbols) {
      store.tokens.replace(symbols);
    }
  };
  return actions;
});
var configStore = ConfigStoreModel.create({
  tokens: ["USDC", "USDT", "WETH", "ETH"],
  wallets: [...__export12, ...__export03]
});
function isCrossChainTx2(tx) {
  const input = tx.input;
  if (input == null ? void 0 : input.dstChainId)
    return true;
  return false;
}
var TransactionItem = observer(({ tx }) => {
  var _a;
  const theme = useTheme();
  const isSuccess = tx.completed;
  const isError = !!tx.error;
  const isPending = !isError && !isSuccess;
  const link = isCrossChainTx2(tx) ? __export013(tx.chainId, tx.txHash) : __export17(tx.chainId, tx.txHash);
  const input = tx.input;
  return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", mb: 2, width: "100%" }, children: [
    /* @__PURE__ */ jsx("a", { href: link, target: "_blank", children: /* @__PURE__ */ jsx(Icon.BlockchainExplorer, { size: 16, color: theme.palette.text.secondary }) }),
    /* @__PURE__ */ jsx(
      Text,
      {
        size: 12,
        sx: { flex: 1, ml: 1, mr: 2 },
        color: isSuccess ? theme.palette.text.primary : theme.palette.text.secondary,
        children: /* @__PURE__ */ jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsx(Box, { children: tx.type }),
          /* @__PURE__ */ jsxs(Box, { children: [
            " ",
            input && `${input.amount.toSignificant()} ${((_a = input.srcCurrency) == null ? void 0 : _a.symbol) || ""}`
          ] })
        ] })
      }
    ),
    isSuccess && /* @__PURE__ */ jsx(Icon.Success, { size: 16 }),
    isPending && /* @__PURE__ */ jsx(Icon.Spinner, { size: 16 }),
    isError && /* @__PURE__ */ jsx(Icon.Error, { size: 16 })
  ] });
});
var UnclaimedTokensPanel = observer(() => {
  const { unclaimed } = unclaimedStore;
  return /* @__PURE__ */ jsx(Fragment, { children: unclaimed.map((balance) => /* @__PURE__ */ jsx(
    UnclaimedItem,
    {
      amount: balance.amount,
      onClaim: (currency) => unclaimedStore.claim(currency)
    },
    balance.currency.symbol
  )) });
});
var UnclaimedItem = observer((props) => {
  const { amount, onClaim } = props;
  const network = __export10(amount.currency.chainId);
  const [isClaiming, setIsClaiming] = useState(false);
  const fiatBalance = fiatStore.toFiatAmount(amount);
  async function claim(currency) {
    try {
      setIsClaiming(true);
      await Promise.resolve(onClaim(currency));
    } finally {
      setIsClaiming(false);
    }
  }
  return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", mb: 2, width: "100%" }, children: [
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ jsx(CurrencyIcon, { size: 32, currency: amount.currency }),
      /* @__PURE__ */ jsxs(Box, { sx: { ml: 1.5 }, children: [
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Text, { variant: "p3", color: "text.secondary", children: network == null ? void 0 : network.name }) }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Text, { variant: "p2", children: amount.currency.symbol }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxs(Box, { sx: { textAlign: "right" }, children: [
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Text, { variant: "p3", color: "text.secondary", children: fiatBalance ? "$" + fiatBalance.value.toFixed(2) : "-" }) }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Text, { variant: "p2", children: amount.toExact() }) })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: isClaiming ? "secondary" : "primary",
          size: "md",
          sx: { ml: 1.5 },
          onClick: () => claim(amount.currency),
          children: "Claim"
        }
      )
    ] })
  ] });
});
var WalletIcon = ({ type, size = 26 }) => {
  return /* @__PURE__ */ jsx(
    Box,
    {
      sx: {
        width: size,
        minHeight: size,
        position: "relative",
        display: "inline-block"
      },
      children: type && /* @__PURE__ */ jsx("img", { src: __export118(type), width: size, alt: type, title: type })
    }
  );
};

// src/utils/formatAddress.ts
function formatAddress(address, maxLength = 10) {
  const size = Math.round(maxLength / 2);
  if (address.length <= size * 2)
    return address;
  const start = address.slice(0, size);
  const end = address.substring(address.length - size);
  return start + "..." + end;
}
var AccountModal = observer((_a) => {
  var _b = _a, { title = "Connect Wallet" } = _b, props = __objRest(_b, ["title"]);
  const modalProps = __objRest(props, []);
  const theme = useTheme();
  const { evm: evm2, aptos } = walletStore;
  const srcWallet = evm2;
  const dstWallet = aptos;
  const srcChainType = __export4.EVM;
  const dstChainType = __export4.APTOS;
  const wallets = sortBy(
    configStore.wallets,
    (walletType) => __export22(walletType) ? -1 : 1
  );
  const srcWalletTypes = intersection(wallets, __export12);
  const dstWalletTypes = intersection(wallets, __export03);
  return /* @__PURE__ */ jsx(Modal, __spreadProps(__spreadValues({ title, overlay: true }, modalProps), { children: /* @__PURE__ */ jsxs(
    Tabs,
    {
      activeTab: uiStore.walletModal.activeTab,
      setActiveTab: (tab) => uiStore.walletModal.setActiveTab(tab),
      sx: { mx: 2 },
      children: [
        /* @__PURE__ */ jsxs(Tabs.Tab, { title: "Wallet" /* WALLET */, children: [
          /* @__PURE__ */ jsxs(Box, { sx: { width: "100%" }, children: [
            /* @__PURE__ */ jsx(
              WalletGroup,
              {
                isConnected: !!srcWallet,
                onDisconnect: srcWallet == null ? void 0 : srcWallet.disconnect,
                heading: /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(Text, { variant: "p3", color: theme.palette.text.secondary }),
                  /* @__PURE__ */ jsxs(Text, { variant: "p3", children: [
                    srcChainType,
                    " "
                  ] }),
                  /* @__PURE__ */ jsx(Dot, { active: !!srcWallet })
                ] }),
                children: srcWalletTypes.map((walletType) => {
                  const isConnected = (srcWallet == null ? void 0 : srcWallet.type) === walletType;
                  return (isConnected || !srcWallet) && /* @__PURE__ */ jsx(WalletItem, { walletType }, walletType);
                })
              }
            ),
            /* @__PURE__ */ jsx(
              WalletGroup,
              {
                sx: { mt: 3 },
                onDisconnect: dstWallet == null ? void 0 : dstWallet.disconnect,
                isConnected: !!dstWallet,
                heading: /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(Text, { variant: "p3", color: theme.palette.text.secondary }),
                  /* @__PURE__ */ jsxs(Text, { variant: "p3", children: [
                    dstChainType,
                    " "
                  ] }),
                  /* @__PURE__ */ jsx(Dot, { active: !!dstWallet })
                ] }),
                children: dstWalletTypes.map((walletType) => {
                  const isConnected = (dstWallet == null ? void 0 : dstWallet.type) === walletType;
                  return (isConnected || !dstWallet) && /* @__PURE__ */ jsx(WalletItem, { walletType }, walletType);
                })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Box, { sx: { mt: "auto", pb: 2 }, children: [
            /* @__PURE__ */ jsx(Text, { variant: "p3", sx: { mr: 0.5 }, color: "text.secondary", children: "Is this your first time?" }),
            /* @__PURE__ */ jsx(Text.Link, { href: "/faq", color: theme.palette.primary.main, variant: "p3", children: "Learn more" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Tabs.Tab, { title: "Unclaimed" /* UNCLAIMED */, children: /* @__PURE__ */ jsx(UnclaimedTokensPanel, {}) }),
        /* @__PURE__ */ jsx(Tabs.Tab, { title: "Transactions" /* TRANSACTIONS */, children: /* @__PURE__ */ jsx(Box, { sx: { width: "100%" }, children: transactionStore.recentTransactions.map((tx, index) => {
          var _a2;
          return /* @__PURE__ */ jsx(TransactionItem, { tx }, (_a2 = tx.txHash) != null ? _a2 : index);
        }) }) })
      ]
    }
  ) }));
});
var WalletGroup = ({
  children,
  heading,
  isConnected,
  onDisconnect,
  onPasteAccount,
  sx
}) => {
  const [isPaste, setIsPaste] = useState(false);
  const theme = useTheme();
  const inputRef = useRef(null);
  useEffect(() => {
    var _a;
    if (isPaste)
      (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, [isPaste]);
  return /* @__PURE__ */ jsxs(Box, { sx, children: [
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", justifyContent: "space-between" }, children: [
      heading,
      /* @__PURE__ */ jsx(Box, { children: isConnected ? /* @__PURE__ */ jsx(Button, { variant: "incognito", onClick: onDisconnect, children: /* @__PURE__ */ jsx(Text.Link, { variant: "p3", color: theme.palette.text.secondary, children: "Disconnect" }) }) : onPasteAccount ? /* @__PURE__ */ jsxs(Button, { variant: "incognito", onClick: () => setIsPaste(!isPaste), children: [
        /* @__PURE__ */ jsxs(Text, { variant: "p3", color: theme.palette.text.secondary, children: [
          "or",
          " "
        ] }),
        /* @__PURE__ */ jsx(Text.Link, { variant: "p3", children: isPaste ? "Connect Wallet" : "Paste Account" })
      ] }) : null })
    ] }),
    /* @__PURE__ */ jsxs(Box, { sx: { mt: 1 }, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: inputRef,
          size: "md",
          placeholder: "Paste Address",
          endAdornment: /* @__PURE__ */ jsx(InputStateAdornment, { type: "success" }),
          sx: { height: 56, display: isPaste ? void 0 : "none" }
        }
      ),
      !isPaste && children
    ] })
  ] });
};
var InputStateAdornment = ({ type }) => {
  const theme = useTheme();
  if (!type) {
    return null;
  }
  if (type === "pending") {
    return /* @__PURE__ */ jsx(Icon.Spinner, { size: 16 });
  }
  if (type === "success") {
    return /* @__PURE__ */ jsx(Icon.Checkmark, { size: 16, color: theme.palette.success.main });
  }
  if (type === "error") {
    return /* @__PURE__ */ jsx(Icon.Info, { size: 16, color: theme.palette.warning.main });
  }
  return null;
};
var WalletItem = observer(({ walletType }) => {
  var _a;
  const theme = useTheme();
  const wallets = [walletStore.aptos, walletStore.evm];
  const isAvailable = __export22(walletType);
  const wallet = wallets.find((w) => (w == null ? void 0 : w.type) === walletType);
  if (walletType === __export2.Brave && !isAvailable)
    return null;
  if (walletType === __export2.MetaMask && __export22(__export2.Brave))
    return null;
  const isConnected = wallets.some((wallet2) => (wallet2 == null ? void 0 : wallet2.type) === walletType);
  const [isConnecting, setConnecting] = useState(false);
  const onConnect = async () => {
    if (isConnected || isConnecting)
      return;
    if (!isAvailable)
      return getWalletExtension(walletType);
    try {
      setConnecting(true);
      await Promise.resolve(walletStore.connect(walletType));
    } finally {
      if (walletStore.aptos && walletStore.evm) {
        uiStore.walletModal.close();
      }
      setConnecting(false);
    }
  };
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: "incognito",
      onClick: onConnect,
      sx: {
        height: 56,
        width: "100%",
        display: "flex",
        alignItems: "center",
        border: `1px solid ${theme.palette.divider}`,
        padding: 1.5,
        mb: 1
      },
      children: [
        /* @__PURE__ */ jsx(WalletIcon, { type: walletType }),
        /* @__PURE__ */ jsx(Text, { variant: "p2", sx: { ml: 2 }, children: isConnecting ? "Connecting..." : isConnected ? formatAddress((_a = wallet == null ? void 0 : wallet.account) != null ? _a : "0x") : isAvailable ? `Connect ${walletType}` : `Get ${walletType} Wallet` })
      ]
    }
  );
});
var Dot = ({ active }) => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx(
    Icon.ActiveDot,
    {
      inline: true,
      color: active ? theme.palette.success.main : theme.palette.text.secondary,
      size: 12
    }
  );
};
var JoeBridge = observer(() => {
  var _a, _b;
  const theme = useTheme();
  const activeWallet = walletStore.evm;
  const { walletModal } = uiStore;
  const [error] = bridgeStore.errors;
  const { form, dstNativeAmount, isApproving, isExecuting, minAmount, maxAmount, isSigning } = bridgeStore;
  const { isConnected, chainId } = useIsConnected();
  function onConnect() {
    walletStore.connect();
  }
  const onTransfer = async () => {
    if (error)
      return;
    await bridgeStore.send();
  };
  const onAccountModalClose = () => {
    walletModal.setActiveTab("Transactions" /* TRANSACTIONS */);
    walletModal.close();
  };
  return /* @__PURE__ */ jsx(ToastProvider, { children: /* @__PURE__ */ jsxs(Box, { sx: { maxWidth: "100%" }, children: [
    /* @__PURE__ */ jsx(Panel, { title: "", sx: { mt: -1, minHeight: "140px" }, children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(JoeTracker, {}) }) }),
    /* @__PURE__ */ jsxs(Panel, { sx: { mt: -4, pb: 10, backgroundColor: theme.palette.background.default }, children: [
      /* @__PURE__ */ jsxs(InputsGroup.Top, { children: [
        /* @__PURE__ */ jsx(
          NetworkSelect,
          {
            options: orderByBalance(bridgeStore.srcNetworkOptions),
            onSelect: bridgeStore.setSrcChainId,
            value: (_a = bridgeStore.srcToken) == null ? void 0 : _a.chainId,
            renderOption,
            title: "From",
            withSearch: false
          },
          "src"
        ),
        /* @__PURE__ */ jsx(SwapButton, { onClick: bridgeStore.switch }),
        /* @__PURE__ */ jsx(
          NetworkSelect,
          {
            options: orderByBalance(bridgeStore.dstNetworkOptions),
            onSelect: bridgeStore.setDstChainId,
            value: (_b = bridgeStore.dstToken) == null ? void 0 : _b.chainId,
            renderOption,
            title: "To",
            withSearch: false
          },
          "dst"
        )
      ] }),
      /* @__PURE__ */ jsx(
        Input,
        {
          size: "lg",
          sx: { mt: "22px", fontWeight: 500 },
          placeholder: "0.0",
          startAdornment: /* @__PURE__ */ jsx(Button, { size: "xs", variant: "tertiary", onClick: bridgeStore.setMaxAmount, children: "MAX" }),
          onChange: (event) => bridgeStore.setAmount(event.target.value),
          value: bridgeStore.form.amount,
          endAdornment: /* @__PURE__ */ jsxs(InputAdornment, { children: [
            /* @__PURE__ */ jsx(Text, { color: theme.palette.text.secondary, variant: "p3", sx: { fontWeight: 600 }, children: "Balance" }),
            /* @__PURE__ */ jsx(Text, { color: theme.palette.text.primary, variant: "p3", sx: { fontWeight: 700 }, children: maxAmount ? maxAmount.toSignificant(4) + " " + maxAmount.currency.symbol : "-" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Details,
        {
          sx: { my: "24px" },
          items: [
            {
              label: "Gas on destination",
              value: form.dstChainId ? /* @__PURE__ */ jsx(GasOnDestinationButton, { onClick: uiStore.dstNativeAmountModal.open, children: (dstNativeAmount == null ? void 0 : dstNativeAmount.equalTo(0)) || !dstNativeAmount ? "Add" : `${dstNativeAmount.toExact()} ${dstNativeAmount.currency.symbol}` }) : "--"
            },
            {
              label: "You will receive",
              value: minAmount ? minAmount.toExact() + " " + minAmount.currency.symbol : void 0
            }
          ]
        }
      ),
      isConnected ? error ? /* @__PURE__ */ jsx(Button, { variant: "primary", disabled: true, children: error }) : isApproving ? /* @__PURE__ */ jsx(Button, { variant: "primary", disabled: true, isLoading: true, children: "Approving" }) : isSigning ? /* @__PURE__ */ jsx(Button, { variant: "primary", disabled: true, isLoading: true, children: "Waiting for Confirmation" }) : isExecuting ? /* @__PURE__ */ jsx(Button, { variant: "primary", disabled: true, isLoading: true, children: "Transferring" }) : /* @__PURE__ */ jsx(Button, { variant: "primary", onClick: onTransfer, children: "Transfer" }) : /* @__PURE__ */ jsx(Button, { variant: "primary", onClick: onConnect, children: chainId ? __export06(chainId) ? "Connect Aptos Wallet" : "Connect EVM Wallet" : "Connect" }),
      !activeWallet && /* @__PURE__ */ jsx(
        Text,
        {
          variant: "p3",
          color: theme.palette.text.secondary,
          sx: { textAlign: "center", mt: 3 },
          children: "Connect wallet to mint OFT tokens and start transferring."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      GasOnDestinationModal,
      {
        open: uiStore.dstNativeAmountModal.value,
        onClose: uiStore.dstNativeAmountModal.close
      }
    ),
    /* @__PURE__ */ jsx(AccountModal, { open: walletModal.value, onClose: onAccountModalClose })
  ] }) });
});
var renderOption = ({ chainId, overlay }) => {
  const network = __export10(chainId);
  const token = bridgeStore.tokens.find((i) => i.chainId === chainId);
  const tokenBalance = getWalletBalance(token);
  const fiatBalance = fiatStore.toFiatAmount(tokenBalance);
  return /* @__PURE__ */ jsx(
    ListItem,
    {
      startAdornment: /* @__PURE__ */ jsx(NetworkIcon, { chainId, size: 32 }),
      topLeft: network.name,
      topRight: fiatBalance ? "$" + fiatBalance.value.toFixed(2) : void 0,
      bottomLeft: network.symbol.toUpperCase(),
      bottomRight: tokenBalance == null ? void 0 : tokenBalance.toSignificant(4, {}),
      overlay: overlay && /* @__PURE__ */ jsx(Overlay3, { children: overlay })
    }
  );
};
function orderByBalance(options) {
  const sorted = options.slice().sort((a, b) => {
    const aCurrency = bridgeStore.tokens.find((i) => i.chainId === a.chainId);
    const bCurrency = bridgeStore.tokens.find((i) => i.chainId === b.chainId);
    let aBalance = getFiatBalance(aCurrency);
    let bBalance = getFiatBalance(bCurrency);
    if (aBalance === void 0)
      aBalance = -1;
    if (bBalance === void 0)
      bBalance = -1;
    return bBalance - aBalance;
  }).sort((a) => a.disabled ? 1 : -1);
  return sorted;
}
function getFiatBalance(currency) {
  const balance = getWalletBalance(currency);
  const fiatBalance = fiatStore.toFiatAmount(balance);
  return fiatBalance == null ? void 0 : fiatBalance.value;
}
function useIsConnected() {
  const { wallets } = walletStore;
  const { srcChainId, dstChainId } = bridgeStore.form;
  if (wallets.length === 0)
    return { isConnected: false };
  if (srcChainId && !wallets.some((wallet) => wallet.supports(srcChainId)))
    return { isConnected: false, chainId: srcChainId };
  if (dstChainId && !wallets.some((wallet) => wallet.supports(dstChainId)))
    return { isConnected: false, chainId: dstChainId };
  return { isConnected: true };
}
var Overlay3 = styled("div")({
  width: "40%",
  textAlign: "right"
});

// src/index.tsx
var joeBridge = {
  bridge: bridgeStore,
  wallet: walletStore,
  history: transactionStore
};

export { JoeBridge as Bridge, __export010 as Token, bootstrap, createWagmiAdapter, createWagmiProvider, joeBridge, themeDark, themeLight };
