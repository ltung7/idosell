import { paramsProxy } from "../params.js";

/**
 * Allows you to download information about the lowest prices before promotions
 * @typedef {Object} GetProductsOmnibusPricesRequest
 * @property {(products: Array<Object>) => GetProductsOmnibusPricesRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsOmnibusPricesRequest} Allows you to download information about the lowest prices before promotions
 */
export const getProductsOmnibusPricesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/omnibusPrices' }
    return new Proxy(object, paramsProxy);
}