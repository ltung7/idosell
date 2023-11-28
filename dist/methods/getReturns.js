import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about returns issued for orders in the administration panel.
 * @typedef {Object} GetReturnsRequest
 * @property {(order_sn: Integer) => GetReturnsRequest} order_sn Search by the order serial number to which a return was added.
 * @property {(return_id: Integer) => GetReturnsRequest} return_id Search by return ID.
 * @property {(return_shipping_number: String) => GetReturnsRequest} return_shipping_number Search by a return shipment number from a customer to the shop .
 * @property {(range: Object) => GetReturnsRequest} range Date range.
 * @property {(results_limit: Integer) => GetReturnsRequest} results_limit Number of results on page.
 * @property {(results_page: Integer) => GetReturnsRequest} results_page Result page number.
 * @property {(status: Integer) => GetReturnsRequest} status 1 - Return not handled, 2 - Return accepted, 3 - Return not accepted, 13 - Return canceled by the customer, 14 - Return canceled, 15 - Resend the order, 16 - Abort resending order, 17 - A customer generated a return - it will be delivered personally, 18 - A customer generated a return - it will be sent by the customer.
 * @property {(return_ids: Array<Integer>) => GetReturnsRequest} return_ids Search by return ID.
 * @property {(stock_id: Integer) => GetReturnsRequest} stock_id Search by ID of a stock to which a return is sent.
 * @property {(bundleAsProducts: Boolean) => GetReturnsRequest} bundleAsProducts Return a set as its constituent products
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetReturnsRequest} Method that enables getting information about returns issued for orders in the administration panel.
 */
export const getReturnsProxy = (object) => {
    object.gate = { method: 'get', node: '/returns/returns' }
    return new Proxy(object, paramsProxy);
}