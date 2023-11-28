import { paramsProxy } from "../params.js";

/**
 * This method returns the current exchange rate in relation to the currency set in the administration panel.
 * @typedef {Object} GetSystemCurrenciesRequest
 * @property {(symbol: String) => GetSystemCurrenciesRequest} symbol Currency symbol in ISO 4217 format.
 * @property {(date: String) => GetSystemCurrenciesRequest} date Date in format YYYY-MM-DD-HH MM:SS.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemCurrenciesRequest} This method returns the current exchange rate in relation to the currency set in the administration panel.
 */
export const getSystemCurrenciesProxy = (object) => {
    object.gate = { method: 'get', node: '/system/currencies' }
    return new Proxy(object, paramsProxy);
}