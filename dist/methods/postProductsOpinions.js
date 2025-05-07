import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/opinions/opinions' };
    object.appendable = {
        except: [],
        arrayNode: "opinions",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
