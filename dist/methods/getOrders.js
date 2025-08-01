import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/orders' };
    object.req = [{ "any": ["ordersIds", "ordersSerialNumbers", "orderExternalId"] }];
    return new Proxy(object, paramsProxy);
};
