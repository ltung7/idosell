import { paramsProxy } from "../params.js";

/**
 * Method that enables, amongst others, editing the quantity of a given product on a warehouse document.
 * @typedef {Object} PutWmsStocksdocumentsProductsRequest
 * @property {(products: Array<Object>) => PutWmsStocksdocumentsProductsRequest} products Products list.
 * @property {(type: String) => PutWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => PutWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWmsStocksdocumentsProductsRequest} Method that enables, amongst others, editing the quantity of a given product on a warehouse document.
 */
export const putWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/products' }
    return new Proxy(object, paramsProxy);
}