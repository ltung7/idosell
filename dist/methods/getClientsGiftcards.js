import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/clients/giftcards' };
    object.custom = {
        ids: arrayOfObjects("giftCards", "id"),
        number: arrayOfObjects("giftCards", "number"),
        pins: arrayOfObjects("giftCards", "pin")
    };
    return new Proxy(object, paramsProxy);
}