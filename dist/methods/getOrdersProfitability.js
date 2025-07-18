import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/profitability' };
    object.req = ["orderSerialNumber"];
    return new Proxy(object, paramsProxy);
};
