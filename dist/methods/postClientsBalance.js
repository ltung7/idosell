import { paramsProxy } from "../params.js";

/**
 * Method that allows for customer account balance operations.
 * @typedef {Object} PostClientsBalanceRequest
 * @property {(clientId: Integer) => PostClientsBalanceRequest} clientId Unique client's number.
 * @property {(operation: String) => PostClientsBalanceRequest} operation Operation: - add, - remove.
 * @property {(balance: Number) => PostClientsBalanceRequest} balance Value to add or remove from balance.
 * @property {(currency: String) => PostClientsBalanceRequest} currency Currency of operation.
 * @property {(note: String) => PostClientsBalanceRequest} note Note.
 * @property {(prepaidId: Integer) => PostClientsBalanceRequest} prepaidId Order payment identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsBalanceRequest} Method that allows for customer account balance operations.
 */
export const postClientsBalanceProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/balance' }
    return new Proxy(object, paramsProxy);
}