import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const uniMintTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ARBITRUM,
  templateName: 'Uniswap V3 Mint',
  contractAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  functionsConfig: [
    {
      sighash: '0x88316456',
      params: [
        {
          index: 0,
          require: false,
        },
        {
          index: 1,
          require: false,
        },
        {
          index: 9,
          autoFillingSafeAddress: true,
          require: true,
        },
      ],
    },
  ],
}
