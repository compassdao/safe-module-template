import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const lidoRequestWithdrawalsWstETHTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Lido Request Withdrawals WstETH',
  contractAddress: '0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1',
  functionsConfig: [
    {
      sighash: '0x19aa6257',
      params: [
        {
          index: 1,
          autoFillingSafeAddress: true,
          require: true,
        },
      ],
    },
  ],
}
