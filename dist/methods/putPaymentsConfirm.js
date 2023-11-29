import { paramsProxy } from "../params.js";

export const putPaymentsConfirmProxy = (object) => {
    object.gate = { method: 'put', node: '/payments/confirm' }
    return new Proxy(object, paramsProxy);
}