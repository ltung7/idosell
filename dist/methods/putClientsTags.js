import { paramsProxy } from "../params.js";

export const putClientsTagsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/tags' }
    return new Proxy(object, paramsProxy);
}