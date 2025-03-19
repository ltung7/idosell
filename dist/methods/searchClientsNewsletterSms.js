import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'post', node: '/clients/newsletter/sms/search' };
    object.custom = {
        dates: dateRange({"nodeName":"date","fromName":"from","toName":"to"}),
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}