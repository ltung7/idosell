import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/vouchers/block' };
    object.appendable = {
        except: [],
        arrayNode: "vouchers",
        index: 0
    };
    object.req = [{ "any": ["id", "number"] }];
    object.arrays = ["vouchers"];
    return new Proxy(object, paramsProxy);
};
