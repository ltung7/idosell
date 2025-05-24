import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/brands/delete' };
    object.arrays = ["ids"];
    return new Proxy(object, paramsProxy);
};
