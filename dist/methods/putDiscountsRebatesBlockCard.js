import { paramsProxy } from "../params.js";

export const putDiscountsRebatesBlockCardProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/rebates/blockCard' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}