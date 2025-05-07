import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/cpa/campaign' };
    object.appendable = {
        except: [],
        arrayNode: "campaigns",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
