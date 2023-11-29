import { paramsProxy } from "../params.js";

export const getOrdersPrinterDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/printerDocuments' }
    return new Proxy(object, paramsProxy);
}