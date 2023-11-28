import { paramsProxy } from "../params.js";

/**
 * Method that enables setting external system codes for existing customer accounts.
 * @typedef {Object} PutClientsExternalCodeRequest
 * @property {(client_id: Integer) => PutClientsExternalCodeRequest} client_id 
 * @property {(client_login: String) => PutClientsExternalCodeRequest} client_login Customer's login.
 * @property {(code_extern: String) => PutClientsExternalCodeRequest} code_extern External system code.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsExternalCodeRequest} Method that enables setting external system codes for existing customer accounts.
 */
export const putClientsExternalCodeProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/externalCode' }
    return new Proxy(object, paramsProxy);
}