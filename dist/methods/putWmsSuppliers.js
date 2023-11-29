import { paramsProxy } from "../params.js";

export const putWmsSuppliersProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/suppliers/suppliers' }
    return new Proxy(object, paramsProxy);
}