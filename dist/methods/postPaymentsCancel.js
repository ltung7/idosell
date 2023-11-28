import { paramsProxy } from "../params.js";

/**
 * Method that enables cancelling payments for orders in the administration panel.
 * @typedef {Object} PostPaymentsCancelRequest
 * @property {(sourceType: String) => PostPaymentsCancelRequest} sourceType Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(paymentNumber: String) => PostPaymentsCancelRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostPaymentsCancelRequest} Method that enables cancelling payments for orders in the administration panel.
 */
export const postPaymentsCancelProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/cancel' }
    return new Proxy(object, paramsProxy);
}