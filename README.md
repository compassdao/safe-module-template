# Safe-Module-Template Configuration Guide

Safe-Module-Template is a tool for configuring smart contract templates. Here are the steps to configure a template:

### Step 1: Import Necessary Libraries and Tools
At the beginning of the file, we need to import some necessary libraries and tools. For example, we need the ChainId, Comparison and Template types, and the generateUniqueId function.

```ts
import { Template, ChainId, Comparison } from '@/typings'
import { generateUniqueId } from '@/utils'
```
### Step 2: Create Template Object
Next, we need to create a template object. This object needs to include the following properties:
- id: The unique identifier of the template, which can be generated using the generateUniqueId function.
- chainId: The ID of the chain, such as ChainId.ARBITRUM.
- templateName: The name of the template.
- contractAddress: The address of the smart contract.
- functionsConfig: An array of function configurations.

```ts
export const uniExactInputSingleTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: 'Uniswap V3 Router2 ExactInputSingle',
  contractAddress: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
  functionsConfig: [],
}
```
### Step 3: Configure Functions
In the functionsConfig array, we need to configure an object for each function. This object needs to include the following properties:

- sighash: The signature hash of the function.
- params: This field is only used when there is a tuple type in the current function parameters.
- index: The index of the parameter.
- autoFillingSafeAddress: Whether to automatically fill in the safe address.
- require: Is it necessary to fill in? If true, the UI page will prompt in red, if false, it will prompt in yellow. If this field is not filled in, there will be no prompt.
- value: What is the value of the current parameter.
- comparison: Current parameter operator
### Complete Example

```ts
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
```
