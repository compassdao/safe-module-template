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

// Interface describing function parameters
export interface FunctionParams {
  index: number // Index of the parameter
  value?: string // Value of the parameter
  autoFillingSafeAddress?: boolean // Whether to auto-fill safe address
  require?: boolean // Whether it is required
  const?: boolean // Whether it is a constant
  comparison?: Comparison // Comparison operation
  params?: Array<FunctionParams> // Nested function parameters
}

// Interface describing Ethereum value
export interface EthValue {
  value?: string // Value
  comparison?: Comparison // Comparison operation
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

// Interface describing a controller
export interface Controller {
  open?: boolean // Whether it is open
}

// Interface describing a template controller, extends Template and Controller
export interface TemplateController extends Template, Controller {}

// Interface describing templates controller, extends Controller
export interface TemplatesController extends Controller {
  templates: Array<TemplateController> // Array of template controllers
}

// Interface describing a master controller, extends Controller
export interface MasterController extends Controller {
  templates: Record<ChainId, TemplatesController> // Record mapping ChainId to TemplatesController
}
