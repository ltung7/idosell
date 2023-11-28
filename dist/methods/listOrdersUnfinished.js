import { paramsProxy } from "../params.js";

/**
 * It allows you to download information about unclosed orders located in the store's administration panel. Orders with a status of false and lost are considered closed. Orders with a status of false and lost are considered closed.
 * @typedef {Object} ListOrdersUnfinishedRequest
 * @property {(orderPrepaidStatus: String) => ListOrdersUnfinishedRequest} orderPrepaidStatus Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered.
 * @property {(ordersStatuses: Array<String>) => ListOrdersUnfinishedRequest} ordersStatuses Order status. Status list: "new" - not handled, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "finished_ext" - handled in FA application.
 * @property {(couriersName: Array<String>) => ListOrdersUnfinishedRequest} couriersName Shipping companies (packages deliverers).
 * @property {(orderPaymentType: String) => ListOrdersUnfinishedRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(orderType: String) => ListOrdersUnfinishedRequest} orderType Order type. Allowed values: "retail" - retail order, "wholesale" - whiolesale order , "dropshipping" - order to be handled, "deliverer" - order sent to the supplier.
 * @property {(dropshippingOrderStatus: String) => ListOrdersUnfinishedRequest} dropshippingOrderStatus Dropshipping order status in the supplier's system. Allowed values: "all" - all, "finished" - sent, "canceled" - canceled, "notCanceled" - failed to cancel.
 * @property {(ordersIds: Array<String>) => ListOrdersUnfinishedRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => ListOrdersUnfinishedRequest} ordersSerialNumbers Order serial numbers.
 * @property {(clients: Array<Object>) => ListOrdersUnfinishedRequest} clients Customer data.
 * @property {(ordersRange: Object) => ListOrdersUnfinishedRequest} ordersRange Ranges of dates or serial numbers.
 * @property {(orderSource: Object) => ListOrdersUnfinishedRequest} orderSource Order source data.
 * @property {(products: Array<Object>) => ListOrdersUnfinishedRequest} products Products list.
 * @property {(resultsPage: Integer) => ListOrdersUnfinishedRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => ListOrdersUnfinishedRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(clientRequestInvoice: String) => ListOrdersUnfinishedRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "invoice" - yes (paper invoicing ), "e_invoice" - yes (electronic invoicing ), "n" - no.
 * @property {(packages: Object) => ListOrdersUnfinishedRequest} packages Information on consignments.
 * @property {(stocks: Array<Object>) => ListOrdersUnfinishedRequest} stocks Stock quantities data.
 * @property {(campaign: Object) => ListOrdersUnfinishedRequest} campaign Used discount codes data.
 * @property {(loyaltyPointsMode: String) => ListOrdersUnfinishedRequest} loyaltyPointsMode Loyalty points.
 * @property {(orderOperatorLogin: String) => ListOrdersUnfinishedRequest} orderOperatorLogin Order handler.
 * @property {(orderPackingPersonLogin: String) => ListOrdersUnfinishedRequest} orderPackingPersonLogin Order picker.
 * @property {(ordersBy: Array<Object>) => ListOrdersUnfinishedRequest} ordersBy Possibility of sorting returned list
 * @property {(searchingOperatorTypeMatch: String) => ListOrdersUnfinishedRequest} searchingOperatorTypeMatch Method of searching orders by handler.
 * @property {(ordersDelayed: String) => ListOrdersUnfinishedRequest} ordersDelayed Orders with the exceeded date of shipment.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {ListOrdersUnfinishedRequest} It allows you to download information about unclosed orders located in the store's administration panel. Orders with a status of false and lost are considered closed. Orders with a status of false and lost are considered closed.
 */
export const listOrdersUnfinishedProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/unfinished/get' }
    return new Proxy(object, paramsProxy);
}