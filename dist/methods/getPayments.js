import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about payments for orders in the administration panel.
 * @typedef {Object} GetPaymentsRequest
 * @property {(paymentNumber: String) => GetPaymentsRequest} paymentNumber Payment number consists of: source ID (order / return ID) and the payment ordinal number, e.g. 1234-1.
 * @property {(sourceType: String) => GetPaymentsRequest} sourceType Source type.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetPaymentsRequest} Method that enables getting information about payments for orders in the administration panel.
 */
export const getPaymentsProxy = (object) => {
    object.gate = { method: 'get', node: '/payments/payments' }
    return new Proxy(object, paramsProxy);
}