import { paramsProxy } from "../params.js";

export const postClientsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/clients' }
    return new Proxy(object, paramsProxy);
}