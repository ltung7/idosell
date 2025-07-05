import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/sizes/sizes' };
    object.appendable = {
        except: [],
        arrayNode: "sizes",
        index: 0
    };
    object.req = ["id", "operation"];
    object.arrays = ["sizes"];
    return new Proxy(object, paramsProxy);
};
