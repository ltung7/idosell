import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getWmsStocksdocumentsOpenedDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/openedDocuments' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}