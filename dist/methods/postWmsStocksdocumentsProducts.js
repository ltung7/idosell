import { paramsProxy } from "../params.js";

/**
 * Method that enables adding products to warehouse documents.
 * @typedef {Object} PostWmsStocksdocumentsProductsRequest
 * @property {(products: Array<Object>) => PostWmsStocksdocumentsProductsRequest} products Products list.
 * @property {(type: String) => PostWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => PostWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostWmsStocksdocumentsProductsRequest} Method that enables adding products to warehouse documents.
 */
export const postWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/products' }
    return new Proxy(object, paramsProxy);
}