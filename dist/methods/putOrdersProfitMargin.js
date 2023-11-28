import { paramsProxy } from "../params.js";

/**
 * Method that enables setting price margins for products in an order.
 * @typedef {Object} PutOrdersProfitMarginRequest
 * @property {(orders: Array<Object>) => PutOrdersProfitMarginRequest} orders Orders.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersProfitMarginRequest} Method that enables setting price margins for products in an order.
 */
export const putOrdersProfitMarginProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/profitMargin' }
    return new Proxy(object, paramsProxy);
}