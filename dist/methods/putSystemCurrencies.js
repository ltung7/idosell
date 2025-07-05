import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/system/currencies' };
    object.rootparams = true;
    object.appendable = {
        except: [],
        arrayNode: "currencies",
        index: 0
    };
    object.req = ["id", "rate", "scale"];
    object.arrays = ["currencies"];
    return new Proxy(object, paramsProxy);
};
