import { TemplatesController } from '@/typings/index'
import { createTemplateArray } from '@/utils'
import {
  uniCollectFeesTemplate,
  uniDecreaseLPTemplate,
  uniExactInputSingleTemplate,
  uniMintTemplate,
} from '@/templates/ethereum/uniswap/index'
import {
  aave2DepositTemplate,
  aave2RepayTemplate,
  aave2WithdrawTemplate,
  aave3DepositTemplate,
  aave3RepayTemplate,
  aave3WithdrawTemplate,
} from '@/templates/ethereum/aave/index'
import { $1inchSwapTemplate } from './1inch'
import { 
  lidoClaimWithdrawalsTemplate,
  lidoRequestWithdrawalsWstETHTemplate,
  lidoSubmitTemplate,
  lidoWrapTemplate,
} from './lido'
import {
  sparkBorrowTemplate,
  sparkRepayTemplate,
  sparkSupplyTemplate,
  sparkWithdrawTemplate,
  } from './spark'


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
    aave2DepositTemplate,
    aave2RepayTemplate,
    aave2WithdrawTemplate,
    aave3DepositTemplate,
    aave3RepayTemplate,
    aave3WithdrawTemplate,
  ],
  [true, true, true, true, true, true]
)

const $1inch = createTemplateArray([$1inchSwapTemplate], [true])

const lido = createTemplateArray(
  [
    lidoClaimWithdrawalsTemplate,
    lidoRequestWithdrawalsWstETHTemplate,
    lidoSubmitTemplate,
    lidoWrapTemplate,
  ],
  [true, true, true, true]
)

const spark = createTemplateArray(
  [
    sparkBorrowTemplate,
    sparkRepayTemplate,
    sparkSupplyTemplate,
    sparkWithdrawTemplate,
  ],
  [true, true, true, true]
)

export const ethereumTemplatesController: TemplatesController = {
  open: true,
  templates: [...uni, ...aave, ...$1inch, ...lido, ...spark],
}

export default ethereumTemplatesController
