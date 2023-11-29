import { paramsProxy } from "../params.js";

export const deleteOrdersDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/documents/delete' }
    return new Proxy(object, paramsProxy);
}