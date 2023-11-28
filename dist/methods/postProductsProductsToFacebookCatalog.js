import { paramsProxy } from "../params.js";

/**
 * The method allows you to add products to the Facebook catalog.
 * @typedef {Object} PostProductsProductsToFacebookCatalogRequest
 * @property {(facebookCatalogId: Integer) => PostProductsProductsToFacebookCatalogRequest} facebookCatalogId You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel
 * @property {(shopId: Integer) => PostProductsProductsToFacebookCatalogRequest} shopId Shop Id
 * @property {(products: Array<Integer>) => PostProductsProductsToFacebookCatalogRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsProductsToFacebookCatalogRequest} The method allows you to add products to the Facebook catalog.
 */
export const postProductsProductsToFacebookCatalogProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToFacebookCatalog' }
    return new Proxy(object, paramsProxy);
}