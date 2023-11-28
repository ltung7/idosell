import { paramsProxy } from "../params.js";

/**
 * The getClients method returns a list of customer IDs assigned to an individual price list
 * @typedef {Object} GetClientsPricelistsClientsRequest
 * @property {(priceListId: Integer) => GetClientsPricelistsClientsRequest} priceListId Individual price list ID.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsPricelistsClientsRequest} The getClients method returns a list of customer IDs assigned to an individual price list
 */
export const getClientsPricelistsClientsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists/clients' }
    return new Proxy(object, paramsProxy);
}