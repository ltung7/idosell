import { paramsProxy } from "../params.js";

export const putClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/payerAddress' }
    return new Proxy(object, paramsProxy);
}