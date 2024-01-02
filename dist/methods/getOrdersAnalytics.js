import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/orders/analytics' };
    object.custom = {
        serialNumbers: arrayOfObjects("orders", "orderSerialNumber")
    };
    return new Proxy(object, paramsProxy);
}