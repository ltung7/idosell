import { paramsProxy } from "../params.js";

export const putProductsCategoriesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/categories' }
    return new Proxy(object, paramsProxy);
}