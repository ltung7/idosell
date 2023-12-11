import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export const getClientsNewsletterEmailSMSProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/newsletterEmailSMS' }
    object.custom = {
        dates: dateRange({"nodeName":"date","fromName":"from","toName":"to"}),
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}