import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sushiMintTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.OPTIMISM,
  templateName: 'Sushi V3 Mint',
  contractAddress: '0x1af415a1eba07a4986a52b6f2e7de7003d82231e',
  functionsConfig: [
    {
      sighash: '0x88316456',
      params: [
        {
          index: 9,
          value: '',
          autoFillingSafeAddress: true,
        },
      ],
    },
  ],
}
