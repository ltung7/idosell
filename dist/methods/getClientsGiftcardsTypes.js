import { paramsProxy } from "../params.js";

export const getClientsGiftcardsTypesProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/giftcards/types' }
    return new Proxy(object, paramsProxy);
}