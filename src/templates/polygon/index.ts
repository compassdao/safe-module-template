import {
  uniCollectFeesTemplate,
  uniDecreaseLPTemplate,
  uniExactInputSingleTemplate,
  uniMintTemplate,
} from '@/templates/polygon/uniswap/index'
import {
  aave3DepositTemplate,
  aave3RepayTemplate,
  aave3WithdrawTemplate,
  aave2DepositTemplate,
  aave2RepayTemplate,
  aave2WithdrawTemplate,
} from '@/templates/polygon/aave/index'
import {
  sushiCollectFeesTemplate,
  sushiMintTemplate,
  sushiDecreaseLPTemplate,
} from '@/templates/polygon/sushi/index'
import { TemplatesController } from '@/typings/index'
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
  [
    aave3DepositTemplate,
    aave3RepayTemplate,
    aave3WithdrawTemplate,
    aave2DepositTemplate,
    aave2RepayTemplate,
    aave2WithdrawTemplate,
  ],
  [true, true, true, true, true, true]
)

const sushi = createTemplateArray(
  [sushiCollectFeesTemplate, sushiMintTemplate, sushiDecreaseLPTemplate],
  [true, true, true]
)

const $1inch = createTemplateArray([$1inchSwapTemplate], [true])

export const polygonTemplatesController: TemplatesController = {
  open: true,
  templates: [...uni, ...aave, ...sushi, ...$1inch],
}

export default polygonTemplatesController
