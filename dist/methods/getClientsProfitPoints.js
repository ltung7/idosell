import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getClientsProfitPointsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/profitPoints' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}