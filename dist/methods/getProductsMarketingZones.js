import { paramsProxy } from "../params.js";

/**
 * Allows for getting information about products assigned to marketing hot spots
 * @typedef {Object} GetProductsMarketingZonesRequest
 * @property {(products: Array<Object>) => GetProductsMarketingZonesRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsMarketingZonesRequest} Allows for getting information about products assigned to marketing hot spots
 */
export const getProductsMarketingZonesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/marketingZones' }
    return new Proxy(object, paramsProxy);
}