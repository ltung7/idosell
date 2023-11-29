import { paramsProxy } from "../params.js";

export const putVouchersBlockProxy = (object) => {
    object.gate = { method: 'put', node: '/vouchers/block' }
    return new Proxy(object, paramsProxy);
}