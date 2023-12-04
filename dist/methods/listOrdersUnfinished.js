import { paramsProxy } from "../params.js";
import { orderBy, arrayOfObjects, page } from "../helpers.js";

export const listOrdersUnfinishedProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/unfinished/get' }
    object.custom = {
        orderBy,
        logins: arrayOfObjects("clients", "clientLogin", {"type":"login"}),
        clientIds: arrayOfObjects("clients", "clientId", {"type":"id"}),
        productIds: arrayOfObjects("products", "productId"),
        stockIds: arrayOfObjects("stocks", "stockId"),
        campaignIds: arrayOfObjects("campaign", "campaignId"),
        discountCodes: arrayOfObjects("campaign", "discountCodes"),
        page
    };
    return new Proxy(object, paramsProxy);
}