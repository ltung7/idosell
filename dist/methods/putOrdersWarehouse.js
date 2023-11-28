import { paramsProxy } from "../params.js";

/**
 * Method that enables setting which warehouse an order is handled from.
 * @typedef {Object} PutOrdersWarehouseRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersWarehouseRequest} orderSerialNumber Order serial number.
 * @property {(stockId: Integer) => PutOrdersWarehouseRequest} stockId Stock ID
 * @property {(orderOperatorLogin: String) => PutOrdersWarehouseRequest} orderOperatorLogin Order handler.
 * @property {(externalStockId: String) => PutOrdersWarehouseRequest} externalStockId External warehouse ID (if required)
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersWarehouseRequest} Method that enables setting which warehouse an order is handled from.
 */
export const putOrdersWarehouseProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/warehouse' }
    return new Proxy(object, paramsProxy);
}