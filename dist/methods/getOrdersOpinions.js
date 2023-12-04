import { paramsProxy } from "../params.js";
import { dateRange, orderBy, page } from "../helpers.js";

export const getOrdersOpinionsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/opinions' }
    object.custom = {
        dates: dateRange({"nodeName":"dateRange","fromName":"begin","toName":"end"}),
        orderBy,
        page
    };
    return new Proxy(object, paramsProxy);
}