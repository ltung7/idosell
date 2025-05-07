import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress/delete' };
    object.appendable = {
        except: [],
        arrayNode: "payers",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
