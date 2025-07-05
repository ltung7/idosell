import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/collections/products' };
    object.rootparams = true;
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    };
    object.req = ["collectionId", "products"];
    object.arrays = ["params"];
    return new Proxy(object, paramsProxy);
};
