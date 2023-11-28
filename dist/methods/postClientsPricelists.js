import { paramsProxy } from "../params.js";

/**
 * The insert method enables you to add a new individual price list to the administration panel
 * @typedef {Object} PostClientsPricelistsRequest
 * @property {(priceListName: String) => PostClientsPricelistsRequest} priceListName Name of individual price list.
 * @property {(onlyOrderProductsWithManuallySetPrices: String) => PostClientsPricelistsRequest} onlyOrderProductsWithManuallySetPrices Restrict visibility to products listed in price list (other products will remain hidden) - yes - no
 * @property {(onlySeeProductsWithManuallySetPrices: String) => PostClientsPricelistsRequest} onlySeeProductsWithManuallySetPrices Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsPricelistsRequest} The insert method enables you to add a new individual price list to the administration panel
 */
export const postClientsPricelistsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/pricelists' }
    return new Proxy(object, paramsProxy);
}