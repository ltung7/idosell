import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/snippets/snippets' };
    object.appendable = {
        except: [],
        arrayNode: "snippets",
        index: 0
    };
    object.arrays = ["snippets"];
    return new Proxy(object, paramsProxy);
};
