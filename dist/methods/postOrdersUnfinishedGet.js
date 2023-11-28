import { paramsProxy } from "../params.js";

/**
 * It allows you to download information about unclosed orders located in the store's administration panel. Orders with a status of false and lost are considered closed. Orders with a status of false and lost are considered closed.
 * @typedef {Object} PostOrdersUnfinishedGetRequest
 * @property {(orderPrepaidStatus: String) => PostOrdersUnfinishedGetRequest} orderPrepaidStatus Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered.
 * @property {(ordersStatuses: Array<String>) => PostOrdersUnfinishedGetRequest} ordersStatuses Order status. Status list: "new" - not handled, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "finished_ext" - handled in FA application.
 * @property {(couriersName: Array<String>) => PostOrdersUnfinishedGetRequest} couriersName Shipping companies (packages deliverers).
 * @property {(orderPaymentType: String) => PostOrdersUnfinishedGetRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(orderType: String) => PostOrdersUnfinishedGetRequest} orderType Order type. Allowed values: "retail" - retail order, "wholesale" - whiolesale order , "dropshipping" - order to be handled, "deliverer" - order sent to the supplier.
 * @property {(dropshippingOrderStatus: String) => PostOrdersUnfinishedGetRequest} dropshippingOrderStatus Dropshipping order status in the supplier's system. Allowed values: "all" - all, "finished" - sent, "canceled" - canceled, "notCanceled" - failed to cancel.
 * @property {(ordersIds: Array<String>) => PostOrdersUnfinishedGetRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => PostOrdersUnfinishedGetRequest} ordersSerialNumbers Order serial numbers.
 * @property {(clients: Array<Object>) => PostOrdersUnfinishedGetRequest} clients Customer data.
 * @property {(ordersRange: Object) => PostOrdersUnfinishedGetRequest} ordersRange Ranges of dates or serial numbers.
 * @property {(orderSource: Object) => PostOrdersUnfinishedGetRequest} orderSource Order source data.
 * @property {(products: Array<Object>) => PostOrdersUnfinishedGetRequest} products Products list.
 * @property {(resultsPage: Integer) => PostOrdersUnfinishedGetRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => PostOrdersUnfinishedGetRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(clientRequestInvoice: String) => PostOrdersUnfinishedGetRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "invoice" - yes (paper invoicing ), "e_invoice" - yes (electronic invoicing ), "n" - no.
 * @property {(packages: Object) => PostOrdersUnfinishedGetRequest} packages Information on consignments.
 * @property {(stocks: Array<Object>) => PostOrdersUnfinishedGetRequest} stocks Stock quantities data.
 * @property {(campaign: Object) => PostOrdersUnfinishedGetRequest} campaign Used discount codes data.
 * @property {(loyaltyPointsMode: String) => PostOrdersUnfinishedGetRequest} loyaltyPointsMode Loyalty points.
 * @property {(orderOperatorLogin: String) => PostOrdersUnfinishedGetRequest} orderOperatorLogin Order handler.
 * @property {(orderPackingPersonLogin: String) => PostOrdersUnfinishedGetRequest} orderPackingPersonLogin Order picker.
 * @property {(ordersBy: Array<Object>) => PostOrdersUnfinishedGetRequest} ordersBy Possibility of sorting returned list
 * @property {(searchingOperatorTypeMatch: String) => PostOrdersUnfinishedGetRequest} searchingOperatorTypeMatch Method of searching orders by handler.
 * @property {(ordersDelayed: String) => PostOrdersUnfinishedGetRequest} ordersDelayed Orders with the exceeded date of shipment.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostOrdersUnfinishedGetRequest} It allows you to download information about unclosed orders located in the store's administration panel. Orders with a status of false and lost are considered closed. Orders with a status of false and lost are considered closed.
 */
export const postOrdersUnfinishedGetProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/unfinished/get' }
    return new Proxy(object, paramsProxy);
}