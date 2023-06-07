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
]

const sushi = [
  {
    open: true,
    ...sushiCollectFeesTemplate,
  },
  {
    open: true,
    ...sushiMintTemplate,
  },
  {
    open: true,
    ...sushiDecreaseLPTemplate,
  },
]

export const polygonTemplatesController: TemplatesController = {
  open: true,
  templates: [...uni, ...aave, ...sushi],
}
export default polygonTemplatesController
