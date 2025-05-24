import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/giftcards/search' };
    object.custom = {
        ids: arrayOfObjects("giftCards", "id"),
        number: arrayOfObjects("giftCards", "number"),
        pins: arrayOfObjects("giftCards", "pin")
    };
    object.arrays = ["giftCards"];
    return new Proxy(object, paramsProxy);
};
