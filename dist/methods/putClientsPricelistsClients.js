import { paramsProxy } from "../params.js";

export const putClientsPricelistsClientsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/clients' }
    return new Proxy(object, paramsProxy);
}