import { paramsProxy } from "../params.js";

export const postProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}