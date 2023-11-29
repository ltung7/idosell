import { paramsProxy } from "../params.js";

export const deleteProductsBrandsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/brands/delete' }
    return new Proxy(object, paramsProxy);
}