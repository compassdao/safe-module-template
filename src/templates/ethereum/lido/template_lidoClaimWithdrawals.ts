import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const lidoClaimWithdrawalsTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Lido Claim Withdrawals',
  contractAddress: '0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1',
  functionsConfig: [
    {
      sighash: '0xe3afe0a3',
      params: [

      ],
    },
  ],
}
