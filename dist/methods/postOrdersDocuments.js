import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/documents' };
    object.custom = {
        date: (date) => ({ additionalData: { documentIssuedDate: date } })
    };
    object.appendable = {
        except: [],
        arrayNode: "documents",
        index: 0
    };
    object.req = ["orderSerialNumber", "name"];
    object.arrays = ["documents"];
    return new Proxy(object, paramsProxy);
};
