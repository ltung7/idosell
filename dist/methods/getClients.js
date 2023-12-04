import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export const getClientsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/clients' }
    object.custom = {
        lastPurchase: dateRange({"nodeName":"clientLastPurchaseDate","fromName":"clientLastPurchaseDateBegin","toName":"clientLastPurchaseDateEnd"}),
        lastModified: dateRange({"nodeName":"clientsLastModificationDate","fromName":"clientsLastModificationDateBegin","toName":"clientsLastModificationDateEnd"}),
        page
    };
    return new Proxy(object, paramsProxy);
}