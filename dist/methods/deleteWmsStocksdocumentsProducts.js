import { paramsProxy } from "../params.js";

/**
 * Method that enables deleting products from warehouse documents.
 * @typedef {Object} DeleteWmsStocksdocumentsProductsRequest
 * @property {(products: Array<Object>) => DeleteWmsStocksdocumentsProductsRequest} products Products list.
 * @property {(type: String) => DeleteWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => DeleteWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteWmsStocksdocumentsProductsRequest} Method that enables deleting products from warehouse documents.
 */
export const deleteWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/products/delete' }
    return new Proxy(object, paramsProxy);
}