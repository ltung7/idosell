import { paramsProxy } from "../params.js";
import { dateRangeType, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/openedDocuments' }
    object.custom = {
        dates: dateRangeType({"nodeName":"dateObject","fromName":"dateBegin","toName":"dateEnd","typeName":"dateType","format":"YYYY-MM-DD HH:mm:ss","defaultType":"open"}),
        page
    };
    return new Proxy(object, paramsProxy);
}