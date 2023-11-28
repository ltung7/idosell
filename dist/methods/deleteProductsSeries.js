import { paramsProxy } from "../params.js";

/**
 * Method allows you to delete a series of products available in the IdoSell administration panel..
 * @typedef {Object} DeleteProductsSeriesRequest
 * @property {(ids: Array<Integer>) => DeleteProductsSeriesRequest} ids IDs
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsSeriesRequest} Method allows you to delete a series of products available in the IdoSell administration panel..
 */
export const deleteProductsSeriesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/series/delete' }
    return new Proxy(object, paramsProxy);
}