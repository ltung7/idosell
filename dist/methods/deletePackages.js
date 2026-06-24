import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'delete', node: '/packages/packages' };
    object.req = ["packageId"];
    return new Proxy(object, paramsProxy);
};
