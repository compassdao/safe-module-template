import { TemplateController, MasterController, ChainId } from '../typings';
export declare function generateUniqueId(): string;
export declare const getTemplates: (chainId?: ChainId, masterTemplatesController?: MasterController) => TemplateController[];
