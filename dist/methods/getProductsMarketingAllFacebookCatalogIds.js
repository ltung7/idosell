import { paramsProxy } from "../params.js";

/**
 * The method allows you to download available Facebook catalogs in a given store.
 * @typedef {Object} GetProductsMarketingAllFacebookCatalogIdsRequest
 * @property {(shopId: Integer) => GetProductsMarketingAllFacebookCatalogIdsRequest} shopId Shop Id
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsMarketingAllFacebookCatalogIdsRequest} The method allows you to download available Facebook catalogs in a given store.
 */
export const getProductsMarketingAllFacebookCatalogIdsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/marketing/allFacebookCatalogIds' }
    return new Proxy(object, paramsProxy);
}