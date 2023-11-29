import { paramsProxy } from "../params.js";

export const putProductsGroupsSettingsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/settings' }
    return new Proxy(object, paramsProxy);
}