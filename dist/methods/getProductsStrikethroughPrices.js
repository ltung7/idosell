import { paramsProxy } from "../params.js";

/**
 * Allows for getting information about product strikethrough price settings
 * @typedef {Object} GetProductsStrikethroughPricesRequest
 * @property {(products: Array<Object>) => GetProductsStrikethroughPricesRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsStrikethroughPricesRequest} Allows for getting information about product strikethrough price settings
 */
export const getProductsStrikethroughPricesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/strikethroughPrices' }
    return new Proxy(object, paramsProxy);
}