import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/restore' };
    object.rootparams = true;
    object.req = ["productId"];
    return new Proxy(object, paramsProxy);
};
