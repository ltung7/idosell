import { paramsProxy } from "../params.js";

/**
 * The method allows you to add products to the Facebook catalog.
 * @typedef {Object} DeleteProductsProductsToFacebookCatalogRequest
 * @property {(facebookCatalogId: Integer) => DeleteProductsProductsToFacebookCatalogRequest} facebookCatalogId You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel
 * @property {(shopId: Integer) => DeleteProductsProductsToFacebookCatalogRequest} shopId Shop Id
 * @property {(products: Array<Integer>) => DeleteProductsProductsToFacebookCatalogRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsProductsToFacebookCatalogRequest} The method allows you to add products to the Facebook catalog.
 */
export const deleteProductsProductsToFacebookCatalogProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToFacebookCatalog/delete' }
    return new Proxy(object, paramsProxy);
}