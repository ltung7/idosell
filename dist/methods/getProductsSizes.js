import { paramsProxy } from "../params.js";

export const getProductsSizesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/sizes' }
    return new Proxy(object, paramsProxy);
}