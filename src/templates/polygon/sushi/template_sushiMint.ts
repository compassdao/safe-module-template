import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sushiMintTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: 'Sushi V3 Mint',
  contractAddress: '0xb7402ee99f0a008e461098ac3a27f4957df89a40',
  functionsConfig: [
    {
      sighash: '0x88316456',
      params: [
        {
          index: 9,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ],
}
