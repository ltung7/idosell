import { paramsProxy } from "../params.js";

export const getOrdersAuctionDetailsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/auctionDetails' }
    return new Proxy(object, paramsProxy);
}