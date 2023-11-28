import { paramsProxy } from "../params.js";

/**
 * The method allows to add products to an existing special offer.
 * @typedef {Object} PostProductsProductsToPromotionRequest
 * @property {(promotionId: Integer) => PostProductsProductsToPromotionRequest} promotionId Special offer ID
 * @property {(products: Array<Integer>) => PostProductsProductsToPromotionRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsProductsToPromotionRequest} The method allows to add products to an existing special offer.
 */
export const postProductsProductsToPromotionProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToPromotion' }
    return new Proxy(object, paramsProxy);
}