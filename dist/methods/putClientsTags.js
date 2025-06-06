import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/tags' };
    object.appendable = {
        except: ["clientId"],
        arrayNode: "clientTags",
        index: 0
    };
    object.arrays = ["clientTags"];
    return new Proxy(object, paramsProxy);
};
