import { paramsProxy } from "../params.js";
import { dateRange } from "../helpers.js";

export const getOrdersExportdocumentsEPPProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/exportdocuments/EPP' }
    object.custom = {
        dates: dateRange({"fromName":"dateBegin","toName":"dateEnd"})
    };
    return new Proxy(object, paramsProxy);
}