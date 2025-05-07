import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/shippingCosts' };
    return new Proxy(object, paramsProxy);
};
