import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/warehouse' };
    object.req = ["orderSerialNumber", "stockId"];
    return new Proxy(object, paramsProxy);
};
