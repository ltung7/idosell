import { paramsProxy } from "../params.js";

export const getOrdersExportdocumentsJPKProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/exportdocuments/JPK' }
    return new Proxy(object, paramsProxy);
}