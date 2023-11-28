import { paramsProxy } from "../params.js";

/**
 * The setClients method allows you to assign customers to an individual price list
 * @typedef {Object} PutClientsPricelistsClientsRequest
 * @property {(priceListId: Integer) => PutClientsPricelistsClientsRequest} priceListId Individual price list ID.
 * @property {(clientsIds: Array<Integer>) => PutClientsPricelistsClientsRequest} clientsIds Customer numbers.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsPricelistsClientsRequest} The setClients method allows you to assign customers to an individual price list
 */
export const putClientsPricelistsClientsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/clients' }
    return new Proxy(object, paramsProxy);
}