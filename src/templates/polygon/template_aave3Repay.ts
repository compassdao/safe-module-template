import { ChainId, Template } from "../../typings"
import { generateUniqueId } from '../../utils'

export const aave3RepayTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: "Aave V3 Repay ERC20",
  contractAddress: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
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
