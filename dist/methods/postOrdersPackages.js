import { paramsProxy } from "../params.js";

export const postOrdersPackagesProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/packages' }
    object.appendable = {
        except: [],
        arrayNode: "orderPackages",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}