import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/productsSerialNumbers' };
    object.appendable = {
        except: [],
        arrayNode: "orders",
        index: 0
    };
    object.arrays = ["orders"];
    return new Proxy(object, paramsProxy);
};
