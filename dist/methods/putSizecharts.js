import { paramsProxy } from "../params.js";

export const putSizechartsProxy = (object) => {
    object.gate = { method: 'put', node: '/sizecharts/sizecharts' }
    object.appendable = {
        except: [],
        arrayNode: "sizeCharts",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}