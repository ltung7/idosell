import { paramsProxy } from "../params.js";

/**
 * Method that enables adding payments to orders in the administration panel.
 * @typedef {Object} PostPaymentsRequest
 * @property {(sourceId: Integer) => PostPaymentsRequest} sourceId Source ID.
 * @property {(sourceType: String) => PostPaymentsRequest} sourceType Source type.
 * @property {(value: Number) => PostPaymentsRequest} value Payment amount.
 * @property {(account: String) => PostPaymentsRequest} account Number of a bank account to which a payment is sent.
 * @property {(type: String) => PostPaymentsRequest} type 
 * @property {(paymentFormId: Integer) => PostPaymentsRequest} paymentFormId Form of payment ID.
 * @property {(paymentVoucherKey: String) => PostPaymentsRequest} paymentVoucherKey Gift card or voucher number
 * @property {(giftCardPIN: Integer) => PostPaymentsRequest} giftCardPIN Gift card PIN.
 * @property {(externalPaymentId: String) => PostPaymentsRequest} externalPaymentId Transaction ID in external service
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostPaymentsRequest} Method that enables adding payments to orders in the administration panel.
 */
export const postPaymentsProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/payments' }
    return new Proxy(object, paramsProxy);
}