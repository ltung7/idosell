import { paramsProxy } from "../params.js";

export const putProductsMarketingPromotionProxy = (object) => {
    object.gate = { method: 'put', node: '/products/marketing/promotion' }
    return new Proxy(object, paramsProxy);
}