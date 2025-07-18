import { paramsProxy } from "../params.js";
import { getProductIdentList } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/stocks' };
    object.custom = {
        productId: getProductIdentList
    };
    object.req = ["identType", "products"];
    return new Proxy(object, paramsProxy);
};
