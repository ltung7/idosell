import { paramsProxy } from "../params.js";
import { nest, setProductDescription } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/descriptions' };
    object.custom = {
        productId: nest("identValue", "productIdent", { "productIdentType": "id" }),
        setText: setProductDescription(object)
    };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.req = ["productIdent"];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
