import { paramsProxy } from "../params.js";

export const getClientsPricelistsClientsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists/clients' }
    return new Proxy(object, paramsProxy);
}