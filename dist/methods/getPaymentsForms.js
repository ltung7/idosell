import { paramsProxy } from "../params.js";

export const getPaymentsFormsProxy = (object) => {
    object.gate = { method: 'get', node: '/payments/forms' }
    return new Proxy(object, paramsProxy);
}