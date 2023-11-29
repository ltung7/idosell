import { paramsProxy } from "../params.js";

export const postProductsOpinionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}