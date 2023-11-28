import { paramsProxy } from "../params.js";

/**
 * The delete method enables to delete an individual pricelist. The pricelist must not be associated with any customer. In order to check the clients related to the given group, the getClients method shall be used.
 * @typedef {Object} DeleteClientsPricelistsRequest
 * @property {(priceListId: Integer) => DeleteClientsPricelistsRequest} priceListId Individual price list ID.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteClientsPricelistsRequest} The delete method enables to delete an individual pricelist. The pricelist must not be associated with any customer. In order to check the clients related to the given group, the getClients method shall be used.
 */
export const deleteClientsPricelistsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/pricelists/delete' }
    return new Proxy(object, paramsProxy);
}