import { paramsProxy } from "../params.js";
import { setStp } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/strikethroughPrices' };
    object.custom = {
        productId: (value, type = "id") => ({ ident: { type, value } }),
        setPrice: (value, wholesale = false) => setStp(object, value, wholesale),
        addPrice: (value, wholesale = false, base = "price") => setStp(object, value, wholesale, base, "amount_diff"),
        addPricePercent: (value, wholesale = false, base = "price") => setStp(object, value, wholesale, base, "percent_diff")
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
