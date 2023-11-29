import { paramsProxy } from "../params.js";

export const putDiscountsRebatesUnblockCardProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/rebates/unblockCard' }
    return new Proxy(object, paramsProxy);
}