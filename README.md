# Template


## e.g.
```ts
import { Template, ChainId, Comparison } from '@/typings'
import { generateUniqueId } from '@/utils'

export const aave3DepositTemplate: Template = {
  /**
   * Please use the “generateUniqueId” method to generate a unique ID.
   */
  id: generateUniqueId(),



  /**
   * Currently, only the following five networks are supported: ChainId.ARBITRUM, ChainId.ETHEREUM, ChainId.GOERLI, ChainId.POLYGON, ChainId.OPTIMISM.
   * Please avoid adding any networks other than these five.
   */
  chainId: ChainId.ARBITRUM,



  /**
   * The current template name should be as simple and concise as possible.
   */
  templateName: "Aave V3 Supply ERC20",



  /**
   * Please make sure the contract address matches the current network, as the contract address may differ between networks.
   */
  contractAddress: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",



  /**
   * Configure the relevant methods and parameters for the current contract.
   */
  functionsConfig: [
    {
      /**
       * "The method's sighash."
       * e.g. supply => 0x563dd613
       */
      sighash: '0x563dd613',


      /**
       * What are the parameters for the method with sighash.
       */
      params: [
        {
          /**
           * The current parameter index, starting from zero.
           */
          index: 0,


          /**
           * What is the value of the current parameter.
           */
          value: '',


          /**
           * Should the current parameter value be automatically filled with the safe address.
           * If not needed, please delete this field or change it to  `false`
           */
          autoFillingSafeAddress: true,


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
          comparison: Comparison.Eq
        },
      ]
    }
  ],
}

```