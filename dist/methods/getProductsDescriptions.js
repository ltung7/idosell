import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/descriptions' };
    object.custom = {
        productId: (ids, type = "id") => ({ type, ids })
    };
    object.req = ["type", "ids"];
    return new Proxy(object, paramsProxy);
};
