// Enum defining different chain IDs
export enum ChainId {
  ETHEREUM = 1,
  GÖERLI = 5,
  POLYGON = 137,
  ARBITRUM = 42161,
  OPTIMISM = 10,
}

// Enum defining different comparison operations
export enum Comparison {
  Eq, // =
  Gte, // >
  Lte, // <
}

export type FunctionParams = {
  index: number
  value?: string
  autoFillingSafeAddress?: boolean
  require?: boolean
  const?: boolean
  comparison?: Comparison
  params?: FunctionParams[]
}

export type EthValue = {
  value?: string
  comparison?: Comparison
}

// Interface describing function configuration
export interface FunctionConfig {
  sighash: string // Sighash of the function
  params?: Array<FunctionParams> // Function parameters
  ethValue?: EthValue // Ethereum value
}

// Interface describing a template
export interface Template {
  id: string // Template ID
  chainId: ChainId // Chain ID
  templateName: string // Template name
  contractAddress: string // Contract address
  functionsConfig: Array<FunctionConfig> // Function configurations
}

export type Controller = {
  open?: boolean // Whether it is open
}

export type TemplateController = Template & Controller;

// Interface describing templates controller, extends Controller
export interface TemplatesController extends Controller {
  templates: Array<TemplateController> // Array of template controllers
}

// Interface describing a master controller, extends Controller
export interface MasterController extends Controller {
  templates: Record<ChainId, TemplatesController> // Record mapping ChainId to TemplatesController
}
