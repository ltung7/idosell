import { paramsProxy } from "../params.js";

export const getRmaProxy = (object) => {
    object.gate = { method: 'get', node: '/rma/rma' }
    return new Proxy(object, paramsProxy);
}