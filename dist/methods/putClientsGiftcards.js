import { paramsProxy } from "../params.js";

export const putClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards' }
    return new Proxy(object, paramsProxy);
}