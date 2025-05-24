import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/parameters/delete' };
    object.arrays = ["ids"];
    return new Proxy(object, paramsProxy);
};
