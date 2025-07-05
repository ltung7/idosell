import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/deliveryAddress' };
    object.appendable = {
        except: [],
        arrayNode: "clients",
        index: 0
    };
    object.req = ["clientLogin", "shopsIds", "clientDeliveryAddressCity", "clientDeliveryAddressZipCode", "clientDeliveryAddressStreet", "clientDeliveryAddressFirstName", "clientDeliveryAddressLastName"];
    object.arrays = ["clients"];
    return new Proxy(object, paramsProxy);
};
