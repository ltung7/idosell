import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/deliveries/regions' };
    return new Proxy(object, paramsProxy);
};
