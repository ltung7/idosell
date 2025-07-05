import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/deliveryAddress' };
    object.req = ["orderSerialNumber", "clientDeliveryAddressId", "clientLogin"];
    return new Proxy(object, paramsProxy);
};
