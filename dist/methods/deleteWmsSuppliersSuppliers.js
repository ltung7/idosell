import { paramsProxy } from "../params.js";

export const deleteWmsSuppliersSuppliersProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/suppliers/suppliers/delete' }
    return new Proxy(object, paramsProxy);
}