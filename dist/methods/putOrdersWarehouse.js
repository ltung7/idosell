import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/warehouse' };
    return new Proxy(object, paramsProxy);
};
