import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/promotions/promotions/edit' };
    object.rootparams = "request";
    object.req = ["promotionId"];
    object.arrays = ["activeInShops", "types"];
    return new Proxy(object, paramsProxy);
};
