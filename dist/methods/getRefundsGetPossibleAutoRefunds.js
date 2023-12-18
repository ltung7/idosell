import { paramsProxy } from "../params.js";

export const getRefundsGetPossibleAutoRefundsProxy = (object) => {
    object.gate = { method: 'get', node: '/refunds/getPossibleAutoRefunds' }
    return new Proxy(object, paramsProxy);
}