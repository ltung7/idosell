import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/snippets/cookies' };
    object.appendable = {
        except: [],
        arrayNode: "cookies",
        index: 0
    };
    object.req = ["snippetId"];
    object.arrays = ["cookies"];
    return new Proxy(object, paramsProxy);
};
