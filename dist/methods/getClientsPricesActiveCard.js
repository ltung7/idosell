import { paramsProxy } from "../params.js";

export const getClientsPricesActiveCardProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/prices/activeCard' }
    return new Proxy(object, paramsProxy);
}