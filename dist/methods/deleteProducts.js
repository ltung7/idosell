import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/products/delete' };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
