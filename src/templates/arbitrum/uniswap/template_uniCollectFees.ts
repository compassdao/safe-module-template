import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const uniCollectFeesTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ARBITRUM,
  templateName: 'Uniswap V3 Collect Fees',
  contractAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  functionsConfig: [
    {
      sighash: '0xfc6f7865',
      params: [
        {
          index: 1,
          autoFillingSafeAddress: true,
          require: true,
        },
      ],
    },
  ],
}
