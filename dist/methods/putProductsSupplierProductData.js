import { paramsProxy } from "../params.js";

export const putProductsSupplierProductDataProxy = (object) => {
    object.gate = { method: 'put', node: '/products/supplierProductData' }
    return new Proxy(object, paramsProxy);
}