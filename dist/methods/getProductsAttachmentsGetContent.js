import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/attachments/getContent' };
    return new Proxy(object, paramsProxy);
};
