import { paramsProxy } from "../params.js";

export const getClientsProfitPointsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/profitPoints' }
    return new Proxy(object, paramsProxy);
}