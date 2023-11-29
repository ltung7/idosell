import { paramsProxy } from "../params.js";

export const putReturnsProxy = (object) => {
    object.gate = { method: 'put', node: '/returns/returns' }
    return new Proxy(object, paramsProxy);
}