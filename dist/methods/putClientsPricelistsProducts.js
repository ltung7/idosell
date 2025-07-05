import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/products' };
    object.req = ["priceListId"];
    object.arrays = ["products", "producers", "series", "categories", "menuItems"];
    return new Proxy(object, paramsProxy);
};
