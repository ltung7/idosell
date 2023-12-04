import { paramsProxy } from "../params.js";
import { dateRangeType, orderBy, arrayOfObjects, page } from "../helpers.js";

export const listProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products/get' }
    object.custom = {
        dates: dateRangeType({"nodeName":"productDate","fromName":"productDateBegin","toName":"productDateEnd","typeName":"productDateMode","defaultType":"added"}),
        orderBy,
        shops: arrayOfObjects("productShops", "shopId"),
        ids: arrayOfObjects("productParans", "productId"),
        producersIds: arrayOfObjects("producers", "producerId"),
        page
    };
    return new Proxy(object, paramsProxy);
}