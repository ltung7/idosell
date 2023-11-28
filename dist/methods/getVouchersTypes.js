import { paramsProxy } from "../params.js";

/**
 * Allows for downloading all discount code campaigns defined in the administration panel
 * @typedef {Object} GetVouchersTypesRequest
 * @property {(resultsPage: Integer) => GetVouchersTypesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetVouchersTypesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetVouchersTypesRequest} Allows for downloading all discount code campaigns defined in the administration panel
 */
export const getVouchersTypesProxy = (object) => {
    object.gate = { method: 'get', node: '/vouchers/types' }
    return new Proxy(object, paramsProxy);
}