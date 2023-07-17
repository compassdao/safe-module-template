import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const uniDecreaseLPTemplate: Template = {
  // 当前模版的ID
  id: generateUniqueId(),
  chainId: ChainId.ARBITRUM,
  templateName: 'Uniswap V3 Decrease Liquidity',
  contractAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  functionsConfig: [
    {
      sighash: '0xfc6f7865',
      params: [
        {
          index: 0,
          params: [
            {
              index: 1,
              autoFillingSafeAddress: true,
              require: true,
            },
          ],
        },
      ],
    },
    {
      sighash: '0x0c49ccbe',
    },
  ],
}
