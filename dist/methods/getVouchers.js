import { paramsProxy } from "../params.js";
import { arrayOfObjects, page } from "../helpers.js";

export const getVouchersProxy = (object) => {
    object.gate = { method: 'get', node: '/vouchers/vouchers' }
    object.custom = {
        ids: arrayOfObjects("vouchers", "id"),
        numbers: arrayOfObjects("vouchers", "number"),
        page
    };
    return new Proxy(object, paramsProxy);
}