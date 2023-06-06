import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sushiCollectFeesTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.OPTIMISM,
  templateName: 'Sushi V3 Collect Fees',
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
  ],
}
