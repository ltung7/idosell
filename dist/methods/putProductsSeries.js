import { paramsProxy } from "../params.js";

export const putProductsSeriesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/series' }
    return new Proxy(object, paramsProxy);
}