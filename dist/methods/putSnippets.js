import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/snippets/snippets' };
    object.appendable = {
        except: [],
        arrayNode: "snippets",
        index: 0
    };
    object.req = ["id"];
    object.arrays = ["snippets"];
    return new Proxy(object, paramsProxy);
};
