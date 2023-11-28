import { paramsProxy } from "../params.js";

/**
 * This method returns sales and warehouse documents in the universal EDI (Electronic Data Interchange) format.
 * @typedef {Object} GetOrdersExportdocumentsEPPRequest
 * @property {(dateBegin: String) => GetOrdersExportdocumentsEPPRequest} dateBegin Beginning date in YYYY-MM-DD HH:MM:SS format.
 * @property {(dateEnd: String) => GetOrdersExportdocumentsEPPRequest} dateEnd Ending date in YYYY-MM-DD HH:MM:SS format.
 * @property {(applicationType: String) => GetOrdersExportdocumentsEPPRequest} applicationType 
 * @property {(stocks: Array<Integer>) => GetOrdersExportdocumentsEPPRequest} stocks Stock ID (required only when selecting particular stocks).
 * @property {(documentType: String) => GetOrdersExportdocumentsEPPRequest} documentType Document type
 * @property {(invoiceFirstGeneratedDate: Integer) => GetOrdersExportdocumentsEPPRequest} invoiceFirstGeneratedDate Date the document was first generated.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersExportdocumentsEPPRequest} This method returns sales and warehouse documents in the universal EDI (Electronic Data Interchange) format.
 */
export const getOrdersExportdocumentsEPPProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/exportdocuments/EPP' }
    return new Proxy(object, paramsProxy);
}