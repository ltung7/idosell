import { paramsProxy } from "../params.js";

export const deleteClientsTagsClearProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags/clear/delete' }
    return new Proxy(object, paramsProxy);
}