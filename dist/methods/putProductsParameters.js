import { paramsProxy } from "../params.js";

export const putProductsParametersProxy = (object) => {
    object.gate = { method: 'put', node: '/products/parameters' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}