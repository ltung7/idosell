import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/snippets/campaign' };
    object.appendable = {
        except: [],
        arrayNode: "campaigns",
        index: 0
    };
    object.req = ["name", "shop"];
    object.arrays = ["campaigns"];
    return new Proxy(object, paramsProxy);
};
