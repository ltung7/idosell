import { paramsProxy } from "../params.js";

export const deleteProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/opinions/opinions/delete' }
    return new Proxy(object, paramsProxy);
}