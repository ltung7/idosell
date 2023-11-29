import { paramsProxy } from "../params.js";

export const getSystemUsersProxy = (object) => {
    object.gate = { method: 'get', node: '/system/users' }
    return new Proxy(object, paramsProxy);
}