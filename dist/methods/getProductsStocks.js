import { paramsProxy } from "../params.js";
import { getProductIdentList } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/stocks' };
    object.custom = {
        productId: getProductIdentList
    };
    return new Proxy(object, paramsProxy);
};
