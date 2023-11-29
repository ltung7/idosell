import { paramsProxy } from "../params.js";

export const getClientsPricelistsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists' }
    return new Proxy(object, paramsProxy);
}