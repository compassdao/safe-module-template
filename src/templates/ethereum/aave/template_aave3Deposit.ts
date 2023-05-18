import { ChainId, Template } from "@/typings"
import { generateUniqueId } from '@/utils'
export const aave3DepositTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: "Aave V3 Supply ERC20",
  contractAddress: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
  functionsConfig: [
    {
      sighash: "0x617ba037",
      params: [
        {
          index: 2,
          autoFillingSafeAddress: true,
        },

      ],
    },
  ]

}
