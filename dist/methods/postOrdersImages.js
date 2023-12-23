import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/orders/images' }
    object.appendable = {
        except: ["userName","settings","order"],
        arrayNode: "images",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}