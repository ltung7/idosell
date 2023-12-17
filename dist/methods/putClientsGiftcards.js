import { paramsProxy } from "../params.js";

export const putClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards' }
    object.appendable = {
        except: [],
        arrayNode: "giftCards",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}