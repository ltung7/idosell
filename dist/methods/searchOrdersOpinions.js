import { paramsProxy } from "../params.js";
import { nest, dateRange, orderBy, page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/opinions/search' };
    object.custom = {
        orderId: nest("value", "orders", { "type": "id" }),
        orderSerialNumber: nest("value", "orders", { "type": "serialNumber" }),
        clientId: nest("value", "clients", { "type": "id" }),
        clientLogin: nest("value", "clients", { "type": "login" }),
        clientCode: nest("value", "clients", { "type": "codeExtern" }),
        dates: dateRange({ "nodeName": "dateRange", "fromName": "begin", "toName": "end" }),
        orderBy,
        page
    };
    object.arrays = ["ordersBy"];
    return new Proxy(object, paramsProxy);
};
