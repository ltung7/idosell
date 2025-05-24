import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/system/currencies' };
    object.rootparams = "currencies";
    object.appendable = {
        except: [],
        arrayNode: "currencies",
        index: 0
    };
    object.arrays = ["currencies"];
    return new Proxy(object, paramsProxy);
};
