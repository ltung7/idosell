import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists/products' };
    object.custom = {
        page
    };
    object.req = ["priceListId"];
    return new Proxy(object, paramsProxy);
};
