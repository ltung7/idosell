import { paramsProxy } from "../params.js";

/**
 * Allows for editing product strikethrough price settings
 * @typedef {Object} PutProductsStrikethroughPricesRequest
 * @property {(products: Array<Object>) => PutProductsStrikethroughPricesRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsStrikethroughPricesRequest} Allows for editing product strikethrough price settings
 */
export const putProductsStrikethroughPricesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/strikethroughPrices' }
    return new Proxy(object, paramsProxy);
}