import { paramsProxy } from "../params.js";
import { nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/images' };
    object.params = { "userName": "api" };
    object.custom = {
        orderId: nest("orderId", "order", {}),
        orderSerialNumber: nest("orderSerialNumber", "order", {}),
        source: (value) => { object.params.settings = { sourceType: value.indexOf("http") === 0 ? "url" : "base64" }; return { source: value }; }
    };
    object.appendable = {
        except: ["userName", "settings", "order", "orderId", "orderSerialNumber"],
        arrayNode: "images",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
