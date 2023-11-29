import { paramsProxy } from "../params.js";

export const putClientsExternalCodeProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/externalCode' }
    return new Proxy(object, paramsProxy);
}