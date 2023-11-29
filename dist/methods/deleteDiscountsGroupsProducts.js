import { paramsProxy } from "../params.js";

export const deleteDiscountsGroupsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/groups/products/delete' }
    return new Proxy(object, paramsProxy);
}