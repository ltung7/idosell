import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/clients/membershipCards' };
    object.appendable = {
        except: ["id","login"],
        arrayNode: "membership_cards",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}