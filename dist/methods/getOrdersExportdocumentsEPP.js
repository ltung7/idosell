import { paramsProxy } from "../params.js";

export const getOrdersExportdocumentsEPPProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/exportdocuments/EPP' }
    return new Proxy(object, paramsProxy);
}