import { paramsProxy } from "../params.js";

export const getProductsOpinionsRateProxy = (object) => {
    object.gate = { method: 'get', node: '/products/opinions/rate' }
    return new Proxy(object, paramsProxy);
}