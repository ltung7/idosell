import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/listView/fetchIds' };
    object.rootparams = "filter";
    object.arrays = ["ids", "statuses"];
    return new Proxy(object, paramsProxy);
};
