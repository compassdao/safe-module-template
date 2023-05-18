import { ChainId, Template } from "@/typings"
import { generateUniqueId } from '@/utils'
export const aave2WithdrawTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.ETHEREUM,
  templateName: "Aave V2 Withdraw ERC20",
  contractAddress: "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
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
