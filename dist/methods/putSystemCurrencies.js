import { paramsProxy } from "../params.js";

/**
 * Method that allows for setting currency exchange rates in relation to the currency set in the administration panel.
 * @typedef {Object} PutSystemCurrenciesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutSystemCurrenciesRequest} Method that allows for setting currency exchange rates in relation to the currency set in the administration panel.
 */
export const putSystemCurrenciesProxy = (object) => {
    object.gate = { method: 'put', node: '/system/currencies' }
    return new Proxy(object, paramsProxy);
}