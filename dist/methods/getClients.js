import { paramsProxy } from "../params.js";

export const getClientsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/clients' }
    return new Proxy(object, paramsProxy);
}