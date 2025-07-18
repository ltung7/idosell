import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/SKUbyBarcode' };
    object.req = ["productIndices"];
    return new Proxy(object, paramsProxy);
};
