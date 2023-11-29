import { paramsProxy } from "../params.js";

export const putClientsPricelistsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/products' }
    return new Proxy(object, paramsProxy);
}