import { paramsProxy } from "../params.js";

/**
 * Method that is used for adding new retail or wholesale orders to a shop in the administration panel.
 * @typedef {Object} PostOrdersRequest
 * @property {(orders: Array<Object>) => PostOrdersRequest} orders Orders.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostOrdersRequest} Method that is used for adding new retail or wholesale orders to a shop in the administration panel.
 */
export const postOrdersProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders' }
    return new Proxy(object, paramsProxy);
}