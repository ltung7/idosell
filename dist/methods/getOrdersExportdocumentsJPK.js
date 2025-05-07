import { paramsProxy } from "../params.js";
import { dateRange } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/exportdocuments/JPK' };
    object.custom = {
        dates: dateRange({ "fromName": "dateBegin", "toName": "dateEnd" })
    };
    return new Proxy(object, paramsProxy);
};
