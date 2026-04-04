import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/elements/add' };
    object.rootparams = "request";
    object.appendable = {
        except: [],
        arrayNode: "elements",
        index: 0
    };
    object.req = ["promotionId", "id", "type"];
    object.arrays = ["elements"];
    return new Proxy(object, paramsProxy);
};
