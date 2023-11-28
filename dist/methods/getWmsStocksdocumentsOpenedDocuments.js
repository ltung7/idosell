import { paramsProxy } from "../params.js";

/**
 * Method that enables getting a list of open warehouse documents.
 * @typedef {Object} GetWmsStocksdocumentsOpenedDocumentsRequest
 * @property {(type: String) => GetWmsStocksdocumentsOpenedDocumentsRequest} type 
 * @property {(status: String) => GetWmsStocksdocumentsOpenedDocumentsRequest} status 
 * @property {(stockId: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} stockId Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(stockSourceId: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} stockSourceId Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(dateRange: Object) => GetWmsStocksdocumentsOpenedDocumentsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetWmsStocksdocumentsOpenedDocumentsRequest} Method that enables getting a list of open warehouse documents.
 */
export const getWmsStocksdocumentsOpenedDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/openedDocuments' }
    return new Proxy(object, paramsProxy);
}