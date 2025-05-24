import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/cpa/campaign' };
    object.appendable = {
        except: [],
        arrayNode: "campaigns",
        index: 0
    };
    object.arrays = ["campaigns"];
    return new Proxy(object, paramsProxy);
};
