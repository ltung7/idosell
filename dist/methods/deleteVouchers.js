import { paramsProxy } from "../params.js";

export const deleteVouchersProxy = (object) => {
    object.gate = { method: 'post', node: '/vouchers/vouchers/delete' }
    object.appendable = {
        except: [],
        arrayNode: "vouchers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}