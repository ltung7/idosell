import { paramsProxy } from "../params.js";

/**
 * Method that enables setting product stock levels and warehouse locations.
 * @typedef {Object} PutProductsStocksRequest
 * @property {(products: Array<Object>) => PutProductsStocksRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsStocksRequest} Method that enables setting product stock levels and warehouse locations.
 */
export const putProductsStocksProxy = (object) => {
    object.gate = { method: 'put', node: '/products/stocks' }
    return new Proxy(object, paramsProxy);
}