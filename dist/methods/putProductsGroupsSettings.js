import { paramsProxy } from "../params.js";

export const putProductsGroupsSettingsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/settings' }
    object.appendable = {
        except: [],
        arrayNode: "groups",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}