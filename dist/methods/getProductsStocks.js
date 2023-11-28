import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about product stock levels and warehouse locations.
 * @typedef {Object} GetProductsStocksRequest
 * @property {(products: Array<Object>) => GetProductsStocksRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsStocksRequest} Method that enables getting information about product stock levels and warehouse locations.
 */
export const getProductsStocksProxy = (object) => {
    object.gate = { method: 'get', node: '/products/stocks' }
    return new Proxy(object, paramsProxy);
}