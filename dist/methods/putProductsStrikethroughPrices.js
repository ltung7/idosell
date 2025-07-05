import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/strikethroughPrices' };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.req = ["ident", "sizes"];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
