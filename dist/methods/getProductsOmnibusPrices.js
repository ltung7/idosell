import { paramsProxy } from "../params.js";
import { getProductIdentList } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/omnibusPrices' };
    object.custom = {
        productId: getProductIdentList
    };
    return new Proxy(object, paramsProxy);
}