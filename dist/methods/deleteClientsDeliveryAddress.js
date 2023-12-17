import { paramsProxy } from "../params.js";

export const deleteClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/deliveryAddress/delete' }
    object.appendable = {
        except: [],
        arrayNode: "clients",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}