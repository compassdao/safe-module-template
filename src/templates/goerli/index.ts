import { uniCollectFeesTemplate } from "./template_uniCollectFees"
import { uniDecreaseLPTemplate } from "./template_uniDecreaseLP"
import { uniMintTemplate } from "./template_uniMint"

import { TemplatesController } from '../../typings'

export const goerliTemplatesController: TemplatesController = {
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
    ]
}

export default goerliTemplatesController