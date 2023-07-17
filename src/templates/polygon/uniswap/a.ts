import { Template, ChainId, Comparison } from '@/typings'
import { generateUniqueId } from '@/utils'

export const uniExactInputSingleTemplate: Template = {
  /**
   * Please use the “generateUniqueId” method to generate a unique ID.
   */
  id: generateUniqueId(),

  /**
   * Currently, only the following five networks are supported: ChainId.ARBITRUM, ChainId.ETHEREUM, ChainId.GOERLI, ChainId.POLYGON, ChainId.OPTIMISM.
   * Please avoid adding any networks other than these five.
   */
  chainId: ChainId.POLYGON,

  /**
   * The current template name should be as simple and concise as possible.
   */
  templateName: 'Uniswap V3 Router2 ExactInputSingle',

  /**
   * Please make sure the contract address matches the current network, as the contract address may differ between networks.
   */
  contractAddress: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',

  /**
   * Configure the relevant methods and parameters for the current contract.
   */
  functionsConfig: [
    {
      /**
       * "The method's sighash."
       * e.g. supply => 0x563dd613
       */
      sighash: '0x04e45aaf',

      /**
       * What are the parameters for the method with sighash.
       */
      params: [
        {
          index: 0,
          params: [
            // tokenIn
            {
              /**
               * The current parameter index, starting from zero.
               */
              index: 0,
              /**
               * Is a value for this parameter required?
               */
              require: true,
              /**
               * The operator parameter is used to determine whether the permission should be greater than or equal to,
               * less than or equal to, or equal to the current value when checking permissions.
               *
               * Greater than or equal to   =>    Comparison.Gte
               * Less than or equal to      =>    Comparison.Lte
               * Equal to                   =>    Comparison.Eq
               */
              comparison: Comparison.Eq,
            },
            // tokenOut
            {
              /**
               * The current parameter index, starting from zero.
               */
              index: 1,
              /**
               * Is a value for this parameter required?
               */
              require: true,
              /**
               * The operator parameter is used to determine whether the permission should be greater than or equal to,
               * less than or equal to, or equal to the current value when checking permissions.
               *
               * Greater than or equal to   =>    Comparison.Gte
               * Less than or equal to      =>    Comparison.Lte
               * Equal to                   =>    Comparison.Eq
               */
              comparison: Comparison.Eq,
            },
            // fee
            {
              /**
               * The current parameter index, starting from zero.
               */
              index: 2,
              /**
               * Is a value for this parameter required?
               */
              require: true,
              /**
               * The operator parameter is used to determine whether the permission should be greater than or equal to,
               * less than or equal to, or equal to the current value when checking permissions.
               *
               * Greater than or equal to   =>    Comparison.Gte
               * Less than or equal to      =>    Comparison.Lte
               * Equal to                   =>    Comparison.Eq
               */
              comparison: Comparison.Eq,
            },
            // recipient
            {
              /**
               * The current parameter index, starting from zero.
               */
              index: 3,
              /**
               * Is a value for this parameter required?
               */
              require: true,

              /**
               * The operator parameter is used to determine whether the permission should be greater than or equal to,
               * less than or equal to, or equal to the current value when checking permissions.
               *
               * Greater than or equal to   =>    Comparison.Gte
               * Less than or equal to      =>    Comparison.Lte
               * Equal to                   =>    Comparison.Eq
               */
              comparison: Comparison.Eq,

              /**
               * Should the current parameter value be automatically filled with the safe address.
               * If not needed, please delete this field or change it to  `false`
               */
              autoFillingSafeAddress: true,
            },
          ],
        },
      ],
    },
  ],
}
