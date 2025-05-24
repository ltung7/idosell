import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/cpa/cpa' };
    object.appendable = {
        except: [],
        arrayNode: "cpa",
        index: 0
    };
    object.arrays = ["cpa"];
    return new Proxy(object, paramsProxy);
};
