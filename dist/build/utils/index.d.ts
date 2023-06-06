import { TemplateController, MasterController, ChainId } from '@/typings/index';
export declare function generateUniqueId(): string;
export declare const getTemplates: (chainId?: ChainId, masterTemplatesController?: MasterController) => TemplateController[];
