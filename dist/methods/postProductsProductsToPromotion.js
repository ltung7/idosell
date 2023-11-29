import { paramsProxy } from "../params.js";

export const postProductsProductsToPromotionProxy = (object) => {
    object.gate = { method: 'post', node: '/products/productsToPromotion' }
    return new Proxy(object, paramsProxy);
}