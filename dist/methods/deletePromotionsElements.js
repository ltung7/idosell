import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/elements/remove' };
    object.rootparams = "request";
    object.appendable = {
        except: [],
        arrayNode: "elements",
        index: 0
    };
    object.req = ["promotionId", "type", "id"];
    object.arrays = ["elements"];
    return new Proxy(object, paramsProxy);
};
