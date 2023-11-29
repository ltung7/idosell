import { paramsProxy } from "../params.js";

export const putVouchersProxy = (object) => {
    object.gate = { method: 'put', node: '/vouchers/vouchers' }
    return new Proxy(object, paramsProxy);
}