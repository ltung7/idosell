import { paramsProxy } from "../params.js";

export const putProductsParametersProxy = (object) => {
    object.gate = { method: 'put', node: '/products/parameters' }
    return new Proxy(object, paramsProxy);
}