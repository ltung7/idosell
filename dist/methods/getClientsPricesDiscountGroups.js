import { paramsProxy } from "../params.js";

export const getClientsPricesDiscountGroupsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/prices/discountGroups' }
    return new Proxy(object, paramsProxy);
}