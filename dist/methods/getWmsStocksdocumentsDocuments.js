import { paramsProxy } from "../params.js";

/**
 * The method allows for downloading a list of warehouse documents.
 * @typedef {Object} GetWmsStocksdocumentsDocumentsRequest
 * @property {(stockDocumentType: String) => GetWmsStocksdocumentsDocumentsRequest} stockDocumentType Document type.
 * @property {(stockDocumentStatus: String) => GetWmsStocksdocumentsDocumentsRequest} stockDocumentStatus Document status.
 * @property {(stockDocumentsIds: Array<Integer>) => GetWmsStocksdocumentsDocumentsRequest} stockDocumentsIds Document identifier.
 * @property {(stockDocumentsNumbers: Array<String>) => GetWmsStocksdocumentsDocumentsRequest} stockDocumentsNumbers Document number.
 * @property {(productsInPreorder: String) => GetWmsStocksdocumentsDocumentsRequest} productsInPreorder Products available in presales.
 * @property {(dateRange: Object) => GetWmsStocksdocumentsDocumentsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetWmsStocksdocumentsDocumentsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsStocksdocumentsDocumentsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetWmsStocksdocumentsDocumentsRequest} The method allows for downloading a list of warehouse documents.
 */
export const getWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/documents' }
    return new Proxy(object, paramsProxy);
}