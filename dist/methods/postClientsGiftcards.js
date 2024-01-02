import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/clients/giftcards' };
    object.appendable = {
        except: [],
        arrayNode: "giftCards",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}