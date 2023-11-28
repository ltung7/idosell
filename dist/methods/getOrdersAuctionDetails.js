import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about external listings assigned to orders in the administration panel.
 * @typedef {Object} GetOrdersAuctionDetailsRequest
 * @property {(orders: Array<Object>) => GetOrdersAuctionDetailsRequest} orders Orders.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersAuctionDetailsRequest} Method that enables getting information about external listings assigned to orders in the administration panel.
 */
export const getOrdersAuctionDetailsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/auctionDetails' }
    return new Proxy(object, paramsProxy);
}