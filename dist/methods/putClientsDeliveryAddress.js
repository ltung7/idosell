import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/deliveryAddress' };
    object.appendable = {
        except: [],
        arrayNode: "clients",
        index: 0
    };
    object.req = ["clientLogin", "shopsIds", "clientDeliveryAddressId"];
    object.arrays = ["clients"];
    return new Proxy(object, paramsProxy);
};
