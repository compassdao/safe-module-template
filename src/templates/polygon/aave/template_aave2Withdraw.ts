import { ChainId, Template } from "@/typings"
import { generateUniqueId } from '@/utils'

export const aave2WithdrawTemplate: Template = {
  id:generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: "Aave V2 Withdraw ERC20",
  contractAddress: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
  functionsConfig: [
    {
      sighash: "0x69328dec",
      params: [
        {
          index: 2,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ]

}
