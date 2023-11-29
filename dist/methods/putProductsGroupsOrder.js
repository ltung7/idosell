import { paramsProxy } from "../params.js";

export const putProductsGroupsOrderProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/order' }
    return new Proxy(object, paramsProxy);
}