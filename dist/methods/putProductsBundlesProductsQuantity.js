import { paramsProxy } from "../params.js";

/**
 * setProductsQuantityInBundle method allows to indicate quantity of a set component
 * @typedef {Object} PutProductsBundlesProductsQuantityRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsBundlesProductsQuantityRequest} setProductsQuantityInBundle method allows to indicate quantity of a set component
 */
export const putProductsBundlesProductsQuantityProxy = (object) => {
    object.gate = { method: 'put', node: '/products/bundles/productsQuantity' }
    return new Proxy(object, paramsProxy);
}