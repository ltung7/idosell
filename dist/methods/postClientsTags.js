import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/tags' };
    object.rootparams = "params";
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    };
    object.arrays = ["params"];
    return new Proxy(object, paramsProxy);
};
