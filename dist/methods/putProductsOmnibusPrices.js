import { paramsProxy } from "../params.js";

/**
 * Allows for editing product strikethrough price settings
 * @typedef {Object} PutProductsOmnibusPricesRequest
 * @property {(products: Array<Object>) => PutProductsOmnibusPricesRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsOmnibusPricesRequest} Allows for editing product strikethrough price settings
 */
export const putProductsOmnibusPricesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/omnibusPrices' }
    return new Proxy(object, paramsProxy);
}