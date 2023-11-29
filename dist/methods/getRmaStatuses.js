import { paramsProxy } from "../params.js";

export const getRmaStatusesProxy = (object) => {
    object.gate = { method: 'get', node: '/rma/statuses' }
    return new Proxy(object, paramsProxy);
}