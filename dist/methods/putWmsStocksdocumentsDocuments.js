import { paramsProxy } from "../params.js";

export const putWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/documents' }
    return new Proxy(object, paramsProxy);
}