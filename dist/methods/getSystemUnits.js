import { paramsProxy } from "../params.js";

/**
 * The method allows units of measurement to be downloaded from the IdoSell administration panel.
 * @typedef {Object} GetSystemUnitsRequest
 * @property {(languagesIds: Array<String>) => GetSystemUnitsRequest} languagesIds List of languages
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemUnitsRequest} The method allows units of measurement to be downloaded from the IdoSell administration panel.
 */
export const getSystemUnitsProxy = (object) => {
    object.gate = { method: 'get', node: '/system/units' }
    return new Proxy(object, paramsProxy);
}