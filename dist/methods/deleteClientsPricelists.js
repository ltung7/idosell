import { paramsProxy } from "../params.js";

export const deleteClientsPricelistsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/pricelists/delete' }
    return new Proxy(object, paramsProxy);
}