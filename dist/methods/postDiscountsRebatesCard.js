import { paramsProxy } from "../params.js";

export const postDiscountsRebatesCardProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/card' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}