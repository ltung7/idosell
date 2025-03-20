import { paramsProxy } from "../params.js";
import { dateRangeType, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/returns/returns' };
    object.custom = {
        dates: dateRangeType({"nodeName":"range","fromName":"date_begin","toName":"date_end","typeName":"dates_type","defaultType":"date_add"}),
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}