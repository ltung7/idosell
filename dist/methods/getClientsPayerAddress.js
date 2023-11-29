import { paramsProxy } from "../params.js";

export const getClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/payerAddress' }
    return new Proxy(object, paramsProxy);
}