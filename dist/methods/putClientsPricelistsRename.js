import { paramsProxy } from "../params.js";

/**
 * The rename method enables changing the name of an individual price list
 * @typedef {Object} PutClientsPricelistsRenameRequest
 * @property {(priceListName: String) => PutClientsPricelistsRenameRequest} priceListName Name of individual price list.
 * @property {(priceListId: Integer) => PutClientsPricelistsRenameRequest} priceListId Individual price list ID.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsPricelistsRenameRequest} The rename method enables changing the name of an individual price list
 */
export const putClientsPricelistsRenameProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/rename' }
    return new Proxy(object, paramsProxy);
}