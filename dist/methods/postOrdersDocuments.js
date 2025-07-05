import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/documents' };
    object.appendable = {
        except: [],
        arrayNode: "documents",
        index: 0
    };
    object.req = ["orderSerialNumber", "name", "pdfBase64", "additionalData"];
    object.arrays = ["documents"];
    return new Proxy(object, paramsProxy);
};
