import { paramsProxy } from "../params.js";

export const postVouchersProxy = (object) => {
    object.gate = { method: 'post', node: '/vouchers/vouchers' }
    object.appendable = {
        except: [],
        arrayNode: "vouchers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}