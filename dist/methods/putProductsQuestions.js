import { paramsProxy } from "../params.js";
import { nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/questions' };
    object.custom = {
        productId: nest("identValue", "productIdent", { "productIdentType": "id" })
    };
    object.appendable = {
        except: [],
        arrayNode: "questions",
        index: 0
    };
    object.arrays = ["questions"];
    return new Proxy(object, paramsProxy);
};
