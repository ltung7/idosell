import { paramsProxy } from "../params.js";

export const postOrdersProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders' }
    object.appendable = {
        except: [],
        arrayNode: "orders",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}