import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/vouchers/vouchers/delete' };
    object.appendable = {
        except: [],
        arrayNode: "vouchers",
        index: 0
    };
    object.arrays = ["vouchers"];
    return new Proxy(object, paramsProxy);
};
