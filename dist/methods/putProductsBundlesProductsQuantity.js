import { paramsProxy } from "../params.js";

export const putProductsBundlesProductsQuantityProxy = (object) => {
    object.gate = { method: 'put', node: '/products/bundles/productsQuantity' }
    return new Proxy(object, paramsProxy);
}