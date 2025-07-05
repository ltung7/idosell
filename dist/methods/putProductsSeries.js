import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/series' };
    object.appendable = {
        except: [],
        arrayNode: "series",
        index: 0
    };
    object.req = ["id"];
    object.arrays = ["series"];
    return new Proxy(object, paramsProxy);
};
