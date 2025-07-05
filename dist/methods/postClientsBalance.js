import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/balance' };
    object.custom = {
        add: (balance, currency = "PLN") => ({ operation: "add", balance, currency }),
        remove: (balance, currency = "PLN") => ({ operation: "remove", balance, currency })
    };
    object.req = ["clientId", "operation", "balance", "currency"];
    return new Proxy(object, paramsProxy);
};
