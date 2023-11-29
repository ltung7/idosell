import { paramsProxy } from "../params.js";

export const getClientsPricelistsProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists/products' }
    return new Proxy(object, paramsProxy);
}