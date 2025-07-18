import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/images' };
    object.req = ["imageId"];
    return new Proxy(object, paramsProxy);
};
