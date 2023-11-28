import { paramsProxy } from "../params.js";

/**
 * The method allows you to change the main product in a group of products.
 * @typedef {Object} PutProductsGroupsMainProductRequest
 * @property {(groups: Array<Object>) => PutProductsGroupsMainProductRequest} groups 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsGroupsMainProductRequest} The method allows you to change the main product in a group of products.
 */
export const putProductsGroupsMainProductProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/mainProduct' }
    return new Proxy(object, paramsProxy);
}