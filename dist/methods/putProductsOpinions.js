import { paramsProxy } from "../params.js";

export const putProductsOpinionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}