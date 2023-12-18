import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getRefundsRetrieveRefundsListProxy = (object) => {
    object.gate = { method: 'get', node: '/refunds/retrieveRefundsList' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}