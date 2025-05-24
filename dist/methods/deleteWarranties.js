import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/warranties/warranties/delete' };
    object.arrays = ["warranty_ids"];
    return new Proxy(object, paramsProxy);
};
