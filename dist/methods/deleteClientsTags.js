import { paramsProxy } from "../params.js";

export const deleteClientsTagsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags/delete' }
    return new Proxy(object, paramsProxy);
}