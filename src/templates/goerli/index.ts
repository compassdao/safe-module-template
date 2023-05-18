import { uniCollectFeesTemplate, uniDecreaseLPTemplate, uniMintTemplate } from '@/templates/goerli/uniswap/index'
import { TemplatesController } from '@/typings/index'

const uni = [
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
]

export const goerliTemplatesController: TemplatesController = {
    open: true,
    templates: [
        ...uni,
    ]
}

export default goerliTemplatesController