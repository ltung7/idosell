import { paramsProxy } from "../params.js";

export const putProductsAttachmentsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/attachments' }
    object.appendable = {
        except: [],
        arrayNode: "productsAttachments",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}