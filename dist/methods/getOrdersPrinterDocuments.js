import { paramsProxy } from "../params.js";

/**
 * Method that enables getting a VAT invoice issued for an order added to the administration panel by the IAI POS application.
 * @typedef {Object} GetOrdersPrinterDocumentsRequest
 * @property {(user: String) => GetOrdersPrinterDocumentsRequest} user 
 * @property {(printScenarioAction: String) => GetOrdersPrinterDocumentsRequest} printScenarioAction 
 * @property {(objectNumber: String) => GetOrdersPrinterDocumentsRequest} objectNumber 
 * @property {(objectType: String) => GetOrdersPrinterDocumentsRequest} objectType 
 * @property {(printerAccessKey: String) => GetOrdersPrinterDocumentsRequest} printerAccessKey 
 * @property {(skipNotGeneratedDocument: Boolean) => GetOrdersPrinterDocumentsRequest} skipNotGeneratedDocument 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersPrinterDocumentsRequest} Method that enables getting a VAT invoice issued for an order added to the administration panel by the IAI POS application.
 */
export const getOrdersPrinterDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/printerDocuments' }
    return new Proxy(object, paramsProxy);
}