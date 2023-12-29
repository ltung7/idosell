import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/marketingZones' }
    return new Proxy(object, paramsProxy);
}