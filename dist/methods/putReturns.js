import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/returns/returns' };
    object.appendable = {
        except: [],
        arrayNode: "returns",
        index: 0
    };
    object.req = ["id"];
    object.arrays = ["returns"];
    return new Proxy(object, paramsProxy);
};
