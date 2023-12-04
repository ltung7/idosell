import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getClientsNewsletterEmailShopsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/newsletterEmailShops' }
    object.custom = {
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}