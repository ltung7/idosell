import { paramsProxy } from "../params.js";

export const putProductsStockQuantityProxy = (object) => {
    object.gate = { method: 'put', node: '/products/stockQuantity' }
    return new Proxy(object, paramsProxy);
}