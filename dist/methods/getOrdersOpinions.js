import { paramsProxy } from "../params.js";

/**
 * The method allows for downloading information about reviews issued for orders available in the IdoSell Shop administration panel.
 * @typedef {Object} GetOrdersOpinionsRequest
 * @property {(opinion: Object) => GetOrdersOpinionsRequest} opinion Review identification
 * @property {(orders: Object) => GetOrdersOpinionsRequest} orders Orders.
 * @property {(clients: Object) => GetOrdersOpinionsRequest} clients Customer data.
 * @property {(dateRange: Object) => GetOrdersOpinionsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetOrdersOpinionsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetOrdersOpinionsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ordersBy: Array<Object>) => GetOrdersOpinionsRequest} ordersBy Possibility of sorting returned list
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersOpinionsRequest} The method allows for downloading information about reviews issued for orders available in the IdoSell Shop administration panel.
 */
export const getOrdersOpinionsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/opinions' }
    return new Proxy(object, paramsProxy);
}