import { paramsProxy } from "../params.js";

export const putVouchersUnblockProxy = (object) => {
    object.gate = { method: 'put', node: '/vouchers/unblock' }
    return new Proxy(object, paramsProxy);
}