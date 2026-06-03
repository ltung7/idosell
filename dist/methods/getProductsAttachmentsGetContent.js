import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/attachments/getContent' };
    object.req = ["productIdentValue", "productIdentType", "attachmentId"];
    return new Proxy(object, paramsProxy);
};
