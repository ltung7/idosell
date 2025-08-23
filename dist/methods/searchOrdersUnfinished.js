import { paramsProxy } from "../params.js";
import { nest, dateRangeType, orderBy, arrayOfObjects, orderSource, page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/unfinished/search' };
    object.custom = {
        shopIds: nest("shopsIds", "orderSource", {}, true),
        byPackageNumbers: nest("packagesNumbers", "packages", { "orderHasPackageNumbers": "y" }, true),
        dates: dateRangeType({ "nodeName": "ordersDateRange", "fromName": "ordersDateBegin", "toName": "ordersDateEnd", "typeName": "ordersDateType", "format": "YYYY-MM-DD HH:mm:ss", "nested": "ordersRange", "defaultType": "add" }),
        orderBy,
        logins: arrayOfObjects("clients", "clientLogin", { "type": "login" }),
        clientIds: arrayOfObjects("clients", "clientId", { "type": "id" }),
        productIds: arrayOfObjects("products", "productId"),
        stockIds: arrayOfObjects("stocks", "stockId"),
        campaignIds: arrayOfObjects("campaign", "campaignId"),
        discountCodes: arrayOfObjects("campaign", "discountCodes"),
        hasProduct: (productId, sizeId) => { const product = { productId }; if (sizeId)
            product.sizeId = sizeId; return { products: [product] }; },
        hasPackage: (orderHasPackage = true) => ({ packages: { orderHasPackageNumbers: orderHasPackage ? "y" : "n" } }),
        fromAllegro: orderSource("allegro"),
        fromEbay: orderSource("ebay"),
        fromAmazon: orderSource("amazon"),
        page
    };
    object.arrays = ["ordersStatuses", "ordersStatusesIds", "couriersName", "ordersIds", "ordersSerialNumbers", "clients", "products", "stocks", "ordersBy"];
    return new Proxy(object, paramsProxy);
};
