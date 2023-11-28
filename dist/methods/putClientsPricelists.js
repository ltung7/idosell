import { paramsProxy } from "../params.js";

/**
 * The update method allows you to change the individual price list.
 * @typedef {Object} PutClientsPricelistsRequest
 * @property {(priceListId: Integer) => PutClientsPricelistsRequest} priceListId Individual price list ID.
 * @property {(priceListName: String) => PutClientsPricelistsRequest} priceListName Name of individual price list.
 * @property {(onlyOrderProductsWithManuallySetPrices: String) => PutClientsPricelistsRequest} onlyOrderProductsWithManuallySetPrices Restrict visibility to products listed in price list (other products will remain hidden) - yes - no
 * @property {(onlySeeProductsWithManuallySetPrices: String) => PutClientsPricelistsRequest} onlySeeProductsWithManuallySetPrices Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsPricelistsRequest} The update method allows you to change the individual price list.
 */
export const putClientsPricelistsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists' }
    return new Proxy(object, paramsProxy);
}