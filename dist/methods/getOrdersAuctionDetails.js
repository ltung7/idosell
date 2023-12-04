import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export const getOrdersAuctionDetailsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/auctionDetails' }
    object.custom = {
        ids: arrayOfObjects("orders", "identValue", {"identType":"orders_id"}),
        serialNumbers: arrayOfObjects("orders", "identValue", {"identType":"orders_sn"})
    };
    return new Proxy(object, paramsProxy);
}