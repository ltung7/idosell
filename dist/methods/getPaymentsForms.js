import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about payment methods available in the administration panel.
 * @typedef {Object} GetPaymentsFormsRequest
 * @property {(activeOnly: String) => GetPaymentsFormsRequest} activeOnly Return only active forms of payment.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetPaymentsFormsRequest} Method that enables getting information about payment methods available in the administration panel.
 */
export const getPaymentsFormsProxy = (object) => {
    object.gate = { method: 'get', node: '/payments/forms' }
    return new Proxy(object, paramsProxy);
}