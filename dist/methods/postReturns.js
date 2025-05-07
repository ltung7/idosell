import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/returns/returns' };
    object.appendable = {
        except: ["order_sn", "stock_id", "status", "client_received", "change_status", "courier_id", "return_operator", "tryCorrectInvoice", "include_shipping_cost", "additional_payment_cost", "emptyReturn"],
        arrayNode: "products",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
