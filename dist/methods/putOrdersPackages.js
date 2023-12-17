import { paramsProxy } from "../params.js";

export const putOrdersPackagesProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/packages' }
    object.appendable = {
        except: [],
        arrayNode: "orderPackages",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}