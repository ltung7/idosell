export default {
    imports: ['import dayjs from "dayjs";', 'import { paramYesOrNo, page } from "../helpers.js";'],
    props: [
        ' * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: String<"add", "modified", "dispatch", "payment", "last_payments_operation", "declared_payments">) => ListOrdersRequest} dates Type of date according to the orders are searched: "add", "modified", "dispatch", "payment", "last_payments_operation", "declared_payments"',
        ' * @property {(page: Integer, limit: Integer) => ListOrdersRequest} page Define page number and maximum results per page'
    ],
    functions: 
"        dates: (dateFrom, dateTo = Date.now(), dateType = 'add') => {\r\n" + 
"            const ordersDateBegin = dayjs(dateFrom).format('YYYY-MM-DD HH:mm:ss');\r\n" + 
"            let ordersDateEnd = dayjs(dateTo).format('YYYY-MM-DD HH:mm:ss');\r\n" + 
"            return {\r\n" + 
"                ordersRange: { \r\n" + 
"                    ordersDateRange: \r\n" + 
"                    { \r\n" + 
"                       ordersDateType: dateType, \r\n" + 
"                        ordersDateBegin,\r\n" + 
"                        ordersDateEnd\r\n" + 
"                    }\r\n" + 
"                }\r\n" + 
"            }\r\n" + 
"        },\r\n" + 
"        clientRequestInvoice: paramYesOrNo('clientRequestInvoice'),\r\n" + 
"        page: page()\r\n"
}