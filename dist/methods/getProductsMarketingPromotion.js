import { paramsProxy } from "../params.js";

/**
 * The method allows to download a list of active special offers for the given store.
 * @typedef {Object} GetProductsMarketingPromotionRequest
 * @property {(shopId: Integer) => GetProductsMarketingPromotionRequest} shopId Shop Id
 * @property {(products: Array<Integer>) => GetProductsMarketingPromotionRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsMarketingPromotionRequest} The method allows to download a list of active special offers for the given store.
 */
export const getProductsMarketingPromotionProxy = (object) => {
    object.gate = { method: 'get', node: '/products/marketing/promotion' }
    return new Proxy(object, paramsProxy);
}