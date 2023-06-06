import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sushiDecreaseLPTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.OPTIMISM,
  templateName: 'Sushi V3 Decrease Liquidity',
  contractAddress: '0x1af415a1eba07a4986a52b6f2e7de7003d82231e',
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
    {
      sighash: '0x0c49ccbe',
    },
  ],
}
