import { paramsProxy } from "../params.js";
import { getProductIdentList } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/codeExistence' };
    object.custom = {
        productId: getProductIdentList
    };
    return new Proxy(object, paramsProxy);
}