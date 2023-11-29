import { paramsProxy } from "../params.js";

export const postClientsProfitPointsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/profitPoints' }
    return new Proxy(object, paramsProxy);
}