import { paramsProxy } from "../params.js";

/**
 * The method allows you to retrieve products assigned to the Facebook catalog.
 * @typedef {Object} GetProductsProductsToFacebookCatalogRequest
 * @property {(facebookCatalogId: Integer) => GetProductsProductsToFacebookCatalogRequest} facebookCatalogId You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel
 * @property {(shopId: Integer) => GetProductsProductsToFacebookCatalogRequest} shopId Shop Id
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsProductsToFacebookCatalogRequest} The method allows you to retrieve products assigned to the Facebook catalog.
 */
export const getProductsProductsToFacebookCatalogProxy = (object) => {
    object.gate = { method: 'get', node: '/products/productsToFacebookCatalog' }
    return new Proxy(object, paramsProxy);
}