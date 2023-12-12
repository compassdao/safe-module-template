import { Template, ChainId } from '@/typings'
import { generateUniqueId } from '@/utils'

export const lidoSubmitTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Lido Submit',
  contractAddress: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  functionsConfig: [
    {
      sighash: '0xa1903eab',
      params: [

      ],
    },
  ],
}
