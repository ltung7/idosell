import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/bundles/products' };
    object.rootparams = true;
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    };
    object.arrays = ["params"];
    return new Proxy(object, paramsProxy);
};
