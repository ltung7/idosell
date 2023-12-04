import { paramsProxy } from "../params.js";
import { dateRangeType, orderBy, arrayOfObjects, page } from "../helpers.js";

export const listOrdersProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders/get' }
    object.custom = {
        dates: dateRangeType({"nodeName":"ordersDateRange","fromName":"ordersDateBegin","toName":"ordersDateEnd","typeName":"ordersDateType","format":"YYYY-MM-DD HH:mm:ss","nested":"ordersRange","defaultType":"add"}),
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