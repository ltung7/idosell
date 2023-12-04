import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export const getOrdersAnalyticsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/analytics' }
    object.custom = {
        serialNumbers: arrayOfObjects("orders", "orderSerialNumber")
    };
    return new Proxy(object, paramsProxy);
}