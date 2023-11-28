import { paramsProxy } from "../params.js";

/**
 * The method is used to restore deleted products
 * @typedef {Object} PostProductsRestoreRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsRestoreRequest} The method is used to restore deleted products
 */
export const postProductsRestoreProxy = (object) => {
    object.gate = { method: 'post', node: '/products/restore' }
    return new Proxy(object, paramsProxy);
}