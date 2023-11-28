import { paramsProxy } from "../params.js";

/**
 * Method that enables editing an order in the administration panel. It allows, for example, to change the products included in the order or change its status.
 * @typedef {Object} PutOrdersRequest
 * @property {(orders: Array<Object>) => PutOrdersRequest} orders Orders.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersRequest} Method that enables editing an order in the administration panel. It allows, for example, to change the products included in the order or change its status.
 */
export const putOrdersProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/orders' }
    return new Proxy(object, paramsProxy);
}