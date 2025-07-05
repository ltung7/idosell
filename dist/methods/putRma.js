import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/rma/rma' };
    object.appendable = {
        except: [],
        arrayNode: "rmas",
        index: 0
    };
    object.req = ["rmaId"];
    object.arrays = ["rmas"];
    return new Proxy(object, paramsProxy);
};
