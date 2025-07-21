import { paramsProxy } from "../params.js";
import { setOmp } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/omnibusPrices' };
    object.custom = {
        productId: (value, type = "id") => ({ ident: { type, value } }),
        setPrice: (price, wholesale = false) => setOmp(object, price, wholesale),
        mode: (manual = false) => setOmp(object, false, false, manual ? "manual" : "automatic")
    };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.req = ["ident"];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
