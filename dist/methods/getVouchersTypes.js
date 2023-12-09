import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getVouchersTypesProxy = (object) => {
    object.gate = { method: 'get', node: '/vouchers/types' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}