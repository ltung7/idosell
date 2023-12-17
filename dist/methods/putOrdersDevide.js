import { paramsProxy } from "../params.js";

export const putOrdersDevideProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/devide' }
    object.appendable = {
        except: ["orderSerialNumber","splitPayments"],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}