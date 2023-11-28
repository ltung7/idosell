import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting customer balance information from existing customer accounts.
 * @typedef {Object} GetClientsBalanceRequest
 * @property {(client_numbers: Array<Integer>) => GetClientsBalanceRequest} client_numbers Customer Id
 * @property {(text_search: String) => GetClientsBalanceRequest} text_search Text search through customer data.
 * @property {(active: String) => GetClientsBalanceRequest} active 
 * @property {(has_trade_credit: String) => GetClientsBalanceRequest} has_trade_credit 
 * @property {(last_purchase_date: Object) => GetClientsBalanceRequest} last_purchase_date Start and end date (YYYY-MM-DD).
 * @property {(return_elements: Array<String>) => GetClientsBalanceRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetClientsBalanceRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetClientsBalanceRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsBalanceRequest} Method that enables extracting customer balance information from existing customer accounts.
 */
export const getClientsBalanceProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/balance' }
    return new Proxy(object, paramsProxy);
}