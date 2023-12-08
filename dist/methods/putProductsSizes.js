import { paramsProxy } from "../params.js";

export const putProductsSizesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/sizes' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}