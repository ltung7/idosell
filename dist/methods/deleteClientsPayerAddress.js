import { paramsProxy } from "../params.js";

export const deleteClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress/delete' }
    return new Proxy(object, paramsProxy);
}