import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards' };
    object.custom = {
        add: (amount, currency = "PLN") => ({ balance: { amount, currency }, balanceOperationType: "add" }),
        subtract: (amount, currency = "PLN") => ({ balance: { amount, currency }, balanceOperationType: "subtract" }),
        set: (amount, currency = "PLN") => ({ balance: { amount, currency }, balanceOperationType: "set" })
    };
    object.appendable = {
        except: [],
        arrayNode: "giftCards",
        index: 0
    };
    object.req = [{ "any": ["id", "number"] }];
    object.arrays = ["giftCards"];
    return new Proxy(object, paramsProxy);
};
