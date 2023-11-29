import { paramsProxy } from "../params.js";

export const postProductsBrandsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/brands' }
    return new Proxy(object, paramsProxy);
}