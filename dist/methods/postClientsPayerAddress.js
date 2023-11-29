import { paramsProxy } from "../params.js";

export const postClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress' }
    return new Proxy(object, paramsProxy);
}