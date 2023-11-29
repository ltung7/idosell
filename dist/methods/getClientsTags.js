import { paramsProxy } from "../params.js";

export const getClientsTagsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/tags' }
    return new Proxy(object, paramsProxy);
}