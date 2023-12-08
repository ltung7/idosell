import { paramsProxy } from "../params.js";

export const putDiscountsRebatesUnblockCardProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/rebates/unblockCard' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}