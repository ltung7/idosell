import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/categories' };
    object.appendable = {
        except: [],
        arrayNode: "categories",
        index: 0
    };
    object.arrays = ["categories"];
    return new Proxy(object, paramsProxy);
};
