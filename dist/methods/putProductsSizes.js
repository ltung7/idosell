import { paramsProxy } from "../params.js";

export const putProductsSizesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/sizes' }
    return new Proxy(object, paramsProxy);
}