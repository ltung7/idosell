import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getProductsBrandsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/brands' }
    object.custom = {
        page: page(false)
    };
    return new Proxy(object, paramsProxy);
}