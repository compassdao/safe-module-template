import { ChainId, Template } from "../../typings"
import { generateUniqueId } from '../../utils'

export const aave2DepositTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: "Aave V2 Deposit ERC20",
  contractAddress: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
  functionsConfig: [
    {
      sighash: "0xe8eda9df",
      params: [
        {
          index: 2,
          autoFillingSafeAddress: true,
        },
        {
          index: 3,
          value: "0",
        },
      ],
    },
  ]

}
