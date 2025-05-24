import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/images/delete' };
    object.appendable = {
        except: ["order"],
        arrayNode: "images",
        index: 0
    };
    object.arrays = ["images"];
    return new Proxy(object, paramsProxy);
};
