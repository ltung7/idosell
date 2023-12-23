import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/clients/payerAddress' }
    object.appendable = {
        except: [],
        arrayNode: "payers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}