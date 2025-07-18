import { paramsProxy } from "../params.js";
import { dateRange } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/exportdocuments/EPP' };
    object.custom = {
        dates: dateRange({ "fromName": "dateBegin", "toName": "dateEnd" })
    };
    object.req = ["dateBegin", "dateEnd", "dateEnd", "applicationType", "documentType"];
    return new Proxy(object, paramsProxy);
};
