import { paramsProxy } from "../params.js";
import { arrayOfObjects, page } from "../helpers.js";

export const getProductsAuctionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/auctions' }
    object.custom = {
        ids: arrayOfObjects("products", "identValue", {"identType":"id"}),
        page
    };
    return new Proxy(object, paramsProxy);
}