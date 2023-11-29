import { paramsProxy } from "../params.js";

export const putClientsPricelistsRenameProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/rename' }
    return new Proxy(object, paramsProxy);
}