import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const lidoWrapTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Lido Wrap',
  contractAddress: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  functionsConfig: [
    {
      sighash: '0xea598cb0',
      params: [

      ],
    },
  ],
}
