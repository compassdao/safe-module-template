import { TemplateController, MasterController, ChainId } from '@/typings/index';
/**
 * This function generates a random number ID.
 * It first gets the current timestamp and converts it to a string.
 * Then, it generates a random index within the length of the timestamp string and uses it to pick a character.
 * This process is repeated 'num' times to create a unique ID.
 *
 * @param num - The length of the ID to generate. Defaults to 5.
 * @returns A unique number ID as a string.
 */
export declare function generateNumberId(num?: number): string;
/**
 * This function generates a random string ID.
 * It first generates a random number using Math.random(), then converts this number to a base-36 string.
 * The first two characters of this string are removed using substring(2) to get rid of the "0." at the start.
 *
 * @returns A unique string ID.
 */
export declare function generateStrId(): string;
/**
 * This function generates a unique ID by concatenating two types of IDs.
 * It first generates a number ID, then a string ID, and repeats this process once more.
 * The final ID is a combination of four parts: number ID, string ID, number ID, and string ID.
 *
 * @returns A unique string ID.
 */
export declare function generateUniqueId(): string;
/**
 * This function retrieves templates based on the provided chainId and masterTemplatesController.
 * If no chainId is provided, it will return all templates.
 * If no masterTemplatesController is provided, it will use the default templatesController.
 *
 * @param chainId - The chainId of the templates to retrieve. Optional.
 * @param masterTemplatesController - The controller containing the templates. Defaults to templatesController.
 * @returns An array of templates. If the masterTemplatesController is not open or contains no templates, an empty array is returned.
 */
export declare const getTemplates: (chainId?: ChainId, masterTemplatesController?: MasterController) => TemplateController[];
/**
 * Creates an array of templates with the 'open' property set according to the openFlags array.
 *
 * @param templates - An array of templates.
 * @param openFlags - An array of boolean values indicating whether each template is open.
 * Both arrays should have the same length.
 *
 * @returns An array of objects, each containing an 'open' property and a 'data' property holding the template.
 */
export declare function createTemplateArray<T extends any[]>(templates: [...T], openFlags: {
    [K in keyof T]: boolean;
}): ({
    open: boolean;
} & T[number])[];
