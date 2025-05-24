import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/discounts/groups/products/delete' };
    object.arrays = ["products", "producers", "series", "categories", "menuItems"];
    return new Proxy(object, paramsProxy);
};
