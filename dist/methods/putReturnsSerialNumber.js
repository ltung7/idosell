import { paramsProxy } from "../params.js";

export const putReturnsSerialNumberProxy = (object) => {
    object.gate = { method: 'put', node: '/returns/serialNumber' }
    return new Proxy(object, paramsProxy);
}