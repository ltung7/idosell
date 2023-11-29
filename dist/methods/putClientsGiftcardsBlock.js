import { paramsProxy } from "../params.js";

export const putClientsGiftcardsBlockProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards/block' }
    return new Proxy(object, paramsProxy);
}