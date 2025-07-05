import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/system/config' };
    object.req = ["panelSettings"];
    return new Proxy(object, paramsProxy);
};
