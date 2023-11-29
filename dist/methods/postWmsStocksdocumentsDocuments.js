import { paramsProxy } from "../params.js";

export const postWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/documents' }
    return new Proxy(object, paramsProxy);
}