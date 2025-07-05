import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/productsSerialNumbers' };
    object.appendable = {
        except: [],
        arrayNode: "orders",
        index: 0
    };
    object.req = ["orderSerialNumber", "orderProducts"];
    object.arrays = ["orders"];
    return new Proxy(object, paramsProxy);
};
