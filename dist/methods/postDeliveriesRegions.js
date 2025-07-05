import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/deliveries/regions' };
    object.req = ["parentRegionId"];
    return new Proxy(object, paramsProxy);
};
