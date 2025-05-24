import { paramsProxy } from "../params.js";
import { nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/descriptions' };
    object.custom = {
        productId: nest("identValue", "productIdent", { "productIdentType": "id" })
    };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
