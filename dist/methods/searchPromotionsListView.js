import { paramsProxy } from "../params.js";
import { orderByProperty, paginationObject, nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/promotions/listView/list' };
    object.rootparams = "request";
    object.custom = {
        orderByProperty,
        page: paginationObject,
        ids: nest("ids", "filter", {}, true),
        name: nest("name", "filter", {}, false),
        changeVisibility: nest("changeVisibility", "filter", {}, false),
        activeInShops: nest("activeInShops", "filter", {}, true),
        types: nest("types", "filter", {}, true),
        priceTypes: nest("priceTypes", "filter", {}, true),
        statuses: nest("statuses", "filter", {}, true),
        dateRange: nest("dateRange", "filter", {}, false),
        productsNotInPromotion: nest("productsNotInPromotion", "filter", {}, true)
    };
    object.paginationObject = true;
    return new Proxy(object, paramsProxy);
};
