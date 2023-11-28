import { paramsProxy } from "../params.js";

/**
 * MetodaPozwalaNaEdycjeDanychDotyczacychIlosci
 * @typedef {Object} PutProductsStockQuantityRequest
 * @property {(products: Array<Object>) => PutProductsStockQuantityRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsStockQuantityRequest} MetodaPozwalaNaEdycjeDanychDotyczacychIlosci
 */
export const putProductsStockQuantityProxy = (object) => {
    object.gate = { method: 'put', node: '/products/stockQuantity' }
    return new Proxy(object, paramsProxy);
}