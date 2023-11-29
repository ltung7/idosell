import { paramsProxy } from "../params.js";

export const getPaymentsProxy = (object) => {
    object.gate = { method: 'get', node: '/payments/payments' }
    return new Proxy(object, paramsProxy);
}