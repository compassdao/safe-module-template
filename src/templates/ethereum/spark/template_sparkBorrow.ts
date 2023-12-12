import { Template, ChainId } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sparkBorrowTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Spark Borrow',
  contractAddress: '0xC13e21B648A5Ee794902342038FF3aDAB66BE987',
  functionsConfig: [
    {
      sighash: '0xa415bcad',
      params: [
        {
          index: 0, // token
          require: true,
        },
        {
          index: 4, // onBehalfOf
          autoFillingSafeAddress: true,
          require: true,
        },
      ],
    },
  ],
}
