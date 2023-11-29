import { paramsProxy } from "../params.js";

export const getProductsMarketingPromotionProxy = (object) => {
    object.gate = { method: 'get', node: '/products/marketing/promotion' }
    return new Proxy(object, paramsProxy);
}