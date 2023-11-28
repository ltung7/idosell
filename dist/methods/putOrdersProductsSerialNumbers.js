import { paramsProxy } from "../params.js";

/**
 * Method that enables adding serial numbers to products in an order.
 * @typedef {Object} PutOrdersProductsSerialNumbersRequest
 * @property {(orders: Array<Object>) => PutOrdersProductsSerialNumbersRequest} orders Orders.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersProductsSerialNumbersRequest} Method that enables adding serial numbers to products in an order.
 */
export const putOrdersProductsSerialNumbersProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/productsSerialNumbers' }
    return new Proxy(object, paramsProxy);
}