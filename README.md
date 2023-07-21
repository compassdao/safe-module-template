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

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | Yes | The unique identifier of the template, which can be generated using the generateUniqueId function. | - |
| chainId | ChainId | Yes | The ID of the chain, such as ChainId.ARBITRUM. |
| templateName | String | Yes | The name of the template. | - |
| contractAddress | String | Yes | The address of the smart contract. |
| functionsConfig | Array | Yes | An array of function configurations. |

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

| Parameter | Type | Required | Description | Nested Parameters |
| --- | --- | --- | --- | --- |
| sighash | String | Yes | The signature hash of the function. | - |
| ethValue | Object | No | The signature hash of the function. | <table style="border-collapse: collapse"><thead><tr><th style="border: 1px solid black; text-align: center">Parmeter</th><th style="border: 1px solid black; text-align: center">Type</th><th style="border: 1px solid black; text-align: center">Required</th><th style="border: 1px solid black; text-align: center">Description</th><th style="border: 1px solid black; text-align: center">Nested Parameters</th></tr></thead><tr><td style="border: 1px solid black; text-align: center">value</td><td style="border: 1px solid black; text-align: center">String</td><td style="border: 1px solid black; text-align: center">No</td><td style="border: 1px solid black; text-align: center">The current value of ethValue.</td><td style="border: 1px solid black; text-align: center">-</td></tr><tr><td style="border: 1px solid black; text-align: center">comparison</td><td style="border: 1px solid black; text-align: center">Comparison</td><td style="border: 1px solid black; text-align: center">No</td><td style="border: 1px solid black; text-align: center">The current operator of ethValue, currently only supports Comparison.Eq (equal to).</td><td style="border: 1px solid black; text-align: center">-</td></tr></table> |
| params | Array |  No | The parameter array of the current function. | <table style="border-collapse: collapse;"><thead><tr><th style="border: 1px solid black;text-align: center;">Parmeter</th><th style="border: 1px solid black;text-align: center;">Type</th><th style="border: 1px solid black;text-align: center;">Required</th><th style="border: 1px solid black;text-align: center;">Description</th><th style="border: 1px solid black;text-align: center;">Nested Parameters</th></tr></thead><tr><td style="border: 1px solid black;text-align: center;">index</td><td style="border: 1px solid black;text-align: center;">Number</td><td style="border: 1px solid black;text-align: center;">Yes</td><td style="border: 1px solid black;text-align: center;">The index of the parameter.</td><td style="border: 1px solid black;text-align: center;">-</td></tr><tr><td style="border: 1px solid black;text-align: center;">autoFillingSafeAddress</td><td style="border: 1px solid black;text-align: center;">Boolean</td><td style="border: 1px solid black;text-align: center;">No</td><td style="border: 1px solid black;text-align: center;">Whether to automatically fill in the safe address.</td><td style="border: 1px solid black;text-align: center;">-</td></tr><tr><td style="border: 1px solid black;text-align: center;">require</td><td style="border: 1px solid black;text-align: center;">Boolean</td><td style="border: 1px solid black;text-align: center;">No</td><td style="border: 1px solid black;text-align: center;">Is it necessary to fill in? If true, the UI page will prompt in red, if false, it will prompt in yellow. If this field is not filled in, there will be no prompt.</td><td style="border: 1px solid black;text-align: center;">-</td></tr><tr><td style="border: 1px solid black;text-align: center;">value</td><td style="border: 1px solid black;text-align: center;">String</td><td style="border: 1px solid black;text-align: center;">No</td><td style="border: 1px solid black;text-align: center;">What is the value of the current parameter</td><td style="border: 1px solid black;text-align: center;">-</td></tr><tr><td style="border: 1px solid black;text-align: center;">comparison</td><td style="border: 1px solid black;text-align: center;">Comparison</td><td style="border: 1px solid black;text-align: center;">No</td><td style="border: 1px solid black;text-align: center;">Current parameter operator. There are three types of operators in total" are Comparison.Eq (equal to), Comparison.Lte (less than or equal to), and Comparison.Gte (greater than or equal to).</td><td style="border: 1px solid black;text-align: center;">-</td></tr><tr><td style="border: 1px solid black;text-align: center;">params</td><td style="border: 1px solid black;text-align: center;">Boolean</td><td style="border: 1px solid black;text-align: center;">No</td><td style="border: 1px solid black;text-align: center;">This field is only used when there is a tuple type in the current function parameters. The parameters in the array are the same as the parent params.</td><td style="border: 1px solid black;text-align: center;">The parameters in the array are the same as the parent params.</td></tr></table>  |

```ts
const functionsConfig = [
  {
    sighash: '0x04e45aaf', // This function only has one parameter and it is of tuple type.
    params:[
      {
        index: 0,
        params:[
          {
            index: 3,
            require: true,
            autoFillingSafeAddress: true,
          }
        ]
      }
    ]
  }
]
export const uniExactInputSingleTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: 'Uniswap V3 Router2 ExactInputSingle',
  contractAddress: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
  functionsConfig: functionsConfig,
}
```
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
