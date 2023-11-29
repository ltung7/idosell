import { paramsProxy } from "../params.js";

export const putProductsSupplierCodeProxy = (object) => {
    object.gate = { method: 'put', node: '/products/supplierCode' }
    return new Proxy(object, paramsProxy);
}