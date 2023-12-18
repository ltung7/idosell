import { paramsProxy } from "../params.js";

export const getRefundsRetrieveRefundsListProxy = (object) => {
    object.gate = { method: 'get', node: '/refunds/retrieveRefundsList' }
    return new Proxy(object, paramsProxy);
}