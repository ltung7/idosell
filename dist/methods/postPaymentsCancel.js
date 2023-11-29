import { paramsProxy } from "../params.js";

export const postPaymentsCancelProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/cancel' }
    return new Proxy(object, paramsProxy);
}