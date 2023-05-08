import { ChainId, Template } from "../../typings"
import { generateUniqueId } from '../../utils'
export const aave2RepayTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: "Aave V2 Repay ERC20",
  contractAddress: "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
  functionsConfig: [
    {
      sighash: "0x573ade81",
      params: [
        {
          index: 3,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ]

}
