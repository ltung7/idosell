import { paramsProxy } from "../params.js";

/**
 * The method allows to edit supplier data in the IdoSell Shop administration panel.
 * @typedef {Object} PutProductsSupplierCodeRequest
 * @property {(products: Array<Object>) => PutProductsSupplierCodeRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsSupplierCodeRequest} The method allows to edit supplier data in the IdoSell Shop administration panel.
 */
export const putProductsSupplierCodeProxy = (object) => {
    object.gate = { method: 'put', node: '/products/supplierCode' }
    return new Proxy(object, paramsProxy);
}