import { paramsProxy } from "../params.js";

export const getProductsSeriesFilterProxy = (object) => {
    object.gate = { method: 'get', node: '/products/series/filter' }
    return new Proxy(object, paramsProxy);
}