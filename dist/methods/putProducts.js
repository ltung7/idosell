import { paramsProxy } from "../params.js";

export const putProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/products' }
    return new Proxy(object, paramsProxy);
}