import { paramsProxy } from "../params.js";

export const putProductsGroupsMainProductProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/mainProduct' }
    object.appendable = {
        except: [],
        arrayNode: "groups",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}