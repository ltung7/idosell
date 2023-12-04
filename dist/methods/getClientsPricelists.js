import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getClientsPricelistsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}