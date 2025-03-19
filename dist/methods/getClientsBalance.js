import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/clients/balance' };
    object.custom = {
        lastPurchased: dateRange({"nodeName":"lastPurchaseDate","fromName":"from","toName":"to"}),
        page
    };
    return new Proxy(object, paramsProxy);
}