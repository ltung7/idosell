import { paramsProxy } from "../params.js";

export const getClientsCrmProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/crm' }
    return new Proxy(object, paramsProxy);
}