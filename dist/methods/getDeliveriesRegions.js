import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/deliveries/regions' };
    object.req = ["shopId"];
    return new Proxy(object, paramsProxy);
};
