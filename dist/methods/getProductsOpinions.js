import { paramsProxy } from "../params.js";

export const getProductsOpinionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}