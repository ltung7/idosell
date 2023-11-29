import { paramsProxy } from "../params.js";

export const getProductsAuctionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/auctions' }
    return new Proxy(object, paramsProxy);
}