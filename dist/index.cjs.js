"use strict";var e,a=function(){return(a=Object.assign||function(e){for(var a,i=1,n=arguments.length;i<n;i++)for(var s in a=arguments[i])Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);return e}).apply(this,arguments)};function i(e,a){var i="function"==typeof Symbol&&e[Symbol.iterator];if(!i)return e;var n,s,r=i.call(e),o=[];try{for(;(void 0===a||0<a--)&&!(n=r.next()).done;)o.push(n.value)}catch(e){s={error:e}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(s)throw s.error}}return o}function n(e,a,i){if(i||2===arguments.length)for(var n,s=0,r=a.length;s<r;s++)!n&&s in a||((n=n||Array.prototype.slice.call(a,0,s))[s]=a[s]);return e.concat(n||Array.prototype.slice.call(a))}function s(){function e(){for(var e=(new Date).getTime().toString().split("").reverse(),a="",i=0;i<3;i++)a+=e[Math.floor(Math.random()*e.length)];return a}function a(){return Math.random().toString(36).substring(2)}return"".concat(e()).concat(e()).concat(a()).concat(a())}exports.ChainId=void 0,(e=exports.ChainId||(exports.ChainId={}))[e.ETHEREUM=1]="ETHEREUM",e[e["GÖERLI"]=5]="GÖERLI",e[e.POLYGON=137]="POLYGON",e[e.ARBITRUM=42161]="ARBITRUM",e[e.OPTIMISM=10]="OPTIMISM",exports.Comparison=void 0,function(e){e[e.Eq=0]="Eq",e[e.Gte=1]="Gte",e[e.Lte=2]="Lte"}(exports.Comparison||(exports.Comparison={}));var r,o={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Uniswap V3 Collect Fees",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]}]},d={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Uniswap V3 Decrease Liquidity",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]},{sighash:"0x0c49ccbe"}]},t={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Uniswap V3 Mint",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0x88316456",params:[{index:0,require:!1},{index:1,require:!1},{index:9,autoFillingSafeAddress:!0,require:!0}]}]},p={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Uniswap V3 Router2 ExactInputSingle",contractAddress:"0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",functionsConfig:[{sighash:"0x04e45aaf",params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!0,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},c={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Aave V2 Deposit ERC20",contractAddress:"0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",functionsConfig:[{sighash:"0xe8eda9df",params:[{index:2,autoFillingSafeAddress:!0,require:!1},{index:3,value:"0",require:!1}]}]},x={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Aave V2 Repay ERC20",contractAddress:"0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",functionsConfig:[{sighash:"0x573ade81",params:[{index:3,autoFillingSafeAddress:!0,require:!0}]}]},m={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Aave V2 Withdraw ERC20",contractAddress:"0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",functionsConfig:[{sighash:"0x69328dec",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},f={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Aave V3 Supply ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0x617ba037",params:[{index:2,autoFillingSafeAddress:!0,require:!0},{index:3,value:"0",require:!1}]}]},h={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Aave V3 Repay ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0x573ade81",params:[{index:3,autoFillingSafeAddress:!0,require:!0}]}]},u={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Aave V3 Withdraw ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0x69328dec",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},l={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Sushi V3 Collect Fees",contractAddress:"0xb7402ee99f0a008e461098ac3a27f4957df89a40",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]}]},C={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Sushi V3 Decrease Liquidity",contractAddress:"0xb7402ee99f0a008e461098ac3a27f4957df89a40",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]},{sighash:"0x0c49ccbe"}]},g={id:s(),chainId:exports.ChainId.POLYGON,templateName:"Sushi V3 Mint",contractAddress:"0xb7402ee99f0a008e461098ac3a27f4957df89a40",functionsConfig:[{sighash:"0x88316456",params:[{index:9,autoFillingSafeAddress:!0}]}]},A={id:s(),chainId:exports.ChainId.POLYGON,templateName:"1inch Swap",contractAddress:"0x1111111254eeb25477b68fb85ed929f73a960582",functionsConfig:[{sighash:"0x84bd6d29",params:[{index:0,require:!1},{index:1,require:!1,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq}]},{sighash:"0x12aa3caf",params:[{index:1,params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},{sighash:"0x0502b1c5",params:[{index:0,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!1,comparison:exports.Comparison.Eq}]}]},I=[a({open:!0},o),a({open:!0},d),a({open:!0},t),a({open:!0},p)],E=[a({open:!0},f),a({open:!0},h),a({open:!0},u),a({open:!0},c),a({open:!0},x),a({open:!0},m)],q=[a({open:!0},l),a({open:!0},g),a({open:!0},C)],b=[a({open:!0},A)],D={open:!0,templates:n(n(n(n([],i(I),!1),i(E),!1),i(q),!1),i(b),!1)},F={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Uniswap V3 Collect Fees",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]}]},S={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Uniswap V3 Decrease Liquidity",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]},{sighash:"0x0c49ccbe"}]},R={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Uniswap V3 Mint",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0x88316456",params:[{index:0,require:!1},{index:1,require:!1},{index:9,autoFillingSafeAddress:!0,require:!0}]}]},N={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Uniswap V3 Router2 ExactInputSingle",contractAddress:"0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",functionsConfig:[{sighash:"0x04e45aaf",params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!0,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},M={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Aave V2 Deposit ERC20",contractAddress:"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",functionsConfig:[{sighash:"0xe8eda9df",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},O={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Aave V2 Repay ERC20",contractAddress:"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",functionsConfig:[{sighash:"0x573ade81",params:[{index:3,autoFillingSafeAddress:!0,require:!0}]}]},v={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Aave V2 Withdraw ERC20",contractAddress:"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",functionsConfig:[{sighash:"0x69328dec",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},U={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Aave V3 Supply ERC20",contractAddress:"0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",functionsConfig:[{sighash:"0x617ba037",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},V={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Aave V3 Repay ERC20",contractAddress:"0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",functionsConfig:[{sighash:"0x573ade81",params:[{index:3,autoFillingSafeAddress:!0,require:!0}]}]},B={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"Aave V3 Withdraw ERC20",contractAddress:"0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",functionsConfig:[{sighash:"0x69328dec",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},T={id:s(),chainId:exports.ChainId.ETHEREUM,templateName:"1inch Swap",contractAddress:"0x1111111254eeb25477b68fb85ed929f73a960582",functionsConfig:[{sighash:"0x84bd6d29",params:[{index:0,require:!1},{index:1,require:!1,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq}]},{sighash:"0x12aa3caf",params:[{index:1,params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},{sighash:"0x0502b1c5",params:[{index:0,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!1,comparison:exports.Comparison.Eq}]}]},y=[a({open:!0},F),a({open:!0},S),a({open:!0},R),a({open:!0},N)],w=[a({open:!0},M),a({open:!0},O),a({open:!0},v),a({open:!0},U),a({open:!0},V),a({open:!0},B)],L=[a({open:!0},T)],P={open:!0,templates:n(n(n([],i(y),!1),i(w),!1),i(L),!1)},G={id:s(),chainId:exports.ChainId.GÖERLI,templateName:"Uniswap V3 Collect Fees",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]}]},Y={id:s(),chainId:exports.ChainId.GÖERLI,templateName:"Uniswap V3 Decrease Liquidity",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]},{sighash:"0x0c49ccbe"}]},H={id:s(),chainId:exports.ChainId.GÖERLI,templateName:"Uniswap V3 Mint",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0x88316456",params:[{index:0,require:!1},{index:1,require:!1},{index:9,autoFillingSafeAddress:!0}]}]},W={id:s(),chainId:exports.ChainId.GÖERLI,templateName:"Uniswap V3 Router2 ExactInputSingle",contractAddress:"0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",functionsConfig:[{sighash:"0x04e45aaf",params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!0,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},j={open:!0,templates:n([],i([a({open:!0},G),a({open:!0},Y),a({open:!0},H),a({open:!0},W)]),!1)},k={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Uniswap V3 Collect Fees",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]}]},z={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Uniswap V3 Decrease Liquidity",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]},{sighash:"0x0c49ccbe"}]},J={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Uniswap V3 Mint",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0x88316456",params:[{index:0,require:!1},{index:1,require:!1},{index:9,autoFillingSafeAddress:!0,require:!0}]}]},K={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Uniswap V3 Router2 ExactInputSingle",contractAddress:"0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",functionsConfig:[{sighash:"0x04e45aaf",params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!0,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},Q={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Aave V3 Supply ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0xf7a73840"},{sighash:"0x617ba037",params:[{index:2,autoFillingSafeAddress:!0,require:!0},{index:3,value:"0"}]}]},X={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Aave V3 Repay ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0x563dd613"},{sighash:"0x573ade81",params:[{index:3,autoFillingSafeAddress:!0,require:!0}]}]},Z={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Aave V3 Withdraw ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0x8e19899e"},{sighash:"0x69328dec",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},$={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Sushi V3 Collect Fees",contractAddress:"0xf0cbce1942a68beb3d1b73f0dd86c8dcc363ef49",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]}]},_={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Sushi V3 Decrease Liquidity",contractAddress:"0xf0cbce1942a68beb3d1b73f0dd86c8dcc363ef49",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]},{sighash:"0x0c49ccbe"}]},ee={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"Sushi V3 Mint",contractAddress:"0xf0cbce1942a68beb3d1b73f0dd86c8dcc363ef49",functionsConfig:[{sighash:"0x88316456",params:[{index:9,autoFillingSafeAddress:!0}]}]},ae={id:s(),chainId:exports.ChainId.ARBITRUM,templateName:"1inch Swap",contractAddress:"0x1111111254eeb25477b68fb85ed929f73a960582",functionsConfig:[{sighash:"0x84bd6d29",params:[{index:0,require:!1},{index:1,require:!1,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq}]},{sighash:"0x12aa3caf",params:[{index:1,params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},{sighash:"0x0502b1c5",params:[{index:0,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!1,comparison:exports.Comparison.Eq}]}]},ie=[a({open:!0},k),a({open:!0},z),a({open:!0},J),a({open:!0},K)],ne=[a({open:!0},Q),a({open:!0},X),a({open:!0},Z)],se=[a({open:!0},ee),a({open:!0},_),a({open:!0},$)],re=[a({open:!0},ae)],oe={open:!0,templates:n(n(n(n([],i(ie),!1),i(se),!1),i(ne),!1),i(re),!1)},de={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Aave V3 Supply ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0xf7a73840"},{sighash:"0x617ba037",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},te={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Aave V3 Repay ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0x563dd613"},{sighash:"0x573ade81",params:[{index:3,autoFillingSafeAddress:!0,require:!0}]}]},pe={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Aave V3 Withdraw ERC20",contractAddress:"0x794a61358D6845594F94dc1DB02A252b5b4814aD",functionsConfig:[{sighash:"0x8e19899e"},{sighash:"0x69328dec",params:[{index:2,autoFillingSafeAddress:!0,require:!0}]}]},ce={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Uniswap V3 Collect Fees",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]}]},xe={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Uniswap V3 Decrease Liquidity",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0,require:!0}]},{sighash:"0x0c49ccbe"}]},me={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Uniswap V3 Mint",contractAddress:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88",functionsConfig:[{sighash:"0x88316456",params:[{index:0,require:!1},{index:1,require:!1},{index:9,autoFillingSafeAddress:!0,require:!0}]}]},fe={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Uniswap V3 Router2 ExactInputSingle",contractAddress:"0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",functionsConfig:[{sighash:"0x04e45aaf",params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!0,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},he={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Sushi V3 Collect Fees",contractAddress:"0x1af415a1eba07a4986a52b6f2e7de7003d82231e",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]}]},ue={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Sushi V3 Decrease Liquidity",contractAddress:"0x1af415a1eba07a4986a52b6f2e7de7003d82231e",functionsConfig:[{sighash:"0xfc6f7865",params:[{index:1,autoFillingSafeAddress:!0}]},{sighash:"0x0c49ccbe"}]},le={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"Sushi V3 Mint",contractAddress:"0x1af415a1eba07a4986a52b6f2e7de7003d82231e",functionsConfig:[{sighash:"0x88316456",params:[{index:9,value:"",autoFillingSafeAddress:!0}]}]},Ce={id:s(),chainId:exports.ChainId.OPTIMISM,templateName:"1inch Swap",contractAddress:"0x1111111254eeb25477b68fb85ed929f73a960582",functionsConfig:[{sighash:"0x84bd6d29",params:[{index:0,require:!1},{index:1,require:!1,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq}]},{sighash:"0x12aa3caf",params:[{index:1,params:[{index:0,require:!0,comparison:exports.Comparison.Eq},{index:1,require:!0,comparison:exports.Comparison.Eq},{index:2,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!0,comparison:exports.Comparison.Eq,autoFillingSafeAddress:!0}]}]},{sighash:"0x0502b1c5",params:[{index:0,require:!1,comparison:exports.Comparison.Eq},{index:3,require:!1,comparison:exports.Comparison.Eq}]}]},ge=[a({open:!0},ce),a({open:!0},xe),a({open:!0},me),a({open:!0},fe)],Ae=[a({open:!0},de),a({open:!0},te),a({open:!0},pe)],Ie=[a({open:!0},he),a({open:!0},ue),a({open:!0},le)],Ee=[a({open:!0},Ce)],qe={open:!0,templates:n(n(n(n([],i(ge),!1),i(Ae),!1),i(Ie),!1),i(Ee),!1)},be={open:!0,templates:((r={})[exports.ChainId.ETHEREUM]=P,r[exports.ChainId.ARBITRUM]=oe,r[exports.ChainId.GÖERLI]=j,r[exports.ChainId.OPTIMISM]=qe,r[exports.ChainId.POLYGON]=D,r)};exports.generateUniqueId=s,exports.getTemplates=function(e,a){if(null!=(a=void 0===a?be:a)&&a.open){var s;if(e)return null!=(s=null==a?void 0:a.templates[e])&&s.open&&null!=s&&s.templates?s.templates.filter((function(a){return(null==a?void 0:a.open)&&(null==a?void 0:a.chainId)===e&&(null==a?void 0:a.contractAddress)&&(null==a?void 0:a.id)&&(null==a?void 0:a.templateName)})):[];if(null!=a&&a.templates){var r,o,d=[];for(r in null==a?void 0:a.templates)Object.prototype.hasOwnProperty.call(null==a?void 0:a.templates,r)&&null!=(o=null==a?void 0:a.templates[r])&&o.open&&null!=o&&o.templates&&(o=o.templates.filter((function(a){return(null==a?void 0:a.open)&&(null==a?void 0:a.chainId)===e&&(null==a?void 0:a.contractAddress)&&(null==a?void 0:a.id)&&(null==a?void 0:a.templateName)})),d.push.apply(d,n([],i(o),!1)));return d}}return[]},exports.templatesController=be;
