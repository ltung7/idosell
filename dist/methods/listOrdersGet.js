import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 * @typedef {Object} ListOrdersGetRequest
 * @property {(orderPrepaidStatus: String) => ListOrdersGetRequest} orderPrepaidStatus Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered.
 * @property {(ordersStatuses: Array<String>) => ListOrdersGetRequest} ordersStatuses Order status. Status list: "new" - not handled, "finished" - completed, "false" - false, "lost" - lost, "on_order" - in progress, "packed" - being picked, "ready" - ready, "returned" - return, "canceled" - canceled by customer, "complainted" - complaint, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "suspended" - on hold, "joined" - merged, "finished_ext" - handled in FA application.
 * @property {(shippmentStatus: String) => ListOrdersGetRequest} shippmentStatus 
 * @property {(couriersName: Array<String>) => ListOrdersGetRequest} couriersName Shipping companies (packages deliverers).
 * @property {(couriersId: Array<Integer>) => ListOrdersGetRequest} couriersId Courier service identifiers
 * @property {(orderPaymentType: String) => ListOrdersGetRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(withMissingSalesDocuments: Array<String>) => ListOrdersGetRequest} withMissingSalesDocuments 
 * @property {(orderType: String) => ListOrdersGetRequest} orderType Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail"
 * @property {(dropshippingOrderStatus: String) => ListOrdersGetRequest} dropshippingOrderStatus 
 * @property {(ordersIds: Array<String>) => ListOrdersGetRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => ListOrdersGetRequest} ordersSerialNumbers Order serial numbers.
 * @property {(clients: Array<Object>) => ListOrdersGetRequest} clients Customer data.
 * @property {(ordersRange: Object) => ListOrdersGetRequest} ordersRange Ranges of dates or serial numbers.
 * @property {(orderSource: Object) => ListOrdersGetRequest} orderSource Order source data.
 * @property {(products: Array<Object>) => ListOrdersGetRequest} products Products list.
 * @property {(resultsPage: Integer) => ListOrdersGetRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => ListOrdersGetRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(clientRequestInvoice: String) => ListOrdersGetRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no.
 * @property {(packages: Object) => ListOrdersGetRequest} packages Information on consignments.
 * @property {(stocks: Array<Object>) => ListOrdersGetRequest} stocks Stock quantities data.
 * @property {(campaign: Object) => ListOrdersGetRequest} campaign Used discount codes data.
 * @property {(loyaltyPointsMode: String) => ListOrdersGetRequest} loyaltyPointsMode Loyalty points.
 * @property {(orderOperatorLogin: String) => ListOrdersGetRequest} orderOperatorLogin Order handler.
 * @property {(orderPackingPersonLogin: String) => ListOrdersGetRequest} orderPackingPersonLogin Order picker.
 * @property {(ordersBy: Array<Object>) => ListOrdersGetRequest} ordersBy Possibility of sorting returned list
 * @property {(searchingOperatorTypeMatch: String) => ListOrdersGetRequest} searchingOperatorTypeMatch Method of searching orders by handler.
 * @property {(ordersDelayed: String) => ListOrdersGetRequest} ordersDelayed Orders with the exceeded date of shipment.
 * @property {(showBundles: Boolean) => ListOrdersGetRequest} showBundles Combine the components of the set into one item
 * @property {(orderExternalId: String) => ListOrdersGetRequest} orderExternalId The order ID of the external service
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {ListOrdersGetRequest} Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 */
export const listOrdersGetProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders/get' }
    return new Proxy(object, paramsProxy);
}