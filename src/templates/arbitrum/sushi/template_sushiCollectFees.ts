import { ChainId, Template } from "@/typings"
import { generateUniqueId } from '@/utils'

export const sushiCollectFeesTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ARBITRUM,
  templateName: "Sushi V3 Collect Fees",
  contractAddress: "0xf0cbce1942a68beb3d1b73f0dd86c8dcc363ef49",
  functionsConfig: [
    {
      sighash: "0xfc6f7865",
      params: [
        {
          index: 1,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ]
}
