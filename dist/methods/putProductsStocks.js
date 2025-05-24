import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/stocks' };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
