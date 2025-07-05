import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/supplierProductData' };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.req = ["productId"];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
