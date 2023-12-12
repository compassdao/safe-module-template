import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sparkRepayTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Spark Repay',
  contractAddress: '0xC13e21B648A5Ee794902342038FF3aDAB66BE987',
  functionsConfig: [
    {
      sighash: '0x573ade81',
      params: [
        {
          index: 0, // token
          require: true,
        },
        {
          index: 3, // onBehalfOf
          autoFillingSafeAddress: true,
          require: true,
        },
      ],
    },
  ],
}
