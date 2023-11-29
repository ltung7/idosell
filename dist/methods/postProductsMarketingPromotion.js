import { paramsProxy } from "../params.js";

export const postProductsMarketingPromotionProxy = (object) => {
    object.gate = { method: 'post', node: '/products/marketing/promotion' }
    return new Proxy(object, paramsProxy);
}