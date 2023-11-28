import { paramsProxy } from "../params.js";

/**
 * The method allows to download a list of suppliers along with information about the number of products assigned to them.
 * @typedef {Object} GetWmsSuppliersSuppliersRequest
 * @property {(resultsPage: Integer) => GetWmsSuppliersSuppliersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsSuppliersSuppliersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(returnProductsCount: Boolean) => GetWmsSuppliersSuppliersRequest} returnProductsCount Return quantity of products assigned to supplier
 * @property {(names: Array<String>) => GetWmsSuppliersSuppliersRequest} names Names
 * @property {(ids: Array<Integer>) => GetWmsSuppliersSuppliersRequest} ids IDs
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetWmsSuppliersSuppliersRequest} The method allows to download a list of suppliers along with information about the number of products assigned to them.
 */
export const getWmsSuppliersSuppliersProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/suppliers/suppliers' }
    return new Proxy(object, paramsProxy);
}