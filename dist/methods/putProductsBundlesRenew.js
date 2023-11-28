import { paramsProxy } from "../params.js";

/**
 * the renewProductsInBundle method allows you to rebuild components of Sets existing in the administration panel 
 * @typedef {Object} PutProductsBundlesRenewRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsBundlesRenewRequest} the renewProductsInBundle method allows you to rebuild components of Sets existing in the administration panel 
 */
export const putProductsBundlesRenewProxy = (object) => {
    object.gate = { method: 'put', node: '/products/bundles/renew' }
    return new Proxy(object, paramsProxy);
}