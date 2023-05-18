import { ChainId, Template } from "@/typings"
import { generateUniqueId } from '@/utils'

export const aave3DepositTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: "Aave V3 Supply ERC20",
  contractAddress: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  functionsConfig: [
    {
      sighash: "0x617ba037",
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
