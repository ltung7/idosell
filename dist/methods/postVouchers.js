import { paramsProxy } from "../params.js";

export const postVouchersProxy = (object) => {
    object.gate = { method: 'post', node: '/vouchers/vouchers' }
    return new Proxy(object, paramsProxy);
}