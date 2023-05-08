import { uniCollectFeesTemplate } from "./template_uniCollectFees"
import { uniDecreaseLPTemplate } from "./template_uniDecreaseLP"
import { uniMintTemplate } from "./template_uniMint"

import { aave3DepositTemplate } from "./template_aave3Deposit"
import { aave3RepayTemplate } from "./template_aave3Repay"
import { aave3WithdrawTemplate } from "./template_aave3Withdraw"

export const ethereumTemplates = [
  uniCollectFeesTemplate,
  uniDecreaseLPTemplate,
  uniMintTemplate,
  aave3DepositTemplate,
  aave3RepayTemplate,
  aave3WithdrawTemplate,
]

export default ethereumTemplates
