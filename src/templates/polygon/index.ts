import { uniCollectFeesTemplate } from "./template_uniCollectFees"
import { uniDecreaseLPTemplate } from "./template_uniDecreaseLP"
import { uniMintTemplate } from "./template_uniMint"

import { aave3DepositTemplate } from "./template_aave3Deposit"
import { aave3RepayTemplate } from "./template_aave3Repay"
import { aave3WithdrawTemplate } from "./template_aave3Withdraw"

import { aave2DepositTemplate } from "./template_aave2Deposit"
import { aave2RepayTemplate } from "./template_aave2Repay"
import { aave2WithdrawTemplate } from "./template_aave2Withdraw"

export const polygonTemplates = [
  uniCollectFeesTemplate,
  uniDecreaseLPTemplate,
  uniMintTemplate,
  // V3
  aave3DepositTemplate,
  aave3RepayTemplate,
  aave3WithdrawTemplate,
  // V2
  aave2DepositTemplate,
  aave2RepayTemplate,
  aave2WithdrawTemplate,
]

export default polygonTemplates
