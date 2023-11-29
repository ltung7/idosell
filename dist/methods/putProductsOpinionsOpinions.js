import { paramsProxy } from "../params.js";

export const putProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}