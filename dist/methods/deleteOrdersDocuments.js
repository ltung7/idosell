import { paramsProxy } from "../params.js";

export const deleteOrdersDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/documents/delete' }
    object.appendable = {
        except: [],
        arrayNode: "documents",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}