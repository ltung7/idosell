import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getClientsBalanceProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/balance' }
    object.custom = {
        page: page(false)
    };
    return new Proxy(object, paramsProxy);
}