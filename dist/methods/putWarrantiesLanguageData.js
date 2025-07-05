import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/warranties/languageData' };
    object.appendable = {
        except: [],
        arrayNode: "lang_data",
        index: 0
    };
    object.req = ["warranty_id", "lang"];
    object.arrays = ["lang_data"];
    return new Proxy(object, paramsProxy);
};
