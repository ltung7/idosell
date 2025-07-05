import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards/block' };
    object.appendable = {
        except: [],
        arrayNode: "giftCards",
        index: 0
    };
    object.req = [{ "any": ["id", "number"] }];
    object.arrays = ["giftCards"];
    return new Proxy(object, paramsProxy);
};
