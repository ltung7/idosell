import { paramsProxy } from "../params.js";

export const putProductsSeriesFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/products/series/filter' }
    return new Proxy(object, paramsProxy);
}