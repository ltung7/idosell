import { paramsProxy } from "../params.js";

export const getClientsProvinceListProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/provinceList' }
    return new Proxy(object, paramsProxy);
}