import { paramsProxy } from "../params.js";

export const getVouchersTypesProxy = (object) => {
    object.gate = { method: 'get', node: '/vouchers/types' }
    return new Proxy(object, paramsProxy);
}