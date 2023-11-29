import { paramsProxy } from "../params.js";

export const getProductsStocksProxy = (object) => {
    object.gate = { method: 'get', node: '/products/stocks' }
    return new Proxy(object, paramsProxy);
}