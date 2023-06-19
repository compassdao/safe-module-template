import { ChainId, Comparison, Template } from '@/typings'
import { generateUniqueId } from '@/utils'

export const $1inchSwapTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: '1inch Swap',
  contractAddress: '0x1111111254eeb25477b68fb85ed929f73a960582',
  functionsConfig: [
    {
      sighash: '0x84bd6d29', // clipperSwap
      params: [
        {
          index: 0, // clipperExchange
          require: false,
        },
        {
          index: 1, // srcToken
          require: true,
          comparison: Comparison.Eq,
        },
        {
          index: 2, // dstToken
          require: true,
          comparison: Comparison.Eq,
        },
      ],
    },
    {
      sighash: '0x12aa3caf', // swap
      params: [
        {
          index: 1, // desc
          params: [
            {
              index: 0, // srcToken
              require: true,
              comparison: Comparison.Eq,
            },
            {
              index: 1, // dstToken
              require: true,
              comparison: Comparison.Eq,
            },
            {
              index: 2, // srcReceiver
              require: true,
              comparison: Comparison.Eq,
            },
            {
              index: 3, // dstReceiver
              require: true,
              comparison: Comparison.Eq,
            },
          ],
        },
      ],
    },
  ],
}
