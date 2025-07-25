import { paramsProxy } from "../params.js";
import { dateRange, arrayOfObjects, page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/vouchers/vouchers' };
    object.custom = {
        issued: dateRange({ "fromName": "issueDateFrom", "toName": "issueDateTo" }),
        expires: dateRange({ "fromName": "expirationDateFrom", "toName": "expirationDateTo" }),
        used: dateRange({ "fromName": "usageDateFrom", "toName": "usageDateTo" }),
        ids: arrayOfObjects("vouchers", "id"),
        numbers: arrayOfObjects("vouchers", "number"),
        page
    };
    object.req = [{ "any": true }];
    return new Proxy(object, paramsProxy);
};
