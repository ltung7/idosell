import { paramsProxy } from "../params.js";

/**
 * Method that enables editing payments for orders in the administration panel.
 * @typedef {Object} PutPaymentsRequest
 * @property {(sourceType: String) => PutPaymentsRequest} sourceType Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(paymentNumber: String) => PutPaymentsRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {(paymentFormId: Integer) => PutPaymentsRequest} paymentFormId Payment method ID. Check getPaymentForms.
 * @property {(value: Number) => PutPaymentsRequest} value Refund value.
 * @property {(accountingDate: String) => PutPaymentsRequest} accountingDate Registering date.
 * @property {(account: String) => PutPaymentsRequest} account Number of a bank account to which a payment is sent.
 * @property {(clientAccount: String) => PutPaymentsRequest} clientAccount Data of customer account in store.
 * @property {(other: Object) => PutPaymentsRequest} other 
 * @property {(externalPaymentId: String) => PutPaymentsRequest} externalPaymentId Transaction ID in external service
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutPaymentsRequest} Method that enables editing payments for orders in the administration panel.
 */
export const putPaymentsProxy = (object) => {
    object.gate = { method: 'put', node: '/payments/payments' }
    return new Proxy(object, paramsProxy);
}