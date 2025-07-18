import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/opinionsRate' };
    object.req = ["id", "operation"];
    return new Proxy(object, paramsProxy);
};
