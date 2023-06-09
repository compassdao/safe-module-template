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

const aaveV3 = [
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
    ...sushiMintTemplate,
  },
  {
    open: true,
    ...sushiDecreaseLPTemplate,
  },
  {
    open: true,
    ...sushiCollectFeesTemplate,
  },
]

const $1inch = [
  {
    open: true,
    ...$1inchSwapTemplate,
  },
]

export const arbitrumTemplatesController: TemplatesController = {
  open: true,
  templates: [...uni, ...sushi, ...aaveV3, ...$1inch],
}

export default arbitrumTemplatesController
