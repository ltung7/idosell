import { paramsProxy } from "../params.js";

/**
 * #!MetodaSluzyDoPodzialuZamowienia!#
 * @typedef {Object} PutOrdersDevideRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersDevideRequest} orderSerialNumber Order serial number.
 * @property {(products: Array<Object>) => PutOrdersDevideRequest} products Products list.
 * @property {(splitPayments: Boolean) => PutOrdersDevideRequest} splitPayments Whether to split payments
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersDevideRequest} #!MetodaSluzyDoPodzialuZamowienia!#
 */
export const putOrdersDevideProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/devide' }
    return new Proxy(object, paramsProxy);
}