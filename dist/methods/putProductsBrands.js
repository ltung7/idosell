import { paramsProxy } from "../params.js";

export const putProductsBrandsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/brands' }
    return new Proxy(object, paramsProxy);
}