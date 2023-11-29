import { paramsProxy } from "../params.js";

export const deleteProductsSeriesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/series/delete' }
    return new Proxy(object, paramsProxy);
}