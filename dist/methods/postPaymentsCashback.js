import { paramsProxy } from "../params.js";

export const postPaymentsCashbackProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/cashback' }
    return new Proxy(object, paramsProxy);
}