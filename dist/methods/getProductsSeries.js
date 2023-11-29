import { paramsProxy } from "../params.js";

export const getProductsSeriesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/series' }
    return new Proxy(object, paramsProxy);
}