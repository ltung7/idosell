import { paramsProxy } from "../params.js";
import dayjs from "dayjs";
import { paramYesOrNo, page, dateRangeType } from "../helpers.js";

export const listOrdersProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders/get' }
    object.custom = {
        dates: dateRangeType({'name':'dates','nodeName':'ordersDateRange','nested':'ordersRange','fromName':'ordersDateBegin','toName':'ordersDateEnd','typeName':'ordersDateType','format':'YYYY-MM-DD HH:mm:ss','values':['add','modified','dispatch','payment','last_payments_operation','declared_payments']}),
        clientRequestInvoice: paramYesOrNo('clientRequestInvoice'),
        page: page()
    };
    return new Proxy(object, paramsProxy);
}