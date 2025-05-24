import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/responsibility/entities' };
    object.appendable = {
        except: ["type"],
        arrayNode: "entities",
        index: 0
    };
    object.arrays = ["entities"];
    return new Proxy(object, paramsProxy);
};
