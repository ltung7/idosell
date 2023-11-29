import { paramsProxy } from "../params.js";

export const getProductsCategoriesIdosellProxy = (object) => {
    object.gate = { method: 'get', node: '/products/categoriesIdosell' }
    return new Proxy(object, paramsProxy);
}