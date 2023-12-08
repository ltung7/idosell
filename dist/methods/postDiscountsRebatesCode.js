import { paramsProxy } from "../params.js";

export const postDiscountsRebatesCodeProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/code' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}