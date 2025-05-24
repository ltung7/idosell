import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards/unblock' };
    object.appendable = {
        except: [],
        arrayNode: "giftCards",
        index: 0
    };
    object.arrays = ["giftCards"];
    return new Proxy(object, paramsProxy);
};
