import { paramsProxy } from "../params.js";
import { nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/auctionDetails' };
    object.custom = {
        ids: nest("orders", "", { "identType": "order_id" }, true),
        serialNumbers: nest("orders", "", { "identType": "orders_sn" }, true)
    };
    return new Proxy(object, paramsProxy);
};
