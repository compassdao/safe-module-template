import { ChainId, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const aave3WithdrawTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.OPTIMISM,
  templateName: 'Aave V3 Withdraw ERC20',
  contractAddress: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
  functionsConfig: [
    {
      sighash: '0x8e19899e',
    },
    {
      sighash: '0x69328dec',
      params: [
        {
          index: 2,
          autoFillingSafeAddress: true,
          require: true,
        },
      ],
    },
  ],
}
