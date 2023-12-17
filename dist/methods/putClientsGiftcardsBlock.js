import { paramsProxy } from "../params.js";

export const putClientsGiftcardsBlockProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards/block' }
    object.appendable = {
        except: [],
        arrayNode: "giftCards",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}