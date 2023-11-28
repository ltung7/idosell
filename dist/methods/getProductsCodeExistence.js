import { paramsProxy } from "../params.js";

/**
 * The method allows to check if a product with the given identification code (panel ID, IAI code, manufacturer code, external system code) exists in the panel.
 * @typedef {Object} GetProductsCodeExistenceRequest
 * @property {(products: Array<Object>) => GetProductsCodeExistenceRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsCodeExistenceRequest} The method allows to check if a product with the given identification code (panel ID, IAI code, manufacturer code, external system code) exists in the panel.
 */
export const getProductsCodeExistenceProxy = (object) => {
    object.gate = { method: 'get', node: '/products/codeExistence' }
    return new Proxy(object, paramsProxy);
}