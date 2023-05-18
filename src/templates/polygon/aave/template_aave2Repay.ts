import { ChainId, Template } from "@/typings"
import { generateUniqueId } from '@/utils'

export const aave2RepayTemplate: Template = {
  id:generateUniqueId(),
  chainId: ChainId.POLYGON,
  templateName: "Aave V2 Repay ERC20",
  contractAddress: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
  functionsConfig: [
    {
      sighash: "0x573ade81",
      params: [
        {
          index: 3,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ]
 
}
