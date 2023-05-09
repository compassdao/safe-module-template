import { uniCollectFeesTemplate } from "./template_uniCollectFees"
import { uniDecreaseLPTemplate } from "./template_uniDecreaseLP"
import { uniMintTemplate } from "./template_uniMint"

import { aave3DepositTemplate } from "./template_aave3Deposit"
import { aave3RepayTemplate } from "./template_aave3Repay"
import { aave3WithdrawTemplate } from "./template_aave3Withdraw"

import { aave2DepositTemplate } from "./template_aave2Deposit"
import { aave2RepayTemplate } from "./template_aave2Repay"
import { aave2WithdrawTemplate } from "./template_aave2Withdraw"

import { TemplatesController } from '../../typings'


export const polygonTemplatesController: TemplatesController = {
  open: true,
  templates: [
    {
      open: true,
      ...uniCollectFeesTemplate
    },
    {
      open: true,
      ...uniDecreaseLPTemplate
    },
    {
      open: true,
      ...uniMintTemplate
    },
    {
      open: true,
      ...aave3DepositTemplate
    },
    {
      open: true,
      ...aave3RepayTemplate
    },
    {
      open: true,
      ...aave3WithdrawTemplate
    },
    {
      open: true,
      ...aave2DepositTemplate
    },
    {
      open: true,
      ...aave2RepayTemplate
    },
    {
      open: true,
      ...aave2WithdrawTemplate
    },
  ]
}
export default polygonTemplatesController