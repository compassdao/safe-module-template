import { uniCollectFeesTemplate } from "./template_uniCollectFees"
import { uniDecreaseLPTemplate } from "./template_uniDecreaseLP"
import { uniMintTemplate } from "./template_uniMint"

import { aave2DepositTemplate } from "./template_aave2Deposit"
import { aave2RepayTemplate } from "./template_aave2Repay"
import { aave2WithdrawTemplate } from "./template_aave2Withdraw"

import { aave3DepositTemplate } from "./template_aave3Deposit"
import { aave3RepayTemplate } from "./template_aave3Repay"
import { aave3WithdrawTemplate } from "./template_aave3Withdraw"

export const ethereumTemplates = [
  uniCollectFeesTemplate,
  uniDecreaseLPTemplate,
  uniMintTemplate,
  aave2DepositTemplate,
  aave2RepayTemplate,
  aave2WithdrawTemplate,
  aave3DepositTemplate,
  aave3RepayTemplate,
  aave3WithdrawTemplate,
]

export default ethereumTemplates
