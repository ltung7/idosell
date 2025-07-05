import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/orders' };
    object.appendable = {
        except: [],
        arrayNode: "orders",
        index: 0
    };
    object.req = [{ "any": ["orderId", "orderSerialNumber"] }];
    object.arrays = ["orders"];
    return new Proxy(object, paramsProxy);
};
