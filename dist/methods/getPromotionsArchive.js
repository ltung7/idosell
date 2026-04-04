import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/promotions/promotionsArchive/get' };
    object.req = ["promotionId"];
    return new Proxy(object, paramsProxy);
};
