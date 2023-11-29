import { paramsProxy } from "../params.js";

export const deleteProductsProductsToPromotionProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToPromotion/delete' }
    return new Proxy(object, paramsProxy);
}