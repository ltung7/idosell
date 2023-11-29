import { paramsProxy } from "../params.js";

export const getClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/giftcards' }
    return new Proxy(object, paramsProxy);
}