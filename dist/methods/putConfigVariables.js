import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/config/variables' };
    object.appendable = {
        except: [],
        arrayNode: "variables",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
