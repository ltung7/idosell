import { paramsProxy } from "../params.js";

export const putSystemCurrenciesProxy = (object) => {
    object.gate = { method: 'put', node: '/system/currencies' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}