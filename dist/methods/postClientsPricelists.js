import { paramsProxy } from "../params.js";

export const postClientsPricelistsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/pricelists' }
    return new Proxy(object, paramsProxy);
}