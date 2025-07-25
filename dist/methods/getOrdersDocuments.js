import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/documents' };
    object.req = ["orderSerialNumber", "documentType"];
    return new Proxy(object, paramsProxy);
};
