import { paramsProxy } from "../params.js";

/**
 * the renewProductsInCollection method allows you to rebuild existing components of Collections in the administration panel 
 * @typedef {Object} PutProductsCollectionsRenewRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsCollectionsRenewRequest} the renewProductsInCollection method allows you to rebuild existing components of Collections in the administration panel 
 */
export const putProductsCollectionsRenewProxy = (object) => {
    object.gate = { method: 'put', node: '/products/collections/renew' }
    return new Proxy(object, paramsProxy);
}