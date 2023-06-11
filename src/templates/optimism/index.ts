import {
  aave3DepositTemplate,
  aave3RepayTemplate,
  aave3WithdrawTemplate,
} from '@/templates/optimism/aave/index'
import {
  uniCollectFeesTemplate,
  uniDecreaseLPTemplate,
  uniExactInputSingleTemplate,
  uniMintTemplate,
} from '@/templates/optimism/uniswap/index'
import {
  sushiCollectFeesTemplate,
  sushiDecreaseLPTemplate,
  sushiMintTemplate,
} from '@/templates/optimism/sushi/index'

import { TemplatesController } from '@/typings/index'
import { $1inchSwapTemplate } from './1inch'

const uni = [
  {
    open: true,
    ...uniCollectFeesTemplate,
  },
  {
    open: true,
    ...uniDecreaseLPTemplate,
  },
  {
    open: true,
    ...uniMintTemplate,
  },
  {
    open: true,
    ...uniExactInputSingleTemplate,
  },
]

const aave = [
  {
    open: true,
    ...aave3DepositTemplate,
  },
  {
    open: true,
    ...aave3RepayTemplate,
  },
  {
    open: true,
    ...aave3WithdrawTemplate,
  },
]

const sushi = [
  {
    open: true,
    ...sushiCollectFeesTemplate,
  },
  {
    open: true,
    ...sushiDecreaseLPTemplate,
  },
  {
    open: true,
    ...sushiMintTemplate,
  },
]

const $1inch = [
  {
    open: true,
    ...$1inchSwapTemplate,
  },
]

export const optimismTemplatesController: TemplatesController = {
  open: true,
  templates: [...uni, ...aave, ...sushi, ...$1inch],
}

export default optimismTemplatesController
