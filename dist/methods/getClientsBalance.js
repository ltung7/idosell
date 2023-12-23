import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/clients/balance' }
    object.custom = {
        lastPurchase: dateRange({"nodeName":"last_purchase_date","fromName":"from","toName":"to"}),
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}