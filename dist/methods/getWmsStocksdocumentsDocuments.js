import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/documents' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}