import { paramsProxy } from "../params.js";

export const postClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/giftcards' }
    return new Proxy(object, paramsProxy);
}