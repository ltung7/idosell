import { paramsProxy } from "../params.js";

export const getWmsStocksdocumentsOpenedDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/openedDocuments' }
    return new Proxy(object, paramsProxy);
}