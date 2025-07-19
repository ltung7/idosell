import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/orders/orders' };
    object.appendable = {
        except: [],
        arrayNode: "orders",
        index: 0
    };
    object.req = ["stockId", "orderPaymentType", "currencyId", "courierId", "clientWithoutAccount", "products", { "any": ["clientWithoutAccountData", "clientLogin"] }];
    object.arrays = ["orders"];
    return new Proxy(object, paramsProxy);
};
