import { paramsProxy } from "../params.js";

export const getWmsSuppliersSuppliersProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/suppliers/suppliers' }
    return new Proxy(object, paramsProxy);
}