import {
  uniCollectFeesTemplate,
  uniDecreaseLPTemplate,
  uniExactInputSingleTemplate,
  uniMintTemplate,
} from '@/templates/arbitrum/uniswap/index'
import {
  aave3DepositTemplate,
  aave3RepayTemplate,
  aave3WithdrawTemplate,
} from '@/templates/arbitrum/aave/index'
import {
  sushiMintTemplate,
  sushiDecreaseLPTemplate,
  sushiCollectFeesTemplate,
} from '@/templates/arbitrum/sushi/index'
import { TemplatesController } from '@/typings'
import { $1inchSwapTemplate } from './1inch'
import { createTemplateArray } from '@/utils'

// The 'uni' constant is an array of template objects created by the 'createTemplateArray' function.
// The first argument is an array of templates related to Uniswap operations.
// The second argument is an array of boolean values indicating whether the corresponding template is active or not.
// For example, 'uniCollectFeesTemplate' is active (true), while 'uniDecreaseLPTemplate' is not active (false).
const uni = createTemplateArray(
  [
    uniCollectFeesTemplate,
    uniDecreaseLPTemplate,
    uniMintTemplate,
    uniExactInputSingleTemplate,
  ],
  [true, true, true, true]
)

const aave = createTemplateArray(
  [aave3DepositTemplate, aave3RepayTemplate, aave3WithdrawTemplate],
  [true, true, true]
)

const sushi = createTemplateArray(
  [sushiMintTemplate, sushiDecreaseLPTemplate, sushiCollectFeesTemplate],
  [true, true, true]
)

const $1inch = createTemplateArray([$1inchSwapTemplate], [true])

export const arbitrumTemplatesController: TemplatesController = {
  open: true,
  templates: [...uni, ...sushi, ...aave, ...$1inch],
}

export default arbitrumTemplatesController
