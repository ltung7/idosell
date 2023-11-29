import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getProductsCategoriesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/categories' }
    object.custom = {
        page: page(false)
    };
    return new Proxy(object, paramsProxy);
}