import { paramsProxy } from "../params.js";

export const putVouchersProxy = (object) => {
    object.gate = { method: 'put', node: '/vouchers/vouchers' }
    object.appendable = {
        except: [],
        arrayNode: "vouchers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}