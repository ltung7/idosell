import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress' };
    object.appendable = {
        except: [],
        arrayNode: "payers",
        index: 0
    };
    object.arrays = ["payers"];
    return new Proxy(object, paramsProxy);
};
