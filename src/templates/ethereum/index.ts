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
    ...aave2DepositTemplate,
  },
  {
    open: true,
    ...aave2RepayTemplate,
  },
  {
    open: true,
    ...aave2WithdrawTemplate,
  },
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

const $1inch = [
  {
    open: true,
    ...$1inchSwapTemplate,
  },
]

export const ethereumTemplatesController: TemplatesController = {
  open: true,
  templates: [...uni, ...aave, ...$1inch],
}

export default ethereumTemplatesController
