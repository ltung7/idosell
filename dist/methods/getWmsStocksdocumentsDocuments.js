import { paramsProxy } from "../params.js";
import { dateRangeType, page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/documents' };
    object.custom = {
        dates: dateRangeType({ "nodeName": "dateRange", "fromName": "dateBegin", "toName": "dateEnd", "typeName": "dateType", "format": "YYYY-MM-DD HH:mm:ss", "defaultType": "open" }),
        page
    };
    object.req = ["stockDocumentType"];
    return new Proxy(object, paramsProxy);
};
