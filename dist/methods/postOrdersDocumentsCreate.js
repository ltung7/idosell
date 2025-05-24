import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/documents/create' };
    object.arrays = ["orderSerialNumbers"];
    return new Proxy(object, paramsProxy);
};
