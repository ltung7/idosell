import { paramsProxy } from "../params.js";

export const postPaymentsProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/payments' }
    return new Proxy(object, paramsProxy);
}