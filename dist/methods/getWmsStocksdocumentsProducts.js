import { paramsProxy } from "../params.js";

/**
 * Method that enables getting a list of products present on a warehouse document.
 * @typedef {Object} GetWmsStocksdocumentsProductsRequest
 * @property {(type: String) => GetWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => GetWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(results_page: Integer) => GetWmsStocksdocumentsProductsRequest} results_page Result page number.
 * @property {(results_limit: Integer) => GetWmsStocksdocumentsProductsRequest} results_limit Number of results on page.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetWmsStocksdocumentsProductsRequest} Method that enables getting a list of products present on a warehouse document.
 */
export const getWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/products' }
    return new Proxy(object, paramsProxy);
}