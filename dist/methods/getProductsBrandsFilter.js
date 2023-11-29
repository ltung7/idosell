import { paramsProxy } from "../params.js";

export const getProductsBrandsFilterProxy = (object) => {
    object.gate = { method: 'get', node: '/products/brands/filter' }
    return new Proxy(object, paramsProxy);
}