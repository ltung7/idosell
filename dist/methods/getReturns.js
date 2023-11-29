import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getReturnsProxy = (object) => {
    object.gate = { method: 'get', node: '/returns/returns' }
    object.custom = {
        page: page(false)
    };
    return new Proxy(object, paramsProxy);
}