import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/groups/mainProduct' };
    object.appendable = {
        except: [],
        arrayNode: "groups",
        index: 0
    };
    object.req = ["productIdent"];
    object.arrays = ["groups"];
    return new Proxy(object, paramsProxy);
};
