import polygonTemplatesController from './polygon/index'
import ethereumTemplatesController from './ethereum/index'
import goerliTemplatesController from './goerli/index'
import arbitrumTemplatesController from './arbitrum/index'
import optimismTemplatesController from './optimism/index'
import { MasterController, ChainId } from '../typings/index'

// The templatesController object is of type MasterController.
// It contains a boolean 'open' and a 'templates' object.
// The 'templates' object maps different blockchain chains to their respective controllers.
export const templatesController: MasterController = {
  open: true, // Indicates if the controller is open
  templates: {
    [ChainId.ETHEREUM]: ethereumTemplatesController, // Controller for Ethereum
    [ChainId.ARBITRUM]: arbitrumTemplatesController, // Controller for Arbitrum
    [ChainId.GÖERLI]: goerliTemplatesController, // Controller for Göerli
    [ChainId.OPTIMISM]: optimismTemplatesController, // Controller for Optimism
    [ChainId.POLYGON]: polygonTemplatesController, // Controller for Polygon
  },
}

export default templatesController
