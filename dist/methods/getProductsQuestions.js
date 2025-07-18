import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/questions' };
    object.req = [{ "any": ["id", "productId"] }];
    return new Proxy(object, paramsProxy);
};
