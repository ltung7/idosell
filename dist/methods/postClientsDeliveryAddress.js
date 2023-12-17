import { paramsProxy } from "../params.js";

export const postClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/deliveryAddress' }
    object.appendable = {
        except: [],
        arrayNode: "clients",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}