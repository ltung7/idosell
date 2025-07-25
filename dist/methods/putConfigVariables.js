import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/config/variables' };
    object.appendable = {
        except: [],
        arrayNode: "variables",
        index: 0
    };
    object.req = ["key", "type", "itemId"];
    object.arrays = ["variables"];
    return new Proxy(object, paramsProxy);
};
