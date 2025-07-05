import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/discounts/groups/products' };
    object.req = ["discountGroupId"];
    object.arrays = ["products", "producers", "series", "categories", "menuItems"];
    return new Proxy(object, paramsProxy);
};
