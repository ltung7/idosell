import { paramsProxy } from "../params.js";

/**
 * The method allows to send refund requests (so called cashback) for payments managed by external payment systems which have such option available..
 * @typedef {Object} PostPaymentsCashbackRequest
 * @property {(sourceType: String) => PostPaymentsCashbackRequest} sourceType 
 * @property {(paymentNumber: String) => PostPaymentsCashbackRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {(value: Number) => PostPaymentsCashbackRequest} value Refund value.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostPaymentsCashbackRequest} The method allows to send refund requests (so called cashback) for payments managed by external payment systems which have such option available..
 */
export const postPaymentsCashbackProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/cashback' }
    return new Proxy(object, paramsProxy);
}