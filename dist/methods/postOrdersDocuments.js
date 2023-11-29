import { paramsProxy } from "../params.js";

export const postOrdersDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/documents' }
    return new Proxy(object, paramsProxy);
}