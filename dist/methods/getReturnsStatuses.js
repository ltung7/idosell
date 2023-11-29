import { paramsProxy } from "../params.js";

export const getReturnsStatusesProxy = (object) => {
    object.gate = { method: 'get', node: '/returns/statuses' }
    return new Proxy(object, paramsProxy);
}