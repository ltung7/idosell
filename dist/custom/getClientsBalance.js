export default {
    imports: ['import { page } from "../helpers.js";'],
    props: [
        ' * @property {(page: Integer, limit: Integer) => ListOrdersRequest} page Define page number and maximum results per page'
    ],
    functions: 
"        page: page(false)\r\n"
}