import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const sparkWithdrawTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Spark Withdraw',
  contractAddress: '0xC13e21B648A5Ee794902342038FF3aDAB66BE987',
  functionsConfig: [
    {
      sighash: '0x69328dec',
      params: [
        {
          index: 0, // token
          require: true,
        },
        {
          index: 2, // onBehalfOf
          autoFillingSafeAddress: true,
          require: true,
        },
      ],
    },
  ],
}
