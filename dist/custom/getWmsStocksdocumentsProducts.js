export default {
    imports: ['import { page } from "../helpers.js";'],
    props: [
        ' * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: String<"add", "modified", "dispatch", "payment", "last_payments_operation", "declared_payments">) => ListOrdersRequest} dates Type of date according to the orders are searched: "add", "modified", "dispatch", "payment", "last_payments_operation", "declared_payments"',
        ' * @property {(page: Integer, limit: Integer) => ListOrdersRequest} page Define page number and maximum results per page'
    ],
    functions: 
"        page: page(false)\r\n"
}