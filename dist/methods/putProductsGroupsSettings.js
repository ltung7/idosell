import { paramsProxy } from "../params.js";

/**
 * The method allows you to change the settings for displaying products to a group of products .
 * @typedef {Object} PutProductsGroupsSettingsRequest
 * @property {(groups: Array<Object>) => PutProductsGroupsSettingsRequest} groups 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsGroupsSettingsRequest} The method allows you to change the settings for displaying products to a group of products .
 */
export const putProductsGroupsSettingsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/settings' }
    return new Proxy(object, paramsProxy);
}