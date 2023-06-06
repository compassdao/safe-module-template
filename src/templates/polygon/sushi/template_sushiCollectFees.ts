import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sushiCollectFeesTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: 'Sushi V3 Collect Fees',
  contractAddress: '0xb7402ee99f0a008e461098ac3a27f4957df89a40',
  functionsConfig: [
    {
      sighash: '0xfc6f7865',
      params: [
        {
          index: 1,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ],
}
