import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'post', node: '/clients/crm/search' };
    object.custom = {
        registered: dateRange({"nodeName":"clientRegistrationDate","fromName":"clientRegistrationDateBegin","toName":"clientRegistrationDateEnd"}),
        lastLoggedIn: dateRange({"nodeName":"clientLastLoginDate","fromName":"clientLastLoginDateBegin","toName":"clientLastLoginDateEnd"}),
        ordered: dateRange({"nodeName":"ordersAddDate","fromName":"ordersAddDateBegin","toName":"ordersAddDateEnd"}),
        page
    };
    return new Proxy(object, paramsProxy);
}