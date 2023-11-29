import { paramsProxy } from "../params.js";

export const putRmaProxy = (object) => {
    object.gate = { method: 'put', node: '/rma/rma' }
    return new Proxy(object, paramsProxy);
}