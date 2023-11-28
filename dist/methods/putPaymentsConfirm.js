import { paramsProxy } from "../params.js";

/**
 * Method that enables accepting payments for orders in the administration panel.
 * @typedef {Object} PutPaymentsConfirmRequest
 * @property {(sourceType: String) => PutPaymentsConfirmRequest} sourceType Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(paymentNumber: String) => PutPaymentsConfirmRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {(accountingDate: String) => PutPaymentsConfirmRequest} accountingDate Registering date
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutPaymentsConfirmRequest} Method that enables accepting payments for orders in the administration panel.
 */
export const putPaymentsConfirmProxy = (object) => {
    object.gate = { method: 'put', node: '/payments/confirm' }
    return new Proxy(object, paramsProxy);
}