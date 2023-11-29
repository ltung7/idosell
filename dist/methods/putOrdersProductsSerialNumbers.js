import { paramsProxy } from "../params.js";

export const putOrdersProductsSerialNumbersProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/productsSerialNumbers' }
    return new Proxy(object, paramsProxy);
}