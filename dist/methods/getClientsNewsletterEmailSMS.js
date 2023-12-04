import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getClientsNewsletterEmailSMSProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/newsletterEmailSMS' }
    object.custom = {
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}