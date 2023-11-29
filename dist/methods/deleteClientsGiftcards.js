import { paramsProxy } from "../params.js";

export const deleteClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/giftcards/delete' }
    return new Proxy(object, paramsProxy);
}