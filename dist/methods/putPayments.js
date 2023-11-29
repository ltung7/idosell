import { paramsProxy } from "../params.js";

export const putPaymentsProxy = (object) => {
    object.gate = { method: 'put', node: '/payments/payments' }
    return new Proxy(object, paramsProxy);
}