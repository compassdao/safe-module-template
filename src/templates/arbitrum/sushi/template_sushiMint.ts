import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sushiMintTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ARBITRUM,
  templateName: 'Sushi V3 Mint',
  contractAddress: '0xf0cbce1942a68beb3d1b73f0dd86c8dcc363ef49',
  functionsConfig: [
    {
      sighash: '0x88316456',
      params: [
        {
          index: 0,
          params: [
            {
              index: 9,
              autoFillingSafeAddress: true,
            },
          ],
        },
      ],
    },
  ],
}
