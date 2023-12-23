import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/rma/rma' }
    object.custom = {
        created: dateRange({"nodeName":"creationDate","fromName":"dateFrom","toName":"dateTo"}),
        modified: dateRange({"nodeName":"endDate","fromName":"dateFrom","toName":"dateTo"}),
        ended: dateRange({"nodeName":"modificationDate","fromName":"dateFrom","toName":"dateTo"}),
        page
    };
    return new Proxy(object, paramsProxy);
}