import { paramsProxy } from "../params.js";

export const getVouchersProxy = (object) => {
    object.gate = { method: 'get', node: '/vouchers/vouchers' }
    return new Proxy(object, paramsProxy);
}