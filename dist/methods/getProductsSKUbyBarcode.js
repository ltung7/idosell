import { paramsProxy } from "../params.js";

export const getProductsSKUbyBarcodeProxy = (object) => {
    object.gate = { method: 'get', node: '/products/SKUbyBarcode' }
    return new Proxy(object, paramsProxy);
}