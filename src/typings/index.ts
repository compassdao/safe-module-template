export enum ChainId {
    ETHEREUM = 1,
    GÖERLI = 5,
    POLYGON = 137,
    ARBITRUM = 42161,
    OPTIMISM = 10,
}

export enum Comparison {
    Eq,
    Gte,
    Lte
}

export interface FunctionParams {
    index: number,
    value?: string
    autoFillingSafeAddress?: boolean
    require?: boolean
    comparison?: Comparison
}

export interface FunctionConfig {
    sighash: string,
    params?: Array<FunctionParams>
}

export interface Template {
    id: string,
    chainId: ChainId,
    templateName: string,
    contractAddress: string,
    functionsConfig: Array<FunctionConfig>
}

export interface Controller {
    open?: boolean
}

export interface TemplateController extends Template, Controller { }

export interface TemplatesController extends Controller {
    templates: Array<TemplateController>
}

export interface MasterController extends Controller {
    templates: {
        [chainId: number]: TemplatesController
    }
}