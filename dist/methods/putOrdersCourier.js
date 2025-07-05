import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/courier' };
    object.req = ["orderSerialNumber", "courierId"];
    return new Proxy(object, paramsProxy);
};
