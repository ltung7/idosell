import { paramsProxy } from "../params.js";

export const putClientsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/clients' }
    return new Proxy(object, paramsProxy);
}