import { paramsProxy } from "../params.js";

/**
 * The method allows to retrieve the list of administrative regions available in the IdoSell administration panel.
 * @typedef {Object} GetClientsProvinceListRequest
 * @property {(country_code: String) => GetClientsProvinceListRequest} country_code Country code in ISO 3166-1 standard.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsProvinceListRequest} The method allows to retrieve the list of administrative regions available in the IdoSell administration panel.
 */
export const getClientsProvinceListProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/provinceList' }
    return new Proxy(object, paramsProxy);
}