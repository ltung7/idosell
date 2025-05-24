import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/questions' };
    object.appendable = {
        except: [],
        arrayNode: "questions",
        index: 0
    };
    object.arrays = ["questions"];
    return new Proxy(object, paramsProxy);
};
