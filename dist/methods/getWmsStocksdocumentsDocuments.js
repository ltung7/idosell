import { paramsProxy } from "../params.js";

export const getWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/documents' }
    return new Proxy(object, paramsProxy);
}