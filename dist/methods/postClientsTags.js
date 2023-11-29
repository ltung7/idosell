import { paramsProxy } from "../params.js";

export const postClientsTagsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags' }
    return new Proxy(object, paramsProxy);
}