import { paramsProxy } from "../params.js";

export const getDiscountsGroupsClientsProxy = (object) => {
    object.gate = { method: 'get', node: '/discounts/groups/clients' }
    return new Proxy(object, paramsProxy);
}