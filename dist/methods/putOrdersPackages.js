import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/packages' };
    object.appendable = {
        except: [],
        arrayNode: "orderPackages",
        index: 0
    };
    object.req = ["eventId", "eventType"];
    object.arrays = ["orderPackages"];
    return new Proxy(object, paramsProxy);
};
