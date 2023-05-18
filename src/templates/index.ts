import polygonTemplatesController from "./polygon/index"
import ethereumTemplatesController from "./ethereum/index"
import goerliTemplatesController from "./goerli/index"
import arbitrumTemplatesController from "./arbitrum/index"
import optimismTemplatesController from "./optimism/index"
import { MasterController, ChainId } from '../typings/index'

export const templatesController: MasterController = {
  open: true,
  templates: {
    [ChainId.ETHEREUM]: ethereumTemplatesController,
    [ChainId.ARBITRUM]: arbitrumTemplatesController,
    [ChainId.GÖERLI]: goerliTemplatesController,
    [ChainId.OPTIMISM]: optimismTemplatesController,
    [ChainId.POLYGON]: polygonTemplatesController,
  }
}

export default templatesController