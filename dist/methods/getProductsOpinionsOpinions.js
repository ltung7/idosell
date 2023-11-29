import { paramsProxy } from "../params.js";

export const getProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}