import { paramsProxy } from "../params.js";
import { nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/attachments' };
    object.custom = {
        productId: nest("identValue", "productIdent", { "productIdentType": "id" })
    };
    object.appendable = {
        except: [],
        arrayNode: "productsAttachments",
        index: 0
    };
    object.req = ["productIdent", { "any": ["attachments", "virtualAttachments"] }];
    object.arrays = ["productsAttachments"];
    return new Proxy(object, paramsProxy);
};
