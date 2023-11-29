import { paramsProxy } from "../params.js";

export const getSystemCurrenciesProxy = (object) => {
    object.gate = { method: 'get', node: '/system/currencies' }
    return new Proxy(object, paramsProxy);
}