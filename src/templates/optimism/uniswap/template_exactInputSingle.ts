import { ChainId, Comparison, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const uniExactInputSingleTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.OPTIMISM,
  templateName: 'Uniswap V3 Router2 ExactInputSingle',
  contractAddress: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
  functionsConfig: [
    {
      sighash: '0x04e45aaf',
      params: [
        {
          index: 0, // tokenIn
          require: true,
          comparison: Comparison.Eq,
        },
        {
          index: 1, // tokenOut
          require: true,
          comparison: Comparison.Eq,
        },
        {
          index: 2, // fee
          require: true,
          comparison: Comparison.Eq,
        },
        {
          index: 3, // recipient
          require: true,
          comparison: Comparison.Eq,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ],
}
