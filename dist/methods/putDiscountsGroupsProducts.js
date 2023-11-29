import { paramsProxy } from "../params.js";

export const putDiscountsGroupsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/groups/products' }
    return new Proxy(object, paramsProxy);
}