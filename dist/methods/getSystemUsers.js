import { paramsProxy } from "../params.js";

/**
 * Method that returns information about IdoSell Shop administration panel users.
 * @typedef {Object} GetSystemUsersRequest
 * @property {(userType: String) => GetSystemUsersRequest} userType User type. List of options "all" - All users, "active" - Only active users
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemUsersRequest} Method that returns information about IdoSell Shop administration panel users.
 */
export const getSystemUsersProxy = (object) => {
    object.gate = { method: 'get', node: '/system/users' }
    return new Proxy(object, paramsProxy);
}