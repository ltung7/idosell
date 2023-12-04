import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getClientsPricelistsProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists/products' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}