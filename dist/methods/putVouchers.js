import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/vouchers/vouchers' };
    object.appendable = {
        except: [],
        arrayNode: "vouchers",
        index: 0
    };
    object.req = ["id"];
    object.arrays = ["vouchers"];
    return new Proxy(object, paramsProxy);
};
