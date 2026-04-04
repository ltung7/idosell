import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'delete', node: '/promotions/promotions/delete' };
    object.req = ["promotionId"];
    return new Proxy(object, paramsProxy);
};
