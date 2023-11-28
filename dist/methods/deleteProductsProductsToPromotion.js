import { paramsProxy } from "../params.js";

/**
 * The method allows to remove the products from the promotion.
 * @typedef {Object} DeleteProductsProductsToPromotionRequest
 * @property {(promotionId: Integer) => DeleteProductsProductsToPromotionRequest} promotionId Special offer ID
 * @property {(products: Array<Integer>) => DeleteProductsProductsToPromotionRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsProductsToPromotionRequest} The method allows to remove the products from the promotion.
 */
export const deleteProductsProductsToPromotionProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToPromotion/delete' }
    return new Proxy(object, paramsProxy);
}