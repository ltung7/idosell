import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/promotions/add' };
    object.rootparams = "request";
    object.req = ["activeInShops", "newPriceValue", "name"];
    object.arrays = ["activeInShops", "types"];
    return new Proxy(object, paramsProxy);
};
