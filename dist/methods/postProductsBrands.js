import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/brands' };
    object.appendable = {
        except: [],
        arrayNode: "producers",
        index: 0
    };
    object.req = ["nameInPanel"];
    object.arrays = ["producers"];
    return new Proxy(object, paramsProxy);
};
