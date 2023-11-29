import { paramsProxy } from "../params.js";

export const putProductsGroupsMainProductProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/mainProduct' }
    return new Proxy(object, paramsProxy);
}