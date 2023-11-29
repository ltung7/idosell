import { paramsProxy } from "../params.js";

export const putProductsBrandsFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/products/brands/filter' }
    return new Proxy(object, paramsProxy);
}