import { paramsProxy } from "../params.js";

export const getWmsSuppliersProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/suppliers/suppliers' }
    return new Proxy(object, paramsProxy);
}