import polygonTemplatesController from "./polygon"
import ethereumTemplatesController from "./ethereum"
import goerliTemplatesController from "./goerli"
import arbitrumTemplatesController from "./arbitrum"
import optimismTemplatesController from "./optimism"
import { MasterController } from '../typings'
import { ChainId } from '../typings'

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