import { paramsProxy } from "../params.js";

/**
 * This get method allows you to retrieve data about existing claims
 * @typedef {Object} GetRmaRequest
 * @property {(rmaIds: Array<Integer>) => GetRmaRequest} rmaIds 
 * @property {(stockId: Integer) => GetRmaRequest} stockId Stock ID
 * @property {(operatorLogin: String) => GetRmaRequest} operatorLogin Login of the user handling the complaint
 * @property {(clientId: String) => GetRmaRequest} clientId Unique client's number.
 * @property {(creationDate: Object) => GetRmaRequest} creationDate Complaint creation date in the YYYY-MM-DD format
 * @property {(modificationDate: Object) => GetRmaRequest} modificationDate Complaint modification date in the YYYY-MM-DD format
 * @property {(endDate: Object) => GetRmaRequest} endDate Complaint closing date in the YYYY-MM-DD format
 * @property {(resultsPage: Integer) => GetRmaRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetRmaRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetRmaRequest} This get method allows you to retrieve data about existing claims
 */
export const getRmaProxy = (object) => {
    object.gate = { method: 'get', node: '/rma/rma' }
    return new Proxy(object, paramsProxy);
}