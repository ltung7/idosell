import { paramsProxy } from "../params.js";

export const putProductsGroupsOrderProxy = (object) => {
    object.gate = { method: 'put', node: '/products/groups/order' }
    object.appendable = {
        except: [],
        arrayNode: "groups",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}