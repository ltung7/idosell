import { paramsProxy } from "../params.js";

export const deleteVouchersProxy = (object) => {
    object.gate = { method: 'post', node: '/vouchers/vouchers/delete' }
    return new Proxy(object, paramsProxy);
}