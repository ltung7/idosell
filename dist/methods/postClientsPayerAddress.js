import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress' };
    object.appendable = {
        except: [],
        arrayNode: "payers",
        index: 0
    };
    object.req = ["clientId", "payerAddressCountryId", "payerAddressStreet", "payerAddressCity", "payerAddressZipCode", { "any": ["payerAddressFirstName", "payerAddressLastName", "payerAddressFirm"] }];
    object.arrays = ["payers"];
    return new Proxy(object, paramsProxy);
};
