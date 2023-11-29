import { paramsProxy } from "../params.js";

export const putClientsPricelistsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists' }
    return new Proxy(object, paramsProxy);
}