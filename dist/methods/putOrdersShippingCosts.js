import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/shippingCosts' };
    object.req = ["orderSerialNumber", "deliveryCost"];
    return new Proxy(object, paramsProxy);
};
