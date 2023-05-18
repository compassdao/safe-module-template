import { TemplateController, MasterController, ChainId } from '@/typings/index'
import { templatesController } from '../index'

export function generateUniqueId(): string {
  const getId = () => {
    const ts = new Date().getTime().toString();
    const parts = ts.split('').reverse();
    let id = '';

    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * parts.length);
      id += parts[index];
    }
    return id;
  }

  const getRandomStr = () => Math.random().toString(36).substring(2);

  return `${getId()}${getId()}${getRandomStr()}${getRandomStr()}`;

}

export const getTemplates = (chainId?: ChainId, masterTemplatesController: MasterController = templatesController) => {
  if (masterTemplatesController?.open) {
    if (chainId) {
      const currentNetworkTemplateController = masterTemplatesController?.templates[chainId]
      if (currentNetworkTemplateController?.open && currentNetworkTemplateController?.templates) {
        return currentNetworkTemplateController.templates.filter((item: TemplateController) => {
          return item?.open && item?.chainId === chainId && item?.contractAddress && item?.id && item?.templateName;
        })
      }
      return []
    }
    if (masterTemplatesController?.templates) {
      const masterTemplateDatas: Array<TemplateController> = []
      for (const key in masterTemplatesController?.templates) {
        if (Object.prototype.hasOwnProperty.call(masterTemplatesController?.templates, key)) {
          const value = masterTemplatesController?.templates[key];
          if (value?.open && value?.templates) {
            const currentTemplates = value.templates.filter((item: TemplateController) => {
              return item?.open && item?.chainId === chainId && item?.contractAddress && item?.id && item?.templateName;
            })
            masterTemplateDatas.push(...currentTemplates)
          }
        }
      }
      return masterTemplateDatas;
    }
    return []
  }
  return []
}