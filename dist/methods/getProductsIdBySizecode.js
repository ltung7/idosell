import { paramsProxy } from "../params.js";

export const getProductsIdBySizecodeProxy = (object) => {
    object.gate = { method: 'get', node: '/products/idBySizecode' }
    return new Proxy(object, paramsProxy);
}