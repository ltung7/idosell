import { paramsProxy } from "../params.js";

export const deleteWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/documents/delete' }
    return new Proxy(object, paramsProxy);
}