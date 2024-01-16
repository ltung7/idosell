import { paramsProxy } from "../params.js";
import { getProductIdent } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/strikethroughPrices' };
    object.auth.version = 1;
    object.custom = {
        productId: getProductIdent
    };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}