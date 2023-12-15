import { paramsProxy } from "../params.js";

export const putClientsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/clients' }
    object.appendable = {
        except: ["clientsSettings"],
        arrayNode: "clients",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}