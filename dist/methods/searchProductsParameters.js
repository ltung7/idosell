import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'post', node: '/products/parameters/search' };
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}