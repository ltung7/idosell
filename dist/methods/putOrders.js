import { paramsProxy } from "../params.js";

export const putOrdersProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/orders' }
    object.appendable = {
        except: [],
        arrayNode: "orders",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}