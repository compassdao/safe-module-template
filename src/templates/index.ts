import polygonTemplates from "./polygon"
import ethereumTemplates from "./ethereum"
import goerliTemplates from "./goerli"
import arbitrumTemplates from "./arbitrum"
import optimismTemplates from "./optimism"
import { TemplatesConfig } from '../typings'

export * from '../typings'

export const templatesConfig: TemplatesConfig = {
  open: true,
  templates: [
    ...polygonTemplates,
    ...ethereumTemplates,
    ...goerliTemplates,
    ...arbitrumTemplates,
    ...optimismTemplates
  ],
}

export default templatesConfig