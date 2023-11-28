import { paramsProxy } from "../params.js";

/**
 * Allows for assigning products to marketing hot spots
 * @typedef {Object} PutProductsMarketingZonesRequest
 * @property {(products: Array<Object>) => PutProductsMarketingZonesRequest} products Products list.
 * @property {(assignment_mode: String) => PutProductsMarketingZonesRequest} assignment_mode 
 * @property {(marketing_zones: Object) => PutProductsMarketingZonesRequest} marketing_zones 
 * @property {(shops: Array<Object>) => PutProductsMarketingZonesRequest} shops Marketing hotspots in shops
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsMarketingZonesRequest} Allows for assigning products to marketing hot spots
 */
export const putProductsMarketingZonesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/marketingZones' }
    return new Proxy(object, paramsProxy);
}