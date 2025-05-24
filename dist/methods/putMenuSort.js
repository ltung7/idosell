import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/menu/sort' };
    object.rootparams = true;
    object.appendable = {
        except: ["settings"],
        arrayNode: "menu_list",
        index: 0
    };
    object.arrays = ["menu_list"];
    return new Proxy(object, paramsProxy);
};
