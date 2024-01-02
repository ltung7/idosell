import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/products/productsToPromotion' };
    return new Proxy(object, paramsProxy);
}