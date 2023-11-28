import { paramsProxy } from "../params.js";

/**
 * The method allows you to change the order of products in a group of products.
 * @typedef {Object} PutProductsGroupsOrderRequest
 * @property {(groups: Array<Object>) => PutProductsGroupsOrderRequest} groups 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsGroupsOrderRequest} The method allows you to change the order of products in a group of products.
 */
export const putProductsGroupsOrderProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/order' }
    return new Proxy(object, paramsProxy);
}