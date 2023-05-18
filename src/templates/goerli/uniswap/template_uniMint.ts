import { ChainId, Template } from "@/typings"
import { generateUniqueId } from '@/utils'

export const uniMintTemplate: Template = {
  id: generateUniqueId(),
  chainId: ChainId.GÖERLI,
  templateName: "Uniswap V3 Mint",
  contractAddress: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  functionsConfig: [
    {
      sighash: "0x88316456",
      params: [
        {
          index: 9,
          autoFillingSafeAddress: true,
        },
      ],
    },
  ]

}
