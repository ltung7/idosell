import { paramsProxy } from "../params.js";

export const putClientsGiftcardsUnblockProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards/unblock' }
    return new Proxy(object, paramsProxy);
}