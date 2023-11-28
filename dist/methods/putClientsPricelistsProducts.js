import { paramsProxy } from "../params.js";

/**
 * The setProducts method allows you to add goods to an individual price list and specify their price
 * @typedef {Object} PutClientsPricelistsProductsRequest
 * @property {(priceListId: Integer) => PutClientsPricelistsProductsRequest} priceListId Individual price list ID.
 * @property {(products: Array<Object>) => PutClientsPricelistsProductsRequest} products Products list.
 * @property {(producers: Array<Object>) => PutClientsPricelistsProductsRequest} producers List of manufacturers assigned to sought products.
 * @property {(series: Array<Object>) => PutClientsPricelistsProductsRequest} series Series list.
 * @property {(categories: Array<Object>) => PutClientsPricelistsProductsRequest} categories List of categories in which sought products are present.
 * @property {(menuItems: Array<Object>) => PutClientsPricelistsProductsRequest} menuItems 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsPricelistsProductsRequest} The setProducts method allows you to add goods to an individual price list and specify their price
 */
export const putClientsPricelistsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/products' }
    return new Proxy(object, paramsProxy);
}