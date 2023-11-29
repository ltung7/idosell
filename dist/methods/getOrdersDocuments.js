import { paramsProxy } from "../params.js";

export const getOrdersDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/documents' }
    return new Proxy(object, paramsProxy);
}