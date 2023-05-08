import { ChainId, Template } from "../../typings"
import { generateUniqueId } from '../../utils'

export const aave3WithdrawTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: "Aave V3 Withdraw ERC20",
  contractAddress: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
  functionsConfig: [
    {
      sighash: "0x69328dec",
      params: [
        {
          index: 2,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ]
 
}
