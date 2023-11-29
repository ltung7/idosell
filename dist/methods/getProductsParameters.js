import { paramsProxy } from "../params.js";

export const getProductsParametersProxy = (object) => {
    object.gate = { method: 'get', node: '/products/parameters' }
    return new Proxy(object, paramsProxy);
}