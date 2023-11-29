import { paramsProxy } from "../params.js";

export const deleteDiscountsRebatesCodeProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/code/delete' }
    return new Proxy(object, paramsProxy);
}