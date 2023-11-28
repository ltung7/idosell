import { paramsProxy } from "../params.js";

/**
 * Method that enables adding withdrawals for orders in the administration panel.
 * @typedef {Object} PostPaymentsRepaymentRequest
 * @property {(source_id: Integer) => PostPaymentsRepaymentRequest} source_id Returns ID.
 * @property {(source_type: String) => PostPaymentsRepaymentRequest} source_type Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(value: Number) => PostPaymentsRepaymentRequest} value Refund value.
 * @property {(payment_form_id: Integer) => PostPaymentsRepaymentRequest} payment_form_id Payment method ID. Check getPaymentForms.
 * @property {(account: String) => PostPaymentsRepaymentRequest} account Number of a bank account to which a payment is sent.
 * @property {(client_account: String) => PostPaymentsRepaymentRequest} client_account Customer account.
 * @property {(other: Object) => PostPaymentsRepaymentRequest} other Other.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostPaymentsRepaymentRequest} Method that enables adding withdrawals for orders in the administration panel.
 */
export const postPaymentsRepaymentProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/repayment' }
    return new Proxy(object, paramsProxy);
}