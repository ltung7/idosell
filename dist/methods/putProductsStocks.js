import { paramsProxy } from "../params.js";

export const putProductsStocksProxy = (object) => {
    object.gate = { method: 'put', node: '/products/stocks' }
    return new Proxy(object, paramsProxy);
}