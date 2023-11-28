import { paramsProxy } from "../params.js";
import dayjs from "dayjs";
import { paramYesOrNo, page } from "../helpers.js";

/**
 * Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 * @typedef {Object} ListOrdersRequest
 * @property {(orderPrepaidStatus: String) => ListOrdersRequest} orderPrepaidStatus Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered.
 * @property {(ordersStatuses: Array<String>) => ListOrdersRequest} ordersStatuses Order status. Status list: "new" - not handled, "finished" - completed, "false" - false, "lost" - lost, "on_order" - in progress, "packed" - being picked, "ready" - ready, "returned" - return, "canceled" - canceled by customer, "complainted" - complaint, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "suspended" - on hold, "joined" - merged, "finished_ext" - handled in FA application.
 * @property {(shippmentStatus: String) => ListOrdersRequest} shippmentStatus 
 * @property {(couriersName: Array<String>) => ListOrdersRequest} couriersName Shipping companies (packages deliverers).
 * @property {(couriersId: Array<Integer>) => ListOrdersRequest} couriersId Courier service identifiers
 * @property {(orderPaymentType: String) => ListOrdersRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(withMissingSalesDocuments: Array<String>) => ListOrdersRequest} withMissingSalesDocuments 
 * @property {(orderType: String) => ListOrdersRequest} orderType Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail"
 * @property {(dropshippingOrderStatus: String) => ListOrdersRequest} dropshippingOrderStatus 
 * @property {(ordersIds: Array<String>) => ListOrdersRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => ListOrdersRequest} ordersSerialNumbers Order serial numbers.
 * @property {(clients: Array<Object>) => ListOrdersRequest} clients Customer data.
 * @property {(ordersRange: Object) => ListOrdersRequest} ordersRange Ranges of dates or serial numbers.
 * @property {(orderSource: Object) => ListOrdersRequest} orderSource Order source data.
 * @property {(products: Array<Object>) => ListOrdersRequest} products Products list.
 * @property {(resultsPage: Integer) => ListOrdersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => ListOrdersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(clientRequestInvoice: String) => ListOrdersRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no.
 * @property {(packages: Object) => ListOrdersRequest} packages Information on consignments.
 * @property {(stocks: Array<Object>) => ListOrdersRequest} stocks Stock quantities data.
 * @property {(campaign: Object) => ListOrdersRequest} campaign Used discount codes data.
 * @property {(loyaltyPointsMode: String) => ListOrdersRequest} loyaltyPointsMode Loyalty points.
 * @property {(orderOperatorLogin: String) => ListOrdersRequest} orderOperatorLogin Order handler.
 * @property {(orderPackingPersonLogin: String) => ListOrdersRequest} orderPackingPersonLogin Order picker.
 * @property {(ordersBy: Array<Object>) => ListOrdersRequest} ordersBy Possibility of sorting returned list
 * @property {(searchingOperatorTypeMatch: String) => ListOrdersRequest} searchingOperatorTypeMatch Method of searching orders by handler.
 * @property {(ordersDelayed: String) => ListOrdersRequest} ordersDelayed Orders with the exceeded date of shipment.
 * @property {(showBundles: Boolean) => ListOrdersRequest} showBundles Combine the components of the set into one item
 * @property {(orderExternalId: String) => ListOrdersRequest} orderExternalId The order ID of the external service
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: String) => ListOrdersRequest} dates Type of date according to the orders are searched: "add", "modified", "dispatch", "payment", "last_payments_operation", "declared_payments"
 * @property {(page: Integer, limit: Integer) => ListOrdersRequest} page Define page number and maximum results per page
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {ListOrdersRequest} Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 */
export const listOrdersProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders/get' }
    object.custom = {
        dates: (dateFrom, dateTo = Date.now(), dateType = 'add') => {
            const ordersDateBegin = dayjs(dateFrom).format('YYYY-MM-DD HH:mm:ss');
            let ordersDateEnd = dayjs(dateTo).format('YYYY-MM-DD HH:mm:ss');
            return {
                ordersRange: { 
                    ordersDateRange: 
                    { 
                       ordersDateType: dateType, 
                        ordersDateBegin,
                        ordersDateEnd
                    }
                }
            }
        },
        clientRequestInvoice: paramYesOrNo('clientRequestInvoice'),
        page: page()
    };
    return new Proxy(object, paramsProxy);
}