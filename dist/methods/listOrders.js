import { paramsProxy } from "../params.js";
import dayjs from "dayjs";
import { paramYesOrNo, page } from "../helpers.js";

export const listOrdersProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders/get' }
    object.custom = {
        dates: (dateFrom, dateTo = Date.now(), dateType = 'add') => {
            const ordersDateBegin = dayjs(dateFrom).format('YYYY-MM-DD HH:mm:ss');
            let ordersDateEnd = dayjs(dateTo).format('YYYY-MM-DD HH:mm:ss');
            return {
                ordersRange: { 
                    ordersDateRange: 
                    { 
                       ordersDateType: dateType, 
                        ordersDateBegin,
                        ordersDateEnd
                    }
                }
            }
        },
        clientRequestInvoice: paramYesOrNo('clientRequestInvoice'),
        page: page()
    };
    return new Proxy(object, paramsProxy);
}