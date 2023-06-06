import { Template, ChainId } from '@/typings'
import { generateUniqueId } from '@/utils'

export const aave2DepositTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: 'Aave V2 Deposit ERC20',
  contractAddress: '0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9',
  functionsConfig: [
    {
      sighash: '0xe8eda9df',
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
