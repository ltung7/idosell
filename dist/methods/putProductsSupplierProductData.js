import { paramsProxy } from "../params.js";

/**
 * The method allows you to edit the commodity data related to its suppliers.
 * @typedef {Object} PutProductsSupplierProductDataRequest
 * @property {(products: Array<Object>) => PutProductsSupplierProductDataRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsSupplierProductDataRequest} The method allows you to edit the commodity data related to its suppliers.
 */
export const putProductsSupplierProductDataProxy = (object) => {
    object.gate = { method: 'put', node: '/products/supplierProductData' }
    return new Proxy(object, paramsProxy);
}