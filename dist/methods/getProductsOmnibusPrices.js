import { paramsProxy } from "../params.js";
import { getProductIdentList } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/omnibusPrices' };
    object.custom = {
        productId: getProductIdentList
    };
    object.req = ["identType", "products"];
    return new Proxy(object, paramsProxy);
};
