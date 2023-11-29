import { paramsProxy } from "../params.js";

export const putSystemCurrenciesProxy = (object) => {
    object.gate = { method: 'put', node: '/system/currencies' }
    return new Proxy(object, paramsProxy);
}