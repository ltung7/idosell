import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 * @typedef {Object} PostOrdersGetRequest
 * @property {(orderPrepaidStatus: String) => PostOrdersGetRequest} orderPrepaidStatus Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered.
 * @property {(ordersStatuses: Array<String>) => PostOrdersGetRequest} ordersStatuses Order status. Status list: "new" - not handled, "finished" - completed, "false" - false, "lost" - lost, "on_order" - in progress, "packed" - being picked, "ready" - ready, "returned" - return, "canceled" - canceled by customer, "complainted" - complaint, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "suspended" - on hold, "joined" - merged, "finished_ext" - handled in FA application.
 * @property {(shippmentStatus: String) => PostOrdersGetRequest} shippmentStatus 
 * @property {(couriersName: Array<String>) => PostOrdersGetRequest} couriersName Shipping companies (packages deliverers).
 * @property {(couriersId: Array<Integer>) => PostOrdersGetRequest} couriersId Courier service identifiers
 * @property {(orderPaymentType: String) => PostOrdersGetRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(withMissingSalesDocuments: Array<String>) => PostOrdersGetRequest} withMissingSalesDocuments 
 * @property {(orderType: String) => PostOrdersGetRequest} orderType Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail"
 * @property {(dropshippingOrderStatus: String) => PostOrdersGetRequest} dropshippingOrderStatus 
 * @property {(ordersIds: Array<String>) => PostOrdersGetRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => PostOrdersGetRequest} ordersSerialNumbers Order serial numbers.
 * @property {(clients: Array<Object>) => PostOrdersGetRequest} clients Customer data.
 * @property {(ordersRange: Object) => PostOrdersGetRequest} ordersRange Ranges of dates or serial numbers.
 * @property {(orderSource: Object) => PostOrdersGetRequest} orderSource Order source data.
 * @property {(products: Array<Object>) => PostOrdersGetRequest} products Products list.
 * @property {(resultsPage: Integer) => PostOrdersGetRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => PostOrdersGetRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(clientRequestInvoice: String) => PostOrdersGetRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no.
 * @property {(packages: Object) => PostOrdersGetRequest} packages Information on consignments.
 * @property {(stocks: Array<Object>) => PostOrdersGetRequest} stocks Stock quantities data.
 * @property {(campaign: Object) => PostOrdersGetRequest} campaign Used discount codes data.
 * @property {(loyaltyPointsMode: String) => PostOrdersGetRequest} loyaltyPointsMode Loyalty points.
 * @property {(orderOperatorLogin: String) => PostOrdersGetRequest} orderOperatorLogin Order handler.
 * @property {(orderPackingPersonLogin: String) => PostOrdersGetRequest} orderPackingPersonLogin Order picker.
 * @property {(ordersBy: Array<Object>) => PostOrdersGetRequest} ordersBy Possibility of sorting returned list
 * @property {(searchingOperatorTypeMatch: String) => PostOrdersGetRequest} searchingOperatorTypeMatch Method of searching orders by handler.
 * @property {(ordersDelayed: String) => PostOrdersGetRequest} ordersDelayed Orders with the exceeded date of shipment.
 * @property {(showBundles: Boolean) => PostOrdersGetRequest} showBundles Combine the components of the set into one item
 * @property {(orderExternalId: String) => PostOrdersGetRequest} orderExternalId The order ID of the external service
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostOrdersGetRequest} Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 */
export const postOrdersGetProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders/get' }
    return new Proxy(object, paramsProxy);
}