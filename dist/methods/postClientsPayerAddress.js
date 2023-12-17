import { paramsProxy } from "../params.js";

export const postClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress' }
    object.appendable = {
        except: [],
        arrayNode: "payers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}