import { TemplateController, MasterController, ChainId } from '@/typings/index'
import { templatesController } from '../index'

/**
 * This function generates a random number ID.
 * It first gets the current timestamp and converts it to a string.
 * Then, it generates a random index within the length of the timestamp string and uses it to pick a character.
 * This process is repeated 'num' times to create a unique ID.
 *
 * @param num - The length of the ID to generate. Defaults to 5.
 * @returns A unique number ID as a string.
 */
export function generateNumberId(num: number = 5): string {
  const ts = new Date().getTime().toString()
  let id = ''
  for (let i = 0; i < num; i++) {
    id += ts[Math.floor(Math.random() * ts.length)]
  }
  return id
}

/**
 * This function generates a random string ID.
 * It first generates a random number using Math.random(), then converts this number to a base-36 string.
 * The first two characters of this string are removed using substring(2) to get rid of the "0." at the start.
 *
 * @returns A unique string ID.
 */
export function generateStrId(): string {
  return Math.random().toString(36).substring(2)
}

/**
 * This function generates a unique ID by concatenating two types of IDs.
 * It first generates a number ID, then a string ID, and repeats this process once more.
 * The final ID is a combination of four parts: number ID, string ID, number ID, and string ID.
 *
 * @returns A unique string ID.
 */
export function generateUniqueId(): string {
  return `${generateNumberId()}${generateStrId()}${generateNumberId()}${generateStrId()}`
}

/**
 * This function filters an array of templates based on the presence of required fields and a specific chainId.
 *
 * @param templates - An array of TemplateController objects to be filtered.
 * @param chainId - An optional ChainId. If provided, only templates with this chainId will be returned.
 * @returns An array of TemplateController objects that pass the filter conditions.
 */
function filterTemplates(
  templates: TemplateController[],
  chainId?: ChainId
): TemplateController[] {
  const requiredFields = [
    'open',
    'chainId',
    'contractAddress',
    'id',
    'templateName',
  ]
  return templates.filter(
    (item: TemplateController) =>
      requiredFields.every((field) => item[field]) &&
      (!chainId || item.chainId === chainId)
  )
}

/**
 * This function retrieves templates based on the provided chainId and masterTemplatesController.
 * If no chainId is provided, it will return all templates.
 * If no masterTemplatesController is provided, it will use the default templatesController.
 *
 * @param chainId - The chainId of the templates to retrieve. Optional.
 * @param masterTemplatesController - The controller containing the templates. Defaults to templatesController.
 * @returns An array of templates. If the masterTemplatesController is not open or contains no templates, an empty array is returned.
 */
export const getTemplates = (
  chainId?: ChainId,
  masterTemplatesController: MasterController = templatesController
) => {
  if (
    !masterTemplatesController.open ||
    !Object.keys(masterTemplatesController.templates).length
  ) {
    return []
  }
  return (
    chainId
      ? [masterTemplatesController.templates[chainId]]
      : Object.values(masterTemplatesController.templates)
  ).flatMap((value) =>
    value.open ? filterTemplates(value.templates || [], chainId) : []
  )
}

/**
 * Creates an array of templates with the 'open' property set according to the openFlags array.
 *
 * @param templates - An array of templates.
 * @param openFlags - An array of boolean values indicating whether each template is open.
 * Both arrays should have the same length.
 *
 * @returns An array of objects, each containing an 'open' property and a 'data' property holding the template.
 */
export function createTemplateArray<T extends any[]>(
  templates: [...T],
  openFlags: { [K in keyof T]: boolean }
) {
  return templates.map((template, index) => ({
    open: openFlags[index],
    ...template,
  }))
}
