import { paramsProxy } from "../params.js";

export const putDiscountsRebatesBlockCardProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/rebates/blockCard' }
    return new Proxy(object, paramsProxy);
}