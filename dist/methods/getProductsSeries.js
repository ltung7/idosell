import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getProductsSeriesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/series' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}