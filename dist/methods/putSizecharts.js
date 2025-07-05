import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/sizecharts/sizecharts' };
    object.appendable = {
        except: [],
        arrayNode: "sizeCharts",
        index: 0
    };
    object.req = ["id", "displayMode"];
    object.arrays = ["sizeCharts"];
    return new Proxy(object, paramsProxy);
};
