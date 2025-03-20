import { paramsProxy } from "../params.js";
import { dateRangeType, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/returns/returns' };
    object.custom = {
        dates: dateRangeType({"nodeName":"range","fromName":"date][date_begin","toName":"date][date_end","typeName":"date][dates_type","defaultType":"date_add"}),
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}