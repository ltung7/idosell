import { paramsProxy } from "../params.js";
import { dateRange, orderBy, page } from "../helpers.js";

export const getProductsOpinionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/opinions/opinions' }
    object.custom = {
        dates: dateRange({"nodeName":"dateRange","fromName":"begin","toName":"end"}),
        orderBy,
        page
    };
    return new Proxy(object, paramsProxy);
}