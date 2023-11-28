import { paramsProxy } from "../params.js";

/**
 * #!MetodaSluzyDoPobieraniaInformacjiOOplacalnosciZamowienia!#
 * @typedef {Object} GetOrdersProfitabilityRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersProfitabilityRequest} orderSerialNumber Order serial number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersProfitabilityRequest} #!MetodaSluzyDoPobieraniaInformacjiOOplacalnosciZamowienia!#
 */
export const getOrdersProfitabilityProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/profitability' }
    return new Proxy(object, paramsProxy);
}