import { paramsProxy } from "../params.js";

export const postClientsBalanceProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/balance' }
    return new Proxy(object, paramsProxy);
}